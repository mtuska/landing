import logo from '../assets/logo.png'
import { GITHUB_URL } from '../data'
import { GitHubIcon } from './icons'

export function Nav() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(14px)', background: 'rgba(10,11,13,.72)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
      <nav className="wrap" style={{ height: 62, display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--ink)' }}>
          <img src={logo} alt="Noriq" width={32} height={32} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(94,120,255,.4))' }} />
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-.02em' }}>noriq</span>
        </a>
        <div style={{ flex: 1 }} />
        <div className="nav-center" style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          <a className="nav-link" href="#how">How it works</a>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#architecture">Architecture</a>
          <a className="nav-link" href="#roadmap">Roadmap</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a className="nav-link nav-docs" href="#opensource">Docs</a>
          <a className="btn-primary" href={GITHUB_URL} style={{ fontSize: 14, padding: '9px 15px', borderRadius: 9 }}>
            <GitHubIcon size={16} />
            Star on GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
