'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Animated counter that counts up from 0 to target when element is visible.
 * Handles numbers with suffixes like "60%", "50K+", "13", "94%"
 * @param {string} value - The target value string (e.g., "60%", "50K+", "13")
 * @param {number} duration - Animation duration in ms
 */
export function useCountUp(value, duration = 1500) {
  const [display, setDisplay] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Parse the numeric part and suffix
  const numMatch = value.match(/^([\d.]+)/);
  const num = numMatch ? parseFloat(numMatch[1]) : 0;
  const suffix = value.replace(/^[\d.]+/, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  function animate() {
    const startTime = performance.now();
    const isFloat = value.includes('.');

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;

      if (isFloat) {
        setDisplay(current.toFixed(1) + suffix);
      } else {
        setDisplay(Math.floor(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    }

    requestAnimationFrame(step);
  }

  return { ref, display };
}
