<template>
  <div>
    <!-- Hero Section avec Effets 3D -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <!-- Particules Interactives -->
      <div class="absolute inset-0" ref="particlesContainer"></div>
      
      <!-- Effet de Parallaxe -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <!-- Content avec Animations GSAP -->
      <div class="container-custom relative z-10 text-center">
        <div class="max-w-6xl mx-auto">


          <!-- Titre Principal avec Animation GSAP -->
          <h1 ref="mainTitle" class="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-none gsap-3d force-visible">
            <span class="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-1">
              Créons un site
            </span>
            <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-2">
              qui vous ressemble
            </span>
          </h1>

          <!-- Sous-titre avec Animation Typewriter -->
          <div class="text-2xl md:text-3xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            <p ref="subtitle" class="gsap-optimized force-visible" data-gsap="subtitle">
              Développeur web freelance spécialisé en <span class="text-blue-400 font-bold">Nuxt.js</span>, <span class="text-purple-400 font-bold">Vue.js</span> et <span class="text-cyan-400 font-bold">Tailwind CSS</span>. 
              Je crée des sites performants, responsives et SEO-friendly qui transforment votre vision en réalité.
            </p>
          </div>

          <!-- Boutons CTA avec Animations GSAP -->
          <div ref="ctaButtons" class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" data-gsap="cta-buttons">
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

                    <!-- Stats avec Animations -->
          <div ref="stats" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-bold text-white mb-2 counter" data-target="95">0</div>
              <div class="text-slate-300">Performance moyenne</div>
            </div>
 
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-bold text-white mb-2 counter" data-target="24">0</div>
              <div class="text-slate-300">Temps de réponse</div>
            </div>
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
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-4 hover:rotate-y-12 h-full flex flex-col">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <!-- Code Icon -->
                <svg v-if="service.icon === 'CodeIcon'" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="w-10 h-10">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" fill="white"/>
                  </g>
                </svg>
                <!-- Palette Icon - UX/UI Design -->
                <svg v-else-if="service.icon === 'PaletteIcon'" fill="white" viewBox="0 0 32 32" class="w-10 h-10">
                  <rect height="30" width="30" x="1" y="1" stroke="white" stroke-width="2" fill="none"/>
                  <line x1="1" x2="31" y1="9" y2="9" stroke="white" stroke-width="2"/>
                  <line x1="5" x2="7" y1="5" y2="5" stroke="white" stroke-width="2"/>
                  <line x1="11" x2="13" y1="5" y2="5" stroke="white" stroke-width="2"/>
                </svg>
                <!-- Search Icon - SEO -->
                <svg v-else-if="service.icon === 'SearchIcon'" fill="white" viewBox="0 0 24 24" class="w-10 h-10">
                  <path d="M2.293,18.707a1,1,0,0,1,0-1.414l3-3a1,1,0,0,1,1.262-.125l2.318,1.545,2.42-2.42a1,1,0,0,1,1.414,1.414l-3,3a1,1,0,0,1-1.262.125L6.127,16.287l-2.42,2.42a1,1,0,0,1-1.414,0ZM22,3V21a1,1,0,0,1-1,1H3a1,1,0,0,1,0-2H20V8H4v4a1,1,0,0,1-2,0V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3ZM4,6H20V4H4Zm10.707,6.707,1-1a1,1,0,0,0-1.414-1.414l-1,1a1,1,0,1,0,1.414,1.414Z"/>
                </svg>
                <!-- App Icon - Applications Web -->
                <svg v-else-if="service.icon === 'AppIcon'" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white" class="w-10 h-10">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M3,20V10H8V21H4A1,1,0,0,1,3,20ZM21,4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V8H21ZM20,21a1,1,0,0,0,1-1V10H10V21Z" fill="white"/>
                  </g>
                </svg>
                <!-- User Icon -->
                <svg v-else-if="service.icon === 'UserIcon'" fill="white" viewBox="0 0 24 24" class="w-10 h-10">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M6 20c0-2.5 2.5-4 6-4s6 1.5 6 4"/>
                </svg>
                <!-- Wrench Icon -->
                <svg v-else-if="service.icon === 'WrenchIcon'" fill="white" viewBox="0 0 24 24" class="w-10 h-10">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
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

    <!-- Vision Section avec Effet Parallaxe -->
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
// SEO
useHead({
  title: 'Webinovaa - Développeur Web Freelance',
  meta: [
    { name: 'description', content: 'Développeur web freelance spécialisé en Nuxt.js, Vue.js et Tailwind CSS. Création de sites performants, responsives et SEO-friendly.' }
  ]
})

const services = [
  {
    title: 'Développement Web',
    description: 'Sites vitrine, e-commerce et applications web sur mesure avec les technologies modernes.',
    icon: 'CodeIcon'
  },
  {
    title: 'UX/UI Design',
    description: 'Interfaces utilisateur modernes et intuitives centrées sur l\'expérience utilisateur.',
    icon: 'PaletteIcon'
  },
  {
    title: 'Référencement SEO',
    description: 'Optimisation complète pour améliorer votre visibilité sur les moteurs de recherche.',
    icon: 'SearchIcon'
  },
  {
    title: 'Applications Web',
    description: 'Applications web interactives et scalables avec des stacks modernes et sécurisées.',
    icon: 'AppIcon'
  },
  {
    title: 'Freelance',
    description: 'Collaboration sur mesure, courte ou longue durée pour vos projets web.',
    icon: 'UserIcon'
  },
  {
    title: 'Maintenance',
    description: 'Support technique et maintenance continue pour garantir la performance de votre site.',
    icon: 'WrenchIcon'
  }
]

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    navigateTo('/contact')
  }
}

// Références pour les animations GSAP
const badge = ref(null)
const mainTitle = ref(null)
const subtitle = ref(null)
const ctaButtons = ref(null)
const stats = ref(null)
const serviceRefs = ref([])

// Composants d'icônes
const CodeIcon = {
  template: `
    <svg fill="white" viewBox="0 0 24 24">
      <path d="M8 6l4-4 4 4M8 18l4 4 4-4"/>
      <path d="M12 2v20"/>
    </svg>
  `
}

const PaletteIcon = {
  template: `
    <svg fill="white" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="8" cy="8" r="2" fill="white"/>
      <circle cx="16" cy="8" r="2" fill="white"/>
      <circle cx="8" cy="16" r="2" fill="white"/>
      <circle cx="16" cy="16" r="2" fill="white"/>
    </svg>
  `
}

const SearchIcon = {
  template: `
    <svg fill="white" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"/>
      <path d="M21 21l-4.35-4.35"/>
    </svg>
  `
}

const AppIcon = {
  template: `
    <svg fill="white" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
      <rect x="8" y="8" width="8" height="2"/>
      <rect x="8" y="12" width="8" height="2"/>
      <rect x="8" y="16" width="8" height="2"/>
    </svg>
  `
}

const UserIcon = {
  template: `
    <svg fill="white" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4"/>
      <path d="M6 20c0-2.5 2.5-4 6-4s6 1.5 6 4"/>
    </svg>
  `
}

const WrenchIcon = {
  template: `
    <svg fill="white" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  `
}

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
  heroTl.fromTo('.absolute.inset-0',
    { opacity: 0, scale: 1.5, filter: "blur(20px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }
  )
  
  // Animation des boutons
  heroTl.fromTo('[data-gsap="cta-buttons"]',
    { opacity: 0, y: 100, scale: 0.5 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
    "-=0.5"
  )
  
  // 🚀 ANIMATIONS AU SCROLL - SERVICES - ULTRA RAPIDES x2
  // Animation d'entrée pour le titre services
  animateOnScroll('[data-gsap="services-title"]', 
    animateTextReveal('[data-gsap="services-title"] .char', {
      duration: 0.3, // x2 plus rapide
      stagger: 0.02, // x2 plus rapide  
      ease: "power3.out"
    })
  )
  
  // Animation du sous-titre services
  animateOnScroll('[data-gsap="services-subtitle"]',
    animateTextReveal('[data-gsap="services-subtitle"] .word', {
      duration: 0.2, // x2 plus rapide
      stagger: 0.02, // x2 plus rapide
      ease: "power2.out"
    })
  )
  
  // 💫 ANIMATION STAGGER DES CARTES SERVICES
  animateOnScroll('[data-gsap="services-grid"]',
    animateCardsStagger('.service-card', {
      duration: 0.4, // x2 plus rapide
      stagger: 0.05, // x2 plus rapide
      ease: "power3.out",
      distance: 120
    }),
    {
      start: "top 90%"
    }
  )
  
  // 🧲 EFFETS MAGNÉTIQUES RAPIDES
  addMagneticHover('.magnetic', {
    strength: 0.4,
    speed: 0.2 // Plus rapide
  })
  
  // 💎 ANIMATION SPÉCIALE "POURQUOI ME CHOISIR" - ÉPIQUE ULTRA RAPIDE x2 !
  animateOnScroll('[data-gsap="why-choose-me"]',
    animateWhyChooseMe('[data-gsap="why-choose-me"]', {
      duration: 0.15, // x2 plus rapide
      stagger: 0.02, // x2 plus rapide
      ease: "power3.out"
    }),
    {
      start: "top 85%"
    }
  )
  
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
  splitText('[data-gsap="services-title"]')
  splitWords('[data-gsap="services-subtitle"]')
  
  // 🌊 EFFET DE PARALLAXE FLUIDE - SEULEMENT SUR LES SECTIONS HERO
  if (process.client) {
    // Appliquer le parallaxe seulement aux éléments des sections principales
    $gsap.to('section .absolute:not([data-gsap]):not(.footer-background):not(.footer-gradient)', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }
  
  // 🔮 PARTICULES INTERACTIVES
  const { createParticles } = useParticles()
  createParticles('.absolute.inset-0', 80)
})

// Nettoyage à la destruction du composant
onUnmounted(() => {
  cleanupScrollTriggers()
})
</script> 

<style scoped>
/* Styles spécifiques à la page d'accueil uniquement */
</style> 