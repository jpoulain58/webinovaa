export const useHomeData = () => {
  const services = [
    {
      title: 'Développement Web',
      description: 'Sites vitrine, e-commerce et applications web sur mesure avec les technologies modernes.',
      icon: 'code'
    },
    {
      title: 'UX/UI Design',
      description: 'Interfaces utilisateur modernes et intuitives centrées sur l\'expérience utilisateur.',
      icon: 'palette'
    },
    {
      title: 'Référencement SEO',
      description: 'Optimisation complète pour améliorer votre visibilité sur les moteurs de recherche.',
      icon: 'search'
    },
    {
      title: 'Applications Web',
      description: 'Applications web interactives et scalables avec des stacks modernes et sécurisées.',
      icon: 'app'
    },
    {
      title: 'Freelance',
      description: 'Collaboration sur mesure, courte ou longue durée pour vos projets web.',
      icon: 'user'
    },
    {
      title: 'Maintenance',
      description: 'Support technique et maintenance continue pour garantir la performance de votre site.',
      icon: 'wrench'
    }
  ]

  const whyChooseMe = [
    {
      icon: '🚀',
      title: 'Performance Optimisée',
      items: [
        'Sites ultra-rapides avec un score de performance de 95+',
        'Optimisation SEO complète pour un meilleur référencement',
        'Code propre et maintenable suivant les meilleures pratiques',
        'Tests automatisés pour garantir la qualité'
      ]
    },
    {
      icon: '🎨',
      title: 'Design Moderne',
      items: [
        'Interfaces utilisateur intuitive et responsive design',
        'Animations fluides et interactions engageantes',
        'Respect des guidelines d\'accessibilité WCAG',
        'Identité visuelle cohérente et professionnelle'
      ]
    },
    {
      icon: '⚡',
      title: 'Technologies Modernes',
      items: [
        'Vue.js 3, Nuxt 3, React, Next.js selon vos besoins',
        'Tailwind CSS pour un design system cohérent',
        'TypeScript pour un code plus robuste',
        'Déploiement automatisé avec CI/CD'
      ]
    },
    {
      icon: '🛡️',
      title: 'Sécurité & Fiabilité',
      items: [
        'Authentification sécurisée et gestion des rôles',
        'Protection contre les vulnérabilités OWASP',
        'Sauvegarde automatique et récupération',
        'Monitoring en temps réel et alertes'
      ]
    }
  ]

  const stats = [
    { number: '15+', label: 'Projets réalisés' },
    { number: '98%', label: 'Clients satisfaits' },
    { number: '24h', label: 'Temps de réponse' },
    { number: '100%', label: 'Mobile-friendly' }
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigateTo('/contact')
    }
  }

  return {
    services,
    whyChooseMe,
    stats,
    scrollToContact
  }
} 