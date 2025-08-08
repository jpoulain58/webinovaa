# Webinovaa - Site Vitrine Freelance

Site vitrine professionnel pour l'activité de développement web freelance **Webinovaa**. Développé avec Nuxt 3, Vue.js et Tailwind CSS.

## 🚀 Technologies

- **Framework** : Nuxt
- **Frontend** : Vue.js 3
- **Styling** : Tailwind CSS
- **Animations** : GSAP
- **State Management** : Pinia
- **UI Components** : Nuxt UI
- **PWA** : @nuxtjs/pwa
- **SEO** : @nuxtjs/robots, @nuxtjs/sitemap
- **Fonts** : Google Fonts (Inter)

## 📁 Structure du Projet

```
Webinovaa/
├── components/
│   ├── sections/          # Sections de pages
│   │   ├── HeroSection.vue
│   │   ├── ServicesTeaserSection.vue
│   │   └── VisionSection.vue
│   └── ui/               # Composants UI réutilisables
│       ├── ServiceCard.vue
│       └── ProjectCard.vue
├── composables/          # Logique métier réutilisable
│   ├── useServices.ts
│   ├── useProjects.ts
│   └── useNavigation.ts
├── layouts/             # Layouts de l'application
│   └── default.vue
├── pages/               # Pages de l'application
│   ├── index.vue
│   ├── services.vue
│   ├── realisations.vue
│   └── contact.vue
├── store/               # Gestion d'état Pinia
│   └── index.ts
├── public/              # Assets statiques
│   └── manifest.json
└── assets/              # Assets de l'application
    └── css/
        └── main.css
```

## 🎨 Design System

### Couleurs
- **Primary** : Bleu (#0ea5e9) - Couleur principale
- **Gray** : Palette de gris pour le texte et les arrière-plans
- **Success** : Vert pour les validations
- **Error** : Rouge pour les erreurs

### Typographie
- **Font** : Inter (Google Fonts)
- **Tailles** : Responsive avec breakpoints Tailwind

### Composants
- **Boutons** : `.btn-primary`, `.btn-secondary`
- **Cartes** : `.card`
- **Sections** : `.section-padding`
- **Container** : `.container-custom`

## 📱 Fonctionnalités

### Pages
1. **Accueil** : Hero section, teaser services, vision
2. **Services** : 5 services détaillés avec features
3. **Réalisations** : 3 projets avec technologies et fonctionnalités
4. **Contact** : Formulaire avec validation et anti-spam

### Fonctionnalités Techniques
- ✅ Navigation sticky avec menu mobile
- ✅ SEO optimisé (meta tags, Open Graph, Twitter Cards)
- ✅ PWA installable
- ✅ Responsive design
- ✅ Animations GSAP
- ✅ Formulaire de contact avec validation
- ✅ Protection anti-spam (honeypot)
- ✅ Performance optimisée
- ✅ Accessibilité

## 🛠️ Installation

```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 🔧 Configuration

### Variables d'environnement
Créer un fichier `.env` :
```env
NUXT_PUBLIC_SITE_URL=https://webinovaa.com
NUXT_PUBLIC_SITE_NAME=Webinovaa
```

### Déploiement Vercel
Le projet est configuré pour un déploiement automatique sur Vercel.

## 📊 Performance

### Optimisations
- Lazy loading des composants
- Images optimisées
- CSS purgé automatiquement
- Service Worker pour le cache
- Compression gzip

### Métriques cibles
- **LCP** : < 2.5s
- **FID** : < 100ms
- **CLS** : < 0.1

## 🔒 Sécurité

- Headers de sécurité configurés
- Protection XSS
- Validation des formulaires
- Honeypot anti-spam

## 📈 SEO

- Meta tags optimisés
- Open Graph et Twitter Cards
- Sitemap automatique
- Robots.txt
- Schema.org markup

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : contact@webinovaa.com
- **LinkedIn** : /in/webinovaa
- **GitHub** : /webinovaa

---

Développé avec ❤️ par Webinovaa
