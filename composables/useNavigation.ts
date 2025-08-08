export const useNavigation = () => {
  const navigationItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Contact', path: '/contact' }
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Utiliser window.location pour la navigation
      window.location.href = '/contact'
    }
  }

  return {
    navigationItems,
    scrollToContact
  }
} 