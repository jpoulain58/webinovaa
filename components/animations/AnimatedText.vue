<template>
  <component 
    :is="tag"
    :class="[baseClasses, customClasses]"
    ref="textElement"
    :data-gsap="gsapId"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag?: string
  animation?: 'reveal' | 'typewriter' | 'wave' | 'explosion' | 'fade'
  trigger?: 'immediate' | 'scroll' | 'hover' | 'click'
  duration?: number
  stagger?: number
  delay?: number
  ease?: string
  customClasses?: string
  gsapId?: string
  split?: 'chars' | 'words' | 'lines'
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  animation: 'reveal',
  trigger: 'scroll',
  duration: 0.8,
  stagger: 0.03,
  delay: 0,
  ease: 'back.out(1.7)',
  customClasses: '',
  gsapId: '',
  split: 'chars'
})

const textElement = ref<HTMLElement>()
const isAnimated = ref(false)

const baseClasses = computed(() => [
  'gsap-optimized',
  'overflow-hidden',
  {
    'gsap-3d': props.animation === 'explosion'
  }
])

const { 
  animateTextReveal, 
  animateTypewriter,
  splitText,
  splitWords,
  animateOnScroll
} = useGsapAnimations()

const animateText = async () => {
  if (isAnimated.value || !textElement.value) return
  
  await nextTick()
  
  const element = textElement.value
  const selector = props.gsapId ? `[data-gsap="${props.gsapId}"]` : element
  
  // Préparation du texte selon le type de split
  if (props.split === 'chars') {
    splitText(typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`)
  } else if (props.split === 'words') {
    splitWords(typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`)
  }
  
  // Choix de l'animation
  let animation
  
  switch (props.animation) {
    case 'typewriter':
      const text = element.textContent || ''
      animation = animateTypewriter(
        typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`,
        text,
        { duration: props.duration }
      )
      break
      
    case 'wave':
      animation = animateTextReveal(
        `${typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`} .${props.split === 'chars' ? 'char' : 'word'}`,
        {
          duration: props.duration,
          stagger: props.stagger,
          ease: "power2.out",
          delay: props.delay,
          y: 50,
          rotation: 0,
          skewX: 15
        }
      )
      break
      
    case 'explosion':
      animation = animateTextReveal(
        `${typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`} .${props.split === 'chars' ? 'char' : 'word'}`,
        {
          duration: props.duration * 1.5,
          stagger: { 
            amount: props.stagger * 20,
            from: "center",
            ease: "back.out(2)"
          },
          ease: "back.out(1.7)",
          delay: props.delay,
          y: 200,
          rotationY: 180,
          scale: 0.5
        }
      )
      break
      
    case 'fade':
      const { $gsap } = useNuxtApp()
      animation = $gsap.fromTo(
        `${typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`} .${props.split === 'chars' ? 'char' : 'word'}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: props.duration,
          stagger: props.stagger,
          ease: props.ease,
          delay: props.delay
        }
      )
      break
      
    default: // reveal
      animation = animateTextReveal(
        `${typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`} .${props.split === 'chars' ? 'char' : 'word'}`,
        {
          duration: props.duration,
          stagger: props.stagger,
          ease: props.ease,
          delay: props.delay
        }
      )
  }
  
  // Application selon le trigger
  if (props.trigger === 'scroll' && animation) {
    animateOnScroll(element.outerHTML, animation, {
      start: "top 80%"
    })
  } else if (props.trigger === 'immediate') {
    // Animation immédiate - déjà appliquée
  }
  
  isAnimated.value = true
}

onMounted(() => {
  if (props.trigger === 'immediate') {
    animateText()
  } else if (props.trigger === 'scroll') {
    animateText()
  }
})

// Méthodes exposées pour les triggers manuels
const triggerAnimation = () => {
  if (props.trigger === 'hover' || props.trigger === 'click') {
    animateText()
  }
}

defineExpose({
  triggerAnimation
})
</script>

<style scoped>
/* Styles pour améliorer les performances des animations */
.gsap-optimized {
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.gsap-3d {
  transform-style: preserve-3d;
  perspective: 1000px;
}
</style> 