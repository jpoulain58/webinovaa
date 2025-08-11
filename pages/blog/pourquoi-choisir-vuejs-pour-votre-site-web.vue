<template>
  <article class="text-slate-200">
    <!-- Hero article -->
    <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div class="container-custom relative z-10 py-16">
        <nav class="text-sm text-blue-200/80 mb-6">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink>
        </nav>
        <h1 class="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent max-w-5xl">
          Pourquoi choisir Vue.js pour votre site web ? Les avantages concrets pour votre entreprise.
        </h1>
        
        <p class="mt-4 text-slate-300 max-w-3xl">
          Je conçois des sites et applications web qui allient performance, SEO et agilité. Voici pourquoi <strong>Vue.js</strong> (et son écosystème) est un excellent choix pour votre entreprise.
        </p>
      </div>
    </section>

    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-12">
        <!-- Contenu principal -->
        <div class="lg:col-span-2">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div class="prose prose-invert prose-lg max-w-none">
      <h2>L’essentiel — Pourquoi Vue.js + Nuxt ?</h2>
      <ul>
        <li><strong>SEO natif</strong> (SSR/SSG): HTML servi immédiatement, métadonnées propres.</li>
        <li><strong>Vitesse</strong>: code splitting, lazy‑loading, images optimisées.</li>
        <li><strong>Qualité</strong>: composants clairs, typage, dette technique sous contrôle.</li>
        <li><strong>UX</strong>: transitions et interactions fluides, surtout sur mobile.</li>
      </ul>

      <h2>Vue.js en 2 phrases</h2>
      <p>Framework progressif, facile à prendre en main et robuste. Avec Nuxt, vous obtenez un routage organisé, le rendu côté serveur et des optimisations automatiques.</p>

      <h2>Performance et SEO par conception</h2>
      <ul>
        <li><strong>SSR/SSG</strong>: indexation optimale et pré‑rendu rapide.</li>
        <li><strong>Hydratation efficace</strong>: interactivité sans sacrifier le TTFB.</li>
        <li><strong>Images</strong>: WebP/AVIF, tailles responsives via <code>@nuxt/image</code>.</li>
      </ul>

      <h2>Productivité et maintenabilité</h2>
      <ul>
        <li><strong>Composants réutilisables</strong> et architecture claire.</li>
        <li><strong>TypeScript</strong> pour prévenir les régressions.</li>
        <li><strong>Écosystème</strong> mature: tests, i18n, accessibilité.</li>
      </ul>

      <h2>Cas d’usage adaptés</h2>
      <ul>
        <li>Vitrine premium, formulaire performant</li>
        <li>Blog / média SEO</li>
        <li>E‑commerce (vitrine + checkout)</li>
        <li>Application web (dashboard, espace client)</li>
      </ul>

      <h2>Comparaison rapide</h2>
      <p>Approche progressive: on démarre simple, on monte en complexité sans refonte. Très bon ratio valeur/effort.</p>

      <h2>SEO: mise en place concrète</h2>
      <p>Balises, canonical, sitemaps, JSON‑LD (Article/FAQ/Organization), maillage interne. Tout est outillé dans Nuxt pour gagner des positions.</p>

      <h2>Erreurs fréquentes</h2>
      <ul>
        <li>Ignorer le SSR/SSG et n’envoyer que du JS au crawler.</li>
        <li>Oublier les images responsives et les Web Vitals.</li>
        <li>Négliger l’accessibilité et la structure sémantique.</li>
      </ul>

      <h2>FAQ express</h2>
      <h3>Adapté au SEO ?</h3>
      <p>Oui, surtout avec SSR/SSG: HTML indexable, métadonnées maîtrisées.</p>
      <h3>Migrer un site existant ?</h3>
      <p>Progressivement, page par page, en conservant l’historique SEO.</p>
      <h3>Performances ?</h3>
      <p>Très bons scores Core Web Vitals en appliquant les bonnes pratiques Nuxt.</p>

      <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
        <p class="font-semibold">Envie d’un site rapide, bien référencé et évolutif ? Parlons de votre projet.</p>
        <div class="mt-4 flex flex-wrap gap-3">
          <NuxtLink to="/services" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">Voir les services</NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">Obtenir un devis</NuxtLink>
        </div>
      </div>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <aside class="lg:col-span-1 space-y-6">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 class="text-white font-bold text-xl mb-3">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full text-sm bg-purple-500/15 text-purple-200 border border-purple-400/30">vue.js</span>
              <span class="px-3 py-1 rounded-full text-sm bg-purple-500/15 text-purple-200 border border-purple-400/30">nuxt.js</span>
              <span class="px-3 py-1 rounded-full text-sm bg-purple-500/15 text-purple-200 border border-purple-400/30">seo</span>
            </div>
          </div>
          <NuxtLink to="/blog/combien-coute-un-site-web-2025" class="block bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <h3 class="text-white font-bold mb-2">À lire aussi</h3>
            <p class="text-slate-300">Combien coûte un site web en 2025 ?</p>
          </NuxtLink>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { generateMetaTags } = useMetaSeo()
const { generateArticleJsonLd, generateBreadcrumbJsonLd } = useJsonLd()

const siteUrl = useRuntimeConfig().public.siteUrl || 'https://www.webinovaa.fr'
const url = `${siteUrl}/blog/pourquoi-choisir-vuejs-pour-votre-site-web`

const title = 'Pourquoi choisir Vue.js pour votre site web ? | Développeur web Lyon & Création site internet Lyon'
const description = 'Vue.js et Nuxt.js pour des sites rapides, SEO‑friendly et évolutifs. Avantages, cas d’usage et ROI pour votre entreprise. Démonstration par un développeur web.'
const keywords = 'développeur web lyon, création site internet lyon, vue.js, nuxt.js, seo lyon, performance web, site vitrine lyon, application web lyon'

useHead(generateMetaTags({
  title,
  description,
  keywords,
  url,
  image: `${siteUrl}/logos/logo-webinovaa.png`,
  type: 'article'
}))

const articleJsonLd = generateArticleJsonLd(
  'Pourquoi choisir Vue.js pour votre site web ?',
  description,
  'Webinovaa',
  '2025-08-03',
  `${siteUrl}/logos/logo-webinovaa.png`
)

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Accueil', url: siteUrl },
  { name: 'Pourquoi choisir Vue.js pour votre site web ?', url }
])

useHead({
  script: [
    { type: 'application/ld+json', textContent: JSON.stringify(articleJsonLd) },
    { type: 'application/ld+json', textContent: JSON.stringify(breadcrumbJsonLd) }
  ]
})
</script>

<style scoped>
.prose :where(h2) {
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
}
.prose :where(h3) {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: rgb(233 213 255);
}
.prose :where(p, li) {
  color: rgb(203 213 225);
  line-height: 1.75;
}
@media (min-width: 768px) {
  .prose :where(h2) { font-size: 1.875rem; }
  .prose :where(h3) { font-size: 1.5rem; }
}
</style>


