/* In-browser port of the report-migration-validator Python package
   (github.com/Srushti-4/report-migration-validator) for the live demo.
   Same rules: key-level comparison with tolerance, rule-based findings,
   and row-level entitlement checks. Rows are plain objects. */

export const MATCH = 'match';
export const MISMATCH = 'mismatch';
export const MISSING = 'missing_in_migrated';
export const EXTRA = 'extra_in_migrated';
export const STATUS_LABELS = { [MISMATCH]: 'Mismatch', [MISSING]: 'Missing in migrated', [EXTRA]: 'Extra in migrated' };
const CONCENTRATION = 0.6;

/* ---------------- sample data (same planted defects as the Python version) */

function mulberry32(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const round2 = (x) => Math.round(x * 100) / 100;

export const SAMPLE_KEYS = ['month', 'region', 'product'];
const OWNERS = { North: 'Asha Rao', South: 'Ravi Kumar', East: 'Meera Shah', West: 'Arjun Nair' };

export function makeReports(seed = 42) {
  const rand = mulberry32(seed);
  const legacy = [];
  for (const month of ['2025-01', '2025-02', '2025-03', '2025-04', '2025-05', '2025-06']) {
    for (const region of ['North', 'South', 'East', 'West']) {
      for (const product of ['A', 'B', 'C', 'D', 'E']) {
        const units = 50 + Math.floor(rand() * 450);
        const revenue = round2(units * (20 + rand() * 100));
        legacy.push({ month, region, product, units, revenue, cost: round2(revenue * (0.55 + rand() * 0.25)), owner: OWNERS[region] });
      }
    }
  }
  const migrated = legacy
    .filter((r) => !(r.region === 'West' && r.month === '2025-06'))            // 1. missing slice
    .map((r) => ({
      ...r,
      revenue: r.region === 'East' ? round2(r.revenue * 1.18) : r.revenue,     // 2. 18% uplift
      owner: r.region === 'South' ? `${r.owner.toUpperCase()}  ` : r.owner,    // 3. formatting drift
    }));
  migrated.push(                                                               // 4. leaked test rows
    { month: '2025-06', region: 'North', product: 'F', units: 10, revenue: 999, cost: 600, owner: 'Asha Rao' },
    { month: '2025-06', region: 'South', product: 'F', units: 12, revenue: 1199, cost: 700, owner: 'RAVI KUMAR  ' },
  );
  return { legacy, migrated };
}

/* ---------------- CSV */

export function parseCSV(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((v) => v !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((v) => v !== '')) rows.push(row);
  if (!rows.length) return [];
  const [head, ...body] = rows;
  const cols = head.map((h) => h.trim());
  const numeric = cols.map((_, j) => body.every((r) => (r[j] ?? '').trim() === '' || !Number.isNaN(Number(r[j]))));
  return body.map((r) => Object.fromEntries(cols.map((c, j) => {
    const v = (r[j] ?? '');
    if (v.trim() === '') return [c, null];
    return [c, numeric[j] ? Number(v) : v];
  })));
}

export function toCSV(rows, cols) {
  const esc = (v) => (v == null ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  return [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n');
}

/* ---------------- comparison */

export const columnsOf = (rows) => (rows.length ? Object.keys(rows[0]) : []);
export const isNumericCol = (rows, c) => rows.every((r) => r[c] == null || typeof r[c] === 'number');
const keyOf = (r, keys) => keys.map((k) => String(r[k] ?? '').trim()).join('\u0001');

function indexRows(rows, keys, name) {
  const map = new Map();
  for (const r of rows) {
    const k = keyOf(r, keys);
    if (map.has(k)) throw new Error(`The ${name} report has duplicate rows for keys ${keys.join(', ')} - choose keys that identify one row each.`);
    map.set(k, r);
  }
  return map;
}

export function compareReports(legacy, migrated, keys, absTol = 0.01) {
  if (!keys.length) throw new Error('Choose at least one key column.');
  const L = indexRows(legacy, keys, 'legacy');
  const M = indexRows(migrated, keys, 'migrated');
  const shared = columnsOf(legacy).filter((c) => columnsOf(migrated).includes(c) && !keys.includes(c));
  const measures = shared.filter((c) => isNumericCol(legacy, c) && isNumericCol(migrated, c));
  const attributes = shared.filter((c) => !measures.includes(c));

  const allKeys = [...new Set([...L.keys(), ...M.keys()])].sort();
  const rows = allKeys.map((k) => {
    const l = L.get(k), m = M.get(k);
    const parts = k.split('\u0001');
    const row = Object.fromEntries(keys.map((key, i) => [key, parts[i]]));
    const bad = [];
    for (const c of shared) {
      row[`${c}_legacy`] = l ? l[c] ?? null : null;
      row[`${c}_migrated`] = m ? m[c] ?? null : null;
    }
    if (l && m) {
      for (const c of measures) {
        const a = l[c], b = m[c];
        const same = (a == null && b == null) || (a != null && b != null && Math.abs(b - a) <= absTol);
        if (!same) bad.push(c);
      }
      for (const c of attributes) {
        const a = l[c] ?? null, b = m[c] ?? null;
        if (a !== b) bad.push(c);
      }
    }
    row.mismatched_columns = bad.join(', ');
    row.status = !m ? MISSING : !l ? EXTRA : bad.length ? MISMATCH : MATCH;
    return row;
  });

  const sum = (rs, c) => rs.reduce((s, r) => s + (typeof r[c] === 'number' ? r[c] : 0), 0);
  const totals = measures.map((c) => {
    const lt = sum(legacy, c), mt = sum(migrated, c);
    return { measure: c, legacy: round2(lt), migrated: round2(mt), difference: round2(mt - lt), pct: lt ? round2(((mt - lt) / lt) * 100) : null };
  });
  const count = (s) => rows.filter((r) => r.status === s).length;
  const matched = count(MATCH);
  const summary = {
    legacyRows: legacy.length, migratedRows: migrated.length, compared: rows.length, matched,
    mismatched: count(MISMATCH), missing: count(MISSING), extra: count(EXTRA),
    matchRate: rows.length ? round2((matched / rows.length) * 100) : 100,
    passed: matched === rows.length, absTol,
  };
  return { keys, measures, attributes, rows, totals, summary, issues: rows.filter((r) => r.status !== MATCH) };
}

export function issueCounts(result, by) {
  const groups = new Map();
  for (const r of result.issues) {
    const g = groups.get(r[by]) || { label: r[by], [MISMATCH]: 0, [MISSING]: 0, [EXTRA]: 0 };
    g[r.status] += 1;
    groups.set(r[by], g);
  }
  return [...groups.values()].sort((a, b) => String(a.label).localeCompare(String(b.label)));
}

/* ---------------- findings */

function concentration(rows, keys) {
  if (rows.length < 2) return [];
  const notes = [];
  for (const k of keys) {
    const counts = new Map();
    rows.forEach((r) => counts.set(r[k], (counts.get(r[k]) || 0) + 1));
    const [top, n] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
    if (n / rows.length >= CONCENTRATION) notes.push(`${k} = ${top} (${n} of ${rows.length})`);
  }
  return notes;
}

function measurePattern(rows, c) {
  const pairs = rows.map((r) => [r[`${c}_legacy`], r[`${c}_migrated`]]).filter(([a, b]) => a != null && b != null);
  if (!pairs.length) return 'values are null on one side';
  if (pairs.every(([a, b]) => Math.abs(a + b) < 1e-9)) return 'sign is flipped (migrated = -legacy)';
  const ratios = pairs.filter(([a]) => a !== 0).map(([a, b]) => Math.round((b / a) * 10000) / 10000);
  if (ratios.length && ratios.every((x) => x === ratios[0]) && ratios[0] !== 1) {
    const pct = (ratios[0] - 1) * 100;
    return `migrated is consistently ${Math.abs(pct).toFixed(1)}% ${pct > 0 ? 'higher' : 'lower'} (x${ratios[0]}) - looks like a multiplier, e.g. tax, FX or unit conversion`;
  }
  const diffs = pairs.map(([a, b]) => Math.round((b - a) * 1e6) / 1e6);
  if (diffs.every((d) => d === diffs[0])) return `constant offset of ${diffs[0] > 0 ? '+' : ''}${diffs[0]} on every affected row`;
  if (diffs.every((d) => Math.abs(d) < 1)) return 'differences are all below 1 - likely rounding or precision changes';
  return null;
}

function textPattern(rows, c) {
  const norm = (v) => String(v ?? '').trim().toLowerCase();
  return rows.every((r) => norm(r[`${c}_legacy`]) === norm(r[`${c}_migrated`]))
    ? 'only case/whitespace differs - a formatting change, not a data change' : null;
}

export function buildFindings(result) {
  const { summary: s, rows, keys } = result;
  if (s.passed) return [{ severity: 'info', title: 'Reports match', detail: `All ${s.compared} keys match within tolerance.` }];
  const out = [];
  if (s.legacyRows !== s.migratedRows) {
    out.push({ severity: 'high', title: 'Row count differs', detail: `Legacy has ${s.legacyRows} rows, migrated has ${s.migratedRows}.` });
  }
  for (const [status, title, severity] of [[MISSING, 'Rows missing in migrated report', 'high'], [EXTRA, 'Unexpected extra rows in migrated report', 'medium']]) {
    const sub = rows.filter((r) => r.status === status);
    if (!sub.length) continue;
    const where = concentration(sub, keys);
    out.push({ severity, title, detail: `${sub.length} row(s).${where.length ? ` Concentrated in ${where.join('; ')} - check filters, joins or date cut-offs for this slice.` : ''}` });
  }
  const mism = rows.filter((r) => r.status === MISMATCH);
  for (const c of [...result.measures, ...result.attributes]) {
    const hit = mism.filter((r) => r.mismatched_columns.split(', ').includes(c));
    if (!hit.length) continue;
    const isMeasure = result.measures.includes(c);
    const pattern = isMeasure ? measurePattern(hit, c) : textPattern(hit, c);
    const where = concentration(hit, keys);
    let detail = `${hit.length} row(s) differ.`;
    if (pattern) detail += ` Pattern: ${pattern}.`;
    if (where.length) detail += ` Concentrated in ${where.join('; ')}.`;
    const severity = isMeasure ? 'high' : pattern && pattern.includes('formatting') ? 'info' : 'medium';
    out.push({ severity, title: `Column '${c}' does not match`, detail });
  }
  for (const t of result.totals) {
    if (t.pct != null && Math.abs(t.pct) >= 0.01) {
      out.push({ severity: 'medium', title: `Total '${t.measure}' changed`, detail: `${t.legacy.toLocaleString('en-US')} -> ${t.migrated.toLocaleString('en-US')} (${t.pct > 0 ? '+' : ''}${t.pct.toFixed(2)}%).` });
    }
  }
  const order = { high: 0, medium: 1, info: 2 };
  return out.sort((a, b) => order[a.severity] - order[b.severity]);
}

export function toMarkdown(result, findings) {
  const s = result.summary;
  const lines = [
    '# Report Migration Validation', '',
    `**Verdict: ${s.passed ? 'PASS' : 'FAIL'}** - match rate ${s.matchRate}% (${s.matched} of ${s.compared} keys)`, '',
    `- Keys: ${result.keys.join(', ')}`,
    `- Measures (tolerance ${s.absTol}): ${result.measures.join(', ') || '-'}`,
    `- Mismatched: ${s.mismatched} | Missing in migrated: ${s.missing} | Extra in migrated: ${s.extra}`, '',
    '## Findings', '',
    ...findings.map((f) => `- **[${f.severity.toUpperCase()}] ${f.title}** - ${f.detail}`),
  ];
  return `${lines.join('\n')}\n`;
}

/* ---------------- entitlements */

export function sampleEntitlementCase() {
  const { legacy: full } = makeReports();
  const rules = { north_manager: { region: ['North'] }, south_manager: { region: ['South'] }, finance: { region: ['*'] } };
  const outputs = {
    north_manager: full.filter((r) => r.region === 'North'),
    south_manager: [...full.filter((r) => r.region === 'South'), ...full.filter((r) => r.region === 'East' && r.month === '2025-01')],
    finance: full.filter((r) => r.month !== '2025-06'),
  };
  return { full, rules, outputs, keys: SAMPLE_KEYS };
}

export function checkEntitlements(full, outputs, rules, keys) {
  return Object.entries(rules).filter(([role]) => outputs[role]).map(([role, rule]) => {
    const allowed = full.filter((r) => Object.entries(rule).every(([c, vals]) => vals.includes('*') || vals.includes(String(r[c]).trim())));
    const exp = new Map(allowed.map((r) => [keyOf(r, keys), r]));
    const got = new Map(outputs[role].map((r) => [keyOf(r, keys), r]));
    const leaked = [...got.entries()].filter(([k]) => !exp.has(k)).map(([, r]) => r);
    const missing = [...exp.entries()].filter(([k]) => !got.has(k)).map(([, r]) => r);
    const ruleText = Object.entries(rule).map(([c, v]) => `${c} = ${v.includes('*') ? 'all' : v.join(', ')}`).join('; ');
    return { role, ruleText, expected: exp.size, returned: got.size, leaked, missing, passed: !leaked.length && !missing.length };
  });
}
