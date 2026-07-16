import { steps } from '../data'

export function HowItWorks() {
  return (
    <section id="how" style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'radial-gradient(1100px 520px at 50% -10%,#101319 0%,var(--bg) 60%)' }}>
      <div className="wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="kicker">How it works</div>
        <h2 className="h2" style={{ maxWidth: 820 }}>Orchestrator decomposes. Workers drain. At most one claim per task.</h2>

        <div className="split split-how" style={{ marginTop: 52 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 18, padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                <div className="mono" style={{ flex: 'none', width: 34, height: 34, borderRadius: 9, background: 'color-mix(in oklab,var(--accent) 11%,transparent)', border: '1px solid color-mix(in oklab,var(--accent) 26%,transparent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 5 }}>{s.title}</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--muted)' }}>{s.body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* orchestration graph */}
          <div style={{ position: 'relative', height: 400, border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, background: '#0b0c0f', overflow: 'hidden' }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
              <path d="M50,22 C50,42 22,44 22,58" fill="none" stroke="#4c9dff" strokeWidth={1.4} vectorEffect="non-scaling-stroke" strokeDasharray="2 2.5" opacity={0.7} style={{ animation: 'nq-dash 1.2s linear infinite' }} />
              <path d="M50,22 C50,42 50,44 50,58" fill="none" stroke="#b57bff" strokeWidth={1.4} vectorEffect="non-scaling-stroke" strokeDasharray="2 2.5" opacity={0.7} />
              <path d="M50,22 C50,42 78,44 78,58" fill="none" stroke="#3fd98b" strokeWidth={1.4} vectorEffect="non-scaling-stroke" strokeDasharray="2 2.5" opacity={0.7} style={{ animation: 'nq-dash 1.2s linear infinite' }} />
            </svg>
            {/* orchestrator node */}
            <div style={{ position: 'absolute', left: '50%', top: '22%', transform: 'translate(-50%,-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
              <div className="mono" style={{ position: 'relative', width: 62, height: 62, borderRadius: 16, background: 'linear-gradient(135deg,#f5a623,#e08d1a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', fontWeight: 700, boxShadow: '0 0 0 1px color-mix(in oklab,var(--accent) 40%,transparent),0 0 34px rgba(245,166,35,.35)' }}>
                AT
                <span style={{ position: 'absolute', inset: -6, borderRadius: 22, border: '1.5px solid color-mix(in oklab,var(--accent) 50%,transparent)', animation: 'nq-pulse 2.4s ease-out infinite' }} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>
                atlas <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', background: 'color-mix(in oklab,var(--accent) 12%,transparent)', padding: '1px 5px', borderRadius: 4 }}>ORCH</span>
              </div>
            </div>
            {/* workers */}
            <div style={{ position: 'absolute', left: '22%', top: '58%', transform: 'translate(-50%,-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div className="mono" style={{ position: 'relative', width: 50, height: 50, borderRadius: 14, background: '#4c9dff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', fontWeight: 700, boxShadow: '0 0 26px rgba(76,157,255,.4)' }}>
                NO
                <span style={{ position: 'absolute', right: -3, bottom: -3, width: 11, height: 11, borderRadius: '50%', background: '#3fd98b', border: '2.5px solid var(--bg)' }} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>nova</div>
              <div className="mono" style={{ fontSize: 9, color: '#8fc0ff', background: 'rgba(76,157,255,.1)', border: '1px solid rgba(76,157,255,.3)', padding: '3px 7px', borderRadius: 7, whiteSpace: 'nowrap' }}>NRQ-142 claim</div>
            </div>
            <div style={{ position: 'absolute', left: '50%', top: '58%', transform: 'translate(-50%,-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div className="mono" style={{ position: 'relative', width: 50, height: 50, borderRadius: 14, background: '#b57bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', fontWeight: 700, boxShadow: '0 0 26px rgba(181,123,255,.4)' }}>
                EC
                <span style={{ position: 'absolute', right: -3, bottom: -3, width: 11, height: 11, borderRadius: '50%', background: '#3fd98b', border: '2.5px solid var(--bg)' }} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>echo</div>
              <div className="mono" style={{ fontSize: 9, color: '#cbb0ff', background: 'rgba(181,123,255,.1)', border: '1px solid rgba(181,123,255,.3)', padding: '3px 7px', borderRadius: 7, whiteSpace: 'nowrap' }}>NRQ-138 claim</div>
            </div>
            <div style={{ position: 'absolute', left: '78%', top: '58%', transform: 'translate(-50%,-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div className="mono" style={{ position: 'relative', width: 44, height: 44, borderRadius: 13, background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)', fontWeight: 700 }}>WR</div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>wren</div>
              <div className="mono" style={{ fontSize: 9, color: 'var(--dim)' }}>idle · awaiting claim</div>
            </div>
            <div className="mono" style={{ position: 'absolute', left: '50%', bottom: 14, transform: 'translateX(-50%)', fontSize: 9.5, color: 'var(--dim)', whiteSpace: 'nowrap' }}>single-writer arbiter · conflicts 0</div>
          </div>
        </div>
      </div>
    </section>
  )
}
