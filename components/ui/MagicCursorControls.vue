<template>
    <!-- Masquer complètement sur mobile/tactile -->
    <div v-if="!isMobile" class="magic-cursor-controls" :class="{ 'controls-hidden': !showControls }">
    <div class="try-me-hint" v-if="!showControls">Essayez-moi</div>
    <button
      @click="toggleControls"
      class="controls-toggle"
      :class="{ 'active': showControls }"
    >
      <span class="toggle-icon">✨</span>
    </button>
    
    <div v-if="showControls" ref="panelRef" class="controls-panel">
      <h3>Curseur Magique</h3>
      
      <div class="control-group">
        <label class="control-label">
          <input 
            type="checkbox" 
            v-model="settings.enabled" 
            @change="updateSettings"
          />
          Activer le curseur
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          <input 
            type="checkbox" 
            v-model="settings.showRing" 
            @change="updateSettings"
          />
          Anneau rotatif
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          <input 
            type="checkbox" 
            v-model="settings.showPulse" 
            @change="updateSettings"
          />
          Pulsation
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          <input 
            type="checkbox" 
            v-model="settings.showTrail" 
            @change="updateSettings"
          />
          Effet de traînée
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          <input 
            type="checkbox" 
            v-model="settings.showParticles" 
            @change="updateSettings"
          />
          Particules
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          <input 
            type="checkbox" 
            v-model="settings.showDistortion" 
            @change="updateSettings"
          />
          Distorsion au hover
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          Intensité
          <input 
            type="range" 
            min="0.1" 
            max="2" 
            step="0.1" 
            v-model="settings.intensity" 
            @input="updateSettings"
            class="intensity-slider"
          />
          <span class="intensity-value">{{ settings.intensity }}</span>
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          Vitesse
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1" 
            v-model="settings.speed" 
            @input="updateSettings"
            class="speed-slider"
          />
          <span class="speed-value">{{ settings.speed }}</span>
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          Couleur principale
          <input 
            type="color" 
            v-model="settings.primaryColor" 
            @change="updateSettings"
            class="color-picker"
          />
        </label>
      </div>
      
      <div class="control-group">
        <label class="control-label">
          Couleur secondaire
          <input 
            type="color" 
            v-model="settings.secondaryColor" 
            @change="updateSettings"
            class="color-picker"
          />
        </label>
      </div>
      
      <div class="control-actions">
        <button @click="resetSettings" class="reset-btn">
          Réinitialiser
        </button>
        <button @click="toggleCursor" class="toggle-cursor-btn">
          {{ settings.enabled ? 'Désactiver' : 'Activer' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface CursorSettings {
  enabled: boolean
  showRing: boolean
  showPulse: boolean
  showTrail: boolean
  showParticles: boolean
  showDistortion: boolean
  intensity: number
  speed: number
  primaryColor: string
  secondaryColor: string
}

// Émettre les paramètres vers le composant parent
const emit = defineEmits<{
  'settings-updated': [settings: CursorSettings]
}>()

const showControls = ref(false)
const cursorEnabled = ref(true)
const panelRef = ref<HTMLElement>()

// Détection mobile/tactile
const isMobile = ref(false)

const settings = ref<CursorSettings>({
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

onMounted(() => {
  // Détecter si c'est un appareil mobile/tactile de façon plus précise
  const isTouchDevice = 'ontouchstart' in window || 
                       navigator.maxTouchPoints > 0 || 
                       /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                       (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
  
  isMobile.value = isTouchDevice
  
  // Ajouter la classe touch-device au body si c'est un appareil tactile
  if (isTouchDevice) {
    document.body.classList.add('touch-device')
  } else {
    document.body.classList.remove('touch-device')
  }
  
  loadSettings()
  setupGlobalEvents()
  emitSettingsUpdate()
})

onUnmounted(() => {
  removeGlobalEvents()
})

const toggleControls = () => {
  showControls.value = !showControls.value
  // Le curseur système reste géré par MagicCursor + CSS.
}

const updateSettings = () => {
  // Synchroniser cursorEnabled avec settings.enabled
  cursorEnabled.value = settings.value.enabled
  saveSettings()
  emitSettingsUpdate()
}

const resetSettings = () => {
  settings.value = {
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
  }
  updateSettings()
}

const toggleCursor = () => {
  settings.value.enabled = !settings.value.enabled
  cursorEnabled.value = settings.value.enabled
  updateSettings()
}

const saveSettings = () => {
  if (process.client) {
    localStorage.setItem('magic-cursor-settings', JSON.stringify(settings.value))
  }
}

const loadSettings = () => {
  if (process.client) {
    const saved = localStorage.getItem('magic-cursor-settings')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        settings.value = { ...settings.value, ...parsed }
        cursorEnabled.value = settings.value.enabled
      } catch (e) {
        console.warn('Impossible de charger les paramètres du curseur')
      }
    }
  }
}

const emitSettingsUpdate = () => {
  emit('settings-updated', settings.value)
}

const handleClickOutside = (event: MouseEvent) => {
  if (showControls.value && panelRef.value && !panelRef.value.contains(event.target as Node)) {
    // Vérifier aussi que ce n'est pas le bouton toggle
    const toggleButton = document.querySelector('.controls-toggle')
    if (toggleButton && !toggleButton.contains(event.target as Node)) {
      showControls.value = false
    }
  }
}

const setupGlobalEvents = () => {
  // Raccourci clavier pour afficher/masquer les contrôles
  document.addEventListener('keydown', handleKeydown)
  
  // Fermer le panneau en cliquant en dehors
  document.addEventListener('mousedown', handleClickOutside)
}

const handleKeydown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault()
      toggleControls()
    }
  
  // Fermer avec Escape
  if (e.key === 'Escape' && showControls.value) {
    showControls.value = false
  }
}

const removeGlobalEvents = () => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('mousedown', handleClickOutside)
}
</script>

<style scoped>
.magic-cursor-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10003;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.controls-hidden {
  transform: translateX(calc(100% - 50px));
}

.controls-toggle {
  position: relative;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  pointer-events: auto;
}

.controls-toggle:hover {
  transform: scale(1.1);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(102, 126, 234, 0.6);
}

.controls-toggle.active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(240, 147, 251, 0.4);
}

.try-me-hint {
  position: absolute;
  bottom: 65px;
  right: 50%;
  transform: translateX(50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 400;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  animation: hintFadeIn 2s ease-in-out 1s forwards, hintPulse 3s ease-in-out 3s infinite;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.controls-panel {
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 300px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: auto;
}

.controls-panel h3 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.control-group {
  margin-bottom: 15px;
}

.control-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  transition: color 0.2s ease;
  pointer-events: auto;
}

.control-label:hover {
  color: #333;
}

.control-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #667eea;
}

.intensity-slider,
.speed-slider {
  width: 150px;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
}

.intensity-slider::-webkit-slider-thumb,
.speed-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.intensity-slider::-moz-range-thumb,
.speed-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.intensity-value,
.speed-value {
  font-weight: 600;
  color: #667eea;
  min-width: 30px;
  text-align: right;
}

.color-picker {
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: none;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 0;
}

.color-picker::-webkit-color-swatch {
  border: none;
  border-radius: 6px;
}

.control-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.reset-btn,
.toggle-cursor-btn {
  flex: 1;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  pointer-events: auto;
}

.reset-btn {
  background: #f8f9fa;
  color: #6c757d;
  border: 1px solid #dee2e6;
}

.reset-btn:hover {
  background: #e9ecef;
  color: #495057;
}

.toggle-cursor-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.toggle-cursor-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

@keyframes hintFadeIn {
  0% {
    opacity: 0;
    transform: translateX(50%) translateY(10px);
  }
  100% {
    opacity: 0.9;
    transform: translateX(50%) translateY(0);
  }
}

@keyframes hintPulse {
  0%, 100% {
    opacity: 0.9;
    transform: translateX(50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translateX(50%) scale(0.95);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .magic-cursor-controls {
    bottom: 10px;
    right: 10px;
  }
  
  .controls-panel {
    width: 280px;
    padding: 15px;
    bottom: 60px;
    right: 0;
  }
  
  .intensity-slider,
  .speed-slider {
    width: 120px;
  }
  
  .try-me-hint {
    font-size: 8px;
    padding: 3px 6px;
    bottom: 55px;
  }
}
</style> 