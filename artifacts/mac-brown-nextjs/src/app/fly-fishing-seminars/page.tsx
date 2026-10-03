import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/faq-section";
import { SchemaScript } from "@/components/schema-script";
import { faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Seminars & Presentations — Bryson City, NC" },
  description: "Book Mac Brown for a fly fishing seminar, club presentation, or educational event. Topics include casting, entomology, tactics, and guide school preparation.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-fishing-seminars/" },
  openGraph: {
    title: "Fly Fishing Seminars & Presentations | Mac Brown Fly Fish",
    description: "Book Mac Brown for a fly fishing seminar, club presentation, or educational event.",
    url: "https://macbrownflyfish.com/fly-fishing-seminars/",
  },
};

const castingDemos = [
  "Back to Basics 101 for New Fly Fishers",
  "Rod Craft Efficiency",
  "Increase Your Distance",
  "Perfecting Drift & Presentation w/ Aerial Mends",
  "Loop Control for More Efficient Casts",
  "Roll Casts for Change of Direction",
  "Line Hand Duties for Fishing & Casting",
];

const classroomSeminars = [
  "Streamer Methods for Better Quality Fish",
  "Art of the Dry Fly & Line Control",
  "Master Nymph Fishing Tactics",
  "Understanding Fish Behavior",
  "The Wonder & Magic of Wet Fly Fishing",
  "The 5 Core Components of Fly Fishing",
  "What Conditions & Observations Tell Us",
  "Strategies for Matching Equipment to Conditions",
  "Improve Your Presentations",
];

const flyTyingDemos = [
  "Creating Simple Wet Fly Flies",
  "Speed Patterns & Fly Tying",
];

const paidClasses = [
  { icon: "↗", title: "Increase Your Distance", desc: "Loop control, leverage & grip, double haul, shooting line, and trajectory. All skill levels." },
  { icon: "◆", title: "Euro-Nymphing Evolution", desc: "Competition techniques, rigging, water-type strategies, and line control from World Champions." },
  { icon: "~", title: "Drift & Presentation w/ Aerial Mends", desc: "Curves, piles, tuck casts — four components for longer drifts and better presentations." },
  { icon: "↺", title: "Roll Casts for Direction Change", desc: "Multiple methods, tight-cover techniques, and the roll cast as a cornerstone skill." },
  { icon: "◇", title: "Lines, Leaders & Rigging", desc: "Knots, leader formulas, dropper rigs, and gear choices that save time and money on the water." },
  { icon: "◎", title: "Reading Water for Finding Fish", desc: "Hydrodynamics, observation skills, and where fish move hourly, daily, and seasonally." },
  { icon: "∞", title: "Loop Control for Efficient Casts", desc: "Gear, trajectory, pause, power, and path — understand \"less is more\" for smoother deliveries." },
  { icon: "▷", title: "Presentation Fly Casting for Fishing", desc: "Curve casts, tuck casts, slack-line casts, and a casting game plan. All levels." },
];

const seminarFaqs = [
  {
    q: "What types of fly fishing presentations does Mac Brown offer?",
    a: "Mac Brown offers three distinct program tracks: live casting demonstrations on the water, classroom seminars covering entomology, tactics, reading water, and fishing strategy, and fly tying demonstrations at the vise. Programs can be mixed and matched for a full day, an evening program, or a multi-session club event.",
  },
  {
    q: "What topics does Mac Brown cover in his fly fishing seminars?",
    a: "Seminar topics include fly casting mechanics and diagnosis, reading water, entomology and hatch matching, nymphing and dry fly tactics, streamer fishing, Spey and switch rod casting, guide school preparation, conservation, and teaching methodology. Programs are fully customizable to the group's interest and skill level.",
  },
  {
    q: "Does Mac Brown present at The Fly Fishing Show?",
    a: "Yes. Mac Brown has been one of the most consistent presenters at The Fly Fishing Show for many years — delivering over 50 presentations annually across national venues. He is one of the longest-running presenters at the show and draws audiences from beginner to advanced.",
  },
  {
    q: "How can I book Mac Brown for a club or group presentation?",
    a: "Use the contact form on this site to reach Mac directly. Download the Presentation Speaking Contract on this page to confirm program details, fees, and logistics for your event. Complete and sign two copies — return both to Mac, who will countersign and send one back for your records.",
  },
  {
    q: "What is included in a Mac Brown fly fishing seminar or presentation?",
    a: "Mac brings his own content and presentation materials. Programs are fully customizable to your group's size, interest, and skill level. Mac is available for evening club programs, full-day casting clinics, multi-session events, and national shows. Contact Mac directly to discuss your event's goals and logistics.",
  },
  {
    q: "Does Mac Brown travel for fly fishing club presentations and shows?",
    a: "Yes — Mac is available nationwide. He has traveled to present at fly fishing clubs, Trout Unlimited chapters, and national Fly Fishing Shows across the country for nearly four decades. Contact him directly to discuss travel dates and logistics for your event.",
  },
  {
    q: "How far in advance should we book Mac Brown for a seminar or club presentation?",
    a: "Show season (January through March) books up quickly — reach out at least 3–6 months in advance for national show dates. Club programs and TU chapter events outside of show season have more scheduling flexibility; 4–8 weeks is typically sufficient for local events, though earlier is always better.",
  },
  {
    q: "What does a club or show organizer need to provide for a Mac Brown presentation?",
    a: "For indoor classroom seminars: a projector or screen setup, chairs for the audience, and a table for Mac's materials. For outdoor casting demos: access to a suitable pond or open water area. Mac brings all of his own presentation content, rods, and demonstration materials. Full A/V and setup requirements can be confirmed when you download and return the Presentation Speaking Contract on this page.",
  },
];

export default function FlyFishingSeminars() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#faf8f3", color: "#1c1c1c", lineHeight: 1.7, minHeight: "100vh" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "88px 28px 48px" }}>

        {/* HERO */}
        <div style={{ borderBottom: "1px solid #e0ddd5", paddingBottom: "24px", marginBottom: "24px", display: "flex", gap: "40px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#c8a84b", marginBottom: "8px" }}>National Fly Fishing Presentations</p>
            <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", lineHeight: 1.2, color: "#1a4a2e", marginBottom: "12px" }}>
              Fly Fishing Seminars &amp; Club Presentations — Mac Brown
            </h1>
            <p style={{ fontSize: "14px", color: "#555", maxWidth: "640px", marginBottom: "16px", lineHeight: 1.8 }}>
              Mac Brown has been presenting fly fishing seminars, casting clinics, and club programs nationally since 1987 — one of the longest-running presenters at The Fly Fishing Show. Programs are fully customizable for fly fishing clubs, TU chapters, and groups of any size, covering casting mechanics, reading water, entomology, stream tactics, and conservation. Available nationwide.
            </p>
            <p style={{ fontSize: "13px", color: "#444", maxWidth: "640px", marginBottom: "20px", lineHeight: 1.8 }}>
              Since 1987, Mac Brown has brought his honest, no-frills approach to fly fishing education to clubs and shows across the country. A fixture at the national Fly Fishing Shows each winter, Mac delivers over 50 presentations annually — drawing from 55+ years of hands-on experience on the water and at the vise.
            </p>
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[["55+", "Years on the water"], ["50+", "Presentations per year"], ["1987", "On the lecture circuit since"], ["16+", "Years coaching Team USA Youth"]].map(([num, label]) => (
                <div key={label}>
                  <span style={{ fontSize: "1.9rem", fontWeight: "bold", color: "#1a4a2e", display: "block", lineHeight: 1 }}>{num}</span>
                  <div style={{ width: "24px", height: "2px", background: "#c8a84b", margin: "5px 0 4px" }} />
                  <span style={{ fontSize: "9px", color: "#888" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src={img("/images/mac-brown-seminars-portrait.webp")}
              alt="Mac Brown — Fly Fishing Presenter and Instructor, Bryson City NC"
              style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%", border: "4px solid #e0ddd5", display: "block" }}
            />
          </div>
        </div>

        {/* PULL QUOTE */}
        <blockquote style={{ borderLeft: "3px solid #c8a84b", padding: "4px 0 4px 18px", margin: "0 0 32px" }}>
          <p style={{ fontStyle: "italic", fontSize: "14px", lineHeight: 1.65, color: "#222" }}>
            "Mac brings an honest, humorous, and highly motivational zest to every presentation — approachable for the first-time fly fisher, and still eye-opening for the most experienced angler."
          </p>
          <cite style={{ display: "block", fontSize: "9px", color: "#888", marginTop: "6px", letterSpacing: "0.07em", textTransform: "uppercase", fontStyle: "normal" }}>
            Mac Brown Fly Fish · Est. 1987 · Bryson City, NC
          </cite>
        </blockquote>

        {/* THREE PROGRAM TRACKS */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "8.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", borderBottom: "1px solid #e0ddd5", paddingBottom: "5px", marginBottom: "12px" }}>For Your Fly Fishing Club or Show</p>
          <p style={{ fontSize: "12px", color: "#444", marginBottom: "20px", lineHeight: 1.8, maxWidth: "700px" }}>
            Mac offers three distinct program tracks — casting clinics on the water, classroom seminars, and fly tying demos at the vise. Mix and match to build a full day, an evening program, or a multi-session club event tailored to your group's interests and skill levels.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>

            {/* Casting Demos */}
            <div>
              <p style={{ fontSize: "8.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e6b44", borderBottom: "1px solid #e0ddd5", paddingBottom: "5px", marginBottom: "10px" }}>Casting Demos · Pond or Open Water</p>
              {castingDemos.map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "6px 10px", background: "#fff", border: "1px solid #e8e4da", borderRadius: "6px", marginBottom: "5px", fontSize: "11px", lineHeight: 1.4 }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c8a84b", marginTop: "5px", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            {/* Classroom Seminars */}
            <div>
              <p style={{ fontSize: "8.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e6b44", borderBottom: "1px solid #e0ddd5", paddingBottom: "5px", marginBottom: "10px" }}>Classroom Seminars · 45–50 Min</p>
              {classroomSeminars.map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "6px 10px", background: "#fff", border: "1px solid #e8e4da", borderRadius: "6px", marginBottom: "5px", fontSize: "11px", lineHeight: 1.4 }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c8a84b", marginTop: "5px", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            {/* Fly Tying */}
            <div>
              <p style={{ fontSize: "8.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e6b44", borderBottom: "1px solid #e0ddd5", paddingBottom: "5px", marginBottom: "10px" }}>Fly Tying Demos · At the Vise</p>
              {flyTyingDemos.map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "6px 10px", background: "#fff", border: "1px solid #e8e4da", borderRadius: "6px", marginBottom: "5px", fontSize: "11px", lineHeight: 1.4 }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c8a84b", marginTop: "5px", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
              <div style={{ marginTop: "10px", background: "#1a4a2e", borderRadius: "8px", padding: "12px 14px" }}>
                <p style={{ fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8a84b", marginBottom: "5px" }}>About the Demos</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>
                  Mac's fly tying demos are a mainstay on the national show circuit — fast, practical, and fishable. Learn to tie effective wet fly patterns and impressionistic speed ties covering a broad range of aquatic insects. These patterns work throughout the water column and travel well in any fly box.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* PAID CLASSES */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "8.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", borderBottom: "1px solid #e0ddd5", paddingBottom: "5px", marginBottom: "16px" }}>2.5-Hour Paid Classes · Most Popular Offerings</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {paidClasses.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #e8e4da", borderRadius: "10px", padding: "12px 14px" }}>
                <span style={{ fontSize: "14px", color: "#2e6b44", display: "block", marginBottom: "6px" }}>{icon}</span>
                <p style={{ fontSize: "12px", fontWeight: "bold", color: "#1a4a2e", marginBottom: "4px", lineHeight: 1.3 }}>{title}</p>
                <p style={{ fontSize: "10.5px", color: "#777", lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRESENTATION CONTRACT */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "8.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", borderBottom: "1px solid #e0ddd5", paddingBottom: "5px", marginBottom: "16px" }}>Presentation Speaking Contract</p>
          <p style={{ fontSize: "12px", color: "#444", lineHeight: 1.7, maxWidth: "700px", marginBottom: "16px" }}>
            Download the Presentation Speaking Contract to confirm program details, fees, and logistics for your event. Complete and sign two copies — return both to Mac, who will countersign and send one back for your records.
          </p>
          <div style={{ background: "#fff", border: "1px solid #e0ddd5", borderRadius: "8px", padding: "20px 24px", display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "48px", height: "60px", background: "#f5f0e8", border: "1px solid #e0ddd5", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "20px" }}>📄</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "13px", fontWeight: "bold", color: "#1a4a2e", marginBottom: "3px" }}>Presentation Speaking Contract</p>
              <p style={{ fontSize: "11px", color: "#888" }}>Mac Brown Fly Fish · PDF · 1 page</p>
            </div>
            <a
              href="/mac-brown-presentation-contract.pdf"
              download
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1a4a2e", color: "#fff", fontFamily: "Georgia, serif", fontSize: "11px", fontWeight: "bold", padding: "10px 20px", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.05em" }}
            >
              ↓ Download PDF
            </a>
            <a
              href="/mac-brown-presentation-contract.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#1a4a2e", fontFamily: "Georgia, serif", fontSize: "11px", fontWeight: "bold", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", border: "1px solid #1a4a2e", whiteSpace: "nowrap", letterSpacing: "0.05em" }}
            >
              ↗ View PDF
            </a>
          </div>
        </div>

        <SchemaScript schema={faqPageSchema(seminarFaqs)} />
        <FaqSection items={seminarFaqs} />

        {/* CTA */}
        <div style={{ background: "#1a4a2e", borderRadius: "10px", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <Link href="/contact" style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginBottom: "4px", display: "block", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: "rgba(255,255,255,0.4)" }}>Book Mac for your club or show</Link>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>Use the Presentation Speaking Contract to structure your event and confirm all details.</p>
          </div>
          <div style={{ textAlign: "right", fontSize: "12px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
            Mac Brown Fly Fish<br />
            <a href="tel:8287361469" style={{ color: "#c8a84b", textDecoration: "none" }}>828-736-1469</a><br />
            Bryson City, NC
          </div>
        </div>

      </div>
    </div>
  );
}
