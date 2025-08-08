<template>
  <div class="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group">
    <div class="flex items-center gap-8">
      <!-- Photo de profil grande -->
      <div class="relative">
        <a href="https://linkedin.com/in/jérémy-poulain-8a6038227" target="_blank" class="block rounded-3xl">
          <NuxtImg 
            src="/images/photo.jpeg" 
            alt="Jérémy POULAIN - Développeur web freelance" 
            class="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover object-center scale-110 group-hover:scale-115 transition-slow cursor-pointer shadow-2xl shadow-blue-500/30"
            loading="lazy"
            sizes="sm:128px md:160px"
          />
        </a>
      </div>
      
      <!-- Informations personnelles -->
      <div class="flex-1">
        <div class="mb-4">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            Jérémy POULAIN
          </h3>
          <p class="text-lg text-blue-400 font-semibold mb-2">Développeur Full Stack</p>
        </div>
        
        <!-- Stats/Badges -->
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
            Disponible
          </span>
          <span class="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
            Réponse < 24h
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Ce composant ne nécessite pas de props pour l'instant car il affiche des données fixes
</script> 