const ICONS = [
  '🤖', '🧠', '📊', '⚡', '🔬', '💻', '🗄️', '☁️', '🔗', '📈',
  '🐍', '⚙️', '🌐', '🔧', '📡', '🛡️', '💡', '🧪', '📱', '🔮',
];

// Deterministic pseudo-random (same on server and client) — Math.random() here
// caused hydration mismatches and made the icons jump on load.
const rand = (i, salt) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

export function FloatingText() {
  return (
    <div className="floating-text-container" aria-hidden="true">
      {ICONS.map((icon, i) => (
        <span
          key={i}
          className="floating-icon"
          style={{
            left: `${(rand(i, 1) * 90 + 5).toFixed(2)}%`,
            animationDuration: `${(15 + rand(i, 2) * 20).toFixed(2)}s`,
            animationDelay: `${i * 1.5}s`,
            fontSize: `${(1 + rand(i, 3) * 1.5).toFixed(2)}rem`,
          }}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}
