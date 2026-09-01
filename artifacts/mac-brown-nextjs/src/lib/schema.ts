export const SITE_ORIGIN = "https://macbrownflyfish.com";
const BUSINESS_ID = `${SITE_ORIGIN}/#business`;
const PERSON_ID = `${SITE_ORIGIN}/#mac-brown`;
const toISO = (d: string) => (d.includes("T") ? d : `${d}T00:00:00Z`);
const MAC_BROWN_AUTHOR = { "@type": "Person", "@id": PERSON_ID, name: "Mac Brown", url: `${SITE_ORIGIN}/bio-mac-brown` } as const;
const MBFF_PUBLISHER = { "@type": "Organization", "@id": BUSINESS_ID, name: "Mac Brown Fly Fish" } as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": BUSINESS_ID,
  name: "Mac Brown Fly Fish",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/mbff-logo-square.webp`,
  image: `${SITE_ORIGIN}/images/tuckasegee-summer.webp`,
  description:
    "Mac Brown Fly Fish is Western North Carolina's premier fly fishing guide service, casting instruction program, and schools — established in Bryson City, NC in 1987 and led by Mac Brown, the only FFI Master Certified Casting Instructor in North Carolina, a Southern Fly Fishing Hall of Fame inductee, Field & Stream Angler of the Year, former Fly Fishing Team USA Youth Team coach, and featured presenter at The Fly Fishing Show since 1994. Services include guided float, wade, and lake trips on the Tuckasegee River and surrounding Smoky Mountain waters, weekend fly fishing schools, masterclass casting workshops, private and group casting instruction, the Oar Frame Rowing School, and the nationally recognized Fly Fishing Guide School.",
  telephone: "+18287361469",
  address: {
    "@type": "PostalAddress",
    streetAddress: "779 West Deep Creek Rd",
    addressLocality: "Bryson City",
    addressRegion: "NC",
    postalCode: "28713",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.4284,
    longitude: -83.4521,
  },
  areaServed: [
    { "@type": "State", name: "North Carolina" },
    { "@type": "City", name: "Bryson City" },
    { "@type": "City", name: "Sylva" },
    { "@type": "City", name: "Cashiers" },
    { "@type": "City", name: "Highlands" },
    { "@type": "City", name: "Franklin" },
    { "@type": "City", name: "Asheville" },
    { "@type": "City", name: "Raleigh" },
    { "@type": "City", name: "Charlotte" },
    { "@type": "City", name: "Atlanta" },
    { "@type": "City", name: "Knoxville" },
    { "@type": "City", name: "Gatlinburg" },
    { "@type": "City", name: "Chattanooga" },
  ],
  foundingDate: "1987",
  founder: { "@id": PERSON_ID },
  priceRange: "$400–$1,550",
  subOrganization: {
    "@type": "EducationalOrganization",
    name: "Fly Fishing Guide School",
    url: "https://flyfishingguideschool.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "25",
  },
  sameAs: [
    "https://www.instagram.com/macbrownflyfish/",
    "https://www.facebook.com/macbrownflyfish",
    "https://www.youtube.com/@macbrownflyfish",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Guided Fly Fishing Trips & Schools",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guided Float Fly Fishing Trip",
          url: `${SITE_ORIGIN}/guided-float-fly-fishing-trips`,
          description: "Full-day and half-day guided drift boat trips on the Tuckasegee River. TFO rods, Scientific Anglers fly lines, all flies and leaders provided. Bryson City, NC.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guided Wade Fly Fishing Trip",
          url: `${SITE_ORIGIN}/guided-wade-fly-fishing-trips`,
          description: "Full-day and half-day guided wade trips on GSMNP streams and the Tuckasegee River. TFO rods, Scientific Anglers fly lines, all flies and leaders provided. Bryson City, NC.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guided Lake Fly Fishing Trip",
          url: `${SITE_ORIGIN}/guided-lake-fly-fishing-trips`,
          description: "Full-day guided stillwater fly fishing on Fontana, Cheoah, and the mountain lakes of the Smoky Mountains. All gear provided. Bryson City, NC.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fly Fishing Guide School",
          url: "https://flyfishingguideschool.com",
          description: "4-day professional guide training in Bryson City, NC. The only program of its kind in the eastern United States.",
        },
      },
    ],
  },
};

export const macBrownPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Mac Brown",
  url: `${SITE_ORIGIN}/bio-mac-brown`,
  image: `${SITE_ORIGIN}/images/mac-headshot-2.webp`,
  jobTitle: "FFI Certified Master Fly Casting Instructor & Fly Fishing Guide",
  description:
    "Mac Brown is North Carolina's only FFI Certified Master Fly Casting Instructor, based in Bryson City, NC since 1987. Recipient of the FFI Lifetime Achievement Award and Field & Stream Angler of the Year. Associate Professor (retired) at Western Carolina University, published author of Casting Angles, and national presenter at The Fly Fishing Show since 1994.",
  worksFor: { "@id": BUSINESS_ID },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "FFI Certified Master Fly Casting Instructor",
      credentialCategory: "certification",
      description:
        "The highest fly casting certification awarded by Fly Fishers International — held by fewer than a few hundred people worldwide. North Carolina's only holder of this credential.",
      recognizedBy: {
        "@type": "Organization",
        name: "Fly Fishers International",
        url: "https://www.flyfishersinternational.org",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "FCC Extra Class Amateur Radio License",
      credentialCategory: "license",
      description: "Call sign AI4JL. Earned to maintain communication from remote fly fishing locations worldwide.",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Federal Communications Commission",
      },
    },
  ],
  affiliation: [
    {
      "@type": "CollegeOrUniversity",
      name: "Western Carolina University",
      url: "https://www.wcu.edu",
      description: "Associate Professor — founded and led the collegiate fly fishing program.",
    },
    {
      "@type": "Organization",
      name: "Scientific Anglers",
      url: "https://www.scientificanglers.com",
      description: "National Advisor",
    },
    {
      "@type": "Organization",
      name: "Temple Fork Outfitters",
      url: "https://www.tforods.com",
      description: "National Advisor",
    },
    {
      "@type": "Organization",
      name: "Patagonia",
      url: "https://www.patagonia.com",
      description: "Brand Ambassador",
    },
    {
      "@type": "Organization",
      name: "The Fly Fishing Show",
      url: "https://flyfishingshow.com",
      description: "Featured presenter since 1994 — one of the longest-tenured instructors on the national circuit.",
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Fly Fishers International",
      url: "https://www.flyfishersinternational.org",
      description: "Member of the Board of Governors; served on multiple steering committees.",
    },
  ],
  knowsAbout: [
    "fly fishing",
    "fly casting",
    "trout fishing",
    "Great Smoky Mountains",
    "casting instruction",
    "fly fishing guide instruction",
    "nymph fishing",
    "streamer fishing",
    "dry fly fishing",
    "wet fly fishing",
    "Spey casting",
    "two-handed fly casting",
    "saltwater fly casting",
    "competitive fly casting",
    "FFI fly casting certification",
    "Tuckasegee River",
    "Nantahala River",
    "Great Smoky Mountains National Park trout fishing",
    "drift boat instruction",
    "river rowing",
    "fly fishing guide training",
    "Western Carolina University fly fishing program",
  ],
  award: [
    "FFI Lifetime Achievement Award — Fly Fishers International (2023)",
    "Mel Krieger Casting Instructor Award — Fly Fishers International (2021)",
    "Southern Fly Fishing Hall of Fame Inductee (2017)",
    "Field & Stream Angler of the Year (1999)",
  ],
  sameAs: [
    `${SITE_ORIGIN}/bio-mac-brown`,
    "https://flyfishingguideschool.com",
    "https://www.instagram.com/macbrownflyfish/",
    "https://www.facebook.com/macbrownflyfish",
    "https://www.youtube.com/@macbrownflyfish",
    "https://www.amazon.com/Casting-angles-Mac-Brown/dp/1890485004",
  ],
};

export function articleSchema(
  post: {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    img?: string;
  },
  dateModified?: string,
  type: "Article" | "TechArticle" | "ScholarlyArticle" = "Article",
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: post.title,
    description: post.excerpt,
    datePublished: toISO(post.date),
    dateModified: toISO(dateModified ?? post.date),
    url: `${SITE_ORIGIN}/blog/${post.slug}`,
    image: post.img
      ? `${SITE_ORIGIN}${post.img}`
      : `${SITE_ORIGIN}/images/tuckasegee-summer.webp`,
    author: MAC_BROWN_AUTHOR,
    publisher: MBFF_PUBLISHER,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}/blog/${post.slug}`,
    },
  };
}

export function definedTermSetSchema(
  post: { title: string; excerpt: string; slug: string },
  terms: Array<{ question: string; answer: string }>,
) {
  const setId = `${SITE_ORIGIN}/blog/${post.slug}/#termset`;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": setId,
    name: post.title,
    description: post.excerpt,
    url: `${SITE_ORIGIN}/blog/${post.slug}/`,
    author: MAC_BROWN_AUTHOR,
    publisher: MBFF_PUBLISHER,
    hasDefinedTerm: terms.map(({ question, answer }) => ({
      "@type": "DefinedTerm",
      name: question,
      description: answer,
      inDefinedTermSet: setId,
    })),
  };
}

export function courseSchema({
  name,
  description,
  url,
  image,
  courseMode = "onsite",
  price,
  sessions,
  educationalLevel,
  teaches,
  coursePrerequisites,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  courseMode?: string;
  price?: string;
  sessions?: Array<{ startDate: string; endDate: string }>;
  educationalLevel?: string;
  teaches?: string[];
  coursePrerequisites?: string;
}) {
  const instanceBase = {
    "@type": "CourseInstance",
    courseMode,
    instructor: { "@id": PERSON_ID },
    performer: { "@type": "Person", "@id": PERSON_ID, name: "Mac Brown", url: `${SITE_ORIGIN}/bio-mac-brown/` },
    location:
      courseMode === "online"
        ? undefined
        : {
            "@type": "Place",
            name: "Mac Brown Fly Fish",
            address: {
              "@type": "PostalAddress",
              streetAddress: "779 West Deep Creek Rd",
              addressLocality: "Bryson City",
              addressRegion: "NC",
              postalCode: "28713",
              addressCountry: "US",
            },
          },
  };
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_ORIGIN}${url}/#course`,
    name,
    description,
    url: `${SITE_ORIGIN}${url}`,
    image,
    provider: { "@id": BUSINESS_ID },
    hasCourseInstance: sessions && sessions.length > 0
      ? sessions.map(s => ({ ...instanceBase, startDate: s.startDate, endDate: s.endDate }))
      : instanceBase,
    inLanguage: "en",
    ...(educationalLevel !== undefined ? { educationalLevel } : {}),
    ...(coursePrerequisites !== undefined ? { coursePrerequisites } : {}),
    ...(teaches !== undefined && teaches.length > 0 ? { teaches } : {}),
    offers: {
      "@type": "Offer",
      url: `${SITE_ORIGIN}/reserve`,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      validFrom: "2026-01-01",
      ...(price !== undefined ? { price } : {}),
    },
  };
}

export function serviceSchema({
  name,
  description,
  url,
  image,
  price,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_ORIGIN}${url}`,
    image,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "Place",
      name: "Great Smoky Mountains, Western North Carolina",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bryson City",
        addressRegion: "NC",
        addressCountry: "US",
      },
    },
    serviceType: "Guided Fishing Trip",
    offers: {
      "@type": "Offer",
      url: `${SITE_ORIGIN}/reserve`,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      validFrom: "2026-01-01",
      ...(price !== undefined ? { price } : {}),
    },
  };
}

export function cityTripSchema({
  city,
  state,
  description,
  url,
  image,
}: {
  city: string;
  state: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Guided Fly Fishing Trips near ${city}, ${state}`,
    description,
    url: `${SITE_ORIGIN}${url}`,
    image,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: city,
    },
    serviceType: "Guided Fly Fishing",
    offers: {
      "@type": "Offer",
      url: `${SITE_ORIGIN}/reserve`,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      validFrom: "2026-01-01",
    },
  };
}

export function webPageSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_ORIGIN}${url}`,
    ...(image ? { image } : {}),
    author: MAC_BROWN_AUTHOR,
    publisher: MBFF_PUBLISHER,
  };
}

export const castingAnglesBookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Casting Angles",
  author: MAC_BROWN_AUTHOR,
  publisher: { "@type": "Organization", name: "Highland Press" },
  isbn: "1-890485-00-4",
  numberOfPages: 238,
  bookFormat: "https://schema.org/Paperback",
  inLanguage: "en",
  url: `${SITE_ORIGIN}/casting-angles`,
  description:
    "The most thorough fly casting book ever written — 238 pages covering fishing casts, mechanics, loop control, presentation techniques, and the physics of fly casting. By Mac Brown.",
};

export function faqPageSchema(faqs: Array<{ q: string; a: string }>) {
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

export function hatchDatasetSchema(
  hatches: Array<{ insect: string; size: string; months: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${SITE_ORIGIN}/bryson-city-fly-fishing-report-hatch-chart/#hatch-dataset`,
    name: "Bryson City Area Fly Fishing Hatch Chart",
    description:
      "Insect emergence data for the Tuckasegee River, Nantahala River, Oconaluftee River, Deep Creek, and Great Smoky Mountains National Park streams. Compiled from 40 years of on-stream observation and over 14,000 stomach samples from wild regional trout by Mac Brown Fly Fish.",
    url: `${SITE_ORIGIN}/bryson-city-fly-fishing-report-hatch-chart/`,
    creator: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Mac Brown",
      url: `${SITE_ORIGIN}/bio-mac-brown`,
    },
    publisher: { "@type": "Organization", "@id": BUSINESS_ID },
    license: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    temporalCoverage: "1984/..",
    dateModified: new Date().toISOString(),
    spatialCoverage: {
      "@type": "Place",
      name: "Western North Carolina, Great Smoky Mountains National Park",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bryson City",
        addressRegion: "NC",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.4284,
        longitude: -83.4521,
      },
    },
    measurementTechnique:
      "Stomach pump samples collected from wild regional trout during 40 years of on-stream observation on the rivers of Western North Carolina",
    variableMeasured: [
      {
        "@type": "PropertyValue",
        name: "Insect emergence timing",
        description: "Active months for each insect species or pattern",
      },
      {
        "@type": "PropertyValue",
        name: "Hook size",
        description: "Recommended hook size range for matching the hatch",
      },
    ],
    keywords: [
      "fly fishing",
      "hatch chart",
      "Tuckasegee River",
      "Nantahala River",
      "Great Smoky Mountains",
      "entomology",
      "aquatic insects",
      "trout",
      "Western North Carolina",
      "Bryson City",
      "Blue Winged Olive",
      "Quill Gordon",
      "Green Drake",
      "Sulphur",
      "caddis",
    ],
    isAccessibleForFree: true,
    size: `${hatches.length} insect species and patterns`,
  };
}

export function hatchItemListSchema(
  hatches: Array<{ insect: string; size: string; months: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bryson City Area Hatch Chart — Insect Emergence List",
    description:
      "Complete hatch chart for the Tuckasegee River, Nantahala River, and Great Smoky Mountains National Park. Compiled from 40 years of on-stream observation by Mac Brown.",
    numberOfItems: hatches.length,
    itemListElement: hatches.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Thing",
        name: h.insect,
        description: `Hook size ${h.size}. Active ${h.months}.`,
      },
    })),
  };
}

export function liveRiverConditionsDatasetSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${SITE_ORIGIN}/bryson-city-fly-fishing-report-hatch-chart/#live-conditions`,
    name: "Live River Conditions — Tuckasegee & Nantahala Rivers, Bryson City NC",
    description:
      "Real-time stream flow (CFS) and water temperature data for the Tuckasegee River (USGS site 03513000) and Nantahala River (USGS site 03505550), displayed on the Mac Brown Fly Fish conditions widget and updated every 15 minutes from USGS Water Services.",
    url: `${SITE_ORIGIN}/bryson-city-fly-fishing-report-hatch-chart/`,
    creator: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Mac Brown",
      url: `${SITE_ORIGIN}/bio-mac-brown`,
    },
    publisher: { "@type": "Organization", "@id": BUSINESS_ID },
    license: "https://creativecommons.org/publicdomain/zero/1.0/",
    isBasedOn: [
      {
        "@type": "Dataset",
        name: "USGS National Water Information System — Tuckasegee River at Bryson City (Site 03513000)",
        description: "Real-time stream flow and water temperature data for the Tuckasegee River at Bryson City, NC (USGS site 03513000), updated every 15 minutes via USGS Instantaneous Values Web Service.",
        url: "https://waterdata.usgs.gov/monitoring-location/03513000/",
        license: "https://creativecommons.org/publicdomain/zero/1.0/",
        creator: {
          "@type": "Organization",
          name: "U.S. Geological Survey",
          url: "https://www.usgs.gov",
        },
      },
      {
        "@type": "Dataset",
        name: "USGS National Water Information System — Nantahala River (Site 03505550)",
        description: "Real-time stream flow and water temperature data for the Nantahala River, NC (USGS site 03505550), updated every 15 minutes via USGS Instantaneous Values Web Service.",
        url: "https://waterdata.usgs.gov/monitoring-location/03505550/",
        license: "https://creativecommons.org/publicdomain/zero/1.0/",
        creator: {
          "@type": "Organization",
          name: "U.S. Geological Survey",
          url: "https://www.usgs.gov",
        },
      },
    ],
    measurementTechnique:
      "Automated USGS stream gauge telemetry; data refreshed every 15 minutes via USGS Instantaneous Values Web Service",
    variableMeasured: [
      {
        "@type": "PropertyValue",
        name: "Stream flow",
        unitCode: "CFS",
        description: "Cubic feet per second discharge",
      },
      {
        "@type": "PropertyValue",
        name: "Water temperature",
        unitCode: "FAH",
        description: "Water temperature in degrees Fahrenheit",
      },
    ],
    spatialCoverage: [
      {
        "@type": "Place",
        name: "Tuckasegee River at Bryson City, North Carolina",
        geo: { "@type": "GeoCoordinates", latitude: 35.4265, longitude: -83.4473 },
      },
      {
        "@type": "Place",
        name: "Nantahala River, North Carolina",
        geo: { "@type": "GeoCoordinates", latitude: 35.3411, longitude: -83.6677 },
      },
    ],
    keywords: [
      "river conditions",
      "stream flow",
      "CFS",
      "water temperature",
      "Tuckasegee River",
      "Nantahala River",
      "USGS",
      "fly fishing conditions",
      "Bryson City",
    ],
    isAccessibleForFree: true,
  };
}

export function hatchReportTechArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_ORIGIN}/bryson-city-fly-fishing-report-hatch-chart/#article`,
    headline: "Smoky Mountains Fly Fishing Report & Hatch Chart — Bryson City, NC",
    description:
      "Live Smoky Mountains fly fishing conditions, hatch chart, and AI daily forecast for the Tuckasegee and Nantahala rivers. Compiled from 40 years of on-stream observation and over 14,000 stomach samples by Mac Brown.",
    url: `${SITE_ORIGIN}/bryson-city-fly-fishing-report-hatch-chart/`,
    image: `${SITE_ORIGIN}/images/tuckasegee-summer.webp`,
    author: MAC_BROWN_AUTHOR,
    publisher: MBFF_PUBLISHER,
    datePublished: "2024-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    about: [
      { "@type": "Thing", name: "Fly fishing hatch chart" },
      { "@type": "Thing", name: "Tuckasegee River fly fishing" },
      { "@type": "Thing", name: "Nantahala River fly fishing" },
      { "@type": "Thing", name: "Great Smoky Mountains trout fishing" },
      { "@type": "Thing", name: "Aquatic insect emergence" },
    ],
    mentions: [
      { "@type": "Place", name: "Tuckasegee River", address: { "@type": "PostalAddress", addressLocality: "Bryson City", addressRegion: "NC" } },
      { "@type": "Place", name: "Nantahala River", address: { "@type": "PostalAddress", addressRegion: "NC" } },
      { "@type": "Place", name: "Great Smoky Mountains National Park" },
      { "@type": "Place", name: "Oconaluftee River" },
      { "@type": "Place", name: "Deep Creek" },
    ],
    isPartOf: { "@id": BUSINESS_ID },
  };
}
