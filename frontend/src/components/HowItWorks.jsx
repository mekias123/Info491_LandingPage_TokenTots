const steps = [
  {
    number: '01',
    title: 'Text your documents',
    desc: 'Send a photo or PDF of your prescription, discharge papers, or any medical document directly in iMessage. No app download or account needed.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Ask anything',
    desc: 'Type your health questions naturally — "What can I eat for dinner?" or "Is it safe to take ibuprofen with my heart medication?" TokenTots understands context.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Follow your plan',
    desc: 'Get daily reminders, weekly meal plans, and ongoing guidance — all delivered right in iMessage. Your health routine, finally organized.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2>Up and running<br />in three texts</h2>
          <div className="divider" />
          <p style={{ marginTop: 20 }}>
            No app store. No setup. Just open iMessage and start.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 32,
          position: 'relative',
        }}>
          {steps.map((step, i) => (
            <div key={step.number} style={{ position: 'relative' }}>
              {/* Connector line between cards */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 36,
                  right: -16,
                  width: 32,
                  height: 2,
                  background: 'linear-gradient(90deg, #0077B6, #00B4D8)',
                  zIndex: 1,
                }} className="connector" />
              )}

              <div className="card" style={{ textAlign: 'center', padding: '40px 28px' }}>
                {/* Big number */}
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'rgba(0,119,182,0.1)',
                  lineHeight: 1,
                  marginBottom: -16,
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {step.number}
                </div>

                {/* Icon circle */}
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,119,182,0.1), rgba(0,180,216,0.15))',
                  color: '#0077B6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  {step.icon}
                </div>

                <h3 style={{ marginBottom: 14, color: '#1A1A2E' }}>{step.title}</h3>
                <p style={{ fontSize: '0.93rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* iMessage badge */}
        <div style={{
          marginTop: 56,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: 100,
            padding: '10px 20px',
            boxShadow: 'var(--shadow)',
          }}>
            <div style={{
              width: 28,
              height: 28,
              background: 'linear-gradient(135deg, #34C759, #30D158)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1A1A2E' }}>
              Works natively in Apple iMessage
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
            iOS and macOS supported · No third-party app required
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .connector { display: none !important; }
        }
      `}</style>
    </section>
  )
}
