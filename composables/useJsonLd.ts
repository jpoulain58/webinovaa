export const useJsonLd = () => {
  const generateLocalBusinessJsonLd = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Webinovaa",
      "description": "Développeur web freelance à Lyon spécialisé en Nuxt.js, Vue.js et Tailwind CSS. Création de sites web performants, responsives et SEO-friendly.",
      "url": "https://www.webinovaa.fr",
      "telephone": "+33-6-XX-XX-XX-XX",
      "email": "contact@webinovaa.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lyon",
        "addressLocality": "Lyon",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "postalCode": "69000",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.7578137,
        "longitude": 4.8320114
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": {
        "@type": "City",
        "name": "Lyon"
      },
      "serviceArea": {
        "@type": "City",
        "name": "Lyon"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de développement web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Création de sites web",
              "description": "Création de sites web modernes et performants"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Développement front-end",
              "description": "Développement front-end avec Vue.js et Nuxt.js"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Optimisation SEO",
              "description": "Optimisation SEO et référencement naturel"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/webinovaa",
        "https://github.com/webinovaa"
      ]
    }
  }

  const generateWebSiteJsonLd = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Webinovaa",
      "alternateName": "webinovaa.fr",
      "url": "https://www.webinovaa.fr",
      "description": "Développeur web freelance à Lyon spécialisé en Nuxt.js, Vue.js et Tailwind CSS",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.webinovaa.fr/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  }

  const generatePersonJsonLd = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Webinovaa",
      "jobTitle": "Développeur Web Freelance",
      "worksFor": {
        "@type": "Organization",
        "name": "Webinovaa"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      },
      "knowsAbout": [
        "Développement web",
        "Vue.js",
        "Nuxt.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "SEO",
        "Performance web"
      ]
    }
  }

  const generateBreadcrumbJsonLd = (breadcrumbs: Array<{name: string, url: string}>) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }
  }

  const generateFAQJsonLd = (faqs: Array<{question: string, answer: string}>) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }

  const generateReviewJsonLd = (reviews: Array<{author: string, rating: number, reviewBody: string}>) => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Webinovaa",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
        "reviewCount": reviews.length
      },
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating
        },
        "reviewBody": review.reviewBody
      }))
    }
  }

  const generateServiceJsonLd = (serviceName: string, description: string) => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Webinovaa",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lyon",
          "addressRegion": "Auvergne-Rhône-Alpes",
          "addressCountry": "FR"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Lyon"
      }
    }
  }

  const generateArticleJsonLd = (title: string, description: string, author: string, datePublished: string, image?: string) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "author": {
        "@type": "Person",
        "name": author
      },
      "datePublished": datePublished,
      "publisher": {
        "@type": "Organization",
        "name": "Webinovaa",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.webinovaa.fr/logos/logo-webinovaa.png"
        }
      },
      ...(image && {
        "image": {
          "@type": "ImageObject",
          "url": image
        }
      })
    }
  }

  const generateOrganizationJsonLd = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Webinovaa",
      "url": "https://www.webinovaa.fr",
      "logo": "https://www.webinovaa.fr/logos/logo-webinovaa.png",
      "description": "Développeur web freelance à Lyon spécialisé en Nuxt.js, Vue.js et Tailwind CSS",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-6-XX-XX-XX-XX",
        "contactType": "customer service",
        "email": "contact@webinovaa.fr"
      },
      "sameAs": [
        "https://www.linkedin.com/company/webinovaa",
        "https://github.com/webinovaa"
      ]
    }
  }

  return {
    generateLocalBusinessJsonLd,
    generateWebSiteJsonLd,
    generatePersonJsonLd,
    generateBreadcrumbJsonLd,
    generateFAQJsonLd,
    generateReviewJsonLd,
    generateServiceJsonLd,
    generateArticleJsonLd,
    generateOrganizationJsonLd
  }
} 