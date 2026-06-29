'use client';

import Image from 'next/image';
import { useFadeIn } from '@/lib/useFadeIn';

export function About() {
  const ref = useFadeIn();
  return (
    <section id="about" style={{ background: 'var(--bg2)' }} ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="fade-up">
            <div className="about-photo">
              <Image
                src="/second.jpg"
                alt="Srushti Mohire"
                width={400}
                height={400}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
              />
            </div>
            {/* Details cards below photo */}
            <div className="about-details" style={{ marginTop: '1.5rem' }}>
              <div className="about-detail-item">
                <div className="about-detail-icon">🎂</div>
                <div className="about-detail-text">
                  <span className="about-detail-label">Birthday</span>
                  <span className="about-detail-value">04 Jun 2001</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-icon">📍</div>
                <div className="about-detail-text">
                  <span className="about-detail-label">City</span>
                  <span className="about-detail-value">Bangalore, India</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-icon">🎓</div>
                <div className="about-detail-text">
                  <span className="about-detail-label">Degree</span>
                  <span className="about-detail-value">Master of Computer Application (MCA)</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-icon">🧑</div>
                <div className="about-detail-text">
                  <span className="about-detail-label">Age</span>
                  <span className="about-detail-value">25</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="about-detail-icon">✉️</div>
                <div className="about-detail-text">
                  <span className="about-detail-label">Email</span>
                  <span className="about-detail-value">srushtimohire04@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: '100ms' }}>
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Turning Data Into<br />Meaningful Insights</h2>
            <div className="divider" />
            <p style={{ color: 'var(--text2)', marginBottom: '1rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I&apos;m a System Associate at Infosys, contributing to projects that optimize business processes through data transformation, analysis, and automation. I focus on turning raw, messy data into clean, reliable systems that teams can trust. My day-to-day work involves writing efficient Python scripts, crafting complex SQL queries, and orchestrating data workflows across cloud platforms.
            </p>
            <p style={{ color: 'var(--text2)', marginBottom: '1rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Proficient in Python, SQL, Unix, Data Engineering and Databricks — with a strong foundation in AI and Machine Learning, supported by 13 industry certifications including Snowpro Advanced Data Engineer, Databricks Certified Generative AI Engineer, and AWS Cloud Practitioner. I pursued my MCA at KLE Technological University (8.9 CGPA) and hold a BCA from Rani Channamma University, Belagavi. My academic journey gave me a solid grounding in algorithms, data structures, and software engineering principles.
            </p>
            <p style={{ color: 'var(--text2)', marginBottom: '1rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I&apos;m passionate about leveraging technical skills and collaboration to deliver innovative solutions in data engineering and business intelligence. Beyond work, I enjoy participating in hackathons — most recently building an AI-powered incident management agent at the GDG Hackathon using LLMs and RAG. I&apos;m always eager to learn new technologies, contribute to open-source projects, and connect with like-minded professionals who share a passion for building impactful software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
