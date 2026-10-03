import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Dry Fly Fishing School North Carolina — Surface Presentation Instruction | Mac Brown Fly Fish" },
  description: "Dry fly fishing schools and surface presentation instruction in Bryson City, NC. Learn to match the hatch, read rising fish, and achieve drag-free drifts on wild Smoky Mountain trout. Mac Brown, FFI Lifetime Achievement Award recipient. All skill levels.",
  alternates: { canonical: "https://macbrownflyfish.com/dry-fly-school-north-carolina/" },
  openGraph: {
    title: "Dry Fly Fishing School — Bryson City, North Carolina",
    description: "Master matching the hatch, surface presentation, and drag-free drift on wild Smoky Mountain trout. Instruction with Mac Brown, FFI Lifetime Achievement Award, since 1987.",
    url: "https://macbrownflyfish.com/dry-fly-school-north-carolina/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-pool-reflection.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Who teaches the dry fly school?",
    a: "Mac Brown — recipient of the FFI Lifetime Achievement Award (2023) and the only FFI Master Casting Instructor in North Carolina, the highest casting designation in the sport. Mac has been teaching fly fishing in Bryson City since 1987 and has presented nationally at The Fly Fishing Show since 1994. Nearly four decades of watching students fish, developing the language and the drills that make dry fly presentation finally click.",
  },
  {
    q: "Do I need to be an experienced fly fisher to take dry fly instruction?",
    a: "No. We teach you how to see the fish eat the bug from square one — reading the surface, identifying the rise form, selecting the fly, presenting it correctly, and detecting the take. If you have basic casting ability, you are ready. If you are unsure about your casting, a combined casting-and-dry-fly session is the right starting point.",
  },
  {
    q: "What is 'matching the hatch' and do I need to know entomology?",
    a: "Matching the hatch means presenting the fly the trout are actually eating at that moment — the right size, shape, and color. You do not need to memorize Latin names. Mac teaches you to read what is happening on the water, identify the key insect by sight and behavior, and select from a manageable range of patterns that cover the most important hatches on Western NC streams.",
  },
  {
    q: "What is a drag-free drift and why does it matter so much?",
    a: "A drag-free drift is when your fly floats naturally on the current at the same speed as the real insects — without being pulled unnaturally by your fly line. Fish feeding selectively at the surface will refuse a fly moving differently from everything else around it. Achieving a drag-free drift across conflicting current seams is the central challenge of dry fly fishing, and the primary focus of this instruction.",
  },
  {
    q: "What fish will I encounter on dry fly water?",
    a: "Wild rainbow trout and brown trout throughout the Tuckasegee River and GSMNP streams. Native brook trout at higher-elevation park water — one of the most beautiful and increasingly rare trout in eastern North America. Wild fish that have not been conditioned by hatchery feeding are far more selective than stocked fish, which makes reading their rise forms and matching their food genuinely rewarding when you get it right.",
  },
  {
    q: "What waters do dry fly schools fish?",
    a: "Instruction takes place on the Tuckasegee River in Bryson City and wild streams of Great Smoky Mountains National Park. The park streams are exceptional dry fly water — clear, wild, and full of classic riffle-pool-run structure that rewards precise surface presentation. Spring and fall are the most productive dry fly seasons, though surface fishing is good throughout the year on the right water.",
  },
  {
    q: "Do I need my own gear?",
    a: "Absolutely not. All rods, reels, fly lines, leaders, tippet, and flies are provided — premium tackle matched to the presentation style of the day. You are welcome to bring your own rod if you prefer, especially if you want instruction tailored to your specific setup.",
  },
  {
    q: "Is a fishing license required?",
    a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For the Tuckasegee River between October and the end of May, out-of-state visitors may also use the Mountain Heritage Trout Waters Day License as a less expensive alternative — it is not required, just an option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City.",
  },
];

const curriculum = [
  { concept: "Reading the water's surface", benefit: "Know where rising fish are before you make your first cast" },
  { concept: "Matching the hatch", benefit: "Fish the pattern the trout are actually eating — not just one that looks good in the box" },
  { concept: "Reach cast and curve cast", benefit: "Present across conflicting currents without dragging the fly off course" },
  { concept: "Tippet selection and leader construction", benefit: "A connection fine enough that leader shadow will not put fish down" },
  { concept: "Drag-free drift mechanics and mending", benefit: "Keep your fly floating naturally long enough for a confident, committed take" },
  { concept: "Rise form identification", benefit: "Tell the difference between a sipping fish and a slashing fish — and respond correctly to each" },
  { concept: "Hook-setting on surface takes", benefit: "Stop missing the fish that eat your dry fly" },
];

export default function DryFlySchoolNC() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "700",
        name: "Dry Fly Fishing School — Surface Presentation Instruction, Bryson City NC",
        description: "Dry fly fishing schools and surface presentation instruction with Mac Brown — recipient of the FFI Lifetime Achievement Award (2023) and the only FFI Master Casting Instructor in North Carolina, teaching since 1987. Learn to match the hatch, achieve drag-free drifts, and fish rising trout on wild Smoky Mountain streams. Private sessions tailored to all skill levels from complete beginners to technical anglers preparing for demanding, selective water.",
        url: "/dry-fly-school-north-carolina",
        image: "https://macbrownflyfish.com/images/fall-pool-reflection.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "No experience required. Basic casting ability helpful but not necessary — casting instruction can be combined with dry fly instruction in a single session.",
        teaches: [
          "Reading rising trout and surface feeding behavior",
          "Matching the hatch — identifying insects and selecting fly patterns",
          "Reach cast, curve cast, and slack-line presentations",
          "Drag-free drift mechanics and mending",
          "Tippet selection and fine leader construction",
          "Hook-setting on surface takes",
          "Reading dry fly water — riffles, flats, and back eddies",
        ],
      })} />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-pool-reflection.webp")}
          srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`}
          sizes="100vw"
          alt="Wild trout rising to a dry fly on a Smoky Mountain stream — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountains · Bryson City, North Carolina · Since 1987</p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Dry Fly Fishing Schools &amp; Surface Presentation Instruction
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
            Mac Brown Fly Fish offers dry fly fishing schools and surface presentation instruction in Bryson City, North Carolina — taught by Mac Brown, recipient of the FFI Lifetime Achievement Award and the only FFI Master Casting Instructor in North Carolina, teaching since 1987. Learn to match the hatch, read rising trout, and achieve drag-free drifts on wild Smoky Mountain streams. Private sessions for all skill levels — complete beginners through technical anglers preparing for selective, demanding water.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">The rise. The presentation. The eat.</p>
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
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">Perfect if you want dedicated dry fly coaching on wild mountain streams — tailored completely to your pace, your goals, and what the fish are doing that day. Wade the Tuckasegee or fish the park streams with Mac reading the water and explaining what he sees as you go.</p>
              <ul className="space-y-2 mb-8">
                {["1 or 2 anglers, same rate", "Half day or full day", "All gear provided", "Hands-on coaching on active trout water"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/instructional-guided-trips" className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors w-full">
                See Instructional Guided Trips <ArrowRight size={13} />
              </Link>
            </div>
            <div className="bg-primary text-primary-foreground p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Path B — Multi-Day Immersion</p>
              <h3 className="font-serif text-xl font-bold mb-4">Dry Fly Weekend Clinic</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">Our dedicated dry fly clinic — a full weekend focused entirely on surface presentation: matching the hatch, reading rises, drag-free drift, and the casts that make it all work. Deep mechanics, real water, real fish. Education, not entertainment.</p>
              <ul className="space-y-2 mb-8">
                {["Multi-day intensive format", "Casting and on-water instruction combined", "Small group, expert coaching", "Skills that hold — not tips that fade"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-primary-foreground/80"><Check size={13} className="text-primary-foreground shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/dry-fly-clinic" className="mt-auto inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors w-full">
                See the Dry Fly Clinic <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <p>
            Dry fly fishing is the most visible, most satisfying, and most humbling branch of the sport. You can see the fish. You can see the fly. You can see the refusal. There is nowhere to hide — and that transparency is exactly what makes it so compelling to get right. When a wild trout rises confidently and takes your fly from the surface, that moment does not repeat itself.
          </p>
          <p>
            The challenge is genuine: rising trout are often feeding selectively on a specific insect at a specific stage. The drift has to be right — not almost right, but actually right — across currents pulling your line at three different speeds. The presentation has to land soft enough not to spook a fish that has been sitting in clear water watching everything that passes overhead.
          </p>
          <p>
            These are learnable skills. The key is instruction from someone who has been fishing this water and watching students learn since 1987 — and who has spent that time building plain language for complex things, one concept at a time, until it actually sticks.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "The most consistent dry fly anglers I know are not the most talented — they are the ones who understand exactly what they are doing and why. That understanding is what this instruction builds."
          </blockquote>
        </div>
      </section>

      {/* CURRICULUM MATRIX */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">What You Learn</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Dry Fly Curriculum</h2>
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
          <img src={img("/images/fall-pool-reflection.webp")} srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`} sizes="50vw" alt="Dry fly pool on the Tuckasegee River — Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="h-64 md:h-96 overflow-hidden">
          <img src={img("/images/guide-fish-2.webp")} srcSet={`${img("/images/guide-fish-2-1280.webp")} 1280w, ${img("/images/guide-fish-2.webp")} 1600w`} sizes="50vw" alt="Wild Smoky Mountain trout — Mac Brown Fly Fish guided instruction" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* HOW MAC TEACHES */}
      <section className="py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl font-bold text-foreground">How Mac Teaches</h2>
          <p>
            Mac teaches by feel before he teaches by name. Before a cast has a label — reach cast, curve cast, parachute mend — you feel it working in your hand. The rod tracks correctly, the line lays down in the right shape, the fly lands where it needs to land. The name comes after, anchored to something you have already experienced.
          </p>
          <p>
            After nearly four decades of watching students fish dry flies, Mac has developed plain language for each piece of the puzzle. No jargon. No rigid stance requirements. No formulas. He tells you what he sees and explains it in terms of what you can see and feel — and then the river does the teaching while he watches and adjusts.
          </p>
          <ul className="space-y-3 mt-4">
            {[
              "Feel-first — you experience it before you label it",
              "Plain language for complex concepts — no jargon, no confusion",
              "Real water, real fish — every concept taught in context, not on a lawn",
              "Immediate, specific feedback — not general encouragement",
              "Drills that hold between sessions — improvement that stays with you",
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
              Mac Brown Fly Fish is based in Bryson City, NC — the gateway to some of the finest wild trout water in the East. Dry fly instruction takes place on the Tuckasegee River and wild streams of Great Smoky Mountains National Park.
            </p>
            <ul className="space-y-2">
              {[
                "All rods, reels, fly lines, and flies provided",
                "Wild Smoky Mountain streams and Tuckasegee River",
                "Sessions available year-round",
                "1–2 students per session, same rate",
                "Online video coaching available worldwide",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Ready to Fish Dry Flies?</p>
              <h3 className="font-serif text-2xl font-bold mb-4">Book Your Session</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">Private, tailored instruction on wild Smoky Mountain trout water. All gear provided. All skill levels welcome.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors">
                Book a Session <ArrowRight size={13} />
              </Link>
              <Link href="/dry-fly-clinic" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/10 transition-colors">
                See the Dry Fly Clinic
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
