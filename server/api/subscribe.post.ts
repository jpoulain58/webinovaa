import { loadSubscribers, saveSubscribers, isValidEmail } from '~/server/utils/subscribers'

export default defineEventHandler(async (event) => {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    setResponseStatus(event, 503)
    return { ok: false, message: 'Service abonnement non configuré' }
  }
  const body = await readBody<{ email?: string }>(event)
  const email = (body?.email || '').trim().toLowerCase()

  if (!email || !isValidEmail(email)) {
    setResponseStatus(event, 400)
    return { ok: false, message: 'Adresse e-mail invalide.' }
  }

  const data = await loadSubscribers()
  if (data.emails.includes(email)) {
    return { ok: true, message: 'Vous êtes déjà abonné.' }
  }
  data.emails.push(email)
  await saveSubscribers(data)

  return { ok: true, message: 'Abonnement confirmé. Merci !' }
})


