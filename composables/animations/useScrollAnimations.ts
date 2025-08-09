import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollAnimations = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  const animateOnScroll = (selector: string, animation: gsap.core.Animation, options = {}) => {
    const element = document.querySelector(selector)
    if (!element) {
      console.warn(`GSAP: Target ${selector} not found for scroll animation`)
      return null
    }
    
    const isMobile = window.innerWidth <= 768
    
    if (isMobile) {
      gsap.set(element, { opacity: 1, y: 0, scale: 1 })
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

  const animateHeroSequence = (selectors: {
    title: string,
    subtitle: string,
    buttons?: string,
    background: string
  }, options = {}) => {
    const tl = gsap.timeline()

    if (selectors.title) {
      gsap.set(selectors.title, { opacity: 1 })
    }
    if (selectors.subtitle) {
      gsap.set(selectors.subtitle, { opacity: 1 })
    }

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