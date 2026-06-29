'use client';

import { useCountUp } from '@/lib/useCountUp';

export function AnimatedStat({ value, label }) {
  const { ref, display } = useCountUp(value, 1500);

  return (
    <div className="hero-stat" ref={ref}>
      <dt className="hero-stat-n">{display}</dt>
      <dd className="hero-stat-l">{label}</dd>
    </div>
  );
}
