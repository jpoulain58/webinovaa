export const useMetaSeo = () => {
  const generateMetaTags = (pageData: {
    title: string
    description: string
    keywords?: string
    url?: string
    image?: string
    type?: string
  }) => {
    const {
      title,
      description,
      keywords,
      url = 'https://www.webinovaa.fr',
      image = 'https://www.webinovaa.fr/logos/logo-webinovaa.png',
      type = 'website'
    } = pageData

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords || 'développeur web freelance lyon, création site web lyon, développement web lyon, développeur front-end lyon, freelance lyon, développeur lyon, développement frontend freelance' },
        { name: 'author', content: 'Webinovaa - Développeur Web Freelance' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        
        // Open Graph
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: 'Webinovaa' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: image },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        
        // Local Business
        { name: 'geo.region', content: 'FR-69' },
        { name: 'geo.placename', content: 'Lyon' },
        { name: 'geo.position', content: '45.7578137;4.8320114' },
        { name: 'ICBM', content: '45.7578137, 4.8320114' }
      ],
      link: [
        { rel: 'canonical', href: url }
      ]
    }
  }

  const generateHomeMetaTags = () => {
    return generateMetaTags({
      title: 'Accueil',
      description: "Je m'appelle Jérémy, développeur front-end spécialisé Vue.js basé à Lyon. Je crée des sites web modernes, rapides et responsives adaptés à vos besoins.",
      keywords: 'développeur web freelance lyon, création site web lyon, développement web lyon, développeur front-end lyon, freelance lyon, développeur lyon, développement frontend freelance',
      url: 'https://www.webinovaa.fr'
    })
  }

  const generateServicesMetaTags = () => {
    return generateMetaTags({
      title: 'Services',
      description: 'Services de développement web à Lyon : création de sites web, développement front-end, optimisation SEO. Développeur web freelance expert en Vue.js, Nuxt.js et Tailwind CSS. Projets sur mesure.',
      keywords: 'services développement web lyon, création site web lyon, développement front-end lyon, optimisation seo lyon, développeur web freelance lyon',
      url: 'https://www.webinovaa.fr/services'
    })
  }

  const generateContactMetaTags = () => {
    return generateMetaTags({
      title: 'Contact',
      description: 'Contactez votre développeur web freelance à Lyon. Création de sites web, développement front-end, optimisation SEO. Devis gratuit et personnalisé. Réponse rapide garantie !',
      keywords: 'contact développeur web lyon, devis site web lyon, développeur freelance lyon, création site web lyon',
      url: 'https://www.webinovaa.fr/contact'
    })
  }

  const generateProjectsMetaTags = () => {
    return generateMetaTags({
      title: 'Réalisations',
      description: 'Découvrez les réalisations de votre développeur web freelance à Lyon. Sites web, applications, e-commerce. Projets web modernes et performants. Portfolio complet disponible.',
      keywords: 'réalisations développeur web lyon, projets web lyon, sites web lyon, applications web lyon, e-commerce lyon',
      url: 'https://www.webinovaa.fr/realisations'
    })
  }

  const generateProjectMetaTags = (projectName: string, description: string) => {
    return generateMetaTags({
      title: `${projectName} – Réalisation`,
      description: `${description} Découvrez ce projet réalisé par votre développeur web freelance à Lyon. Portfolio et réalisations disponibles.`,
      keywords: `${projectName.toLowerCase()}, projet web lyon, développeur web freelance lyon, création site web lyon`,
      url: `https://www.webinovaa.fr/projects/${projectName.toLowerCase()}`
    })
  }

  return {
    generateMetaTags,
    generateHomeMetaTags,
    generateServicesMetaTags,
    generateContactMetaTags,
    generateProjectsMetaTags,
    generateProjectMetaTags
  }
} 