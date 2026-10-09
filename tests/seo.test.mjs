import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { setTimeout as delay } from 'node:timers/promises'
import { after, before, test } from 'node:test'

const origin = 'https://www.kieransmith.co.uk'
const base = process.env.SEO_BASE_URL ?? 'http://127.0.0.1:3107'
let server
let serverOutput = ''

before(async () => {
  if (process.env.SEO_BASE_URL) return
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3107'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  server.stdout.on('data', (data) => { serverOutput += data })
  server.stderr.on('data', (data) => { serverOutput += data })
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Next.js exited: ${serverOutput}`)
    try {
      await fetch(base, { signal: AbortSignal.timeout(1000) })
      return
    } catch {
      await delay(200)
    }
  }
  throw new Error(`Next.js did not start: ${serverOutput}`)
})

after(async () => {
  if (!server || server.exitCode !== null) return
  const stopped = once(server, 'exit')
  server.kill()
  await stopped
})

async function getHtml(path) {
  const response = await fetch(`${base}${path}`)
  assert.equal(response.status, 200, path)
  return response.text()
}

function meta(html, name) {
  const tag = html.match(new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]*>`))?.[0]
  return tag?.match(/content="([^"]*)"/)?.[1]
}

const pages = [
  { path: '/', title: 'Kieran Smith', topic: 'React' },
  { path: '/experience', title: 'Experience', topic: 'Global' },
  { path: '/projects/global-player', title: 'Global Player', topic: 'Next.js' },
  { path: '/projects/twitter-clone', title: 'Twitter Clone', topic: 'Prisma' },
]

for (const { path, title, topic } of pages) {
  test(`${path} exposes self-canonical metadata and visible content without JavaScript`, async () => {
    const html = await getHtml(path)
    // Next.js normalizes the homepage metadata URL by removing its trailing slash.
    const metadataUrl = path === '/' ? origin : `${origin}${path}`
    assert.ok(html.includes(`<link rel="canonical" href="${metadataUrl}"`))
    assert.ok(html.match(/<title>(.*?)<\/title>/s)?.[1].includes(title))
    assert.ok(meta(html, 'og:title')?.includes(title))
    assert.ok(meta(html, 'twitter:title')?.includes(title))
    assert.equal(meta(html, 'og:url'), metadataUrl)
    const description = meta(html, 'description')
    assert.ok(description?.includes(topic))
    assert.ok(description.length >= 120 && description.length <= 160)
    assert.equal(meta(html, 'og:description'), description)
    assert.equal(meta(html, 'twitter:description'), description)
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1)
    assert.ok(!/style="[^"]*opacity:\s*0(?:;|")/.test(html), 'Initial content must be visible')
    assert.ok(!meta(html, 'robots')?.includes('noindex'))
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
      .map((match) => JSON.parse(match[1]))
    if (path === '/') {
      const profile = schemas.find((schema) => schema['@type'] === 'ProfilePage')
      assert.equal(profile?.mainEntity['@type'], 'Person')
      assert.equal(profile.mainEntity.name, 'Kieran Smith')
      assert.ok(profile.mainEntity.sameAs.includes('https://github.com/kieranbs96/'))
      assert.ok(profile.mainEntity.sameAs.every((url) => url.startsWith('https://')))
      for (const page of pages.slice(1)) assert.ok(html.includes(`href="${page.path}"`))
    } else {
      const breadcrumbs = schemas.find((schema) => schema['@type'] === 'BreadcrumbList')
      assert.equal(breadcrumbs?.itemListElement[0].item, `${origin}/`)
      assert.equal(breadcrumbs.itemListElement[1].item, `${origin}${path}`)
      assert.equal(breadcrumbs.itemListElement[1].name, title)
      assert.ok(html.includes('aria-label="Breadcrumb"'))
    }
  })
}

test('crawl routes expose exactly the public pages without invented modification dates', async () => {
  const robotsResponse = await fetch(`${base}/robots.txt`)
  assert.equal(robotsResponse.status, 200)
  const robots = await robotsResponse.text()
  assert.ok(robots.includes('User-Agent: *'))
  assert.ok(robots.includes('Allow: /'))
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`))
  const response = await fetch(`${base}/sitemap.xml`)
  assert.equal(response.status, 200)
  assert.ok(response.headers.get('content-type').includes('xml'))
  const xml = await response.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(urls.toSorted(), pages.map(({ path }) => `${origin}${path}`).toSorted())
  assert.ok(!xml.includes('<lastmod>'))
})

test('unknown projects remain genuine non-indexable 404s', async () => {
  const response = await fetch(`${base}/projects/not-a-real-project`)
  assert.equal(response.status, 404)
  assert.ok(meta(await response.text(), 'robots')?.includes('noindex'))
})
