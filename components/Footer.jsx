import { CONFIG } from '@/lib/content';
import { SITE_HOST } from '@/lib/site';

export function Footer() {
  return (
    <footer>
      <div className="footer-copy">© {new Date().getFullYear()} Srushti Mohire · {SITE_HOST}</div>
      <div className="footer-links">
        <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={CONFIG.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a>
        <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">GitHub</a>

        <a href={`mailto:${CONFIG.email}`}>Email</a>
      </div>
    </footer>
  );
}
