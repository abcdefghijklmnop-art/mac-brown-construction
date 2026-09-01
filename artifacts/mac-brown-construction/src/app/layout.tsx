import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--app-font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--app-font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mac Brown Construction",
    default: "Mac Brown Construction | Custom Home Builder | Bryson City, NC",
  },
  description:
    "Licensed custom home builder and general contractor in Bryson City, NC since 1988. Mac Brown Construction builds energy-efficient, sustainable custom homes in the Great Smoky Mountains.",
  metadataBase: new URL("https://macbrownconstruction.com"),
  openGraph: {
    type: "website",
    siteName: "Mac Brown Construction",
    title: "Mac Brown Construction | Custom Home Builder | Bryson City, NC",
    description:
      "Licensed custom home builder and general contractor in Bryson City, NC since 1988. Energy-efficient custom homes built to last in the Smoky Mountains.",
    url: "https://macbrownconstruction.com",
    images: [{ url: "https://macbrownconstruction.com/opengraph.jpg", width: 1200, height: 630, alt: "Mac Brown Construction — Custom Home Builder, Bryson City NC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mac Brown Construction | Custom Home Builder | Bryson City, NC",
    description:
      "Licensed custom home builder and general contractor in Bryson City, NC since 1988. Energy-efficient custom homes built to last in the Smoky Mountains.",
    images: ["https://macbrownconstruction.com/opengraph.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteNav logo={
          <Link href="/" className="flex items-center justify-center h-full">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/mbc-logo-nobg.webp`}
              alt="Mac Brown Construction"
              width={90}
              height={60}
              fetchPriority="high"
              className="h-[52px] w-auto object-contain transition-all duration-300"
            />
          </Link>
        } />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
