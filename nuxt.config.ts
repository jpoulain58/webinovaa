// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Date de compatibilité
  compatibilityDate: '2025-08-07',
  
  // Configuration de base
  app: {
    head: {
      title: 'Webinovaa',
      titleTemplate: '%s | Webinovaa',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "Je m'appelle Jérémy, développeur front-end spécialisé Vue.js basé à Lyon. Je crée des sites web modernes, rapides et responsives adaptés à vos besoins." },
        { name: 'keywords', content: 'développeur web freelance lyon, création site web lyon, développement web lyon, développeur front-end lyon, freelance lyon, développeur lyon, développement frontend freelance' },
        { name: 'author', content: 'Webinovaa - Développeur Web Freelance' },
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'language', content: 'fr' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'application-name', content: 'Webinovaa' },
        { name: 'apple-mobile-web-app-title', content: 'Webinovaa' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Webinovaa' },
        { property: 'og:description', content: 'Je suis Jérémy, développeur front-end spécialisé Vue.js basé à Lyon. Je crée des sites web modernes, rapides et responsives adaptés à vos besoins.' },
        { property: 'og:url', content: 'https://www.webinovaa.fr' },
        { property: 'og:site_name', content: 'Webinovaa' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: 'https://www.webinovaa.fr/logos/logo-webinovaa.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Webinovaa' },
        { name: 'twitter:description', content: "Je m'appelle Jérémy, développeur front-end spécialisé Vue.js basé à Lyon. Je crée des sites web modernes, rapides et responsives adaptés à vos besoins." },
        { name: 'twitter:image', content: 'https://www.webinovaa.fr/logos/logo-webinovaa.png' },
        
        // Local Business
        { name: 'geo.region', content: 'FR-69' },
        { name: 'geo.placename', content: 'Lyon' },
        { name: 'geo.position', content: '45.7578137;4.8320114' },
        { name: 'ICBM', content: '45.7578137, 4.8320114' }
      ],
      link: [
        // Favicons standard
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        
        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // PWA Icons
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
        
        // Web App Manifest
        { rel: 'manifest', href: '/manifest.json' },
        
        // Canonical
        { rel: 'canonical', href: 'https://www.webinovaa.fr' },
        
      ]
    }
  },

  // Modules
  modules: [
    '@nuxt/image'
  ],

  // Configuration runtime
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.webinovaa.fr',
      siteName: 'Webinovaa',
      // Active le formulaire si NUXT_PUBLIC_ENABLE_SUBSCRIBE_FORM est truthy (true/1/yes/on)
      // ou automatiquement si Upstash est configuré côté serveur (sans exposer les secrets)
      enableSubscribeForm:
        (() => {
          const raw = (process.env.NUXT_PUBLIC_ENABLE_SUBSCRIBE_FORM || '').toString().toLowerCase()
          const truthy = ['true', '1', 'yes', 'on'].includes(raw)
          const upstashConfigured = !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
          return (truthy || upstashConfigured) ? 'true' : 'false'
        })()
    }
  },

  // Configuration de l'image
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      logo: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 128,
          height: 128
        }
      }
    }
  },

  // Configuration des composants
  components: [
    '~/components'
  ],

  // Configuration CSS
  css: [
    '~/assets/css/main.css',
    '~/assets/css/cursor-effects.css'
  ],

  // Configuration PostCSS
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  // Optimisations de performance
  experimental: {
    payloadExtraction: false, // Améliore les performances
  },

  // Configuration du développement
  devtools: { enabled: true }
})
