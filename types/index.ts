// Types pour le curseur magique
export interface CursorSettings {
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

export interface CursorPosition {
  x: number
  y: number
}

export interface Particle {
  id: number
  x: number
  y: number
  scale: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

// Types pour les projets
export interface Project {
  title: string
  image: string
  description: string
  technologies: string[]
  features: string[]
  slug?: string
}

// Types pour les services
export interface Service {
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

// Types pour le formulaire de contact
export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  projectTypes: string[]
  message: string
  privacy: boolean
}

export interface ProjectType {
  value: string
  label: string
}

// Types pour la navigation
export interface NavigationItem {
  label: string
  path: string
} 