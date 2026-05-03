const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
    title: 'Scattered Instructions',
    body: 'Discharge papers, prescription bottles, doctor notes — all saying different things, all in different places. Keeping up feels impossible.',
    color: '#EF4444',
    bg: '#FFF5F5',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: 'Forgotten Medications',
    body: 'Life gets busy. Missing a dose here and there silently worsens your condition over time — often without you even noticing.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <circle cx="7" cy="6" r="1" fill="currentColor" />
        <circle cx="7" cy="12" r="1" fill="currentColor" />
        <circle cx="7" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Confusing Food Choices',
    body: `"Eat healthier" doesn't tell you what to actually put in your cart. Condition-specific dietary guidance is complex and rarely spelled out.`,
    color: '#8B5CF6',
    bg: '#FAF5FF',
  },
]

export default function Problem() {
  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Problem</span>
          <h2>Managing your health<br />shouldn't be this hard.</h2>
          <div className="divider" />
          <p style={{ marginTop: 20 }}>
            Receiving a diagnosis or prescription is only the beginning. Most patients are sent home with a pile of paperwork and very little support for what comes next.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 28,
        }}>
          {problems.map((p) => (
            <div key={p.title} className="card" style={{ borderTop: `3px solid ${p.color}` }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: p.bg,
                color: p.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
                {p.icon}
              </div>
              <h3 style={{ marginBottom: 12, color: '#1A1A2E' }}>{p.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Stat bar */}
        <div style={{
          marginTop: 64,
          background: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)',
          borderRadius: 20,
          padding: '40px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 32,
          textAlign: 'center',
        }}>
          {[
            { stat: '50%', label: 'of chronic patients miss doses weekly' },
            { stat: '1 in 3', label: 'patients don\'t understand discharge papers' },
            { stat: '$528B', label: 'annual cost of medication non-adherence in the US' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{stat}</div>
              <p style={{ marginTop: 8, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
