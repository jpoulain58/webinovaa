<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
    <!-- Effet de fond animé -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-black text-white mb-8" data-gsap="services-title">
          Mes <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">services</span>
        </h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto" data-gsap="services-subtitle">
          Des solutions web complètes et modernes pour donner vie à vos projets les plus ambitieux
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-gsap="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="magnetic group cursor-pointer perspective-1000 h-full gsap-optimized service-card"
          :data-gsap="`service-card-${index}`"
        >
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
            <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icons :icon="service.icon" size="md" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-slate-300 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <NuxtLink 
          to="/services" 
          class="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white text-xl font-bold rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer"
        >
          <span class="relative z-10">Découvrir tous mes services</span>
          <svg class="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  services: Array<{
    title: string
    description: string
    icon: string
  }>
}

defineProps<Props>()
</script> 