import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'var(--font-jakarta), sans-serif',
    }}>
      <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔍</div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2rem', maxWidth: '400px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0.65rem 1.4rem',
          borderRadius: '50px',
          fontSize: '0.875rem',
          fontWeight: 600,
          background: '#3b6bcc',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}
