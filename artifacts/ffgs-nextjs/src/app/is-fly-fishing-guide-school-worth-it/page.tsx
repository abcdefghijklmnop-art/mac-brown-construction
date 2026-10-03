import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { img } from "@/lib/utils";
import { TuitionPrice } from "@/components/tuition-price";
import { TuitionPerDay } from "@/components/tuition-per-day";
import { WorthItFaq } from "./worth-it-faq";

export const metadata: Metadata = {
  title: { absolute: "Is Fly Fishing Guide School Worth It? | Fly Fishing Guide School" },
  description:
    "An honest look at whether Fly Fishing Guide School is worth the cost — what you get, what it changes, and who it's really built for.",
  alternates: { canonical: "https://flyfishingguideschool.com/is-fly-fishing-guide-school-worth-it/" },
  openGraph: {
    title: "Is Fly Fishing Guide School Worth It?",
    description:
      "An honest look at whether Fly Fishing Guide School is worth the cost — what you get, what it changes, and who it's really built for.",
    url: "https://flyfishingguideschool.com/is-fly-fishing-guide-school-worth-it/",
    images: [{ url: "https://flyfishingguideschool.com/images/smokies-mountain-overlook.webp", width: 1535, height: 860, alt: "Smoky Mountains overlook — Fly Fishing Guide School, Bryson City NC" }],
  },
  twitter: { card: "summary_large_image" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://flyfishingguideschool.com/is-fly-fishing-guide-school-worth-it/#page",
  name: "Is Fly Fishing Guide School Worth It?",
  description:
    "An honest look at the cost and value of Fly Fishing Guide School — what four days in Bryson City actually delivers and who it's built for.",
  url: "https://flyfishingguideschool.com/is-fly-fishing-guide-school-worth-it/",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://flyfishingguideschool.com/#website",
    name: "Fly Fishing Guide School",
    url: "https://flyfishingguideschool.com",
  },
  about: {
    "@type": "EducationalOrganization",
    "@id": "https://flyfishingguideschool.com/#business",
    name: "Fly Fishing Guide School",
    url: "https://flyfishingguideschool.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does fly fishing guide school cost?",
      acceptedAnswer: {
        "@type": "Answer",
        // NOTE: This schema text is server-rendered — update the price here manually when tuition changes in Google Sheets.
        text: "Tuition for the Fly Fishing Guide School is $4,850 for four days, which includes lunch each day. Lodging and dinner are arranged separately by each student.",
      },
    },
    {
      "@type": "Question",
      name: "Is fly fishing guide school worth the money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compared to other elite fly fishing training programs — including week-long, all-inclusive schools costing $12,500 or more — the per-day cost here is meaningfully lower, even after factoring in a student's own lodging and meals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to attend a guide school to become a fly fishing guide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most states, formal certification isn't legally required to guide. However, a structured program significantly improves your skills, your credibility with outfitters, and your ability to compete for guiding positions against candidates without formal training.",
      },
    },
    {
      "@type": "Question",
      name: "How much do fly fishing guides make?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entry-level guides working for an outfitter or lodge typically earn $2,400 to $3,000 per month. Experienced independent guides working their home water often earn more, frequently supplementing income with casting instruction and clinics.",
      },
    },
    {
      "@type": "Question",
      name: "What is the class size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Class size is limited to 8 to 12 students, kept intentionally small so every student receives direct, personal instruction rather than rotating through a large group.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need my own equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A wide range of rods, lines, and gear is available to try and compare throughout the program, so students can learn on equipment beyond what they already own.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after graduation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Graduates leave with a structured assessment of their skills, a clear picture of what to keep working on, and access to job placement resources connecting them with lodges and outfitters looking to hire.",
      },
    },
  ],
};

export default function WorthItPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20">
        <img
          src={img("/images/smokies-mountain-overlook.webp")}
          srcSet={`${img("/images/mobile/smokies-mountain-overlook.webp")} 1280w, ${img("/images/smokies-mountain-overlook.webp")} 1535w`}
          sizes="100vw"
          alt="Smoky Mountains overlook — Fly Fishing Guide School, Bryson City NC"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 mb-4">
            Cost &amp; Value · Fly Fishing Guide School
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Is Fly Fishing Guide School Worth It?
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reservation-form/"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(215,55%,28%)] text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Enroll Now <ArrowRight size={13} />
            </Link>
            <Link
              href="/fly-fishing-guide-school/"
              className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              School Overview
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-xl font-bold text-[hsl(215,55%,28%)] mb-5">
            Quick Answer: Is Fly Fishing Guide School Worth It?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mac Brown has been running this program since 1987 — and this is the question he hears every year. Four days won&apos;t make you an expert — nothing does that. But it will change the way you see a river for the rest of your life, and that&apos;s worth more than the <TuitionPrice /> price tag suggests. This isn&apos;t the cheapest program out there, and it isn&apos;t the most expensive either — it&apos;s priced so someone who&apos;s serious about getting better can actually afford to. Whether you&apos;re chasing a guiding career or you&apos;re just tired of guessing out there on your own, the honest answer is yes — if you&apos;re ready to put in the work.
          </p>
        </div>
      </section>

      {/* Quick Answer continuation */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-5">
          <p className="text-foreground leading-relaxed italic">
            I have been asked this often over the years and this really depends on you more than anything. Do you want to try and figure everything out yourself or do you think efficiency is better to develop a framework to fast track your development? An easy reference is if you take up a sport like golf, would you take many lessons firstly to develop a proper fundamental swing to have a deeper enrichment of the game or would you simply watch YouTube videos and think you will coach yourself?
          </p>
          <p className="text-foreground leading-relaxed">
            Four thousand eight hundred fifty dollars is a real number, and if you&apos;re considering it, you deserve a real answer about whether it&apos;s worth spending — not a sales pitch. Here&apos;s the honest breakdown: what you get, what you don&apos;t, how it stacks up against other programs, and who should (and shouldn&apos;t) sign up.
          </p>
        </div>
      </section>

      {/* Mac's Perspective — Proven Over Popular */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Mac&apos;s perspective</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            Proven Over Popular
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed italic">
              I have been fortunate to present to national clubs and shows since I began down the path of working in outdoor recreation. In 2025, I was speaking to the FFI club in Mountain Home, AR. This was special for me because as a young kid in 1967 my grandfather that taught me the love of fishing had a place in Oakland, AR. It was the place where it really all began for me. During this talk, my friend Davy Wotton &ndash; Wet-Fly Guru interjected when I was answering a question about our programs. Davy interjected that in no way could anyone in that room begin to put all these things together from remaining self-taught for the rest of their years. It was striking to me at first that he said it, but he knows well after many decades as an educator. We talked about it later that night and I realize he is absolutely 100% making that claim. Here is how I worked through it after discussion with him further on the matter. I have been incredibly blessed in this industry to have worked with all my heroes in the industry. I mean every one of them. It is not like a one and done thing for me either. Some of these icons were hugely popular and many were more in the category of proven. I have learned things from both groups here.
            </p>
            <blockquote className="border-l-4 border-[hsl(215,55%,28%)] pl-6 py-1 my-2">
              <p className="font-serif text-xl md:text-2xl italic text-[hsl(215,55%,28%)] leading-snug">
                Proven over popular. Education over entertainment.
              </p>
              <footer className="text-xs text-muted-foreground mt-2 not-italic">— Mac Brown</footer>
            </blockquote>
            <p className="text-foreground leading-relaxed italic">
              The past decade has been so extremely rewarding to me in that now I am getting to learn from many of my hero&apos;s abroad that are the pinnacle of their teaching career as educators in fly fishing. These folks are genuine, honest, sincere, and real. Top of their game. Not some Big Brand Chain advertisements in the typical tabloids of America. We all need inspiration to wake up and excel a bit further in a growth direction each day. Fly fishing is just that, a problem is present, and we come up with solutions to solve a new twist on the water every outing. That is the beauty of the sport.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              Four days, taught by one of the most credentialed faculties in the country, at a fraction of the cost of comparable elite programs — with lunch included and a proven track record since 1987. Whether the goal is a guiding career or simply becoming the angler you&apos;ve always wanted to be, the value math holds up.
            </p>
          </div>
        </div>
      </section>

      {/* What's Actually Included */}
      <section className="py-16 md:py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Tuition breakdown</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            What&apos;s Actually Included in the <TuitionPrice />
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              Tuition covers four full days of instruction: fly casting at the FFI Master Instructor level, professional river rowing, water reading, rigging, guiding methodology, client communication, and stream entomology in the field. Lunch is provided each day.
            </p>
            <p className="text-foreground leading-relaxed">
              Also included: 7 Student Curriculum Handouts covering fly casting, dry fly, nymph, wet fly, streamer, and whitewater rowing skills — all organized under the School&apos;s structured Student Curriculum Handouts system. These are reference materials students keep and use long after the program ends.
            </p>
            <p className="text-foreground leading-relaxed">
              Lodging, breakfast, and dinner are not included. Students arrange their own accommodations in Bryson City, and Mac&apos;s team can point you toward local options.
            </p>
            <p className="text-foreground leading-relaxed italic">
              There are many other resources during the stay in Bryson City at your disposal. Gear setups for different days and are encouraged for folks to use. It helps to eliminate folks attempting to use improper setups for the techniques we are covering.
            </p>
            <p className="text-foreground leading-relaxed">
              Graduates also receive a certificate of completion documenting the training finished during the program. This is a record of attendance and coursework, not a substitute for{" "}
              <Link href="/fly-fishing-guide-certification/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">
                FFI casting certification
              </Link>{" "}
              or a state guide license — those remain separate, independently tested credentials, and this program is built to prepare you for pursuing them if you choose to.
            </p>
          </div>
        </div>
      </section>

      {/* Is $4,850 a Lot? */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Putting the price in context</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            Is <TuitionPrice /> a Lot of Money? Here&apos;s How to Think About It
          </h2>
          <div className="space-y-5">
            <div className="bg-[hsl(215,55%,28%)]/5 border-l-4 border-[hsl(215,55%,28%)] px-6 py-5">
              <p className="text-foreground leading-relaxed font-medium">
                Four days, drawn from a featured group of educators that includes FFI Master Certified Casting Instructors, certified whitewater rowing instructors, Fly Fishing Team USA members, and Team USA coaches — 450+ combined years of experience across the faculty, refined since 1987. That&apos;s <TuitionPerDay /> per day of instruction, plus lunch.
              </p>
            </div>
            <p className="text-foreground leading-relaxed">
              For context, some elite all-inclusive trout schools and retreats run well over $10,000 for a week — often north of $1,700 per day once lodging and meals are factored in. This program runs meaningfully lower per day even before accounting for the fact that lodging here is a student&apos;s own choice, not a fixed cost baked into the price.
            </p>
            <p className="text-foreground leading-relaxed italic">
              Different instructors are brought in throughout the year for the various programs. All of the instructors cover the same topics as we developed Instructor Development Curriculums to make sure that the process-oriented tasks are all covered each and every school.
            </p>
          </div>
        </div>
      </section>

      {/* Real Return on Investment */}
      <section className="py-16 md:py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Career &amp; personal ROI</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            The Real Return on Investment
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              Entry-level guides working for an outfitter or lodge typically earn $2,400 to $3,000 per month. For most graduates pursuing guiding professionally, tuition is recovered within the first month or two of paid work — a straightforward break-even against W-2 or 1099 guiding income, before tips. After that, it&apos;s pure return across a career that can span decades, with the FFI-aligned casting credentials and rowing certification to back it on a resume.
            </p>
            <p className="text-foreground leading-relaxed">
              For the recreational angler, the return isn&apos;t a paycheck — it&apos;s every river afterward. It&apos;s the moment a drift finally goes drag-free and you understand why, the seam you used to walk past that you now read at a glance, the cast that used to fight you now leaving your hand like it was always meant to. Years of self-taught habits, corrected in four days, instead of slowly — or never.
            </p>
            <p className="text-foreground leading-relaxed italic">
              The best return on investment can be found on the{" "}
              <Link href="/testimonials-kudos/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity not-italic">
                testimonial pages
              </Link>{" "}
              from real participants that ended up going down instructor pathways, guiding pathways, or just enjoying their times on the river with a much higher functioning skill set than they had before. This is one of the best rewards for all of us working at the Fly Fishing Guide School is seeing others flourish on what framework we provided. It also is rewarding that they share these skills with others and take away our stewardship of conservation ethics protecting the rivers that we love to be on.
            </p>
          </div>
        </div>
      </section>

      {/* What You're Actually Paying For */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">The faculty</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-6">
            What You&apos;re Actually Paying For
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            The price reflects the faculty, not just the days on a calendar:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "FFI Master Certified Casting Instructors",
              "Certified whitewater rowing instructors",
              "Fly Fishing Team USA members",
              "Team USA coaches",
              "450+ combined years of professional experience",
              "A program built and refined since 1987 — not assembled recently",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-[hsl(215,55%,28%)] mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground leading-relaxed italic">
            Instructor credentials is really what separates our school not just for our region of the Smokies but more importantly it separates us nationally. We have assembled the largest talent pool in various disciplines from whitewater professionals, casting instructor mentors, competitive angling, and growth minded process-oriented folks that love to share this enthusiasm with others. This is one of our strongest attributes for the fly fishing guide school is the people.
          </p>
        </div>
      </section>

      {/* TWO TRACKS */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Two Paths. One School.
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Which brings you here?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Whether you simply want to fish at a level you never thought
            possible — or you&apos;re chasing a career in the outdoors — the
            week is built for you.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">
          <Link
            href="/smoky-mountain-fly-fishing-school/"
            className="group relative overflow-hidden aspect-video flex items-end"
          >
            <img
              src={img("/images/client-woman-brown-trout.webp")}
              srcSet={`${img("/images/mobile/client-woman-brown-trout.webp")} 800w, ${img("/images/client-woman-brown-trout-1280.webp")} 1280w, ${img("/images/client-woman-brown-trout.webp")} 1920w`}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Angler holding a brown trout — Smoky Mountain Fly Fishing School for Recreational Anglers"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">
                Recreational Track
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Fish at a Whole New Level
              </h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </Link>
          <Link
            href="/fly-fishing-guide-school/"
            className="group relative overflow-hidden aspect-video flex items-end"
          >
            <img
              src={img("/images/guide-school-casting.webp")}
              alt="Career guide track — Fly Fishing Guide School"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">
                Career Track
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Launch Your Guide Career
              </h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Typical Day */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">The schedule</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            What a Typical Day Looks Like
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              Four days sounds short until you see what&apos;s actually packed into them. Mornings typically start with fly casting instruction — diagnosing individual faults in loop control, timing, and drift mechanics, and rebuilding from the ground up at the same level taught to FFI certification candidates. Afternoons move to water reading and on-stream application: identifying holding water, current seams, and presentation strategy in real conditions, not a classroom.
            </p>
            <p className="text-foreground leading-relaxed">
              Rowing instruction is worked in across the program on the Tuckasegee river — Class I&ndash;II water suited to building real oar-frame proficiency — alongside rigging, knot work, and gear selection. Evenings include a debriefing of everyone&apos;s light bulb moments, so the entire team grows as a unit. Another huge part of the 4 days is folks develop a process that brings an enrichment of all things merging to one (remember this quote used in &ldquo;A River Runs Through It&rdquo;?).
            </p>
            <p className="text-foreground leading-relaxed italic">
              This encompasses a lofty load no doubt when we consider the vastness of the sport of fly casting and fly fishing. These two singular components are so intertwined that we cannot have one without the other.
            </p>
          </div>
        </div>
      </section>

      {/* Small Classes */}
      <section className="py-16 md:py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Class size</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            Small Classes, Real Attention
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              Class size is limited to 8 to 12 students. That&apos;s a deliberate choice, not a capacity constraint — a program built to correct individual casting faults and guide individual water-reading instincts doesn&apos;t work at scale. Every student gets direct, personal instruction drawn from a featured group of educators that includes Master Instructors and Team USA-level coaches, not a rotating assistant.
            </p>
            <p className="text-foreground leading-relaxed italic">
              We keep these events small for the quality of students that attend so that they may receive a world class education in a group size that enables them to flourish. The material is all here. It is strongly recommended to take notes along with their handouts daily.
            </p>
          </div>
        </div>
      </section>

      {/* Cost of Staying Self-Taught */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">The hidden cost</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            What It Costs You to Stay Self-Taught
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              Most anglers never take a formal lesson. They learn from a father, a friend, a YouTube video, or years standing in the current guessing — and most of the habits that get reinforced that way are quietly working against them, not for them. A cast that looks fine on the lawn falls apart the moment real wind, real currents, and a real fish are added to the equation.
            </p>
            <p className="text-foreground leading-relaxed">
              The real cost of staying self-taught isn&apos;t measured in dollars. It&apos;s the drift that was a foot short of the seam and you never knew it. It&apos;s the hatch that came off right in front of you and you froze, unsure what the fish were actually taking. It&apos;s the years spent practicing a fault instead of correcting it — because no one ever showed you the difference. Four days here is often faster than a lifetime of guessing on your own.
            </p>
            <p className="text-foreground leading-relaxed italic">
              I have witnessed this my entire career in that achieving excellence is not that difficult if we start with proper foundations. Many of the competitive World Champs achieved that status in around 5 years and I view that as they did not develop the typical habits of the rec angler constantly chasing the next viral cast and looking for excellence watching social media for being their Master. Those that attempt learning from purely social platforms have a serious quality discernment issue that they do not even know yet. This is because none of us do not know, what we do not know.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-16 md:py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Structured feedback</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            Built on a Real Assessment System
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              Every student receives structured, honest feedback throughout the course using an assessment system developed and refined since 1987 — not a participation certificate, but a real read on where your skills stand and what to keep working on after you leave. That process is part of what separates a week of casual instruction from a program designed to produce measurable, lasting improvement.
            </p>
            <p className="text-foreground leading-relaxed italic">
              Our student handouts and assessment forms are designed to help guide you for long term growth in the sport of fly fishing. The steps for progression are clearly spelled out throughout the week with debriefs daily with the group so everyone contributes.
            </p>
          </div>
        </div>
      </section>

      {/* Conservation and Professionalism */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Ethics &amp; stewardship</p>
          <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-8">
            Conservation and Professionalism
          </h2>
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              Guiding — and serious angling — comes with a responsibility to the resource. The program weaves conservation, stream ethics, and professional conduct throughout the week, not as an afterthought but as part of what it means to do this well. Every student leaves with more than a skill set: a structured plan for continuing to grow, and an understanding of why protecting these waters matters to everyone who fishes them.
            </p>
            <p className="text-foreground leading-relaxed italic">
              Working in outdoor recreation is rewarding. If guides and outdoor professionals do not remain stewards for the actions of others trying to harm a resource, then think of who will defend that right? A simple example of this is to look for other opportunities to fish for when general water temps become too warm to safely catch and release trout for example? The survival rate for releasing trout in warm water is catastrophic for their chance of survival. Why not target warm water species during those times like pike, bass, pan fish, and many others. You still get to teach most of the fundamentals of the sport while doing this it is just the target species changed?
            </p>
          </div>
        </div>
      </section>

      {/* Poor Fit */}
      <section className="py-16 md:py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">
              An honest answer includes this too. This program is a poor fit for:
            </p>
            <ul className="space-y-3 my-2">
              {[
                "Anyone looking for a relaxing vacation rather than an educational training week",
                "Anyone unwilling to be physically active on the water for four full days",
                "Anyone expecting a guaranteed guiding job rather than the skills and credentials to compete for one",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(215,55%,28%)] mt-2.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground leading-relaxed italic">
              The biggest attribute that we have seen over the years is the student that really wants to grow during the curriculum that is presented new things daily and is always at the ready to write down notes, asks questions, and is truly engaged throughout the whole itinerary. There is a lot to cover but I feel we have been fortunate to separate the growth minded people from the start over the years by being honest and stating exactly what it is that we offer. We have no coupons to a store to sell you something as an alternate motive. This is an educational path forward for progress and it has been refined for over 4 decades now during the course.
            </p>
          </div>
        </div>
      </section>

      {/* Two Pathway Cards */}
      <section className="py-16 md:py-20 border-b border-border bg-[hsl(215,55%,28%)]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60 mb-3 text-center">Choose your path</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Which Track Is Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Career card */}
            <div className="bg-white p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[hsl(215,55%,28%)] mb-3">Guide career track</p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Launch a Guiding Career
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                FFI-aligned casting, whitewater rowing certification, client communication, licensing, and job placement. The credentials outfitters actually screen for — taught by the faculty that wrote the standard.
              </p>
              <Link
                href="/fly-fishing-guide-school/"
                className="inline-flex items-center gap-2 bg-[hsl(215,55%,28%)] text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:opacity-90 transition-opacity self-start"
              >
                Guide School Overview <ArrowRight size={12} />
              </Link>
            </div>
            {/* Recreational card */}
            <div className="bg-white/10 border border-white/20 p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60 mb-3">Recreational track</p>
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Become a Better Angler
              </h3>
              <p className="text-white/80 leading-relaxed text-sm mb-6 flex-1">
                The same instruction, same faculty, same rivers — focused entirely on your own skills. Finally understand the water, the cast, and the drift. For the angler who is serious about the sport and ready to close the gap.
              </p>
              <Link
                href="/smoky-mountain-fly-fishing-school/"
                className="inline-flex items-center gap-2 border border-white text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-white/10 transition-colors self-start"
              >
                Recreational School <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WorthItFaq />

      {/* CTA */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Fly Fishing Guide School · Bryson City, NC
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation-form/"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(215,55%,28%)] text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Enroll Now <ArrowRight size={13} />
            </Link>
            <a
              href="tel:+18287361469"
              className="inline-flex items-center justify-center gap-2 border border-[hsl(215,55%,28%)] text-[hsl(215,55%,28%)] text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[hsl(215,55%,28%)]/5 transition-colors"
            >
              <Phone size={13} /> (828) 736-1469
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
