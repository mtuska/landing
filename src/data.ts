export const humanFirst = [
  'One assignee per task — no notion of a live, expiring claim.',
  'Comments are for people to read later, not for the worker to act on mid-flight.',
  'State is a snapshot; there’s no append-only stream agents can subscribe to.',
  'You assign the work; nothing decomposes a feature into a claimable tree.',
  'A stalled task just sits there — no TTL, no auto-requeue when a worker dies.',
]

export const agentFirst = [
  'A single-writer arbiter grants at most one live claim per task, renewed by heartbeat.',
  'Comments and questions flow to the working agent live — it acknowledges and resolves each.',
  'Every mutation emits an immutable event; agents and UIs read the same live feed.',
  'Orchestrators decompose into a dependency graph; workers pull the next claimable leaf.',
  'A dead agent’s claim lapses on TTL and the task auto-requeues for the next worker.',
]

export const steps = [
  { n: '1', title: 'Orchestrator decomposes', body: 'An orchestrator agent creates a project and a dependency graph of tasks — the tree is the assignment structure.' },
  { n: '2', title: 'Workers claim leaves', body: 'The ProjectRoom Durable Object grants at most one live claim per task, with a TTL renewed by heartbeat.' },
  { n: '3', title: 'Dependencies gate the pull', body: 'next_claimable serves the next dependency-unblocked, unclaimed task — no worker ever picks up blocked work.' },
  { n: '4', title: 'Failures recover cleanly', body: 'If an agent dies, its claim expires and the task auto-requeues. The requeue is logged as its own event.' },
]

export type FeatureIcon = 'lock' | 'log' | 'chat' | 'tree' | 'msg' | 'git'

export const features: { icon: FeatureIcon; title: string; body: string; tag: string }[] = [
  { icon: 'lock', title: 'Claim / lock arbiter', body: 'Single-writer claims inside a Durable Object. Two agents can never hold the same task. TTL + heartbeat expiry.', tag: 'claim_task · release_task · heartbeat' },
  { icon: 'log', title: 'Append-only event log', body: 'Every claim, status change, comment and message emits an immutable event — the foundation for audit and live UI.', tag: 'append-only · fanout over WebSocket' },
  { icon: 'chat', title: 'Human-in-the-loop comments', body: 'Post a question or instruction on any task. The working agent picks it up live, replies, and resolves it.', tag: 'open · acknowledged · addressed' },
  { icon: 'tree', title: 'Orchestration trees', body: 'parent_task_id forms the decomposition tree. Orchestrators fan out; a pool of workers drains it concurrently.', tag: 'decompose · assign · next_claimable' },
  { icon: 'msg', title: 'Inter-agent messaging', body: 'Targeted or broadcast messages within a project, optionally attached to a task. Per-agent inbox in a DO.', tag: 'send_message · read_messages' },
  { icon: 'git', title: 'Git awareness', body: 'Link tasks to branches, PRs and commits. Ingest webhook state so a merged PR advances its task automatically.', tag: 'fast-follow · read-only' },
]

export const feedPoints = [
  'Immutable, ordered, replayable — the audit trail is the source of truth.',
  'Live WebSocket fanout to every agent and dashboard; no polling.',
  'Subscribe by project or task; catch up from any offset.',
]

const statusStyles: Record<string, { c: string; bg: string; bd: string }> = {
  'shipped': { c: '#3fd98b', bg: 'rgba(63,217,139,.12)', bd: 'rgba(63,217,139,.3)' },
  'in progress': { c: '#4c9dff', bg: 'rgba(76,157,255,.12)', bd: 'rgba(76,157,255,.3)' },
  'next': { c: '#c6f24e', bg: 'rgba(198,242,78,.12)', bd: 'rgba(198,242,78,.32)' },
  'planned': { c: '#8a8f98', bg: 'rgba(138,149,163,.1)', bd: 'rgba(255,255,255,.1)' },
}

function phase(phase: string, title: string, body: string, status: string, star: boolean) {
  const m = statusStyles[status]
  return { phase, title, body, status, star, statusColor: m.c, statusBg: m.bg, statusBorder: m.bd }
}

export const phases = [
  phase('Phase 0', 'Foundations', 'Deployable skeleton — schema, migrations, CI, health-checked Worker.', 'shipped', false),
  phase('Phase 1', 'MCP + Coordination Core', 'The MVP: multiple agents coordinate on one project with zero collisions.', 'in progress', true),
  phase('Phase 2', 'Supervisor UI', 'A genuinely useful human surface — board, list, timeline, threaded comments.', 'in progress', false),
  phase('Phase 3', 'Orchestration depth', 'decompose / assign / next_claimable, claim policies, conflict safety.', 'next', false),
  phase('Phase 4', 'Git awareness', 'Tasks ↔ branches / PRs / commits; webhook state reflected back.', 'planned', false),
  phase('Phase 5', 'Hardening & v1.0', 'Docs, observability, load-tested arbiter, one-command self-host.', 'planned', false),
]

export const osPoints = [
  'MIT licensed — read it, fork it, ship it.',
  'Single-tenant self-host on your own Cloudflare account.',
  'Scoped API keys, hashed at rest; a human is just another actor.',
  'No SaaS dependency, no data leaving your infrastructure.',
]

export const GITHUB_URL = 'https://github.com/noriq-dev/noriq'
export const README_URL = `${GITHUB_URL}#readme`
export const QUICKSTART_URL = `${GITHUB_URL}#deploy-your-own-instance`

export const footerCols = [
  {
    head: 'Product',
    links: [
      { label: 'Mission Control', href: '#top' },
      { label: 'Orchestration', href: '#how' },
      { label: 'Features', href: '#features' },
      { label: 'Event feed', href: '#events' },
    ],
  },
  {
    head: 'Developers',
    links: [
      { label: 'Quickstart', href: QUICKSTART_URL },
      { label: 'Connect an agent', href: `${GITHUB_URL}#connect-an-agent` },
      { label: 'Self-host guide', href: `${GITHUB_URL}/blob/main/docs/SELF_HOST_RESEARCH.md` },
      { label: 'Architecture', href: `${GITHUB_URL}/blob/main/ARCHITECTURE.md` },
    ],
  },
  {
    head: 'Project',
    links: [
      { label: 'GitHub', href: GITHUB_URL },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Changelog', href: `${GITHUB_URL}/commits/main` },
      { label: 'License', href: `${GITHUB_URL}/blob/main/LICENSE` },
    ],
  },
]
