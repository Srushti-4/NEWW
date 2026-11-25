'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { MagneticWrap } from './MagneticWrap';
import { useFadeIn } from '@/lib/useFadeIn';
import { CONFIG, CERTS } from '@/lib/content';

// Headline credentials — derived from CERTS so they stay accurate.
const proDatabricks = CERTS.filter((c) => c.issuer === 'Databricks' && /professional/i.test(c.name)).length;
const snowAdvanced = CERTS.some((c) => /snowpro advanced/i.test(c.name));
const CREDENTIALS = [
  proDatabricks > 0 && `${proDatabricks > 1 ? `${proDatabricks}× ` : ''}Databricks Professional`,
  snowAdvanced && 'SnowPro Advanced',
  'Infosys',
].filter(Boolean);

const NAME_LANGUAGES = [
  'Srushti Mohire',        // English
  'सृष्टि मोहिरे',          // Hindi
  'ಸೃಷ್ಟಿ ಮೋಹಿರೆ',         // Kannada
  'सृष्टी मोहिरे',          // Marathi
  'スルシュティ モヒレ',       // Japanese
  'سروشتی موہرے',          // Urdu
  '스루쉬티 모히레',         // Korean
  'Сруштi Мохiре',         // Ukrainian
  'சுருஷ்டி மோஹிரே',       // Tamil
];

export function Hero() {
  const ref = useFadeIn();
  const [nameIndex, setNameIndex] = useState(0);
  const [nameFading, setNameFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameFading(true);
      setTimeout(() => {
        setNameIndex((prev) => (prev + 1) % NAME_LANGUAGES.length);
        setNameFading(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-inner">
        <div>
          <div className="hero-badge fade-up" style={{ transitionDelay: '0ms' }}>
            <span></span> Open to new opportunities
          </div>
          <h1 className="hero-name fade-up" style={{ transitionDelay: '80ms' }}>
            Hi, I&apos;m <span className="hero-wave-girl">🙋‍♀️</span><br />
            <em className={`name-cycle ${nameFading ? 'fading' : ''}`}>
              {NAME_LANGUAGES[nameIndex]}
            </em>
          </h1>
          <p className="hero-role fade-up" style={{ transitionDelay: '140ms' }}>
            Databricks Engineer · Infosys
          </p>
          <p className="hero-desc fade-up" style={{ transitionDelay: '200ms', color: 'var(--text)' }}>
            I&apos;m a Databricks Engineer at Infosys, working on the migration of RRP reports to Databricks — creating the functions behind the reports and testing them to make sure every number is right. Based in Bengaluru, India.
          </p>
          <div className="proj-stack fade-up" style={{ transitionDelay: '230ms', marginBottom: '1.5rem' }}>
            {CREDENTIALS.map((c) => <span key={c} className="tag tag-accent">{c}</span>)}
          </div>
          <div className="hero-btns fade-up" style={{ transitionDelay: '260ms' }}>
            <MagneticWrap>
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Projects <Icon name="arrow" size={16} />
              </a>
            </MagneticWrap>
            <MagneticWrap>
              <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Contact Me
              </a>
            </MagneticWrap>
          </div>
        </div>
        <div className="fade-up" style={{ transitionDelay: '100ms' }}>
          <div className="hero-photo">
            <Image
              src="/first.jpg"
              alt="Srushti Mohire portrait"
              width={280}
              height={280}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>
          <div className="hero-social">
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" aria-label="LinkedIn profile">
              <Icon name="linkedin" size={14} /><span>LinkedIn</span>
            </a>
            <a href={CONFIG.kaggle} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" aria-label="Kaggle profile">
              <Icon name="kaggle" size={14} /><span>Kaggle</span>
            </a>
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" aria-label="GitHub profile">
              <Icon name="github" size={14} /><span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
