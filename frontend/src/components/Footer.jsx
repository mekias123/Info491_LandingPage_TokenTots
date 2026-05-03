import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: '#0F172A',
      color: '#94A3B8',
      paddingTop: 64,
      paddingBottom: 32,
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36,
                height: 36,
                background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="#fff"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>TokenTots</span>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
              Health guidance that meets you where you are — right in iMessage.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {/* Social icons (placeholder) */}
              {['twitter','linkedin'].map(s => (
                <a key={s} href="#" style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94A3B8',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                >
                  {s === 'twitter' ? 'X' : 'in'}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: 20, fontSize: '0.9rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Features', href: '/#features' },
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Try Demo', href: '/demo' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} style={{
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#94A3B8'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: 20, fontSize: '0.9rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'About', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Contact', href: '#' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} style={{
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#94A3B8'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: '0.85rem', margin: 0 }}>
            © 2025 TokenTots. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', margin: 0 }}>
            Not a substitute for professional medical advice.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  )
}
