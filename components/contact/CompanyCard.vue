<template>
  <div class="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 group">
    <div class="flex items-center gap-8">
      <!-- Logo entreprise grand -->
      <div class="relative">
        <div class="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50 p-6 shadow-2xl shadow-purple-500/30 group-hover:scale-105 transition-all duration-500">
          <img 
            src="/logos/logo-webinovaa.png" 
            alt="Logo Webinovaa" 
            class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <!-- Effet de glow animé -->
        <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
      </div>
      
      <!-- Informations entreprise -->
      <div class="flex-1">
        <div class="mb-4">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            Webinovaa
          </h3>
          <p class="text-lg text-purple-400 font-semibold mb-2">Agence de Développement Web</p>
          <p class="text-sm text-slate-400">Expertise • Innovation • Performance</p>
        </div>
        
        <!-- Services/Spécialités -->
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
            🎨 Design
          </span>
          <span class="px-3 py-1 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-medium">
            ⚡ Performance
          </span>
          <span class="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-medium">
            🚀 Innovation
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Ce composant ne nécessite pas de props pour l'instant car il affiche des données fixes
</script> 