import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (to: string, subject: string, content: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Webinovaa <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e293b, #0f172a); color: white; padding: 30px; border-radius: 15px;">
            <h1 style="color: #3b82f6; margin-bottom: 20px;">Webinovaa - Nouveau Contact</h1>
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
              ${content.replace(/\n/g, '<br>')}
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 14px; color: #94a3b8;">
              <p>Envoyé depuis le formulaire de contact de Webinovaa</p>
              <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Erreur Resend:', error)
      throw new Error('Erreur lors de l\'envoi de l\'email')
    }

    return data
  } catch (error) {
    console.error('Erreur envoi email:', error)
    throw error
  }
} 