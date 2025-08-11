<template>
  <section class="min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center">
    <div class="container-custom py-20">
      <h1 class="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">À propos de “Webinova”</h1>
      <p class="text-xl text-slate-300 max-w-3xl">Vous cherchez “Webinova” ? Vous êtes au bon endroit: Webinovaa. Développeur web freelance spécialisé en Vue.js/Nuxt.js, création de sites performants et SEO.</p>
      <div class="mt-8 flex gap-4">
        <NuxtLink to="/" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold">Accueil</NuxtLink>
        <NuxtLink to="/contact" class="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl font-bold">Contact</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { generateMetaTags } = useMetaSeo()
const { generateBreadcrumbJsonLd } = useJsonLd()
const siteUrl = useRuntimeConfig().public.siteUrl || 'https://www.webinovaa.fr'
const url = `${siteUrl}/webinova`

useHead(generateMetaTags({
  title: 'À propos de “Webinova”',
  description: 'Vous cherchez “Webinova” ? Retrouvez Webinovaa, développeur web freelance (Vue.js/Nuxt.js) pour des sites performants et SEO.',
  keywords: 'webinova, webinovaa, développeur web lyon, création site web lyon',
  url
}))

useHead({
  script: [
    { type: 'application/ld+json', textContent: JSON.stringify(generateBreadcrumbJsonLd([
      { name: 'Accueil', url: siteUrl },
      { name: 'Webinova', url }
    ])) }
  ]
})
</script>


