import { Link } from 'react-router-dom'

const PHONE_NUMBER = '+15551234567'
const PHONE_DISPLAY = '(555) 123-4567'

const starters = [
  {
    icon: '🍽️',
    label: 'Meal planning',
    prompt: 'Create a 7-day meal plan for a low-sodium diet',
  },
  {
    icon: '💊',
    label: 'Medication safety',
    prompt: 'Can I take ibuprofen with my blood pressure medication?',
  },
  {
    icon: '🩺',
    label: 'Condition guidance',
    prompt: 'What foods should I avoid with Type 2 diabetes?',
  },
]

export default function DemoPage() {
  const smsHref = `sms:${PHONE_NUMBER}`

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #F0F9FF 0%, #E0F4FF 60%, #D0EDFF 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Simple top bar */}
      <header style={{
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32,
            height: 32,
            background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="#fff"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: '1rem', color: '#1A1A2E' }}>TokenTots</span>
        </Link>
        <Link to="/" style={{
          fontSize: '0.875rem',
          color: '#64748B',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontWeight: 500,
        }}>
          ← Back to home
        </Link>
      </header>

      {/* Main content */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
          {/* Live badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(52,199,89,0.12)',
            color: '#15803D',
            borderRadius: 100,
            padding: '6px 16px',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34C759', display: 'inline-block' }} />
            Agent is live
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#1A1A2E',
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            Try TokenTots
          </h1>

          <p style={{
            color: '#64748B',
            fontSize: '1.1rem',
            marginBottom: 48,
            lineHeight: 1.7,
          }}>
            Send a text to see the agent in action.<br />No signup, no app download required.
          </p>

          {/* Phone card */}
          <div style={{
            background: '#fff',
            borderRadius: 20,
            padding: '40px 36px',
            boxShadow: '0 12px 40px rgba(0,119,182,0.12)',
            border: '1px solid #E2E8F0',
            marginBottom: 32,
          }}>
            {/* iMessage icon */}
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #34C759, #30D158)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 6px 20px rgba(52,199,89,0.3)',
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: 8, fontWeight: 500 }}>
              TokenTots Agent Number
            </p>

            {/* Phone number */}
            <div style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
              fontWeight: 800,
              color: '#0077B6',
              letterSpacing: '0.02em',
              marginBottom: 28,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {PHONE_DISPLAY}
            </div>

            {/* CTA button */}
            <a
              href={smsHref}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
                color: '#fff',
                padding: '18px 32px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: '1.05rem',
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(0,119,182,0.35)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,119,182,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,119,182,0.35)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="rgba(255,255,255,0.9)"/>
              </svg>
              Open iMessage & Text TokenTots →
            </a>
          </div>

          {/* Starter prompts */}
          <div style={{ textAlign: 'left' }}>
            <p style={{
              textAlign: 'center',
              color: '#94A3B8',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: 16,
            }}>
              Not sure what to ask? Try one of these:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {starters.map(s => (
                <a
                  key={s.prompt}
                  href={`sms:${PHONE_NUMBER}&body=${encodeURIComponent(s.prompt)}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    background: '#fff',
                    border: '1px solid #E2E8F0',
                    borderRadius: 12,
                    padding: '14px 18px',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,119,182,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#1A1A2E', fontWeight: 500 }}>
                      "{s.prompt}"
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" style={{ marginLeft: 'auto', flexShrink: 0 }}>
                    <polyline points="9,18 15,12 9,6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Fine print */}
          <p style={{ color: '#CBD5E1', fontSize: '0.78rem', marginTop: 32 }}>
            TokenTots is not a substitute for professional medical advice, diagnosis, or treatment.
            Always consult a qualified healthcare provider.
          </p>
        </div>
      </main>
    </div>
  )
}
