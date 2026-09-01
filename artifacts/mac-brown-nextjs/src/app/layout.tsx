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
import { SchemaScript } from "@/components/schema-script";
import { localBusinessSchema } from "@/lib/schema";

const GA_ID = "G-0QPV7D57V8";

export const metadata: Metadata = {
  title: {
    template: "%s | Mac Brown Fly Fish",
    default: "Fly Fishing Guide Trips & Schools in the Smoky Mountains | Mac Brown Fly Fish",
  },
  description:
    "Book guided fly fishing trips, casting schools, and clinics on the Tuckasegee River and throughout Western North Carolina. Expert instruction since 1987.",
  metadataBase: new URL("https://macbrownflyfish.com"),
  themeColor: "#003366",
  openGraph: {
    siteName: "Mac Brown Fly Fish",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "Mac Brown Fly Fish — Guided Fly Fishing in the Smoky Mountains" }],
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <SchemaScript schema={localBusinessSchema} />
        <SiteShell logo={
          <Link href="/">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/mbff-logo.webp`}
              alt="Mac Brown Fly Fish"
              width={90}
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
