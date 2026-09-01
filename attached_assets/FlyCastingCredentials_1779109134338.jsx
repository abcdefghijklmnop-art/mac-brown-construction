import { useState } from "react";

const credentials = [
  {
    id: 1,
    icon: "🏆",
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
    title: "Director of Teacher Development — FFI Casting Instructor Education",
    year: "Active",
    badgeColor: "#991B1B",
    badgeBg: "#FEE2E2",
    org: "Fly Fishers International, Fly Casting Education Program",
    body: "Leads Teacher Development Training Programs for FFI — responsible for how the sport's next generation of certified instructors learns to teach. Every method and standard a new instructor carries into the field passes through this program. The difference between someone who can cast and someone who can teach casting.",
    links: [
      { label: "Verify on FFI.org", href: "https://www.flyfishersinternational.org/Get-Involved/Fly-Casting-Education-Program/FFI-Fly-Casting-Education-Team" },
    ],
  },
  {
    id: 3,
    icon: "✏️",
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
    title: "Featured Expert — The Fly Fishing Show",
    year: "Since founding",
    badgeColor: "#374151",
    badgeBg: "#F3F4F6",
    org: "World's largest consumer fly fishing event series",
    body: "Featured at The Fly Fishing Show since its inception — teaching casting classes, demos, fly tying, and seminars nationally. The day before each show, Mac and Gary Borger co-teach an all-day Advanced Fly Casting Class together across America.",
    pills: ["Georgia", "Massachusetts", "New Jersey", "Colorado", "California", "Pennsylvania"],
    links: [
      { label: "Visit flyfishingshow.com", href: "https://flyfishingshow.com/" },
    ],
  },
  {
    id: 5,
    icon: "🎙️",
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
  { icon: "🎖️", title: "Master Casting Instructor (MCI)", sub: "First in North Carolina", desc: "FFI's highest single-hand casting certification" },
  { icon: "📚", title: "Author — Casting Angles", desc: "Endorsed by FFI, ACA & others as an instructor reference handbook" },
  { icon: "🎓", title: "Associate Professor, WCU", desc: "Founded the Fly Fishing Program at Western Carolina University (1994–98)" },
  { icon: "🇺🇸", title: "Team USA Coaching", desc: "Coached Fly Fishing Team USA Youth to multiple World Championships" },
];

const questions = [
  { num: "1", em: "Proven over popular.", rest: "Does the school's reputation rest on documented results, or simply on social media presence?" },
  { num: "2", em: "Real educational content over entertainment.", rest: "Are you looking for structured learning — or just someone who is Instafamous?" },
  { num: "3", em: "Are you a lifelong learner who values your time?", rest: "" },
  { num: "4", em: "Most people have a quality discernment issue.", rest: "Research diligently for instructors who provide a blueprint for continued growth — with student handouts and structured lesson plans." },
];

export default function FlyCastingCredentials() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#FAFAF8", minHeight: "100vh", color: "#1a1a18" }}>

      {/* Hero */}
      <div style={{ background: "#1C2B1A", color: "#F5F0E8", padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A9E76", marginBottom: 16, fontWeight: 600 }}>
            Mac Brown Fly Fish · Bryson City, NC
          </p>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 54px)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.5px" }}>
            Fly Casting<br />
            <span style={{ color: "#8FB88A", fontStyle: "italic" }}>Credentials</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#C8D4C0", maxWidth: 580, margin: 0, fontStyle: "italic" }}>
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
                <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, color: "#4A7A46", fontSize: 15, minWidth: 24, paddingTop: 2 }}>{q.num}</span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "#4A4A42" }}>
                  <em style={{ color: "#1C2B1A", fontWeight: 400 }}>{q.em}</em>
                  {q.rest && " " + q.rest}
                </p>
              </div>
            ))}
          </div>

          {/* Blockquote */}
          <div style={{ borderLeft: "3px solid #4A7A46", paddingLeft: 24, marginTop: 36, background: "#E8E4D8", padding: "20px 24px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ margin: 0, fontSize: 17, fontStyle: "italic", color: "#1C2B1A", lineHeight: 1.7 }}>
              "Nothing will work unless you do."
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 13, color: "#6B6B60", fontFamily: "system-ui, sans-serif", fontStyle: "normal" }}>
              — John Wooden, legendary coach & educator
            </p>
          </div>

          {/* Conclusion box */}
          <div style={{ marginTop: 28, border: "1px solid #C8C0AE", borderRadius: 10, padding: "20px 24px", background: "#FAFAF8" }}>
            <p style={{ margin: 0, fontStyle: "italic", fontSize: 15, lineHeight: 1.8, color: "#4A4A42" }}>
              Do these questions help you understand why most larger schools do not list instructor qualifications online — or, more tellingly, who they have helped develop that went on to become world-renowned?
            </p>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#E8F4E4", border: "1px solid #A8CCA4", borderRadius: 8, padding: "12px 16px", marginBottom: 36 }}>
          <span style={{ fontSize: 16 }}>⭐</span>
          <p style={{ margin: 0, fontSize: 13, color: "#1C4A18", fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
            Eleven publicly documented honors — awards, editorial roles, governance positions, national show appearances, a Hall of Fame, a named podcast, and active leadership of how the sport's instructors learn to teach.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {credentials.map((c) => {
            const open = expanded[c.id];
            return (
              <div
                key={c.id}
                style={{
                  background: "#FFFFFF",
                  border: c.featured ? "2px solid #4A7A46" : "1px solid #D8D0C4",
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "box-shadow 0.2s",
                }}
              >
                {/* Card header — always visible, clickable */}
                <button
                  onClick={() => toggle(c.id)}
                  style={{
                    width: "100%", textAlign: "left", background: "none", border: "none",
                    padding: "20px 24px", cursor: "pointer", display: "flex",
                    alignItems: "flex-start", gap: 16,
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#1C2B1A", lineHeight: 1.4, fontFamily: "system-ui, sans-serif" }}>
                        {c.title}
                      </p>
                      <span style={{
                        fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 6,
                        background: c.badgeBg, color: c.badgeColor, whiteSpace: "nowrap",
                        fontFamily: "system-ui, sans-serif", flexShrink: 0,
                      }}>
                        {c.year}
                      </span>
                    </div>
                    <p style={{ margin: "4px 0 0", fontSize: 13, color: "#6B6B60", fontFamily: "system-ui, sans-serif" }}>
                      {c.org}
                    </p>
                  </div>
                  <span style={{ color: "#4A7A46", fontSize: 18, flexShrink: 0, marginTop: 2, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)", fontFamily: "system-ui, sans-serif" }}>
                    ▾
                  </span>
                </button>

                {/* Expandable body */}
                {open && (
                  <div style={{ padding: "0 24px 24px", borderTop: "1px solid #F0ECE4" }}>
                    <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4A4A42", marginTop: 16, marginBottom: c.peers || c.pills || c.pills2 ? 16 : 0 }}>
                      {c.body}
                    </p>
                    {c.peers && (
                      <div style={{ background: "#F5F2EA", borderRadius: 8, padding: "14px 18px" }}>
                        <p style={{ margin: "0 0 6px", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A7A6E", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
                          {c.peers.label}
                        </p>
                        <p style={{ margin: 0, fontSize: 13, color: "#4A4A42", lineHeight: 1.9, fontFamily: "system-ui, sans-serif" }}>
                          {c.peers.names}
                        </p>
                      </div>
                    )}
                    {c.pills && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                        {c.pills.map((p) => (
                          <span key={p} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "#E8F4E4", color: "#1C4A18", border: "1px solid #A8CCA4", fontFamily: "system-ui, sans-serif" }}>{p}</span>
                        ))}
                      </div>
                    )}
                    {c.pills2 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                        {c.pills2.map((p) => (
                          <span key={p} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "#EEF2FF", color: "#3730A3", border: "1px solid #C7D2FE", fontFamily: "system-ui, sans-serif" }}>{p}</span>
                        ))}
                      </div>
                    )}
                    {c.links.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                        {c.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex", alignItems: "center", gap: 6,
                              fontSize: 13, color: "#2D6E29", textDecoration: "none",
                              border: "1px solid #7ABD76", borderRadius: 6, padding: "5px 12px",
                              fontFamily: "system-ui, sans-serif", background: "#F0FBF0",
                            }}
                          >
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom credentials grid */}
        <div style={{ marginTop: 60 }}>
          <div style={{ borderTop: "1px solid #D8D0C4", paddingTop: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 400, marginBottom: 8, color: "#1C2B1A" }}>
              Why certifications and qualifications matter
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A4A42", marginBottom: 36, maxWidth: 600 }}>
              Certifications are not participation trophies. They represent tested, peer-reviewed mastery — of casting mechanics, the art of teaching, and a lifelong commitment to the growth of the sport. Real tasks. Real goals. Real results.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
              {bottomCreds.map((bc) => (
                <div key={bc.title} style={{ background: "#FFFFFF", border: "1px solid #D8D0C4", borderRadius: 10, padding: "18px 16px" }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{bc.icon}</div>
                  {bc.sub && (
                    <span style={{ display: "inline-block", fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: "#E8F4E4", color: "#1C4A18", marginBottom: 6, fontFamily: "system-ui, sans-serif", letterSpacing: "0.04em" }}>
                      {bc.sub}
                    </span>
                  )}
                  <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 600, color: "#1C2B1A", fontFamily: "system-ui, sans-serif", lineHeight: 1.4 }}>{bc.title}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#6B6B60", fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>{bc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 56, background: "#1C2B1A", borderRadius: 14, padding: "44px 36px", textAlign: "center", color: "#F5F0E8" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A9E76", marginBottom: 14, fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            Ready to learn from the best?
          </p>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 400, margin: "0 0 16px", letterSpacing: "-0.3px" }}>
            Book a school or guided trip
          </h2>
          <p style={{ fontSize: 15, color: "#C8D4C0", margin: "0 0 28px", lineHeight: 1.7, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
            Over 35 years of guiding, teaching, and shaping the sport from Bryson City, NC.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block", background: "#4A7A46", color: "#FFFFFF",
              padding: "14px 32px", borderRadius: 8, textDecoration: "none",
              fontSize: 15, fontFamily: "system-ui, sans-serif", fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Get in touch →
          </a>
        </div>

      </div>
    </div>
  );
}
