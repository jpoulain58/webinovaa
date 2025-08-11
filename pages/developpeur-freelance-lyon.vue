<template>
  <article class="text-slate-200">
    <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div class="container-custom py-16">
        <h1 class="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">Développeur freelance à Lyon</h1>
        <p class="mt-4 text-slate-300 max-w-3xl">Accompagnement complet: création de sites, performance, SEO et maintenance. Vue.js/Nuxt.js, Tailwind, bonnes pratiques.</p>
      </div>
    </section>
    <section class="container-custom py-12">
      <div class="prose prose-invert prose-lg max-w-none">
        <h2>Services</h2>
        <ul>
          <li>Site vitrine rapide et SEO‑friendly</li>
          <li>Blog/média avec maillage interne</li>
          <li>E‑commerce (tunnel optimisé)</li>
          <li>Audit et optimisation Core Web Vitals</li>
        </ul>
      </div>
      <div class="mt-8 flex gap-3">
        <NuxtLink to="/services" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold">Voir les services</NuxtLink>
        <NuxtLink to="/contact" class="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl font-bold">Obtenir un devis</NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const { generateMetaTags } = useMetaSeo()
const { generateBreadcrumbJsonLd, generateLocalBusinessJsonLd } = useJsonLd()
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
    { type: 'application/ld+json', textContent: JSON.stringify(generateLocalBusinessJsonLd()) },
    { type: 'application/ld+json', textContent: JSON.stringify(generateBreadcrumbJsonLd([
      { name: 'Accueil', url: siteUrl },
      { name: 'Développeur freelance Lyon', url }
    ])) }
  ]
})
</script>


