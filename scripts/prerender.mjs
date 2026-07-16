// Injects the server-rendered app HTML into dist/index.html so crawlers
// (and first paint) get full content without executing JS. The client
// bundle hydrates it on load.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(pathToFileURL(resolve(root, 'dist-server/entry-server.js')).href)

const indexPath = resolve(root, 'dist/index.html')
const template = readFileSync(indexPath, 'utf-8')
const marker = '<!--app-html-->'
if (!template.includes(marker)) {
  throw new Error('prerender: <!--app-html--> marker not found in dist/index.html')
}
writeFileSync(indexPath, template.replace(marker, render()))
rmSync(resolve(root, 'dist-server'), { recursive: true, force: true })
console.log('prerender: injected app HTML into dist/index.html')
