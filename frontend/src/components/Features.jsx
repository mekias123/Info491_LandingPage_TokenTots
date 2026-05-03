const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: 'Document Upload',
    desc: 'Share a photo or PDF of your prescription, lab results, or discharge summary. TokenTots reads it, extracts the key details, and remembers them for every future conversation.',
    tag: 'Smart OCR',
    color: '#0077B6',
    bg: 'rgba(0,119,182,0.06)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: 'Medication Guidance',
    desc: 'Know exactly when, how, and with what to take each of your medications. Get reminders at the right time and instant answers about drug interactions and side effects.',
    tag: 'Daily Reminders',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.06)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Personalized Meal Plans',
    desc: `Get weekly meal ideas built specifically around your condition — whether that's low-sodium for hypertension, low-glycemic for diabetes, or anti-inflammatory for arthritis.`,
    tag: 'Condition-Aware',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.06)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Condition-Aware Advice',
    desc: 'Ask anything about your health in plain language. TokenTots gives answers tailored to your specific diagnosis — not generic internet health tips.',
    tag: 'AI-Powered',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.06)',
  },
]

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2>Everything you need to<br />manage your health confidently</h2>
          <div className="divider" />
          <p style={{ marginTop: 20 }}>
            Built around your specific diagnosis, not a one-size-fits-all approach. TokenTots adapts to you.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Accent stripe */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 3,
                background: f.color,
              }} />

              {/* Tag */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: f.bg,
                color: f.color,
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: 100,
                marginBottom: 20,
              }}>
                {f.tag}
              </div>

              {/* Icon */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: f.bg,
                color: f.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 18,
              }}>
                {f.icon}
              </div>

              <h3 style={{ marginBottom: 12, color: '#1A1A2E' }}>{f.title}</h3>
              <p style={{ fontSize: '0.93rem', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
