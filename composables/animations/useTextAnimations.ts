import { gsap } from 'gsap'

export const useTextAnimations = () => {
  const { $gsap } = useNuxtApp()

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

  const animateTextReveal = (selector: string, options = {}) => {
    const isMobile = process.server ? false : window.innerWidth <= 768
    
    const elements = gsap.utils.toArray(selector)
    if (!elements || elements.length === 0) {
      console.warn(`GSAP: Target ${selector} not found`)
      return gsap.timeline()
    }
    
    if (isMobile) {
      elements.forEach((element: any) => {
        gsap.set(element, { opacity: 1, y: 0, rotationX: 0 })
      })
      return gsap.timeline()
    }
    
    const defaults = {
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      delay: 0
    }
    const config = getAdaptiveConfig({ ...defaults, ...options })

    return gsap.fromTo(selector, 
      {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: "50% 50% -50px"
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: config.duration,
        stagger: config.stagger,
        ease: config.ease,
        delay: config.delay
      }
    )
  }

  const animateTypewriter = (selector: string, text: string, options = {}) => {
    const defaults = {
      duration: 2,
      ease: "none"
    }
    const config = { ...defaults, ...options }

    const tl = gsap.timeline()
    
    tl.set(selector, { text: "" })
    
    tl.to(selector, {
      duration: config.duration,
      text: text,
      ease: config.ease
    })

    tl.set(selector, {
      onComplete: () => {
        const element = document.querySelector(selector)
        if (element) {
          element.innerHTML += '<span class="cursor-blink">|</span>'
        }
      }
    })

    return tl
  }

  const splitText = (selector: string) => {
    const elements = document.querySelectorAll(selector)
    
    if (!elements || elements.length === 0) {
      console.warn(`GSAP: Target ${selector} not found for splitText`)
      return
    }
    
    elements.forEach(element => {
      const text = element.textContent || ''
      const chars = text.split('')
      
      element.innerHTML = chars
        .map(char => {
          if (char === ' ') {
            return '<span class="char">&nbsp;</span>'
          }
          return `<span class="char">${char}</span>`
        })
        .join('')
    })
  }

  const splitWords = (selector: string) => {
    const elements = document.querySelectorAll(selector)
    
    if (!elements || elements.length === 0) {
      console.warn(`GSAP: Target ${selector} not found for splitWords`)
      return
    }
    
    elements.forEach(element => {
      const text = element.textContent || ''
      const words = text.split(' ')
      
      element.innerHTML = words
        .map(word => `<span class="word">${word}</span>`)
        .join(' ')
    })
  }

  return {
    animateTextReveal,
    animateTypewriter,
    splitText,
    splitWords,
    getAdaptiveConfig
  }
} 