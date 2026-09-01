"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ChevronDown,
  Search,
} from "lucide-react";
import SearchModal from "./search-modal";
import ChatWidget from "./chat-widget";
import {
  MBFF_BIO,
  MBFF_CERTIFICATIONS,
  MBFF_PODCASTS,
  MBFF_EVENTS,
} from "@/lib/mbff";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const LOGO_SRC = `${BASE}/ffgs-logo.webp`;

type NavChild = { name: string; href: string };
type NavItem = {
  name: string;
  href?: string;
  external?: boolean;
  items?: NavChild[];
};

const leftLinks: NavItem[] = [
  {
    name: "Schools",
    items: [
      { name: "I Want to Fish Better", href: "/smoky-mountain-fly-fishing-school/" },
      { name: "I Want to Become a Guide", href: "/fly-fishing-guide-school/" },
      { name: "Cost & Value", href: "/is-fly-fishing-guide-school-worth-it/" },
      { name: "New to Fly Fishing", href: "/new-to-fly-fishing/" },
      { name: "Upcoming Dates", href: MBFF_EVENTS },
      { name: "Certification", href: "/fly-fishing-guide-certification/" },
      { name: "What to Bring", href: "/necessary-items-fly-fishing-guide-school/" },
      { name: "School Locations", href: "/guide-school-locations/" },
    ],
  },
  {
    name: "Instructors",
    href: "/meet-rowing-fly-casting-fly-fishing-instructors/",
  },
  {
    name: "About",
    items: [
      { name: "Bio — Mac Brown", href: MBFF_BIO },
      { name: "Testimonials & Kudos", href: "/testimonials-kudos/" },
      { name: "Live River & Hatch Conditions", href: "https://macbrownflyfish.com/bryson-city-fly-fishing-report-hatch-chart/" },
      { name: "Fly Fishing Certifications", href: MBFF_CERTIFICATIONS },
      { name: "Gallery", href: "/gallery-fly-fishing-guide-school/" },
    ],
  },
];

const rightLinks: NavItem[] = [
  { name: "Blog", href: "/blog/" },
  { name: "Podcasts", href: MBFF_PODCASTS },
  {
    name: "Contact",
    href: "/contact-information-best-fly-fishing-guide-school/",
  },
  { name: "Enroll", href: "/reservation-form/" },
];

function DesktopDropdown({
  item,
  scrolled,
  isHome,
  pathname,
}: {
  item: NavItem;
  scrolled: boolean;
  isHome: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive =
    item.items?.some((c) => pathname === c.href) || pathname === item.href;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const textClass = `text-xs font-medium uppercase tracking-[0.15em] transition-colors flex items-center gap-1 ${
    scrolled || !isHome
      ? isActive
        ? "text-primary"
        : "text-foreground hover:text-primary"
      : isActive
        ? "text-white"
        : "text-white/80 hover:text-white"
  }`;

  if (!item.items) {
    return (
      <Link href={item.href!} className={textClass}>
        {item.name}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button onClick={() => setOpen((v) => !v)} className={textClass}>
        {item.name}
        <ChevronDown
          size={11}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white border border-border shadow-lg py-1.5 min-w-[220px]">
            {item.items.map((child) =>
              child.href.startsWith("http") ? (
                <a
                  key={child.href}
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors text-foreground hover:text-primary hover:bg-muted/30"
                >
                  {child.name}
                </a>
              ) : (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                    pathname === child.href
                      ? "text-primary bg-muted/40"
                      : "text-foreground hover:text-primary hover:bg-muted/30"
                  }`}
                >
                  {child.name}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SiteNav({ logo }: { logo?: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const isHome = pathname === "/" || pathname === `${BASE}/`;

  const linkClass = (active: boolean) =>
    `text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
      scrolled || !isHome
        ? active
          ? "text-primary"
          : "text-foreground hover:text-primary"
        : active
          ? "text-white"
          : "text-white/80 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between lg:justify-center lg:gap-0 relative overflow-visible">
        <nav className="hidden lg:flex items-center gap-8 absolute left-6">
          {leftLinks.map((l) => (
            <DesktopDropdown
              key={l.name}
              item={l}
              scrolled={scrolled}
              isHome={isHome}
              pathname={pathname}
            />
          ))}
        </nav>

        <div
          className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 inset-y-0 cursor-pointer"
          onClick={() => { if (isHome) window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          {logo ?? (
            <Link href="/">
              <img
                src={`${BASE}/ffgs-logo-94.webp`}
                srcSet={`${BASE}/ffgs-logo-94.webp 1x, ${LOGO_SRC} 2x`}
                alt="Fly Fishing Guide School"
                width={94}
                height={60}
                fetchPriority="high"
                className="h-[60px] object-contain transition-all duration-300"
                style={
                  scrolled || !isHome
                    ? {}
                    : { filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.65))" }
                }
              />
            </Link>
          )}
        </div>

        <nav className="hidden lg:flex items-center gap-8 absolute right-6">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            title="Search (⌘K)"
            className={`transition-colors ${scrolled || !isHome ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}
          >
            <Search size={16} />
          </button>
          {rightLinks.map((l) =>
            l.name === "Enroll" ? (
              <Link
                key={l.name}
                href="/reservation-form/"
                className="text-xs font-semibold uppercase tracking-[0.15em] px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {l.name}
              </Link>
            ) : l.href!.startsWith("http") || l.external ? (
              <a
                key={l.name}
                href={l.href!}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass(false)}
              >
                {l.name}
              </a>
            ) : (
              <Link
                key={l.name}
                href={l.href!}
                className={linkClass(pathname === l.href)}
              >
                {l.name}
              </Link>
            ),
          )}
        </nav>

        <div className={`lg:hidden absolute right-6 flex items-center gap-3 ${scrolled || !isHome ? "text-foreground" : "text-white"}`}>
          <button onClick={() => setSearchOpen(true)} aria-label="Search">
            <Search size={20} />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="flex flex-col py-8 px-6 gap-1">
            {[...leftLinks, ...rightLinks].map((l) =>
              l.items ? (
                <div key={l.name}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === l.name ? null : l.name,
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    {l.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileExpanded === l.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === l.name && (
                    <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-primary/20 ml-1">
                      {l.items.map((child) =>
                        child.href.startsWith("http") ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : l.href!.startsWith("http") || l.external ? (
                <a
                  key={l.name}
                  href={l.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {l.name}
                </a>
              ) : (
                <Link
                  key={l.name}
                  href={l.href!}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {l.name}
                </Link>
              ),
             )}
          </nav>
        </div>
      )}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

function SiteFooter() {
  return (
    <>
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay Connected to the Water
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            School dates, open spots, hatch reports, casting tips, and field
            notes from Bryson City — delivered monthly.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfODdkgQ5E_FYPLoWc_XpBTdxmDUg0pljIoNvEanjECXRvvvA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors"
          >
            Subscribe to the List
          </a>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src={LOGO_SRC}
                alt="Fly Fishing Guide School"
                width={150}
                height={96}
                className="h-24 object-contain mb-4"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Est. 1987 · Bryson City, NC. The nation&apos;s premier
                professional fly fishing guide training program — career tracks
                and skill-development schools for all levels.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground">
                Quick Links
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  {
                    label: "Guide School Overview",
                    href: "/fly-fishing-guide-school/",
                  },
                  {
                    label: "Instructors",
                    href: "/meet-rowing-fly-casting-fly-fishing-instructors/",
                  },
                  { label: "Bio — Mac Brown", href: MBFF_BIO },
                  {
                    label: "Testimonials & Kudos",
                    href: "/testimonials-kudos/",
                  },
                  { label: "Articles & Blog", href: "/blog/" },
                  { label: "Reservation Form", href: "/reservation-form/" },
                  { label: "Privacy Policy", href: "/privacy-policy/" },
                ].map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground">
                Get in Touch
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-primary-foreground/90">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <span>
                    779 West Deep Creek Rd
                    <br />
                    Bryson City, NC 28713
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href="tel:+18287361469"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    (828) 736-1469
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <Mail size={14} className="shrink-0" />
                  <a
                    href="mailto:flyfishingguideschool@gmail.com"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    flyfishingguideschool@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mb-6">
                {[
                  {
                    Icon: Facebook,
                    url: "https://www.facebook.com/Flyfishingguideschool/",
                    label: "Facebook",
                  },
                  {
                    Icon: Instagram,
                    url: "https://www.instagram.com/flyfishingguideschool/",
                    label: "Instagram",
                  },
                  {
                    Icon: Youtube,
                    url: "https://www.youtube.com/@macbrown3137",
                    label: "YouTube",
                  },
                  {
                    Icon: Linkedin,
                    url: "https://www.linkedin.com/in/mac-brown-96884419/",
                    label: "LinkedIn",
                  },
                ].map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <a
                href="https://g.page/r/CfxPhFfWYElCEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground/90 hover:text-primary-foreground hover:border-primary-foreground/60 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2.5 transition-colors"
              >
                Write a Review on Google
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} Fly Fishing Guide School. All
              rights reserved.
            </p>
            <p>
              Bryson City, NC &mdash; Great Smoky Mountains &mdash; Est. 1987
            </p>
          </div>
          <p className="mt-3 text-center text-[11px] text-primary-foreground/75">
            Listed on the{" "}
            <a href="https://www.explorebrysoncity.com/listing/mac-brown-fly-fishing/310/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors underline underline-offset-2">
              Explore Bryson City Visitor Guide
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export function SiteShell({ children, logo }: { children: React.ReactNode; logo?: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <SiteNav logo={logo} />
      <main className="flex-1 flex flex-col">{children}</main>
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
