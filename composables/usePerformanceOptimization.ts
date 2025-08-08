export const usePerformanceOptimization = () => {
  // Détection des capacités de l'appareil
  const isLowEndDevice = () => {
    if (process.server) return false
    
    // Détection basée sur navigator.hardwareConcurrency et navigator.deviceMemory
    const cores = navigator.hardwareConcurrency || 1
    const memory = (navigator as any).deviceMemory || 1
    
    return cores <= 2 || memory <= 2
  }

  // Détection de la préférence pour les animations réduites
  const prefersReducedMotion = () => {
    if (process.server) return false
    
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  // Configuration adaptative des animations GSAP
  const getOptimizedGSAPConfig = () => {
    const isReduced = prefersReducedMotion()
    const isLowEnd = isLowEndDevice()
    
    if (isReduced) {
      return {
        duration: 0.01,
        ease: "none",
        disable: true
      }
    }
    
    if (isLowEnd) {
      return {
        duration: 0.3,
        ease: "power1.out",
        stagger: 0.1,
        reduced: true
      }
    }
    
    return {
      duration: 1.2,
      ease: "power1.out",
      stagger: 0.15,
      reduced: false
    }
  }

  // Optimisation des images
  const getOptimizedImageSizes = (baseSize: string) => {
    return `(max-width: 640px) 320px, (max-width: 768px) 640px, ${baseSize}`
  }

  // Debounce pour les événements de scroll
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  // Optimisation du scroll
  const optimizeScrollEvents = (callback: Function) => {
    if (process.server) return
    
    const debouncedCallback = debounce(callback, 16) // ~60fps
    
    // Utilise requestAnimationFrame pour de meilleures performances
    const optimizedCallback = () => {
      requestAnimationFrame(() => debouncedCallback())
    }
    
    return optimizedCallback
  }

  // Nettoyage des animations GSAP inactives
  const cleanupInactiveAnimations = () => {
    if (process.server) return
    
    const { $gsap } = useNuxtApp()
    if ($gsap) {
      // Nettoie les tweens terminés
      $gsap.globalTimeline.getChildren(true, true, false).forEach((tween: any) => {
        if (tween.progress() === 1 && !tween.isActive()) {
          tween.kill()
        }
      })
    }
  }

  // Observer pour le lazy loading manuel
  const createLazyObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
    if (process.server) return null
    
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    }
    
    return new IntersectionObserver(callback, options)
  }

  // Préchargement intelligent des images critiques
  const preloadCriticalImages = (imagePaths: string[]) => {
    if (process.server) return
    
    imagePaths.forEach(path => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = path
      document.head.appendChild(link)
    })
  }

  // Monitoring des performances
  const measurePerformance = (name: string, fn: Function) => {
    if (process.server) return fn()
    
    const start = performance.now()
    const result = fn()
    const end = performance.now()
    
    console.log(`Performance [${name}]: ${end - start}ms`)
    return result
  }

  return {
    isLowEndDevice,
    prefersReducedMotion,
    getOptimizedGSAPConfig,
    getOptimizedImageSizes,
    debounce,
    optimizeScrollEvents,
    cleanupInactiveAnimations,
    createLazyObserver,
    preloadCriticalImages,
    measurePerformance
  }
} 