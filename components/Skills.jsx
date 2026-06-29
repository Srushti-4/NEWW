'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { useFadeIn } from '@/lib/useFadeIn';
import { SKILLS, CERTS } from '@/lib/content';

export function Skills() {
  const ref = useFadeIn();
  const barsRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-bg" ref={ref}>
      <div className="container">
        <div className="section-head fade-up">
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-sub">Technologies and tools I work with professionally.</p>
          <div className="divider" />
        </div>
        <div ref={barsRef} className="grid-2 fade-up" style={{ transitionDelay: '80ms', gap: '2.5rem' }}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <div className="skill-cat-title">{cat}</div>
              <div className="skill-grid">
                {items.map((s) => (
                  <div key={s.name} className="skill-item">
                    <div className="skill-icon" style={{ background: s.color }}>
                      {s.img ? (
                        <img src={s.img} alt={s.name} width={20} height={20} style={{ display: 'block' }} />
                      ) : (
                        s.icon
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <span>{s.name}</span>
                      {s.level && (
                        <div className="skill-bar-wrap">
                          <div
                            className={`skill-bar ${animated ? 'animated' : ''}`}
                            style={{ '--level': `${s.level}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ marginTop: '3rem' }}>
          <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Certifications</div>
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon"><Icon name="cert" size={18} color="var(--accent)" /></div>
                <div>
                  <div className="cert-title">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-date">{c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
