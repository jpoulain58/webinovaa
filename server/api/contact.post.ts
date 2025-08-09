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

    // Préparer le contenu de l'email
    const emailContent = `
Nouveau message de contact depuis Webinovaa

Nom: ${firstName} ${lastName}
Email: ${email}
Type de projet: ${projectTypeDisplay}

Message:
${message}

---
Envoyé depuis le formulaire de contact de Webinovaa
    `.trim()

    // Envoi d'email avec Resend
    const { sendEmail } = await import('~/server/utils/email')
    
    await sendEmail(
      'contact.webinovaa@gmail.com',
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