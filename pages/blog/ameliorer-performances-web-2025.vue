<template>
  <article class="text-slate-200">
    <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div class="container-custom relative z-10 py-16">
        <nav class="text-sm text-blue-200/80 mb-6">
          <NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink>
        </nav>
        <h1 class="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent max-w-5xl">
          Performance web en 2025 : la check‑list pour un site rapide
        </h1>
        <p class="mt-4 text-slate-300 max-w-3xl">
          12 optimisations concrètes pour améliorer vos Core Web Vitals, accélérer l’expérience mobile et gagner en SEO.
        </p>
      </div>
    </section>

    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-12">
        <div class="lg:col-span-2">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div class="prose prose-invert prose-lg max-w-none">
              <h2>L’essentiel : 12 actions prioritaires</h2>
              <ol>
                <li>- Optimiser les images (formats AVIF/WebP, tailles responsives, lazy‑loading).</li><br>
                <li>- Réduire le JS expédié (code‑split, tree‑shaking, hydrations ciblées).</li><br>
                <li>- Pré‑rendre les pages (SSR/SSG) et soigner le TTFB.</li><br>
                <li>- Mettre en cache intelligemment (HTTP cache, CDN, headers corrects).</li><br>
                <li>- Précharger ce qui compte (preload/prefetch police, critical CSS).</li><br>
                <li>- Limiter les scripts tiers (tag manager, consentement, chargement différé).</li><br>
                <li>- Nettoyer le CSS (utilitaires, purge, Tailwind bien configuré).</li><br>
                <li>- Optimiser les polices (display swap, formats modernes, subsets).</li><br>
                <li>- Stabiliser la mise en page (dimensions fixes, éviter les CLS).</li><br>
                <li>- Surveiller les erreurs (logging, monitoring, métriques Web Vitals).</li><br>
                <li>- Servir en HTTP/2+/3 et activer la compression (gzip/br).</li><br>
                <li>- Mettre à jour dépendances et images de base régulièrement.</li><br>
              </ol>

              <h2>Pourquoi la performance impacte vos résultats</h2>
              <p>Un site rapide améliore le référencement, la conversion et la satisfaction. Google mesure vos Web Vitals (LCP, INP, CLS) sur le terrain: viser le vert réduit le taux de rebond et augmente les demandes.</p>

              <h2>Check‑list détaillée</h2>
              <h3>Images et médias</h3>
              <ul>
                <li>Servez du AVIF/WebP, taillez aux bons breakpoints, lazy‑loadez hors écran.</li>
                <li>Placez des dimensions fixes pour éviter les sauts de mise en page.</li>
              </ul>
              <h3>JavaScript</h3>
              <ul>
                <li>Découpez par route/composant, évitez les gros bundles globaux.</li>
                <li>Réduisez les dépendances non critiques et dynamisez les imports.</li>
              </ul>
              <h3>Rendu et cache</h3>
              <ul>
                <li>SSR/SSG via Nuxt pour servir du HTML rapide et indexable.</li>
                <li>Activez un CDN et réglez les en‑têtes Cache‑Control.</li>
              </ul>
              <h3>Polices & CSS</h3>
              <ul>
                <li>display=swap, fichiers minifiés, subsets, preconnect vers les hosts.</li>
                <li>Tailwind: classes utilitaires ciblées et purge activée.</li>
              </ul>

              <h2>Suivre et améliorer dans le temps</h2>
              <p>Mesurez en continu (Analytics, CrUX, Search Console). Planifiez des revues mensuelles de performance et corrigez itérativement.</p>

              <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30">
                <p class="font-semibold">Besoin d’un audit express et d’un plan d’action ? Parlons‑en.</p>
                <div class="mt-4 flex flex-wrap gap-3">
                  <NuxtLink to="/services" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">Voir les services</NuxtLink>
                  <NuxtLink to="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">Obtenir un devis</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside class="lg:col-span-1 space-y-6">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 class="text-white font-bold text-xl mb-3">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">performance</span>
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">core web vitals</span>
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">optimisation</span>
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
const url = `${siteUrl}/blog/ameliorer-performances-web-2025`

const title = 'Performance web en 2025 : la check‑list pour un site rapide | Développeur web Lyon & Création site internet Lyon'
const description = '12 optimisations concrètes pour améliorer vos Core Web Vitals, accélérer l’expérience mobile et gagner en SEO.'
const keywords = 'développeur web lyon, création site internet lyon, performance web, core web vitals, optimisation site, vitesse site'

useHead(generateMetaTags({
  title,
  description,
  keywords,
  url,
  image: `${siteUrl}/logos/logo-webinovaa.png`,
  type: 'article'
}))

const articleJsonLd = generateArticleJsonLd(
  'Performance web en 2025 : la check‑list pour un site rapide',
  description,
  'Webinovaa',
  '2025-08-11',
  `${siteUrl}/logos/logo-webinovaa.png`
)

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Accueil', url: siteUrl },
  { name: 'Performance web en 2025 : la check‑list pour un site rapide', url }
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
  color: rgb(191 219 254);
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


