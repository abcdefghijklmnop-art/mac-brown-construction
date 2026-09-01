import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Nymph Fishing School NC — Advanced Nymph Instruction, Smoky Mountains | Mac Brown Fly Fish" },
  description: "Nymph fishing schools and tactical instruction in Bryson City, NC. Master tight-line, high-sticking, and indicator nymphing on wild Smoky Mountain streams. Trout eat 90% of their food underwater — learn to fish where they actually are. Mac Brown, Hall of Fame, MCI.",
  alternates: { canonical: "https://macbrownflyfish.com/nymph-fishing-school-nc/" },
  openGraph: {
    title: "Nymph Fishing School — Bryson City, North Carolina",
    description: "Tight-line, high-sticking, and indicator nymph instruction on wild Smoky Mountain trout. Mac Brown, Southern Fly Fishing Hall of Fame inductee. Bryson City NC, since 1987.",
    url: "https://macbrownflyfish.com/nymph-fishing-school-nc/",
    images: [{ url: "https://macbrownflyfish.com/images/flies-closeup.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Who teaches the nymph fishing school?",
    a: "Mac Brown — Southern Fly Fishing Hall of Fame inductee (2017), recipient of the Mel Krieger Casting Instructor Award (2021), and the only FFI Master Casting Instructor in North Carolina. Mac has been guiding and teaching nymph fishing on Smoky Mountain streams since 1987, with over four decades developing the teaching approach that produces real, measurable improvement on the water — not just a new set of ideas to carry home.",
  },
  {
    q: "Why choose nymphing over dry fly or wet fly fishing?",
    a: "Because trout eat 90% of their food underwater. On any given day, the number of fish actively rising to the surface is a small fraction of the fish that are feeding. Nymphing puts your fly where the fish actually are — in the water column, near the bottom, where nymphs, larvae, and subsurface food items are constantly drifting past. Mastering nymphing does not mean ignoring dry flies. It means being able to catch fish all day instead of only during the brief windows when fish are rising.",
  },
  {
    q: "What is the difference between tight-line nymphing and indicator nymphing?",
    a: "Tight-line (or European-style) nymphing uses no indicator — the angler maintains direct contact between the rod tip and the flies, feeling every tick, bump, and hesitation in the drift. It is extremely sensitive and effective in fast, broken water. Indicator nymphing suspends a float on the leader to signal strikes, which makes depth control more precise in slower, deeper water. Both methods have their place, and Mac teaches both — the goal is knowing which system fits the water in front of you.",
  },
  {
    q: "What is high-stick nymphing?",
    a: "High-sticking is a tight-line nymphing technique where the rod is held high to lift as much fly line off the water as possible, reducing drag and maintaining direct contact with the flies. It is one of the most effective methods for pocket water and fast freestone streams — exactly the kind of water found throughout the Smokies. It requires understanding current reading and drift management, which is covered in depth during instruction.",
  },
  {
    q: "Do I need experience before taking nymph instruction?",
    a: "No experience required. Beginners learn nymphing from the ground up — which is actually a significant advantage, since you are not unlearning habits that work against you. Experienced nymph fishers who have hit a ceiling in their results often find that a single session identifies the specific gap — strike detection, depth control, fly selection — that is quietly costing them fish every time they are on the water.",
  },
  {
    q: "What waters do nymph fishing schools fish?",
    a: "Nymph instruction takes place on the Tuckasegee River and wild streams of Great Smoky Mountains National Park. The park streams are exceptional nymph water — fast, clear freestone streams full of wild rainbow trout, brown trout, and native brook trout at higher elevations. The Tuckasegee provides broader, more varied water ideal for learning indicator nymphing and reading different types of holding structure.",
  },
  {
    q: "Do I need my own gear?",
    a: "Absolutely not. All rods, reels, fly lines, leaders, indicators, split shot, and flies are provided — including European-style nymphing setups and traditional indicator rigs. You are welcome to bring your own rod if you prefer, especially if you want instruction specific to your setup.",
  },
  {
    q: "Is a fishing license required?",
    a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For the Tuckasegee River between October and the end of May, out-of-state visitors may also use the Mountain Heritage Trout Waters Day License as a less expensive alternative — not required, just an option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City.",
  },
];

const curriculum = [
  { concept: "High-stick and tight-line nymphing", benefit: "Feel every tick and subtle take — strike detection that does not rely on watching an indicator" },
  { concept: "European (Czech) nymph technique", benefit: "Put a fly within inches of the bottom in fast pocket water where most anglers cannot reach" },
  { concept: "Indicator nymphing and depth control", benefit: "Set your depth precisely and detect strikes cleanly in slower, deeper holding water" },
  { concept: "Fly weight and bead selection", benefit: "Get to the bottom of fast runs without snagging or bouncing uselessly above the fish" },
  { concept: "Reading nymph water — seams, depth, and structure", benefit: "Find where feeding fish stack up before the first cast, not after the tenth drift" },
  { concept: "Strike detection and hook-setting", benefit: "Stop reacting late — start anticipating the take and converting opportunities into fish" },
  { concept: "Leader construction for nymph systems", benefit: "Build leaders that track correctly and turn over heavy flies without collapsing in a heap" },
];

export default function NymphFishingSchoolNC() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "700",
        name: "Nymph Fishing School — Advanced Tactical Instruction, Bryson City NC",
        description: "Nymph fishing schools and tactical instruction with Mac Brown — Southern Fly Fishing Hall of Fame inductee, recipient of the Mel Krieger Casting Instructor Award (2021), and the only FFI Master Casting Instructor in North Carolina, teaching since 1987. Master tight-line, high-sticking, and indicator nymphing on wild Smoky Mountain streams. Trout eat 90% of their food underwater — learn to fish where they actually are. All skill levels welcome.",
        url: "/nymph-fishing-school-nc",
        image: "https://macbrownflyfish.com/images/flies-closeup.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "No experience required. Sessions customized from first-time nymph fishers through experienced anglers targeting specific tactical improvements.",
        teaches: [
          "High-stick and tight-line nymphing technique",
          "European (Czech) nymph method for fast, pocket water",
          "Indicator nymphing — depth control and strike detection",
          "Fly weight and bead selection for various water types",
          "Reading nymph water — current seams, depth changes, and holding structure",
          "Strike detection and hook-setting in nymph fishing",
          "Leader construction for tight-line and indicator nymph systems",
        ],
      })} />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/flies-closeup.webp")}
          srcSet={`${img("/images/mobile/flies-closeup.webp")} 800w, ${img("/images/flies-closeup.webp")} 1600w`}
          sizes="100vw"
          alt="Nymph flies hooked in rod cork — Mac Brown Fly Fish nymph fishing instruction, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountains · Bryson City, North Carolina · Since 1987</p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Advanced Nymph Fishing Schools &amp; Tactical Instruction
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/reserve" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book a Session <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Mac Brown Fly Fish offers nymph fishing schools and tactical subsurface instruction in Bryson City, North Carolina — taught by Mac Brown, Southern Fly Fishing Hall of Fame inductee and the only FFI Master Casting Instructor in North Carolina, teaching since 1987. Trout eat 90% of their food underwater. Master tight-line nymphing, high-sticking, European technique, and indicator methods on wild Smoky Mountain streams. Private sessions for all skill levels — complete beginners through experienced nymph anglers targeting specific tactical improvements.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">Fish where the fish actually are.</p>
        </div>
      </section>

      {/* FORK IN THE RIVER */}
      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">Choose Your Path</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Fork in the River</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-border p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Path A</p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">1-on-1 Instructional Guided Trip</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">Custom nymph coaching on wild Smoky Mountain streams or the Tuckasegee — 1-on-1 or 2-angler, tailored to your pace. Mac reads the water, identifies the holding structure, and coaches you through the nymph presentation in real time as you fish together.</p>
              <ul className="space-y-2 mb-8">
                {["1 or 2 anglers, same rate", "Half day or full day", "All gear provided", "Real-time coaching on active, productive water"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/instructional-guided-trips" className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors w-full">
                See Instructional Guided Trips <ArrowRight size={13} />
              </Link>
            </div>
            <div className="bg-primary text-primary-foreground p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Path B — Multi-Day Immersion</p>
              <h3 className="font-serif text-xl font-bold mb-4">Nymph Fishing Weekend Clinic</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">Our dedicated nymph clinic — a full weekend immersed in every layer of the subsurface game: tight-line, indicator, reading water, fly selection, and strike detection. Structured progression across two full days of casting and on-water instruction.</p>
              <ul className="space-y-2 mb-8">
                {["Multi-day intensive format", "Both tight-line and indicator systems", "Small group, expert coaching", "The complete nymph toolkit in one weekend"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-primary-foreground/80"><Check size={13} className="text-primary-foreground shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/nymph-fishing-clinic" className="mt-auto inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors w-full">
                See the Nymph Fishing Clinic <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <p>
            Trout eat 90% of their food underwater. On most rivers, on most days, the fish actively rising to the surface represent a small fraction of the trout that are actively feeding. The rest are holding near the bottom, in the current seams, in the pockets behind rocks — eating nymphs and larvae as they drift past. Nymphing is how you reach those fish.
          </p>
          <p>
            It is also one of the most tactically rewarding forms of fly fishing. Reading the water, selecting the right fly and weight, managing the drift at the right depth, detecting the take before the fish spits the hook — each piece of the system requires understanding and attention. When all of it comes together, the result is a level of consistency on the water that dry fly fishing alone cannot deliver.
          </p>
          <p>
            Mac Brown has been teaching tight-line, high-stick, and indicator nymphing on Smoky Mountain freestone streams since 1987. He knows this water, he knows the fish, and he has spent four decades developing the language that makes complex nymph technique learnable in a single day on the water.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "Once you understand what the fish are doing underneath the surface and how the nymph needs to behave to imitate it, the whole system becomes logical. That is the goal — making you a more logical angler."
          </blockquote>
        </div>
      </section>

      {/* CURRICULUM MATRIX */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">What You Learn</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Nymph Fishing Curriculum</h2>
          <div className="border border-border overflow-hidden">
            <div className="grid grid-cols-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3">
              <span>What We Work On</span>
              <span>What You Get Out of It</span>
            </div>
            {curriculum.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 px-6 py-4 gap-6 text-sm border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-muted/20"}`}>
                <span className="text-foreground font-medium">{row.concept}</span>
                <span className="text-muted-foreground">{row.benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2">
        <div className="h-64 md:h-96 overflow-hidden">
          <img src={img("/images/tuckasegee-summer.webp")} srcSet={`${img("/images/tuckasegee-summer-1280.webp")} 1280w, ${img("/images/tuckasegee-summer.webp")} 1600w`} sizes="50vw" alt="Nymph fishing the Tuckasegee River — Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="h-64 md:h-96 overflow-hidden">
          <img src={img("/images/guide-trip-1.webp")} srcSet={`${img("/images/guide-trip-1-1280.webp")} 1280w, ${img("/images/guide-trip-1.webp")} 1600w`} sizes="50vw" alt="Wild Smoky Mountain trout caught nymphing — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* HOW MAC TEACHES */}
      <section className="py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl font-bold text-foreground">How Mac Teaches</h2>
          <p>
            Nymph fishing has more moving parts than any other fly fishing technique — depth, drift speed, strike detection, fly selection, reading structure, managing the leader. Mac teaches it in layers, not all at once. You start with the piece you need most, get it working, and then add the next layer on top of something you already understand.
          </p>
          <p>
            After four decades of watching students nymph fish, Mac knows exactly which piece of the system most anglers are missing. He tells you what it is, shows you the correction, and stays with you until it holds — not until you nod, but until you can actually do it without thinking about it.
          </p>
          <ul className="space-y-3 mt-4">
            {[
              "Layer-by-layer instruction — one piece at a time, built on what you already have",
              "Water reading before the cast — identify the structure before choosing the rig",
              "Both tight-line and indicator systems — the right tool for the water in front of you",
              "Strike detection as a skill — not just watching, but anticipating",
              "Specific corrections, held until they stick — no vague encouragement",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm"><Check size={13} className="text-primary shrink-0 mt-1" />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={faqs} />

      {/* LOCAL LOGISTICS + CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Location &amp; Logistics</p>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-5">Bryson City, North Carolina</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Mac Brown Fly Fish is based in Bryson City, NC. Nymph instruction takes place on the Tuckasegee River and wild freestone streams of Great Smoky Mountains National Park — some of the finest pocket water and nymph fishing in the eastern United States.
            </p>
            <ul className="space-y-2">
              {[
                "All rods, reels, fly lines, leaders, and flies provided",
                "Tight-line and indicator nymph rigs included",
                "Tuckasegee River and GSMNP streams",
                "Sessions available year-round",
                "1–2 students per session, same rate",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Ready to Fish Deeper?</p>
              <h3 className="font-serif text-2xl font-bold mb-4">Book Your Session</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">Private, tailored nymph instruction on wild Smoky Mountain trout water. All gear and rigs provided. All skill levels welcome.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors">
                Book a Session <ArrowRight size={13} />
              </Link>
              <Link href="/nymph-fishing-clinic" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/10 transition-colors">
                See the Nymph Fishing Clinic
              </Link>
              <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/10 transition-colors">
                <Phone size={13} /> (828) 736-1469
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
