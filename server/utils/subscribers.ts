import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!
})

const KEY = 'webinovaa:subscribers'

export async function loadSubscribers(): Promise<{ emails: string[] }> {
  const emails = (await redis.smembers<string>(KEY)) || []
  return { emails }
}

export async function saveSubscribers(data: { emails: string[] }): Promise<void> {
  if (!data.emails?.length) return
  await redis.sadd(KEY, ...data.emails)
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


