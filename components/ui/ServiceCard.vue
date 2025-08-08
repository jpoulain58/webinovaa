<template>
  <div class="card p-6 h-full">
    <div class="flex items-start space-x-4">
      <div :class="`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`">
        <svg class="w-6 h-6" :class="`text-${service.color}-600`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <!-- Code icon -->
          <path v-if="service.icon === 'code'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          <!-- Palette icon -->
          <path v-else-if="service.icon === 'palette'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
          <!-- Search icon -->
          <path v-else-if="service.icon === 'search'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          <!-- App icon -->
          <path v-else-if="service.icon === 'app'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          <!-- Users icon -->
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script> 