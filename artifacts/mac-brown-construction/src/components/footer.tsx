import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const LOGO_SRC = `${BASE}/images/mbc-logo-nobg.webp`;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Column 1 — Logo + about */}
          <div>
            <Link href="/">
              <img
                src={LOGO_SRC}
                alt="Mac Brown Construction"
                width={120}
                height={80}
                className="h-20 w-auto object-contain mb-6"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Est. 1988 in Bryson City, NC. Licensed general contractor and custom home builder serving western North Carolina in the Great Smoky Mountains.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground">Quick Links</p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Custom Home Builder", href: "/custom-home-builder/" },
                { label: "About / Contractor", href: "/about/" },
                { label: "Blog", href: "/blog/" },
                { label: "Contact / Estimate", href: "/contact/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground">Get in Touch</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/90">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>Bryson City, NC 28713<br />Swain County</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/90">
                <Phone size={14} className="shrink-0" />
                <a href="tel:+18287361469" className="hover:text-primary-foreground transition-colors">(828) 736-1469</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/90">
                <Mail size={14} className="shrink-0" />
                <a href="mailto:macbrownconstruction@gmail.com" className="hover:text-primary-foreground transition-colors">macbrownconstruction@gmail.com</a>
              </li>
            </ul>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground/90 hover:text-primary-foreground hover:border-primary-foreground/60 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2.5 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mac Brown Construction, LLC. All rights reserved.</p>
          <p>Bryson City, NC &mdash; NC Unlimited General Contractor License · Est. 1988</p>
        </div>
      </div>
    </footer>
  );
}
