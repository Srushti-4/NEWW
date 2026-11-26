'use client';

import { useMemo, useState } from 'react';
import {
  EXTRA, MISMATCH, MISSING, SAMPLE_KEYS, STATUS_LABELS,
  buildFindings, checkEntitlements, columnsOf, compareReports, isNumericCol, issueCounts,
  makeReports, parseCSV, sampleEntitlementCase, toCSV, toMarkdown,
} from '@/lib/validator';

const STATUSES = [MISMATCH, MISSING, EXTRA];
const SEV = { high: 'High', medium: 'Medium', info: 'Info' };

function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  a.click();
  URL.revokeObjectURL(url);
}

function IssueChart({ result }) {
  const [by, setBy] = useState(result.keys[Math.min(1, result.keys.length - 1)]);
  const [hover, setHover] = useState(null);
  const data = issueCounts(result, by);
  const max = Math.max(1, ...data.map((d) => STATUSES.reduce((s, k) => s + d[k], 0)));
  const H = 200;

  return (
    <div className="rmv-panel">
      <div className="rmv-panel-head">
        <h4>Where are the problems?</h4>
        <label className="rmv-inline">
          Group by{' '}
          <select value={by} onChange={(e) => setBy(e.target.value)}>
            {result.keys.map((k) => <option key={k}>{k}</option>)}
          </select>
        </label>
      </div>
      <div className="rmv-legend" aria-hidden="true">
        {STATUSES.map((s, i) => <span key={s}><i className={`rmv-sw rmv-c${i + 1}`} />{STATUS_LABELS[s]}</span>)}
      </div>
      <div className="rmv-chart" role="img" aria-label={`Rows with issues by ${by}`}>
        <div className="rmv-chart-grid"><span>{max}</span><span>{Math.round(max / 2)}</span><span>0</span></div>
        <div className="rmv-bars" style={{ height: H }}>
          {data.map((d) => {
            const total = STATUSES.reduce((s, k) => s + d[k], 0);
            return (
              <div key={d.label} className="rmv-bar-col"
                   onMouseEnter={() => setHover(d.label)} onMouseLeave={() => setHover(null)}
                   onFocus={() => setHover(d.label)} onBlur={() => setHover(null)} tabIndex={0}>
                <span className="rmv-bar-total">{total}</span>
                <div className="rmv-bar" style={{ height: (total / max) * H }}>
                  {STATUSES.map((s, i) => d[s] > 0 && (
                    <div key={s} className={`rmv-seg rmv-c${i + 1}`} style={{ flexGrow: d[s] }} />
                  ))}
                </div>
                <span className="rmv-bar-label">{d.label}</span>
                {hover === d.label && (
                  <div className="rmv-tip" role="tooltip">
                    <strong>{by} = {d.label}</strong>
                    {STATUSES.map((s, i) => (
                      <div key={s}><i className={`rmv-sw rmv-c${i + 1}`} />{STATUS_LABELS[s]}: <b>{d[s]}</b></div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <details className="rmv-details">
        <summary>Chart data as a table</summary>
        <table className="rmv-table">
          <thead><tr><th>{by}</th>{STATUSES.map((s) => <th key={s}>{STATUS_LABELS[s]}</th>)}</tr></thead>
          <tbody>{data.map((d) => <tr key={d.label}><td>{d.label}</td>{STATUSES.map((s) => <td key={s}>{d[s]}</td>)}</tr>)}</tbody>
        </table>
      </details>
    </div>
  );
}

function ComparisonTab() {
  const sample = useMemo(() => makeReports(), []);
  const [source, setSource] = useState('sample');
  const [files, setFiles] = useState({ legacy: null, migrated: null });
  const [keys, setKeys] = useState(SAMPLE_KEYS);
  const [tol, setTol] = useState(0.01);
  const [filter, setFilter] = useState(STATUSES);

  const legacy = source === 'sample' ? sample.legacy : files.legacy?.rows;
  const migrated = source === 'sample' ? sample.migrated : files.migrated?.rows;
  const shared = legacy && migrated ? columnsOf(legacy).filter((c) => columnsOf(migrated).includes(c)) : [];

  const onFile = (side) => async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const rows = parseCSV(await f.text());
    setFiles((prev) => {
      const next = { ...prev, [side]: { name: f.name, rows } };
      const base = next.legacy?.rows;
      if (base) setKeys(columnsOf(base).filter((c) => !isNumericCol(base, c)).slice(0, 3));
      return next;
    });
  };

  let result = null, error = '';
  if (legacy && migrated && keys.length) {
    try { result = compareReports(legacy, migrated, keys.filter((k) => shared.includes(k)), Number(tol) || 0); }
    catch (e) { error = e.message; }
  }
  const findings = result ? buildFindings(result) : [];
  const s = result?.summary;
  const visible = result ? result.issues.filter((r) => filter.includes(r.status)) : [];
  const cols = result ? [...result.keys, 'status', 'mismatched_columns',
    ...[...result.measures, ...result.attributes].flatMap((c) => [`${c}_legacy`, `${c}_migrated`])] : [];

  return (
    <div>
      <div className="rmv-controls">
        <div className="rmv-seg-ctl" role="radiogroup" aria-label="Data source">
          {[['sample', 'Sample sales report'], ['upload', 'Upload my CSVs']].map(([v, l]) => (
            <button key={v} type="button" role="radio" aria-checked={source === v}
                    className={source === v ? 'on' : ''}
                    onClick={() => { setSource(v); if (v === 'sample') setKeys(SAMPLE_KEYS); }}>{l}</button>
          ))}
        </div>
        {source === 'upload' && (
          <div className="rmv-uploads">
            <label>Legacy report (CSV) <input type="file" accept=".csv" onChange={onFile('legacy')} /></label>
            <label>Migrated report (CSV) <input type="file" accept=".csv" onChange={onFile('migrated')} /></label>
            <p className="rmv-note">Files stay in your browser - nothing is uploaded to a server.</p>
          </div>
        )}
        {source === 'sample' && (
          <p className="rmv-note">120-row sales report with 4 planted migration defects. Can the validator find them?</p>
        )}
        {shared.length > 0 && (
          <div className="rmv-settings">
            <fieldset>
              <legend>Key columns</legend>
              {shared.map((c) => (
                <label key={c} className="rmv-check">
                  <input type="checkbox" checked={keys.includes(c)}
                         onChange={(e) => setKeys(e.target.checked ? [...keys, c] : keys.filter((k) => k !== c))} />
                  {c}
                </label>
              ))}
            </fieldset>
            <label className="rmv-inline">Tolerance{' '}
              <input type="number" min="0" step="0.01" value={tol} onChange={(e) => setTol(e.target.value)} />
            </label>
          </div>
        )}
      </div>

      {error && <div className="rmv-banner rmv-fail" role="alert">{error}</div>}
      {legacy && migrated && !keys.length && <div className="rmv-banner rmv-warn">Choose at least one key column.</div>}

      {result && (
        <>
          <div className={`rmv-banner ${s.passed ? 'rmv-pass' : 'rmv-fail'}`} role="status">
            <strong>{s.passed ? 'PASS' : 'FAIL'}</strong>{' '}
            {s.passed ? `all ${s.compared} keys match within tolerance.` : `${s.compared - s.matched} of ${s.compared} keys need attention.`}
          </div>
          <div className="rmv-metrics">
            {[['Match rate', `${s.matchRate}%`], ['Matched', s.matched], ['Mismatched', s.mismatched],
              ['Missing in migrated', s.missing], ['Extra in migrated', s.extra]].map(([l, v]) => (
              <div key={l} className="rmv-metric"><span>{l}</span><strong>{v}</strong></div>
            ))}
          </div>

          <div className="rmv-two">
            <div className="rmv-panel">
              <h4>Findings</h4>
              <ul className="rmv-findings">
                {findings.map((f, i) => (
                  <li key={i} className={`sev-${f.severity}`}>
                    <span className="rmv-sev">{SEV[f.severity]}</span>
                    <div><strong>{f.title}</strong><p>{f.detail}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rmv-panel">
              <h4>Totals</h4>
              <table className="rmv-table">
                <thead><tr><th>Measure</th><th>Legacy</th><th>Migrated</th><th>Diff %</th></tr></thead>
                <tbody>
                  {result.totals.map((t) => (
                    <tr key={t.measure}>
                      <td>{t.measure}</td><td>{t.legacy.toLocaleString('en-US')}</td><td>{t.migrated.toLocaleString('en-US')}</td>
                      <td>{t.pct == null ? '' : `${t.pct > 0 ? '+' : ''}${t.pct.toFixed(2)}%`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {!s.passed && <IssueChart result={result} />}

          {!s.passed && (
            <div className="rmv-panel">
              <div className="rmv-panel-head">
                <h4>Rows to review ({visible.length})</h4>
                <div className="rmv-inline">
                  {STATUSES.map((st) => (
                    <label key={st} className="rmv-check">
                      <input type="checkbox" checked={filter.includes(st)}
                             onChange={(e) => setFilter(e.target.checked ? [...filter, st] : filter.filter((x) => x !== st))} />
                      {STATUS_LABELS[st]}
                    </label>
                  ))}
                </div>
              </div>
              <div className="rmv-scroll">
                <table className="rmv-table">
                  <thead><tr>{cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                  <tbody>
                    {visible.slice(0, 200).map((r, i) => (
                      <tr key={i}>{cols.map((c) => <td key={c}>{r[c] == null ? '' : String(r[c])}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {visible.length > 200 && <p className="rmv-note">Showing the first 200 rows - download the CSV for all.</p>}
            </div>
          )}

          <div className="rmv-actions">
            <button type="button" className="btn btn-outline btn-sm"
                    onClick={() => download('validation_report.md', toMarkdown(result, findings), 'text/markdown')}>
              Download report (Markdown)
            </button>
            <button type="button" className="btn btn-outline btn-sm" disabled={s.passed}
                    onClick={() => download('rows_to_review.csv', toCSV(result.issues, cols), 'text/csv')}>
              Download rows to review (CSV)
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function EntitlementTab() {
  const { full, rules, outputs, keys } = useMemo(() => sampleEntitlementCase(), []);
  const results = useMemo(() => checkEntitlements(full, outputs, rules, keys), [full, outputs, rules, keys]);
  const failed = results.filter((r) => !r.passed);
  const show = ['month', 'region', 'product', 'revenue'];

  return (
    <div>
      <p className="rmv-note">
        The same report is run <strong>as each role</strong>. Every role must see exactly the rows its access rule allows:
        no <strong>leaked</strong> rows (a security defect) and no <strong>missing</strong> rows (an over-restrictive filter).
        Sample: 3 roles, 2 planted defects.
      </p>
      <div className={`rmv-banner ${failed.length ? 'rmv-fail' : 'rmv-pass'}`} role="status">
        <strong>{failed.length ? 'FAIL' : 'PASS'}</strong>{' '}
        {failed.length ? `${failed.length} of ${results.length} roles see the wrong rows.` : 'every role sees exactly its entitled rows.'}
      </div>
      <div className="rmv-scroll">
        <table className="rmv-table">
          <thead><tr><th>Role</th><th>Access rule</th><th>Expected</th><th>Returned</th><th>Leaked</th><th>Missing</th><th>Result</th></tr></thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.role}>
                <td><code>{r.role}</code></td><td>{r.ruleText}</td><td>{r.expected}</td><td>{r.returned}</td>
                <td>{r.leaked.length}</td><td>{r.missing.length}</td>
                <td><span className={`rmv-pill ${r.passed ? 'ok' : 'bad'}`}>{r.passed ? 'PASS' : 'FAIL'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {failed.map((r) => (
        <details key={r.role} className="rmv-panel rmv-details" open>
          <summary><code>{r.role}</code>: {r.leaked.length} leaked, {r.missing.length} missing</summary>
          {[['Leaked rows - returned but not allowed', r.leaked], ['Missing rows - allowed but not returned', r.missing]]
            .filter(([, rows]) => rows.length)
            .map(([title, rows]) => (
              <div key={title}>
                <p className="rmv-note"><strong>{title}</strong> (rule: {r.ruleText})</p>
                <div className="rmv-scroll">
                  <table className="rmv-table">
                    <thead><tr>{show.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                    <tbody>{rows.map((row, i) => <tr key={i}>{show.map((c) => <td key={c}>{row[c]}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              </div>
            ))}
        </details>
      ))}
    </div>
  );
}

export function ValidatorDemo() {
  const [tab, setTab] = useState('compare');
  return (
    <div className="rmv-demo card">
      <div className="rmv-tabs" role="tablist">
        {[['compare', 'Report comparison'], ['ent', 'Entitlement test']].map(([v, l]) => (
          <button key={v} type="button" role="tab" aria-selected={tab === v}
                  className={tab === v ? 'on' : ''} onClick={() => setTab(v)}>{l}</button>
        ))}
      </div>
      {tab === 'compare' ? <ComparisonTab /> : <EntitlementTab />}
    </div>
  );
}
