<template>
  <article class="text-slate-200">
    <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div class="container-custom py-16">
        <h1 class="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">Création de site internet à Lyon</h1>
        <p class="mt-4 text-slate-300 max-w-3xl">Sites modernes, rapides et optimisés SEO. Conseils, design, développement, mise en ligne et suivi.</p>
      </div>
    </section>
    <section class="container-custom py-12">
      <div class="prose prose-invert prose-lg max-w-none">
        <h2>Ce que vous obtenez</h2>
        <ul>
          <li>Architecture claire et contenus orientés conversion</li>
          <li>Performances mobiles (Core Web Vitals) et accessibilité</li>
          <li>SEO technique (balises, JSON‑LD, maillage, sitemap)</li>
          <li>Maintenance et évolutions</li>
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
const { generateBreadcrumbJsonLd, generateServiceJsonLd } = useJsonLd()
const siteUrl = useRuntimeConfig().public.siteUrl || 'https://www.webinovaa.fr'
const url = `${siteUrl}/creation-site-internet-lyon`

useHead(generateMetaTags({
  title: 'Création de site internet à Lyon',
  description: 'Création de site internet à Lyon: design, performance, SEO et mise en ligne. Vue.js/Nuxt.js.',
  keywords: 'création site internet lyon, créer site web lyon, site vitrine lyon, développeur web lyon',
  url
}))

useHead({
  script: [
    { type: 'application/ld+json', textContent: JSON.stringify(generateServiceJsonLd('Création de site internet à Lyon', 'Conception et développement de sites performants et SEO')) },
    { type: 'application/ld+json', textContent: JSON.stringify(generateBreadcrumbJsonLd([
      { name: 'Accueil', url: siteUrl },
      { name: 'Création site internet Lyon', url }
    ])) }
  ]
})
</script>


