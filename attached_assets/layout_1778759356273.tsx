import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Youtube, ChevronDown } from "lucide-react";

type NavChild = { name: string; href: string };
type NavItem = { name: string; href?: string; items?: NavChild[] };

const leftLinks: NavItem[] = [
  {
    name: "School",
    items: [
      { name: "Guide School Overview", href: "/fly-fishing-guide-school/" },
      { name: "NC Classes", href: "/fly-fishing-guide-school/fly-fishing-classes-north-carolina-smoky-mountains/" },
      { name: "Fly Fishing Instruction", href: "/fly-fishing-instruction/" },
      { name: "Fly Casting: Style & Intent", href: "/fly-fishing-instruction/fly-casting-style-substance-intent/" },
      { name: "Near Atlanta, GA", href: "/top-fly-fishing-guide-school-atlanta-ga/" },
    ],
  },
  {
    name: "About",
    items: [
      { name: "Meet the Instructors", href: "/meet-rowing-fly-casting-fly-fishing-instructors/" },
      { name: "Testimonials & Kudos", href: "/testimonials-kudos/" },
      { name: "Articles & Blog", href: "/blog-post/" },
      { name: "Contact & Location", href: "/contact-information-best-fly-fishing-guide-school/" },
    ],
  },
];

const rightLinks: NavItem[] = [
  { name: "Testimonials", href: "/testimonials-kudos/" },
  { name: "Articles", href: "/blog-post/" },
  { name: "Contact", href: "/contact-information-best-fly-fishing-guide-school/" },
  { name: "Enroll", href: "/reservation-form/" },
];

function DesktopDropdown({ item, scrolled, isHome, location }: {
  item: NavItem; scrolled: boolean; isHome: boolean; location: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = item.items?.some(c => location === c.href) || location === item.href;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const textClass = `text-xs font-medium uppercase tracking-[0.15em] transition-colors flex items-center gap-1 ${
    scrolled || !isHome
      ? isActive ? "text-primary" : "text-foreground hover:text-primary"
      : isActive ? "text-white" : "text-white/80 hover:text-white"
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
      <button onClick={() => setOpen(v => !v)} className={textClass}>
        {item.name}
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white border border-border shadow-lg py-1.5 min-w-[220px]">
            {item.items.map(child => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                  location === child.href
                    ? "text-primary bg-muted/40"
                    : "text-foreground hover:text-primary hover:bg-muted/30"
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const isHome = location === "/";

  const linkClass = (active: boolean) =>
    `text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
      scrolled || !isHome
        ? active ? "text-primary" : "text-foreground hover:text-primary"
        : active ? "text-white" : "text-white/80 hover:text-white"
    }`;

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">

      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome ? "nav-scrolled" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between lg:justify-center lg:gap-0 relative overflow-visible">

          {/* LEFT LINKS — desktop */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-6">
            {leftLinks.map((l) => (
              <DesktopDropdown key={l.name} item={l} scrolled={scrolled} isHome={isHome} location={location} />
            ))}
          </nav>

          {/* WORDMARK — center */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 inset-y-0 leading-none"
          >
            <span
              className={`font-serif font-bold tracking-tight transition-all duration-300 ${
                scrolled || !isHome ? "text-foreground text-sm" : "text-white text-base drop-shadow-lg"
              }`}
              style={{ letterSpacing: "0.02em" }}
            >
              Fly Fishing
            </span>
            <span
              className={`font-serif font-bold tracking-tight transition-all duration-300 ${
                scrolled || !isHome ? "text-primary text-sm" : "text-white/80 text-base drop-shadow-lg"
              }`}
              style={{ letterSpacing: "0.02em" }}
            >
              Guide School
            </span>
          </Link>

          {/* RIGHT LINKS — desktop */}
          <nav className="hidden lg:flex items-center gap-8 absolute right-6">
            {rightLinks.map((l) =>
              l.name === "Enroll" ? (
                <Link
                  key={l.name}
                  href={l.href!}
                  className="text-xs font-semibold uppercase tracking-[0.15em] px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {l.name}
                </Link>
              ) : (
                <Link
                  key={l.name}
                  href={l.href!}
                  className={linkClass(location === l.href)}
                >
                  {l.name}
                </Link>
              )
            )}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className={`lg:hidden absolute right-6 ${scrolled || !isHome ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="flex flex-col py-8 px-6 gap-1">
              {[...leftLinks, ...rightLinks].map((l) =>
                l.items ? (
                  <div key={l.name}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === l.name ? null : l.name)}
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
                        {l.items.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-2 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.name}
                    href={l.href!}
                    className="py-3 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    {l.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* NEWSLETTER STRIP */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay Connected to the Water
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            School dates, open spots, hatch reports, casting tips, and field notes from Bryson City — delivered monthly.
          </p>
          <a
            href="/contact-information-best-fly-fishing-guide-school/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors"
          >
            Join the List
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            <div>
              <p className="font-serif text-2xl font-bold text-primary-foreground mb-1">Fly Fishing</p>
              <p className="font-serif text-2xl font-bold text-primary-foreground/70 mb-4">Guide School</p>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Est. 1987 · Bryson City, NC. The Southeast's premier professional fly fishing guide training program — career tracks and skill-development schools for all levels.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground/50">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Guide School Overview", href: "/fly-fishing-guide-school/" },
                  { label: "Meet the Instructors", href: "/meet-rowing-fly-casting-fly-fishing-instructors/" },
                  { label: "Testimonials & Kudos", href: "/testimonials-kudos/" },
                  { label: "Articles & Blog", href: "/blog-post/" },
                  { label: "Reservation Form", href: "/reservation-form/" },
                  { label: "Near Atlanta, GA", href: "/top-fly-fishing-guide-school-atlanta-ga/" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground/50">Get in Touch</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <span>779 West Deep Creek Rd<br />Bryson City, NC 28713</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Phone size={14} className="shrink-0" />
                  <a href="tel:+18287361469" className="hover:text-primary-foreground transition-colors">
                    (828) 736-1469
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Mail size={14} className="shrink-0" />
                  <a href="mailto:flyfishingguideschool@gmail.com" className="hover:text-primary-foreground transition-colors">
                    flyfishingguideschool@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mb-6">
                {[
                  { Icon: Facebook, url: "https://www.facebook.com/Flyfishingguideschool/" },
                  { Icon: Instagram, url: "https://www.instagram.com/macbrownflyfish/" },
                  { Icon: Youtube, url: "https://www.youtube.com/@macbrown3137" },
                ].map(({ Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <a
                href="https://www.google.com/search?q=Fly+Fishing+Guide+School+Bryson+City+NC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2.5 transition-colors"
              >
                Write a Review on Google
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/40">
            <p>&copy; {new Date().getFullYear()} Fly Fishing Guide School. All rights reserved.</p>
            <p>Bryson City, NC &mdash; Great Smoky Mountains &mdash; Est. 1987</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
