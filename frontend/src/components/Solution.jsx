const bullets = [
  { icon: '📄', text: 'Upload your prescription, discharge summary, or any medical doc — once.' },
  { icon: '💬', text: 'Ask anything in plain English. No medical jargon required.' },
  { icon: '⏰', text: 'Receive smart medication reminders at the right times.' },
  { icon: '🥗', text: 'Get personalized weekly meal plans tailored to your condition.' },
]

function MiniPhone() {
  return (
    <div style={{
      width: 240,
      background: '#1C1C1E',
      borderRadius: 36,
      padding: '10px 6px',
      boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
      flexShrink: 0,
    }}>
      <div style={{ width: 80, height: 24, background: '#1C1C1E', borderRadius: 12, margin: '0 auto 8px' }} />
      <div style={{ background: '#F2F2F7', borderRadius: 28, overflow: 'hidden', minHeight: 380 }}>
        {/* Header */}
        <div style={{
          background: '#F2F2F7',
          padding: '10px 14px',
          borderBottom: '1px solid #E5E5EA',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <div style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#0077B6,#00B4D8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="#fff"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>TokenTots</div>
            <div style={{ fontSize: '0.6rem', color: '#34C759' }}>Online</div>
          </div>
        </div>

        {/* Chat */}
        <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { s: 'user', t: '📎 discharge_summary.pdf' },
            { s: 'bot',  t: "Got it! I've read your summary. You have Type 2 Diabetes. Want me to start with medications or a meal plan?" },
            { s: 'user', t: 'Meal plan please!' },
            { s: 'bot',  t: "Here's your 7-day low-glycemic meal plan: \n\nDay 1: Oats + berries, grilled chicken salad, baked salmon 🐟" },
          ].map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.s === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '82%',
                padding: '7px 10px',
                borderRadius: m.s === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: m.s === 'user' ? '#0077B6' : '#E9E9EB',
                color: m.s === 'user' ? '#fff' : '#000',
                fontSize: '0.62rem',
                lineHeight: 1.45,
                whiteSpace: 'pre-line',
              }}>{m.t}</div>
            </div>
          ))}
          {/* Typing indicator */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              background: '#E9E9EB',
              padding: '8px 14px',
              borderRadius: '16px 16px 16px 4px',
              display: 'flex', gap: 4, alignItems: 'center',
            }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width: 5, height: 5, borderRadius: '50%', background: '#8E8E93',
                  animation: `typing 1.2s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes typing {
          0%,60%,100% { transform: translateY(0); opacity: 0.4; }
          30%          { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default function Solution() {
  return (
    <section id="solution" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }} className="solution-grid">
          {/* Left: copy */}
          <div>
            <span className="section-label">The Solution</span>
            <h2 style={{ marginTop: 12, marginBottom: 20 }}>
              One text.{' '}
              <span className="gradient-text">All the answers.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', marginBottom: 36 }}>
              TokenTots connects to your medical documents and gives you actionable, condition-aware guidance right in iMessage — the app you already use every day.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {bullets.map(b => (
                <li key={b.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: 2 }}>{b.icon}</span>
                  <p style={{ margin: 0, color: '#1A1A2E', fontSize: '0.95rem' }}>{b.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: phone */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MiniPhone />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
