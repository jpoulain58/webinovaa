export const useParticles = () => {
  const createParticles = (containerSelector: string, particleCount: number = 15) => {
    // Réduire le nombre de particules pour de meilleures performances
    if (process.server) return
    
    const particlesContainer = document.querySelector(containerSelector)
    if (!particlesContainer) return

    // Vérifier si l'utilisateur préfère les animations réduites
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Réduire le nombre sur les appareils moins puissants
    const actualCount = (navigator.hardwareConcurrency || 4) < 4 ? Math.floor(particleCount / 2) : particleCount

    for (let i = 0; i < actualCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite`
      particle.style.animationDelay = Math.random() * 3 + 's'
      particlesContainer.appendChild(particle)
    }
  }

  const createParallaxEffect = () => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = document.querySelectorAll('.parallax-element')
      
      parallax.forEach(element => {
        if (element instanceof HTMLElement) {
          const speed = 0.3
          element.style.transform = `translateY(${scrolled * speed}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    
    // Fonction de nettoyage
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }

  return {
    createParticles,
    createParallaxEffect
  }
} 