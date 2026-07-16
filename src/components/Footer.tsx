import logo from '../assets/logo.png'
import { footerCols } from '../data'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)', background: '#08090b' }}>
      <div className="wrap footer-grid" style={{ paddingTop: 54, paddingBottom: 40 }}>
        <div>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink)', marginBottom: 14 }}>
            <img src={logo} alt="Noriq" width={30} height={30} style={{ objectFit: 'contain' }} />
            <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-.02em' }}>noriq</span>
          </a>
          <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--dim)', maxWidth: 280 }}>
            The coordination layer for autonomous agents. Open source, self-hostable, MCP-native.
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.head}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 14 }}>{c.head}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.links.map((l) => (
                <a key={l.label} className="footer-link" href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{l.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ paddingTop: 20, paddingBottom: 20, borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div className="mono" style={{ fontSize: 12, color: 'var(--dim)' }}>© 2026 noriq · MIT licensed</div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--dim)' }}>built on Cloudflare Workers · Durable Objects · D1</div>
      </div>
    </footer>
  )
}
