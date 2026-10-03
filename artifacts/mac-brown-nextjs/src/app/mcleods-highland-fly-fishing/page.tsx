import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import FaqSection from "@/components/faq-section";
import { SchemaScript } from "@/components/schema-script";
import { faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "McLeod's Highland Fly Fishing — Bryson City, NC" },
  description:
    "Fish McLeod's exclusive highland waters with Mac Brown Fly Fish. A unique private water fly fishing experience in the Southern Appalachians.",
  alternates: { canonical: "https://macbrownflyfish.com/mcleods-highland-fly-fishing/" },
  openGraph: {
    title: "McLeod's Highland Fly Fishing — Now Mac Brown Fly Fish | Bryson City NC",
    description:
      "McLeod's Highland Fly Fishing was the original fly fishing outfitter in Bryson City, NC — founded by Mac Brown in 1987. Now operating as Mac Brown Fly Fish.",
    url: "https://macbrownflyfish.com/mcleods-highland-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-misty.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "McLeod's Highland Fly Fishing — Now Mac Brown Fly Fish | Bryson City NC",
    images: ["https://macbrownflyfish.com/images/fall-river-misty.webp"],
  },
};

const benefits = [
  { title: "Instant Improvement", desc: "Most casting faults are identified and corrected in a single session." },
  { title: "40 Years of Knowledge", desc: "Techniques developed over four decades of daily teaching and guiding." },
  { title: "On-Stream Learning", desc: "Real water, real conditions, real fish — learning that sticks permanently." },
];

const credentials = [
  { title: "FFI Master Casting Instructor", desc: "The highest casting certification in fly fishing — held by fewer than a few hundred people worldwide. The only MCI in North Carolina." },
  { title: "FFI Board of Governors", desc: <>Served for years on the governing body of the Federation of Fly Fishers (now known as <a href="https://www.flyfishersinternational.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Fly Fishers International</a>) helping shape national standards for the sport.</> },
  { title: "Mel Krieger Casting Award", desc: "Named for one of the most influential fly casting teachers who ever lived. Awarded for outstanding contribution to fly casting instruction." },
  { title: "Hall of Fame Inductee", desc: "Inducted into the Southern Appalachian Fly Fishing Museum Hall of Fame for Recreation in 2017." },
  { title: "Western Carolina University", desc: "Associate Professor who created the most popular class in university history and pioneered collegiate fly fishing education." },
  { title: "Team USA Youth Coach", desc: "Coached competitors to World Championship titles representing the United States on the international stage." },
  { title: "Field & Stream Angler of the Year", desc: "Nominated by Field & Stream magazine in the fall 1999 issue." },
  { title: "Original Permitted Outfitter", desc: "The oldest permitted and licensed fly fishing outfitter in the Smoky Mountains region — operating since 1987." },
];

const mcleodsHighlandFaqs = [
  {
    q: "What is McLeod's Highland Fly Fishing?",
    a: "McLeod's Highland Fly Fishing was the original fly fishing outfitter in Bryson City, North Carolina — founded by Mac Brown in 1987. It was the first permitted and licensed fly fishing guide service in the Smoky Mountains. The operation is now known as Mac Brown Fly Fish, and Mac continues to guide and teach on the same waters he has fished for nearly four decades.",
  },
  {
    q: "When did McLeod's Highland become Mac Brown Fly Fish?",
    a: "McLeod's Highland Fly Fishing was rebranded as Mac Brown Fly Fish to better reflect the guide and instructor at the center of the operation. The rivers, the approach, and the commitment to genuine instruction remain the same as they have since 1987.",
  },
  {
    q: "What guided fly fishing is available through Mac Brown Fly Fish?",
    a: "Mac Brown Fly Fish offers guided float trips and wade trips on the Tuckasegee River, guided wade trips on the Nantahala River and Great Smoky Mountains National Park streams, guided lake trips on Fontana Lake and Cheoah Lake, private fly casting instruction, and 4-day professional guide training through the Fly Fishing Guide School.",
  },
  {
    q: "Where is Mac Brown Fly Fish located?",
    a: "Mac Brown Fly Fish is based in Bryson City, North Carolina — the fly fishing capital of the Smoky Mountains and the gateway to Great Smoky Mountains National Park. Bryson City is within 20 minutes of the Tuckasegee River, Nantahala River, and the national park streams.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

export default function McLeodsFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={faqPageSchema(mcleodsHighlandFaqs)} />
      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-river-misty.webp")}
          srcSet={`${img("/images/fall-river-misty-1280.webp")} 1280w, ${img("/images/fall-river-misty.webp")} 1920w`}
          sizes="100vw"
          alt="McLeod's Highland Fly Fishing — now Mac Brown Fly Fish, Bryson City NC since 1987"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            The Original Outfitter · Bryson City, NC · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            McLeod's Highland Fly Fishing — Now Mac Brown Fly Fish, Bryson City NC
          </h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl mb-2">
            The original name. The original outfitter. The same passion for fly fishing instruction that has defined this
            operation since the very beginning.
          </p>
          <p className="text-white/50 text-sm italic mb-8">
            Now operating as Mac Brown Fly Fish — same founder, same water, same commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Trip or Lesson <ArrowRight size={14} />
            </Link>
            <Link
              href="/instructional-guided-trips"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            McLeod's Highland Fly Fishing was founded in Bryson City, North Carolina in 1987 by Mac Brown — the original fly fishing guide and instructor in Western NC. The company name changed to Mac Brown Fly Fish in the mid-1990s. Mac Brown remains the same founder, the same waters, and the same instruction philosophy that started it all — now operating as the most credentialed fly fishing outfitter in the state.
          </p>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">
            The Beginning
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Where It All Began
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              In 1987 Mac Brown launched the first professional fly fishing guide and instruction operation in the Smoky
              Mountains town of Bryson City, North Carolina. The company was called McLeod's Highland Fly Fishing — and
              it was the original. No one had done it before in this region, and no one since has matched the depth of
              local knowledge, the quality of instruction, or the consistency of results that the operation built over
              the decades that followed.
            </p>
            <p>
              After the first decade in business the company name was changed to Mac Brown Fly Fish — reflecting the
              personal brand that had become synonymous with excellence in fly fishing instruction throughout Western
              North Carolina and beyond. The name changed. Nothing else did.
            </p>
            <p>
              Mac Brown Fly Fish remains the oldest permitted and licensed outfitter in the region — with programs in
              the Great Smoky Mountains National Park and Nantahala National Forest built on a foundation of nearly four
              decades of daily experience on these specific rivers and streams.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={img("/images/guide-fish-2.webp")}
            srcSet={`${img("/images/guide-fish-2-800.webp")} 800w, ${img("/images/guide-fish-2.webp")} 1350w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Mac Brown guiding fly fishing on Smoky Mountains water, Bryson City NC"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="aspect-square overflow-hidden">
          <img
            src={img("/images/fall-brown-trout.webp")}
            alt="Wild brown trout from Western North Carolina — Mac Brown Fly Fish"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>

      {/* THE FOUNDER */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">
            The Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            A Life Built on the Water
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Mac Brown first picked up a fly rod at the age of seven. What began as a childhood fascination became a
              lifelong pursuit that has taken him from the mountain streams of the Southern Appalachians to rivers in
              Tasmania, New Zealand, and beyond — guiding, competing, teaching, and constantly deepening his
              understanding of what is possible when casting a fly line.
            </p>
            <p>
              The techniques Mac teaches are not assembled from books and other instructors' systems — they are original
              ideas developed and refined over 40 years of daily observation, experimentation, and teaching. Many of
              these methods have appeared in Fly Fisherman magazine, ESPN, public television, Angling Report, and
              Outdoor Life.
            </p>
            <p>
              As the only Master Casting Instructor in North Carolina, a former member of the FFI Board of Governors, a
              Mel Krieger Award recipient, and a coach whose students have stood on World Championship podiums, Mac
              brings a depth of knowledge to every lesson and guided trip that simply does not exist anywhere else in
              the region.
            </p>
            <p>
              He has also built one of the most extensive databases of conditions and trout feeding behavior in the
              region — compiled from over 14,000 stomach samples taken from wild regional fish and decades of daily
              streamside observation.
            </p>
          </div>
        </div>
      </section>

      {/* WHY LESSONS */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">
            Instruction
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Why a Fly Fishing Lesson Changes Everything
          </h2>
          <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground leading-relaxed mb-12">
            <p>
              Fly fishing is similar to golf in that it requires years of dedication to truly master — but unlike golf,
              most fly fishers never invest in proper instruction at the beginning. They learn from friends, YouTube
              videos, and trial and error — and they carry the resulting bad habits for decades, never quite
              understanding why their results plateau.
            </p>
            <p>
              A lesson with Mac Brown eliminates years of that frustration in a single session. He has a keen eye for
              diagnosing the specific faults in any caster's stroke and offering the tools — the specific adjustments,
              the drills, the understanding — that produce immediate improvement.
            </p>
            <p>
              Most kinesthetic sports require hands-on teaching to truly sink in. Fly casting is no different. Reading
              about it helps. Watching it helps. But standing in a river with someone who has spent 40 years watching
              thousands of casters make every possible mistake — and knowing exactly how to fix each one — is the
              experience that actually changes the way you fish.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {benefits.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <div className="w-8 h-0.5 bg-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE WATER */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">
            The Classroom
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Water — A Classroom That Never Runs Out
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The Western North Carolina Smoky Mountains region is not just a beautiful place to fly fish. It is one of
              the most technically demanding and diverse fly fishing environments in the eastern United States — and that
              difficulty is precisely what makes it such an extraordinary place to learn.
            </p>
            <p>
              Diverse currents, dense canopy, wild fish that have never been handed anything easy — these are the
              conditions that produce some of the finest fly casters Mac has ever encountered. The technical challenges
              of Smoky Mountain streams require casting in every plane, reading water with genuine depth, and presenting
              flies with a precision that tolerates almost no margin for error. Master it here and you are prepared for
              any water anywhere.
            </p>
            <p>
              The region's temperate climate produces excellent year-round angling opportunities — with spring and fall
              as the peak seasons for dry fly fishing and the most diverse hatch activity. The Tuckasegee River, the
              Nantahala River, the streams of the Great Smoky Mountains National Park, and the broader network of wild
              mountain water surrounding Bryson City provide an endlessly varied and endlessly rewarding classroom.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">
            Qualifications
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">
            The Credentials Behind the Instruction
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {credentials.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <div className="w-6 h-0.5 bg-primary mb-3" />
                <h3 className="font-serif text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={mcleodsHighlandFaqs} />

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">The Original. Still the Best.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Nearly Four Decades on the Same Water
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            McLeod's Highland Fly Fishing became Mac Brown Fly Fish. The name changed. The standard never did. Nearly
            four decades of guiding and teaching on the finest trout water in the eastern United States — and the same
            commitment to quality instruction that started it all in 1987.
          </p>
          <p className="text-white/70 leading-relaxed mb-10">
            Whether you are booking your first guided trip, taking your first casting lesson, or returning after years
            away — you have Mac's promise to provide you with the highest quality fly fishing instruction and guided
            experience you have ever had. Peak times are spring and fall — book early.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Trip or Lesson <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+18287360019"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> (828) 736-0019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
