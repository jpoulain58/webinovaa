export default defineEventHandler(async (event) => {
  const baseUrl = 'https://www.webinovaa.fr'
  
  const pages = [
    {
      loc: '/',
      lastmod: '2024-12-19',
      changefreq: 'weekly',
      priority: 1.0,
      images: [
        {
          loc: `${baseUrl}/logos/logo-webinovaa.png`,
          title: 'Webinovaa Logo',
          caption: 'Logo de Webinovaa'
        }
      ]
    },
    {
      loc: '/services',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: '/realisations',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.8,
      images: [
        {
          loc: `${baseUrl}/images/realisation-audelweiss.avif`,
          title: 'Projet Audelweiss',
          caption: 'Réalisation Audelweiss'
        },
        {
          loc: `${baseUrl}/images/realisation-labgear.avif`,
          title: 'Projet Labgear',
          caption: 'Réalisation Labgear'
        },
        {
          loc: `${baseUrl}/images/realisation-webinovaa.png`,
          title: 'Projet Webinovaa',
          caption: 'Réalisation Webinovaa'
        }
      ]
    },
    {
      loc: '/contact',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: `${baseUrl}/images/photo.jpeg`,
          title: 'Photo de profil',
          caption: 'Photo de profil'
        }
      ]
    },
    {
      loc: '/projects/edelweiss',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.6,
      images: [
        {
          loc: `${baseUrl}/images/realisation-audelweiss.avif`,
          title: 'Projet Audelweiss',
          caption: 'Réalisation Audelweiss'
        }
      ]
    },
    {
      loc: '/projects/labgear',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.6,
      images: [
        {
          loc: `${baseUrl}/images/realisation-labgear.avif`,
          title: 'Projet Labgear',
          caption: 'Réalisation Labgear'
        }
      ]
    },
    {
      loc: '/projects/webinovaa',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.6,
      images: [
        {
          loc: `${baseUrl}/images/realisation-webinovaa.png`,
          title: 'Projet Webinovaa',
          caption: 'Réalisation Webinovaa'
        }
      ]
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => {
  const imageElements = page.images ? page.images.map(image => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`).join('\n') : ''
  
  return `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.images && page.images.length > 0 ? '\n' + imageElements : ''}
  </url>`
}).join('\n')}
</urlset>`

  // Définir les headers appropriés pour un sitemap XML
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  
  return sitemap
}) 