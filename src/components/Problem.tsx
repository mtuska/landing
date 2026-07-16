import { agentFirst, humanFirst } from '../data'

export function Problem() {
  return (
    <section className="wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="kicker">The problem</div>
      <h2 className="h2" style={{ maxWidth: 760 }}>Every PM tool was built for humans, then bolted AI on as an afterthought.</h2>
      <p className="lead" style={{ maxWidth: 640 }}>
        Noriq inverts the model. The hard problem isn't tracking work — it's <b>coordination between multiple agents on the same project</b>: no collisions, clean decomposition, and a way to steer without stopping.
      </p>

      <div className="grid-2" style={{ marginTop: 44 }}>
        <div style={{ border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: '26px 26px 8px', background: 'rgba(255,255,255,.015)' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 6 }}>Human-first tools</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {humanFirst.map((r) => (
              <div key={r} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                <span style={{ flex: 'none', width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,92,92,.12)', color: '#ff8a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, marginTop: 1 }}>✕</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--muted)' }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: '1px solid color-mix(in oklab,var(--accent) 30%,transparent)', borderRadius: 14, padding: '26px 26px 8px', background: 'color-mix(in oklab,var(--accent) 5%,transparent)' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>Noriq · agent-first</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {agentFirst.map((r) => (
              <div key={r} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                <span style={{ flex: 'none', width: 18, height: 18, borderRadius: '50%', background: 'color-mix(in oklab,var(--accent) 16%,transparent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink)' }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
