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
      <h2>Vue.js en bref</h2>
      <p>
        Vue.js est un framework JavaScript progressif, simple à prendre en main et puissant en production. Couplé à Nuxt (son méta‑framework), il déploie un rendu côté serveur, un <em>routing</em> structuré, la gestion des métadonnées et des optimisations automatiques pour le SEO et les Web Vitals.
      </p>

      <h2>Performance et SEO par conception</h2>
      <ul>
        <li><strong>Rendu SSR/SSG</strong>: du HTML complet servi immédiatement, idéal pour Google et les réseaux sociaux.</li>
        <li><strong>Code splitting & lazy‑loading</strong>: ne chargez que ce qui est nécessaire, là où c’est nécessaire.</li>
        <li><strong>Hydratation sélective</strong>: interactions fluides sans sacrifier le temps au premier affichage.</li>
        <li><strong>Optimisation images</strong>: avec <code>@nuxt/image</code>, formats modernes (WebP/AVIF), tailles responsives.</li>
      </ul>

      <h2>Productivité, qualité et maintenabilité</h2>
      <p>
        L’API de composition de Vue favorise une architecture claire et réutilisable. Les composants sont isolés, testables et documentés. Résultat: un délai de mise sur le marché plus court et un coût total de possession mieux maîtrisé pour votre <strong>création site internet Lyon</strong>.
      </p>
      <ul>
        <li><strong>Rapidité de développement</strong>: composants UI réutilisables, conventions Nuxt.</li>
        <li><strong>Code lisible et typé</strong>: intégration fluide avec TypeScript.</li>
        <li><strong>Écosystème mature</strong>: outils de tests, linting, internationalisation, accessibilité.</li>
      </ul>

      <h2>Expérience utilisateur au cœur</h2>
        <p>
        Vue facilite les transitions, micro‑interactions et interfaces dynamiques performantes, sans alourdir la page. Une UX soignée augmente la conversion, en particulier sur mobile.
      </p>

      <h2>Cas d’usage typiques</h2>
      <ul>
        <li><strong>Site vitrine premium</strong>: pages rapides, SEO local, formulaire de contact performant.</li>
        <li><strong>Blog / média</strong>: architecture éditoriale, données structurées, pages AMP si besoin.</li>
        <li><strong>E‑commerce</strong>: vitrine + tunnel d’achat optimisé, intégrations paiement/livraison.</li>
        <li><strong>Application web</strong>: tableau de bord, espace client, intégrations métier et API.</li>
      </ul>

      <h2>Comparaison rapide avec d’autres frameworks</h2>
        <p>
        Vue.js se distingue par son approche progressive: vous pouvez démarrer modestement et monter en complexité sans refonte lourde. Par rapport à des piles plus rigides, la courbe d’apprentissage est douce et le ratio valeur/effort très favorable pour un <strong>développeur web</strong> focalisé sur la qualité perçue et la performance.
      </p>

      <h2>SEO local: gagnez des positions</h2>
        <p>
        Nuxt facilite la gestion fine des balises (titres, descriptions, canonicals), des <em>sitemaps</em>, des données structurées (Article, FAQ, LocalBusiness) et du maillage interne. Couplé à une stratégie éditoriale, vous renforcez vos positions sur les requêtes locales pertinentes.
      </p>

      <h2>Coût total de possession (TCO) maîtrisé</h2>
      <p>
        Grâce à sa productivité et à la stabilité de son écosystème, Vue réduit les risques projet, la dette technique et les coûts de maintenance. Vous investissez là où cela compte: contenu, UX et acquisition.
      </p>

      <h2>FAQ rapide</h2>
      <h3>Vue.js est‑il adapté aux sites SEO ?</h3>
      <p>Oui, surtout avec Nuxt (SSR/SSG), qui sert du HTML indexable et gère les métadonnées proprement.</p>
      <h3>Et si je migre un site existant ?</h3>
      <p>Nous pouvons migrer progressivement page par page, préserver l’historique SEO et mesurer l’impact.</p>
      <h3>Qu’en est‑il des performances ?</h3>
      <p>Les sites Nuxt atteignent d’excellents scores Core Web Vitals grâce aux optimisations natives et aux bonnes pratiques de développement.</p>

      <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
        <p class="font-semibold">
          Envie d’un site rapide, bien référencé et évolutif ? Parlons de votre projet.
        </p>
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


