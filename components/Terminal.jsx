'use client';

import { useFadeIn } from '@/lib/useFadeIn';

export function Terminal() {
  const ref = useFadeIn();
  return (
    <div className="fade-up" ref={ref} style={{ padding: '0 5vw' }}>
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
          <span className="terminal-title">srushti@portfolio ~ %</span>
        </div>
        <div className="terminal-body">
          <span className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cmd">whoami</span>
          </span>
          <span className="terminal-line">
            Srushti Mohire — Data Engineer @ Infosys
          </span>
          <span className="terminal-line">&nbsp;</span>
          <span className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cmd">cat</span> skills.txt
          </span>
          <span className="terminal-line">
            <span className="terminal-string">Python, SQL, Databricks, Snowflake, AWS, ML</span>
          </span>
          <span className="terminal-line">&nbsp;</span>
          <span className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cmd">echo</span> <span className="terminal-string">&quot;Let&apos;s build something great together&quot;</span>
          </span>
          <span className="terminal-line">
            Let&apos;s build something great together
          </span>
          <span className="terminal-line">&nbsp;</span>
          <span className="terminal-line">
            <span className="terminal-comment"># 13 certifications · 50K+ records/day · 94% ML accuracy</span>
          </span>
          <span className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="typewriter-cursor">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}
