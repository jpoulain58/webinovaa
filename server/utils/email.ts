import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM || 'Webinovaa <onboarding@resend.dev>'

type SendOptions = { wrap?: boolean }

export const sendEmail = async (to: string, subject: string, content: string, options: SendOptions = { wrap: true }) => {
  try {
    // Créer une version texte simple du contenu
    const textContent = content
      .replace(/<[^>]*>/g, '') // Supprimer les balises HTML
      .replace(/&nbsp;/g, ' ') // Remplacer les espaces insécables
      .replace(/\s+/g, ' ') // Normaliser les espaces
      .trim()

    const wrap = options?.wrap !== false
    const htmlWrapped = wrap
      ? `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Webinovaa</title>
        </head>
        <body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #0f172a; background-color: #f4f7fb; margin: 0; padding: 24px;">
          <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 24px rgba(15,23,42,0.12); overflow: hidden;">
            <div style="background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%); padding: 28px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.2px;">Webinovaa</h1>
            </div>
            <div style="padding: 28px;">
              ${content.replace(/\n/g, '<br>')}
              <p style="margin-top:28px;font-size:13px;color:#64748b">Vous recevez cet email car vous vous êtes abonné(e) aux nouveautés Webinovaa.</p>
            </div>
          </div>
        </body>
        </html>
      `
      : content

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [to],
      subject: subject,
      html: htmlWrapped,
      text: textContent // Version texte simple pour la compatibilité
    })

    if (error) {
      console.error('Erreur Resend:', error)
      const message = typeof error === 'string' ? error : (error as any)?.message || JSON.stringify(error)
      throw new Error(message)
    }

    return data
  } catch (error) {
    console.error('Erreur envoi email:', error)
    const message = (error as any)?.message || 'Erreur lors de l\'envoi de l\'email'
    throw new Error(message)
  }
} 