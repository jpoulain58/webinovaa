import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGsapAnimations = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  // Animation de révélation de texte caractère par caractère - PLUS LENTE ET FLUIDE
  const animateTextReveal = (selector: string, options = {}) => {
    const defaults = {
      duration: 0.8, // Plus lent et fluide
      stagger: 0.04, // Plus lent et fluide
      ease: "power2.out", // Ease plus douce
      delay: 0
    }
    const config = { ...defaults, ...options }

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

  // Animation typewriter avec curseur clignotant
  const animateTypewriter = (selector: string, text: string, options = {}) => {
    const defaults = {
      duration: 2,
      ease: "none"
    }
    const config = { ...defaults, ...options }

    const tl = gsap.timeline()
    
    // Efface le texte existant
    tl.set(selector, { text: "" })
    
    // Animation typewriter
    tl.to(selector, {
      duration: config.duration,
      text: text,
      ease: config.ease
    })

    // Ajoute le curseur clignotant
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

  // Animation de cards avec effet stagger sophistiqué - PLUS LENTE ET FLUIDE
  const animateCardsStagger = (selector: string, options = {}) => {
    const defaults = {
      duration: 1.0, // Plus lent et fluide
      stagger: 0.15, // Plus lent et fluide
      ease: "power2.out", // Ease plus douce
      distance: 100
    }
    const config = { ...defaults, ...options }

    return gsap.fromTo(selector,
      {
        opacity: 0,
        y: config.distance,
        scale: 0.8,
        rotation: -5,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
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

  // Animation de morphing avec effet liquide
  const animateMorphingCards = (selector: string, options = {}) => {
    const defaults = {
      duration: 1.5,
      ease: "elastic.out(1, 0.3)"
    }
    const config = { ...defaults, ...options }

    const tl = gsap.timeline()

    tl.fromTo(selector,
      {
        opacity: 0,
        scale: 0,
        borderRadius: "50%",
        background: "radial-gradient(circle, #ff00ff, #00ffff)"
      },
      {
        opacity: 1,
        scale: 1,
        borderRadius: "24px",
        duration: config.duration,
        stagger: 0.1,
        ease: config.ease
      }
    )

    return tl
  }

    // Animation de héro section épique - PLUS LENTE ET FLUIDE
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
          duration: 2, // Plus lent et fluide
          ease: "power2.out"
        }
      )
    }

    // Animation du titre avec effet d'explosion
    if (selectors.title) {
      const chars = document.querySelectorAll(`${selectors.title} .char`)
      if (chars.length > 0) {
        tl.fromTo(`${selectors.title} .char`,
          {
            opacity: 0,
            y: 200,
            rotationY: 180,
            scale: 0.5
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2, // Plus lent et fluide
            stagger: {
              amount: 0.8, // Plus lent et fluide
              from: "center",
              ease: "power2.out"
            },
            ease: "power2.out"
          },
          selectors.background ? "-=1.5" : "0"
        )
      } else {
        // Fallback si pas de .char
        tl.fromTo(selectors.title,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          selectors.background ? "-=1.5" : "0"
        )
      }
    }

    // Animation du sous-titre avec effet de vague
    if (selectors.subtitle) {
      const words = document.querySelectorAll(`${selectors.subtitle} .word`)
      if (words.length > 0) {
        tl.fromTo(`${selectors.subtitle} .word`,
          {
            opacity: 0,
            y: 50,
            skewX: 15
          },
          {
            opacity: 1,
            y: 0,
            skewX: 0,
            duration: 0.8, // Plus lent et fluide
            stagger: 0.1, // Plus lent et fluide
            ease: "power2.out"
          },
          "-=0.8"
        )
      } else {
        // Fallback si pas de .word
        tl.fromTo(selectors.subtitle,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.8"
        )
      }
    }

    // Animation des boutons avec effet magnétique (seulement si ils existent)
    if (selectors.buttons && selectors.buttons.trim() !== '') {
      tl.fromTo(selectors.buttons,
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          rotation: -10
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1, // Plus lent et fluide
          stagger: 0.2, // Plus lent et fluide
          ease: "elastic.out(1, 0.5)"
        },
        "-=1"
      )
    }

    return tl
  }

  // Animation avec ScrollTrigger
  const animateOnScroll = (selector: string, animation: gsap.core.Animation, options = {}) => {
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

  // Animation de hover magnétique pour les cartes
  const addMagneticHover = (selector: string, options = {}) => {
    const defaults = {
      strength: 0.3,
      speed: 0.5 // Plus lent et fluide
    }
    const config = { ...defaults, ...options }

    const elements = gsap.utils.toArray(selector)
    
    elements.forEach((element: any) => {
      const magnetic = element.querySelector('.magnetic') || element

      element.addEventListener('mouseenter', () => {
        gsap.to(magnetic, {
          duration: config.speed,
          scale: 1.05,
          ease: "power2.out"
        })
      })

      element.addEventListener('mouseleave', () => {
        gsap.to(magnetic, {
          duration: config.speed * 1.5,
          x: 0,
          y: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)"
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
          ease: "power2.out"
        })
      })
    })
  }

  // Animation de split text (divise le texte en caractères)
  const splitText = (selector: string) => {
    const elements = document.querySelectorAll(selector)
    
    elements.forEach(element => {
      const text = element.textContent || ''
      const chars = text.split('').map(char => 
        char === ' ' ? '<span class="char">&nbsp;</span>' : `<span class="char">${char}</span>`
      ).join('')
      
      element.innerHTML = chars
    })
  }

  // Animation de split words (divise le texte en mots)
  const splitWords = (selector: string) => {
    const elements = document.querySelectorAll(selector)
    
    elements.forEach(element => {
      const text = element.textContent || ''
      const words = text.split(' ').map(word => 
        `<span class="word">${word}</span>`
      ).join(' ')
      
      element.innerHTML = words
    })
  }

  // Animation spéciale "Pourquoi me choisir" - PLUS LENTE ET FLUIDE
  const animateWhyChooseMe = (selector: string, options = {}) => {
    const defaults = {
      duration: 0.8, // Plus lent et fluide
      stagger: 0.12, // Plus lent et fluide
      ease: "power2.out"
    }
    const config = { ...defaults, ...options }

    const tl = gsap.timeline()

    // Animation du titre avec effet de révélation dramatique
    tl.fromTo(`${selector} h3`,
      {
        opacity: 0,
        y: -50,
        scale: 0.8,
        rotationX: -45,
        transformOrigin: "50% 100%"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: config.duration * 0.8, // Plus lent et fluide
        ease: "back.out(1.7)"
      }
    )

    // Animation des éléments de liste avec effet cascade fluide
    tl.fromTo(`${selector} li`,
      {
        opacity: 0,
        x: -60,
        scale: 0.7,
        rotationY: -25,
        filter: "blur(5px)"
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotationY: 0,
        filter: "blur(0px)",
        duration: config.duration * 0.8, // Plus lent et fluide
        stagger: config.stagger, // Plus lent et fluide
        ease: config.ease
      },
      "-=0.6"
    )

    // Animation des icônes SVG avec effet pop et rotation
    tl.fromTo(`${selector} li div`,
      {
        scale: 0,
        rotation: -180,
        opacity: 0
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6, // Plus lent et fluide
        stagger: config.stagger, // Plus lent et fluide
        ease: "elastic.out(1, 0.7)"
      },
      "-=0.8"
    )
    
    // Animation des SVG à l'intérieur avec un délai
    tl.fromTo(`${selector} li div svg`,
      {
        scale: 0.5,
        rotationY: 90
      },
      {
        scale: 1,
        rotationY: 0,
        duration: 0.4, // Plus lent et fluide
        stagger: config.stagger * 0.5, // Plus lent et fluide
        ease: "back.out(1.7)"
      },
      "-=0.2"
    )

    return tl
  }

  // Animation spéciale pour les cartes "Pourquoi me choisir" avec effet magnetique
  const animateWhyChooseMeCards = (selector: string, options = {}) => {
    const defaults = {
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out"
    }
    const config = { ...defaults, ...options }

    return gsap.fromTo(selector,
      {
        opacity: 0,
        y: 80,
        scale: 0.8,
        rotationX: 30,
        transformOrigin: "50% 100%",
        filter: "blur(8px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        filter: "blur(0px)",
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

  // Cleanup des animations ScrollTrigger
  const cleanupScrollTriggers = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  return {
    animateTextReveal,
    animateTypewriter,
    animateCardsStagger,
    animateMorphingCards,
    animateHeroSequence,
    animateOnScroll,
    addMagneticHover,
    animateWhyChooseMe,
    animateWhyChooseMeCards,
    splitText,
    splitWords,
    cleanupScrollTriggers
  }
} 