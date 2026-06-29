'use client';

const ICONS = [
  '🤖', '🧠', '📊', '⚡', '🔬', '💻', '🗄️', '☁️', '🔗', '📈',
  '🐍', '⚙️', '🌐', '🔧', '📡', '🛡️', '💡', '🧪', '📱', '🔮',
];

export function FloatingText() {
  return (
    <div className="floating-text-container" aria-hidden="true">
      {ICONS.map((icon, i) => (
        <span
          key={i}
          className="floating-icon"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${i * 1.5}s`,
            fontSize: `${1 + Math.random() * 1.5}rem`,
          }}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}
