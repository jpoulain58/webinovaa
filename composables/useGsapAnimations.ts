import { useTextAnimations } from '~/composables/animations/useTextAnimations'
import { useCardAnimations } from '~/composables/animations/useCardAnimations' 
import { useScrollAnimations } from '~/composables/animations/useScrollAnimations'

export const useGsapAnimations = () => {
  const textAnimations = useTextAnimations()
  const cardAnimations = useCardAnimations()
  const scrollAnimations = useScrollAnimations()

  return {
    ...textAnimations,
    ...cardAnimations,
    ...scrollAnimations
  }
} 