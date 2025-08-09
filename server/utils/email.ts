import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (to: string, subject: string, content: string) => {
  try {
    // Créer une version texte simple du contenu
    const textContent = content
      .replace(/<[^>]*>/g, '') // Supprimer les balises HTML
      .replace(/&nbsp;/g, ' ') // Remplacer les espaces insécables
      .replace(/\s+/g, ' ') // Normaliser les espaces
      .trim()

    const { data, error } = await resend.emails.send({
      from: 'Webinovaa <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau Contact - Webinovaa</title>
        </head>
        <body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f4; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Webinovaa - Nouveau Contact</h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                ${content.replace(/\n/g, '<br>')}
              </div>
              
              <!-- Footer -->
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
                <p style="margin: 5px 0;">Envoyé depuis le formulaire de contact de Webinovaa</p>
                <p style="margin: 5px 0;">Date: ${new Date().toLocaleString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: textContent // Version texte simple pour la compatibilité
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