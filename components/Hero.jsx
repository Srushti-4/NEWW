'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { AnimatedStat } from './AnimatedStat';
import { useFadeIn } from '@/lib/useFadeIn';
import { useTypewriter } from '@/lib/useTypewriter';
import { CONFIG, HERO_STATS } from '@/lib/content';

const ROLES = ['Data Engineer', 'Python Developer', 'ML Enthusiast', 'Pipeline Builder'];

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
  const typedRole = useTypewriter(ROLES, 80, 50, 2000);
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
            Hi, I&apos;m<br />
            <em className={`name-cycle ${nameFading ? 'fading' : ''}`}>
              {NAME_LANGUAGES[nameIndex]}
            </em>
          </h1>
          <p className="hero-role fade-up" style={{ transitionDelay: '140ms' }}>
            <span className="typewriter">{typedRole}</span>
            <span className="typewriter-cursor">|</span>
          </p>
          <p className="hero-desc fade-up" style={{ transitionDelay: '200ms' }}>
            System Associate at Infosys, building data pipelines and intelligent systems that turn raw data into business impact. Based in Bengaluru, India.
          </p>
          <div className="hero-btns fade-up" style={{ transitionDelay: '260ms' }}>
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects <Icon name="arrow" size={16} />
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contact Me
            </a>
          </div>
          <dl className="hero-stats fade-up" style={{ transitionDelay: '320ms' }}>
            {HERO_STATS.map(([n, l]) => (
              <AnimatedStat key={l} value={n} label={l} />
            ))}
          </dl>
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
          </div>
        </div>
      </div>
    </section>
  );
}
