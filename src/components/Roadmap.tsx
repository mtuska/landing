import { phases } from '../data'

export function Roadmap() {
  return (
    <section id="roadmap" className="wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="kicker">Roadmap</div>
      <h2 className="h2" style={{ maxWidth: 720 }}>Shipping in sprint-sized phases. Aggressively.</h2>
      <p className="lead" style={{ maxWidth: 600 }}>
        Phase 1 is the real proof point: two workers claiming concurrently with zero double-claims, a human steering mid-flight.
      </p>

      <div style={{ marginTop: 46, display: 'flex', flexDirection: 'column' }}>
        {phases.map((p) => (
          <div key={p.phase} className="roadmap-row">
            <div className="mono" style={{ fontSize: 12, color: 'var(--dim)', letterSpacing: '.04em' }}>{p.phase}</div>
            <div>
              <div style={{ fontSize: 17.5, fontWeight: 600, letterSpacing: '-.01em', display: 'flex', alignItems: 'center', gap: 9 }}>
                {p.title}
                {p.star && <span style={{ color: 'var(--accent)' }}>★</span>}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--muted)', marginTop: 4 }}>{p.body}</div>
            </div>
            <div className="mono roadmap-status" style={{ fontSize: 10.5, fontWeight: 500, color: p.statusColor, background: p.statusBg, border: `1px solid ${p.statusBorder}`, padding: '5px 11px', borderRadius: 100, whiteSpace: 'nowrap', justifySelf: 'end' }}>
              {p.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
