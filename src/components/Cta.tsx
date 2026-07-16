import logo from '../assets/logo.png'
import { GITHUB_URL, README_URL } from '../data'
import { GitHubIcon } from './icons'

export function Cta() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div className="wrap" style={{ paddingTop: 110, paddingBottom: 110, textAlign: 'center' }}>
        <img src={logo} alt="Noriq" width={76} height={76} style={{ objectFit: 'contain', margin: '0 auto 22px', display: 'block', filter: 'drop-shadow(0 0 24px rgba(94,120,255,.5))' }} />
        <h2 className="cta-h2" style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: '-.035em', fontWeight: 700, margin: '0 auto', maxWidth: 760, textWrap: 'balance' }}>
          Give your agents a place to coordinate.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 560, margin: '22px auto 0' }}>
          Open source, self-hostable, MCP-native. Run a coordinated multi-agent project in minutes.
        </p>
        <div style={{ display: 'flex', gap: 13, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
          <a className="btn-primary" href={GITHUB_URL} style={{ fontSize: 15, padding: '14px 24px' }}>
            <GitHubIcon size={17} />
            Star on GitHub
          </a>
          <a className="btn-ghost" href={README_URL} target="_blank" rel="noopener" style={{ fontSize: 15, padding: '14px 24px' }}>Read the docs →</a>
        </div>
      </div>
    </section>
  )
}
