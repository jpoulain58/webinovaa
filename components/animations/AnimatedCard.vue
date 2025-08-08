<template>
  <div 
    ref="cardElement"
    :class="[baseClasses, customClasses]"
    :data-gsap="gsapId"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousemove="onMouseMove"
  >
    <div class="magnetic" ref="magneticElement">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  animation?: 'stagger' | 'morph' | 'flip' | 'bounce' | 'slide'
  trigger?: 'immediate' | 'scroll' | 'hover'
  duration?: number
  delay?: number
  ease?: string
  customClasses?: string
  gsapId?: string
  magneticStrength?: number
  magneticSpeed?: number
  hoverScale?: number
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'stagger',
  trigger: 'scroll',
  duration: 1.2,
  delay: 0,
  ease: 'power3.out',
  customClasses: '',
  gsapId: '',
  magneticStrength: 0.3,
  magneticSpeed: 0.3,
  hoverScale: 1.05
})

const cardElement = ref<HTMLElement>()
const magneticElement = ref<HTMLElement>()
const isAnimated = ref(false)

const baseClasses = computed(() => [
  'gsap-optimized',
  'animated-card',
  'perspective-1000',
  {
    'magnetic-enabled': props.trigger === 'hover' || props.magneticStrength > 0
  }
])

const { 
  animateCardsStagger,
  animateMorphingCards,
  animateOnScroll,
  addMagneticHover
} = useGsapAnimations()

const animateCard = async () => {
  if (isAnimated.value || !cardElement.value) return
  
  await nextTick()
  
  const element = cardElement.value
  const selector = props.gsapId ? `[data-gsap="${props.gsapId}"]` : element
  
  // Choix de l'animation
  let animation
  const { $gsap } = useNuxtApp()
  
  switch (props.animation) {
    case 'morph':
      animation = animateMorphingCards(
        typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`,
        {
          duration: props.duration,
          ease: props.ease
        }
      )
      break
      
    case 'flip':
      animation = $gsap.fromTo(
        element,
        {
          opacity: 0,
          rotationY: -90,
          transformOrigin: "50% 50%"
        },
        {
          opacity: 1,
          rotationY: 0,
          duration: props.duration,
          delay: props.delay,
          ease: props.ease
        }
      )
      break
      
    case 'bounce':
      animation = $gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
          scale: 0.5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: props.duration,
          delay: props.delay,
          ease: "elastic.out(1, 0.3)"
        }
      )
      break
      
    case 'slide':
      animation = $gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -100,
          rotationX: -45
        },
        {
          opacity: 1,
          x: 0,
          rotationX: 0,
          duration: props.duration,
          delay: props.delay,
          ease: props.ease
        }
      )
      break
      
    default: // stagger
      animation = animateCardsStagger(
        typeof selector === 'string' ? selector : `[data-gsap="${props.gsapId}"]`,
        {
          duration: props.duration,
          ease: props.ease,
          distance: 100
        }
      )
  }
  
  // Application selon le trigger
  if (props.trigger === 'scroll' && animation) {
    animateOnScroll(element.outerHTML, animation, {
      start: "top 80%"
    })
  }
  
  isAnimated.value = true
}

// Effets magnétiques manuels
const onMouseEnter = () => {
  if (!magneticElement.value || props.magneticStrength === 0) return
  
  const { $gsap } = useNuxtApp()
  $gsap.to(magneticElement.value, {
    duration: props.magneticSpeed,
    scale: props.hoverScale,
    ease: "power2.out"
  })
}

const onMouseLeave = () => {
  if (!magneticElement.value || props.magneticStrength === 0) return
  
  const { $gsap } = useNuxtApp()
  $gsap.to(magneticElement.value, {
    duration: props.magneticSpeed * 1.5,
    x: 0,
    y: 0,
    scale: 1,
    ease: "elastic.out(1, 0.3)"
  })
}

const onMouseMove = (e: MouseEvent) => {
  if (!cardElement.value || !magneticElement.value || props.magneticStrength === 0) return
  
  const rect = cardElement.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  
  const { $gsap } = useNuxtApp()
  $gsap.to(magneticElement.value, {
    duration: props.magneticSpeed,
    x: x * props.magneticStrength,
    y: y * props.magneticStrength,
    ease: "power2.out"
  })
}

onMounted(() => {
  if (props.trigger === 'immediate') {
    animateCard()
  } else if (props.trigger === 'scroll') {
    animateCard()
  }
  
  // Application des effets magnétiques globaux si nécessaire
  if (props.magneticStrength > 0 && cardElement.value) {
    addMagneticHover(`[data-gsap="${props.gsapId}"]`, {
      strength: props.magneticStrength,
      speed: props.magneticSpeed
    })
  }
})

// Méthodes exposées
const triggerAnimation = () => {
  animateCard()
}

defineExpose({
  triggerAnimation
})
</script>

<style scoped>
.animated-card {
  will-change: transform, opacity, filter;
  backface-visibility: hidden;
}

.magnetic {
  will-change: transform;
  transform-style: preserve-3d;
}

.magnetic-enabled {
  cursor: pointer;
}

.perspective-1000 {
  perspective: 1000px;
}
</style> 