'use client';

import { useFadeIn } from '@/lib/useFadeIn';

const PRINCIPLES = [
  {
    icon: '⚡',
    title: 'Performance First',
    desc: 'Pipelines optimized for speed and efficiency — processing 50K+ records daily without breaking a sweat.',
  },
  {
    icon: '🔒',
    title: 'Reliability',
    desc: 'Automated validation, error alerting, and monitoring ensure data integrity at every step.',
  },
  {
    icon: '📐',
    title: 'Clean Architecture',
    desc: 'Modular, maintainable code that scales with business needs and is easy to hand off.',
  },
  {
    icon: '🚀',
    title: 'Continuous Learning',
    desc: '13 certifications and counting — always staying ahead with the latest in data and cloud tech.',
  },
];

export function Principles() {
  const ref = useFadeIn();
  return (
    <section ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-head fade-up" style={{ textAlign: 'center' }}>
          <div className="section-tag">My Approach</div>
          <h2 className="section-title">How I Work</h2>
          <div className="divider" style={{ margin: '1rem auto' }} />
        </div>
        <div className="principles-grid fade-up" style={{ transitionDelay: '100ms' }}>
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="principle-card">
              <div className="principle-icon">{p.icon}</div>
              <div className="principle-title">{p.title}</div>
              <div className="principle-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
