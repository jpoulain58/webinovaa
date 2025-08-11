export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { firstName, lastName, email, projectType, message } = body

    // Validation des données
    if (!firstName || !lastName || !email || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs obligatoires doivent être remplis'
      })
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Format d\'email invalide'
      })
    }

    // Traitement du type de projet
    let projectTypeDisplay = 'Non spécifié'
    if (projectType) {
      if (Array.isArray(projectType)) {
        // Si c'est un tableau, joindre les types
        projectTypeDisplay = projectType.length > 0 ? projectType.join(', ') : 'Non spécifié'
      } else {
        // Si c'est une string, l'utiliser directement
        projectTypeDisplay = projectType
      }
    }

    // Fonction pour nettoyer le contenu
    const cleanContent = (text: string) => {
      return text
        .replace(/[<>]/g, '') // Supprimer les caractères HTML dangereux
        .replace(/\n/g, '<br>') // Convertir les retours à la ligne
        .trim()
    }

    // Préparer le contenu de l'email
    const emailContent = `
<h2 style="color: #1e293b; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Nouveau message de contact depuis Webinovaa</h2>

<div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h3 style="color: #1e293b; margin-top: 0;">Informations du contact :</h3>
  <p style="margin: 10px 0;"><strong>Nom :</strong> ${cleanContent(firstName)} ${cleanContent(lastName)}</p>
  <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${cleanContent(email)}" style="color: #3b82f6; text-decoration: none;">${cleanContent(email)}</a></p>
  <p style="margin: 10px 0;"><strong>Type de projet :</strong> ${cleanContent(projectTypeDisplay)}</p>
</div>

<div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
  <h3 style="color: #1e293b; margin-top: 0;">Message :</h3>
  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-top: 10px;">
    ${cleanContent(message)}
  </div>
</div>
    `.trim()

    // Envoi d'email avec Resend
    const { sendEmail } = await import('~/server/utils/email')
    
    await sendEmail(
      'contact@webinovaa.fr',
      `Nouveau contact - ${firstName} ${lastName}`,
      emailContent
    )

    return {
      success: true,
      message: 'Message envoyé avec succès'
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
    })
  }
}) 