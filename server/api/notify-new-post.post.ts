import { loadSubscribers } from '~/server/utils/subscribers'
import { sendEmail } from '~/server/utils/email'

export default defineEventHandler(async (event) => {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    setResponseStatus(event, 503)
    return { ok: false, message: 'Service abonnement non configuré' }
  }
  // Sécurité simple via clé API
  const providedKey = (getHeader(event, 'x-api-key') || '').trim()
  const configuredKey = (process.env.NOTIFY_API_KEY || '').trim()
  if (!providedKey || providedKey !== configuredKey) {
    setResponseStatus(event, 401)
    return { ok: false, message: 'Non autorisé' }
  }

  const body = await readBody<{ title?: string; url?: string; excerpt?: string }>(event)
  const title = body?.title || 'Nouvel article'
  const url = body?.url || ''
  const excerpt = body?.excerpt || ''

  const { emails } = await loadSubscribers()
  const total = emails.length
  if (total === 0) {
    return { ok: true, sent: 0, total }
  }

  const subject = `🆕 ${title}`
  const html = `
    <h2 style="margin:0 0 12px 0;font-size:20px;color:#0f172a;">${title}</h2>
    ${excerpt ? `<p style="margin:0 0 16px 0; color:#334155;">${excerpt}</p>` : ''}
    ${url ? `<p style="margin:0 0 20px 0;"><a href="${url}" style="background:#3b82f6;color:#fff;padding:10px 14px;border-radius:10px;text-decoration:none;display:inline-block">Lire l'article</a></p>` : ''}
  `

  let sent = 0
  const failed: Array<{ to: string; error: string }> = []
  for (const to of emails) {
    try {
      await sendEmail(to, subject, html, { wrap: true })
      sent += 1
    } catch (e) {
      console.error('Notify error for', to, e)
      const message = (e as any)?.message || 'unknown'
      failed.push({ to, error: message })
    }
  }

  return { ok: true, sent, total, failed }
})


