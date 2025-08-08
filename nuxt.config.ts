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
        { name: 'description', content: 'Agence web créative spécialisée dans la conception de sites web modernes et innovants' },
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        // Favicons standard
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        
        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // PWA Icons
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
        
        // Web App Manifest
        { rel: 'manifest', href: '/manifest.json' }
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

  // Optimisations de performance
  experimental: {
    payloadExtraction: false, // Améliore les performances
  },

  // Configuration du développement
  devtools: { enabled: true }
})
