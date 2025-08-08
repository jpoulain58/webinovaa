export const useParticles = () => {
  const createParticles = (containerSelector: string, particleCount: number = 30) => {
    const particlesContainer = document.querySelector(containerSelector)
    if (!particlesContainer) return

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-white/30 rounded-full'
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