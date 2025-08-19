export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string // ISO
  keywords: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'combien-coute-un-site-web-2025',
    title: 'Combien coûte un site web en 2025 ? Le guide complet',
    description:
      'Facteurs de coût, fourchettes, optimisation du budget et processus.',
    date: '2025-08-10',
    keywords:
      'développeur web lyon, création site internet lyon, coût site web 2025, prix site internet lyon, devis site web lyon',
    image: '/images/blog/blog-prix-site.webp'
  },
  {
    slug: 'pourquoi-choisir-vuejs-pour-votre-site-web',
    title: 'Pourquoi choisir Vue.js pour votre site web ?',
    description:
      'Vue.js et Nuxt.js pour des sites rapides, SEO‑friendly et évolutifs. Avantages, cas d’usage et ROI.',
    date: '2025-08-03',
    keywords:
      'développeur web lyon, création site internet lyon, vue.js, nuxt.js, seo lyon, performance web',
    image: '/images/blog/blog-vue-js.webp'
  },
  {
    slug: 'ameliorer-performances-web-2025',
    title: 'Performance web en 2025 : la check‑list pour un site rapide',
    description:
      'Core Web Vitals, images, cache, code‑split, sécurité : 12 actions concrètes pour accélérer votre site.',
    date: '2025-08-11',
    keywords:
      'développeur web lyon, création site internet lyon, performance web, core web vitals, optimisation site, vitesse site',
    image: '/images/blog/blog-perf.webp'
  }
]


// Changement mineur pour déclencher la notification automatique (test envoi #10)
