import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://macbrownflyfish.com/mission-statement/#page",
  name: "Mission Statement — Mac Brown Fly Fish",
  description:
    "Mac Brown Fly Fish exists to advance fly fishing as an art, a science, and a lifelong journey — through education, conservation, and the genuine belief that this sport makes people better stewards of the wild places they love.",
  url: "https://macbrownflyfish.com/mission-statement/",
  about: {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://macbrownflyfish.com/#business",
    name: "Mac Brown Fly Fish",
    url: "https://macbrownflyfish.com",
    foundingDate: "1987",
    description:
      "World-class fly fishing instruction and guided trips in the Great Smoky Mountains. Established 1987 in Bryson City, NC by Mac Brown — North Carolina's only FFI Certified Master Fly Casting Instructor.",
  },
  author: {
    "@type": "Person",
    "@id": "https://macbrownflyfish.com/#mac-brown",
    name: "Mac Brown",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://macbrownflyfish.com/#business",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://macbrownflyfish.com/mission-statement/",
  },
};

export const metadata: Metadata = {
  title: { absolute: "Our Mission — Fly Fishing Education & Conservation, NC" },
  description: "Mac Brown Fly Fish is committed to world-class fly fishing instruction, conservation of wild trout waters, and sharing the joy of fly fishing with every angler.",
  alternates: { canonical: "https://macbrownflyfish.com/mission-statement/" },
  openGraph: {
    title: "Mission Statement — Mac Brown Fly Fish",
    description: "Our mission: to advance fly fishing as an art, a science, and a lifelong journey — through education, conservation, and genuine stewardship.",
    url: "https://macbrownflyfish.com/mission-statement/",
  },
};

const values = [
  {
    title: "Education Over Entertainment",
    body: "The fly fishing industry has drifted toward entertainment — stocked water, social media fish, and weekend experiences built around feeling good rather than getting better. We have always chosen the other path. Every program we offer is built around genuine skill development, honest instruction, and the kind of improvement that travels with you to every piece of water you ever fish.",
  },
  {
    title: "Conservation & Stewardship",
    body: "The rivers and wild fish that define this sport are not guaranteed. We actively support organizations protecting wild trout habitat, advocate for legislation that serves the health of aquatic ecosystems, and educate every student and guest about the philosophy and practice of catch-and-release. The water deserves our best effort — not just our enjoyment of it.",
  },
  {
    title: "Community & Inclusion",
    body: "Fly fishing belongs to everyone. We are committed to serving people of all ages, backgrounds, physical abilities, and income levels — and to encouraging every student to become actively involved in their local fly fishing clubs, conservation organizations, and community. The sport grows when its community grows. We take that seriously. We have maintained kids programs and legislation for kids-only waters in NC as well as our region.",
  },
  {
    title: "Integrity & Clarity",
    body: "Fly fishing is surrounded by myths, misinformation, and marketing noise. We have spent nearly four decades working to clear up misconceptions, challenge bad information, and replace confusion with clarity. What we teach is grounded in physics, experience, and the kind of honest observation that only comes from thousands of days on real water with real fish.",
  },
  {
    title: "Environmental Responsibility",
    body: null,
  },
];

const objectives = [
  "Offer the widest possible range of fly fishing education, guided experiences, and skill development programs",
  "Provide honest guidance on high-quality equipment and services that represent genuine value",
  "Maintain leadership in fly fishing by contributing knowledge that advances the sport in the right direction",
  "Make anglers aware of legislation and environmental threats affecting the waters and wild fish they love",
  "Support organizations actively protecting wild trout habitat and healthy aquatic ecosystems",
  "Encourage every client to engage with their local fly fishing community and conservation organizations",
  "Deliver the highest quality programs in outdoor recreation and fly fishing education available anywhere in the Southeast",
  "Emphasize environmental awareness and build genuine stewardship in every person who fishes with us",
  "Teach the philosophy and practice of catch-and-release as a cornerstone of responsible fly fishing",
  "Diligently work to correct the misconceptions and misinformation surrounding the art of fly casting and fly fishing",
  "Enrich communities through volunteer programs, club presentations, conservation work, and shared knowledge",
  "Promote effective communication between fly fishing educators, conservationists, and the broader angling community",
  "Control growth deliberately to protect the quality, values, and integrity that have defined Mac Brown Fly Fish since 1987",
];

export default function MissionStatement() {
  return (
    <div className="w-full">
      <SchemaScript schema={aboutPageSchema} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/60 mb-5">
            Bryson City, North Carolina · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Mission Statement
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            This is not a fly fishing company. It is a fly fishing education.
          </p>
        </div>
      </section>

      {/* OPENING */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Since 1987, Mac Brown Fly Fish has existed for one purpose: to share the full depth, beauty, and challenge of fly fishing with anyone willing to pursue it seriously. Not the surface version of the sport — the real thing. The version that takes you deeper into wild places, closer to wild fish, and further along a journey of skill and understanding that never truly ends.
          </p>
          <p>
            Every guided trip, every school, every clinic, every blog post, and every cast taught on these rivers flows from the same core belief: that fly fishing is one of the richest pursuits available to a human being — and that most people who try it never get close to experiencing what it is actually capable of offering them.
          </p>
          <p className="font-semibold text-foreground text-xl">
            We exist to close that gap.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 mt-8">
            <p className="font-serif text-xl italic text-foreground leading-relaxed">
              "The learning curve for this sport is never-ending. There will always be something new — a cast that solves a problem, a hatch that surprises you, a piece of water that changes the way you see everything. That is not a frustration. That is the gift."
            </p>
          </blockquote>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/60 mb-5">Our Mission</p>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed">
            Mac Brown Fly Fish exists to advance fly fishing as an art, a science, and a lifelong journey — through education, conservation, and the genuine belief that this sport makes people better stewards of the wild places they love.
          </p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What We Stand For</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            Five Principles. Nearly Four Decades.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-border p-8 flex flex-col gap-4">
                <div className="w-8 h-0.5 bg-primary" />
                <h3 className="font-serif text-xl font-bold text-foreground leading-snug">{v.title}</h3>
                {v.body !== null ? (
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{v.body}</p>
                ) : (
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    Every program, every trip, and every school is conducted with a high level of safety and a deep respect for the natural environment. We foster environmental awareness in every guest — because the anglers who understand the ecosystems they fish in become the most effective advocates for protecting them. Mac Brown is an active river monitor for{" "}
                    <a href="https://scienceonthefly.org/therivers" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">
                      Science on the Fly
                    </a>
                    {" "}on the Tuckasegee River.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR OBJECTIVES */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Our Objectives</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What We Work Toward Every Day
          </h2>
          <ul className="space-y-5">
            {objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Journey Never Ends</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            That is the most honest and most encouraging thing about fly fishing. There is always a new cast to learn, a new hatch to understand, a new piece of water to read, a new challenge to solve. The sport never runs out of depth — and neither does the education available here.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you are booking your first guided trip, attending your first school, reading the blog for the first time, or returning after years of growing as an angler — welcome. You are in the right place.
          </p>
          <blockquote className="font-serif text-xl italic text-foreground/80 leading-relaxed mb-12">
            "We hope you enjoy the site, the water, and the journey. Feel free to reach out anytime with questions. We are here to help — and we mean that in every sense."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
              Book a Trip or School <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-muted/50 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
