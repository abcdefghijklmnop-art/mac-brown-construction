import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Wet Fly Fishing Clinics & Subsurface Instruction — Smoky Mountains NC | Mac Brown Fly Fish" },
  description: "Wet fly fishing clinics and subsurface presentation instruction in Bryson City, NC. Master the wet fly swing, manage line tension, and rig multi-fly setups on wild Smoky Mountain streams. Mac Brown, Field & Stream Angler of the Year, MCI. All skill levels.",
  alternates: { canonical: "https://macbrownflyfish.com/wet-fly-instruction-smokies/" },
  openGraph: {
    title: "Wet Fly Fishing Clinics — Bryson City, North Carolina",
    description: "Master the wet fly swing, subsurface presentation, and multi-fly rigging on wild Smoky Mountain trout. Instruction with Mac Brown, Field & Stream Angler of the Year, since 1987.",
    url: "https://macbrownflyfish.com/wet-fly-instruction-smokies/",
    images: [{ url: "https://macbrownflyfish.com/images/tuck-river-spey.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Who teaches wet fly instruction at Mac Brown Fly Fish?",
    a: "Mac Brown — Field & Stream Angler of the Year, recipient of the Mel Krieger Casting Instructor Award (2021) for outstanding contribution to fly fishing instruction, and the only FFI Master Casting Instructor in North Carolina. Mac has been guiding and teaching on Smoky Mountain streams since 1987 and has presented wet fly techniques at The Fly Fishing Show since 1994. That experience translates directly into clear, immediately useful instruction on the water.",
  },
  {
    q: "What is the wet fly swing and why is it so effective?",
    a: "The wet fly swing is a down-and-across presentation where the current swings the fly through the water column in a controlled, natural arc. Trout — especially in moving water — respond to a fly that moves like a struggling nymph or emerging insect. The swing triggers the take without requiring the angler to guess when to set the hook — you feel it. On the right water, the wet fly swing is the most efficient way to cover productive ground and consistently find feeding fish.",
  },
  {
    q: "What is the difference between a wet fly, a dry fly, and a nymph?",
    a: "A dry fly floats on the surface and imitates an adult insect. A nymph rides near the bottom and imitates the larval stage of an insect. A wet fly fishes in the water column between those two zones — often imitating an emerging insect, a drowned adult, or a small baitfish. Wet flies are typically fished with the current doing most of the work, which makes them uniquely effective and uniquely satisfying to fish once you understand the mechanics.",
  },
  {
    q: "Do I need experience with wet flies before this instruction?",
    a: "No experience required. If you can make a basic cast, you can learn the wet fly swing. Mac starts from zero — proper down-and-across presentation, reading the right seams and water types, managing tension, and building up to multi-fly rigs as your confidence grows. Anglers who have tried wet flies on their own and found the results inconsistent often leave a single session with a completely different understanding of what they were doing wrong.",
  },
  {
    q: "What flies will we use in wet fly instruction?",
    a: "Classic soft hackle wet flies, spider patterns, and traditional downstream patterns matched to what is active on the water. Mac keeps a comprehensive selection — partridge and orange, pheasant tail soft hackle, March Brown, Leisenring patterns, and regional Smoky Mountain wets. You do not need to bring your own flies unless you have specific patterns you want to fish.",
  },
  {
    q: "What waters do wet fly clinics fish?",
    a: "Wet fly instruction takes place on the Tuckasegee River and wild streams of Great Smoky Mountains National Park. The Tuckasegee is classic wet fly water — broad riffles, defined seams, and consistent current that makes the swing predictable and productive. Park streams offer tighter, faster pocket water ideal for learning to read current and position correctly.",
  },
  {
    q: "Do I need my own gear?",
    a: "Absolutely not. All rods, reels, fly lines, leaders, and flies are provided — including rigs set up specifically for wet fly presentation. You are welcome to bring your own rod, especially if you want instruction tailored to your specific setup.",
  },
  {
    q: "Is a fishing license required?",
    a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For the Tuckasegee River between October and the end of May, out-of-state visitors may also use the Mountain Heritage Trout Waters Day License as a less expensive alternative — it is not required, just an option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City.",
  },
];

const curriculum = [
  { concept: "Down-and-across presentation", benefit: "Cover a full pool efficiently without spooking fish or crossing your line" },
  { concept: "The wet fly swing", benefit: "Let the current do the work — feel the take, don't guess at it" },
  { concept: "Line mending for depth and speed control", benefit: "Control exactly where in the water column your fly is fishing through the entire drift" },
  { concept: "Multi-fly leader setup and rigging", benefit: "Fish two flies correctly without the tangle that makes most anglers give up on it" },
  { concept: "Soft hackle and emerger technique", benefit: "Fish the zone where trout stack up and feed hardest — just below the surface" },
  { concept: "Reading wet fly water", benefit: "Choose the right seam, depth, and speed before the first cast — not after ten drifts" },
  { concept: "Strip and swing retrieve variations", benefit: "Activate soft hackles with intention when the passive swing stops producing" },
];

export default function WetFlyInstructionSmokies() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "700",
        name: "Wet Fly Fishing Clinics — Subsurface Presentation Instruction, Bryson City NC",
        description: "Wet fly fishing clinics and subsurface presentation instruction with Mac Brown — Field & Stream Angler of the Year, recipient of the Mel Krieger Casting Instructor Award (2021), and the only FFI Master Casting Instructor in North Carolina, teaching since 1987. Master the wet fly swing, down-and-across presentation, multi-fly rigging, and soft hackle technique on wild Smoky Mountain streams. All skill levels welcome.",
        url: "/wet-fly-instruction-smokies",
        image: "https://macbrownflyfish.com/images/tuck-river-spey.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "No experience required. Basic casting ability helpful. Sessions fully customized from first-time wet fly anglers through experienced anglers refining specific techniques.",
        teaches: [
          "The wet fly swing — down-and-across presentation",
          "Managing line tension and depth through the drift",
          "Multi-fly leader construction and rigging",
          "Soft hackle technique and the emerger zone",
          "Reading wet fly water — seams, pools, and current edges",
          "Mending for speed and depth control",
          "Strip and swing retrieve variations",
        ],
      })} />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/tuck-river-spey.webp")}
          srcSet={`${img("/images/mobile/tuck-river-spey.webp")} 800w, ${img("/images/tuck-river-spey.webp")} 1600w`}
          sizes="100vw"
          alt="Wading the Tuckasegee River — wet fly fishing instruction, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountains · Bryson City, North Carolina · Since 1987</p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Wet Fly Fishing Clinics &amp; Subsurface Instruction
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
            Mac Brown Fly Fish offers wet fly fishing clinics and subsurface presentation instruction in Bryson City, North Carolina — taught by Mac Brown, Field & Stream Angler of the Year and the only FFI Master Casting Instructor in North Carolina, teaching since 1987. Master the wet fly swing, down-and-across presentation, and multi-fly rigging on wild Smoky Mountain streams. Private sessions for all skill levels — first-time wet fly anglers through experienced technical fishers refining their subsurface game.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">The swing. The tension. The pull.</p>
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
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">Custom, dedicated wet fly coaching on wild mountain streams or the Tuckasegee — tailored entirely to your pace and what the fish are doing that day. Mac reads the water and explains what he sees as you fish it together.</p>
              <ul className="space-y-2 mb-8">
                {["1 or 2 anglers, same rate", "Half day or full day", "All gear provided", "Coaching matched to your current skill level"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/instructional-guided-trips" className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors w-full">
                See Instructional Guided Trips <ArrowRight size={13} />
              </Link>
            </div>
            <div className="bg-primary text-primary-foreground p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Path B — Multi-Day Immersion</p>
              <h3 className="font-serif text-xl font-bold mb-4">Wet Fly Weekend Clinic</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">Our dedicated wet fly clinic — a full weekend covering every layer of the subsurface game: presentation, reading water, mending, rigging, and the swing mechanics that make it all work consistently. Structured progression, not scattered tips.</p>
              <ul className="space-y-2 mb-8">
                {["Multi-day intensive format", "Casting and on-water instruction combined", "Small group, expert coaching", "Complete wet fly system from rigging to fish"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-primary-foreground/80"><Check size={13} className="text-primary-foreground shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/wet-fly-clinic" className="mt-auto inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors w-full">
                See the Wet Fly Clinic <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <p>
            Wet fly fishing is the oldest branch of the sport and, for many anglers, the most misunderstood. It lives in the zone between the dry fly world and the nymph world — subsurface, downstream, current-driven. When it is working, the fish tell you by hitting the fly. When it is not working, the fix is usually simple: a different line angle, a corrected mend, a fly fished at a slightly different depth.
          </p>
          <p>
            The wet fly swing is not guesswork. There is a specific logic to where you enter the water, how you angle the cast, how you control the drift, and how you use mending to adjust depth and speed through the entire arc. Learning that logic — from an instructor who has been fishing these streams for nearly four decades — turns a technique that feels random into one that feels like a system.
          </p>
          <p>
            Whether you are new to wet flies entirely or an experienced angler who has tried the swing with inconsistent results, a single session can change what you understand about subsurface presentation. The technique is elegant once it clicks.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "Most anglers who struggle with wet flies are not doing anything dramatically wrong. They are just missing one piece of the system — and once that piece is in place, everything else makes sense."
          </blockquote>
        </div>
      </section>

      {/* CURRICULUM MATRIX */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">What You Learn</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Wet Fly Curriculum</h2>
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
          <img src={img("/images/tuck-river-spey.webp")} srcSet={`${img("/images/mobile/tuck-river-spey.webp")} 800w, ${img("/images/tuck-river-spey.webp")} 1600w`} sizes="50vw" alt="Wet fly swing on the Tuckasegee River — Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="h-64 md:h-96 overflow-hidden">
          <img src={img("/images/guide-fish-1.webp")} srcSet={`${img("/images/guide-fish-1-1080.webp")} 1080w, ${img("/images/guide-fish-1.webp")} 1600w`} sizes="50vw" alt="Wild trout caught on the wet fly swing — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* HOW MAC TEACHES */}
      <section className="py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl font-bold text-foreground">How Mac Teaches</h2>
          <p>
            Mac teaches wet fly fishing the way the technique actually works — through feel and water reading, not through formulas. You learn to sense the right amount of tension in the line, to feel the difference between a fly fishing correctly and a fly dragging through the wrong depth, and to read the water before making a single cast.
          </p>
          <p>
            After nearly four decades of teaching on Smoky Mountain streams, Mac has developed clear, direct language for each piece of the wet fly system. When something is not working, he tells you exactly what needs to change and why — no vague encouragement, no generic advice. Specific corrections, one at a time, until the system is yours.
          </p>
          <ul className="space-y-3 mt-4">
            {[
              "Water reading before the cast — know where to fish before you fish it",
              "Feel-first — tension, depth, and swing speed through your hands",
              "Immediate, specific feedback — not general encouragement",
              "Multi-fly rigging done right — set up to fish, not untangle",
              "Real water, real fish — no lawn drills, no abstract instruction",
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
              Mac Brown Fly Fish is based in Bryson City, NC. Wet fly instruction takes place on the Tuckasegee River and wild streams of Great Smoky Mountains National Park — exceptional subsurface water with defined seams, consistent current, and wild trout that respond to a properly presented wet fly.
            </p>
            <ul className="space-y-2">
              {[
                "All rods, reels, fly lines, and flies provided",
                "Tuckasegee River and GSMNP park streams",
                "Sessions available year-round",
                "1–2 students per session, same rate",
                "Online video coaching also available worldwide",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Ready to Fish the Swing?</p>
              <h3 className="font-serif text-2xl font-bold mb-4">Book Your Session</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">Private, tailored wet fly instruction on wild Smoky Mountain trout water. All gear provided. All skill levels welcome.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors">
                Book a Session <ArrowRight size={13} />
              </Link>
              <Link href="/wet-fly-clinic" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/10 transition-colors">
                See the Wet Fly Clinic
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
