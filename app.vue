<template>
  <NuxtLayout>
    <NuxtPage />
    <MagicCursor :settings="cursorSettings" />
    <MagicCursorControls @settings-updated="updateCursorSettings" />
  </NuxtLayout>
</template> 

<script setup lang="ts">
import { ref } from 'vue'
import type { CursorSettings } from '~/types'
import MagicCursor from '@/components/ui/MagicCursor.vue'
import MagicCursorControls from '@/components/ui/MagicCursorControls.vue'

const cursorSettings = ref<CursorSettings>({
  enabled: true,
  showRing: true,
  showPulse: true,
  showTrail: true,
  showParticles: true,
  showDistortion: true,
  intensity: 1,
  speed: 1,
  primaryColor: '#3B82F6',
  secondaryColor: '#8B5CF6'
})

const updateCursorSettings = (newSettings: CursorSettings) => {
  cursorSettings.value = { ...newSettings }
}
</script> 