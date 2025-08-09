import { gsap } from 'gsap'

export const useCardAnimations = () => {
  const { $gsap } = useNuxtApp()

  // Configuration adaptative basée sur les performances de l'appareil
  const getAdaptiveConfig = (options: any = {}) => {
    if (process.server) return options
    
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isLowEnd = (navigator.hardwareConcurrency || 1) <= 2
    
    if (prefersReduced) {
      return { ...options, duration: 0.01, ease: "none" }
    }
    
    if (isLowEnd) {
      return { 
        ...options, 
        duration: (options.duration || 1) * 0.5,
        stagger: (options.stagger || 0.1) * 0.5
      }
    }
    
    return options
  }

  // Animation de cards avec effet stagger sophistiqué
  const animateCardsStagger = (selector: string, options = {}) => {
    // Vérifier si l'élément existe
    const elements = gsap.utils.toArray(selector)
    if (!elements || elements.length === 0) {
      console.warn(`GSAP: Target ${selector} not found for animateCardsStagger`)
      return gsap.timeline()
    }
    
    // Vérifier si on est sur mobile
    const isMobile = process.server ? false : window.innerWidth <= 768
    
    // Sur mobile, utiliser des animations plus simples
    if (isMobile) {
      elements.forEach((element: any) => {
        gsap.set(element, { opacity: 1, y: 0, scale: 1, rotation: 0 })
      })
      return gsap.timeline()
    }
    
    const defaults = {
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      distance: 100
    }
    const config = { ...defaults, ...options }

    return gsap.fromTo(selector,
      {
        opacity: 0,
        y: config.distance,
        scale: 0.9,
        rotation: -2
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: config.duration,
        stagger: {
          amount: config.stagger * 3,
          from: "random",
          ease: config.ease
        },
        ease: config.ease
      }
    )
  }

  // Animation de hover magnétique pour les cartes
  const addMagneticHover = (selector: string, options = {}) => {
    const isMobile = process.server ? false : ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    
    const defaults = {
      strength: isMobile ? 0.05 : 0.1,
      speed: isMobile ? 0.3 : 0.4
    }
    const config = { ...defaults, ...options }

    const elements = gsap.utils.toArray(selector)
    
    if (!elements || elements.length === 0) {
      console.warn(`GSAP: Target ${selector} not found for addMagneticHover`)
      return
    }
    
    elements.forEach((element: any) => {
      const magnetic = element.querySelector('.magnetic') || element

      element.addEventListener('mouseenter', () => {
        gsap.to(magnetic, {
          duration: config.speed,
          scale: 1.02,
          ease: "power1.out"
        })
      })

      element.addEventListener('mouseleave', () => {
        gsap.to(magnetic, {
          duration: config.speed * 1.2,
          x: 0,
          y: 0,
          scale: 1,
          ease: "power1.out"
        })
      })

      element.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(magnetic, {
          duration: config.speed,
          x: x * config.strength,
          y: y * config.strength,
          ease: "power1.out"
        })
      })
    })
  }

  // Animation spécialisée pour les cartes "Pourquoi me choisir"
  const animateWhyChooseMeCards = (selector: string, options = {}) => {
    const defaults = {
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }
    const config = getAdaptiveConfig({ ...defaults, ...options })

    return gsap.fromTo(selector,
      {
        opacity: 0,
        y: 80,
        scale: 0.8,
        rotationX: 30,
        transformOrigin: "50% 100%"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: config.duration,
        stagger: {
          amount: config.stagger * 4,
          from: "start",
          ease: config.ease
        },
        ease: config.ease,
        onComplete: () => {
          // Ajouter un effet de rebond subtil à la fin
          gsap.to(selector, {
            y: -5,
            duration: 0.3,
            stagger: 0.05,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
          })
        }
      }
    )
  }

  return {
    animateCardsStagger,
    addMagneticHover,
    animateWhyChooseMeCards,
    getAdaptiveConfig
  }
} 