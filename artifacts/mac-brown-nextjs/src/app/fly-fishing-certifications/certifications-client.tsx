"use client";

import { Fragment, useState } from "react";
import FaqSection from "@/components/faq-section";
import { SchemaScript } from "@/components/schema-script";
import { faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

const logoFilter: Record<string, string> = {
  "ffi.webp": "brightness(0)",
  "fieldstream.webp": "brightness(0.4) saturate(3) contrast(2)",
};

const logoAlt: Record<string, string> = {
  "ffi.webp": "Fly Fishers International",
  "flyshow.webp": "The Fly Fishing Show",
  "taf.webp": "The Articulate Fly",
  "fieldstream.webp": "Field & Stream",
  "sffhof.webp": "Southern Fly Fishing Hall of Fame",
  "teamusa.webp": "Fly Fishing Team USA",
  "wcu.webp": "Western Carolina University",
  "highlandpress.webp": "Highland Press",
  "owaa.webp": "Outdoor Writers Association of America",
};

interface Peer {
  label: string;
  names: string;
}

interface CredLink {
  label: string;
  href: string;
}

interface Credential {
  id: number;
  icon: string;
  title: string;
  year: string;
  badgeColor: string;
  badgeBg: string;
  org: string;
  body: string;
  featured?: boolean;
  logo?: string;
  peers?: Peer;
  pills?: string[];
  pills2?: string[];
  links: CredLink[];
}

const credentials: Credential[] = [
  {
    id: 1,
    icon: "🏆",
    logo: "ffi.webp",
    title: "FFI Lifetime Achievement in Fly Casting Education Award",
    year: "2023",
    badgeColor: "#8B6914",
    badgeBg: "#FEF3C7",
    org: "Fly Fishers International — presented by the FFI Board of Directors",
    body: "The highest honor in fly casting education, presented directly by the FFI Board of Directors — not a committee. Recognizes significant long-term contributions to teaching, innovation, writing, and mentorship.",
    featured: true,
    peers: {
      label: "Fellow recipients include",
      names: "Joan Wulff · Lefty Kreh · Mel Krieger · Gary Borger · Steve Rajeff · Simon Gawesworth · Tim Rajeff · Bob Jacklin",
    },
    links: [
      { label: "Verify on FFI.org", href: "https://www.flyfishersinternational.org/Resources/About-Us/Awards/Award-Past-Recipients" },
    ],
  },
  {
    id: 2,
    icon: "📋",
    logo: "ffi.webp",
    title: "Director of Teacher Development — FFI Casting Instructor Education",
    year: "Active",
    badgeColor: "#991B1B",
    badgeBg: "#FEE2E2",
    org: "Fly Fishers International, Fly Casting Education Program",
    body: "Leads Teacher Development Training Programs for FFI — responsible for how the sport's next generation of certified instructors learns to teach. Every method and standard a new instructor carries into the field passes through this program.",
    links: [
      { label: "Verify on FFI.org", href: "https://www.flyfishersinternational.org/Get-Involved/Fly-Casting-Education-Program/FFI-Fly-Casting-Education-Team" },
    ],
  },
  {
    id: 3,
    icon: "✏️",
    logo: "ffi.webp",
    title: "Associate Editor — The Loop Journal",
    year: "Active",
    badgeColor: "#1E3A8A",
    badgeBg: "#DBEAFE",
    org: "Fly Fishers International · FFI's official fly casting publication",
    body: "Associate Editor alongside Bruce Richards — FFI Lifetime Achievement recipient and fly line pioneer — with Jim Wigington as Editor-in-Chief. The Loop Journal reaches every serious casting instructor worldwide.",
    links: [
      { label: "Verify on FFI.org", href: "https://www.flyfishersinternational.org/Get-Involved/Fly-Casting-Education-Program/FFI-Fly-Casting-Education-Team" },
      { label: "View The Loop Journal", href: "https://www.flyfishersinternational.org/Fly-Casting-Education/The-Loop-Journal" },
    ],
  },
  {
    id: 4,
    icon: "📍",
    logo: "flyshow.webp",
    title: "Featured Expert — The Fly Fishing Show",
    year: "Since founding",
    badgeColor: "#374151",
    badgeBg: "#F3F4F6",
    org: "World's largest consumer fly fishing event series",
    body: "Featured at The Fly Fishing Show since its inception — teaching casting classes, demos, fly tying, and seminars nationally. The day before each show, Mac and Gary Borger co-teach an all-day Advanced Fly Casting Class together across America.",
    pills: ["Georgia", "Massachusetts", "New Jersey", "Colorado", "California", "Pennsylvania", "TroutFest TX", "Midwest Fly Fishing Expo", "Great Waters Fly Fishing Expo"],
    links: [
      { label: "Visit flyfishingshow.com", href: "https://flyfishingshow.com/" },
    ],
  },
  {
    id: 5,
    icon: "🎙️",
    logo: "taf.webp",
    title: "Casting Angles — Recurring Expert Segment, The Articulate Fly",
    year: "Ongoing",
    badgeColor: "#86198F",
    badgeBg: "#FAE8FF",
    org: "The Articulate Fly Podcast · 1,000+ episodes · All major platforms",
    body: "Mac's own named, recurring segment — appearing every other week through 2026, covering casting mechanics, seasonal tactics, and the philosophy of continuous improvement. A permanent fixture of the show, not a guest spot.",
    links: [
      { label: "Browse all episodes", href: "https://fly-fishing-podcast.thearticulatefly.com/guests/mac-brown/" },
    ],
  },
  {
    id: 6,
    icon: "📰",
    logo: "fieldstream.webp",
    title: "Field & Stream Angler of the Year",
    year: "1999",
    badgeColor: "#166534",
    badgeBg: "#DCFCE7",
    org: "Field & Stream Magazine — America's flagship outdoor publication",
    body: "Named Angler of the Year by Field & Stream — one of the most widely read outdoor publications in the United States, reaching millions of readers well beyond the fly fishing community.",
    links: [],
  },
  {
    id: 7,
    icon: "🏛️",
    logo: "sffhof.webp",
    title: "Southern Fly Fishing Hall of Fame — Recreation Inductee",
    year: "2017",
    badgeColor: "#7C2D12",
    badgeBg: "#FEF3C7",
    org: "Southern Fly Fishing Hall of Fame · Bryson City, North Carolina",
    body: "Inducted in the Recreation category, recognizing a career rooted in Bryson City, NC, beginning with McLeod's Highland Fly Fishing in 1987. Fellow Recreation inductees include Lefty Kreh and Dave Whitlock.",
    links: [
      { label: "View inductee profile", href: "https://southernflyfishinghalloffame.com/hof-inductee/mac-brown/" },
    ],
  },
  {
    id: 8,
    icon: "🥇",
    logo: "ffi.webp",
    title: "FFI Mel Krieger Fly Casting Instructor Award",
    year: "2021",
    badgeColor: "#0F766E",
    badgeBg: "#CCFBF1",
    org: "Fly Fishers International, Fly Casting Education Program",
    body: "Named for the author of the original FFI Casting Instructor Certification Program — honoring those dedicated to instruction and significant contributions to the certification program.",
    links: [
      { label: "Verify on FFI.org", href: "https://www.flyfishersinternational.org/Resources/About-Us/Awards/Award-Past-Recipients" },
    ],
  },
  {
    id: 9,
    icon: "⚖️",
    logo: "ffi.webp",
    title: "FFI Casting Board of Governors",
    year: "2022–2023",
    badgeColor: "#4338CA",
    badgeBg: "#EEF2FF",
    org: "Fly Fishers International, Fly Casting Education Program",
    body: "Served on the governing body responsible for setting the standards, testing, and direction of fly casting education across FFI's global certification program — the body behind every certification, definition, and exam in the sport.",
    pills2: ["MCI engagement", "Definitions committee", "Testing committee", "Monthly governance"],
    links: [],
  },
  {
    id: 10,
    icon: "🌟",
    logo: "ffi.webp",
    title: "FCEP Leadership Team Recognition Award",
    year: "2023",
    badgeColor: "#0F766E",
    badgeBg: "#CCFBF1",
    org: "Fly Fishers International, Fly Casting Education Program",
    body: "Voted by the FCEP Leadership Team themselves — the people at the highest level of the sport recognizing who stood out among them. Honors vision, initiative, creativity, and the ability to inspire others.",
    links: [
      { label: "Verify on FFI.org", href: "https://www.flyfishersinternational.org/Get-Involved/Casting-Instructor-Certification/CICP-Resources-and-CE/History-Governance/Casting-BOG-Awards" },
    ],
  },
  {
    id: 11,
    icon: "📄",
    logo: "ffi.webp",
    title: "FFI Fly Casting Definitions — Committee Member",
    year: "Active 2024",
    badgeColor: "#1E3A8A",
    badgeBg: "#DBEAFE",
    org: "Fly Fishers International, Fly Casting Education Program",
    body: "Named contributor to the FFI's authoritative Fly Casting Definitions — the official terminology used by certified instructors and examiners worldwide, updated December 2024. This document defines what fly casting is, for the entire sport.",
    links: [
      { label: "View definitions document", href: "https://www.flyfishersinternational.org/Get-Involved/Casting-Instructor-Certification/How-to-Become-Certified/Definitions/General-Casting" },
    ],
  },
];

const bottomCreds = [
  { icon: "🎖️", logo: "ffi.webp", title: "Master Casting Instructor (MCI)", sub: "First in North Carolina", desc: "FFI's highest single-hand casting certification" },
  { icon: "📚", logo: "highlandpress.webp", title: "Author — Casting Angles", desc: "Endorsed by FFI, ACA & others as an instructor reference handbook" },
  { icon: "🎓", logo: "wcu.webp", title: "Associate Professor, WCU", desc: "Founded the Fly Fishing Program at Western Carolina University (1994–98)" },
  { icon: "🇺🇸", logo: "teamusa.webp", title: "Team USA Coaching", desc: "Coached Fly Fishing Team USA Youth to multiple World Championships" },
];

const questions = [
  { num: "1", em: "Proven over popular.", rest: "Does the school's reputation rest on documented results, or simply on social media presence?" },
  { num: "2", em: "Real educational content over entertainment.", rest: "Are you looking for structured learning — or just someone who is Instafamous?" },
  { num: "3", em: "Are you a lifelong learner who values your time?", rest: "" },
  { num: "4", em: "Most people have a quality discernment issue.", rest: "Research diligently for instructors who provide a blueprint for continued growth — with student handouts and structured lesson plans." },
];

const certificationsFaqs = [
  {
    q: "What certifications does Mac Brown hold as a fly casting instructor?",
    a: "Mac Brown holds the FFI Master Certified Casting Instructor credential — the highest casting certification issued by Fly Fishers International. He also holds the FFI Lifetime Achievement in Fly Casting Education Award (2023), presented directly by the FFI Board of Directors. He is North Carolina's only Master Certified Casting Instructor and serves as FFI Director of Teacher Development.",
  },
  {
    q: "What is the FFI Lifetime Achievement in Fly Casting Education Award?",
    a: "The FFI Lifetime Achievement in Fly Casting Education Award is the highest honor in fly casting instruction, presented by the Fly Fishers International Board of Directors. It recognizes long-term contributions to teaching, innovation, writing, and mentorship. Fellow recipients include Joan Wulff, Lefty Kreh, Mel Krieger, Gary Borger, Steve Rajeff, Simon Gawesworth, and Tim Rajeff.",
  },
  {
    q: "What is the difference between an FFI Casting Instructor and a Master Casting Instructor?",
    a: "The Master Certified Casting Instructor (MCCI) is the highest level of FFI casting certification — above Certified Casting Instructor (CCI). The MCCI designation requires demonstrating expert-level casting proficiency, diagnostic ability, and teaching excellence at a level far beyond the CCI exam. Fewer than a few hundred instructors worldwide hold the Master designation.",
  },
  {
    q: "Is Mac Brown the only Master Casting Instructor in North Carolina?",
    a: "Yes. Mac Brown is North Carolina's only FFI Master Certified Casting Instructor. The MCCI credential is held by a small number of instructors across the entire country, making it the most selective casting instructor certification in fly fishing.",
  },
  {
    q: "What other honors and awards has Mac Brown received?",
    a: "Mac Brown has received the Mel Krieger Casting Award for outstanding contribution to fly casting instruction, was inducted into the Southern Appalachian Fly Fishing Museum Hall of Fame for Recreation in 2017, was nominated as Field & Stream Angler of the Year in 1999, served on the FFI Board of Governors, and has coached Fly Fishing Team USA Youth competitors to World Championship titles.",
  },
];

export default function FlyCastingCredentials() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const toggle = (id: number) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#FAFAF8", minHeight: "100vh", color: "#1a1a18" }}>
      <SchemaScript schema={faqPageSchema(certificationsFaqs)} />

      {/* Hero */}
      <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: 600, overflow: "hidden", color: "#F5F0E8", display: "flex", alignItems: "flex-end" }}>
        <img
          src={img("/images/fall-river-fishing.webp")}
          srcSet={`${img("/images/mobile/fall-river-fishing.webp")} 800w, ${img("/images/fall-river-fishing.webp")} 1440w`}
          sizes="100vw"
          alt="Fall river fly fishing — Mac Brown Fly Fish"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          fetchPriority="high"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.4) 50%, rgba(10,25,47,0.2) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto", width: "100%", padding: "0 24px 64px" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "hsl(215,55%,65%)", marginBottom: 16, fontWeight: 600 }}>
            Mac Brown Fly Fish · Bryson City, NC
          </p>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 54px)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.5px" }}>
            Mac Brown Fly Fishing Credentials &amp; Certifications
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#BED0E0", maxWidth: 580, margin: "0 0 20px" }}>
            Mac Brown holds the FFI Master Casting Instructor designation — the highest casting certification offered by Fly Fishers International and the only one held in North Carolina. Additional credentials include the FFI Lifetime Achievement Award (2023), the Mel Krieger Award (2021), Field &amp; Stream Angler of the Year (1999), Southern Fly Fishing Hall of Fame inductee (2017), and Director of Teacher Development for FFI Casting Instructor Education.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#BED0E0", maxWidth: 580, margin: 0, fontStyle: "italic" }}>
            Real credentials. Verified by the sport's governing body and national media. A genuine blueprint for your growth as an angler.
          </p>
        </div>
      </div>

      {/* Questions section */}
      <div style={{ background: "#F0EDE4", borderBottom: "1px solid #D8D0C0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px" }}>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#3D3D38", marginBottom: 28, lineHeight: 1.7 }}>
            Before choosing any fly fishing school, ask yourself these questions:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {questions.map((q, i) => (
              <div key={i} style={{ display: "flex", gap: 20, padding: "18px 0", borderBottom: i < questions.length - 1 ? "1px solid #D0C8B8" : "none", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, color: "hsl(215,55%,38%)", fontSize: 15, minWidth: 24, paddingTop: 2 }}>{q.num}</span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#4A4A42" }}>
                  <em style={{ color: "hsl(215,55%,22%)", fontWeight: 400 }}>{q.em}</em>
                  {q.rest && " " + q.rest}
                </p>
              </div>
            ))}
          </div>
          <div style={{ borderLeft: "3px solid hsl(215,55%,38%)", paddingLeft: 24, marginTop: 36, background: "#E8E4D8", padding: "20px 24px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ margin: 0, fontSize: 17, fontStyle: "italic", color: "hsl(215,55%,22%)", lineHeight: 1.7 }}>
              "Nothing will work unless you do."
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 13, color: "#6B6B60", fontFamily: "system-ui, sans-serif", fontStyle: "normal" }}>
              — John Wooden, legendary coach &amp; educator
            </p>
          </div>
          <div style={{ marginTop: 28, border: "1px solid #C8C0AE", borderRadius: 10, padding: "20px 24px", background: "#FAFAF8" }}>
            <p style={{ margin: 0, fontStyle: "italic", fontSize: 15, lineHeight: 1.8, color: "#4A4A42" }}>
              Do these questions help you understand why most larger schools do not list instructor qualifications online — or, more tellingly, who they have helped develop that went on to become world-renowned?
            </p>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ background: "#E8F2F8", border: "1px solid hsl(215,55%,70%)", borderRadius: 8, padding: "12px 16px", marginBottom: 36 }}>
          <p style={{ margin: 0, fontSize: 13, color: "hsl(215,55%,25%)", fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
            Eleven publicly documented honors — awards, editorial roles, governance positions, national show appearances, a Hall of Fame, a named podcast, and active leadership of how the sport's instructors learn to teach.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {credentials.map((c) => {
            const open = expanded[c.id];
            return (
              <Fragment key={c.id}>
              <div
                style={{
                  background: "#FFFFFF",
                  border: c.featured ? "2px solid hsl(215,55%,38%)" : "1px solid #D8D0C4",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggle(c.id)}
                  style={{
                    width: "100%", textAlign: "left", background: "none", border: "none",
                    padding: "20px 24px", cursor: "pointer", display: "flex",
                    alignItems: "flex-start", gap: 16,
                  }}
                >
                  <div style={{ height: 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {c.logo ? (
                      <img
                        src={img(`/images/org-logos/${c.logo}`)}
                        alt={logoAlt[c.logo] ?? c.logo}
                        style={{ maxHeight: 36, maxWidth: 120, width: "auto", height: "auto", objectFit: "contain", filter: logoFilter[c.logo] }}
                      />
                    ) : (
                      <span style={{ fontSize: 22 }}>{c.icon}</span>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "hsl(215,55%,22%)", lineHeight: 1.4, fontFamily: "system-ui, sans-serif" }}>
                        {c.title}
                      </p>
                      <span style={{
                        fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 6,
                        background: c.badgeBg, color: c.badgeColor, whiteSpace: "nowrap" as const,
                        fontFamily: "system-ui, sans-serif", flexShrink: 0,
                      }}>
                        {c.year}
                      </span>
                    </div>
                    <p style={{ margin: "4px 0 0", fontSize: 13, color: "#6B6B60", fontFamily: "system-ui, sans-serif" }}>
                      {c.org}
                    </p>
                  </div>
                  <span style={{ color: "hsl(215,55%,38%)", fontSize: 18, flexShrink: 0, marginTop: 2, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)", fontFamily: "system-ui, sans-serif" }}>
                    ▾
                  </span>
                </button>

                {c.links.length > 0 && (
                  <div style={{ padding: "0 24px 14px", display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                    {c.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          fontSize: 12, color: "hsl(215,55%,32%)", textDecoration: "none",
                          border: "1px solid hsl(215,55%,55%)", borderRadius: 6, padding: "4px 11px",
                          fontFamily: "system-ui, sans-serif", background: "#F0F7FB",
                        }}
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}

                {open && (
                  <div style={{ padding: "0 24px 24px", borderTop: "1px solid #F0ECE4" }}>
                    <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4A4A42", marginTop: 16, marginBottom: c.peers || c.pills || c.pills2 ? 16 : 0 }}>
                      {c.body}
                    </p>
                    {c.peers && (
                      <div style={{ background: "#F5F2EA", borderRadius: 8, padding: "14px 18px" }}>
                        <p style={{ margin: "0 0 6px", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#7A7A6E", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
                          {c.peers.label}
                        </p>
                        <p style={{ margin: 0, fontSize: 13, color: "#4A4A42", lineHeight: 1.9, fontFamily: "system-ui, sans-serif" }}>
                          {c.peers.names}
                        </p>
                      </div>
                    )}
                    {c.pills && (
                      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginTop: 12 }}>
                        {c.pills.map((p) => (
                          <span key={p} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "#E8F2F8", color: "hsl(215,55%,25%)", border: "1px solid hsl(215,55%,70%)", fontFamily: "system-ui, sans-serif" }}>{p}</span>
                        ))}
                      </div>
                    )}
                    {c.pills2 && (
                      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginTop: 12 }}>
                        {c.pills2.map((p) => (
                          <span key={p} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "#EEF2FF", color: "#3730A3", border: "1px solid #C7D2FE", fontFamily: "system-ui, sans-serif" }}>{p}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {c.id === 5 && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "linear-gradient(135deg, #FEF9C3 0%, #FEF3C7 100%)",
                  border: "1px solid #FDE68A", borderRadius: 10, padding: "14px 20px",
                  marginTop: 0,
                }}>
                  <img
                    src={img("/images/org-logos/owaa.webp")}
                    alt="Outdoor Writers Association of America"
                    style={{ width: 40, height: 40, flexShrink: 0, objectFit: "contain" }}
                  />
                  <p style={{ margin: 0, fontSize: 13, color: "#78350F", fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
                    <strong>Award-Winning Podcast</strong> — <em>The Articulate Fly</em> was recognized by the{" "}
                    <a
                      href="https://owaa.org/2025-eic-award-winners/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#92400E", textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      Outdoor Writers Association of America (OWAA)
                    </a>{" "}
                    — the premier honor in outdoor media.
                  </p>
                </div>
              )}
              </Fragment>
            );
          })}
        </div>

        {/* Bottom credentials grid */}
        <div style={{ marginTop: 60 }}>
          <div style={{ borderTop: "1px solid #D8D0C4", paddingTop: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 400, marginBottom: 8, color: "hsl(215,55%,22%)" }}>
              Why certifications and qualifications matter
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A4A42", marginBottom: 36, maxWidth: 600 }}>
              Certifications are not participation trophies. They represent tested, peer-reviewed mastery — of casting mechanics, the art of teaching, and a lifelong commitment to the growth of the sport.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
              {bottomCreds.map((bc) => (
                <div key={bc.title} style={{ background: "#FFFFFF", border: "1px solid #D8D0C4", borderRadius: 10, padding: "18px 16px" }}>
                  {"logo" in bc && bc.logo ? (
                    <div style={{ height: 30, marginBottom: 10, display: "flex", alignItems: "center" }}>
                      <img src={img(`/images/org-logos/${bc.logo}`)} alt={logoAlt[bc.logo] ?? bc.logo} style={{ maxHeight: 30, maxWidth: 80, width: "auto", height: "auto", objectFit: "contain", filter: logoFilter[bc.logo] }} />
                    </div>
                  ) : (
                    <div style={{ fontSize: 22, marginBottom: 10 }}>{bc.icon}</div>
                  )}
                  {bc.sub && (
                    <span style={{ display: "inline-block", fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: "#E8F2F8", color: "hsl(215,55%,25%)", marginBottom: 6, fontFamily: "system-ui, sans-serif", letterSpacing: "0.04em" }}>
                      {bc.sub}
                    </span>
                  )}
                  <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 600, color: "hsl(215,55%,22%)", fontFamily: "system-ui, sans-serif", lineHeight: 1.4 }}>{bc.title}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#6B6B60", fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>{bc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FaqSection items={certificationsFaqs} />

        {/* Conservation */}
        <div style={{ marginTop: 56, borderTop: "1px solid #D8D0C4", paddingTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 400, marginBottom: 8, color: "hsl(215,55%,22%)" }}>
            Support conservation. Advocate for your rivers.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "#4A4A42", marginBottom: 32, maxWidth: 620 }}>
            Great fishing depends on healthy water. As a river monitor with <em>Science on the Fly</em> and an active member of the organizations below, Mac is committed to protecting the fisheries that make this sport possible.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            {[
              { name: "Science on the Fly", role: "River Monitor", href: "https://www.scienceonthefly.com", color: "#166534", bg: "#DCFCE7" },
              { name: "Trout Unlimited", role: "Member", href: "https://www.tu.org", color: "#7C2D12", bg: "#FEF3C7" },
              { name: "American Rivers", role: "Member", href: "https://www.americanrivers.org", color: "#1E3A8A", bg: "#DBEAFE" },
              { name: "Fly Fishers International", role: "Active Leader", href: "https://www.flyfishersinternational.org", color: "#0F766E", bg: "#CCFBF1" },
              { name: "Theodore Roosevelt Conservation Partnership", role: "Member", href: "https://www.trcp.org", color: "#92400E", bg: "#FEF3C7" },
              { name: "Sierra Club", role: "Member", href: "https://www.sierraclub.org", color: "#166534", bg: "#DCFCE7" },
            ].map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#FFFFFF", border: "1px solid #D8D0C4", borderRadius: 10, padding: "16px", textDecoration: "none", display: "block" }}
              >
                <span style={{ display: "inline-block", fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: org.bg, color: org.color, marginBottom: 8, fontFamily: "system-ui, sans-serif", letterSpacing: "0.04em" }}>
                  {org.role}
                </span>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "hsl(215,55%,22%)", fontFamily: "system-ui, sans-serif" }}>{org.name} ↗</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
