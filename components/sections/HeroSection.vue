<template>
  <section class="bg-gradient-primary section-padding">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="animate-fade-in">
          <h1 class="mb-6">
            Développeur web freelance
            <span class="block text-gradient">Créons un site qui vous ressemble</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-lg">
            Spécialisé en Nuxt.js, Vue.js et Tailwind CSS, je crée des sites web performants, 
            responsives et SEO-friendly qui reflètent parfaitement votre identité.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              @click="scrollToContact"
              class="btn-primary text-lg px-8 py-4"
            >
              Discutons de votre projet
            </button>
            <NuxtLink to="/services" class="btn-secondary text-lg px-8 py-4 text-center">
              Découvrir mes services
            </NuxtLink>
          </div>
        </div>
        <div class="animate-slide-up">
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="space-y-2">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-6">
                  <div class="bg-primary-100 rounded-lg p-4">
                    <div class="h-3 bg-primary-300 rounded mb-2"></div>
                    <div class="h-2 bg-primary-200 rounded w-2/3"></div>
                  </div>
                  <div class="bg-gray-100 rounded-lg p-4">
                    <div class="h-3 bg-gray-300 rounded mb-2"></div>
                    <div class="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { scrollToContact } = useNavigation()
</script> 