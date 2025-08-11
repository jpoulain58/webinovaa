<template>
  <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden text-white">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div class="container-custom relative z-10 py-16">
      <nav class="text-sm text-blue-200/80 mb-6">
        <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-slate-300">Webinova</span>
      </nav>
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


