import type { Post } from "./posts";

export const SITE_ORIGIN = "https://macbrownconstruction.com";
const BUSINESS_ID = `${SITE_ORIGIN}/#mac-brown-construction`;
const PERSON_ID = `${SITE_ORIGIN}/#mac-brown`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
const toISO = (d: string) => (d.includes("T") ? d : `${d}T12:00:00-05:00`);

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": BUSINESS_ID,
  name: "Mac Brown Construction, LLC",
  alternateName: "Mac Brown Construction",
  url: `${SITE_ORIGIN}/`,
  telephone: "+1-828-736-1469",
  email: "macbrownconstruction@gmail.com",
  foundingDate: "1988",
  description:
    "Licensed custom home builder and general contractor in Bryson City, NC since 1988. Specializing in energy-efficient custom homes, ICF foundations, timber frame hybrid construction, and green building in Western North Carolina.",
  logo: `${SITE_ORIGIN}/images/mbc-logo.webp`,
  image: [`${SITE_ORIGIN}/opengraph.jpg`, `${SITE_ORIGIN}/images/timber-frame.webp`, `${SITE_ORIGIN}/images/home-exterior.webp`],
  address: {
    "@type": "PostalAddress",
    streetAddress: "779 W Deep Creek Rd",
    addressLocality: "Bryson City",
    addressRegion: "NC",
    postalCode: "28713",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Bryson City, NC" },
    { "@type": "AdministrativeArea", name: "Swain County, NC" },
    { "@type": "AdministrativeArea", name: "Jackson County, NC" },
    { "@type": "AdministrativeArea", name: "Macon County, NC" },
    { "@type": "City", name: "Cherokee, NC" },
    { "@type": "City", name: "Sylva, NC" },
    { "@type": "City", name: "Waynesville, NC" },
    { "@type": "AdministrativeArea", name: "Western North Carolina" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "North Carolina Unlimited General Contractor License",
    recognizedBy: { "@type": "Organization", name: "North Carolina Licensing Board for General Contractors" },
  },
  knowsAbout: [
    "Custom home building",
    "ICF foundations",
    "Frost proof footings",
    "Timber frame hybrid construction",
    "Green building",
    "Energy-efficient homes",
    "Radiant floor heating",
    "Geothermal ground loops",
    "Passive solar design",
  ],
  makesOffer: [
    "Custom home design and construction",
    "Energy-efficient and green building",
    "ICF foundations and frost-proof footings",
    "Timber frame and stick-built homes",
    "Residential and commercial general contracting",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  founder: { "@id": PERSON_ID },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Mac Brown",
  jobTitle: "Licensed General Contractor and Custom Home Builder",
  worksFor: { "@id": BUSINESS_ID },
  url: `${SITE_ORIGIN}/about/`,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Mac Brown Construction",
  url: `${SITE_ORIGIN}/`,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "en-US",
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path}`,
    })),
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: toISO(post.published),
    dateModified: toISO(post.modified),
    url: `${SITE_ORIGIN}${post.path}`,
    image: `${SITE_ORIGIN}${post.image}`,
    articleSection: post.category,
    inLanguage: "en-US",
    author: { "@type": "Person", "@id": PERSON_ID, name: "Mac Brown", url: `${SITE_ORIGIN}/about/` },
    publisher: { "@id": BUSINESS_ID },
    isPartOf: { "@id": WEBSITE_ID },
    copyrightHolder: { "@id": BUSINESS_ID },
    copyrightYear: Number(post.published.slice(0, 4)),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}${post.path}` },
  };
}

export function blogSchema(posts: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_ORIGIN}/blog/#blog`,
    name: "Mac Brown Construction — Building Tips & Insights",
    url: `${SITE_ORIGIN}/blog/`,
    publisher: { "@id": BUSINESS_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_ORIGIN}${p.path}`,
      datePublished: toISO(p.published),
      dateModified: toISO(p.modified),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_ORIGIN}${path}`,
    serviceType: name,
    provider: { "@id": BUSINESS_ID },
    areaServed: localBusinessSchema.areaServed,
  };
}

export type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
