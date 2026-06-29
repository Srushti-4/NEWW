'use client';

import { useState } from 'react';
import { Icon } from './Icon';
import { Confetti } from './Confetti';
import { useFadeIn } from '@/lib/useFadeIn';
import { CONFIG } from '@/lib/content';

export function Contact() {
  const ref = useFadeIn();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [confettiKey, setConfettiKey] = useState(0);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const data = new FormData(e.target);
      const res = await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
        setConfettiKey((k) => k + 1);
        e.target.reset();
      } else {
        setError('Could not send. Please email me directly.');
      }
    } catch {
      setError('Network error. Please email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-bg" ref={ref}>
      <Confetti trigger={confettiKey} />
      <div className="contact-grid">
        <div className="fade-up">
          <div className="section-tag">Let&apos;s Talk</div>
          <h2 className="section-title">Get In Touch</h2>
          <div className="divider" />
          <p style={{ color: 'var(--text2)', margin: '1rem 0 1.5rem', fontSize: '0.95rem', lineHeight: 1.75 }}>
            Open to data engineering and software development roles. Feel free to reach out for opportunities, collaborations or just a hello!
          </p>
          <div className="avail-badge" style={{ marginBottom: '2rem' }}>
            <span></span> Available for opportunities
          </div>
          {CONFIG.calendly && (
            <a
              href={CONFIG.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginBottom: '1.5rem' }}
            >
              <Icon name="calendar" size={16} /> Book a 15-min Chat
            </a>
          )}
          <div className="contact-info">
            <a href={`mailto:${CONFIG.email}`} className="contact-link">
              <div className="contact-link-icon"><Icon name="mail" size={18} /></div>
              {CONFIG.email}
            </a>
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon"><Icon name="linkedin" size={18} /></div>
              linkedin.com/in/srushti-mohire
            </a>
            <a href={CONFIG.kaggle} target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon"><Icon name="kaggle" size={18} /></div>
              kaggle.com/srushtikmohire
            </a>

            <div className="contact-link">
              <div className="contact-link-icon"><Icon name="map" size={18} /></div>
              Bengaluru, Karnataka, India
            </div>
          </div>
        </div>
        <div className="card fade-up" style={{ transitionDelay: '100ms' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Message Sent!</div>
              <div style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>Thanks for reaching out. I&apos;ll get back to you soon.</div>
              <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSent(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '1.25rem' }}>Send a Message</div>
              <input type="hidden" name="_subject" value="New message from srushtimohire.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div className="grid-2" style={{ gap: '0.75rem', marginBottom: 0 }}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input id="contact-name" className="form-input" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input id="contact-email" className="form-input" name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input id="contact-subject" className="form-input" name="subject" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea id="contact-message" className="form-input" name="message" placeholder="Tell me about your project or opportunity..." required />
              </div>
              {error && (
                <div role="alert" style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '0.75rem' }}>{error}</div>
              )}
              <button type="submit" disabled={sending} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
                {sending ? 'Sending…' : <>Send Message <Icon name="arrow" size={16} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
