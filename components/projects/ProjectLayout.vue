<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <!-- Hero Section avec Image en Grand -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Effet de parallaxe en arrière-plan -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="container-custom relative z-10 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div class="space-y-8">
            <!-- Badge du type de projet -->
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r border rounded-full"
                 :class="badgeClasses">
              <span class="text-sm font-medium" :class="badgeTextClass">{{ projectType }}</span>
            </div>

            <!-- Titre principal -->
            <div>
              <h1 class="text-6xl md:text-8xl font-black mb-6">
                <span class="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  {{ title }}
                </span>
              </h1>
              <p class="text-2xl md:text-3xl text-slate-300 leading-relaxed">
                {{ description }}
              </p>
            </div>

            <!-- Technologies -->
            <div>
              <h3 class="text-lg font-semibold text-slate-400 uppercase tracking-wide mb-4">
                Technologies utilisées
              </h3>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="tech in technologies" 
                  :key="tech"
                  class="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-sm font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink 
                to="/contact"
                class="cta-button group"
              >
                <span class="cta-text">Discutons de votre projet</span>
                <div class="cta-glow"></div>
              </NuxtLink>
              <NuxtLink 
                to="/realisations"
                class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-2xl hover:border-blue-400/50 hover:bg-white/5 transition-all duration-300"
              >
                Autres projets
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Image du projet -->
          <div class="relative group cursor-pointer">
            <div class="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/25 group-hover:shadow-purple-500/30 transition-all duration-500">
              <img 
                :src="image" 
                :alt="title" 
                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-blue-900/20 transition-all duration-300"></div>
            </div>
            <!-- Effet de glow -->
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

        </div>
      </div>
    </section>

    <!-- Contenu spécifique au projet -->
    <slot />

    <!-- CTA Section commune -->
    <section class="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-12">
            Un projet <span class="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">similaire</span> ?
          </h2>
          <p class="text-2xl text-blue-100 mb-16 leading-relaxed">
            Donnons vie à votre vision avec la même expertise et la même passion
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
              class="inline-flex items-center px-12 py-6 bg-transparent border-2 border-white/20 text-white text-xl font-bold rounded-2xl hover:border-blue-400/50 hover:bg-white/5 transition-all duration-300"
            >
              Voir d'autres projets
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
import type { Project } from '~/types'

interface Props {
  title: string
  description: string
  projectType: string
  technologies: string[]
  image: string
  badgeClasses?: string
  badgeTextClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  badgeClasses: 'from-blue-600/20 to-purple-600/20 border-blue-500/30',
  badgeTextClass: 'text-blue-300'
})
</script> 