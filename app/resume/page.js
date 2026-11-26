import './resume-print.css';
import {
  CONFIG,
  EXPERIENCE,
  EDUCATION,
  CERTS,
  PROJECTS,
  RESUME_SKILL_GROUPS,
  RESUME_SUMMARY,
} from '@/lib/content';

export const metadata = {
  title: 'Srushti Mohire — Resume',
};

// Everything on this page is read from lib/content.js, so the printable résumé
// can never drift out of sync with the main site.
//
// ATS-friendly by design: single column, standard section headings, plain text
// (no tables, icons or multi-column grids), contact details as plain text.
const strip = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const rank = (c) => (/professional|advanced/i.test(c.name) ? 0 : /associate|core/i.test(c.name) ? 1 : 2);
const shortCert = (name) => name.replace(/^Databricks Certified /, '').replace(/^SnowPro /, 'SnowPro ');

export default function ResumePage() {
  const certs = [...CERTS].sort((a, b) => rank(a) - rank(b));
  const byIssuer = ['Databricks', 'Snowflake'].map((issuer) => [
    issuer,
    certs.filter((c) => c.issuer === issuer).map((c) => shortCert(c.name)),
  ]);

  return (
    <div className="resume-page">
      <header className="rp-header">
        <h1 className="rp-name">Srushti Mohire</h1>
        <p className="rp-title">Databricks Engineer | System Associate, Infosys</p>
        <p className="rp-contact">
          Bengaluru, Karnataka, India | {CONFIG.email} | {strip(CONFIG.linkedin)} | {strip(CONFIG.github)}
        </p>
      </header>

      <section className="rp-section">
        <h2 className="rp-heading">Professional Summary</h2>
        <p className="rp-text">{RESUME_SUMMARY}</p>
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Technical Skills</h2>
        {RESUME_SKILL_GROUPS.map(([label, items]) => (
          <p className="rp-line" key={label}><strong>{label}:</strong> {items}</p>
        ))}
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Professional Experience</h2>
        {EXPERIENCE.map((e) => {
          const [dates, location] = e.date.split(' · ');
          return (
            <div className="rp-entry" key={e.role + e.date}>
              <div className="rp-entry-header">
                <span><strong>{e.role}</strong> | {e.company}{location ? `, ${location}` : ''}</span>
                <span className="rp-date">{dates}</span>
              </div>
              {e.points?.length > 0 && (
                <ul className="rp-list">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Projects</h2>
        {PROJECTS.map((p) => (
          <div className="rp-entry" key={p.title}>
            <p className="rp-line"><strong>{p.title}</strong> | {p.stack.join(', ')}</p>
            <ul className="rp-list"><li>{p.desc}</li></ul>
          </div>
        ))}
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Certifications</h2>
        {byIssuer.map(([issuer, names]) => names.length > 0 && (
          <p className="rp-line" key={issuer}><strong>{issuer}:</strong> {names.join('; ')}</p>
        ))}
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Education</h2>
        {EDUCATION.map((ed) => (
          <div className="rp-entry-header" key={ed.degree}>
            <span>
              <strong>{ed.degree}</strong> | {ed.institute}{ed.grade ? ` | ${ed.grade}` : ''}
            </span>
            {ed.date && <span className="rp-date">{ed.date}</span>}
          </div>
        ))}
      </section>

      <footer className="rp-footer">
        <p>Press Ctrl+P (Cmd+P on Mac) and choose “Save as PDF” to export.</p>
      </footer>
    </div>
  );
}
