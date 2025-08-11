<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" lang="fr">
    <!-- Header Sticky avec Effets 3D -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-slate-900/90 backdrop-blur-2xl border-b border-white/10">
      <nav class="container-custom py-6">
        <div class="flex items-center justify-between">
          <!-- Logo avec Animation 3D -->
          <NuxtLink to="/" class="flex items-center space-x-3 group cursor-pointer" aria-label="Accueil - Webinovaa">
            <div class="relative">
              <div class="w-24 h-24 flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <NuxtImg 
                  src="/logos/logo-webinovaa.png" 
                  alt="Logo Webinovaa - Agence web créative" 
                  class="w-32 h-32 object-contain" 
                  loading="eager"
                  width="128"
                  height="128"
                  format="webp"
                  quality="80"
                  sizes="128px"
                />
              </div>
            </div>
            <span class="text-2xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Webinovaa
            </span>
          </NuxtLink>

          <!-- Navigation Desktop avec Effets Hover -->
          <div class="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="relative group text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium text-base lg:text-lg px-2 lg:px-3 xl:px-4 py-2 rounded-lg hover:bg-white/5 border-b-2 border-transparent hover:border-blue-400"
              active-class="text-blue-400 bg-white/10 border-blue-400"
            >
              {{ item.label }}
            </NuxtLink>
          </div>

          <!-- CTA Button avec Effet Élégant -->
          <div class="hidden md:block ml-4 lg:ml-6 xl:ml-8">
                          <NuxtLink 
                to="/contact"
              class="cta-button"
              >
              <span class="cta-text">
                <span class="hidden xl:inline">Discutons de votre projet</span>
                <span class="xl:hidden">Votre projet</span>
              </span>
              <div class="cta-glow"></div>
              </NuxtLink>
          </div>

          <!-- Mobile Menu Button avec Animation -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="w-5 h-0.5 bg-white rounded-full transition-all duration-300" :class="isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''"></span>
              <span class="w-5 h-0.5 bg-white rounded-full mt-1 transition-all duration-300" :class="isMobileMenuOpen ? 'opacity-0' : ''"></span>
              <span class="w-5 h-0.5 bg-white rounded-full mt-1 transition-all duration-300" :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''"></span>
            </div>
          </button>
        </div>

        <!-- Mobile Menu avec Animation -->
        <div 
          v-show="isMobileMenuOpen"
          class="md:hidden mt-6 pb-6 border-t border-white/10"
        >
          <div class="flex flex-col space-y-4 pt-6">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              @click="isMobileMenuOpen = false"
              class="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20"
              active-class="text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            >
              {{ item.label }}
            </NuxtLink>
            <NuxtLink 
              to="/contact"
              @click="isMobileMenuOpen = false"
              class="cta-button-mobile"
            >
              <span class="cta-text">Discutons de votre projet</span>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="pt-24">
      <slot />
    </main>

    <!-- Footer Ultra-Moderne -->
    <footer class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white mt-20 relative overflow-hidden">
      <!-- Effet de fond animé - PROTÉGÉ DU PARALLAXE -->
      <div class="absolute inset-0 footer-background">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 footer-gradient"></div>
      </div>

      <div class="container-custom py-20 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Logo & Description -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3 mb-8">
              <div class="w-20 h-20 flex items-center justify-center">
                <NuxtImg 
                  src="/logos/logo-webinovaa.png" 
                  alt="Logo Webinovaa - Agence web créative" 
                  class="w-24 h-24 object-contain" 
                  width="96"
                  height="96"
                  format="webp"
                  quality="80"
                  sizes="96px"
                />
              </div>
              <span class="text-2xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Webinovaa
              </span>
            </div>
            <p class="text-slate-300 mb-8 max-w-md text-lg leading-relaxed">
              Développeur web freelance spécialisé en <span class="text-blue-400 font-bold">Nuxt.js</span>, <span class="text-purple-400 font-bold">Vue.js</span> et <span class="text-cyan-400 font-bold">Tailwind CSS</span>. 
              Création de sites performants, responsives et SEO-friendly.
            </p>
            <div class="flex space-x-6">
              <a 
                href="https://linkedin.com/in/jérémy-poulain-8a6038227" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Jérémy Poulain"
                class="group p-3 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <svg class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact.webinovaa@gmail.com" 
                aria-label="Envoyer un email à contact.webinovaa@gmail.com"
                class="group p-3 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <svg class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Navigation</h3>
            <ul class="space-y-3 text-slate-300">
              <li><NuxtLink to="/" class="footer-link">Accueil</NuxtLink></li>
              <li><NuxtLink to="/services" class="footer-link">Services</NuxtLink></li>
              <li><NuxtLink to="/realisations" class="footer-link">Réalisations</NuxtLink></li>
              <li><NuxtLink to="/blog" class="footer-link">Blog</NuxtLink></li>
              <li><NuxtLink to="/contact" class="footer-link">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Projets -->
          <div>
            <h3 class="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projets</h3>
            <ul class="space-y-3 text-slate-300">
              <li><NuxtLink to="/projects/edelweiss" class="footer-link">Edelweiss</NuxtLink></li>
              <li><NuxtLink to="/projects/labgear" class="footer-link">LabGear</NuxtLink></li>
              <li><NuxtLink to="/projects/webinovaa" class="footer-link">Webinovaa</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/10 mt-16 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Webinovaa. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { NavigationItem } from '~/types'

const isMobileMenuOpen = ref(false)

const navigationItems: NavigationItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Effet de parallaxe sur le header
onMounted(() => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (header) {
      const scrolled = window.pageYOffset
      if (scrolled > 100) {
        header.classList.add('bg-slate-900/95')
      } else {
        header.classList.remove('bg-slate-900/95')
      }
    }
  })
})
</script>

<style scoped>
/* Effet de glassmorphism avancé */
.backdrop-blur-2xl {
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
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

/* Styles pour les liens du footer */
.footer-link {
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(148 163 184);
  text-decoration: none;
  overflow: hidden;
}

.footer-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  z-index: 2;
}

.footer-link:hover {
  color: white;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.footer-link:hover::before {
  left: 100%;
}

.footer-link:hover::after {
  width: 80%;
}

/* Version active du lien */
.footer-link.router-link-active {
  color: #3B82F6;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.footer-link.router-link-active::after {
  width: 80%;
  background: #3B82F6;
}

/* Effet de hover 3D */
.group:hover .transform {
  transform: translateZ(20px) scale(1.05);
}

/* Bouton CTA Élégant */
.cta-button {
  position: relative;
  display: inline-block;
  padding: 12px 20px;
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 15px rgba(59, 130, 246, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  white-space: nowrap;
}

/* Responsive pour écrans moyens */
@media (min-width: 900px) {
  .cta-button {
    padding: 14px 24px;
    font-size: 15px;
    border-radius: 14px;
  }
}

/* Responsive pour grands écrans */
@media (min-width: 1200px) {
  .cta-button {
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 16px;
  }
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.cta-button:active {
  transform: translateY(0);
}

.cta-text {
  position: relative;
  z-index: 2;
}

.cta-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.cta-button:hover .cta-glow {
  left: 100%;
}

/* Bouton CTA Mobile */
.cta-button-mobile {
  position: relative;
  display: block;
  margin-top: 16px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  color: white;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 15px rgba(59, 130, 246, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.cta-button-mobile:hover {
  transform: translateY(-1px);
  box-shadow: 
    0 6px 20px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.cta-button-mobile:active {
  transform: translateY(0);
}

/* Protection du footer contre les effets de parallaxe */
.footer-background,
.footer-gradient {
  transform: none !important;
  will-change: auto !important;
}

/* Animation d'entrée pour le menu mobile */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style> 