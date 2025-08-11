import { loadSubscribers } from '~/server/utils/subscribers'

export default defineEventHandler(async (event) => {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    setResponseStatus(event, 503)
    return { ok: false, message: 'Service abonnement non configuré' }
  }

  const providedKey = (getHeader(event, 'x-api-key') || '').trim()
  const configuredKey = (process.env.NOTIFY_API_KEY || '').trim()
  if (!providedKey || providedKey !== configuredKey) {
    setResponseStatus(event, 401)
    return { ok: false, message: 'Non autorisé' }
  }

  const { emails } = await loadSubscribers()
  const masked = emails.map((e) => {
    const [user, domain] = e.split('@')
    if (!user || !domain) return e
    const start = user.slice(0, 2)
    const end = user.slice(-1)
    return `${start}***${end}@${domain}`
  })
  return { ok: true, count: emails.length, emails: masked }
})


