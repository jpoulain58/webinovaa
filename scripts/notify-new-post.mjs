#!/usr/bin/env node

// Simple CLI pour notifier les abonnés d'un nouvel article via l'endpoint /api/notify-new-post
// Usage:
//   node scripts/notify-new-post.mjs \
//     --title "Titre" \
//     --url "https://www.webinovaa.fr/blog/slug" \
//     --excerpt "Résumé" \
//     --api "https://www.webinovaa.fr/api/notify-new-post" \
//     --key "YOUR_NOTIFY_API_KEY"

const args = process.argv.slice(2)

function parseArgs(argv) {
  const out = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith('--')) {
      const key = a.slice(2)
      const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true
      out[key] = val
    }
  }
  return out
}

function usage() {
  console.log(`Usage:\n  node scripts/notify-new-post.mjs \\\n    --title "Titre" \\\n    --url "https://domaine/blog/slug" \\\n    --excerpt "Résumé" [--api "https://domaine/api/notify-new-post" --key "NOTIFY_API_KEY"]\n\nAlternativement, définissez les variables d'env:\n  NOTIFY_API_URL, NOTIFY_API_KEY`)
}

const opts = parseArgs(args)

const title = opts.title || process.env.NOTIFY_TITLE
const url = opts.url || process.env.NOTIFY_URL
const excerpt = opts.excerpt || process.env.NOTIFY_EXCERPT || ''
const api = opts.api || process.env.NOTIFY_API_URL
const key = opts.key || process.env.NOTIFY_API_KEY

if (!title || !url) {
  usage()
  process.exit(1)
}
if (!api || !key) {
  console.error('Erreur: NOTIFY_API_URL et NOTIFY_API_KEY requis (via flags ou env).')
  usage()
  process.exit(1)
}

async function main() {
  const res = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    },
    body: JSON.stringify({ title, url, excerpt })
  })
  if (!res.ok) {
    const text = await res.text()
    console.error('Échec:', res.status, text)
    process.exit(1)
  }
  const data = await res.json()
  console.log('Succès:', data)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})


