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
const strip = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const rank = (c) => (/professional|advanced/i.test(c.name) ? 0 : /associate|core/i.test(c.name) ? 1 : 2);

export default function ResumePage() {
  const certs = [...CERTS].sort((a, b) => rank(a) - rank(b));

  return (
    <div className="resume-page">
      <header className="rp-header">
        <div>
          <h1 className="rp-name">Srushti Mohire</h1>
          <p className="rp-title">Data Engineer | System Associate, Infosys</p>
        </div>
        <div className="rp-contact">
          <p>{CONFIG.email}</p>
          <p>Bengaluru, Karnataka, India</p>
          <p>{strip(CONFIG.linkedin)}</p>
          <p>{strip(CONFIG.github)}</p>
          <p>{strip(CONFIG.kaggle)}</p>
        </div>
      </header>

      <section className="rp-section">
        <h2 className="rp-heading">Summary</h2>
        <p className="rp-text">{RESUME_SUMMARY}</p>
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Skills</h2>
        <div className="rp-skills-grid">
          {RESUME_SKILL_GROUPS.map(([label, items]) => (
            <div key={label}><strong>{label}:</strong> {items}</div>
          ))}
        </div>
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Experience</h2>
        {EXPERIENCE.map((e) => (
          <div className="rp-entry" key={e.role + e.date}>
            <div className="rp-entry-header">
              <div>
                <strong>{e.role}</strong>
                <span className="rp-company">{e.company}</span>
              </div>
              <span className="rp-date">{e.date.split(' · ')[0]}</span>
            </div>
            {e.points?.length > 0 && (
              <ul className="rp-list">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Certifications</h2>
        <ul className="rp-cert-list">
          {certs.map((c) => (
            <li key={c.name}>{c.name} — {c.issuer} ({c.date})</li>
          ))}
        </ul>
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Projects</h2>
        {PROJECTS.map((p) => (
          <div className="rp-entry" key={p.title}>
            <strong>{p.title}</strong> — {p.stack.join(', ')}
            <p className="rp-text">{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="rp-section">
        <h2 className="rp-heading">Education</h2>
        {EDUCATION.map((ed) => (
          <div className="rp-entry" key={ed.degree}>
            <div className="rp-entry-header">
              <div>
                <strong>{ed.institute}</strong>
                <span className="rp-company">{ed.degree}</span>
              </div>
              {ed.date && <span className="rp-date">{ed.date}</span>}
            </div>
            {ed.grade && <p className="rp-text">Grade: {ed.grade}</p>}
          </div>
        ))}
      </section>

      <footer className="rp-footer">
        <p>Press Ctrl+P (Cmd+P on Mac) and choose “Save as PDF” to export.</p>
      </footer>
    </div>
  );
}
