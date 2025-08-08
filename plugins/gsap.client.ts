import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Enregistrement des plugins GSAP
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    
    // Configuration globale pour des animations équilibrées
    gsap.defaults({
      duration: 0.8, // Équilibré entre fluidité et réactivité
      ease: "power1.out" // Ease plus douce
    })

    // Configuration ScrollTrigger optimisée pour mobile
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true, // Améliore les performances sur mobile
      syncInterval: 60 // Synchronisation plus fréquente pour mobile
    })

    // Optimisations spécifiques pour mobile
    if (window.innerWidth <= 768) {
      // Réduire la fréquence des animations sur mobile
      ScrollTrigger.config({
        syncInterval: 120, // Synchronisation moins fréquente sur mobile
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
      })
    }

    // Injection globale pour utiliser dans les composants
    return {
      provide: {
        gsap,
        ScrollTrigger
      }
    }
  }
}) 