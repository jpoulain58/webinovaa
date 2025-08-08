// Imports des modules d'animations
import { useTextAnimations } from '~/composables/animations/useTextAnimations'
import { useCardAnimations } from '~/composables/animations/useCardAnimations' 
import { useScrollAnimations } from '~/composables/animations/useScrollAnimations'

// Composable principal qui rassemble toutes les animations GSAP
export const useGsapAnimations = () => {
  // Importer tous les modules d'animations
  const textAnimations = useTextAnimations()
  const cardAnimations = useCardAnimations()
  const scrollAnimations = useScrollAnimations()

  // Ré-exporter toutes les fonctions pour maintenir la compatibilité
  return {
    // Animations de texte
    ...textAnimations,
    
    // Animations de cartes
    ...cardAnimations,
    
    // Animations de scroll
    ...scrollAnimations
  }
} 