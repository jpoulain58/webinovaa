export default defineEventHandler(async (event) => {
  const baseUrl = 'https://www.webinovaa.fr'
  
  const pages = [
    {
      loc: '/',
      lastmod: '2024-12-19',
      changefreq: 'weekly',
      priority: 1.0
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
      priority: 0.8
    },
    {
      loc: '/contact',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: '/projects/edelweiss',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: '/projects/labgear',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: '/projects/webinovaa',
      lastmod: '2024-12-19',
      changefreq: 'monthly',
      priority: 0.6
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Définir les headers appropriés pour un sitemap XML
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  setHeader(event, 'X-Content-Type-Options', 'nosniff')
  setHeader(event, 'X-Frame-Options', 'DENY')
  
  return sitemap.trim()
}) 