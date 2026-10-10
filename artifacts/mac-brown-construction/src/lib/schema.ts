const SITE_ORIGIN = "https://macbrownconstruction.com";
const BUSINESS_ID = `${SITE_ORIGIN}/#mac-brown-construction`;
const PERSON_ID = `${SITE_ORIGIN}/#mac-brown`;
const toISO = (d: string) => (d.includes("T") ? d : `${d}T00:00:00Z`);
const MAC_BROWN_AUTHOR = { "@type": "Person", "@id": PERSON_ID, name: "Mac Brown", url: SITE_ORIGIN } as const;
const MBC_PUBLISHER = { "@type": "Organization", "@id": BUSINESS_ID, name: "Mac Brown Construction, LLC" } as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": BUSINESS_ID,
  name: "Mac Brown Construction, LLC",
  url: SITE_ORIGIN,
  telephone: "+18287361469",
  foundingDate: "1988",
  description:
    "Licensed custom home builder and general contractor in Bryson City, NC since 1988. Specializing in energy-efficient custom homes, ICF foundations, timber frame hybrid construction, and green building in Western North Carolina.",
  logo: `${SITE_ORIGIN}/images/mbc-logo.webp`,
  image: `${SITE_ORIGIN}/opengraph.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bryson City",
    addressLocality: "Bryson City",
    addressRegion: "NC",
    postalCode: "28713",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.4326,
    longitude: -83.4502,
  },
  areaServed: [
    "Bryson City, NC",
    "Swain County, NC",
    "Western North Carolina",
    "Great Smoky Mountains",
  ],
  knowsAbout: [
    "Custom home building",
    "ICF foundations",
    "Frost proof footings",
    "Timber frame construction",
    "Green building",
    "Energy-efficient homes",
  ],
  founder: { "@id": PERSON_ID },
  sameAs: [SITE_ORIGIN],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Mac Brown",
  jobTitle: "Licensed General Contractor",
  worksFor: { "@id": BUSINESS_ID },
  url: SITE_ORIGIN,
};

export function articleSchema(post: {
  title: string;
  description: string;
  date: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: toISO(post.date),
    dateModified: toISO(post.date),
    url: `${SITE_ORIGIN}${post.path}`,
    image: `${SITE_ORIGIN}${post.image}`,
    author: MAC_BROWN_AUTHOR,
    publisher: MBC_PUBLISHER,
    copyrightHolder: MBC_PUBLISHER,
    copyrightYear: new Date(post.date + "T00:00:00").getFullYear(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}${post.path}`,
    },
  };
}
