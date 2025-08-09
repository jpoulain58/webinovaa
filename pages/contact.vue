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
          <h1 class="text-6xl md:text-8xl font-black mb-12 gsap-3d force-visible leading-tight" ref="mainTitle" data-gsap="main-title">
            <span class="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-1">
              Parlons de
            </span>
            <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent gsap-optimized force-visible" data-gsap="title-line-2">
              votre projet
            </span>
          </h1>
          <p class="text-2xl md:text-3xl text-slate-300 mb-16 leading-relaxed gsap-optimized force-visible" ref="subtitle" data-gsap="subtitle">
            Je réponds sous <span class="text-blue-400 font-bold">24h</span> pour discuter de votre projet et vous proposer une solution adaptée à vos besoins.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section avec Effets 3D -->
    <section class="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Effet de fond animé -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <!-- Contact Info avec Animations -->
          <div>
            <h2 class="text-4xl md:text-6xl font-black text-white mb-12 leading-tight no-word-break">
              Commençons par <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">discuter</span>
            </h2>
            <p class="text-xl text-slate-300 mb-16 leading-relaxed gsap-optimized" data-gsap="contact-subtitle">
              Remplissez le formulaire ci-contre ou contactez-moi directement. 
              Je suis là pour vous accompagner dans la réalisation de votre projet web.
            </p>

            <!-- Présentation Ultra Stylisée -->
            <div class="space-y-16" data-gsap="profile-cards">
              <!-- Card Profil Personnel -->
              <div class="gsap-optimized magnetic" data-gsap="profile-card">
                <ProfileCard />
              </div>

              <!-- Card Entreprise -->
              <div class="gsap-optimized magnetic" data-gsap="company-card">
                <CompanyCard />
              </div>
            </div>

          </div>

          <!-- Contact Form Ultra-Moderne -->
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl shadow-blue-500/80 shadow-2xl drop-shadow-2xl">
            <h3 class="text-3xl font-bold text-white mb-10">Envoyez-moi un message</h3>
            
            <form @submit.prevent="submitForm" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="group">
                  <label for="firstName" class="block text-sm font-bold text-slate-300 mb-3">
                    Prénom *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-6 py-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-500/50"
                    placeholder="Votre prénom"
                  />
                </div>
                <div class="group">
                  <label for="lastName" class="block text-sm font-bold text-slate-300 mb-3">
                    Nom *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-6 py-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-500/50"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div class="group">
                <label for="email" class="block text-sm font-bold text-slate-300 mb-3">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-6 py-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-500/50"
                  placeholder="votre@email.com"
                />
              </div>

              <div class="group">
                <label class="block text-sm font-bold text-slate-300 mb-6">
                  Type(s) de projet *
                </label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="type in projectTypes" 
                    :key="type.value"
                    class="relative"
                  >
                    <input
                      :id="type.value"
                      v-model="form.projectTypes"
                      :value="type.value"
                      type="checkbox"
                      class="sr-only"
                    />
                                         <label
                       :for="type.value"
                       class="project-type-card cursor-pointer flex items-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-900/20 hover:to-blue-800/20"
                       :class="{ 'selected': form.projectTypes.includes(type.value) }"
                     >
                       <div class="custom-checkbox mr-4">
                         <div class="checkbox-inner">
                           <svg class="w-4 h-4 text-white checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                           </svg>
                         </div>
                       </div>
                       <div class="font-semibold">{{ type.label }}</div>
                     </label>
                  </div>
                </div>
              </div>

              <div class="group">
                <label for="message" class="block text-sm font-bold text-slate-300 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="8"
                  required
                  class="w-full px-6 py-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-500/50 resize-none"
                  placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                ></textarea>
              </div>

              <div class="flex items-center group">
                <input
                  id="privacy"
                  v-model="form.privacy"
                  type="checkbox"
                  required
                  class="w-5 h-5 text-blue-600 bg-slate-800 border-white/10 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label for="privacy" class="ml-3 text-sm text-slate-300">
                  J'accepte que mes données soient utilisées pour traiter ma demande *
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white text-xl font-bold rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span v-if="!isSubmitting" class="relative z-10">Envoyer le message</span>
                <span v-else class="relative z-10 flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Me Section avec Effets 3D -->
    <section class="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Effet de fond animé -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-16" ref="whyChooseHeader" data-gsap="why-choose-header">
          <h2 class="text-4xl md:text-6xl font-black text-white mb-8 gsap-optimized" data-gsap="why-choose-main-title">
            Pourquoi me <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">choisir</span> ?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref="whyChooseCards" data-gsap="why-choose-cards">
          <div class="magnetic group text-center gsap-optimized why-choose-card" data-gsap="why-choose-card-1">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 icon-hover-effect icon-animate-glow shadow-2xl shadow-blue-500/50">
              <svg class="w-10 h-10 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Réponse sous 24h</h3>
            <p class="text-slate-300">Je m'engage à vous répondre dans les 24h pour discuter de votre projet</p>
          </div>

          <div class="magnetic group text-center gsap-optimized why-choose-card" data-gsap="why-choose-card-2">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-600 via-cyan-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 icon-hover-effect icon-animate-bounce shadow-2xl shadow-purple-500/50">
              <svg class="w-10 h-10 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Devis gratuit et transparent</h3>
            <p class="text-slate-300">Un devis détaillé et transparent sans surprise</p>
          </div>

          <div class="magnetic group text-center gsap-optimized why-choose-card" data-gsap="why-choose-card-3">
            <div class="w-20 h-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 icon-hover-effect icon-animate-glow shadow-2xl shadow-cyan-500/50">
              <svg class="w-10 h-10 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Suivi personnalisé</h3>
            <p class="text-slate-300">Un accompagnement personnalisé tout au long du projet</p>
          </div>

          <div class="magnetic group text-center gsap-optimized why-choose-card" data-gsap="why-choose-card-4">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 icon-hover-effect icon-animate-bounce shadow-2xl shadow-blue-500/50">
              <svg class="w-10 h-10 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Support post-livraison</h3>
            <p class="text-slate-300">Un support technique après la livraison de votre projet</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProfileCard from '~/components/contact/ProfileCard.vue'
import CompanyCard from '~/components/contact/CompanyCard.vue'

// SEO optimisé avec le composable
const { generateContactMetaTags } = useMetaSeo()
const seoData = generateContactMetaTags()

// Configuration SEO complète
useHead({
  title: seoData.title,
  meta: seoData.meta,
  link: seoData.link
})

// Données structurées JSON-LD
const { generateLocalBusinessJsonLd, generatePersonJsonLd } = useJsonLd()
const jsonLdData = [
  generateLocalBusinessJsonLd(),
  generatePersonJsonLd()
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLdData)
    }
  ]
})

const { 
  animateTextReveal,
  animateCardsStagger,
  animateWhyChooseMeCards,
  animateOnScroll,
  addMagneticHover,
  splitText,
  splitWords,
  cleanupScrollTriggers
} = useGsapAnimations()

const projectTypes = [
  {
    value: 'site-vitrine',
    label: 'Site vitrine'
  },
  {
    value: 'e-commerce',
    label: 'E-commerce'
  },
  {
    value: 'application',
    label: 'Application web'
  },
  {
    value: 'refonte',
    label: 'Refonte'
  },
  {
    value: 'seo',
    label: 'SEO & Performance'
  },
  {
    value: 'autre',
    label: 'Autre'
  }
]

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  projectTypes: [],
  message: '',
  privacy: false
})

const isSubmitting = ref(false)

const route = useRoute()
onMounted(async () => {
  await nextTick()
  
  const { $gsap: gsapInstance } = useNuxtApp()
  
  gsapInstance.set('[data-gsap="title-line-1"]', { opacity: 1, visibility: 'visible' })
  gsapInstance.set('[data-gsap="title-line-2"]', { opacity: 1, visibility: 'visible' })
  gsapInstance.set('[data-gsap="subtitle"]', { opacity: 1, visibility: 'visible' })
  
  const heroTl = gsapInstance.timeline()
  heroTl.fromTo('.absolute.inset-0',
    { opacity: 0, scale: 1.5, filter: "blur(20px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }
  )

  splitWords('[data-gsap="contact-subtitle"]')
  animateOnScroll('[data-gsap="contact-subtitle"]',
    animateTextReveal('[data-gsap="contact-subtitle"] .word', {
      duration: 0.4,
      stagger: 0.025,
      ease: "power2.out"
    }),
    { start: "top 85%" }
  )

  animateOnScroll('[data-gsap="profile-cards"]',
    animateCardsStagger('[data-gsap="profile-card"], [data-gsap="company-card"]', {
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }),
    { start: "top 90%" }
  )
  
  splitText('[data-gsap="why-choose-main-title"]')
  animateOnScroll('[data-gsap="why-choose-main-title"]',
    animateTextReveal('[data-gsap="why-choose-main-title"] .char', {
      duration: 0.5,
      stagger: 0.025,
      ease: "power2.out"
    }),
    {
      start: "top 85%"
    }
  )
  
  animateOnScroll('[data-gsap="why-choose-cards"]',
    animateWhyChooseMeCards('.why-choose-card', {
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out"
    }),
    {
      start: "top 90%"
    }
  )
  
  addMagneticHover('.magnetic', {
    strength: 0.08,
    speed: 0.4
  })
  
  const projectType = route.query.type
  if (projectType) {
    const typeMapping = {
      'Site Vitrine': 'site-vitrine',
      'E-commerce': 'e-commerce',
      'Application Web': 'application'
    }
    
    const mappedType = typeMapping[projectType] || projectType
    if (!form.value.projectTypes.includes(mappedType)) {
      form.value.projectTypes.push(mappedType)
    }
  }
})

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Appel de l'API pour envoyer l'email
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        projectType: form.value.projectTypes, // Envoyer le tableau des types de projet
        message: form.value.message
      }
    })
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      projectTypes: [], // Reset le tableau des types de projet
      message: '',
      privacy: false
    }
    
    isSubmitting.value = false
    
    // Show success message
    showSuccessMessage()
    
  } catch (error) {
    isSubmitting.value = false
    
    // Show error message
    showErrorMessage(error.data?.statusMessage || 'Erreur lors de l\'envoi du message')
  }
}

const showSuccessMessage = () => {
  // Créer une notification de succès avec animation
  const notification = document.createElement('div')
  notification.className = 'fixed top-8 right-8 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl transform translate-x-full transition-transform duration-500 z-50'
  notification.innerHTML = `
    <div class="flex items-center">
      <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="font-bold">Message envoyé avec succès ! Je vous répondrai sous 24h.</span>
    </div>
  `
  
  document.body.appendChild(notification)
  
  // Animation d'entrée
  setTimeout(() => {
    notification.classList.remove('translate-x-full')
  }, 100)
  
  // Animation de sortie
  setTimeout(() => {
    notification.classList.add('translate-x-full')
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 500)
  }, 5000)
}

const showErrorMessage = (message) => {
  // Créer une notification d'erreur avec animation
  const notification = document.createElement('div')
  notification.className = 'fixed top-8 right-8 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-2xl transform translate-x-full transition-transform duration-500 z-50'
  notification.innerHTML = `
    <div class="flex items-center">
      <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
      <span class="font-bold">${message}</span>
    </div>
  `
  
  document.body.appendChild(notification)
  
  // Animation d'entrée
  setTimeout(() => {
    notification.classList.remove('translate-x-full')
  }, 100)
  
  // Animation de sortie
  setTimeout(() => {
    notification.classList.add('translate-x-full')
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 500)
  }, 5000)
}

// Particules interactives
onMounted(() => {
  const particlesContainer = document.querySelector('.absolute.inset-0')
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-white/30 rounded-full'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite`
      particle.style.animationDelay = Math.random() * 3 + 's'
      particlesContainer.appendChild(particle)
    }
  }

  // Effet de parallaxe désactivé pour éviter les backgrounds qui bougent bizarrement
})

// Nettoyage des animations
onUnmounted(() => {
  cleanupScrollTriggers()
})
</script>

<style scoped>

/* Styles pour les checkboxes personnalisées */
.project-type-card {
  position: relative;
  overflow: hidden;
}

.project-type-card.selected {
  border-color: rgb(59 130 246 / 0.8) !important;
  background: linear-gradient(135deg, rgb(59 130 246 / 0.15), rgb(139 92 246 / 0.15)) !important;
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
}

.custom-checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.project-type-card.selected .custom-checkbox {
  border-color: rgb(59 130 246);
  background: linear-gradient(135deg, rgb(59 130 246), rgb(139 92 246));
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}

.checkmark {
  opacity: 0;
  transform: scale(0) rotate(-45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.project-type-card.selected .checkmark {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.project-type-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.project-type-card:hover::before {
  left: 100%;
}

@keyframes checkboxPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
  }
}

.project-type-card.selected .custom-checkbox {
  animation: checkboxPulse 0.6s ease-out;
}

/* Effet de hover 3D */
.group:hover .transform {
  transform: translateZ(20px);
}

/* Animation d'entrée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Effet de focus amélioré */
input:focus, textarea:focus, select:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Animation de pulsation pour les éléments interactifs */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.group:hover .animate-pulse {
  animation: pulse 2s infinite;
}
</style> 