'use client';

import { useFadeIn } from '@/lib/useFadeIn';

const CURRENT_ITEMS = [
  {
    icon: '🔬',
    title: 'Advanced Data Pipelines',
    desc: 'Building scalable ETL workflows using Databricks and Snowflake for real-time data processing.',
    tag: 'Data Engineering',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Incident Management',
    desc: 'Developing an intelligent agent that auto-classifies and routes production incidents using LLMs.',
    tag: 'AI / ML',
  },
  {
    icon: '📊',
    title: 'Cloud Certifications',
    desc: 'Preparing for advanced cloud and data engineering certifications to deepen expertise.',
    tag: 'Learning',
  },
];

export function CurrentlyWorkingOn() {
  const ref = useFadeIn();
  return (
    <section id="current" className="current-section" ref={ref}>
      <div className="container">
        <div className="section-head fade-up">
          <div className="section-tag">What I&apos;m Up To</div>
          <h2 className="section-title">Currently Working On</h2>
          <p className="section-sub">Projects and goals I&apos;m actively pursuing right now.</p>
          <div className="divider" />
        </div>
        <div className="grid-3">
          {CURRENT_ITEMS.map((item, i) => (
            <div key={i} className="current-card fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="current-icon">{item.icon}</div>
              <div>
                <div className="current-title">{item.title}</div>
                <div className="current-desc">{item.desc}</div>
                <div className="current-tag">{item.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
