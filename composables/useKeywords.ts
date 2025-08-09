export const useKeywords = () => {
  const primaryKeywords = [
    'développeur web freelance lyon',
    'création site web lyon',
    'développement web lyon',
    'développeur front-end lyon',
    'freelance lyon',
    'développeur lyon',
    'développement frontend freelance'
  ]

  const secondaryKeywords = [
    'développeur web',
    'création site web',
    'développement web',
    'développeur front-end',
    'freelance',
    'développeur',
    'développement frontend',
    'site web',
    'application web',
    'e-commerce',
    'nuxt.js',
    'vue.js',
    'tailwind css',
    'seo',
    'référencement',
    'performance web'
  ]

  const longTailKeywords = [
    'développeur web freelance spécialisé vue.js lyon',
    'création site web moderne lyon',
    'développement front-end nuxt.js lyon',
    'freelance développement web lyon',
    'développeur web expert vue.js lyon',
    'création site e-commerce lyon',
    'développement application web lyon',
    'optimisation seo site web lyon',
    'développeur web performance lyon',
    'création site vitrine professionnel lyon'
  ]

  const localKeywords = [
    'lyon',
    'rhône-alpes',
    'auvergne-rhône-alpes',
    'france',
    'développeur web lyon',
    'freelance lyon',
    'création site web lyon',
    'développement web lyon'
  ]

  const serviceKeywords = [
    'création de sites web',
    'développement front-end',
    'optimisation seo',
    'performance web',
    'sites responsives',
    'applications web',
    'e-commerce',
    'sites vitrine'
  ]

  const technologyKeywords = [
    'nuxt.js',
    'vue.js',
    'tailwind css',
    'javascript',
    'typescript',
    'html5',
    'css3',
    'node.js'
  ]

  const generateKeywordString = () => {
    return [...primaryKeywords, ...secondaryKeywords, ...longTailKeywords].join(', ')
  }

  const generateLocalKeywordString = () => {
    return [...localKeywords, ...primaryKeywords].join(', ')
  }

  const generateServiceKeywordString = () => {
    return [...serviceKeywords, ...technologyKeywords].join(', ')
  }

  const getKeywordsForPage = (pageType: 'home' | 'services' | 'contact' | 'projects') => {
    const keywordMap = {
      home: [...primaryKeywords, ...localKeywords, ...serviceKeywords],
      services: [...serviceKeywords, ...technologyKeywords, ...primaryKeywords],
      contact: [...localKeywords, ...primaryKeywords],
      projects: [...serviceKeywords, ...technologyKeywords, ...primaryKeywords]
    }
    return keywordMap[pageType] || primaryKeywords
  }

  const generateMetaKeywords = (pageType: 'home' | 'services' | 'contact' | 'projects') => {
    const keywords = getKeywordsForPage(pageType)
    return keywords.join(', ')
  }

  return {
    primaryKeywords,
    secondaryKeywords,
    longTailKeywords,
    localKeywords,
    serviceKeywords,
    technologyKeywords,
    generateKeywordString,
    generateLocalKeywordString,
    generateServiceKeywordString,
    getKeywordsForPage,
    generateMetaKeywords
  }
} 