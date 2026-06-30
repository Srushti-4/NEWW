'use client';

import { useEffect, useRef, useState } from 'react';

export function TextHighlight({ text, className = '' }) {
  const ref = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH * 0.6)));
        setVisibleCount(Math.floor(progress * words.length));
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [words.length]);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            color: i < visibleCount ? 'var(--text)' : 'var(--text3)',
            transition: 'color 0.3s ease',
          }}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  );
}
