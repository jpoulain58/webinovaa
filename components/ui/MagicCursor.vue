<template>
  <div class="magic-cursor-container" v-if="isEnabled">
    <!-- Curseur principal -->
    <div 
      class="cursor-main"
      :style="{ 
        left: (cursorPosition.x - getCursorOffset().main) + 'px', 
        top: (cursorPosition.y - getCursorOffset().main) + 'px',
        transform: `scale(${cursorScale})`,
        '--primary-color': settings.primaryColor,
        '--secondary-color': settings.secondaryColor
      }"
    >
      <div class="cursor-core"></div>
      <div class="cursor-ring" v-if="settings.showRing"></div>
      <div class="cursor-pulse" v-if="settings.showPulse"></div>
    </div>

    <!-- Curseur de traînée -->
    <div 
      v-if="settings.showTrail"
      class="cursor-trail"
      :style="{ 
        left: (trailPosition.x - getCursorOffset().trail) + 'px', 
        top: (trailPosition.y - getCursorOffset().trail) + 'px',
        transform: `scale(${trailScale})`,
        '--primary-color': settings.primaryColor
      }"
    >
      <div class="trail-core"></div>
    </div>

    <!-- Particules -->
    <div 
      v-if="settings.showParticles"
      v-for="particle in particles" 
      :key="particle.id"
      class="cursor-particle"
      :style="{
        left: particle.x + 'px',
        top: particle.y + 'px',
        transform: `scale(${particle.scale})`,
        opacity: particle.opacity,
        background: particle.color,
        '--particle-color': particle.color
      }"
    ></div>

    <!-- Effet de distorsion -->
    <div 
      v-if="isHovering && settings.showDistortion"
      class="cursor-distortion"
      :style="{ 
        left: (cursorPosition.x - getCursorOffset().distortion) + 'px', 
        top: (cursorPosition.y - getCursorOffset().distortion) + 'px',
        transform: `scale(${distortionScale})`,
        '--primary-color': settings.primaryColor
      }"
    >
      <div class="distortion-ring"></div>
      <div class="distortion-pulse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface CursorPosition {
  x: number
  y: number
}

interface Particle {
  id: number
  x: number
  y: number
  scale: number
  opacity: number
  color: string
  velocity: { x: number; y: number }
  life: number
}

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

// Props pour recevoir les paramètres
const props = defineProps<{
  settings: CursorSettings
}>()

const isEnabled = ref(true)
const cursorPosition = ref<CursorPosition>({ x: 0, y: 0 })
const trailPosition = ref<CursorPosition>({ x: 0, y: 0 })
const cursorScale = ref(1)
const trailScale = ref(1)
const isHovering = ref(false)
const distortionScale = ref(1)

const particles = ref<Particle[]>([])
let particleId = 0
let animationFrame: number
let lastTime = 0

// Calcul des offsets selon la taille d'écran
const getCursorOffset = () => {
  const isSmallScreen = window.innerWidth <= 768
  return {
    main: isSmallScreen ? 7.5 : 12, // 15px/2 ou 20px/2 + 2px de marge
    trail: isSmallScreen ? 6 : 7.5,  // Proportionnel au curseur principal
    distortion: isSmallScreen ? 45 : 60 // Proportionnel aux autres éléments
  }
}

// Couleurs pour les particules
const particleColors: string[] = [
  '#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', 
  '#F59E0B', '#EF4444', '#EC4899', '#6366F1'
]

onMounted(() => {
  hideDefaultCursor()
  setupEventListeners()
  startAnimation()
  loadSettings()
  setupResponsiveHandler()
})

onUnmounted(() => {
  removeEventListeners()
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  // Nettoyer les event listeners de redimensionnement
  window.removeEventListener('resize', handleResize)
})

// Écouter les changements de paramètres
watch(() => props.settings, (newSettings) => {
  updateCursorBehavior(newSettings)
}, { deep: true })

const setupResponsiveHandler = () => {
  window.addEventListener('resize', handleResize)
}

const handleResize = () => {
  // Réévaluer si on est sur un appareil tactile lors du redimensionnement
  const isTouchDevice = 'ontouchstart' in window || 
                       navigator.maxTouchPoints > 0 || 
                       /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                       (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device')
    isEnabled.value = false
  } else {
    document.body.classList.remove('touch-device')
    isEnabled.value = props.settings.enabled
  }
  
  // Force le recalcul de la position du curseur avec les nouveaux offsets
  // En déclenchant une mise à jour forcée du template
  cursorScale.value = cursorScale.value
}

const hideDefaultCursor = () => {
  if (props.settings.enabled) {
    document.body.style.cursor = 'none'
    document.documentElement.style.cursor = 'none'
    document.body.classList.add('magic-cursor-active')
    document.documentElement.classList.add('magic-cursor-active')
  }
}

const setupEventListeners = () => {
  // Événements de souris (desktop)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseenter', handleMouseEnter)
  document.addEventListener('mouseleave', handleMouseLeave)
  
  // Événements tactiles (mobile)
  document.addEventListener('touchmove', handleTouchMove, { passive: true })
  document.addEventListener('touchstart', handleTouchStart, { passive: true })
  document.addEventListener('touchend', handleTouchEnd, { passive: true })
  
  // Détecter les éléments interactifs
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
  interactiveElements.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.addEventListener('mouseenter', handleElementHover)
      el.addEventListener('mouseleave', handleElementLeave)
      el.addEventListener('touchstart', handleElementHover, { passive: true })
      el.addEventListener('touchend', handleElementLeave, { passive: true })
    }
  })
}

const removeEventListeners = () => {
  // Supprimer les événements de souris
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseenter', handleMouseEnter)
  document.removeEventListener('mouseleave', handleMouseLeave)
  
  // Supprimer les événements tactiles
  document.removeEventListener('touchmove', handleTouchMove)
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
}

const handleMouseMove = (e: MouseEvent) => {
  cursorPosition.value = { x: e.clientX, y: e.clientY }
  
  // Effet de traînée avec interpolation
  if (props.settings.showTrail) {
    setTimeout(() => {
      trailPosition.value = { 
        x: e.clientX + (Math.random() - 0.5) * 10, 
        y: e.clientY + (Math.random() - 0.5) * 10 
      }
    }, 50)
  }
  
  // Créer des particules lors du mouvement
  if (props.settings.showParticles && Math.random() < 0.2) {
    createParticle(e.clientX, e.clientY)
  }
}

const handleMouseEnter = () => {
  cursorScale.value = 1.2
  trailScale.value = 1.1
}

const handleMouseLeave = () => {
  cursorScale.value = 0
  trailScale.value = 0
  // Ne pas restaurer le curseur système ici, CSS + updateCursorBehavior gèrent cela
}

const handleElementHover = () => {
  isHovering.value = true
  cursorScale.value = 1.5
  trailScale.value = 1.3
  distortionScale.value = 1.2
}

const handleElementLeave = () => {
  isHovering.value = false
  cursorScale.value = 1
  trailScale.value = 1
  distortionScale.value = 1
}

// Fonctions de gestion des événements tactiles (mobile)
const handleTouchMove = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0]
    if (touch) {
      cursorPosition.value = { x: touch.clientX, y: touch.clientY }
      
      // Effet de traînée avec interpolation
      if (props.settings.showTrail) {
        setTimeout(() => {
          trailPosition.value = { 
            x: touch.clientX + (Math.random() - 0.5) * 10, 
            y: touch.clientY + (Math.random() - 0.5) * 10 
          }
        }, 50)
      }
      
      // Créer des particules lors du mouvement (réduit sur mobile)
      if (props.settings.showParticles && Math.random() < 0.1) {
        createParticle(touch.clientX, touch.clientY)
      }
    }
  }
}

const handleTouchStart = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0]
    if (touch) {
      cursorPosition.value = { x: touch.clientX, y: touch.clientY }
      cursorScale.value = 1.2
      trailScale.value = 1.1
    }
  }
}

const handleTouchEnd = () => {
  // Ne pas masquer complètement le curseur sur mobile
  cursorScale.value = 1
  trailScale.value = 1
}

const createParticle = (x: number, y: number) => {
  const particle: Particle = {
    id: particleId++,
    x: x + (Math.random() - 0.5) * 30,
    y: y + (Math.random() - 0.5) * 30,
    scale: Math.random() * 0.5 + 0.5,
    opacity: 1,
    color: particleColors[Math.floor(Math.random() * particleColors.length)] || '#3B82F6',
    velocity: {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    },
    life: 1
  }
  
  particles.value.push(particle)
  
  // Limiter le nombre de particules
  if (particles.value.length > 30) {
    particles.value.shift()
  }
}

const startAnimation = () => {
  const animate = (currentTime: number) => {
    const deltaTime = currentTime - lastTime
    lastTime = currentTime
    
    // Animation des particules
    particles.value.forEach((particle, index) => {
      particle.x += particle.velocity.x * props.settings.speed
      particle.y += particle.velocity.y * props.settings.speed
      particle.life -= 0.02
      particle.opacity = particle.life
      particle.scale *= 0.99
      
      // Supprimer les particules mortes
      if (particle.life <= 0) {
        particles.value.splice(index, 1)
      }
    })
    
    // Effet de pulsation
    const pulseScale = 1 + Math.sin(currentTime * 0.005) * 0.1 * props.settings.intensity
    cursorScale.value = Math.max(cursorScale.value, pulseScale)
    
    animationFrame = requestAnimationFrame(animate)
  }
  
  animationFrame = requestAnimationFrame(animate)
}

const updateCursorBehavior = (settings: CursorSettings) => {
  if (settings.enabled) {
    document.body.style.cursor = 'none'
    document.documentElement.style.cursor = 'none'
    document.body.classList.add('magic-cursor-active')
    document.documentElement.classList.add('magic-cursor-active')
  } else {
    document.body.style.cursor = 'auto'
    document.documentElement.style.cursor = 'auto'
    document.body.classList.remove('magic-cursor-active')
    document.documentElement.classList.remove('magic-cursor-active')
  }
}

const loadSettings = () => {
  if (process.client) {
    const saved = localStorage.getItem('magic-cursor-settings')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Les paramètres sont gérés par le composant parent
      } catch (e) {
        console.warn('Impossible de charger les paramètres du curseur')
      }
    }
  }
}
</script>

<style scoped>
.magic-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

/* Curseur principal */
.cursor-main {
  position: fixed;
  width: 20px;
  height: 20px;
  pointer-events: none;
  z-index: 10000;
  transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cursor-core {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  box-shadow: 
    0 0 20px rgba(59, 130, 246, 0.8),
    0 0 40px rgba(59, 130, 246, 0.4),
    0 0 60px rgba(59, 130, 246, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.3);
  animation: cursorGlow 2s ease-in-out infinite alternate;
}

.cursor-ring {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(59, 130, 246, 0.6);
  border-radius: 50%;
  top: -10px;
  left: -10px;
  animation: cursorRing 3s linear infinite;
}

.cursor-pulse {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  top: -20px;
  left: -20px;
  animation: cursorPulse 4s ease-in-out infinite;
}

/* Curseur de traînée */
.cursor-trail {
  position: fixed;
  width: 15px;
  height: 15px;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.trail-core {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  box-shadow: 
    0 0 15px rgba(139, 92, 246, 0.6),
    0 0 30px rgba(139, 92, 246, 0.3);
  animation: trailGlow 1.5s ease-in-out infinite alternate;
}

/* Particules */
.cursor-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  box-shadow: 0 0 10px var(--particle-color);
  animation: particleFloat 3s ease-in-out infinite;
}

/* Effet de distorsion */
.cursor-distortion {
  position: fixed;
  width: 120px;
  height: 120px;
  pointer-events: none;
  z-index: 9997;
  background: radial-gradient(
    circle, 
    rgba(59, 130, 246, 0.3) 0%, 
    rgba(139, 92, 246, 0.2) 30%,
    rgba(6, 182, 212, 0.1) 60%,
    transparent 100%
  );
  border-radius: 50%;
  animation: distortionWave 0.6s ease-out;
  filter: blur(1px);
  box-shadow: 
    0 0 30px rgba(59, 130, 246, 0.4),
    0 0 60px rgba(139, 92, 246, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.distortion-ring {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 160px;
  height: 160px;
  border: 2px solid rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  animation: distortionRing 0.8s ease-out;
}

.distortion-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  animation: distortionPulse 0.4s ease-out;
}

/* Animations */
@keyframes cursorGlow {
  0% {
    box-shadow: 
      0 0 20px rgba(59, 130, 246, 0.8),
      0 0 40px rgba(59, 130, 246, 0.4),
      0 0 60px rgba(59, 130, 246, 0.2),
      inset 0 0 10px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 
      0 0 30px rgba(59, 130, 246, 1),
      0 0 60px rgba(59, 130, 246, 0.6),
      0 0 90px rgba(59, 130, 246, 0.3),
      inset 0 0 15px rgba(255, 255, 255, 0.5);
  }
}

@keyframes cursorRing {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg) scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
}

@keyframes cursorPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.1;
  }
}

@keyframes trailGlow {
  0% {
    box-shadow: 
      0 0 15px rgba(139, 92, 246, 0.6),
      0 0 30px rgba(139, 92, 246, 0.3);
  }
  100% {
    box-shadow: 
      0 0 25px rgba(139, 92, 246, 0.8),
      0 0 50px rgba(139, 92, 246, 0.4);
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.2);
  }
}

@keyframes distortionWave {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0.9;
    filter: blur(0px) hue-rotate(0deg);
  }
  50% {
    transform: scale(0.7) rotate(180deg);
    opacity: 0.6;
    filter: blur(2px) hue-rotate(90deg);
  }
  100% {
    transform: scale(1.2) rotate(360deg);
    opacity: 0;
    filter: blur(4px) hue-rotate(180deg);
  }
}

@keyframes distortionRing {
  0% {
    transform: scale(0.5);
    opacity: 0.8;
    border-width: 4px;
  }
  50% {
    transform: scale(1);
    opacity: 0.4;
    border-width: 2px;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
    border-width: 1px;
  }
}

@keyframes distortionPulse {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .cursor-main {
    width: 15px;
    height: 15px;
  }
  
  .cursor-ring {
    width: 30px;
    height: 30px;
    top: -7.5px;
    left: -7.5px;
  }
  
  .cursor-pulse {
    width: 45px;
    height: 45px;
    top: -15px;
    left: -15px;
  }
}
</style> 