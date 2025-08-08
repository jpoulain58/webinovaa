import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollAnimations = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  // Animation avec ScrollTrigger
  const animateOnScroll = (selector: string, animation: gsap.core.Animation, options = {}) => {
    // Vérifier si on est sur mobile
    const isMobile = window.innerWidth <= 768
    
    // Sur mobile, désactiver certaines animations pour éviter le scroll saccadé
    if (isMobile) {
      // Pour mobile, on utilise des animations plus simples ou on les désactive
      const element = document.querySelector(selector)
      if (element) {
        gsap.set(element, { opacity: 1, y: 0, scale: 1 })
      }
      return null
    }
    
    const defaults = {
      trigger: selector,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
    const config = { ...defaults, ...options }

    return ScrollTrigger.create({
      ...config,
      animation: animation
    })
  }

  // Animation de héro section épique
  const animateHeroSequence = (selectors: {
    title: string,
    subtitle: string,
    buttons?: string,
    background: string
  }, options = {}) => {
    const tl = gsap.timeline()

    // S'assurer que les titres sont visibles dès le début en fallback
    if (selectors.title) {
      gsap.set(selectors.title, { opacity: 1 })
    }
    if (selectors.subtitle) {
      gsap.set(selectors.subtitle, { opacity: 1 })
    }

    // Animation du background avec des particules
    if (selectors.background) {
      tl.fromTo(selectors.background,
        {
          opacity: 0,
          scale: 1.5,
          filter: "blur(20px)"
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out"
        }
      )
    }

    return tl
  }

  // Animation Why Choose Me
  const animateWhyChooseMe = (selector: string, options = {}) => {
    const defaults = {
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out"
    }
    const config = { ...defaults, ...options }

    const tl = gsap.timeline()

    tl.fromTo(selector,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotation: -3
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: config.duration,
        stagger: config.stagger,
        ease: config.ease,
        onComplete: () => {
          // Ajouter un effet de pulsation subtile à la fin
          gsap.to(selector, {
            scale: 1.02,
            duration: 0.3,
            stagger: 0.05,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
          })
        }
      }
    )

    return tl
  }

  // Cleanup des animations ScrollTrigger
  const cleanupScrollTriggers = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  return {
    animateOnScroll,
    animateHeroSequence,
    animateWhyChooseMe,
    cleanupScrollTriggers
  }
} 