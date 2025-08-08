<template>
  <div>
    <!-- Hero Section avec Effets 3D -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex flex-col justify-center">
      <!-- Particules Interactives -->
      <div class="absolute inset-0" ref="particlesContainer"></div>
      
      <!-- Effet de Parallaxe -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div class="container-custom relative z-10 py-20">
        <div class="text-center max-w-5xl mx-auto" ref="heroContent" data-gsap="hero-content">
          <h1 class="text-6xl md:text-8xl font-black mb-12 gsap-3d force-visible" ref="mainTitle" data-gsap="main-title">
            <span class="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-1">
              Mes
            </span>
            <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-2">
              Réalisations
            </span>
          </h1>
          <p class="text-2xl md:text-3xl text-slate-300 mb-16 leading-relaxed gsap-optimized force-visible" ref="subtitle" data-gsap="subtitle">
            Découvrez une sélection de projets qui illustrent mon expertise en développement web moderne. 
            Chaque réalisation reflète mon engagement pour la qualité et l'innovation.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid avec Effets 3D -->
    <section class="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Effet de fond animé -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12" ref="projectsGrid" data-gsap="projects-grid">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title"
            class="group cursor-pointer perspective-1000 gsap-optimized project-card transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2"
            :data-gsap="`project-card-${index}`"
          >
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
              <!-- Project Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  :class="project.title === 'Webinovaa' ? 'object-[center_bottom] scale-115' : 'object-center scale-107'"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              <!-- Project Content -->
              <div class="p-8">
                <div class="mb-6">
                  <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                  <p class="text-slate-300 leading-relaxed text-lg mb-6">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Technologies -->
                <div class="mb-8">
                  <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                    Technologies utilisées
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-sm font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Features -->
                <div class="mb-8">
                  <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                    Fonctionnalités clés
                  </h4>
                  <div class="space-y-3">
                    <div 
                      v-for="feature in project.features" 
                      :key="feature"
                      class="flex items-start"
                    >
                      <div class="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <span class="text-slate-300">{{ feature }}</span>
                    </div>
                  </div>
                </div>

                <!-- CTA -->
                <NuxtLink 
                  :to="getProjectLink(project.title)"
                  class="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer block text-center"
                >
                  <span class="relative z-10">Voir le projet</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Chiffres <span class="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">clés</span>
          </h2>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Quelques statistiques qui témoignent de la qualité de mes réalisations
          </p>
        </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
 
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                95%
              </div>
              <div class="text-slate-300 text-lg">Performance moyenne</div>
            </div>
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                24h
              </div>
              <div class="text-slate-300 text-lg">Temps de réponse</div>
            </div>
          </div>
      </div>
    </section>

    <!-- CTA Section avec Effets 3D -->
    <section class="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-12">
            Prêt à <span class="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">commencer</span> ?
          </h2>
          <p class="text-2xl text-blue-100 mb-16 leading-relaxed">
            Votre projet mérite la même attention et le même soin que ceux présentés ici
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink 
              to="/contact"
              class="group relative px-12 py-6 bg-gradient-to-r from-white to-blue-100 text-blue-900 text-xl font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/50 cursor-pointer"
            >
              <span class="relative z-10">Discutons de votre projet</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </NuxtLink>
            <NuxtLink 
              to="/services"
              class="group relative px-12 py-6 bg-gradient-to-r from-transparent to-white/10 text-white text-xl font-bold rounded-2xl border border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 cursor-pointer"
            >
              <span class="relative z-10">Découvrir mes services</span>
              <svg class="w-6 h-6 ml-3 inline-block transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Réalisations - Webinovaa',
  meta: [
    { name: 'description', content: 'Découvrez mes réalisations en développement web : e-commerce, applications web et sites vitrine avec les technologies modernes.' }
  ]
})

// Utilisation du composable centralisé
const { projects, getProjectLink } = useProjectData()

// 🚀 Animations GSAP épiques
const { 
  animateTextReveal, 
  animateCardsStagger,
  animateHeroSequence,
  animateOnScroll,
  splitText,
  splitWords,
  cleanupScrollTriggers
} = useGsapAnimations()

// Animations et effets interactifs
onMounted(async () => {
  // Attendre que GSAP soit disponible
  await nextTick()
  
  // 🎭 TITRES TOUJOURS VISIBLES - PAS D'ANIMATION GSAP SUR EUX
  // Récupérer GSAP
  const { $gsap: gsapInstance } = useNuxtApp()
  
  // S'assurer que les titres principaux sont visibles
  gsapInstance.set('[data-gsap="title-line-1"]', { opacity: 1, visibility: 'visible' })
  gsapInstance.set('[data-gsap="title-line-2"]', { opacity: 1, visibility: 'visible' })
  gsapInstance.set('[data-gsap="subtitle"]', { opacity: 1, visibility: 'visible' })
  
  // Animer seulement le background
  const heroTl = gsapInstance.timeline()
  heroTl.fromTo('.absolute.inset-0',
    { opacity: 0, scale: 1.5, filter: "blur(20px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }
  )
  
  // 💫 ANIMATION STAGGER DES CARTES PROJETS - PLUS LENTE ET FLUIDE
  animateOnScroll('[data-gsap="projects-grid"]',
    animateCardsStagger('.project-card', {
      duration: 1.0, // Plus lent et fluide
      stagger: 0.2, // Plus lent et fluide
      ease: "power2.out",
      distance: 150
    }),
    {
      start: "top 90%"
    }
  )
  
  // 🎯 EFFET ZOOM BUMP SIMPLE - PAS D'EFFET MAGNÉTIQUE
  // Les cartes ont maintenant un simple effet hover:scale-105 en CSS
  
  // 🌊 PARALLAXE FLUIDE AVEC GSAP
  const { $gsap } = useNuxtApp()
  if (process.client) {
    $gsap.to('.absolute:not([data-gsap])', {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })
  }
  
  // 🔮 PARTICULES INTERACTIVES AVANCÉES
  const { createParticles } = useParticles()
  createParticles('.absolute.inset-0', 60)
})

// Nettoyage à la destruction
onUnmounted(() => {
  cleanupScrollTriggers()
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

.perspective-1000 {
  perspective: 1000px;
}

.rotate-y-12 {
  transform: rotateY(12deg);
}

/* Effet de glassmorphism avancé */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Animation des gradients */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Effet de hover 3D */
.group:hover .transform {
  transform: translateZ(20px);
}
</style> 