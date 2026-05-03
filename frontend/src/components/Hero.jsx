import { Link } from 'react-router-dom'

function PhoneMockup() {
  const messages = [
    { sender: 'user', text: 'I just uploaded my discharge summary. What foods should I avoid?' },
    { sender: 'bot', text: "Based on your hypertension diagnosis, avoid high-sodium foods like canned soups, deli meats, and fast food. I've also created a 7-day low-sodium meal plan for you! 🥗" },
    { sender: 'user', text: 'When should I take my Lisinopril?' },
    { sender: 'bot', text: 'Take Lisinopril once daily in the morning with or without food. I\'ll send you a daily reminder at 8 AM. Want me to set that up?' },
  ]

  return (
    <div style={{
      width: 280,
      background: '#1C1C1E',
      borderRadius: 40,
      padding: '12px 8px',
      boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
      animation: 'float 4s ease-in-out infinite',
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{
        width: 100,
        height: 28,
        background: '#1C1C1E',
        borderRadius: 14,
        margin: '0 auto 8px',
        position: 'relative',
        zIndex: 1,
      }} />

      {/* Screen */}
      <div style={{
        background: '#F2F2F7',
        borderRadius: 32,
        overflow: 'hidden',
        minHeight: 460,
      }}>
        {/* iMessage header */}
        <div style={{
          background: 'rgba(242,242,247,0.9)',
          backdropFilter: 'blur(8px)',
          padding: '12px 16px',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="#fff"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#000' }}>TokenTots</div>
            <div style={{ fontSize: '0.65rem', color: '#34C759' }}>● Active now</div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}>
              <div style={{
                maxWidth: '80%',
                padding: '8px 12px',
                borderRadius: msg.sender === 'user'
                  ? '18px 18px 4px 18px'
                  : '18px 18px 18px 4px',
                background: msg.sender === 'user' ? '#0077B6' : '#E9E9EB',
                color: msg.sender === 'user' ? '#fff' : '#000',
                fontSize: '0.7rem',
                lineHeight: 1.4,
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div style={{
          margin: '8px 10px',
          background: '#fff',
          borderRadius: 20,
          padding: '8px 14px',
          fontSize: '0.7rem',
          color: '#8E8E93',
          border: '1px solid #E5E5EA',
        }}>
          Text a question...
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #F0F9FF 0%, #E0F4FF 60%, #D0EDFF 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 72,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-8%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,119,182,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 60,
          alignItems: 'center',
        }}>
          {/* Left: copy */}
          <div style={{ animation: 'fadeInUp 0.7s ease forwards' }}>
            <div className="section-label" style={{ marginBottom: 20 }}>
              AI Health Companion · iMessage Native
            </div>

            <h1 style={{ marginBottom: 24, color: '#1A1A2E' }}>
              Your Doctor's Advice,{' '}
              <span className="gradient-text">In Your Pocket</span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              maxWidth: 520,
              marginBottom: 40,
              lineHeight: 1.8,
            }}>
              TokenTots is an AI health companion that lives in your iMessages — helping you understand prescriptions, plan meals around your condition, and stay on track every day.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/demo" className="btn btn-primary btn-lg">
                Text the Agent →
              </Link>
              <a href="#how-it-works" className="btn btn-outline btn-lg">
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            <div style={{
              marginTop: 48,
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', gap: -8 }}>
                {['#0077B6','#00B4D8','#22C55E','#7C3AED'].map((c, i) => (
                  <div key={i} style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: c,
                    border: '2px solid #fff',
                    marginLeft: i > 0 ? -10 : 0,
                  }} />
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                <strong style={{ color: '#1A1A2E' }}>500+ patients</strong> managing their health with TokenTots
              </p>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            animation: 'fadeInUp 0.9s ease forwards',
          }} className="hero-phone">
            <PhoneMockup />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-phone { display: none !important; }
        }
      `}</style>
    </section>
  )
}
