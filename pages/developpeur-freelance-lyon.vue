<template>
  <article class="text-slate-200">
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div class="container-custom relative z-10 py-16">
        <nav class="text-sm text-blue-200/80 mb-6">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/services" class="hover:text-white">Services</NuxtLink>
        </nav>
        <h1 class="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent max-w-5xl">
          Développeur freelance à Lyon
        </h1>
        <p class="mt-4 text-slate-300 max-w-3xl">Accompagnement complet: création de sites, performance, SEO et maintenance. Vue.js/Nuxt.js, Tailwind, bonnes pratiques.</p>
      </div>
    </section>

    <!-- Contenu principal -->
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-12">
        <!-- Colonne principale -->
        <div class="lg:col-span-2">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div class="prose prose-invert prose-lg max-w-none">
              <h2 class="mb-4">Services proposés</h2>
            </div>

            <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Sites vitrines SEO‑friendly</h3>
                  <p class="text-slate-300">Design soigné, pages clés, formulaires et tracking conversions.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2H4zM4 11h10v2H4zM4 18h7v2H4z"/></svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Blogs/médias performants</h3>
                  <p class="text-slate-300">Architecture éditoriale, taxonomies, données structurées.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 4-4 4-4-4 4-4zm0 12l4 4-4 4-4-4 4-4zM2 12l4-4 4 4-4 4-4-4zm12 0l4-4 4 4-4 4-4-4z"/></svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">E‑commerce & tunnel optimisé</h3>
                  <p class="text-slate-300">Catalogue, paiement, analytics, CRO et RGPD by design.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6a6 6 0 016 6v3l2 2v1H4v-1l2-2v-3a6 6 0 016-6z"/></svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Audit performance & Web Vitals</h3>
                  <p class="text-slate-300">Mesures terrain, quick wins, plan d’actions priorisé.</p>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink to="/services" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">Voir les services</NuxtLink>
              <NuxtLink to="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300">Obtenir un devis</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-1 space-y-6">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 class="text-white font-bold text-xl mb-3">Compétences</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">Nuxt.js</span>
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">Vue.js</span>
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">Tailwind</span>
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">SEO</span>
            </div>
          </div>
          <NuxtLink to="/creation-site-internet-lyon" class="block bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <h3 class="text-white font-bold mb-2">À lire aussi</h3>
            <p class="text-slate-300">Création de site internet à Lyon</p>
          </NuxtLink>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { generateMetaTags } = useMetaSeo()
const { generateBreadcrumbJsonLd, generateLocalBusinessJsonLd, generateOrganizationJsonLd } = useJsonLd()
const siteUrl = useRuntimeConfig().public.siteUrl || 'https://www.webinovaa.fr'
const url = `${siteUrl}/developpeur-freelance-lyon`

useHead(generateMetaTags({
  title: 'Développeur freelance à Lyon',
  description: 'Développeur freelance à Lyon: création de sites rapides, SEO, performance Web Vitals, maintenance. Vue.js/Nuxt.js.',
  keywords: 'développeur freelance lyon, développeur web lyon, freelance web lyon, création site web lyon',
  url
}))

useHead({
  script: [
    { type: 'application/ld+json', textContent: JSON.stringify(generateOrganizationJsonLd()) },
    { type: 'application/ld+json', textContent: JSON.stringify(generateLocalBusinessJsonLd()) },
    { type: 'application/ld+json', textContent: JSON.stringify(generateBreadcrumbJsonLd([
      { name: 'Accueil', url: siteUrl },
      { name: 'Développeur freelance Lyon', url }
    ])) }
  ]
})
</script>


