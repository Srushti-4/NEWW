export function FooterMarquee() {
  const text = 'Thanks for visiting my portfolio!';
  const items = Array(8).fill(text);

  return (
    <div className="footer-marquee-wrap" aria-hidden="true">
      <div className="footer-marquee-track">
        {items.map((t, i) => (
          <span key={i} className="footer-marquee-item">{t} ✦</span>
        ))}
      </div>
    </div>
  );
}
