"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const LOGO_SRC = `${BASE}/images/mbc-logo-nobg.webp`;

const leftLinks = [
  { name: "About", href: "/about/" },
  { name: "Custom Homes", href: "/custom-home-builder/" },
];

const rightLinks = [
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact/" },
];

export function SiteNav({ logo }: { logo?: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome =
    pathname === "/" ||
    pathname === `${BASE}/` ||
    pathname === BASE ||
    pathname === `${BASE}`;

  const opaque = scrolled || !isHome;

  const linkClass = (active: boolean) =>
    `text-xs font-semibold uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${
      opaque
        ? active
          ? "text-primary"
          : "text-foreground/70 hover:text-primary"
        : active
        ? "text-white"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        opaque ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center">

        {/* Left links */}
        <nav className="hidden lg:flex items-center gap-8">
          {leftLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkClass(pathname === l.href || pathname.startsWith(l.href.replace(/\/$/, "")))}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger (left column on mobile) */}
        <div className="lg:hidden flex items-center">
          <button
            className={opaque ? "text-foreground" : "text-white"}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Centered logo */}
        <div
          className="flex items-center justify-center h-full cursor-pointer"
          style={opaque ? {} : { filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.7))" }}
          onClick={() => { if (isHome) window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          {logo ?? (
            <Link href="/" className="flex items-center justify-center h-full">
              <img
                src={LOGO_SRC}
                alt="Mac Brown Construction"
                width={90}
                height={60}
                fetchPriority="high"
                className="h-[52px] w-auto object-contain transition-all duration-300"
              />
            </Link>
          )}
        </div>

        {/* Right links */}
        <nav className="hidden lg:flex items-center gap-8 justify-end">
          {rightLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkClass(pathname === l.href || pathname.startsWith(l.href.replace(/\/$/, "")))}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Spacer for mobile right side (keeps logo centered) */}
        <div className="lg:hidden w-6" />
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex justify-center py-6">
            <img src={LOGO_SRC} alt="Mac Brown Construction" className="h-16 w-auto object-contain" />
          </div>
          <nav className="flex flex-col pb-6 px-6 gap-1">
            {[...leftLinks, ...rightLinks].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-semibold uppercase tracking-widest text-foreground/70 hover:text-primary border-b border-border/50 transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
