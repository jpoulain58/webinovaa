#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const siteUrl = process.env.SITE_URL || process.env.NOTIFY_SITE_URL || ''
if (!siteUrl) {
  console.error('SITE_URL (ou NOTIFY_SITE_URL) doit être défini')
  process.exit(1)
}

const filePath = join(__dirname, '..', 'data', 'blogPosts.ts')
const src = readFileSync(filePath, 'utf8')

// Extraction naïve des entrées { slug: '...', title: '...', description: '...', date: '...' }
const regex = /\{\s*slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?description:\s*'([^']*)'[\s\S]*?date:\s*'([^']+)'/g
const posts = []
let m
while ((m = regex.exec(src)) !== null) {
  const [_, slug, title, description, date] = m
  posts.push({ slug, title, description, date })
}

if (posts.length === 0) {
  console.error('Aucun post trouvé dans data/blogPosts.ts')
  process.exit(1)
}

posts.sort((a, b) => b.date.localeCompare(a.date))
const latest = posts[0]
const url = `${siteUrl.replace(/\/$/, '')}/blog/${latest.slug}`

// Sortie pour GitHub Actions
const githubOutput = process.env.GITHUB_OUTPUT
if (githubOutput) {
  const fs = await import('node:fs')
  fs.appendFileSync(githubOutput, `title=${latest.title}\n`)
  fs.appendFileSync(githubOutput, `url=${url}\n`)
  fs.appendFileSync(githubOutput, `excerpt=${latest.description}\n`)
} else {
  console.log(JSON.stringify({ title: latest.title, url, excerpt: latest.description }))
}


