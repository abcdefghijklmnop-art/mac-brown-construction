import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { img } from "@/lib/utils";
import { GuideCertificationFaq } from "./guide-certification-faq";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Guide Certification: What You Actually Need | Fly Fishing Guide School" },
  description:
    "FFI certification, state guide licensing, and what outfitters actually screen for when hiring fly fishing guides. Mac Brown has been training guides and instructors since 1987.",
  alternates: { canonical: "https://flyfishingguideschool.com/fly-fishing-guide-certification/" },
  openGraph: {
    title: "Fly Fishing Guide Certification: What You Actually Need to Guide Professionally",
    description:
      "FFI certification, state guide licensing, and what outfitters actually screen for when hiring fly fishing guides.",
    url: "https://flyfishingguideschool.com/fly-fishing-guide-certification/",
    images: [{ url: "https://flyfishingguideschool.com/images/mac-brown-casting-clinic-gaylord.webp", width: 1920, height: 1080, alt: "Mac Brown teaching group fly casting clinic — Fly Fishing Guide School" }],
  },
  twitter: { card: "summary_large_image" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://flyfishingguideschool.com/fly-fishing-guide-certification/#page",
  name: "Fly Fishing Guide Certification: What You Actually Need to Guide Professionally",
  description:
    "FFI certification, state guide licensing, and what outfitters actually screen for when hiring fly fishing guides. Mac Brown has been training guides and instructors since 1987.",
  url: "https://flyfishingguideschool.com/fly-fishing-guide-certification/",
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
      name: "Do you need certification to become a fly fishing guide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not legally in most states — guiding typically requires a state license, not casting certification. However, FFI certification is widely recognized industry-wide as a mark of casting competency and can meaningfully improve your chances when competing for guiding positions.",
      },
    },
    {
      "@type": "Question",
      name: "What is FFI certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FFI (Fly Fishers International) offers standardized, independently tested casting instructor certifications, widely recognized across the fly fishing industry as proof of real casting competency.",
      },
    },
    {
      "@type": "Question",
      name: "Does Fly Fishing Guide School prepare you for FFI certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The curriculum is built around FFI Master Instructor-level casting standards throughout the program, giving graduates a strong foundation for pursuing certification afterward.",
      },
    },
    {
      "@type": "Question",
      name: "Is a guide license the same as FFI certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A guide license is a state legal requirement tied to guiding and boating regulations, and requirements vary by state. FFI certification is a separate, non-legal, industry-recognized casting credential.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a shorter course to prepare for FFI casting certification before the full Guide School?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the Fly Casting Mastery Workshop is a weekend clinic specifically designed around the casting mechanics that FFI testing covers. Many CI and MCI candidates have come through that program before pursuing formal certification.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not ready for the full Guide School yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Smoky Mountain Fly Fishing School is a great entry point — a focused weekend program that builds the foundation of casting, water reading, and presentation skills you'll need before stepping into the Guide School curriculum.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Masterclass Casting Workshop help with FFI certification prep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Masterclass goes deep on casting mechanics at an advanced level — exactly the kind of focused work that sets candidates up well for FFI testing. Many students use it as a direct prep course before pursuing Certified or Master Casting Instructor credentials.",
      },
    },
  ],
};

export default function GuideCertificationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20">
        <img
          src={img("/images/mac-brown-casting-clinic-gaylord.webp")}
          srcSet={`${img("/images/mobile/mac-brown-casting-clinic-gaylord.webp")} 1280w, ${img("/images/mac-brown-casting-clinic-gaylord.webp")} 1920w`}
          sizes="100vw"
          alt="Mac Brown teaching group fly casting clinic — Fly Fishing Guide School"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 mb-4">
            Licensing &amp; Certification · Fly Fishing Guide School
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            Fly Fishing Guide Certification: What You Actually Need to Guide Professionally
          </h1>
          <p className="text-white/80 text-lg italic mb-8">
            Licensing, FFI Certification, and What Actually Matters to Outfitters Hiring Guides
          </p>
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
            Quick Answer: Do You Need Certification to Guide?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Not legally — but Mac Brown has been preparing fly fishing guides and casting instructors in Bryson City since 1987, and here&apos;s what four decades on the water taught him: a license gets you on the water, but real certification is what tells an outfitter you actually know what you&apos;re doing before they&apos;ve ever watched you cast. If you&apos;re serious about guiding, or just serious about your casting, that difference is worth understanding — and it&apos;s the one thing a YouTube video can&apos;t give you.
          </p>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed italic">
            Training fly fishing guides and instructors since 1987.
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
              alt="Career guide track"
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

      {/* Mac's FFI Story */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <p className="text-foreground leading-relaxed">
            I realize and I have heard the perception from both the general public as well as FFI folks. I have been involved with{" "}
            <a href="https://www.flyfishersinternational.org/Casting-Instructor-Certification" target="_blank" rel="noopener noreferrer" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">Fly Fishers International</a>{" "}
            since the mid 1990&apos;s. We had the National Conclave in Gatlinburg, TN and I was one of three folks who volunteered giving casting demos and classes for the organization that year. I was 32 years old when I attended the conclave. It was a real blessing for me personally because I got to spend quality time throughout the weekend with Mel Krieger and Lefty Kreh. I was also a member of the Board of Governors (BOG) and I can assure you the leadership really does want to help others appreciate the feel of a great casts and to see folks thrive.
          </p>
          <blockquote className="border-l-4 border-[hsl(215,55%,28%)] pl-6 py-2">
            <p className="text-foreground leading-relaxed italic text-lg">
              It was a real blessing for me personally because I got to spend quality time throughout the weekend with Mel Krieger and Lefty Kreh.
            </p>
          </blockquote>
          <p className="text-foreground leading-relaxed">
            I look at it as another feather in your cap if you sincerely want to understand how the cast works and share that enthusiasm with others. Many of the folks I have hired that also help me with the schools also went thru these same steps because they really did have a desire to helping others. I personally believe in the cause in small part because most of my heroes as a kid were heavily involved helping to launch the program in the first place.
          </p>
          <p className="text-foreground leading-relaxed">
            I have been an L2 examiner for the FFI — qualified to administer testing from Certified Instructor (CI) through Master Casting Instructor (MCI) level — and that opportunity also has taken me all over the place for testing events and introduced me to some fine folks. My region of the Southeast has produced for many years some of the highest numbers globally of new Certified Instructors and Master Casting Instructors coming into the program. Many of these folks came through our{" "}
            <a href="https://macbrownflyfish.com/fly-casting-mastery-workshop/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">Fly Casting Mastery Workshop</a>{" "}
            weekend clinic. You will notice that on my pages that I have links embedded for those that are curious about the Certification track and what it entails. I encourage you to just take a look at those if interested. This is a win because that equates to more folks teaching at a higher level all over the globe.
          </p>
          <blockquote className="border-l-4 border-[hsl(215,55%,28%)] pl-6 py-2">
            <p className="text-foreground leading-relaxed italic text-lg">
              My region of the Southeast has produced for many years some of the highest numbers globally of new Certified Instructors and Master Casting Instructors coming into the program.
            </p>
          </blockquote>
        </div>
      </section>

      {/* State Licensing vs FFI */}
      <section className="py-16 md:py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-6">
            State Licensing vs. FFI Certification — Two Different Things
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            These get confused constantly, so it&apos;s worth separating them clearly.
          </p>
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[hsl(215,55%,28%)] mt-2 shrink-0" />
                <p className="text-foreground leading-relaxed font-semibold">
                  State guide license: a legal requirement in most states to work as a paid fishing guide, typically tied to boating/watercraft regulations. Requirements vary by state — check your specific state&apos;s rules directly.
                </p>
              </div>
              <p className="text-foreground leading-relaxed pl-5">
                As a side note, the state of{" "}
                <a href="https://www.maine.gov/ifw/fishing-hunting/guide-licensing.html" target="_blank" rel="noopener noreferrer" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">Maine</a>{" "}
                has a vigorous test, and it includes all kinds of things to make sure quality folks are allowed to guide. They include navigational requirements, firearms with selection of proper ammo, and a host of things in addition to fishing knowledge. Other states like{" "}
                <a href="https://www.ncwildlife.org/licensing" target="_blank" rel="noopener noreferrer" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">North Carolina</a>{" "}
                where I live only require a $15 dollar guide license which anyone can have. So, another way to think about this is some states are very strict and others could care very little about requirements. In{" "}
                <a href="https://boards.bsd.dli.mt.gov/out" target="_blank" rel="noopener noreferrer" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">Montana</a>{" "}
                you must be a member of Montana Board of Outfitters which is similar to NC except the fee is much higher.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[hsl(215,55%,28%)] mt-2 shrink-0" />
                <p className="text-foreground leading-relaxed font-semibold">
                  <a href="https://www.flyfishersinternational.org/Casting-Instructor-Certification" target="_blank" rel="noopener noreferrer" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">FFI casting certification</a>: not a legal requirement anywhere, but the industry&apos;s recognized standard for proving casting skill. Outfitters use it as a hiring signal because it&apos;s independently tested, not self-reported.
                </p>
              </div>
              <p className="text-foreground leading-relaxed pl-5">
                While there are a few others that claim their certificate means something it is relatively useless because it usually has a market driven approach to entry. In other words, Coupon Codes or Discounts to the store with no pass / fail criteria. So, to many that makes these types of things useless overall to outdoor outfitters and professionals. There is also a pay-to-play hierarchy to many of these big brands. In other words, to be the Guide of the Year, Lodge of the Year, and other merits they pay huge monies to be in the running with no merit credentials to begin with. So, if you have extra monies and you want to be in the running, you pay to play. Many are not a fan of this in our industry and some are to be associated with a brand. The reality of quality discernment really goes back to viewing who have they produced? Have they just opened up a retail store for years? Have they created a casting World Champion? Have they been involved with a Competitive Angler World Champion? You get the idea?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FFI Certification Matters */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)]">
            Why FFI Certification Matters to Outfitters
          </h2>
          <p className="text-foreground leading-relaxed">
            Anyone can say they&apos;re a strong caster. FFI certification is the one credential that&apos;s independently tested and standardized — meaning an outfitter hiring a stranger has an actual, verifiable signal of skill instead of just a resume claim.
          </p>
          <p className="text-foreground leading-relaxed">
            Well, the overall skills are a measured skill set that I have witnessed for over 3 decades now being around testing events. None of these are just given out during my involvement with the FFI. The other examiners that I have tested events with really do put the candidates first every time. They are very keen at paying attention to every little clue trying to help the candidates get through the exams with a positive outcome. I know from the testing side of things and also preparing candidates for many decades now. I have prepped more folks from all over the country in Bryson City than most places around the globe over the last 20 years.
          </p>
        </div>
      </section>

      {/* How the Guide School Curriculum Lines Up */}
      <section className="py-16 md:py-20 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)]">
            How the Guide School Curriculum Lines Up
          </h2>
          <p className="text-foreground leading-relaxed">
            The{" "}
            <Link href="/fly-fishing-guide-school/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">
              Fly Fishing Guide School
            </Link>{" "}
            curriculum is built around FFI Master Instructor-level casting standards throughout the four days — not as a separate add-on, but as the foundation the rest of the program is built on. Graduates leave with a strong base for pursuing FFI certification if they choose to, alongside the water reading, rowing, and client-management training that rounds out what outfitters are hiring for.
          </p>
          <p className="text-foreground leading-relaxed">
            A great way to understand why we maintain such a high standard with all of our instructors is due to the fact that they all can get someone quickly to understand what is needed in the understanding firstly so the body movements follow. This is quite different than the way that most big operations and classes at shows do things. You the consumer must maintain strict quality discernment over teaching to performance versus covering understanding with performance. Only the later one enables you to really keep improving over time which means no boundaries. If I teach someone a lesson strictly for just performance, what happens for them on a trip when they have to self-optimize solving a casting problem on the flats or river bank?
          </p>
          <blockquote className="border-l-4 border-[hsl(215,55%,28%)] pl-6 py-2">
            <p className="text-foreground leading-relaxed italic text-lg">
              You the consumer must maintain strict quality discernment over teaching to performance versus covering understanding with performance. Only the later one enables you to really keep improving over time which means no boundaries.
            </p>
          </blockquote>
          <p className="text-foreground leading-relaxed">
            When I think back to my own career and the programs teaching at Western Carolina University I really had to figure things out in a hurry. Now I understand on a much deeper level about what works best for large groups, the use of internal and external cueing, and so much more for having a very productive session. Also this was taught and refined for me from so many iconic teachers that really had their style of teaching dialed in already. So, we all take what really worked well and keep applying that which is how teaching may continue to flourish.
          </p>
        </div>
      </section>

      {/* What Outfitters Actually Screen For */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-6">
            What Outfitters Actually Screen For
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Certification is one signal among several. In practice, hiring decisions typically weigh:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Demonstrated casting competency (FFI certification, or equivalent proven skill)",
              "State guide license and any required boating/watercraft certifications",
              "Water reading and fish-finding ability specific to the region",
              "Client communication and teaching ability — the actual day-to-day job",
              "Safety judgment and professional conduct",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-[hsl(215,55%,28%)] mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground leading-relaxed">
            I have had several talented folks come through the{" "}
            <Link href="/fly-fishing-guide-school/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">
              Fly Fishing Guide School
            </Link>{" "}
            that I get to witness firsthand what they are made of from their work ethic, note taking, questions they ask, and the skills they produce on the stream. Many of them I have hired straight out of the school because they already exhibit all of the traits that we are looking for in a person to share that passion with others. On top of that, these folks already had several decades of experience being on a stream. Their communication skills were exemplary. Read what{" "}
            <Link href="/testimonials-kudos/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">
              graduates say
            </Link>{" "}
            about where the program took them.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <GuideCertificationFaq />

      {/* CTA */}
      <section className="py-20 bg-[hsl(215,55%,28%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60 mb-4">
            Ready to get started?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Build the Foundation. Earn the Credential.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            The{" "}
            <Link href="/fly-fishing-guide-school/" className="text-white underline underline-offset-2 hover:opacity-75 transition-opacity">
              Fly Fishing Guide School
            </Link>{" "}
            is built around FFI Master Instructor-level standards — the same benchmark that certification testing uses. See how the{" "}
            <Link href="/is-fly-fishing-guide-school-worth-it/" className="text-white underline underline-offset-2 hover:opacity-75 transition-opacity">
              program stacks up in cost and value
            </Link>
            , or{" "}
            <a href="https://macbrownflyfish.com/fly-fishing-guide-school/" className="text-white underline underline-offset-2 hover:opacity-75 transition-opacity">
              learn more about Mac Brown&apos;s guide training record
            </a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation-form/"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(215,55%,28%)] text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Enroll Now <ArrowRight size={13} />
            </Link>
            <Link
              href="/blog/learn-how-to-become-a-fly-fishing-guide-and-instructor/"
              className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              How to Become a Guide
            </Link>
          </div>
          <p className="mt-8 text-white/60 text-sm flex items-center justify-center gap-2">
            <Phone size={13} />
            Questions? Call <a href="tel:+18287362313" className="underline hover:text-white transition-colors">828-736-2313</a>
          </p>
        </div>
      </section>
    </>
  );
}
