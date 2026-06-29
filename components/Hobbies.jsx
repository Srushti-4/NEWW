'use client';

import { useFadeIn } from '@/lib/useFadeIn';

const HOBBIES = [
  { icon: '📚', title: 'Reading', desc: 'Tech blogs, self-improvement books, and data engineering articles' },
  { icon: '🎨', title: 'Sketching', desc: 'Creative outlet through drawing and digital art' },
  { icon: '🎵', title: 'Music', desc: 'Listening to music while coding — my productivity booster' },
  { icon: '✈️', title: 'Traveling', desc: 'Exploring new places and experiencing different cultures' },
  { icon: '🏋️', title: 'Fitness', desc: 'Staying active with workouts and yoga' },
  { icon: '🎬', title: 'Movies', desc: 'Sci-fi, thrillers, and tech documentaries' },
];

export function Hobbies() {
  const ref = useFadeIn();
  return (
    <section className="hobbies-section" ref={ref}>
      <div className="container">
        <div className="section-head fade-up" style={{ textAlign: 'center' }}>
          <div className="section-tag">Beyond Work</div>
          <h2 className="section-title">Hobbies &amp; Interests</h2>
          <div className="divider" style={{ margin: '1rem auto' }} />
        </div>
        <div className="hobbies-grid fade-up" style={{ transitionDelay: '100ms' }}>
          {HOBBIES.map((h, i) => (
            <div key={i} className="hobby-card">
              <div className="hobby-icon">{h.icon}</div>
              <div className="hobby-title">{h.title}</div>
              <div className="hobby-desc">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
