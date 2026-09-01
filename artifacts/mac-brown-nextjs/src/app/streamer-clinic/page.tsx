import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqAccordion from "./faq-accordion";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

export const metadata: Metadata = {
  title: { absolute: "Streamer Fishing Weekend Clinic | Smoky Mountains NC" },
  description: "Hunt trophy trout with streamers on the rivers of Western North Carolina. Mac Brown's streamer clinic covers fly selection, retrieves, and reading water.",
  alternates: { canonical: "https://macbrownflyfish.com/streamer-clinic/" },
  openGraph: {
    title: "Comprehensive Streamer Clinic — Mac Brown Fly Fish, Bryson City NC",
    description: "Weekend streamer fishing school in the Great Smoky Mountains. Retrieve patterns, presentation angles, targeting trophy trout. All skill levels. Bryson City, NC.",
    url: "https://macbrownflyfish.com/streamer-clinic/",
    images: [{ url: "https://macbrownflyfish.com/images/freestone-brown-trout.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const curriculum = [
  { title: "Where the Big Fish Live", body: "Large trout are not randomly distributed through a river. They hold in specific types of structure — and understanding that structure is the foundation of productive streamer fishing. Learn to identify the deep runs, undercut banks, log jams, transition zones, and tailouts where trophy fish spend most of their time, and understand how these locations change with water level, season, and time of day." },
  { title: "Strip Speed & Retrieve Patterns", body: "The retrieve is the conversation between you and the fish — and most anglers have a very limited vocabulary. Learn the full range of retrieve styles: the long, slow strip; the short, erratic pulse; the dead drift with a hard stop; the rip-and-pause; the sustained burn. Understand what each retrieve mimics, what it triggers, and how to read the fish's response and adjust in real time." },
  { title: "Presentation Angles — Cross-Current, Downstream, Upstream", body: "The angle of your cast relative to the current determines where your fly goes, how it behaves, and which fish it can reach. Cross-current casts cover the broadest water. Downstream presentations give you more control and a more natural drift. Upstream presentations put the fly in front of fish that are holding with their eyes pointed upstream — into water most anglers never reach with a streamer." },
  { title: "Swinging vs. Stripping Streamers", body: "These two approaches are not interchangeable — they target fish differently and excel in different conditions. Learn when to swing a streamer through a run and let the current do the work, when to strip it aggressively to trigger reaction strikes, and how to blend the two within a single presentation to maximize the appeal of every cast." },
  { title: "The Eat & the Set — Reaction Time and Hooksets", body: "Streamer hooksets are different from every other form of fly fishing. The timing, the angle, and the force all change when a fish turns on a moving fly. Learn to watch for the take, resist the urge to set too early, and drive the hook home with the strip-set that converts follows and flashes into fish in the net. This is where many anglers lose their biggest fish of the year." },
  { title: "Fly Selection — Profile, Color & Movement", body: "Streamer pattern selection is driven by three variables — profile, color, and movement — and understanding how each one triggers or turns off fish in different conditions makes pattern selection a decision rather than a guess. Learn to match the forage base, choose colors for water clarity and light conditions, and select materials that produce the pulsing, breathing action that large trout cannot ignore." },
  { title: "Line Systems for Streamer Fishing", body: "The right fly line makes streamer fishing dramatically more effective — and most trout anglers are fishing streamers on the wrong line. Learn the differences between floating, sink-tip, and full-sink lines, understand when each one is the right tool, and know how to rig leaders and tippet to maximize fly action and durability in the current conditions." },
  { title: "High Water & Low Water Strategies", body: "Streamer fishing changes dramatically with water conditions. High, stained water concentrates fish in predictable locations and demands different colors, heavier flies, and slower presentations. Low, clear water requires more precise casts, lighter flies, and a more delicate approach to avoid spooking fish before you ever show them the fly. Learn to adjust your entire system — from fly choice to retrieve speed — based on what the water is doing." },
  { title: "Reading the Follow — Converting Followers to Takers", body: "A following fish is not a lost fish — it is an opportunity with a time limit. Learn to recognize when a fish is following without committing, understand what is holding it back, and use in-the-moment adjustments — a direction change, a speed change, a figure-eight at the boat — to trigger the take on the next presentation. Converting followers is one of the highest-leverage skills in streamer fishing." },
];

const whoForItems = [
  "Anglers who want to target the largest trout in the river rather than fish for average",
  "Anyone who has thrown streamers with inconsistent results and wants to understand why",
  "Nymph and dry fly anglers looking to add an aggressive, effective dimension to their fishing",
  "Guides and instructors who want to teach streamer fishing with depth and precision",
  "Anyone preparing for a destination trip where streamers are the primary technique",
  "Anglers who want to fish effectively in high, cold, or off-color water conditions",
];

export default function StreamerClinic() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "1550",
        name: "Comprehensive Streamer Clinic — Weekend School, Bryson City NC",
        description: "Weekend streamer fishing clinic in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and the author of Casting Angles. Students learn to think like big-trout hunters: reading water for ambush lies, selecting the right streamer profile, varying retrieves, and presenting at the right angle and depth for each water type on the Tuckasegee River. Mac has been chasing large trout on streamers in the Smoky Mountains since 1987. All skill levels welcome.",
        url: "/streamer-clinic",
        image: "https://macbrownflyfish.com/images/freestone-brown-trout.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "Basic fly casting and fly fishing experience recommended. No prior streamer fishing experience required.",
        teaches: [
          "Reading water for streamer fishing — ambush lies and travel lanes",
          "Streamer fly selection and profile matching for conditions",
          "Retrieve patterns and triggering strikes",
          "Presentation angle and depth control",
          "Cross-stream and downstream streamer swings",
          "Casting mechanics for large flies and sink-tip lines",
          "Fighting and landing big trout on streamers",
        ],
        sessions: [{ startDate: "2026-05-30", endDate: "2026-05-31" }],
      })} />
      <SchemaScript schema={faqPageSchema([
        { q: "What does the Streamer Clinic cover?", a: "The Comprehensive Streamer Clinic covers active retrieve and passive drift presentations, depth control, presentation angles, fly selection, water reading to locate the largest trout in any river system, line and leader setup for streamer fishing, and the approach strategies that consistently draw the most aggressive takes from the biggest fish." },
        { q: "How much does the Streamer Clinic cost?", a: "The Comprehensive Streamer Clinic is $1,550 per person for both days of on-water instruction. All gear is provided." },
        { q: "Who is the Streamer Clinic for?", a: "The Streamer Clinic is for anglers who want to consistently locate and catch the largest trout in a river. It is ideal for experienced fly anglers ready to add a powerful new dimension to their fishing, as well as intermediate anglers who want to learn streamer technique from the ground up." },
        { q: "Where does the Streamer Clinic fish?", a: "The clinic fishes the mountain rivers and streams of the Great Smoky Mountains — including the Tuckasegee, the Nantahala, and surrounding watershed. These rivers hold large brown and rainbow trout that respond aggressively to well-presented streamers." },
        { q: "What is the cancellation and payment policy?", a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you. PAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
      ])} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img src={img("/images/freestone-brown-trout.webp")} srcSet={`${img("/images/mobile/freestone-brown-trout.webp")} 800w, ${img("/images/freestone-brown-trout.webp")} 1024w`} sizes="100vw" alt="Large brown trout — Comprehensive Streamer Clinic, Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountain Weekend Schools · Bryson City, NC</p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">Streamer Fishing Clinic — Smoky Mountains, NC</h1>
          <p className="font-serif italic text-white/70 text-lg md:text-xl mt-4 sm:mt-5 max-w-2xl">Streamers move the biggest fish in the river.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <Link href="/reserve" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Inquire &amp; Register <ArrowRight size={14} /></Link>
            <Link href="/smoky-mountain-weekend-schools" className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">All Weekend Schools</Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Comprehensive Streamer Clinic is a weekend fly fishing school in Bryson City, North Carolina — <PriceTag priceKey="weekendFlyFishingSchool" as="span" />, covering active retrieve and passive drift presentations, depth control, presentation angles, and the water-reading skills to locate the largest trout in any river system. Taught on the wild streams of the Great Smoky Mountains by FFI Certified Instructors.
          </p>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-3"><Calendar size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">May 30–31, 2026</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3"><MapPin size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">Bryson City, NC · Great Smoky Mountains</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <PriceTag priceKey="weekendFlyFishingSchool" as="span" className="text-sm font-bold tracking-wide" />
        </div>
      </div>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">Streamers move the biggest fish in the river. They also demand a specific set of skills — retrieve mechanics, presentation angles, line management, fly selection, reading water for trophy fish — that most anglers never fully develop because they never receive proper instruction on any of them. The result is a lot of blind casting, a few accidental takes, and the persistent suspicion that streamer fishing is more luck than skill.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">It is not. This clinic proves it — over two days on the water in the mountain rivers of the Great Smoky Mountains, targeting the largest trout in the system with a deliberate, systematic approach that makes every cast purposeful and every retrieve part of a strategy.</p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">"There is a reason the biggest fish in the river are still alive. They did not get big by being careless. Catching them on a streamer requires understanding how they think — and fishing with that in mind on every single cast."</p>
          </blockquote>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">Who This Clinic Is For</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">Target the<br />largest fish.</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">If you want to catch more fish, nymph. If you want to catch the biggest fish in the river on any given day, learn to fish streamers well. This clinic teaches you how.</p>
            </div>
            <div className="lg:w-2/3">
              <ul className="space-y-4">
                {whoForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-square overflow-hidden"><img src={img("/images/client-brown-1.webp")} srcSet={`${img("/images/client-brown-1-800.webp")} 800w, ${img("/images/client-brown-1.webp")} 1440w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Angler with a large brown trout caught streamer fishing in Western North Carolina" className="w-full h-full object-cover object-top" /></div>
        <div className="aspect-square overflow-hidden"><img src={img("/images/fall-brown-trout.webp")} alt="Fall brown trout from the mountain rivers of the Great Smoky Mountains" className="w-full h-full object-cover object-center" /></div>
      </div>

      {/* CURRICULUM */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What You Will Learn</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, i) => (
              <div key={i} className="bg-white border border-border p-7 flex flex-col">
                <div className="w-8 h-0.5 bg-primary mb-5" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-muted/30 border-y border-border">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-10">Ready to Book</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-white border border-border p-8 flex flex-col">
              <div className="mb-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">2-Day School</p>
                <h2 className="font-serif text-xl font-bold text-foreground">Comprehensive Streamer Clinic</h2>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {["All skill levels welcome", "Bryson City, NC · Great Smoky Mountains", "Small groups — hands-on instruction", "All equipment provided", "2026 dates available"].map((inc, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{inc}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors">Book This Clinic <ArrowRight size={13} /></Link>
                <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] pt-2 hover:text-foreground transition-colors">Call (828) 736-1469</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Stop searching. Start targeting.</h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">Enrollment is limited. Contact us to check availability for 2026 dates and secure your spot in the Comprehensive Streamer Clinic.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Inquire &amp; Register <ArrowRight size={14} /></Link>
            <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">Call (828) 736-1469</a>
          </div>
          <p className="mt-10 text-primary-foreground/50 text-sm">
            <Link href="/smoky-mountain-weekend-schools" className="underline underline-offset-4 hover:text-primary-foreground transition-colors">View all four weekend schools →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
