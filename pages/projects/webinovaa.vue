<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <!-- Hero Section avec Image en Grand -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Effet de parallaxe en arrière-plan -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="container-custom relative z-10 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Contenu du projet -->
          <div class="space-y-8">
            <!-- Badge du type de projet -->
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full">
              <span class="text-purple-300 text-sm font-medium">Site Vitrine Premium</span>
            </div>

            <!-- Titre principal -->
            <div>
              <h1 class="text-6xl md:text-8xl font-black mb-6">
                <span class="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Webinovaa
                </span>
              </h1>
              <p class="text-2xl md:text-3xl text-slate-300 leading-relaxed">
                Site vitrine professionnel nouvelle génération avec animations fluides, 
                performance optimisée et expérience utilisateur exceptionnelle.
              </p>
            </div>

            <!-- Technologies -->
            <div>
              <h3 class="text-lg font-semibold text-slate-400 uppercase tracking-wide mb-4">
                Stack Technique
              </h3>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-xl text-green-300 font-medium">
                  Nuxt
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl text-blue-300 font-medium">
                  Tailwind CSS
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl text-purple-300 font-medium">
                  GSAP
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl text-orange-300 font-medium">
                  PWA
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl text-indigo-300 font-medium">
                  Pinia
                </span>
              </div>
            </div>

            <!-- Boutons d'action -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink 
                to="/realisations"
                class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-2xl hover:border-purple-400/50 hover:bg-white/5 transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Retour aux réalisations
              </NuxtLink>
            </div>
          </div>

          <!-- Image principale -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 group-hover:border-purple-500/30 transition-all duration-500">
              <img 
                src="/images/realisation-webinovaa.png" 
                alt="Webinovaa - Site vitrine professionnel"
                class="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Détails du Projet -->
    <section class="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative">
      <div class="container-custom">
        <!-- Vision et Approche -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div class="space-y-8">
            <div>
              <h2 class="text-4xl font-bold text-white mb-6">
                La <span class="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Vision</span>
              </h2>
              <p class="text-xl text-slate-300 leading-relaxed">
                Créer un site vitrine qui reflète parfaitement l'expertise en développement web moderne, 
                avec des animations subtiles et une performance exemplaire.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Design moderne et minimaliste</span>
              </div>
              <div class="flex items-start">
                <div class="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Animations fluides et engageantes</span>
              </div>
              <div class="flex items-start">
                <div class="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Performance et accessibilité optimales</span>
              </div>
              <div class="flex items-start">
                <div class="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Branding professionnel et cohérent</span>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div>
              <h2 class="text-4xl font-bold text-white mb-6">
                L'<span class="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Approche</span>
              </h2>
              <p class="text-xl text-slate-300 leading-relaxed">
                Une approche technique pointue combinée à un design pensé utilisateur, 
                avec des technologies de pointe pour garantir une expérience exceptionnelle.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">Architecture Nuxt optimisée</span>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">Animations GSAP haute performance</span>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">PWA pour une expérience native</span>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">SEO et performance optimisés</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Fonctionnalités Techniques -->
        <div class="mb-32">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-white mb-6">
              Excellence <span class="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technique</span>
            </h2>
            <p class="text-xl text-slate-300 max-w-3xl mx-auto">
              Chaque aspect technique a été optimisé pour offrir une expérience utilisateur exceptionnelle
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Design Responsive</h3>
              <p class="text-slate-300">
                Interface adaptative parfaite sur tous les appareils, avec des breakpoints 
                optimisés et des interactions tactiles fluides.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Performance Optimisée</h3>
              <p class="text-slate-300">
                Optimisations poussées : lazy loading, tree shaking, compression, 
                mise en cache intelligente et rendu côté serveur.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Animations Fluides</h3>
              <p class="text-slate-300">
                Animations GSAP sophistiquées avec timeline optimisée, effets de parallaxe 
                et transitions micro-interactions subtiles.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">SEO Avancé</h3>
              <p class="text-slate-300">
                Structure sémantique optimale, méta-données dynamiques, schema markup, 
                sitemap automatique et optimisation Core Web Vitals.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">PWA Complète</h3>
              <p class="text-slate-300">
                Application web progressive avec installation, mode hors-ligne, 
                notifications push et expérience native sur mobile.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Code Quality</h3>
              <p class="text-slate-300">
                Architecture propre, composants réutilisables, TypeScript, tests automatisés 
                et respect des bonnes pratiques Vue.js/Nuxt.
              </p>
            </div>
          </div>
        </div>

        <!-- Innovation & Créativité -->
        <div class="mb-32">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-white mb-6">
              Innovation <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Créative</span>
            </h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="space-y-8">
              <h3 class="text-3xl font-bold text-white">Effets Visuels Uniques</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Curseur Magique Personnalisé</h4>
                    <p class="text-slate-300">Système de curseur interactif avec particules, traînées et effets de distorsion, entièrement personnalisable.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Glassmorphism Avancé</h4>
                    <p class="text-slate-300">Effets de verre et transparence avec backdrop-filter, ombres multiples et gradients subtils.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Animations Micro-Interactions</h4>
                    <p class="text-slate-300">Feedback visuel instantané sur chaque interaction utilisateur avec des animations fluides et naturelles.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-8">
              <h3 class="text-3xl font-bold text-white">Architecture Moderne</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Composants Réutilisables</h4>
                    <p class="text-slate-300">Architecture modulaire avec composants Vue 3 Composition API, props typées et slots flexibles.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">State Management</h4>
                    <p class="text-slate-300">Gestion d'état avec Pinia pour les préférences utilisateur, thème et configuration du curseur.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">TypeScript Integration</h4>
                    <p class="text-slate-300">Typage strict avec interfaces, types personnalisés et validation automatique pour une robustesse maximale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-12">
            Votre vision <span class="bg-gradient-to-r from-purple-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">mérite</span> l'excellence
          </h2>
          <p class="text-2xl text-purple-100 mb-16 leading-relaxed">
            Créons ensemble un site qui reflète parfaitement votre expertise et vos ambitions
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink 
              to="/contact"
              class="cta-button group"
            >
              <span class="cta-text">Créons votre projet</span>
              <div class="cta-glow"></div>
            </NuxtLink>
            <NuxtLink 
              to="/realisations"
              class="inline-flex items-center px-12 py-6 bg-transparent border-2 border-white/20 text-white text-xl font-bold rounded-2xl hover:border-purple-400/50 hover:bg-white/5 transition-all duration-300"
            >
              Autres réalisations
              <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
// SEO optimisé avec le composable
const { generateProjectMetaTags } = useMetaSeo()
const seoData = generateProjectMetaTags('Webinovaa', 'Découvrez le site Webinovaa : vitrine premium avec Nuxt, animations GSAP, PWA et performance optimisée. Design moderne et expérience exceptionnelle.')

// Configuration SEO complète
useHead({
  title: seoData.title,
  meta: seoData.meta,
  link: seoData.link
})

// Données structurées JSON-LD
const { generateOrganizationJsonLd, generateLocalBusinessJsonLd, generateWebSiteJsonLd } = useJsonLd()
const jsonLdData = [
  generateOrganizationJsonLd(),
  generateLocalBusinessJsonLd(),
  generateWebSiteJsonLd()
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLdData)
    }
  ]
})
</script>

<style scoped>
/* Styles spécifiques Webinovaa - bouton CTA violet */
.cta-button {
  background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%) !important;
  box-shadow: 
    0 4px 15px rgba(139, 92, 246, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}

.cta-button:hover {
  box-shadow: 
    0 8px 25px rgba(139, 92, 246, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2) !important;
}
</style> 