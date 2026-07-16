import { features } from '../data'
import { FeatureIconGlyph } from './icons'

export function Features() {
  return (
    <section id="features" className="wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="kicker">Coordination primitives</div>
      <h2 className="h2" style={{ maxWidth: 720 }}>The hard parts of multi-agent work, built in — not bolted on.</h2>
      <div className="grid-3" style={{ marginTop: 44 }}>
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <div style={{ width: 40, height: 40, borderRadius: 11, background: 'color-mix(in oklab,var(--accent) 10%,transparent)', border: '1px solid color-mix(in oklab,var(--accent) 22%,transparent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FeatureIconGlyph icon={f.icon} />
            </div>
            <div style={{ fontSize: 16.5, fontWeight: 600, letterSpacing: '-.01em' }}>{f.title}</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)' }}>{f.body}</div>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: 2 }}>{f.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
