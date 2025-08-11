<template>
  <div>
    <!-- Hero aligné avec la charte -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex flex-col justify-center">
      <div class="absolute inset-0" ref="particlesContainer"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="container-custom relative z-10 py-20">
        <div class="text-center max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
          <h1 class="text-6xl md:text-8xl font-black mb-8">
            Le <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p class="text-2xl md:text-3xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            Conseils en création de sites, performance, SEO et technologies par 
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Webinovaa</span>
          </p>
          <div class="mt-10 flex justify-center">
            <form class="w-full max-w-3xl md:max-w-4xl flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0" @submit.prevent="subscribe" aria-label="Formulaire d’abonnement au blog">
              <label for="newsletter-email" class="sr-only">Votre e‑mail</label>
              <input
                id="newsletter-email"
                name="email"
                v-model="email"
                type="email"
                required
                inputmode="email"
                autocomplete="email"
                placeholder="Entrez votre e‑mail pour recevoir les nouveaux articles"
                class="flex-1 w-full px-6 py-5 rounded-2xl md:rounded-l-2xl md:rounded-r-none bg-slate-800/70 text-white placeholder-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg"
              />
              <button
                :disabled="submitting"
                type="submit"
                class="w-full md:w-auto md:min-w-[180px] px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl md:rounded-r-2xl md:rounded-l-none transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-60 disabled:cursor-not-allowed text-base md:text-lg"
                aria-label="S’abonner à la newsletter"
              >
                {{ submitting ? 'Envoi…' : 'S’abonner' }}
              </button>
            </form>
          </div>
          <p v-if="message" class="mt-4 text-blue-200">{{ message }}</p>
        </div>
      </div>
    </section>

    <!-- Liste des articles avec cartes glassmorphism -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-8">
            Tous les <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">articles</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <NuxtLink
            v-for="post in sortedPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group block bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-0 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 overflow-hidden"
          >
            <div class="p-8">
              <div v-if="post.image" class="w-full flex justify-center mb-6">
                <div class="w-28 h-28 md:w-32 md:h-32 bg-slate-900/50 rounded-xl border border-white/10 flex items-center justify-center">
                  <NuxtImg :src="post.image" alt="" class="max-h-full max-w-full object-contain p-2" format="webp" />
                </div>
              </div>
              <div class="flex items-center justify-between mb-4">
              <span class="inline-block px-3 py-1 rounded-full text-sm bg-blue-500/15 text-blue-200 border border-blue-400/30">Article</span>
              <time class="text-sm text-blue-200">{{ new Date(post.date).toLocaleDateString('fr-FR') }}</time>
            </div>
            <h2 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{{ post.title }}</h2>
            <p class="text-slate-300">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from '~/data/blogPosts'
const { generateMetaTags } = useMetaSeo()
const { createParticles } = useParticles()

const siteUrl = useRuntimeConfig().public.siteUrl || 'https://www.webinovaa.fr'
const url = `${siteUrl}/blog`

const title = 'Blog | Développeur web Lyon & Création site internet Lyon'
const description = 'Articles pratiques sur la création de site internet, Vue.js, Nuxt.js, SEO et performance web.'
const keywords = 'développeur web lyon, création site internet lyon, blog web lyon, vue.js, nuxt.js, seo lyon'

useHead(generateMetaTags({ title, description, keywords, url }))

const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

onMounted(() => {
  createParticles('.absolute.inset-0', 12)
})

const email = ref('')
const submitting = ref(false)
const message = ref('')
const enableSubscribe = ['true', '1', 'yes', 'on'].includes(
  (useRuntimeConfig().public.enableSubscribeForm || '').toString().toLowerCase()
)
const subscribe = async () => {
  message.value = ''
  const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/
  if (!email.value || !emailRegex.test(email.value)) {
    message.value = 'Veuillez saisir une adresse e-mail valide.'
    return
  }
  if (!enableSubscribe) {
    message.value = 'Le service d’abonnement est momentanément indisponible.'
    return
  }
  submitting.value = true
  try {
    const res = await $fetch('/api/subscribe', { method: 'POST', body: { email: email.value } })
    if ((res as any)?.ok) {
      message.value = 'Merci, votre abonnement est confirmé !'
      email.value = ''
    } else {
      message.value = 'Une erreur est survenue. Merci de réessayer plus tard.'
    }
  } catch (e: any) {
    const errText = e?.data?.message || 'Erreur réseau. Réessayez plus tard.'
    message.value = errText
  } finally {
    submitting.value = false
  }
}
</script>


