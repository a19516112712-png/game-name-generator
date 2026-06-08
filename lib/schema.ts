const BASE_URL = "https://toppicksbase.com";
const SITE_NAME = "Game Name Generator Hub";

// ================================================================
// Organization Schema (homepage only)
// ================================================================
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    description:
      "Generate unique fantasy names for kingdoms, empires, clans, guilds and more. 4,500+ free name generators with meanings and lore.",
    sameAs: [],
  };
}

// ================================================================
// WebSite Schema (homepage)
// ================================================================
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// ================================================================
// WebPage Schema (all pages)
// ================================================================
export function webPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
    },
  };
}

// ================================================================
// BreadcrumbList Schema
// ================================================================
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ================================================================
// FAQ Schema (for pages with FAQ content)
// ================================================================
export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ================================================================
// Article Schema (blog posts)
// ================================================================
export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  category: string,
  imageUrl?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    ...(imageUrl && { image: imageUrl }),
    articleSection: category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// ================================================================
// Helper: generate breadcrumb from path segments
// ================================================================
export function pathBreadcrumbs(path: string): { name: string; url: string }[] {
  const segments = path.split("/").filter(Boolean);
  const items: { name: string; url: string }[] = [
    { name: "Home", url: BASE_URL },
  ];

  let currentPath = BASE_URL;
  for (const segment of segments) {
    currentPath += "/" + segment;
    const name = segment
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
    items.push({ name, url: currentPath });
  }

  return items;
}
