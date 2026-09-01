import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqAccordion from "./faq-accordion";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

export const metadata: Metadata = {
  title: { absolute: "Saltwater Fly Casting Masterclass — Smoky Mountains, NC" },
  description: "Prepare for saltwater fly fishing with elite casting instruction. Mac Brown's saltwater masterclass covers wind casting, distance, and accuracy under pressure.",
  keywords: "saltwater fly casting workshop, flats fishing casting instruction, bonefish permit tarpon casting school, saltwater fly fishing clinic North Carolina, double haul instruction, fly casting for saltwater, saltwater fly fishing school Southeast, Great Smoky Mountains fly casting, Mac Brown saltwater casting, FFI master instructor saltwater fly casting",
  alternates: { canonical: "https://macbrownflyfish.com/saltwater-fly-casting-elite-masterclass-workshop/" },
  openGraph: {
    title: "Saltwater Fly Casting Elite Masterclass Workshop | Mac Brown Fly Fish",
    description: "Two-day saltwater fly casting masterclass with NC's only FFI Master Casting Instructor. Master distance, accuracy, wind casting, and the double haul before your next flats trip.",
    url: "https://macbrownflyfish.com/saltwater-fly-casting-elite-masterclass-workshop/",
    images: [{ url: "https://macbrownflyfish.com/images/masterclass/mc-14.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saltwater Fly Casting Elite Masterclass — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/masterclass/mc-14.webp"],
  },
};

const whoForItems = [
  "First-time saltwater fly fishers who want to arrive prepared rather than overwhelmed",
  "Freshwater anglers planning their first bonefish, permit, or tarpon trip",
  "Experienced saltwater anglers whose casting breaks down under pressure or in wind",
  "Guides and shop staff wanting to prepare clients more effectively for saltwater pursuits",
  "Anyone who has stood on a flats boat and wished their cast was better",
  "Anyone who has ever watched a fish swim away unchallenged because the cast wasn't there",
];

const curriculum = [
  { title: "Distance Without Effort", body: "Saltwater casting demands reach — and most anglers try to achieve it through brute force, which works against them every time. Learn the mechanics of generating line speed efficiently so longer casts feel easier than your current short ones. Distance is a byproduct of technique, not strength. Every participant leaves casting further than they arrived — guaranteed." },
  { title: "Accuracy Under Pressure", body: "A cast that lands in the right zone at the right moment is worth ten beautiful casts that miss. Learn the presentation angles, timing, and target focus that produce accurate deliveries when everything is moving — the boat, the fish, and your heart rate." },
  { title: "Casting in Wind", body: "Wind is the defining challenge of saltwater fly fishing — and the one thing most anglers never properly prepare for. Learn to cast with the wind, into the wind, across the wind, and in the swirling crosswinds that make flats fishing so demanding. Wind is not your enemy. Untrained casting in wind is. This workshop removes that obstacle completely." },
  { title: "The Saltwater Double Haul", body: "The engine of every long, efficient saltwater cast. Most anglers have a version of a double haul. Very few have one that actually works under pressure at distance. Learn to haul with timing, efficiency, and purpose — and feel the difference immediately in your line speed and loop quality." },
  { title: "The Elliptical Cast — The Secret Weapon", body: "One of the most practical and underused tools in saltwater fly fishing. The elliptical cast traces an oval path — combining the forward and backward stroke in a continuous, flowing motion that eliminates unnecessary pauses, reduces false casting, and delivers the fly faster. In saltwater, time is everything. This cast solves it." },
  { title: "Quick Release & Shooting Line", body: "Getting the fly in the air fast and delivering it with minimal false casts is one of the most practical and underrated skills in saltwater fly fishing. A fish on the flats does not wait. Learn to be ready." },
  { title: "Sight Fishing Presentations", body: "Dropping a fly at the right distance, on the right angle, without lining the fish or spooking it with a splashy presentation — this is the art within the art. Learn to control where your fly lands and how it enters the water, because presentation in saltwater is everything." },
  { title: "Leader Construction & Rigging", body: "A saltwater leader that turns over correctly under load, handles the shock of a strip strike, and holds up to the abrasion of big fish is not an afterthought — it is a system. Learn the construction principles, knots, and rigging considerations that give your setup the best possible chance." },
  { title: "The Strip Strike", body: "The most common mistake freshwater anglers make in saltwater. Raising the rod to set the hook on a permit or tarpon costs more fish than any other single error. Learn the strip strike — why it works, when to use it, and how to make it instinctive before you ever step on a boat." },
  { title: "Casting to Moving Fish", body: "Stationary targets are practice. Moving fish are the game. Learn to lead a fish correctly, adjust for speed and angle, and deliver the fly where the fish will be — not where it was. This single skill separates anglers who convert saltwater opportunities from those who watch them swim away." },
  { title: "Fly Selection & Strategy by Species", body: "Bonefish, permit, tarpon, redfish, snook — every species demands a different approach, a different presentation, and a different set of expectations from the angler. Learn the strategic framework for approaching each pursuit so you arrive at your destination with a plan, not just hope." },
];

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Saltwater Fly Casting Elite Masterclass Workshop",
  description: "Two-day saltwater fly casting masterclass covering distance casting, accuracy, wind casting, the double haul, elliptical cast, sight fishing presentations, and species-specific strategy.",
  startDate: "2026-07-18",
  endDate: "2026-07-19",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Mac Brown Fly Fish — Bryson City, NC",
    address: {
      "@type": "PostalAddress",
      streetAddress: "779 West Deep Creek Rd",
      addressLocality: "Bryson City",
      addressRegion: "NC",
      postalCode: "28713",
      addressCountry: "US",
    },
  },
  organizer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
  performer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
  url: "https://macbrownflyfish.com/saltwater-fly-casting-elite-masterclass-workshop/",
  image: "https://macbrownflyfish.com/images/masterclass/mc-14.webp",
  offers: {
    "@type": "Offer",
    price: "1550",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
    url: "https://macbrownflyfish.com/reserve/",
  },
};

export default function SaltwaterFlycastingEliteMasterclass() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        name: "Saltwater Fly Casting Elite Masterclass Workshop — Bryson City NC",
        description: "Two-day saltwater fly casting masterclass in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. The workshop focuses on the specialized demands of saltwater fly fishing: long-distance accuracy under pressure, wind management, the Belgian cast, quick-delivery presentations to fast-moving fish, and the physical demands of casting all day in coastal conditions. Mac has been coaching saltwater anglers at The Fly Fishing Show since 1994. Built for intermediate to advanced anglers preparing for bonefishing, permit, tarpon, redfish, or striped bass.",
        url: "/saltwater-fly-casting-elite-masterclass-workshop",
        image: "https://macbrownflyfish.com/images/masterclass/mc-14.webp",
        educationalLevel: "Intermediate to Advanced",
        coursePrerequisites: "Intermediate fly casting ability required. Students should be comfortable with an overhead cast and basic hauling. This workshop builds on existing skills rather than teaching fundamentals from scratch.",
        teaches: [
          "Long-distance accurate presentation for saltwater species",
          "Wind management and casting in adverse conditions",
          "Belgian cast and oval casting paths",
          "Quick delivery and fast-target casting",
          "Double haul for maximum distance and line speed",
          "Stripping basket management and shooting line",
          "Physical efficiency for all-day saltwater casting",
        ],
      })} />
      <SchemaScript schema={eventSchema} />
      <SchemaScript schema={faqPageSchema([
        { q: "What is the Saltwater Fly Casting Elite Masterclass?", a: "The Saltwater Fly Casting Elite Masterclass is a 2-day intensive program in Bryson City, North Carolina covering the distance casting, accuracy, delivery, and wind management skills required for saltwater fly fishing. Led by FFI Master Casting Instructors, the workshop prepares fly anglers for the technical demands of bonefishing, tarpon, redfish, permit, and other saltwater species." },
        { q: "How much does the Saltwater Masterclass cost?", a: "The Saltwater Fly Casting Elite Masterclass is $1,550 per person for both full days of instruction." },
        { q: "Who should attend the Saltwater Masterclass?", a: "The masterclass is for fly anglers preparing for a saltwater destination trip, experienced freshwater fly casters who want to add distance, accuracy, and wind management skills that saltwater demands, and guides or shop staff serving saltwater clients. No prior saltwater fishing experience is required." },
        { q: "What saltwater species does this prepare you for?", a: "The masterclass prepares you for bonefish on the flats, tarpon on the surface, redfish in skinny water, permit, and a range of other saltwater species where distance, quick delivery, and accuracy under wind are the difference between a good cast and a spooked fish." },
        { q: "What is the cancellation and payment policy?", a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you. PAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
      ])} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img
          src={img("/images/masterclass/mc-14.webp")}
          srcSet={`${img("/images/masterclass/mc-14-1280.webp")} 1280w, ${img("/images/masterclass/mc-14.webp")} 1536w`}
          sizes="100vw"
          alt="Saltwater fly casting elite masterclass workshop — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">FFI Master Instructor · Bryson City, NC · Great Smoky Mountains</p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Saltwater Fly Casting Elite Masterclass
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl leading-relaxed">
            Two Days. Every Cast You Need. All Skill Levels Welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <Link href="/reserve" className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors">
              Reserve Your Spot <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/masterclass-fly-casting-workshop" className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:border-white hover:bg-white/10 transition-colors">
              View All Casting Clinics
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Saltwater Fly Casting Elite Masterclass in Bryson City, North Carolina is a 2-day intensive program covering the distance casting, accuracy, and presentation skills required for saltwater fly fishing — <PriceTag priceKey="masterclassWorkshop" as="span" />, led by FFI Master Casting Instructors. Prepare for bonefish, tarpon, redfish, and permit before your next saltwater trip.
          </p>
        </div>
      </section>

      {/* SESSION DATE CARD */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Calendar className="w-6 h-6 text-white/60 shrink-0" />
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Next Session</p>
              <p className="text-xl font-semibold">July 18–19, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-white/60 shrink-0" />
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Location</p>
              <p className="text-xl font-semibold">Bryson City, NC · Great Smoky Mountains</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Investment</p>
              <PriceTag priceKey="masterclassWorkshop" as="p" className="text-xl font-semibold" />
            </div>
          </div>
          <Link href="/reserve" className="shrink-0 inline-flex items-center gap-2 bg-white text-primary px-7 py-3 text-sm font-bold tracking-wide hover:bg-white/90 transition-colors">
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* OPENING — THE PITCH */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Flats Are Waiting</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                The cast of a lifetime is two days of the right instruction away.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Picture this: a permit materializes from the turquoise shallows sixty feet away. The guide calls the clock position. The fish is moving. You have one shot. One cast. Everything you've worked toward — the trips planned, the gear purchased, the hours of practice — comes down to this moment.
                </p>
                <p>Now picture making that cast cleanly, accurately, and without hesitation.</p>
                <p>
                  The <strong className="text-foreground">Saltwater Fly Casting Elite Masterclass Workshop</strong> is built around a single honest truth that saltwater guides repeat more than any other: the overwhelming majority of anglers who book expensive saltwater trips arrive unable to make the cast when it counts. Not because they don't care. Not because they haven't tried. Because saltwater fly casting is a specific, learnable skill set that nobody ever properly taught them.
                </p>
                <p>Two days here changes that permanently.</p>
              </div>
              <blockquote className="mt-8 border-l-4 border-primary pl-5">
                <p className="text-foreground font-medium italic leading-relaxed">
                  "98% of saltwater captains internationally say the number one frustration guiding fly fishers is that clients cannot cover the fish when it counts. Two days here fixes that — permanently and completely."
                </p>
              </blockquote>
            </div>
            <div className="hidden xl:block xl:w-[40%] shrink-0">
              <img
                src={img("/images/masterclass/mc-15.webp")}
                alt="Mac Brown fly casting instruction at the Great Smoky Mountains — saltwater masterclass workshop"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YOU CAN DO THIS */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">You Can Do This</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 leading-tight">
            Distance, accuracy, and wind casting are not gifts.<br className="hidden sm:block" /> They are skills — and they are teachable.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-left">
            <p>
              Saltwater fly casting feels intimidating from the outside. The distances seem impossible. The wind seems unmanageable. The pressure of casting to a moving fish seems overwhelming. Every one of those concerns is completely understandable — and every one of them dissolves with proper instruction and guided practice.
            </p>
            <p>
              The mechanics behind a great saltwater cast are the same mechanics behind every great fly cast. You do not need to be an expert caster to attend this workshop. You need to want to get better — and show up ready to try.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Who This Workshop Is For</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12">
            If a saltwater trip is on your list — this is the best investment you can make before you go.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {whoForItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Better than a new rod. Better than new flies. Better than anything in a catalog.
          </p>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="w-full overflow-hidden max-h-[480px]">
        <img
          src={img("/images/masterclass/mc-16.webp")}
          srcSet={`${img("/images/masterclass/mc-16-1280.webp")} 1280w, ${img("/images/masterclass/mc-16.webp")} 1536w`}
          sizes="100vw"
          alt="Mac Brown Fly Fish saltwater casting instruction clinic — Bryson City, NC Great Smoky Mountains"
          className="w-full h-[480px] object-cover object-[center_30%] block"
        />
      </div>

      {/* CURRICULUM */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Full Curriculum</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What You Will Learn</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Two full days covering every cast, skill, and strategy you need for the flats — from fundamentals to game-changing techniques most anglers never learn.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((item, i) => (
              <div key={i} className="border border-border p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-9">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ELLIPTICAL CAST CALLOUT */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">The Secret Weapon</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
            The elliptical cast feels like cheating once you learn it.
          </h2>
          <p className="text-white/80 leading-relaxed text-lg mb-6">
            Fewer false casts. More accuracy. Less effort. It is one of the first things we teach in saltwater situations — and one of the most immediately game-changing skills any caster can add to their arsenal.
          </p>
          <p className="text-white/70 leading-relaxed">
            Once you feel an elliptical cast work for the first time — the way it loads the rod continuously and delivers energy to the fly line in one fluid arc — you will wonder how you ever fished without it.
          </p>
        </div>
      </section>

      {/* THE VENUE */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <div className="hidden xl:block xl:w-[40%] shrink-0">
              <img
                src={img("/images/masterclass/mc-08.webp")}
                alt="Fly casting practice venue in the Great Smoky Mountains — Mac Brown Fly Fish Bryson City NC"
                className="w-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Venue</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                The ideal place to build saltwater skills — before the boat, before the pressure.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Bryson City, North Carolina</strong> might seem like an unlikely home for saltwater fly casting instruction. It is, in fact, ideal. The wide, open practice venues available in and around the Great Smoky Mountains provide the perfect environment for building and refining saltwater skills without the distraction of actually being on a boat — which means every concept can be learned, drilled, and locked in before the real-world pressure of a flats boat ever enters the equation.
                </p>
                <p>
                  This is exactly how elite athletes train. You don't learn a new skill in competition. You learn it in practice, repeat it until it is instinctive, and then perform it when it counts. Two days here, then your trip — wherever it takes you — with the cast that was always in you, finally unlocked.
                </p>
                <p>
                  Bryson City sits within easy reach of <strong className="text-foreground">Asheville, Cherokee, and the heart of Great Smoky Mountains National Park</strong>. Many participants extend their stay to fish some of the finest wild trout streams in the eastern United States.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE INSTRUCTOR */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Instruction</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            North Carolina's only FFI Master Casting Instructor.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-left">
            <p>
              Mac Brown is North Carolina's only <strong className="text-foreground">FFI Master Casting Instructor</strong> — one of fewer than a few hundred people worldwide to hold the designation — and has spent nearly four decades developing casters of every skill level on some of the world's finest water. His national advisor roles with <strong className="text-foreground">Scientific Anglers and Temple Fork Outfitters</strong> have given him a uniquely deep understanding of how line, rod, and technique interact at the highest level.
            </p>
            <p>
              The casting principles taught in this workshop are not opinions or preferences. They are the proven, physics-based mechanics that have produced World Champions, certified instructors, and — most importantly — anglers who step onto a flats boat prepared to make the most of every opportunity the guide works hard to give them.
            </p>
            <p>
              Guest instructors with saltwater-specific experience join select sessions throughout the year, bringing first-hand knowledge of the destinations and species most participants are preparing for.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Link href="/bio-mac-brown" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              About Mac Brown <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Common Questions</p>
            <h2 className="font-serif text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">July 18–19, 2026 · Bryson City, NC</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Enrollment is limited.<br />These dates fill fast.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Every year, anglers spend thousands of dollars on saltwater destinations and arrive without the casting skills to make the most of them. The guide works hard. The fish cooperate. And the cast isn't there.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            That is a completely solvable problem. This workshop solves it.
          </p>
          <blockquote className="mb-10 text-foreground font-medium italic text-lg">
            "The ocean doesn't care how much your rod cost. It cares whether you can cast. Come learn how."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors">
              Reserve Your Spot <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/masterclass-fly-casting-workshop" className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-10 py-4 text-sm font-semibold tracking-wide hover:bg-muted/50 transition-colors">
              View All Casting Clinics
            </Link>
          </div>
          <p className="text-muted-foreground text-sm mt-8">
            Questions? <Link href="/contact" className="text-primary hover:underline">Contact Mac directly</Link> — or call before you book.
          </p>
        </div>
      </section>
    </div>
  );
}
