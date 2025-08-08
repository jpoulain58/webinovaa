<template>
  <ProjectLayout 
    title="Edelweiss"
    description="Une plateforme e-commerce moderne dédiée aux créations artisanales au crochet, alliant esthétique traditionnelle et technologies de pointe."
    project-type="E-commerce Artisanal"
    :technologies="['Nuxt', 'Tailwind CSS', 'Strapi', 'MySQL', 'Stripe']"
    image="/images/realisation-audelweiss.avif"
    badge-classes="from-blue-600/20 to-purple-600/20 border-blue-500/30"
    badge-text-class="text-blue-300"
  >
    <!-- Détails spécifiques au projet -->
    <section class="py-32 bg-gradient-to-br from-slate-900 to-slate-800">
      <div class="container-custom">
        
        <!-- Contexte et défis -->
        <div class="mb-20">
          <h2 class="text-4xl md:text-6xl font-black text-white mb-12 text-center">
            Contexte et <span class="text-gradient">Défis</span>
          </h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-xl text-slate-300 leading-relaxed mb-8">
              <strong class="text-blue-400">L'artisane</strong> derrière Edelweiss créait de magnifiques pièces au crochet mais peinait à les vendre efficacement en ligne. 
              Son ancien site manquait de modernité et ne reflétait pas la qualité exceptionnelle de ses créations.
            </p>
            <p class="text-xl text-slate-300 leading-relaxed">
              Le <strong class="text-purple-400">défi</strong> était de créer une expérience d'achat qui honore l'authenticité artisanale 
              tout en offrant une interface moderne, intuitive et parfaitement fonctionnelle.
            </p>
          </div>
        </div>

        <!-- Solution technique -->
        <div class="mb-20">
          <h2 class="text-4xl md:text-6xl font-black text-white mb-12 text-center">
            Solution <span class="text-gradient">Technique</span>
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul class="space-y-6">
                <li class="flex items-start">
                  <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">CMS Headless Strapi</h3>
                    <p class="text-slate-300">Gestion autonome des produits, stocks et commandes</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">Paiements Stripe</h3>
                    <p class="text-slate-300">Transactions sécurisées et gestion automatisée</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">Design Responsive</h3>
                    <p class="text-slate-300">Experience optimisée mobile et desktop</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="relative">
              <div class="card-base card-hover p-8">
                <h3 class="text-2xl font-bold text-white mb-6">Fonctionnalités Clés</h3>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <span class="badge-base badge-success mr-3">✓</span>
                    <span class="text-slate-300">Catalogue produits dynamique</span>
                  </div>
                  <div class="flex items-center">
                    <span class="badge-base badge-info mr-3">✓</span>
                    <span class="text-slate-300">Panier et commandes</span>
                  </div>
                  <div class="flex items-center">
                    <span class="badge-base badge-purple mr-3">✓</span>
                    <span class="text-slate-300">Back-office intuitif</span>
                  </div>
                  <div class="flex items-center">
                    <span class="badge-base badge-success mr-3">✓</span>
                    <span class="text-slate-300">Optimisations SEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </ProjectLayout>
</template>

<script setup lang="ts">
import ProjectLayout from '~/components/projects/ProjectLayout.vue'

// SEO
useHead({
  title: 'Edelweiss - E-commerce Artisanal | Webinovaa',
  meta: [
    { name: 'description', content: 'Découvrez Edelweiss : plateforme e-commerce moderne pour créations artisanales au crochet. Nuxt, Strapi, Stripe - Performance et authenticité.' }
  ]
})
</script> 