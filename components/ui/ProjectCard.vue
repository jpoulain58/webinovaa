<template>
  <div class="card p-6 h-full">
    <div class="space-y-4">
      <!-- Header -->
      <div>
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
        <span class="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
          {{ project.type }}
        </span>
      </div>

      <!-- Technologies -->
      <div>
        <h4 class="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Features -->
      <div>
        <h4 class="text-sm font-semibold text-gray-700 mb-2">Fonctionnalités</h4>
        <ul class="space-y-1">
          <li 
            v-for="feature in project.features" 
            :key="feature"
            class="text-sm text-gray-600 flex items-center"
          >
            <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Link -->
      <div class="pt-4">
        <a 
          :href="project.link" 
          class="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
        >
          Voir le projet
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script> 