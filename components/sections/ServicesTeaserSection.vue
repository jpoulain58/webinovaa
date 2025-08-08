<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="mb-4">Mes services</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Des solutions complètes pour votre présence web, de la conception à la mise en ligne
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          v-for="service in servicesTeaser" 
          :key="service.id"
          :service="service"
          class="animate-slide-up"
        />
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/services" class="btn-primary">
          Voir tous mes services
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getServicesTeaser } = useServices()
const servicesTeaser = getServicesTeaser()
</script> 