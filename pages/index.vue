<template>
  <div>
    <!-- Hero Section avec Effets 3D -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex flex-col justify-center">
      <!-- Particules Interactives -->
      <div class="absolute inset-0" ref="particlesContainer"></div>
      
      <!-- Effet de fond animé -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <!-- Content avec Animations GSAP -->
      <div class="container-custom relative z-10 py-20">
        <div class="text-center max-w-5xl mx-auto">
          <!-- Titre Principal avec Animation GSAP -->
          <h1 ref="mainTitle" class="text-6xl md:text-8xl font-black mb-12 gsap-3d force-visible">
            <span class="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-1">
              Créons un site
            </span>
            <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-2">
              qui vous ressemble
            </span>
          </h1>

          <!-- Sous-titre avec Animation Typewriter -->
          <p class="text-2xl md:text-3xl text-slate-300 mb-16 leading-relaxed gsap-optimized force-visible" ref="subtitle" data-gsap="subtitle">
            <strong>Développeur web freelance à Lyon</strong> spécialisé en <span class="text-blue-400 font-bold">Nuxt.js</span>, <span class="text-purple-400 font-bold">Vue.js</span> et <span class="text-cyan-400 font-bold">Tailwind CSS</span>. 
            Je crée des <strong>sites web performants, responsives et SEO-friendly</strong> qui transforment votre vision en réalité.
          </p>

          <!-- Boutons CTA avec Animations GSAP -->
          <div ref="ctaButtons" class="flex flex-col sm:flex-row gap-6 justify-center items-center" data-gsap="cta-buttons">
            <button 
              @click="scrollToContact"
              class="magnetic px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-2xl gsap-optimized"
              data-gsap="cta-primary"
            >
              Discutons de votre projet
            </button>
            <NuxtLink 
              to="/realisations"
              class="magnetic group px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white text-xl font-bold rounded-2xl gsap-optimized"
              data-gsap="cta-secondary"
            >
              <span>Voir mes réalisations</span>
              <svg class="w-6 h-6 ml-3 inline-block transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator avec Animation -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Section Stats avec Effets 3D -->
    <section class="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      <!-- Effet de fond animé -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Chiffres <span class="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">clés</span>
          </h2>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Quelques statistiques qui témoignent de la qualité de mes réalisations
          </p>
        </div>

        <!-- Stats avec Animations -->
        <div ref="stats" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2 counter group-hover:text-blue-300 transition-colors duration-300" data-target="95">0</div>
            <div class="text-slate-300 text-lg">Performance moyenne</div>
          </div>
 
          <div class="text-center group">
            <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2 counter group-hover:text-blue-300 transition-colors duration-300" data-target="24">0</div>
            <div class="text-slate-300 text-lg">Temps de réponse</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Teaser avec Effets 3D -->
    <section class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden flex flex-col justify-center">
      <!-- Effet de fond animé -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="container-custom relative z-10 w-full py-20">
        <div class="text-center mb-20" ref="servicesHeader" data-gsap="services-header">
          <h2 class="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-12 gsap-optimized" data-gsap="services-title">
            Mes <span class="text-blue-400">services</span>
          </h2>
          <p class="text-3xl md:text-4xl text-slate-300 max-w-6xl mx-auto leading-relaxed gsap-optimized" data-gsap="services-subtitle">
            Des solutions web complètes et personnalisées pour donner vie à vos projets digitaux avec les technologies les plus modernes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="servicesGrid" data-gsap="services-grid">
          <div 
            v-for="(service, index) in services" 
            :key="service.title"
            :ref="el => serviceRefs[index] = el"
            class="magnetic group cursor-pointer perspective-1000 h-full gsap-optimized service-card"
            @click="$router.push('/services')"
            :data-gsap="`service-card-${index}`"
          >
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-y-12 h-full flex flex-col overflow-hidden">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <Icons :icon="service.icon" size="md" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-slate-300 leading-relaxed text-lg flex-grow">{{ service.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-16">
          <NuxtLink 
            to="/services"
            class="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            Découvrir tous mes services
            <svg class="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Vision Section avec Effet de fond -->
    <section class="py-32 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-5xl md:text-7xl font-black text-white mb-12">
              Ma <span class="text-blue-400">vision</span>
            </h2>
            <p class="text-2xl text-slate-300 mb-12 leading-relaxed">
              Je crois en un développement web qui allie <strong class="text-blue-400">esthétique moderne</strong>, <strong class="text-purple-400">performance optimale</strong> et <strong class="text-cyan-400">expérience utilisateur exceptionnelle</strong>. 
              Chaque projet est une opportunité de créer quelque chose d'unique qui reflète parfaitement votre identité.
            </p>
            <div class="space-y-6">
              <div class="flex items-center group">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300 text-lg">Design moderne et épuré</span>
              </div>
              <div class="flex items-center group">
                <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300 text-lg">Performance et rapidité</span>
              </div>
              <div class="flex items-center group">
                <div class="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300 text-lg">SEO et visibilité optimale</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="magnetic bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-10 relative overflow-hidden gsap-optimized" ref="whyChooseSection" data-gsap="why-choose-me">
              <div class="relative z-10">
                <h3 class="text-3xl font-bold mb-8 gsap-optimized" data-gsap="why-choose-title">Pourquoi me choisir ?</h3>
                <ul class="space-y-6 text-blue-100 text-lg">
                  <li class="flex items-start gsap-optimized" data-gsap="why-choose-item-1">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mr-4 mt-0.5 icon-hover-effect shadow-lg">
                      <svg class="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                    <span>Expertise technique pointue</span>
                  </li>
                  <li class="flex items-start gsap-optimized" data-gsap="why-choose-item-2">
                    <div class="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mr-4 mt-0.5 icon-hover-effect shadow-lg">
                      <svg class="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </div>
                    <span>Communication transparente</span>
                  </li>
                  <li class="flex items-start gsap-optimized" data-gsap="why-choose-item-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center mr-4 mt-0.5 icon-hover-effect shadow-lg">
                      <svg class="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <span>Suivi personnalisé</span>
                  </li>
                  <li class="flex items-start gsap-optimized" data-gsap="why-choose-item-4">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mr-4 mt-0.5 icon-hover-effect shadow-lg">
                      <svg class="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                      </svg>
                    </div>
                    <span>Support post-livraison</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import du composant Icons
import Icons from '~/components/ui/Icons.vue'

// SEO optimisé avec le nouveau composable
const { setupHomePageSeo } = useSeoOptimization()
const seoData = setupHomePageSeo()

// Configuration SEO complète
useHead({
  title: seoData.metaTags.title,
  meta: seoData.metaTags.meta,
  link: seoData.metaTags.link
})

// Données structurées JSON-LD
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(seoData.jsonLdData)
    }
  ]
})

// Utilisation du composable pour les données
const homeData = useHomeData()
const { services, scrollToContact } = homeData

// Références pour les animations GSAP
const badge = ref(null)
const mainTitle = ref(null)
const subtitle = ref(null)
const ctaButtons = ref(null)
const stats = ref(null)
const serviceRefs = ref([])

// Animations GSAP épiques et effets avancés - ACCÉLÉRÉES
const { 
  animateTextReveal, 
  animateTypewriter, 
  animateCardsStagger,
  animateHeroSequence,
  animateOnScroll,
  addMagneticHover,
  animateWhyChooseMe,
  animateWhyChooseMeCards,
  splitText,
  splitWords,
  cleanupScrollTriggers
} = useGsapAnimations()

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
  
  // Animer seulement les boutons et le background
  const heroTl = gsapInstance.timeline()
  
  // Animation du background
  const backgroundElement = document.querySelector('.absolute.inset-0')
  if (backgroundElement) {
    heroTl.fromTo('.absolute.inset-0',
      { opacity: 0, scale: 1.5, filter: "blur(20px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }
    )
  }
  
  // Animation des boutons
  const ctaButtons = document.querySelector('[data-gsap="cta-buttons"]')
  if (ctaButtons) {
    heroTl.fromTo('[data-gsap="cta-buttons"]',
      { opacity: 0, y: 100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
      "-=0.3"
    )
  }
  
  // 🚀 ANIMATIONS AU SCROLL - SERVICES - RAPIDES ET FLUIDES
  // Animation d'entrée pour le titre services
  const servicesTitle = document.querySelector('[data-gsap="services-title"]')
  if (servicesTitle) {
    animateOnScroll('[data-gsap="services-title"]', 
      animateTextReveal('[data-gsap="services-title"] .char', {
        duration: 0.5, // Plus rapide
        stagger: 0.025, // Plus rapide
        ease: "power2.out"
      })
    )
  }
  
  // Animation du sous-titre services
  const servicesSubtitle = document.querySelector('[data-gsap="services-subtitle"]')
  if (servicesSubtitle) {
    animateOnScroll('[data-gsap="services-subtitle"]',
      animateTextReveal('[data-gsap="services-subtitle"] .word', {
        duration: 0.4, // Plus rapide
        stagger: 0.025, // Plus rapide
        ease: "power2.out"
      })
    )
  }
  
  // 💫 ANIMATION STAGGER DES CARTES SERVICES
  const servicesGrid = document.querySelector('[data-gsap="services-grid"]')
  if (servicesGrid) {
    animateOnScroll('[data-gsap="services-grid"]',
      animateCardsStagger('.service-card', {
        duration: 1.0, // Plus lent et fluide
        stagger: 0.15, // Plus lent et fluide
        ease: "power2.out",
        distance: 120
      }),
      {
        start: "top 90%"
      }
    )
  }
  
  // 🧲 EFFETS MAGNÉTIQUES SUBTILS - DÉSACTIVÉS SUR MOBILE
  if (window.innerWidth > 768) {
    const magneticElements = document.querySelectorAll('.magnetic')
    if (magneticElements.length > 0) {
      addMagneticHover('.magnetic', {
        strength: 0.08, // Plus subtil
        speed: 0.4 // Fluide
      })
    }
  }
  
  // 💎 ANIMATION SPÉCIALE "POURQUOI ME CHOISIR" - OPTIMISÉE POUR MOBILE
  const isMobile = window.innerWidth <= 768
  
  if (!isMobile) {
    // Animation complète sur desktop
    const whyChooseMe = document.querySelector('[data-gsap="why-choose-me"]')
    if (whyChooseMe) {
      animateOnScroll('[data-gsap="why-choose-me"]',
        animateWhyChooseMe('[data-gsap="why-choose-me"]', {
          duration: 0.8, // Plus lent et fluide
          stagger: 0.12, // Plus lent et fluide
          ease: "power2.out"
        }),
        {
          start: "top 85%"
        }
      )
    }
  } else {
    // Animation simplifiée sur mobile pour éviter le scroll saccadé
    gsapInstance.set('[data-gsap="why-choose-me"]', { opacity: 1, y: 0, scale: 1 })
    gsapInstance.set('[data-gsap="why-choose-title"]', { opacity: 1 })
    gsapInstance.set('[data-gsap="why-choose-item-1"], [data-gsap="why-choose-item-2"], [data-gsap="why-choose-item-3"], [data-gsap="why-choose-item-4"]', { opacity: 1, y: 0 })
  }
  
  // ⚡ ANIMATION DES COMPTEURS AVEC GSAP - PROTÉGÉ CONTRE NaN
  const { $gsap } = useNuxtApp()
  const counters = document.querySelectorAll('.counter')
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'))
    let isAnimated = false
    
    // Initialisation sécurisée de la valeur
    counter.textContent = '0' + (target === 95 ? '%' : 'h')
    
    // Animation initiale seulement
    const counterAnimation = $gsap.fromTo(counter, 
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        paused: true, // Démarre en pause
        onUpdate: function() {
          const currentText = this.targets()[0].textContent
          const value = Math.ceil(parseFloat(currentText) || 0)
          // Protection renforcée contre NaN et valeurs invalides
          if (!isNaN(value) && value >= 0 && value <= target && isFinite(value)) {
            this.targets()[0].textContent = value + (target === 95 ? '%' : 'h')
          } else {
            // Fallback sécurisé en cas de problème
            this.targets()[0].textContent = '0' + (target === 95 ? '%' : 'h')
          }
        },
        onComplete: function() {
          // S'assurer que la valeur finale est correcte
          this.targets()[0].textContent = target + (target === 95 ? '%' : 'h')
          isAnimated = true
        }
      }
    )
    
    // ScrollTrigger pour déclencher une seule fois
    $gsap.timeline({
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
        once: true, // Important : ne se déclenche qu'une seule fois
        onEnter: () => {
          if (!isAnimated) {
            counterAnimation.play()
          }
        }
      }
    })
  })
  
  // 🎨 PRÉPARATION DES TITRES POUR LES ANIMATIONS
  // Note: services-title contient du HTML (span coloré) donc pas de splitText
  splitWords('[data-gsap="services-subtitle"]')
  
  // Effet de parallaxe désactivé pour éviter les backgrounds qui bougent bizarrement
  
  // Particules interactives optimisées
  const { createParticles } = useParticles()
  createParticles('.absolute.inset-0', 15)
})

// Nettoyage à la destruction du composant
onUnmounted(() => {
  cleanupScrollTriggers()
})
</script>

<style scoped>
/* Optimisations pour mobile - évite le scroll saccadé */
@media (max-width: 768px) {
  /* Désactiver les animations complexes sur mobile */
  .gsap-optimized {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  
  /* Optimiser les performances de scroll */
  section {
    will-change: auto;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  
  /* Réduire les effets de blur sur mobile */
  .blur-3xl {
    filter: blur(1rem) !important;
  }
  
  /* Optimiser les animations de hover */
  .group:hover .transform {
    transform: none !important;
  }
}

/* Animation des gradients */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
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
</style> 