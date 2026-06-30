'use client';

import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { NAV_LINKS, NAV_ICONS } from '@/lib/content';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  // Track scroll position for nav glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On mount: check localStorage and system preference for dark mode.
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDark(true);
    } else if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDark(true);
    }
  }, []);

  // Apply dark class to <html> whenever the toggle changes.
  useEffect(() => {
    document.documentElement.className = dark ? 'dark' : '';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Highlight the nav link for the section currently in view using IntersectionObserver.
  useEffect(() => {
    const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase())).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = NAV_LINKS.find((n) => n.toLowerCase() === id);
            if (link) setActive(link);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); go('Home'); }}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          style={{ textDecoration: 'none', cursor: 'pointer', position: 'relative' }}
        >
          <span className="nav-logo-text">Srushti KM</span>
          <span className={`logo-hello ${logoHover ? 'show' : ''}`}>
            <span className="logo-hello-girl">👩</span>
            <span className="logo-hello-text">Hello!</span>
          </span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className={`nav-link-item ${active === l ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); go(l); }}>
              <span className="nav-link-icon">{NAV_ICONS[l]}</span>
              {l}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <button
            className={`toggle-btn ${dark ? 'on' : ''}`}
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          />
          <button
            className="nav-ham"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </nav>
      <div
        id="mobile-nav"
        className={`mobile-nav ${open ? 'open' : ''}`}
        role="menu"
        aria-hidden={!open}
      >
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} role="menuitem" onClick={(e) => { e.preventDefault(); go(l); }}>{l}</a>
        ))}
      </div>
    </>
  );
}
