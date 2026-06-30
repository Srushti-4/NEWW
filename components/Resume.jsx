'use client';

import { Icon } from './Icon';
import { useFadeIn } from '@/lib/useFadeIn';
import { CONFIG } from '@/lib/content';

export function Resume() {
  const ref = useFadeIn();
  return (
    <section id="resume" ref={ref}>
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div className="section-tag">Resume</div>
          <h2 className="section-title">My Resume</h2>
          <p className="section-sub" style={{ margin: '0.75rem auto 1.5rem' }}>Download my full resume to learn more about my experience, education, and skills.</p>
          <div className="resume-cta">
            <span className="resume-girl">👩‍💻</span>
            <span className="resume-girl-speech">Click here to grab my resume! 👇</span>
          </div>
          <a href={CONFIG.resumeUrl} download className="btn btn-primary btn-download" aria-label="Download resume as PDF">
            <Icon name="download" size={15} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
