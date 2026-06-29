'use client';

import { useFadeIn } from '@/lib/useFadeIn';
import { ACHIEVEMENTS } from '@/lib/content';

export function Achievements() {
  const ref = useFadeIn();
  return (
    <section id="achievements" className="achievements-bg" ref={ref}>
      <div className="container">
        <div className="section-head fade-up" style={{ marginBottom: '1.5rem' }}>
          <div className="section-tag">Recognition</div>
          <h2 className="section-title">Achievements &amp; Highlights</h2>
          <p className="section-sub">Hackathons, certifications, and milestones along the way.</p>
          <div className="divider" />
        </div>
        <div className="grid-2">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="achievement-card fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="achievement-icon">{a.icon}</div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{a.title}</h3>
                  <span className="achievement-date">{a.date}</span>
                </div>
                <p className="achievement-desc">{a.desc}</p>
                <span className="tag tag-accent">{a.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
