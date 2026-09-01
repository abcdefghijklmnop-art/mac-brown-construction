import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqAccordion from "./faq-accordion";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

export const metadata: Metadata = {
  title: { absolute: "Row Your Own Water — Drift Boat Lessons for Anglers | Mac Brown Fly Fish" },
  description: "Learn to row a drift boat on moving water in the Great Smoky Mountains. Mac Brown's Oar Frame Rowing School covers oar technique, river reading, boat control, and safety.",
  alternates: { canonical: "https://macbrownflyfish.com/drift-boat-rowing-school/" },
  openGraph: {
    title: "Row Your Own Water — Oar Frame Rowing School | Mac Brown Fly Fish",
    description: "Two days on the oars in the mountain rivers of the Great Smoky Mountains. All skill levels welcome. Bryson City, NC.",
    url: "https://macbrownflyfish.com/drift-boat-rowing-school/",
    images: [{ url: "https://macbrownflyfish.com/images/drift-boat-hero.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Row Your Own Water — Oar Frame Rowing School | Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/drift-boat-hero.webp"],
  },
};

const whoForItems = [
  "Complete beginners who have always wanted to run rivers and never known where to start",
  "Anglers who want to row their own drift boat for fly fishing float trips",
  "Outdoor enthusiasts planning river exploration, camping, or overnight watershed adventures",
  "Anyone who currently rows but knows their foundation has gaps they've never properly addressed",
  "Guides and outfitters wanting to sharpen their oar skills and expand their professional capabilities",
  "Families and groups who want to share the river experience safely and confidently together",
];

const curriculum = [
  { title: "River Reading — The Foundation of Everything", body: "The river is constantly communicating. Eddies, seams, hydraulics, pillows, holes, and tongues — every feature is a sentence in a language that, once learned, makes the water feel like a map rather than a mystery. River reading is the single most important skill a rower can develop, and two days of guided instruction accelerates that understanding dramatically." },
  { title: "Whitewater Classification & Grading Systems", body: "Understanding the international whitewater grading system — Class I through Class VI — gives every river runner a universal language for assessing conditions, communicating with other paddlers, and making smart decisions about which water is right for their current skill level." },
  { title: "Boat & River Terminology", body: "From river left and river right to ferry angles, pivot points, and the anatomy of a hydraulic — this shared language makes instruction clearer, communication faster, and decision-making on the water more precise. You will leave speaking the language of the river fluently." },
  { title: "Craft Maneuverability & Control", body: "This is where the oars become an extension of your intention. Learn the fundamental strokes — the draw, the push, the pry, the ferry — and understand not just how to execute each one but when and why to reach for it. Boat control is the difference between going where the river takes you and going where you decide to go." },
  { title: "Stroke Diagnostics — Fix What Isn't Working", body: "Every rower develops habits — some good, some not. Having experienced, certified eyes watching your strokes and providing immediate, specific feedback is something you simply cannot get from a book, a video, or solo time on the water. Most inefficiencies are corrected quickly once they are identified clearly." },
  { title: "Boat Rigging & Weight Placement", body: "A properly rigged boat is a safer, more responsive, and more enjoyable boat. Learn how to set up your oar frame correctly, distribute weight for optimal trim and maneuverability, secure gear for moving water, and outfit your craft for the specific type of river running you love most." },
  { title: "Safety Fundamentals", body: "Confidence on the river is built on a foundation of safety awareness, not recklessness. Learn river rescue fundamentals, swimmer protocols, strainer and hazard recognition, and the decision-making frameworks that keep every river trip a great story rather than a cautionary one." },
  { title: "Reading & Running Lines", body: "Once you can read the water and control the boat, the next step is putting them together — identifying the best line through a rapid and executing it with intention. Learn to scout effectively, commit to a line confidently, and adjust in real time when the river does what rivers always do: surprise you." },
  { title: "Gear, Equipment & Outfitting", body: "What do you actually need on the river — and what is marketing noise? Learn the essential gear for safe and enjoyable river running, how to evaluate and select the right equipment for your style of rowing, and how to care for and maintain what you have." },
];

export default function RiverNavigationAcademy() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "1550",
        name: "Oar Frame Rowing School — Drift Boat Instruction, Smoky Mountains NC",
        description: "Two-day oar frame rowing and drift boat school in Bryson City, North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a professional guide on the Tuckasegee River since 1987. Students learn to read moving water, control a drift boat in current, manage oar angle and pivot positioning, and navigate safely through river features. This school is built for aspiring fishing guides and serious anglers who want to add rowing skills to their time on the water. All gear is provided.",
        url: "/drift-boat-rowing-school",
        image: "https://macbrownflyfish.com/images/drift-boat-hero.webp",
        educationalLevel: "Intermediate to Advanced",
        coursePrerequisites: "Basic river familiarity is helpful but not required. No prior drift boat or oar frame experience needed — this school teaches rowing from scratch in a safe, structured environment.",
        teaches: [
          "Oar frame setup and rowing position",
          "River reading and hazard recognition",
          "Downstream rowing and ferry technique",
          "Pivot and angle control in moving current",
          "Anchoring in current and eddy work",
          "Client positioning and guide communication from the oars",
          "Safe navigation of Class I–III water",
        ],
        sessions: [{ startDate: "2026-04-25", endDate: "2026-04-26" }, { startDate: "2026-09-19", endDate: "2026-09-20" }],
      })} />
      <SchemaScript schema={faqPageSchema([
        { q: "What is the Oar Frame Rowing School?", a: "The Oar Frame Rowing School is a fun, 2-day rowing and drift boat school in Bryson City, North Carolina, led by instructors with 450 years of combined rowing experience, among the best rowers in the region. It teaches the skills needed to safely and effectively navigate a drift boat or oar frame through moving water — reading the river from the rowing seat, ferry angles, eddy turns, boat setup, and river safety." },
        { q: "How much does the Oar Frame Rowing School cost?", a: "The Oar Frame Rowing School is $1,550 per person for both days of on-water instruction and classroom discussion." },
        { q: "Who should attend the Oar Frame Rowing School?", a: "The school is designed for aspiring fly fishing guides, serious boaters who want to improve their rowing skills, and anyone who wants to operate a drift boat or oar frame safely and confidently on moving water. Prior rowing experience is helpful but not required." },
        { q: "What does the rowing curriculum cover?", a: "The curriculum covers oar frame setup and rigging, reading the river from the rowing seat, ferry angles, eddy turns, maneuvering in current, anchoring, downstream and upstream rowing techniques, and river safety. The academy is taught on the rivers of the Great Smoky Mountains." },
        { q: "What is the cancellation and payment policy?", a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you. PAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
      ])} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img
          src={img("/images/drift-boat-hero.webp")}
          srcSet={`${img("/images/mobile/drift-boat-hero.webp")} 1280w, ${img("/images/drift-boat-hero.webp")} 1920w`}
          sizes="100vw"
          alt="Drift boat on moving water — Oar Frame Rowing School, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, NC · Great Smoky Mountains
          </p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Row Your Own Water — Drift Boat Lessons for Anglers
          </h1>
          <p className="font-serif italic text-white/70 text-lg md:text-xl mt-3 sm:mt-5 max-w-2xl">
            Oar frame lessons in the Smokies
          </p>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Oar Frame Rowing School is a fun, two-day rowing and drift boat school in Bryson City, North Carolina — <PriceTag priceKey="riverNavigationAcademy" as="span" />, led by instructors with 450 years of combined rowing experience, among the best rowers in the region. It&rsquo;s built for recreational anglers who already own a boat, plus families, friends, and adventure seekers who want to explore the river, plan a river overnight, and get out there safely and with confidence on the oars. The curriculum covers oar frame setup, river reading from the rowing seat, ferry angles, eddy turns, and boat safety — practical skills for everyday boat owners, not just aspiring guides.
          </p>
        </div>
      </section>

      {/* DATES STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="shrink-0 opacity-70" />
            <span className="text-sm font-semibold tracking-wide">April 25–26, 2026</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3">
            <Calendar size={16} className="shrink-0 opacity-70" />
            <span className="text-sm font-semibold tracking-wide">September 19–20, 2026</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3">
            <MapPin size={16} className="shrink-0 opacity-70" />
            <span className="text-sm font-semibold tracking-wide">Bryson City, NC</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <PriceTag priceKey="riverNavigationAcademy" as="span" className="text-sm font-bold tracking-wide" />
        </div>
      </div>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            There is a moment every river runner chases — when the read was right, the line was clean, and the boat went exactly where you wanted it. When the water that once felt chaotic and unpredictable begins to speak a language you finally understand. That moment is closer than you think. And it starts here, in the mountain rivers of the Great Smoky Mountains, with two days of instruction that will change the way you see moving water forever.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            The Oar Frame Rowing School is not a survival course. It is not a white-knuckle crash introduction to whitewater. It is a positive, enthusiastic, genuinely fun two-day foundation in the skills, knowledge, and confidence that turn the river from something intimidating into something you can't wait to get back to.
          </p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">
              "The river rewards the prepared. Two days on the oars with the right instruction builds the foundation that makes every future river trip safer, smarter, and infinitely more enjoyable."
            </p>
          </blockquote>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">Who This Academy Is For</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
                All skill levels.<br />All backgrounds.
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                You do not need experience to show up. You need curiosity, enthusiasm, and the willingness to get on the oars. Everything else is built here from the ground up.
              </p>
            </div>
            <div className="lg:w-2/3">
              <ul className="space-y-4">
                {whoForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/dsc-2190.webp")} alt="Rowing a drift boat on a mountain river in Western North Carolina — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/fall-river-fishing.webp")} alt="Fall fly fishing on a mountain river in the Great Smoky Mountains — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* CURRICULUM */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What You Will Learn</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Curriculum Highlights
          </h2>
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

      {/* THE VENUE */}
      <section className="py-28 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4 text-center">The Venue</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Western North Carolina's finest teaching rivers
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The rivers of Western North Carolina are among the finest whitewater teaching venues in the eastern United States. The Tuckasegee, the Nantahala, and the broader network of mountain rivers flowing through the Great Smoky Mountains offer a diverse and endlessly engaging classroom — varied currents, readable features, and enough challenge to build real skills without overwhelming the learner.
            </p>
            <p>
              Bryson City sits at the center of all of it. One of the most beautiful small towns in the Appalachian Mountains, it offers comfortable lodging, excellent food, and the kind of outdoor culture that makes two days on the river feel like the beginning of something much larger. Many participants extend their stay to fish the surrounding water, hike the national park, or simply spend more time on the river that brought them here.
            </p>
          </div>
        </div>
      </section>

      {/* THE INSTRUCTORS */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4 text-center">The Instructors</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Over 450 years of combined rowing experience
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The Oar Frame Rowing School is led by a highly skilled team of certified instructors who collectively bring over 450 years of rowing experience on rivers across the globe — from the mountain streams of the Southern Appalachians to whitewater destinations on multiple continents. These are not seasonal guides filling summer hours. They are lifelong river runners who love to teach, love to watch confidence build in real time, and love the moment a student reads their first rapid correctly and acts on it.
            </p>
            <p>
              Mac Brown and his team bring the same depth of knowledge, passion for instruction, and commitment to genuine education that defines every program offered here — from fly casting schools to guided fishing trips. The camaraderie that develops within each academy group is consistently one of the highlights participants mention most.
            </p>
            <blockquote className="border-l-2 border-primary pl-6">
              <p className="font-serif text-lg italic text-foreground">
                "We have seen complete beginners arrive nervous and uncertain, and leave two days later talking about which river they want to run next. That transformation never gets old."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">River Running Opens Everything</p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Learn to row, and the river is no longer a boundary — it is an invitation. Fish water that wading anglers and bank fishers never reach. Camp on gravel bars that can only be accessed by boat. Explore watershed miles that most people only ever see on a map. The skills you build in this academy travel with you to every river you ever float — in North Carolina and beyond.
          </p>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">
              "Time on the oars is the best teacher. But time on the oars with the right foundation gets you further, faster, and safer than years of figuring it out alone."
            </p>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-10">Ready to Register</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-white border border-border p-8 flex flex-col">
              <div className="mb-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Two-Day School</p>
                <h2 className="font-serif text-xl font-bold text-foreground">Oar Frame Rowing School</h2>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {[
                  "April 25–26 · September 19–20, 2026",
                  "Certified Whitewater Instructors",
                  "All skill levels welcome",
                  "All equipment provided",
                  "Bryson City, NC · Great Smoky Mountains",
                ].map((inc, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={13} className="text-primary shrink-0" />{inc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors">
                  Register <ArrowRight size={13} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] pt-2 hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Two dates. Two chances.
          </h2>
          <p className="font-serif italic text-primary-foreground/80 text-lg mb-3">
            April 25–26 · September 19–20 · Bryson City, NC
          </p>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">
            The river does not ask for perfection. It asks for preparation, awareness, and the willingness to learn its language. This academy gives you all three.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Inquire &amp; Register <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+18287361469"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Call (828) 736-1469
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
