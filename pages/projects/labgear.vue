<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <!-- Hero Section avec Image en Grand -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Effet de parallaxe en arrière-plan -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="container-custom relative z-10 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Contenu du projet -->
          <div class="space-y-8">
            <!-- Badge du type de projet -->
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-full">
              <span class="text-green-300 text-sm font-medium">Application Web Scientifique</span>
            </div>

            <!-- Titre principal -->
            <div>
              <h1 class="text-6xl md:text-8xl font-black mb-6">
                <span class="block bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent">
                  LabGear
                </span>
              </h1>
              <p class="text-2xl md:text-3xl text-slate-300 leading-relaxed">
                Application web intelligente pour la gestion d'inventaire et de réservation 
                de matériel scientifique en temps réel.
              </p>
            </div>

            <!-- Technologies -->
            <div>
              <h3 class="text-lg font-semibold text-slate-400 uppercase tracking-wide mb-4">
                Stack Technique
              </h3>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl text-green-300 font-medium">
                  Vue.js
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl text-blue-300 font-medium">
                  Node.js
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-teal-600/20 to-green-600/20 border border-teal-500/30 rounded-xl text-teal-300 font-medium">
                  MongoDB
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl text-cyan-300 font-medium">
                  Tailwind CSS
                </span>
                <span class="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl text-purple-300 font-medium">
                  Brevo
                </span>
              </div>
            </div>

            <!-- Boutons d'action -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink 
                to="/realisations"
                class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-2xl hover:border-green-400/50 hover:bg-white/5 transition-all duration-300"
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
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 group-hover:border-green-500/30 transition-all duration-500">
              <img 
                src="/images/realisation-labgear.avif" 
                alt="LabGear - Application de gestion laboratoire"
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
        <!-- Contexte et Enjeux -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div class="space-y-8">
            <div>
              <h2 class="text-4xl font-bold text-white mb-6">
                Le <span class="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Contexte</span>
              </h2>
              <p class="text-xl text-slate-300 leading-relaxed">
                Les laboratoires scientifiques gèrent des centaines d'équipements coûteux. 
                Le suivi manuel générait des pertes de matériel, des conflits de réservation et une perte de temps considérable.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Gestion papier obsolète et source d'erreurs</span>
              </div>
              <div class="flex items-start">
                <div class="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Conflits de réservation fréquents</span>
              </div>
              <div class="flex items-start">
                <div class="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Perte de matériel et retards dans les recherches</span>
              </div>
              <div class="flex items-start">
                <div class="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-slate-300">Aucune traçabilité des utilisations</span>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div>
              <h2 class="text-4xl font-bold text-white mb-6">
                L'<span class="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Innovation</span>
              </h2>
              <p class="text-xl text-slate-300 leading-relaxed">
                Développement d'une solution complète de gestion intelligente avec notifications automatiques, 
                tableaux de bord en temps réel et système de réservation intuitif.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">Interface intuitive adaptée aux scientifiques</span>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">Gestion temps réel des inventaires</span>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">Notifications automatisées intelligentes</span>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-300">Rapports détaillés d'utilisation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Fonctionnalités Développées -->
        <div class="mb-32">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-white mb-6">
              Fonctionnalités <span class="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Clés</span>
            </h2>
            <p class="text-xl text-slate-300 max-w-3xl mx-auto">
              Une suite complète d'outils pensée pour optimiser la gestion quotidienne des laboratoires
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Inventaire Temps Réel</h3>
              <p class="text-slate-300">
                Suivi en temps réel de tous les équipements avec localisation, état, disponibilité 
                et historique complet d'utilisation.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Réservation Intelligente</h3>
              <p class="text-slate-300">
                Système de réservation avec gestion des conflits, suggestions alternatives 
                et planification avancée des expériences.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM16 3h5v5h-5V3zM4 9h6V3H4v6z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Notifications Smart</h3>
              <p class="text-slate-300">
                Alertes automatiques pour les retours, maintenances, conflits et rappels 
                personnalisés via email et interface.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Gestion Utilisateurs</h3>
              <p class="text-slate-300">
                Système de rôles et permissions avec profils chercheurs, étudiants, 
                administrateurs et responsables d'équipement.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Rapports Avancés</h3>
              <p class="text-slate-300">
                Analyses détaillées d'utilisation, taux d'occupation, coûts par projet 
                et indicateurs de performance des équipements.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Interface Mobile</h3>
              <p class="text-slate-300">
                Application responsive optimisée pour tablettes et smartphones, 
                permettant la gestion en mobilité dans le laboratoire.
              </p>
            </div>
          </div>
        </div>

        <!-- Impact Métier -->
        <div class="mb-32">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-white mb-6">
              Impact <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Métier</span>
            </h2>
          </div>
          
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div class="space-y-8">
                <h3 class="text-3xl font-bold text-white text-center">Avant LabGear</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">2h/jour perdues en recherche d'équipement</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">15% de matériel perdu ou mal référencé</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">Conflits de réservation hebdomadaires</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">Aucune traçabilité des usages</span>
                  </div>
                </div>
              </div>

              <div class="space-y-8">
                <h3 class="text-3xl font-bold text-white text-center">Avec LabGear</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">Localisation instantanée du matériel</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">100% de traçabilité des équipements</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">Réservations automatisées sans conflit</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-slate-300">Rapports détaillés en temps réel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-12">
            Modernisons votre <span class="bg-gradient-to-r from-green-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">quotidien</span>
          </h2>
          <p class="text-2xl text-green-100 mb-16 leading-relaxed">
            Transformez votre quotidien avec une solution sur mesure
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                          <NuxtLink 
                to="/contact"
                class="cta-button group"
              >
                <span class="cta-text">Discutons de votre projet</span>
                <div class="cta-glow"></div>
              </NuxtLink>
            <NuxtLink 
              to="/realisations"
              class="inline-flex items-center px-12 py-6 bg-transparent border-2 border-white/20 text-white text-xl font-bold rounded-2xl hover:border-green-400/50 hover:bg-white/5 transition-all duration-300"
            >
              Autres projets
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
const seoData = generateProjectMetaTags('LabGear', 'Découvrez LabGear : application web pour la gestion d\'inventaire et réservation de matériel scientifique. Développement avec Vue.js, Node.js et MongoDB.')

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
/* Styles spécifiques LabGear - bouton CTA vert */
.cta-button {
  background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%) !important;
  box-shadow: 
    0 4px 15px rgba(16, 185, 129, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}

.cta-button:hover {
  box-shadow: 
    0 8px 25px rgba(16, 185, 129, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2) !important;
}
</style> 