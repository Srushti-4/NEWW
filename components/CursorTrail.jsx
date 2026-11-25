'use client';

import { useEffect, useRef } from 'react';

export function CursorTrail() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    // Skip on touch screens (no cursor) and for users who prefer reduced motion.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.classList.remove('hidden');
    };

    const onLeave = () => {
      dot.classList.add('hidden');
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot hidden" aria-hidden="true" />;
}
