export default defineEventHandler(async (event) => {
  const baseUrl = 'https://webinovaa.fr'
  
  const pages = [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: '/services',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: '/realisations',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/contact',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/projects/edelweiss',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: '/projects/labgear',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: '/projects/webinovaa',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
}) 