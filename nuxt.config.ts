// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Date de compatibilité
  compatibilityDate: '2025-08-07',
  
  // Configuration de base
  app: {
    head: {
      title: 'Webinovaa - Agence Web Créative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Agence web créative spécialisée dans la conception de sites web modernes et innovants' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Modules
  modules: [
  ],

  // Configuration runtime
  runtimeConfig: {
    public: {
      siteUrl: 'https://webinovaa.com',
      siteName: 'Webinovaa'
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

  // Configuration du développement
  devtools: { enabled: true }
})
