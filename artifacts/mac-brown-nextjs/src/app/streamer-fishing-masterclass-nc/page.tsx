import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Streamer Fly Fishing Masterclass — Trophy Trout Tactics, Smoky Mountains NC | Mac Brown Fly Fish" },
  description: "Streamer fly fishing schools and predatory tactics instruction in Bryson City, NC. Cast big flies, master the strip-set, and target the largest trophy trout in the river. Mac Brown, MCI, Hall of Fame, FFI Lifetime Achievement Award. Bryson City NC, since 1987.",
  alternates: { canonical: "https://macbrownflyfish.com/streamer-fishing-masterclass-nc/" },
  openGraph: {
    title: "Streamer Fly Fishing Masterclass — Bryson City, North Carolina",
    description: "Trophy trout tactics: big flies, strip-set, aggressive retrieves, and reading predator water. Instruction with Mac Brown, MCI, Southern Fly Fishing Hall of Fame. Since 1987.",
    url: "https://macbrownflyfish.com/streamer-fishing-masterclass-nc/",
    images: [{ url: "https://macbrownflyfish.com/images/client-drift-brown.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Who teaches the streamer masterclass?",
    a: "Mac Brown — the only FFI Master Casting Instructor in North Carolina, recipient of the FFI Lifetime Achievement Award (2023) and the Mel Krieger Casting Instructor Award (2021), and a Southern Fly Fishing Hall of Fame inductee. Mac has been guiding and teaching on Smoky Mountain water since 1987 and has coached Fly Fishing Team USA members. Four decades of watching how big fish behave and what it takes to consistently put large streamers in front of them — and get them to commit.",
  },
  {
    q: "What is streamer fly fishing and how is it different from other fly fishing?",
    a: "Streamer fishing uses large, often articulated fly patterns that imitate baitfish, crayfish, sculpin, and other substantial food items — not insects. Where dry fly and nymph fishing target feeding trout, streamer fishing often targets reaction. You are triggering an aggressive strike from a territorial or predatory fish, not matching a hatch. The largest fish in any river are often the ones most susceptible to a well-presented streamer — because they did not get that big by ignoring an easy meal.",
  },
  {
    q: "What is the strip-set and why does it matter so much for streamers?",
    a: "When a trout takes a dry fly or nymph, you lift the rod tip to set the hook. When a trout hits a streamer, lifting the rod tip pulls the fly away from the fish before the hook is seated — the single most common reason trophy fish are lost. The strip-set keeps the fly moving toward the fish while the hook drives in. It is a counter-intuitive reaction that has to be built into your response before you are on the water, not while a five-pound brown is running at the fly.",
  },
  {
    q: "What kinds of fish can I target on a streamer?",
    a: "Large brown trout are the primary target on most Smoky Mountain streams — the predatory, territorial fish that will absolutely smash a well-presented streamer. Rainbow trout also take streamers aggressively, particularly in faster, oxygenated water. If you are looking for the biggest fish in the river — the ones that did not get that size by eating size 20 midges — streamer fishing is where you find them.",
  },
  {
    q: "Do I need experience before a streamer masterclass?",
    a: "Basic fly casting ability is recommended — enough to make a reasonably straight cast with a weighted fly. If your casting is still developing, a combined casting-and-streamer session is the right approach. Experienced trout anglers who have never fished streamers seriously are ideal candidates — you already understand the river, the fish, and the cast. What changes is the entire presentation system, and that is exactly what the masterclass covers.",
  },
  {
    q: "What retrieve techniques will we cover?",
    a: "The full range: long, aggressive strip-and-pause sequences for neutral fish; fast, erratic strips to trigger reaction strikes when fish are passive; the slow pull with extended pauses for cold water and pressured fish; the swing-and-strip combination for covering water and triggering follows. Mac teaches retrieve selection as a reading skill — you look at the water, the conditions, and the fish behavior to determine which approach to start with and when to change.",
  },
  {
    q: "Do I need my own gear?",
    a: "Absolutely not. All rods, reels, sink-tip lines, running lines, leaders, and a full selection of streamer patterns are provided — properly weighted rigs matched to the water you will be fishing. You are welcome to bring your own setup, particularly if you want instruction on casting heavy, articulated patterns with your specific rod-and-line combination.",
  },
  {
    q: "Is a fishing license required?",
    a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For the Tuckasegee River between October and the end of May, out-of-state visitors may also use the Mountain Heritage Trout Waters Day License as a less expensive alternative — not required, just an option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City.",
  },
];

const curriculum = [
  { concept: "Casting heavy and articulated streamer patterns", benefit: "Stop fighting the rod — throw big flies efficiently without loading the shoulder" },
  { concept: "The strip-set", benefit: "The most important skill in streamer fishing — get it right before the fish of a lifetime shows up" },
  { concept: "Retrieve variation and triggering", benefit: "Make the fly look like wounded baitfish when the passive retrieve stops producing" },
  { concept: "Reading streamer water — structure, banks, and depth transitions", benefit: "Target the water where large, predatory fish hold — not where average fish are" },
  { concept: "Sink tip and shooting head selection", benefit: "Get the fly to the right depth without sacrificing castability or control" },
  { concept: "The swing-and-strip presentation", benefit: "Cover water efficiently and trigger reaction strikes from fish that ignore a dead drift" },
  { concept: "Playing and landing large trout", benefit: "Stop losing the fish of a lifetime at the net — manage a heavy fish correctly from hookup to hand" },
];

export default function StreamerFishingMasterclass() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "700",
        name: "Streamer Fly Fishing Masterclass — Trophy Trout Tactics, Bryson City NC",
        description: "Streamer fly fishing schools and predatory tactics instruction with Mac Brown — the only FFI Master Casting Instructor in North Carolina, recipient of the FFI Lifetime Achievement Award (2023), and a Southern Fly Fishing Hall of Fame inductee, teaching since 1987. Cast big flies, master the strip-set, learn aggressive retrieve techniques, and target the largest trophy trout in the river. All skill levels with basic casting ability welcome.",
        url: "/streamer-fishing-masterclass-nc",
        image: "https://macbrownflyfish.com/images/client-drift-brown.webp",
        educationalLevel: "Intermediate",
        coursePrerequisites: "Basic fly casting ability recommended. Anglers who have never fished streamers are ideal — experience with the river and the fish is an advantage. Combined casting-and-streamer sessions available for those still developing casting skills.",
        teaches: [
          "Casting heavy and articulated streamer patterns efficiently",
          "The strip-set — the most important skill in streamer fishing",
          "Retrieve variation — triggering reaction strikes when fish are passive",
          "Reading streamer water — structure, banks, and depth transitions",
          "Sink tip and shooting head selection for various conditions",
          "The swing-and-strip presentation for covering water",
          "Playing and landing large trout",
        ],
      })} />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/client-drift-brown.webp")}
          srcSet={`${img("/images/client-drift-brown-1280.webp")} 1280w, ${img("/images/client-drift-brown.webp")} 1600w`}
          sizes="100vw"
          alt="Trophy brown trout caught streamer fishing — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountains · Bryson City, North Carolina · Since 1987</p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Streamer Fly Fishing Schools &amp; Predatory Tactics
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
            Mac Brown Fly Fish offers streamer fly fishing schools and predatory tactics instruction in Bryson City, North Carolina — taught by Mac Brown, the only FFI Master Casting Instructor in North Carolina, recipient of the FFI Lifetime Achievement Award, and Southern Fly Fishing Hall of Fame inductee, teaching since 1987. Cast big flies, master the strip-set, learn aggressive retrieve sequences, and target the largest trophy trout in the river. Private sessions for anglers ready to fish the predator game the right way.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">Big flies. Bigger fish. The right system.</p>
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
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">Dedicated streamer coaching on Smoky Mountain water — 1-on-1 or 2-angler, tailored entirely to your skills and the conditions. Mac puts you on the right water, coaches the cast, the retrieve, and the strip-set in real time as you fish the structure together.</p>
              <ul className="space-y-2 mb-8">
                {["1 or 2 anglers, same rate", "Half day or full day", "All gear and streamer patterns provided", "Real-time coaching on trophy trout water"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/instructional-guided-trips" className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors w-full">
                See Instructional Guided Trips <ArrowRight size={13} />
              </Link>
            </div>
            <div className="bg-primary text-primary-foreground p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Path B — Multi-Day Immersion</p>
              <h3 className="font-serif text-xl font-bold mb-4">Streamer Weekend Clinic</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">Our dedicated streamer clinic — a full weekend covering the entire predatory system: big fly casting, the strip-set, retrieve selection, reading structure, sink tip rigging, and fishing the swing. Two full days to build the system correctly, not just learn the surface of it.</p>
              <ul className="space-y-2 mb-8">
                {["Multi-day intensive format", "Casting and on-water instruction combined", "Full streamer rigging system covered", "Big flies, big water, big fish focus"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-primary-foreground/80"><Check size={13} className="text-primary-foreground shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/streamer-clinic" className="mt-auto inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors w-full">
                See the Streamer Clinic <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <p>
            The largest fish in any river are not looking up at the surface waiting for a mayfly. They are holding in the deep structure — behind boulders, under cut banks, in the dark seams where current transitions from fast to slow — and they are waiting for something worth moving for. A streamer gives them a reason.
          </p>
          <p>
            Streamer fishing requires a specific set of skills that are fundamentally different from nymph or dry fly fishing. The cast has to handle heavy, wind-resistant flies efficiently. The retrieve has to be intentional — not random strips, but deliberate sequences matched to water temperature, fish activity, and what the fish showed you on the last swing. And the strip-set has to be automatic, because the moment a large brown commits to a streamer is not the moment to practice a new motor response.
          </p>
          <p>
            This is the instruction that builds all of it — from an angler who has been on this water since 1987, who understands where the trophy fish hold, what it takes to get them to move, and how to put you in position to close the deal when they do.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "Streamer fishing rewards commitment. The angler who fishes the structure hard, varies the retrieve with intention, and trusts the system is the one who finds the fish other people walk right past."
          </blockquote>
        </div>
      </section>

      {/* CURRICULUM MATRIX */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">What You Learn</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Streamer Masterclass Curriculum</h2>
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
          <img src={img("/images/client-drift-brown.webp")} srcSet={`${img("/images/client-drift-brown-1280.webp")} 1280w, ${img("/images/client-drift-brown.webp")} 1600w`} sizes="50vw" alt="Trophy brown trout caught streamer fishing — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="h-64 md:h-96 overflow-hidden">
          <img src={img("/images/guide-trip-2.webp")} srcSet={`${img("/images/guide-trip-2-1280.webp")} 1280w, ${img("/images/guide-trip-2.webp")} 1600w`} sizes="50vw" alt="Trophy trout from Smoky Mountain streamer fishing" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* HOW MAC TEACHES */}
      <section className="py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl font-bold text-foreground">How Mac Teaches</h2>
          <p>
            Streamer fishing has a lot of pieces — and Mac teaches them in the order that actually matters. The cast comes first, because nothing else works if the fly is not landing where it needs to land. Then the retrieve, the strip-set, and the water reading — built one piece at a time on top of what you already have in place.
          </p>
          <p>
            The most important part of the strip-set is that it has to be built in before the fish shows up. Mac does not teach it with abstract explanation — he builds it into your response through repetition on the water, in real conditions, until it is automatic. That is the difference between an angler who knows what the strip-set is and one who actually does it when a heavy brown charges a swinging fly.
          </p>
          <ul className="space-y-3 mt-4">
            {[
              "Cast first — everything else depends on placing the fly correctly",
              "The strip-set built in through repetition, not explanation alone",
              "Retrieve selection as a reading skill — matched to conditions and fish behavior",
              "Structure reading — learn to see the water the way a predatory fish sees it",
              "Sink tip and shooting head selection — right tool for the right depth",
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
              Mac Brown Fly Fish is based in Bryson City, NC. Streamer instruction takes place on the Tuckasegee River and big-water sections of Western NC streams — productive trophy trout water with the structure, depth, and current transitions that hold the fish worth targeting.
            </p>
            <ul className="space-y-2">
              {[
                "All rods, reels, sink-tip lines, and streamers provided",
                "Articulated and standard streamer patterns for the season",
                "Tuckasegee River and WNC trophy water",
                "Sessions available year-round — fall and winter are prime",
                "1–2 students per session, same rate",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Ready to Fish the Predator Game?</p>
              <h3 className="font-serif text-2xl font-bold mb-4">Book Your Session</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">Private, tailored streamer instruction on Western NC trophy trout water. All gear and streamers provided. Basic casting ability required.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors">
                Book a Session <ArrowRight size={13} />
              </Link>
              <Link href="/streamer-clinic" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/10 transition-colors">
                See the Streamer Clinic
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
