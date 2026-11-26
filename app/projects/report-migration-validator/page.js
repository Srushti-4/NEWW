import Link from 'next/link';
import { ValidatorDemo } from '@/components/ValidatorDemo';
import { Icon } from '@/components/Icon';
import './project.css';

const REPO = 'https://github.com/Srushti-4/report-migration-validator';

export const metadata = {
  title: 'AI Report Migration Validator — Srushti Mohire',
  description:
    'Check that a report migrated to Databricks still matches the legacy report, explain every difference, and test row-level entitlements per role. Live demo in the browser.',
  alternates: { canonical: '/projects/report-migration-validator/' },
};

const FINDS = [
  ['Missing rows', 'Rows that never made it across - and which slice they cluster in (a region, a month).'],
  ['Measure drift', 'Constant multipliers (tax, FX), fixed offsets, sign flips and rounding changes.'],
  ['Extra rows', 'Rows that appear only in the new report, such as leaked test data.'],
  ['Text drift', 'Case and whitespace changes, kept apart from real data changes.'],
  ['Entitlements', 'Each role sees exactly its allowed rows - no leaks, nothing over-filtered.'],
  ['Totals', 'Report-level totals per measure, with the percentage change.'],
];

const STEPS = [
  ['Load', 'Legacy and migrated reports from CSV, Excel or Databricks tables (SQL warehouse).'],
  ['Compare', 'Full outer join on the report keys; numbers checked with a tolerance, text exactly.'],
  ['Explain', 'Rule-based findings, plus an optional Claude review of likely root causes.'],
  ['Gate', 'The CLI fails the build when reports differ, so it can block a bad release.'],
];

const STACK = ['Python', 'pandas', 'PySpark', 'Databricks SQL', 'Delta Lake', 'Streamlit', 'Claude API', 'pytest', 'GitHub Actions'];

export default function ReportMigrationValidatorPage() {
  return (
    <div className="rmv-page">
      <header className="rmv-top">
        <Link href="/#projects" className="rmv-back">← Back to portfolio</Link>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          <Icon name="github" size={14} /> View code
        </a>
      </header>

      <main>
        <div className="rmv-hero">
          <div className="section-tag">Project · Data + AI</div>
          <h1>AI Report Migration Validator</h1>
          <p className="rmv-lead">
            When reports are migrated to Databricks, every number has to match the original before it goes to
            production. This tool checks <strong>every row</strong> of the legacy and migrated reports, explains
            each difference in plain English, and tests that <strong>every role sees only the data it is entitled to</strong>.
          </p>
          <div className="rmv-hero-btns">
            <a href="#demo" className="btn btn-primary">Try the live demo</a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Icon name="github" size={15} /> Source on GitHub
            </a>
          </div>
          <div className="proj-stack">{STACK.map((s) => <span key={s} className="tag">{s}</span>)}</div>
        </div>

        <div className="rmv-section">
          <h2>Why I built it</h2>
          <p>
            In my work on report migration to Databricks, the slow part is not rebuilding a report - it is proving the
            new one is right. Comparing two spreadsheets by eye misses things: a filter that drops one region in one
            month, a tax rule applied twice, a row filter that leaks data to the wrong team. This validator makes that
            check fast, complete and repeatable.
          </p>
        </div>

        <div className="rmv-section">
          <h2>What it finds</h2>
          <div className="rmv-grid">
            {FINDS.map(([t, d]) => (
              <div key={t} className="card rmv-feature"><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>

        <div className="rmv-section" id="demo">
          <h2>Live demo</h2>
          <p>
            Runs entirely in your browser. Start with the sample report - it has four planted migration defects -
            or upload two CSV files of your own.
          </p>
          <ValidatorDemo />
        </div>

        <div className="rmv-section">
          <h2>How it works</h2>
          <ol className="rmv-steps">
            {STEPS.map(([t, d], i) => (
              <li key={t}><span>{i + 1}</span><div><strong>{t}</strong><p>{d}</p></div></li>
            ))}
          </ol>
        </div>

        <div className="rmv-section">
          <h2>Built for Databricks</h2>
          <p>
            The full project includes a PySpark notebook that runs the same comparison on full-size tables and writes
            the results to a Delta table, a Streamlit app that reads straight from a Databricks SQL warehouse, a
            command-line tool for CI/CD, and a test suite that runs on every push with GitHub Actions. The optional AI
            review sends only a summary and a few sample rows to Claude - never the full report.
          </p>
          <pre className="rmv-code"><code>{`git clone ${REPO}.git
cd report-migration-validator
pip install -r requirements.txt
streamlit run app.py            # web app
python -m validator.cli --sample  # command line`}</code></pre>
        </div>

        <div className="rmv-cta">
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="github" size={15} /> View the code on GitHub
          </a>
          <Link href="/#projects" className="btn btn-outline">More projects</Link>
        </div>
      </main>
    </div>
  );
}
