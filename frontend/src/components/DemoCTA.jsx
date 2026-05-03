import { Link } from 'react-router-dom'

export default function DemoCTA() {
  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, #0077B6 0%, #005F92 40%, #004A73 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-80px', right: '-80px',
        width: 300, height: 300,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-60px', left: '-60px',
        width: 240, height: 240,
        borderRadius: '50%',
        background: 'rgba(0,180,216,0.15)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,255,255,0.12)',
          color: '#fff',
          borderRadius: 100,
          padding: '6px 16px',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34C759', display: 'inline-block' }} />
          Live Demo Available
        </div>

        <h2 style={{ color: '#fff', marginBottom: 20, maxWidth: 600, margin: '0 auto 20px' }}>
          Ready to take control of your health?
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto 40px' }}>
          Try TokenTots right now. No app download. No account needed. Just text.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/demo" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#fff',
            color: '#0077B6',
            padding: '16px 32px',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: '1.05rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#34C759"/>
            </svg>
            Open iMessage & Text TokenTots →
          </Link>
        </div>

        {/* Reassurance */}
        <div style={{
          marginTop: 36,
          display: 'flex',
          gap: 32,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {[
            '✓ No account required',
            '✓ Works on iPhone & Mac',
            '✓ Response in seconds',
          ].map(item => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
