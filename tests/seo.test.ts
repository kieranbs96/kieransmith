import assert from 'node:assert/strict'
import { type ChildProcess, spawn } from 'node:child_process'
import { once } from 'node:events'
import { after, before, test } from 'node:test'
import { setTimeout as delay } from 'node:timers/promises'

interface PageSchema {
  '@type': string
  mainEntity?: {
    '@type': string
    name: string
    sameAs: string[]
  }
  itemListElement?: Array<{ item: string; name: string }>
}

const origin = 'https://www.kieransmith.co.uk'
const base = process.env.SEO_BASE_URL ?? 'http://127.0.0.1:3107'
let server: ChildProcess | undefined
let serverOutput = ''

before(async () => {
  if (process.env.SEO_BASE_URL) return
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3107'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  server.stdout?.on('data', (data: Buffer) => {
    serverOutput += data.toString()
  })
  server.stderr?.on('data', (data: Buffer) => {
    serverOutput += data.toString()
  })
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

async function getHtml(path: string): Promise<string> {
  const response = await fetch(`${base}${path}`)
  assert.equal(response.status, 200, path)
  return response.text()
}

function meta(html: string, name: string): string | undefined {
  const tag = html.match(new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]*>`))?.[0]
  return tag?.match(/content="([^"]*)"/)?.[1]
}

const pages = [
  { path: '/', title: 'Kieran Smith', topic: 'React' },
  { path: '/experience', title: 'Experience', topic: 'Global' },
  { path: '/projects/global-player', title: 'Global Player', topic: 'Next.js' },
]

for (const { path, title, topic } of pages) {
  test(`${path} exposes self-canonical metadata and visible content without JavaScript`, async () => {
    const html = await getHtml(path)
    // Next.js normalizes the homepage metadata URL by removing its trailing slash.
    const metadataUrl = path === '/' ? origin : `${origin}${path}`
    assert.ok(html.includes(`<link rel="canonical" href="${metadataUrl}"`))
    assert.ok(html.match(/<title>([\s\S]*?)<\/title>/)?.[1].includes(title))
    assert.ok(meta(html, 'og:title')?.includes(title))
    assert.ok(meta(html, 'twitter:title')?.includes(title))
    assert.equal(meta(html, 'og:url'), metadataUrl)
    const description = meta(html, 'description')
    assert.ok(description)
    assert.ok(description.includes(topic))
    assert.ok(description.length >= 120 && description.length <= 160)
    assert.equal(meta(html, 'og:description'), description)
    assert.equal(meta(html, 'twitter:description'), description)
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1)
    assert.ok(!/style="[^"]*opacity:\s*0(?:;|")/.test(html), 'Initial content must be visible')
    assert.ok(!meta(html, 'robots')?.includes('noindex'))
    const schemas: PageSchema[] = [
      ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
    ].map((match) => JSON.parse(match[1]))
    if (path === '/') {
      const profile = schemas.find((schema) => schema['@type'] === 'ProfilePage')
      assert.ok(profile?.mainEntity)
      assert.equal(profile.mainEntity['@type'], 'Person')
      assert.equal(profile.mainEntity.name, 'Kieran Smith')
      assert.ok(profile.mainEntity.sameAs.includes('https://github.com/kieranbs96/'))
      assert.ok(profile.mainEntity.sameAs.every((url) => url.startsWith('https://')))
      for (const page of pages.slice(1)) assert.ok(html.includes(`href="${page.path}"`))
    } else {
      const breadcrumbs = schemas.find((schema) => schema['@type'] === 'BreadcrumbList')
      assert.ok(breadcrumbs?.itemListElement)
      assert.equal(breadcrumbs.itemListElement[0].item, `${origin}/`)
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
  assert.ok(response.headers.get('content-type')?.includes('xml'))
  const xml = await response.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(urls.toSorted(), pages.map(({ path }) => `${origin}${path}`).toSorted())
  assert.ok(!xml.includes('<lastmod>'))
})

test('Global Player uses the supplied hero on the homepage and project page', async () => {
  for (const path of ['/', '/projects/global-player']) {
    const html = await getHtml(path)
    const image = html.match(
      /<img\b[^>]*alt="Global Player web app showing podcast playback and live radio"[^>]*>/,
    )?.[0]
    assert.ok(image, `${path} must display the Global Player hero`)
    assert.ok(image.includes('global-player-hero.png'))
    assert.ok(image.includes('width="1448"'))
    assert.ok(image.includes('height="1086"'))
    assert.ok(!html.includes('global-player-placeholder.svg'))
    assert.ok(!html.includes('twitter-clone'))
  }
  const response = await fetch(`${base}/projects/global-player-hero.png`)
  assert.equal(response.status, 200)
  assert.ok(response.headers.get('content-type')?.includes('image/png'))
})

test('Global Player explains the engineering work and stack for each subject', async () => {
  const html = await getHtml('/projects/global-player')
  const headings = [...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g)].map((match) => match[1])
  assert.deepEqual(headings, [
    'Web app',
    'Internal content tools',
    'Alexa',
    'Entitlement expression parser',
    'Other platform work',
    'CI',
  ])
  for (const technology of [
    'CSS Modules',
    'Atomic Design',
    'React Testing Library',
    'Mock Service Worker',
    'Apollo',
    'GraphQL',
    'Chakra UI',
    'Motion',
    'Vite',
    'AWS Lambda',
    'ASK SDK',
    'AWS SDK',
    'Axios',
    'Node.js',
    'Zod',
    'Codegen',
    'Vitest',
    'TVML',
    'Python',
    'GitHub Actions',
    'Jenkins',
    'Docker',
  ]) {
    assert.ok(html.includes(technology), `Project copy must mention ${technology}`)
  }
  assert.ok(meta(html, 'description')?.includes('Alexa'))
})

test('homepage shows personal interests and curated music, game and book artwork', async () => {
  const html = await getHtml('/')
  const section = html.match(
    /<section\b[^>]*aria-labelledby="outside-work-heading"[^>]*>([\s\S]*?)<\/section>/,
  )?.[1]
  assert.ok(section, 'Homepage must have a labelled Outside work section')
  const labels = [...section.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g)].map((match) => match[1])
  assert.deepEqual(labels, ['On repeat', 'Playing', 'Reading'])
  assert.ok(!section.includes('href=""'), 'Empty links must not navigate back to the page')
  const figures = [...section.matchAll(/<figure\b[^>]*>([\s\S]*?)<\/figure>/g)]
  assert.equal(figures.length, 3)
  for (const [, figure] of figures) {
    assert.ok(
      figure.indexOf('<img') < figure.indexOf('<figcaption'),
      'Artwork must precede its caption',
    )
  }
  for (const text of [
    'Outside work',
    'game',
    'football',
    'CFC',
    'kitchen',
    'Reading',
    'On repeat',
    'Playing',
    'Valheim',
    'Salt Fat Acid Heat',
    'Samin Nosrat',
    'If Time Could Talk',
    'Wesley Joseph',
  ])
    assert.ok(section.includes(text), `Personal section must include ${text}`)
  assert.ok(
    section.includes('src="/personal/chelsea-fc.svg"'),
    'Chelsea crest must accompany the hobbies copy',
  )
  const crestResponse = await fetch(`${base}/personal/chelsea-fc.svg`)
  assert.equal(crestResponse.status, 200)
  assert.ok(crestResponse.headers.get('content-type')?.includes('image/svg+xml'))
  for (const artwork of [
    { file: 'salt-fat-acid-heat.jpg', width: 1990, height: 2560 },
    { file: 'forever-ends-someday.webp', width: 800, height: 800 },
    { file: 'valheim.png', width: 360, height: 360 },
  ]) {
    const image: string | undefined = [...section.matchAll(/<img\b[^>]*>/g)]
      .map((match) => match[0])
      .find((tag) => tag.includes(artwork.file))
    assert.ok(image, `Artwork must be displayed for ${artwork.file}`)
    assert.match(image, /alt="[^"]+"/)
    assert.ok(image.includes(`width="${artwork.width}"`))
    assert.ok(image.includes(`height="${artwork.height}"`))
    assert.ok(image.includes('loading="lazy"'))
    const response = await fetch(`${base}/personal/${artwork.file}`)
    assert.equal(response.status, 200)
  }
})

test('unknown projects remain genuine non-indexable 404s', async () => {
  const response = await fetch(`${base}/projects/not-a-real-project`)
  assert.equal(response.status, 404)
  assert.ok(meta(await response.text(), 'robots')?.includes('noindex'))
})
