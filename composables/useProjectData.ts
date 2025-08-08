import type { Project } from '~/types'

export const useProjectData = () => {
  const projects: Project[] = [
    {
      title: 'Edelweiss',
      image: '/images/realisation-audelweiss.avif',
      description: 'E-commerce artisanal autour des créations au crochet. Repenser le site pour le rendre moderne, fluide, gérable par le client, tout en respectant une esthétique artisanale.',
      technologies: ['Nuxt', 'Tailwind CSS', 'Strapi', 'MySQL', 'Stripe'],
      features: [
        'CMS headless (Strapi)',
        'Paiement sécurisé (Stripe)',
        'Back-office autonome',
        'Design responsive',
        'SEO optimisé'
      ],
      slug: 'edelweiss'
    },
    {
      title: 'LabGear',
      image: '/images/realisation-labgear.avif',
      description: 'Application web pour les laboratoires scientifiques. Gestion d\'inventaire en temps réel, emprunts de matériel, rapports d\'utilisation.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Brevo'],
      features: [
        'Gestion d\'inventaire',
        'Réservation de matériel',
        'Notifications automatiques',
        'Interface claire',
        'Rapports détaillés'
      ],
      slug: 'labgear'
    },
    {
      title: 'Webinovaa',
      image: '/images/realisation-webinovaa.png',
      description: 'Site vitrine professionnel. Développement sur mesure, SEO, responsive, branding minimaliste et fluide.',
      technologies: ['Nuxt', 'Tailwind CSS', 'GSAP', 'PWA', 'Pinia'],
      features: [
        'Design moderne',
        'Animations fluides',
        'PWA optimisée',
        'SEO complet',
        'Performance optimale'
      ],
      slug: 'webinovaa'
    }
  ]

  const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug)
  }

  const getProjectLink = (projectTitle: string): string => {
    const slugMap: { [key: string]: string } = {
      'Edelweiss': '/projects/edelweiss',
      'LabGear': '/projects/labgear',
      'Webinovaa': '/projects/webinovaa'
    }
    return slugMap[projectTitle] || '/realisations'
  }

  return {
    projects,
    getProjectBySlug,
    getProjectLink
  }
} 