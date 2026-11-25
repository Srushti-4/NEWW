'use client';

import Image from 'next/image';
import { useFadeIn } from '@/lib/useFadeIn';
import { CERT_COUNT } from '@/lib/content';

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
                <div className="about-detail-icon">💼</div>
                <div className="about-detail-text">
                  <span className="about-detail-label">Work</span>
                  <span className="about-detail-value">Currently working as a System Associate @Infosys, Bangalore</span>
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
                  <span className="about-detail-value">Master of Computer Application (MCA) - KLE Technological University, Hubballi</span>
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
              I&apos;m a System Associate at Infosys, contributing to projects that optimize business processes through data transformation, analysis, and automation. I focus on turning raw, messy data into clean, reliable systems that teams can trust. My day-to-day work involves orchestrating data workflows across cloud platforms.
            </p>
            <div style={{ borderLeft: '3px solid var(--accent)', background: 'var(--accent-light)', borderRadius: '10px', padding: '0.9rem 1.1rem', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                Current work · RRP MYSS Reports Migration to Databricks
              </div>
              <p style={{ margin: 0, color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                I&apos;m a Databricks Engineer at Infosys, working on the <strong>RRP MYSS Reports Migration to Databricks</strong> process. In this project, I have worked on report creation and testing — validating the migrated reports so the results are accurate, complete, and consistent with the originals before they go into production. I have also worked on enabling <strong>data-level entitlements</strong> for RRP reports, including their creation and testing.
              </p>
            </div>
            <p style={{ color: 'var(--text2)', marginBottom: '1rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Proficient in Python, SQL, Unix, Data Engineering and Databricks — with a strong foundation in AI and Machine Learning, backed by {CERT_COUNT} industry certifications including Databricks Certified Data Engineer Professional, Databricks Machine Learning Professional, and SnowPro Advanced: Data Engineer. I pursued my MCA at KLE Technological University (8.9 CGPA) and hold a BCA from Rani Channamma University, Belagavi. My academic journey gave me a solid grounding in algorithms, data structures, and software engineering principles.
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
