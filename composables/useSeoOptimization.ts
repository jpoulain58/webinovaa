export const useSeoOptimization = () => {
  const { 
    generateLocalBusinessJsonLd, 
    generateWebSiteJsonLd, 
    generatePersonJsonLd,
    generateServiceJsonLd,
    generateBreadcrumbJsonLd,
    generateFAQJsonLd,
    generateReviewJsonLd,
    generateArticleJsonLd,
    generateOrganizationJsonLd
  } = useJsonLd()
  const { generateMetaTags, generateHomeMetaTags } = useMetaSeo()
  const { generateKeywordString, generateLocalKeywordString } = useKeywords()

  const setupHomePageSeo = () => {
    const metaTags = generateHomeMetaTags()
    
    // Données structurées JSON-LD
    const jsonLdData = [
      generateOrganizationJsonLd(),
      generateWebSiteJsonLd(),
      generateLocalBusinessJsonLd(),
      generatePersonJsonLd()
    ]

    return {
      metaTags,
      jsonLdData
    }
  }

  const setupPageSeo = (pageType: 'home' | 'services' | 'contact' | 'projects', customData?: any) => {
    const { generateServicesMetaTags, generateContactMetaTags, generateProjectsMetaTags } = useMetaSeo()
    
    let metaTags
    let jsonLdData = []

    switch (pageType) {
      case 'home':
        const homeSeo = setupHomePageSeo()
        metaTags = homeSeo.metaTags
        jsonLdData = homeSeo.jsonLdData
        break
      case 'services':
        metaTags = generateServicesMetaTags()
        jsonLdData = [
          generateLocalBusinessJsonLd(),
          generateServiceJsonLd('Services de développement web', 'Services complets de développement web à Lyon')
        ]
        break
      case 'contact':
        metaTags = generateContactMetaTags()
        jsonLdData = [
          generateLocalBusinessJsonLd(),
          generatePersonJsonLd()
        ]
        break
      case 'projects':
        metaTags = generateProjectsMetaTags()
        jsonLdData = [
          generateLocalBusinessJsonLd(),
          generateWebSiteJsonLd()
        ]
        break
    }

    return {
      metaTags,
      jsonLdData
    }
  }

  const generateBreadcrumbs = (breadcrumbs: Array<{name: string, url: string}>) => {
    return generateBreadcrumbJsonLd(breadcrumbs)
  }

  const generateFaqSchema = (faqs: Array<{question: string, answer: string}>) => {
    return generateFAQJsonLd(faqs)
  }

  const generateReviewSchema = (reviews: Array<{author: string, rating: number, reviewBody: string}>) => {
    return generateReviewJsonLd(reviews)
  }

  const generateServiceSchema = (serviceName: string, description: string) => {
    return generateServiceJsonLd(serviceName, description)
  }

  const generateArticleSchema = (title: string, description: string, author: string, datePublished: string, image?: string) => {
    return generateArticleJsonLd(title, description, author, datePublished, image)
  }

  const generateOrganizationSchema = () => {
    return generateOrganizationJsonLd()
  }

  return {
    setupHomePageSeo,
    setupPageSeo,
    generateBreadcrumbs,
    generateFaqSchema,
    generateReviewSchema,
    generateServiceSchema,
    generateArticleSchema,
    generateOrganizationSchema,
    generateKeywordString,
    generateLocalKeywordString
  }
} 