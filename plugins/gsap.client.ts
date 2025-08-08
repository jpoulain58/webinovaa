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

    // Configuration ScrollTrigger optimisée
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true // Améliore les performances sur mobile
    })

    // Injection globale pour utiliser dans les composants
    return {
      provide: {
        gsap,
        ScrollTrigger
      }
    }
  }
}) 