import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Enregistrement des plugins GSAP
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    
    // Configuration globale
    gsap.defaults({
      duration: 1,
      ease: "power2.out"
    })

    // Configuration ScrollTrigger
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
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