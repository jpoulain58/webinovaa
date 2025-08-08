<template>
  <svg :class="iconClass" fill="white" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <!-- Code Icon - Icône originale complexe -->
    <template v-if="icon === 'code'">
      <g>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" fill="white"/>
        </g>
      </g>
    </template>

    <!-- Palette Icon - UX/UI Design originale -->
    <template v-else-if="icon === 'palette'">
      <rect height="30" width="30" x="1" y="1" stroke="white" stroke-width="2" fill="none"/>
      <line x1="1" x2="31" y1="9" y2="9" stroke="white" stroke-width="2"/>
      <line x1="5" x2="7" y1="5" y2="5" stroke="white" stroke-width="2"/>
      <line x1="11" x2="13" y1="5" y2="5" stroke="white" stroke-width="2"/>
    </template>

    <!-- Search Icon - SEO originale -->
    <template v-else-if="icon === 'search'">
      <path d="M2.293,18.707a1,1,0,0,1,0-1.414l3-3a1,1,0,0,1,1.262-.125l2.318,1.545,2.42-2.42a1,1,0,0,1,1.414,1.414l-3,3a1,1,0,0,1-1.262.125L6.127,16.287l-2.42,2.42a1,1,0,0,1-1.414,0ZM22,3V21a1,1,0,0,1-1,1H3a1,1,0,0,1,0-2H20V8H4v4a1,1,0,0,1-2,0V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3ZM4,6H20V4H4Zm10.707,6.707,1-1a1,1,0,0,0-1.414-1.414l-1,1a1,1,0,1,0,1.414,1.414Z" fill="white"/>
    </template>

    <!-- App Icon - Applications Web originale -->
    <template v-else-if="icon === 'app'">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M3,20V10H8V21H4A1,1,0,0,1,3,20ZM21,4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V8H21ZM20,21a1,1,0,0,0,1-1V10H10V21Z" fill="white"/>
      </g>
    </template>

    <!-- User Icon - Freelance originale -->
    <template v-else-if="icon === 'user'">
      <circle cx="12" cy="8" r="4" fill="white"/>
      <path d="M6 20c0-2.5 2.5-4 6-4s6 1.5 6 4" fill="white"/>
    </template>

    <!-- Wrench Icon - Maintenance originale -->
    <template v-else-if="icon === 'wrench'">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" fill="white"/>
    </template>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  icon: 'code' | 'palette' | 'search' | 'app' | 'user' | 'wrench'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const iconClass = computed(() => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12'
  }
  return sizeClasses[props.size]
})

const viewBox = computed(() => {
  switch (props.icon) {
    case 'code':
      return '0 0 1024 1024'
    case 'palette':
      return '0 0 32 32'
    default:
      return '0 0 24 24'
  }
})
</script> 