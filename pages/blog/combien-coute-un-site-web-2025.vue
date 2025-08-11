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
        <h1 class="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent max-w-5xl">
          Combien coûte un site web en 2025 ? Le guide complet.
        </h1>
        
        <p class="mt-4 text-slate-300 max-w-3xl">
          Vous cherchez à estimer le budget de création de votre site internet ? Ce guide clair et à jour présente les postes de coût, des fourchettes de prix réalistes et les leviers d’optimisation à prévoir en 2025.
        </p>
      </div>
    </section>

    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-12">
        <!-- Contenu principal -->
        <div class="lg:col-span-2">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div class="prose prose-invert prose-lg max-w-none">
      <h2>L’essentiel — Budget rapide</h2>
      <ul>
        <li><strong>Site vitrine</strong> (4–8 pages, SEO technique, design soigné): <strong>1 500 € – 4 500 €</strong></li>
        <li><strong>Vitrine avancé</strong> (blog, formulaires, intégrations): <strong>3 500 € – 8 000 €</strong></li>
        <li><strong>E‑commerce</strong> (catalogue, paiement, commandes): <strong>5 000 € – 20 000 €</strong></li>
        <li><strong>Sur‑mesure</strong> (espace client, logique métier, API): <strong>10 000 €+</strong></li>
      </ul>
      <p class="mt-2">Coûts récurrents: hébergement 10–60 €/mois, domaine ~12 €/an, maintenance/monitoring selon besoins.</p>

      <h2>Quels facteurs font varier le prix ?</h2>
      <h3>1) Type de site et périmètre</h3>
      <ul>
        <li><strong>Vitrine</strong>: présenter vos services, preuves sociales, contact.</li>
        <li><strong>Blog / média</strong>: taxonomies, recherche, performance SEO.</li>
        <li><strong>E‑commerce</strong>: paiement, livraison, facturation, anti‑fraude.</li>
        <li><strong>Sur‑mesure</strong>: workflows spécifiques, intégrations métiers.</li>
      </ul>

      <h3>2) Design et expérience</h3>
      <p>Charte UI, composants interactifs, tests utilisateurs: plus d’impact, plus d’effort. Bien mené, c’est ce qui améliore le plus la conversion.</p>

      <h3>3) Tech, performance, maintenance</h3>
      <p><strong>Nuxt.js (Vue.js)</strong> + <strong>Tailwind CSS</strong> offrent un rendu rapide et une base saine pour le SEO mobile. Le choix CMS headless vs. custom et les SLA d’hébergement influencent le budget.</p>

      <h3>4) SEO, accessibilité, conformité</h3>
      <p>Balises, maillage interne, données structurées, Web Vitals, WCAG et RGPD sont à intégrer dès le départ pour éviter des coûts correctifs.</p>

      <h3>5) Contenus</h3>
      <p>Rédaction orientée objectifs, médias cohérents, ton de marque: c’est le premier moteur de visibilité et d’activation.</p>

      <h2>Fourchettes de prix (2025)</h2>
      <p>Ordres de grandeur pour un freelance expérimenté. Un chiffrage précis suit un cadrage court.</p>
      <ul>
        <li><strong>Vitrine</strong>: 1 500 € – 4 500 €</li>
        <li><strong>Vitrine avancé</strong>: 3 500 € – 8 000 €</li>
        <li><strong>E‑commerce</strong>: 5 000 € – 20 000 €</li>
        <li><strong>Sur‑mesure</strong>: 10 000 €+</li>
      </ul>

      <h2>Comment optimiser le budget</h2>
      <ol>
        <li><strong>Priorisez les objectifs</strong> (KPI clairs → périmètre utile).</li>
        <li><strong>Lancez un MVP</strong> puis itérez avec les données.</li>
        <li><strong>Réutilisez des composants</strong> pour accélérer.</li>
        <li><strong>Investissez dans la performance</strong> (SEO + conversion).</li>
        <li><strong>Plan éditorial</strong> dès le départ pour éviter les blocages.</li>
      </ol>

      <h2>Processus de création avec Webinovaa</h2>
      <ol>
        <li><strong>Cadrage</strong>: objectifs, benchmark, mots‑clés, architecture.</li>
        <li><strong>Design</strong>: maquettes responsives, micro‑interactions, itérations courtes.</li>
        <li><strong>Développement</strong>: Nuxt, SSR/SSG, qualité, RGPD by design.</li>
        <li><strong>SEO & Analytics</strong>: données structurées, maillage, plan de mesure.</li>
        <li><strong>Recette & mise en ligne</strong>: tests, monitoring, maintenance.</li>
      </ol>

      <h2>Erreurs courantes à éviter</h2>
      <ul>
        <li>Vouloir “tout” dès V1 au lieu d’un MVP utile.</li>
        <li>Négliger contenus et visuels (le premier levier d’acquisition).</li>
        <li>Oublier la performance mobile et l’accessibilité.</li>
        <li>Repousser SEO/analytics après la mise en ligne.</li>
      </ul>

      <h2>Checklist avant devis</h2>
      <ul>
        <li>Objectifs mesurables et priorisés</li>
        <li>Pages indispensables et parcours clé</li>
        <li>Références d’inspiration et contraintes</li>
        <li>Contenus disponibles / à produire</li>
        <li>Budget cible et délais</li>
      </ul>

      <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30">
        <p class="font-semibold">Prêt à estimer votre projet ? Parlons‑en.</p>
        <div class="mt-4 flex flex-wrap gap-3">
          <NuxtLink to="/services" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">Découvrir mes services</NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">Demander un devis</NuxtLink>
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
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">développeur web lyon</span>
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">création site internet lyon</span>
              <span class="px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">prix site web</span>
            </div>
          </div>
          <NuxtLink to="/blog/pourquoi-choisir-vuejs-pour-votre-site-web" class="block bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <h3 class="text-white font-bold mb-2">À lire ensuite</h3>
            <p class="text-slate-300">Pourquoi choisir Vue.js pour votre site web ?</p>
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
const url = `${siteUrl}/blog/combien-coute-un-site-web-2025`

const title = 'Combien coûte un site web en 2025 ? | Développeur web Lyon & Création site internet Lyon'
const description = 'Guides de prix 2025 : facteurs de coût, fourchettes, optimisation du budget et process. Par un développeur web, expert en création de site internet performant et SEO.'
const keywords = 'développeur web lyon, création site internet lyon, coût site web 2025, prix site internet lyon, devis site web lyon, freelance web lyon, création site web lyon'

useHead(generateMetaTags({
  title,
  description,
  keywords,
  url,
  image: `${siteUrl}/logos/logo-webinovaa.png`,
  type: 'article'
}))

const articleJsonLd = generateArticleJsonLd(
  'Combien coûte un site web en 2025 ?',
  description,
  'Webinovaa',
  '2025-08-10',
  `${siteUrl}/logos/logo-webinovaa.png`
)

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Accueil', url: siteUrl },
  { name: 'Combien coûte un site web en 2025 ?', url }
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


