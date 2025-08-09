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
      
      <div class="container-custom relative z-10 py-20">
        <div class="text-center max-w-5xl mx-auto">
          <h1 class="text-6xl md:text-8xl font-black mb-12 gsap-3d force-visible" ref="mainTitle" data-gsap="main-title">
            <span class="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-1">
              Mes services
            </span>
            <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-2">
              sur mesure
            </span>
          </h1>
          <p class="text-2xl md:text-3xl text-slate-300 mb-16 leading-relaxed gsap-optimized force-visible" ref="subtitle" data-gsap="subtitle">
            Des solutions web complètes et personnalisées pour donner vie à vos projets digitaux avec les technologies les plus modernes.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid avec Effets 3D -->
    <section class="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Effet de fond animé -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-gsap="services-grid">
          <div 
            v-for="(service, index) in services" 
            :key="service.title"
            :ref="el => serviceRefs[index] = el"
            class="group cursor-pointer perspective-1000 magnetic gsap-optimized"
            :data-gsap="`service-card-${index + 1}`"
          >
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-4 hover:rotate-y-12 h-full flex flex-col">
              <div class="w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-blue-500/50 flex-shrink-0">
                <!-- Code Icon -->
                <svg v-if="service.icon === 'CodeIcon'" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="w-12 h-12">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" fill="white"/>
                  </g>
                </svg>
                <!-- Palette Icon - UX/UI Design -->
                <svg v-else-if="service.icon === 'PaletteIcon'" fill="white" viewBox="0 0 32 32" class="w-12 h-12">
                  <rect height="30" width="30" x="1" y="1" stroke="white" stroke-width="2" fill="none"/>
                  <line x1="1" x2="31" y1="9" y2="9" stroke="white" stroke-width="2"/>
                  <line x1="5" x2="7" y1="5" y2="5" stroke="white" stroke-width="2"/>
                  <line x1="11" x2="13" y1="5" y2="5" stroke="white" stroke-width="2"/>
                </svg>
                <!-- Search Icon - SEO -->
                <svg v-else-if="service.icon === 'SearchIcon'" fill="white" viewBox="0 0 24 24" class="w-12 h-12">
                  <path d="M2.293,18.707a1,1,0,0,1,0-1.414l3-3a1,1,0,0,1,1.262-.125l2.318,1.545,2.42-2.42a1,1,0,0,1,1.414,1.414l-3,3a1,1,0,0,1-1.262.125L6.127,16.287l-2.42,2.42a1,1,0,0,1-1.414,0ZM22,3V21a1,1,0,0,1-1,1H3a1,1,0,0,1,0-2H20V8H4v4a1,1,0,0,1-2,0V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3ZM4,6H20V4H4Zm10.707,6.707,1-1a1,1,0,0,0-1.414-1.414l-1,1a1,1,0,1,0,1.414,1.414Z"/>
                </svg>
                <!-- App Icon - Applications Web -->
                <svg v-else-if="service.icon === 'AppIcon'" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white" class="w-12 h-12">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M3,20V10H8V21H4A1,1,0,0,1,3,20ZM21,4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V8H21ZM20,21a1,1,0,0,0,1-1V10H10V21Z" fill="white"/>
                  </g>
                </svg>
                <!-- User Icon -->
                <svg v-else-if="service.icon === 'UserIcon'" fill="white" viewBox="0 0 24 24" class="w-12 h-12">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M6 20c0-2.5 2.5-4 6-4s6 1.5 6 4"/>
                </svg>
                <!-- Wrench Icon -->
                <svg v-else-if="service.icon === 'WrenchIcon'" fill="white" viewBox="0 0 24 24" class="w-12 h-12">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-slate-300 leading-relaxed text-lg mb-8">{{ service.description }}</p>
              
              <!-- Features List -->
              <ul class="space-y-4 mb-8 flex-grow">
                <li v-for="feature in service.features" :key="feature" class="flex items-start group">
                  <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-slate-300 text-lg">{{ feature }}</span>
                </li>
              </ul>

              <!-- Technologies -->
              <div class="mb-8">
                <h4 class="text-lg font-bold text-white mb-4">Technologies utilisées</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in service.technologies" 
                    :key="tech"
                    class="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- CTA Button -->
              <button 
                @click="scrollToContact"
                class="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 mt-auto cursor-pointer"
              >
                <span class="relative z-10">Discuter de ce service</span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section avec Timeline 3D -->
    <section class="py-32 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-7xl font-black mb-8 gsap-optimized" data-gsap="process-title">
            Mon processus de <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">collaboration</span>
          </h2>
          <p class="text-2xl text-slate-300 max-w-4xl mx-auto gsap-optimized" data-gsap="process-subtitle">
            Un accompagnement structuré en 5 étapes pour transformer votre vision en une solution digitale performante et durable.
          </p>
        </div>

        <div class="max-w-6xl mx-auto" data-gsap="process-grid">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.title"
            class="group relative mb-16 last:mb-0 magnetic gsap-optimized"
            :data-gsap="`process-step-${index + 1}`"
          >
            <!-- Timeline Line -->
            <div v-if="index < processSteps.length - 1" class="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 transform translate-x-6"></div>
            
            <!-- Step Card -->
            <div class="flex items-start gap-8">
              <!-- Step Number -->
              <div class="relative flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-blue-500/50 relative z-10">
                  <span class="text-xl font-black text-white">{{ step.number }}</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
              
              <!-- Step Content -->
              <div class="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-blue-500/50 transition-all duration-500">
                <!-- Step Header -->
                <div class="mb-6">
                  <h3 class="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {{ step.title }}
                  </h3>
                  <h4 class="text-xl text-blue-300 font-medium mb-4">
                    {{ step.subtitle }}
                  </h4>
                  <p class="text-slate-300 leading-relaxed text-lg">
                    {{ step.description }}
                  </p>
                </div>
                
                <!-- Step Features -->
                <div class="space-y-3">
                  <div 
                    v-for="feature in step.features" 
                    :key="feature"
                    class="flex items-start gap-3 group/feature"
                  >
                    <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"></div>
                    <p class="text-slate-300 leading-relaxed group-hover/feature:text-white transition-colors duration-300">
                      {{ feature }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section avec Effets 3D -->
    <section class="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-8 gsap-optimized" data-gsap="pricing-title">
            Tarifs <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">transparents</span>
          </h2>
          <p class="text-2xl text-slate-300 max-w-4xl mx-auto gsap-optimized" data-gsap="pricing-subtitle">
            Des tarifs clairs et adaptés à vos besoins
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-gsap="pricing-grid">
          <div 
            v-for="(plan, index) in pricingPlans" 
            :key="plan.name"
            class="group magnetic gsap-optimized"
            :data-gsap="`pricing-card-${index + 1}`"
          >
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-4 h-full">
              <div class="text-center">
                <h3 class="text-3xl font-bold text-white mb-4">{{ plan.name }}</h3>
                <div class="mb-8">
                  <span class="text-5xl font-black text-white">{{ plan.price }}</span>
                  <span class="text-slate-300 text-lg">€</span>
                </div>
                <p class="text-slate-300 mb-8 text-lg">{{ plan.description }}</p>
                
                <ul class="space-y-4 mb-10 text-left">
                  <li v-for="feature in plan.features" :key="feature" class="flex items-start group">
                    <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-slate-300 text-lg">{{ feature }}</span>
                  </li>
                </ul>

                <button 
                  @click="goToContact(plan.name)"
                  class="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer"
                >
                  <span class="relative z-10">Choisir ce plan</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
                </button>
              </div>
            </div>
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
          <h2 class="text-5xl md:text-7xl font-black text-white mb-12 gsap-optimized" data-gsap="cta-title">
            Prêt à <span class="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">commencer</span> ?
          </h2>
          <p class="text-2xl text-blue-100 mb-16 leading-relaxed gsap-optimized" data-gsap="cta-subtitle">
            Discutons de votre projet et trouvons ensemble la solution parfaite pour vos besoins.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center" data-gsap="cta-buttons">
            <button 
              @click="scrollToContact"
              class="group relative px-12 py-6 bg-gradient-to-r from-white to-blue-100 text-blue-900 text-xl font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/50 cursor-pointer"
            >
              <span class="relative z-10">Discuter de mon projet</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
            <NuxtLink 
              to="/realisations"
              class="group relative px-12 py-6 bg-gradient-to-r from-transparent to-white/10 text-white text-xl font-bold rounded-2xl border border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25"
            >
              <span class="relative z-10">Voir mes réalisations</span>
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

<script setup>
// SEO optimisé avec le composable
const { generateServicesMetaTags } = useMetaSeo()
const seoData = generateServicesMetaTags()

// Configuration SEO complète
useHead({
  title: seoData.title,
  meta: seoData.meta,
  link: seoData.link
})

// Données structurées JSON-LD
const { generateLocalBusinessJsonLd, generateServiceJsonLd } = useJsonLd()
const jsonLdData = [
  generateLocalBusinessJsonLd(),
  generateServiceJsonLd('Services de développement web', 'Services complets de développement web à Lyon')
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLdData)
    }
  ]
})

const services = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes, performants et responsives avec les technologies les plus récentes.',
    icon: 'CodeIcon',
    features: [
      'Sites vitrine professionnels',
      'E-commerce performants',
      'Applications web sur mesure',
      'Refonte de sites existants'
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'Node.js']
  },
  {
    title: 'UX/UI Design',
    description: 'Conception d\'interfaces utilisateur modernes et intuitives centrées sur l\'expérience utilisateur.',
    icon: 'PaletteIcon',
    features: [
      'Design responsive',
      'Prototypage interactif',
      'Tests utilisateurs',
      'Optimisation conversion'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle']
  },
  {
    title: 'Référencement SEO',
    description: 'Optimisation complète pour améliorer votre visibilité sur les moteurs de recherche.',
    icon: 'SearchIcon',
    features: [
      'Audit SEO complet',
      'Optimisation technique',
      'Stratégie de contenu',
      'Suivi des performances'
    ],
    technologies: ['Analytics', 'Search Console', 'Ahrefs', 'SEMrush']
  },
  {
    title: 'Applications Web',
    description: 'Développement d\'applications web interactives et scalables avec des stacks modernes.',
    icon: 'AppIcon',
    features: [
      'Applications SPA',
      'APIs RESTful',
      'Bases de données',
      'Déploiement cloud'
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    title: 'Freelance',
    description: 'Collaboration flexible et personnalisée pour vos projets web, courte ou longue durée.',
    icon: 'UserIcon',
    features: [
      'Accompagnement complet',
      'Communication transparente',
      'Suivi personnalisé',
      'Support continu'
    ],
    technologies: ['Agile', 'Scrum', 'Git', 'Slack']
  },
  {
    title: 'Maintenance',
    description: 'Support technique et maintenance continue pour garantir la performance de votre site.',
    icon: 'WrenchIcon',
    features: [
      'Maintenance préventive',
      'Mises à jour sécurité',
      'Sauvegardes automatiques',
      'Support 24/7'
    ],
    technologies: ['Docker', 'CI/CD', 'Monitoring', 'Backup']
  }
]

const processSteps = [
  {
    number: '1',
    title: 'Phase de brief',
    subtitle: 'Comprendre pour mieux créer',
    description: 'Je commence par une immersion complète dans votre univers afin de poser des bases solides pour le projet.',
    features: [
      'Clarification de vos objectifs business et attentes spécifiques',
      'Analyse de votre audience cible et de vos personas',
      'Étude de votre positionnement et de l\'identité de votre marque',
      'Définition des fonctionnalités essentielles au projet'
    ]
  },
  {
    number: '2',
    title: 'Analyse stratégique',
    subtitle: 'Définir une vision digitale cohérente',
    description: 'J\'élabore une stratégie sur mesure, alignée sur vos enjeux métier et les meilleures pratiques digitales.',
    features: [
      'Étude approfondie de votre marché et de vos concurrents',
      'Élaboration de l\'architecture de l\'information',
      'Conception de parcours utilisateurs optimisés',
      'Mise en place d\'une stratégie SEO personnalisée'
    ]
  },
  {
    number: '3',
    title: 'Direction artistique',
    subtitle: 'Donner vie à votre image de marque',
    description: 'Je conçois une identité visuelle forte et des interfaces engageantes, centrées sur l\'expérience utilisateur.',
    features: [
      'Création de moodboards et définition de la direction artistique',
      'Design d\'interfaces (UI) claires, modernes et adaptées à vos cibles',
      'Conception d\'expériences utilisateur (UX) fluides et intuitives',
      'Réalisation de maquettes interactives et prototypage'
    ]
  },
  {
    number: '4',
    title: 'Développement',
    subtitle: 'Concrétiser avec performance et fiabilité',
    description: 'Je développe un site robuste, rapide et évolutif, parfaitement adapté à vos besoins.',
    features: [
      'Développement front-end responsive et optimisé',
      'Programmation back-end sécurisée et scalable',
      'Intégration de CMS personnalisés si nécessaire',
      'Batteries de tests multi-appareils et navigateurs'
    ]
  },
  {
    number: '5',
    title: 'Lancement & accompagnement',
    subtitle: 'Déployer, former et faire évoluer',
    description: 'Je vous accompagne jusqu\'au bout du projet et au-delà pour garantir la pérennité de votre solution digitale.',
    features: [
      'Mise en production sécurisée et optimisée',
      'Formation à l\'administration de votre site',
      'Support technique réactif et maintenance',
      'Suivi des performances et amélioration continue'
    ]
  }
]

const pricingPlans = [
  {
    name: 'Site Vitrine',
    price: '1500',
    description: 'Site web professionnel pour présenter votre activité.',
    features: [
      'Design personnalisé',
      'Responsive design',
      'Optimisation SEO',
      'Formulaire de contact',
      'Hébergement inclus',
      'Formation utilisateur'
    ]
  },
  {
    name: 'E-commerce',
    price: '3500',
    description: 'Boutique en ligne complète pour vendre vos produits.',
    features: [
      'Catalogue produits',
      'Paiement sécurisé',
      'Gestion stocks',
      'Panel admin',
      'Optimisation conversion',
      'Support prioritaire'
    ]
  },
  {
    name: 'Application Web',
    price: 'Sur mesure',
    description: 'Application web sur mesure adaptée à vos besoins spécifiques.',
    features: [
      'Analyse complète',
      'Développement sur mesure',
      'Tests utilisateurs',
      'Déploiement cloud',
      'Maintenance incluse',
      'Support dédié'
    ]
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

const goToContact = (planType) => {
  // Mapper les noms de plans vers les valeurs du formulaire
  const typeMapping = {
    'Site Vitrine': 'site-vitrine',
    'E-commerce': 'e-commerce',
    'Application Web': 'application'
  }
  
  const mappedType = typeMapping[planType] || planType
  navigateTo(`/contact?type=${encodeURIComponent(mappedType)}`)
}

// Références pour les animations
const serviceRefs = ref([])



// 🚀 Animations GSAP épiques et rapides
const { 
  animateTextReveal,
  animateCardsStagger,
  animateOnScroll,
  addMagneticHover,
  splitText,
  splitWords,
  cleanupScrollTriggers
} = useGsapAnimations()

// Animations et effets avancés
onMounted(async () => {
  // Particules interactives via composable
  const { createParticles } = useParticles()
  createParticles('.absolute.inset-0', 12)

  // 🎭 ANIMATIONS GSAP ÉPIQUES ET ULTRA RAPIDES
  await nextTick()
  
  // Récupérer GSAP
  const { $gsap: gsapInstance } = useNuxtApp()
  
  // 🎯 TITRES TOUJOURS VISIBLES - PAS D'ANIMATION GSAP SUR EUX
  gsapInstance.set('[data-gsap="title-line-1"]', { opacity: 1, visibility: 'visible' })
  gsapInstance.set('[data-gsap="title-line-2"]', { opacity: 1, visibility: 'visible' })
  gsapInstance.set('[data-gsap="subtitle"]', { opacity: 1, visibility: 'visible' })
  
  // Animer seulement le background
  const heroTl = gsapInstance.timeline()
  heroTl.fromTo('.absolute.inset-0',
    { opacity: 0, scale: 1.5, filter: "blur(20px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }
  )

  // 🚀 ANIMATIONS AU SCROLL - SERVICES - RAPIDES ET FLUIDES
  splitText('[data-gsap="process-title"]')
  animateOnScroll('[data-gsap="process-title"]',
    animateTextReveal('[data-gsap="process-title"] .char', {
      duration: 0.5, // Plus rapide
      stagger: 0.025, // Plus rapide
      ease: "power2.out"
    }),
    { start: "top 85%" }
  )

  splitWords('[data-gsap="process-subtitle"]')
  animateOnScroll('[data-gsap="process-subtitle"]',
    animateTextReveal('[data-gsap="process-subtitle"] .word', {
      duration: 0.4, // Plus rapide
      stagger: 0.025, // Plus rapide
      ease: "power2.out"
    }),
    { start: "top 85%" }
  )

  // 💫 ANIMATION STAGGER DES SERVICES - RAPIDE ET FLUIDE
  animateOnScroll('[data-gsap="services-grid"]',
    animateCardsStagger('[data-gsap^="service-card"]', {
      duration: 0.7, // Plus rapide
      stagger: 0.1, // Plus rapide
      ease: "back.out(1.7)"
    }),
    { start: "top 90%" }
  )

  // 🎯 ANIMATION STAGGER DES ÉTAPES PROCESSUS - TIMELINE VERTICALE
  animateOnScroll('[data-gsap="process-grid"]',
    animateCardsStagger('[data-gsap^="process-step"]', {
      duration: 0.8, // Plus rapide
      stagger: 0.2, // Plus rapide
      ease: "power2.out",
      distance: 100 // Animation depuis le bas
    }),
    { start: "top 90%" }
  )

  // 💰 ANIMATIONS PRICING - RAPIDES ET FLUIDES
  splitText('[data-gsap="pricing-title"]')
  animateOnScroll('[data-gsap="pricing-title"]',
    animateTextReveal('[data-gsap="pricing-title"] .char', {
      duration: 0.6, // Plus rapide
      stagger: 0.03, // Plus rapide
      ease: "power1.out"
    }),
    { start: "top 85%" }
  )

  splitWords('[data-gsap="pricing-subtitle"]')
  animateOnScroll('[data-gsap="pricing-subtitle"]',
    animateTextReveal('[data-gsap="pricing-subtitle"] .word', {
      duration: 0.5, // Plus rapide
      stagger: 0.025, // Plus rapide
      ease: "power1.out"
    }),
    { start: "top 85%" }
  )

  animateOnScroll('[data-gsap="pricing-grid"]',
    animateCardsStagger('[data-gsap^="pricing-card"]', {
      duration: 0.8, // Plus rapide
      stagger: 0.15, // Plus rapide
      ease: "power1.out"
    }),
    { start: "top 90%" }
  )

  // 🎉 ANIMATION CTA FINALE - PLUS LENTE ET FLUIDE
  splitText('[data-gsap="cta-title"]')
  animateOnScroll('[data-gsap="cta-title"]',
    animateTextReveal('[data-gsap="cta-title"] .char', {
      duration: 1.0, // Plus lent et fluide
      stagger: 0.05, // Plus lent et fluide
      ease: "power1.out"
    }),
    { start: "top 85%" }
  )

  splitWords('[data-gsap="cta-subtitle"]')
  animateOnScroll('[data-gsap="cta-subtitle"]',
    animateTextReveal('[data-gsap="cta-subtitle"] .word', {
      duration: 0.8, // Plus lent et fluide
      stagger: 0.04, // Plus lent et fluide
      ease: "power1.out"
    }),
    { start: "top 85%" }
  )

  animateOnScroll('[data-gsap="cta-buttons"]',
    animateCardsStagger('[data-gsap="cta-buttons"] > *', {
      duration: 1.0, // Plus lent et fluide
      stagger: 0.15, // Plus lent et fluide
      ease: "power1.out"
    }),
    { start: "top 95%" }
  )

  // 🧲 Effets magnétiques subtils
  addMagneticHover('.magnetic', {
    strength: 0.08, // Plus subtil
    speed: 0.4 // Fluide
  })
})

// Nettoyage des animations
onUnmounted(() => {
  cleanupScrollTriggers()
})
</script>

<style scoped>
/* Styles spécifiques à la page services uniquement */
.group:hover .animate-pulse {
  animation: pulse 2s infinite;
}
</style> 