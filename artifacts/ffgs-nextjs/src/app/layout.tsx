import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--app-font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--app-font-serif",
  display: "swap",
});

const GA_ID = "G-EM1V17CG0P";

const siteSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "School", "LocalBusiness"],
  "@id": "https://flyfishingguideschool.com/#business",
  name: "Fly Fishing Guide School",
  description: "The only professional fly fishing guide training program in the eastern United States. 4-day intensive led by FFI Master Certified Casting Instructors in Bryson City, NC since 1987.",
  url: "https://flyfishingguideschool.com",
  telephone: "+18287361469",
  email: "flyfishingguideschool@gmail.com",
  image: "https://flyfishingguideschool.com/opengraph.jpg",
  logo: "https://flyfishingguideschool.com/ffgs-logo-square.webp",
  foundingDate: "1987",
  priceRange: "$4,850",
  founder: { "@id": "https://macbrownflyfish.com/#mac-brown" },
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
    { "@type": "City", name: "Asheville" },
    { "@type": "City", name: "Atlanta" },
    { "@type": "City", name: "Charlotte" },
    { "@type": "City", name: "Knoxville" },
    { "@type": "City", name: "Chattanooga" },
    { "@type": "City", name: "Nashville" },
    { "@type": "City", name: "Raleigh" },
    { "@type": "City", name: "Birmingham" },
    { "@type": "City", name: "Greenville" },
  ],
  parentOrganization: {
    "@id": "https://macbrownflyfish.com/#business",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "18",
  },
  sameAs: [
    "https://macbrownflyfish.com",
    "https://www.facebook.com/macbrownflyfish",
    "https://www.instagram.com/macbrownflyfish/",
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Fly Fishing Guide School",
    default: "Fly Fishing Guide School | Bryson City NC | Since 1987",
  },
  description:
    "Four-day fly fishing guide school in the Smoky Mountains of NC. Train under Master Casting Instructors, learn to row, read water, and launch your guide career.",
  metadataBase: new URL("https://flyfishingguideschool.com"),
  themeColor: "#003366",
  openGraph: {
    siteName: "Fly Fishing Guide School",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "Fly Fishing Guide School — Bryson City, NC" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="ga-init" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <SiteShell logo={
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/ffgs-logo-94.webp`}
              srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/ffgs-logo-94.webp 1x, ${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/ffgs-logo.webp 2x`}
              alt="Fly Fishing Guide School"
              width={94}
              height={60}
              fetchPriority="high"
              className="h-[60px] object-contain transition-all duration-300"
              style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.65))" }}
            />
          </Link>
        }>{children}</SiteShell>
      </body>
    </html>
  );
}
