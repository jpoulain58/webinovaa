export const useServices = () => {
  const services = [
    {
      id: 1,
      title: 'Développement Web',
      description: 'Conception de sites sur mesure (vitrine, e-commerce, application). Sites performants, responsive, accessibles, adaptés à votre activité.',
      icon: 'code',
      color: 'primary',
      features: [
        'Sites vitrine professionnels',
        'E-commerce avec paiement sécurisé',
        'Applications web sur mesure',
        'Optimisation des performances',
        'Responsive design'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Design',
      description: 'Création d\'interfaces utilisateurs modernes, épurées et intuitives, centrées sur l\'expérience utilisateur pour renforcer l\'engagement.',
      icon: 'palette',
      color: 'purple',
      features: [
        'Design centré utilisateur',
        'Interfaces modernes et épurées',
        'Wireframes et prototypes',
        'Tests utilisateurs',
        'Design system cohérent'
      ]
    },
    {
      id: 3,
      title: 'Référencement SEO',
      description: 'Optimisation on-page : balises, performances, sémantique, accessibilité et structure. Objectif : meilleure visibilité sur Google.',
      icon: 'search',
      color: 'green',
      features: [
        'Optimisation on-page',
        'Structure sémantique',
        'Performance et Core Web Vitals',
        'Accessibilité WCAG',
        'Suivi des positions'
      ]
    },
    {
      id: 4,
      title: 'Applications Web',
      description: 'Développement d\'applications web interactives, scalables et maintenables avec des stacks modernes et sécurisées.',
      icon: 'app',
      color: 'blue',
      features: [
        'Applications interactives',
        'Architecture scalable',
        'Sécurité renforcée',
        'API REST/GraphQL',
        'Maintenance et évolutions'
      ]
    },
    {
      id: 5,
      title: 'Freelance',
      description: 'Collaboration sur mesure, courte ou longue durée. Renfort en front-end ou fullstack pour vos projets.',
      icon: 'users',
      color: 'orange',
      features: [
        'Collaboration flexible',
        'Projets courts ou longs',
        'Expertise front-end',
        'Développement fullstack',
        'Accompagnement personnalisé'
      ]
    }
  ]

  const getServiceById = (id: number) => {
    return services.find(service => service.id === id)
  }

  const getServicesTeaser = () => {
    return services.map(service => ({
      id: service.id,
      title: service.title,
      description: service.description,
      icon: service.icon,
      color: service.color
    }))
  }

  return {
    services,
    getServiceById,
    getServicesTeaser
  }
} 