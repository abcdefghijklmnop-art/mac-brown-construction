import type { Metadata } from "next";
import Link from "next/link";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "New to Fly Fishing? Start Here — Bryson City Guide School" },
  description:
    "New to fly fishing? Start right. The Guide School gives beginners the same foundation used by world-champion anglers. No guesswork — Bryson City, NC.",
  alternates: { canonical: "https://flyfishingguideschool.com/new-to-fly-fishing/" },
  openGraph: {
    title: "New to Fly Fishing? Start Here — Bryson City Guide School",
    description: "New to fly fishing? Start right. The Guide School gives beginners the same foundation used by world-champion anglers. No guesswork — Bryson City, NC.",
    url: "https://flyfishingguideschool.com/new-to-fly-fishing/",
    images: [{ url: "/images/youth-brown-mountain.webp", width: 1920, height: 1280, alt: "Young angler with a brown trout — Fly Fishing Guide School, Bryson City, NC" }],
  },
  twitter: { card: "summary_large_image" },
};

const blue = "#185FA5";
const styles = `
  .pg { font-family: Georgia, serif; color: #1a1a1a; background: #fff; font-size: 17px; line-height: 1.75; max-width: 960px; margin: 0 auto; padding: 0 2rem; }
  .pg section { padding: 4rem 0; }
  .pg section + section { border-top: 1px solid #dde5ef; }
  .eyebrow { font-family: system-ui, sans-serif; font-size: .72rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: ${blue}; margin-bottom: 1rem; }
  .pg h1 { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 700; line-height: 1.15; margin: 0 0 1.25rem; }
  .pg h1 em { font-style: italic; color: ${blue}; }
  .pg h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; line-height: 1.2; margin: 0 0 1.1rem; }
  .hero-sub { font-size: 1.05rem; color: #555; line-height: 1.8; margin-bottom: 2rem; }
  .btn-row { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-p { font-family: system-ui, sans-serif; font-size: .9rem; font-weight: 600; background: ${blue}; color: #fff; padding: .8rem 1.75rem; border-radius: 6px; text-decoration: none; cursor: pointer; border: none; display: inline-block; }
  .btn-p:hover { background: #0C447C; }
  .btn-s { font-family: system-ui, sans-serif; font-size: .9rem; background: transparent; color: #555; border: 1px solid #dde5ef; padding: .8rem 1.75rem; border-radius: 6px; text-decoration: none; display: inline-block; }
  .btn-s:hover { border-color: ${blue}; color: ${blue}; }
  .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
  .stat-panel { background: #f7f9fc; border: 1px solid #dde5ef; border-radius: 16px; padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem; }
  .stat-num { font-size: 3.5rem; font-weight: 700; line-height: 1; color: ${blue}; }
  .stat-lbl { font-family: system-ui, sans-serif; font-size: .78rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #0C447C; }
  .stat-desc { font-style: italic; font-size: 1rem; color: #1a1a1a; line-height: 1.6; }
  .stat-sub { font-family: system-ui, sans-serif; font-size: .82rem; color: #888; line-height: 1.6; }
  .hooks-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  .hook-card { background: #eef4fa; border: 1px solid #dde5ef; border-radius: 12px; padding: 1.25rem; }
  .hook-lbl { font-family: system-ui, sans-serif; font-size: .68rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: .5rem; }
  .hook-txt { font-style: italic; font-size: 1rem; line-height: 1.5; color: #0C447C; }
  .hook-center { background: #f7f9fc; border-left: 4px solid ${blue}; border-radius: 0 12px 12px 0; padding: 1.5rem 2rem; margin: 1rem 0; }
  .hook-center p { font-style: italic; font-size: 1.25rem; line-height: 1.5; margin: 0; }
  .stat-banner { background: ${blue}; border-radius: 16px; display: flex; align-items: stretch; overflow: hidden; margin: 2rem 0; }
  .sbn { background: #0C447C; padding: 1.75rem 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 130px; flex-shrink: 0; }
  .sbn-big { font-size: 3rem; font-weight: 700; color: #fff; line-height: 1; }
  .sbn-lbl { font-family: system-ui, sans-serif; font-size: .62rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #B5D4F4; margin-top: .35rem; }
  .sbb { padding: 1.75rem 2rem; display: flex; flex-direction: column; justify-content: center; gap: .5rem; }
  .sbb-q { font-style: italic; font-size: 1.1rem; color: #fff; line-height: 1.5; margin: 0; }
  .sbb-s { font-family: system-ui, sans-serif; font-size: .83rem; color: #B5D4F4; line-height: 1.6; margin: 0; }
  .bp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #dde5ef; border: 1px solid #dde5ef; border-radius: 12px; overflow: hidden; margin: 1.5rem 0; }
  .bp-step { background: #eef4fa; padding: 1.5rem 1.1rem; }
  .bp-num { font-size: 2.25rem; font-weight: 700; color: ${blue}; line-height: 1; margin-bottom: .5rem; }
  .bp-title { font-family: system-ui, sans-serif; font-size: .83rem; font-weight: 600; color: #0C447C; margin-bottom: .35rem; }
  .bp-desc { font-family: system-ui, sans-serif; font-size: .78rem; color: #555; line-height: 1.5; }
  .body-txt { font-size: 1rem; color: #555; line-height: 1.8; margin-bottom: 1.25rem; }
  .check-list { list-style: none; display: flex; flex-direction: column; gap: .75rem; margin: 1.25rem 0; padding: 0; }
  .check-list li { display: flex; gap: .75rem; align-items: flex-start; font-size: .98rem; color: #555; }
  .check-arrow { color: ${blue}; font-family: system-ui, sans-serif; font-weight: 700; flex-shrink: 0; }
  .cmp-wrap { border: 1px solid #dde5ef; border-radius: 12px; overflow: hidden; margin: 1.5rem 0; }
  .cmp { width: 100%; border-collapse: collapse; font-family: system-ui, sans-serif; font-size: .88rem; }
  .cmp th { padding: .9rem 1.1rem; text-align: left; font-size: .72rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
  .th-bad { background: #f7f9fc; color: #888; }
  .th-good { background: ${blue}; color: #E6F1FB; }
  .cmp td { padding: .8rem 1.1rem; vertical-align: top; line-height: 1.5; border-top: 1px solid #dde5ef; }
  .td-bad { color: #555; background: #fff; }
  .td-good { color: #0C447C; background: #f0f6fc; font-weight: 500; }
  .prog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.1rem; margin-top: 1.5rem; }
  .prog-card { border: 1px solid #dde5ef; border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: .65rem; }
  .prog-goal { font-family: system-ui, sans-serif; font-size: .72rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: ${blue}; }
  .prog-title { font-family: system-ui, sans-serif; font-size: .93rem; font-weight: 600; color: #1a1a1a; }
  .prog-desc { font-family: system-ui, sans-serif; font-size: .82rem; color: #555; line-height: 1.6; flex: 1; }
  .prog-link { font-family: system-ui, sans-serif; font-size: .82rem; font-weight: 600; color: ${blue}; text-decoration: none; }
  .cta-band { background: #f7f9fc; border-radius: 16px; padding: 3.5rem 3rem; text-align: center; margin-top: 2rem; }
  .cta-band h2 { max-width: 560px; margin: 0 auto 1rem; }
  .cta-center { max-width: 500px; margin: 0 auto 1.75rem; }
  .cta-btns { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
  @media(max-width:768px) {
    .hero-inner, .hooks-grid, .prog-grid { grid-template-columns: 1fr; }
    .bp-grid { grid-template-columns: 1fr 1fr; }
    .stat-banner { flex-direction: column; }
    .pg { padding: 0 1.1rem; }
    .cta-band { padding: 2rem 1.25rem; }
  }
  @media(max-width:480px) { .bp-grid { grid-template-columns: 1fr; } }
`;

export default function NewToFlyFishing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": "https://flyfishingguideschool.com/fly-fishing-guide-school/#course",
        "name": "Fly Fishing Guide School — Beginner to Advanced",
        "description": "The Fly Fishing Guide School in Bryson City, NC is the premier destination for anyone new to fly fishing in the eastern United States — a 4-day structured program built on the exact curriculum used to train world-champion competitive anglers. Led by Mac Brown, the only FFI Master Certified Casting Instructor in North Carolina, alongside a faculty with 450+ combined years of on-water experience including Fly Fishing Team USA members and Team USA coaches. Complete beginners learn fly casting mechanics, reading moving water, dry fly and nymph fishing, rigging, and stream safety — all on the Tuckasegee River in the heart of 2,400 miles of Smoky Mountain wild trout water. No gear or experience required. Every student leaves with proprietary handouts, personal lesson plans, and a lifetime blueprint for every river ahead.",
        "url": "https://flyfishingguideschool.com/new-to-fly-fishing/",
        "provider": { "@id": "https://flyfishingguideschool.com/#business" },
        "instructor": {
          "@type": "Person",
          "@id": "https://flyfishingguideschool.com/#mac-brown",
          "name": "Mac Brown",
          "jobTitle": "FFI Master Certified Casting Instructor",
          "url": "https://flyfishingguideschool.com/meet-rowing-fly-casting-fly-fishing-instructors/",
        },
        "inLanguage": "en",
        "educationalLevel": "Beginner",
        "coursePrerequisites": "No prior fly fishing experience required. No gear needed. Beginners of all ages are welcome — the only requirement is the willingness to learn.",
        "teaches": [
          "Fly casting mechanics and technique",
          "Reading moving water and locating trout",
          "Dry fly fishing and presentation",
          "Nymph fishing below the surface",
          "Rigging leaders and tippets",
          "Stream safety and wading",
          "Entomology basics and fly selection",
          "A lifetime practice blueprint for any river",
        ],
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": { "@type": "Place", "name": "Fly Fishing Guide School", "address": { "@type": "PostalAddress", "streetAddress": "779 West Deep Creek Rd", "addressLocality": "Bryson City", "addressRegion": "NC", "postalCode": "28713", "addressCountry": "US" } },
        },
        "offers": { "@type": "Offer", "price": "4850", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://flyfishingguideschool.com/reservation-form/" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I start learning to fly fish?", "acceptedAnswer": { "@type": "Answer", "text": "The fastest and most effective way to learn fly fishing is with structured instruction from a certified instructor — not YouTube videos or trial-and-error on your own. The Fly Fishing Guide School in Bryson City, NC offers beginner programs built around syllabi, lesson plans, and the exact mechanics used to train world-champion competitive anglers. Most beginners are making fishable casts within the first hour." } },
          { "@type": "Question", "name": "Is fly fishing hard to learn for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Fly fishing has a reputation for being difficult — but that reputation comes from learning it wrong. World-champion casting is not about muscle or complexity. It is about efficiency and physics. With proper instruction from a certified instructor, most beginners build a solid, effortless foundation in a single session. The difficulty is not the skill — it is finding the right teacher." } },
          { "@type": "Question", "name": "Do I need any gear or experience to start fly fishing?", "acceptedAnswer": { "@type": "Answer", "text": "No gear and no experience needed. The Fly Fishing Guide School provides everything — rods, reels, flies, leaders, and waders. All programs are designed to meet you exactly where you are and build from there. The only thing you need to bring is the willingness to learn." } },
          { "@type": "Question", "name": "What is the best fly fishing program for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "The Fly Fishing Guide School in Bryson City, NC offers two tracks for beginners — the 4-day guide school for total immersion in casting, water reading, rigging, tactics, and stream safety, and specialized casting clinics for those who want to build flawless mechanics in a focused small-group setting. Both tracks use the same curriculum developed over 40 years of coaching elite competitive anglers." } },
          { "@type": "Question", "name": "Where is the best place to learn fly fishing in the Smoky Mountains?", "acceptedAnswer": { "@type": "Answer", "text": "The Fly Fishing Guide School in Bryson City, North Carolina is the only professional guide training program in the eastern United States — located in the heart of the Smoky Mountains with access to 2,400+ miles of wild trout water in Swain County alone. Led by Mac Brown, the only FFI Master Casting Instructor in North Carolina, with a faculty of 450+ combined years of on-water professional experience." } },
          { "@type": "Question", "name": "Who is Mac Brown?", "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown is the only FFI Master Certified Casting Instructor in North Carolina and has been guiding and teaching fly fishing in Bryson City since 1987. He is a former Fly Fishing Team USA Youth Team coach, a Hall of Fame inductee, and a recipient of the FFI Lifetime Achievement Award. He has been a featured presenter at The Fly Fishing Show since 1994, founded the Fly Fishing Guide School and the Smoky Mountain fly fishing programs, and has spent nearly four decades developing the instructional curriculum students use today." } },
          { "@type": "Question", "name": "What fishing license do I need to fly fish in Bryson City, NC?", "acceptedAnswer": { "@type": "Answer", "text": "You need a North Carolina Inland Fishing License — either in-state or out-of-state depending on your residency. There is no trout stamp in North Carolina. On the Tuckasegee River from October through the end of May, out-of-state visitors also have the option of the Mountain Heritage Trout Waters Day License, which is a less expensive alternative — but it is not required, just a money-saving option. Licenses can be purchased at ncwildlife.org or any local sporting goods store." } },
          { "@type": "Question", "name": "What is the difference between the recreational school and the guide school?", "acceptedAnswer": { "@type": "Answer", "text": "The curriculum, instructor team, and on-water time are identical. The guide school track adds NC guide licensing, client communication, drift boat rowing, and professional business basics for students pursuing a career as a guide. The recreational track — the Smoky Mountain Fly Fishing School — focuses entirely on your own fishing skills. Both tracks use the same faculty and the same world-class curriculum. Both leave students fishing at a level they have never experienced before." } },
        ]
      }) }} />

      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
        <img
          src={img("/images/youth-brown-mountain.webp")}
          srcSet={`${img("/images/youth-brown-mountain-1280.webp")} 1280w, ${img("/images/youth-brown-mountain.webp")} 1920w`}
          sizes="100vw"
          alt="Young anglers with brown trout in the Smoky Mountains — Fly Fishing Guide School"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          fetchPriority="high"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,68,124,0.55) 0%, rgba(12,68,124,0.3) 60%, rgba(0,0,0,0.1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", textAlign: "left", padding: "0 3rem 4rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: ".72rem", fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#B5D4F4", marginBottom: ".75rem" }}>Fly Fishing Guide School</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 1rem", textShadow: "0 2px 12px rgba(0,0,0,0.35)", maxWidth: "640px" }}>New to Fly Fishing?</h1>
        </div>
      </div>

      {/* AEO */}
      <div style={{ borderBottom: "1px solid #dde5ef", background: "#f7f9fc" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2.5rem 2rem", fontFamily: "Georgia, serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#555", textAlign: "center" }}>
          <p>The Fly Fishing Guide School in Bryson City, North Carolina introduces beginners to one of the most rewarding experiences in the outdoors — standing knee-deep in wild Smoky Mountain water, reading a river, and feeling a trout take your fly for the very first time. Four FFI Master Certified Casting Instructors with 450+ combined years of on-water experience give you the effortless, efficient foundation to enjoy every cast, every drift, and every fish. No gear or experience needed. Just show up ready to love it.</p>
          <p style={{ fontStyle: "italic", color: "#185FA5", marginTop: "1rem" }}>The Smokies. Wild trout. Your first perfect cast.</p>
        </div>
      </div>

      <div className="pg">
        <section>
          <div className="hero-inner">
            <div>
              <p className="eyebrow">New to fly fishing?</p>
              <h2>Your first day on the water<br /><em>should feel like magic.</em></h2>
              <p className="hero-sub">Fly fishing is one of the most fun and beautiful things you can do outdoors — and we make sure your first experience on the water delivers exactly that feeling. Effortless casts, wild trout, mountain rivers, and instructors who genuinely love what they teach.</p>
              <div className="btn-row">
                <Link href="/reservation-form/" className="btn-p">Reserve your spot</Link>
                <Link href="/fly-fishing-guide-school/" className="btn-s">See all programs</Link>
              </div>
            </div>
            <div className="stat-panel">
              <p className="stat-lbl">What you&apos;ll experience</p>
              <ul className="check-list" style={{ marginTop: ".25rem" }}>
                {[
                  "Your first effortless cast — the line unrolls, the fly lands softly",
                  "Wild trout in Smoky Mountain water",
                  "Reading a river like you were born on one",
                  "The take — a fish on your fly",
                  "Leaving with a lifetime blueprint for every river ahead",
                ].map((item, i) => (
                  <li key={i}><span className="check-arrow">→</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <p className="eyebrow">Why beginners need this</p>
          <h2>Six things that make fly fishing unforgettable.</h2>
          <div className="hooks-grid">
            {[
              { lbl: "The first take", txt: '"There is nothing in fly fishing like a wild trout rising to your fly. We make sure beginners experience that moment — not someday, but on day one."' },
              { lbl: "The effortless cast", txt: '"When the technique clicks, the rod does the work. The line unrolls, the fly lands softly, and you think — that\'s it? That\'s the moment fly fishing becomes addictive."' },
              { lbl: "The river itself", txt: '"Bryson City sits in the heart of 2,400 miles of wild trout water in the Smoky Mountains. You\'ll learn fly fishing in one of the most beautiful settings on earth."' },
              { lbl: "The \'aha\' moment", txt: '"Most beginners hit it within the first hour — the cast that finally feels right. That\'s when the river stops feeling intimidating and starts feeling like home."' },
              { lbl: "The family sport", txt: '"Fly fishing is one of the rare sports the whole family falls in love with together. We\'ve taught kids, parents, and couples who all left with the same smile."' },
              { lbl: "A skill for life", txt: '"You leave with student handouts, lesson plans, and a clear path forward — so every future trip on any river in the world builds on what you learned here."' },
            ].map((h, i) => (
              <div className="hook-card" key={i}>
                <p className="hook-lbl">{h.lbl}</p>
                <p className="hook-txt">{h.txt}</p>
              </div>
            ))}
          </div>
          <div className="hook-center">
            <p>&ldquo;The best cast you&apos;ll ever make is the next one. That&apos;s what keeps fly fishers coming back for life.&rdquo;</p>
          </div>
        </section>

        <section>
          <p className="eyebrow">A structured path forward</p>
          <h2>Skip the frustrating years. Jump straight to loving it.</h2>
          <p className="body-txt">Self-taught fly fishing has a reputation for being hard — and it is, when you&apos;re figuring it out alone. With structured instruction, you skip the struggle and arrive where you want to be: effortless casts, reading moving water, watching a wild trout rise to your fly.</p>
          <p className="body-txt">A clear learning path means you don&apos;t wander — you progress. Every session builds on the last. Every concept connects to the next. And because you start right, the sport stays fun and joyful — on every river, for the rest of your life.</p>
          <div className="stat-banner">
            <div className="sbn">
              <span className="sbn-big">85%</span>
              <span className="sbn-lbl">of beginners</span>
            </div>
            <div className="sbb">
              <p className="sbb-q">&ldquo;85% of beginners who try to self-teach quit within two years. With the right foundation from day one, fly fishing stays fun, effortless, and deeply satisfying for life.&rdquo;</p>
              <p className="sbb-s">The difference isn&apos;t talent. It&apos;s having the right start — so the river always feels like a reward, not a struggle.</p>
            </div>
          </div>
          <p className="eyebrow" style={{ marginTop: "2rem" }}>Your lifetime blueprint</p>
          <p className="body-txt">These aren&apos;t generic brochures. They&apos;re built from 40 years of on-water teaching — distilled into clear, visual steps you can practice anywhere in the world.</p>
          <div className="bp-grid">
            {[
              { n: "01", t: "Student handouts", d: "Proprietary casting handouts — visual, precise, and yours to keep forever." },
              { n: "02", t: "Lesson plans", d: "Practice sessions built around where you are, for your home water." },
              { n: "03", t: "Continued syllabus", d: "A sequenced curriculum for growing well past your first cast." },
              { n: "04", t: "Lifetime reference", d: "Return to your materials any time — on any river, anywhere in the world." },
            ].map((b, i) => (
              <div className="bp-step" key={i}>
                <div className="bp-num">{b.n}</div>
                <div className="bp-title">{b.t}</div>
                <div className="bp-desc">{b.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow">You belong here</p>
          <h2>Every master was once a beginner. You&apos;re in the right place.</h2>
          <p className="body-txt">Right now you might not even know what questions to ask — and that&apos;s exactly where you want to be.</p>
          <p className="body-txt">Most people who try to teach themselves struggle for years before fly fishing becomes what it&apos;s supposed to be — joyful, meditative, and deeply satisfying. Starting here means you arrive at that place on day one, not year five.</p>
          <ul className="check-list">
            {[
              "Skills that last a lifetime — you won't just catch a fish today. You'll know how to read water and catch fish anywhere, for the rest of your life.",
              "Effortless from the start — when the technique is right, the rod does the work. No muscle strain, no frustration — just the pure satisfaction of a cast that lands exactly where you want it.",
              "Zero intimidation — our school is a welcoming, high-support environment built to turn curiosity into absolute confidence.",
            ].map((item, i) => (
              <li key={i}><span className="check-arrow">→</span><span>{item}</span></li>
            ))}
          </ul>
        </section>

        <section>
          <p className="eyebrow">Education over entertainment</p>
          <h2>Why our method is different.</h2>
          <p className="body-txt">Not all fly fishing instruction is created equal. Here&apos;s the honest difference between a day with us and spending money elsewhere.</p>
          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th className="th-bad">What most shops offer</th>
                  <th className="th-good">What you get here</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Untangle your line for you — you leave knowing nothing new", "Learn why tangles happen — and prevent them forever"],
                  ["Hook the fish, hand you the rod, take the photo", "Understand water reading, drift, and presentation"],
                  ["Generic brochure forgotten by Monday", "World-class curriculum handouts you keep for life"],
                  ["No path forward once the school ends", "Syllabi and lesson plans for a lifetime of continued growth"],
                  ["Anyone with a boat calls themselves a guide", "Develop a lifetime blueprint for many future successes onstream"],
                ].map(([bad, good], i) => (
                  <tr key={i}>
                    <td className="td-bad">{bad}</td>
                    <td className="td-good">{good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <p className="eyebrow">Find your track</p>
          <h2>Choose the program that fits where you are.</h2>
          <p className="body-txt">Whether you&apos;re brand new to the sport or looking to lock in your foundation, we have a program built for you.</p>
          <div className="prog-grid">
            {[
              { goal: "Best for Beginners & Rec Anglers", title: "Smoky Mountain Fly Fishing School", desc: "Four days in the Smokies built for recreational anglers — casting, reading water, rigging, tactics, and time on some of the most beautiful trout streams in the East. No experience needed.", links: [{ label: "Learn more →", href: "/smoky-mountain-fly-fishing-school/", external: false }] },
              { goal: "Effortless technique", title: "Specialized Casting Clinics", desc: "Feel the cast click into place in a focused, small-group setting led by an FFI Master Certified Instructor. No muscle strain — just effortless technique that stays with you for life.", links: [{ label: "Casting Instruction →", href: "https://macbrownflyfish.com/fly-casting-instruction/", external: true }, { label: "Masterclass Workshop →", href: "https://macbrownflyfish.com/masterclass-fly-casting-workshop/", external: true }] },
              { goal: "On-water success", title: "Guided Schools & NC Trips", desc: "Experience the beautiful waters of Bryson City and the Smokies while receiving real-time, patient coaching tailored to your skill level.", links: [{ label: "Learn more →", href: "https://macbrownflyfish.com", external: true }] },
            ].map((p, i) => (
              <div className="prog-card" key={i}>
                <div className="prog-goal">{p.goal}</div>
                <div className="prog-title">{p.title}</div>
                <div className="prog-desc">{p.desc}</div>
                {p.links.map((l, j) =>
                  l.external
                    ? <a key={j} href={l.href} className="prog-link" target="_blank" rel="noopener noreferrer">{l.label}</a>
                    : <Link key={j} href={l.href} className="prog-link">{l.label}</Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "2rem" }}>Frequently Asked Questions</h2>
          <div style={{ borderTop: "1px solid #dde5ef" }}>
            {[
              { q: "How do I start learning to fly fish?", a: "The fastest and most enjoyable way to learn fly fishing is with structured instruction from a certified instructor — not YouTube videos or trial-and-error on your own. The Fly Fishing Guide School in Bryson City, NC builds beginners around proven syllabi and lesson plans refined over 40 years of on-water teaching. Most beginners are making fishable casts within the first hour and experiencing their first take by the end of the day." },
              { q: "Is fly fishing hard to learn for beginners?", a: "Fly fishing has a reputation for being difficult — but that reputation comes from learning it the wrong way. The cast is meant to feel effortless, not muscular. With proper instruction from a certified instructor, most beginners build a natural, confident foundation in a single session. The river stops feeling intimidating very quickly. The difficulty is not the skill — it is finding the right teacher." },
              { q: "Do I need any gear or experience to start fly fishing?", a: "No prior experience needed — this program is built for beginners from day one. Most students arrive with their own basic fly rod and reel setup. If you are brand new and have not purchased gear yet, reach out before you register and we will point you toward exactly what to get so you arrive ready to fish, not guessing at a fly shop. All programs are designed to meet you exactly where you are and build from there. The only thing you need to bring is the willingness to learn." },
              { q: "What is the best fly fishing program for beginners?", a: "The Fly Fishing Guide School in Bryson City, NC offers two tracks for beginners — the 4-day guide school for total immersion in casting, water reading, rigging, tactics, and stream safety, and specialized casting clinics for those who want to build an effortless, confident foundation in a focused small-group setting. Both tracks use the same curriculum refined over 40 years of on-water teaching." },
              { q: "Where is the best place to learn fly fishing in the Smoky Mountains?", a: "Bryson City, North Carolina is one of the most spectacular places in the country to learn fly fishing — situated in the heart of the Smoky Mountains with access to 2,400+ miles of wild trout water in Swain County alone. The Fly Fishing Guide School offers structured recreational programs for beginners in that setting, led by Mac Brown, the only FFI Master Casting Instructor in North Carolina, and a faculty with 450+ combined years of on-water experience." },
            ].map((item, i) => (
              <details key={i} style={{ borderBottom: "1px solid #dde5ef", padding: "1.25rem 0" }}>
                <summary style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  {item.q}
                  <span style={{ color: "#185FA5", flexShrink: 0, fontSize: "1.25rem", lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ marginTop: "1rem", color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <div className="cta-band">
            <p className="eyebrow">Ready to begin?</p>
            <h2>Step onto the water with total confidence.</h2>
            <p className="body-txt cta-center">Space is limited to keep every session personal, attentive, and a whole lot of fun. You don&apos;t need to be an expert to enjoy fly fishing like one.</p>
            <div className="cta-btns">
              <Link href="/reservation-form/" className="btn-p">Enroll now</Link>
              <Link href="/contact-information-best-fly-fishing-guide-school/" className="btn-s">Talk to us directly</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
