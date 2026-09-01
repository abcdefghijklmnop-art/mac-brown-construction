import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "@/components/schema-script";
import { PriceTag } from "@/components/price-tag";
import FaqSection from "@/components/faq-section";
import { castingAnglesBookSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Fly Casting Angles — Trajectory, Presentation & Technique" },
  description:
    "Learn how casting angles affect your fly presentation and drift. Expert instruction from Mac Brown on one of fly casting's most misunderstood fundamentals.",
  alternates: { canonical: "https://macbrownflyfish.com/casting-angles/" },
  openGraph: {
    title: "Casting Angles — Fly Casting Book by Mac Brown",
    description:
      "The most thorough fly casting book ever written. Order a signed copy direct from Mac Brown in Bryson City, NC.",
    url: "https://macbrownflyfish.com/casting-angles/",
  },
  twitter: { card: "summary_large_image" },
};

const reviews = [
  {
    name: "Carl McNeil",
    location: "Wanaka, New Zealand",
    year: "2008",
    text: "Casting Angles is an extensive and detailed study of fly casting and fishing techniques. Mac Brown covers a huge number of presentation casts, techniques, and fly casting principles and busts a few myths along the way. Mac is obviously not conventional in either his casting or thinking — and it is this approach that delivers an original and thought-provoking treatment to a discipline that has had much press over the years. A more thorough casting book I have not read — and I've read quite a few.",
  },
  {
    name: "George Forster",
    location: "Wodonga, Australia",
    year: "2017",
    text: "When Mac Brown wrote Casting Angles, he could not have foreseen the influence it would have in the world of fly casting instruction. Fly fishing has become a sport enjoyed by so many not only in the US but worldwide. The contents of this work are beneficial toward learning real deal methodologies in fly casting. I highly recommend Mac Brown and Casting Angles.",
  },
  {
    name: "John Till",
    location: "Amazon Verified Purchase",
    year: "2003",
    text: "I will not go into great detail, except to say that this is a unique book and is very helpful to a person who desires to become a good to expert caster. I have read in excess of 50 casting books and this is a must — one of the top 5 or 6.",
  },
  {
    name: "Jon",
    location: "Amazon Verified Purchase",
    year: "2012",
    text: "Of the books on casting one-handed rods — including Lefty and Mel Krieger — this is the one I like best. The analysis of the fundamentals is incisive and the box exercises are revealing. It is well worth the price.",
  },
  {
    name: "Carol Northcut",
    location: "Dillon, CO",
    year: "2020",
    text: "If you want to understand the mechanics and some physics behind the cast, this is the book. It can take a while for the non-technical person to get through it, but it's definitely worth it. It will change your thinking about casting.",
  },
  {
    name: "Carolyn Emery",
    location: "Atlanta, GA",
    year: "2020",
    text: "It's great to be mentored by Mac Brown. He has the keep-it-simple methodology for skills that makes even the technical content accessible and actionable.",
  },
  {
    name: "Jonathan Walter",
    location: "Denver, CO",
    year: "2013",
    text: "I am a casting geek, and I really enjoyed this book. I refer to it often.",
  },
];

const bookInfo = [
  ["Title", "Casting Angles"],
  ["Author", "Mac Brown"],
  ["Publisher", "Highland Press"],
  ["Format", "Paperback"],
  ["Pages", "238 pages"],
  ["ISBN", "1-890485-00-4"],
];

const castingAnglesFaqs = [
  {
    q: "What is Casting Angles?",
    a: "Casting Angles is Mac Brown's signature fly casting instructional resource — covering cast trajectory, loop control, presentation, mending, and the full range of techniques that determine where the fly lands and how it fishes. Written and developed by the only Master Casting Instructor in North Carolina, it translates 40 years of hands-on instruction into a framework any angler can learn and apply.",
  },
  {
    q: "Who is Casting Angles designed for?",
    a: "Casting Angles is for any fly angler who wants to move from casting to executing — from beginners building a foundation of correct mechanics to experienced anglers who want to understand the geometry and physics behind every cast they make. It is especially valuable for anglers who have plateaued or who teach others.",
  },
  {
    q: "What casting techniques does Casting Angles cover?",
    a: "Casting Angles covers cast trajectory and how it affects presentation, loop formation, reach casts, curve casts, slack-line casts, mending, and the most important delivery casts for both moving water and stillwater. Each technique is tied directly to fishing situations where it makes the difference.",
  },
  {
    q: "How does the Casting Angles instruction work?",
    a: "Mac uses a structured approach: establish the principle, demonstrate the movement, connect it to a fish-catching situation. Every technique is grounded in mechanics you can repeat — not feel-based descriptions that mean different things to different people. The goal is a cast that is repeatable under pressure and adaptable to any water.",
  },
  {
    q: "Can I take a casting lesson with Mac Brown alongside Casting Angles?",
    a: "Yes. Private fly casting lessons with Mac are available in person in Bryson City, NC ($400 per session) and via live video instruction (FaceTime, Zoom, or Skype). These sessions work directly from the Casting Angles framework — systematic, diagnostic, and immediately effective.",
  },
];

export default function CastingAngles() {
  return (
    <div className="min-h-screen bg-white">
      <SchemaScript schema={castingAnglesBookSchema} />
      <SchemaScript schema={faqPageSchema(castingAnglesFaqs)} />

      {/* Hero */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">
            By Mac Brown · FFI Master Casting Instructor · Bryson City, NC
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">Casting Angles — Fly Casting Book by Mac Brown</h1>
          <p className="text-xl italic text-white/70 mb-6">The Most Thorough Fly Casting Book Ever Written</p>
          <p className="text-lg italic text-white mb-8">
            "A more thorough casting book I have not read — and I've read quite a few."
          </p>
          <p className="text-yellow-400 text-xl mb-10">★★★★★ Readers on Six Continents</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://swipesimple.com/links/lnk_91821531"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white font-bold px-8 py-4 text-lg transition-colors"
            >
              Buy Direct — Get a Signed Copy
            </a>
            <a
              href="http://www.amazon.com/Casting-Angles-Mac-Brown/dp/1890485004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 text-lg transition-colors"
            >
              Order on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Casting Angles is a fly casting handbook written by Mac Brown — the only FFI Master Casting Instructor in North Carolina. Endorsed by the ACA, FFI, and recognized instructors as a reference for fly casting mechanics. Available signed directly from Mac Brown for <PriceTag priceKey="castingAnglesBook" as="span" /> plus shipping.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 pb-3 border-b-2 border-primary">
            About the Book
          </h2>
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Fly fishing is ultimately about solving problems. The fish is there. Much of this text was my
              interpretations of solving these problems as a kid on the streams and writing them in a journal. The water
              is moving. The canopy is tight. The current is conflicted. The only tool you have is the cast — and the
              cast either solves the problem or it doesn't.
            </p>
            <p>
              <em>Casting Angles</em> is built around that truth. Begun in the early 1990s during my Associate Professor
              days at Western Carolina University and refined through nearly four decades of teaching, guiding, and
              competing on the streams of the Great Smoky Mountains and beyond, this book is a comprehensive compilation
              of fishing casts designed to solve the specific problems that moving water and real fishing situations
              create.
            </p>
            <p>
              It is not a beginner's introduction to fly casting. It is a working manual for the angler who wants to
              understand what is actually happening — and what to do about it. The diverse currents and canopy of the
              Great Smoky Mountains streams provided the laboratory. Thousands of days of teaching and watching students
              struggle with and solve the same problems provided the curriculum.
            </p>
            <p>
              Much of the terminology developed in <em>Casting Angles</em> has become common language among fly casting
              instructors globally — a fact that is both humbling and a testament to how clearly the concepts translate
              across different waters, different cultures, and different levels of casting experience.
            </p>
            <p className="font-semibold text-primary text-xl italic text-center py-4">
              The fly cast is the only delivery between you and the fish. This book teaches you to make it count.
            </p>
          </div>
        </div>
      </section>

      {/* Book Details & Pricing */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 pb-3 border-b-2 border-primary">
            Book Details &amp; Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-5">Book Information</h3>
              <div className="space-y-3">
                {bookInfo.map(([label, value], i) => (
                  <div
                    key={i}
                    className={`flex justify-between py-2 ${i < bookInfo.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <span className="font-semibold text-gray-700">{label}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-5">Pricing &amp; Shipping</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6">
                  <p className="font-bold text-gray-800 mb-1">🇺🇸 United States</p>
                  <p className="text-gray-500 text-sm">Shipping included</p>
                  <p className="text-2xl font-bold text-[#1D9E75] mt-1">$42.50</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">🌍 International</p>
                  <p className="text-gray-500 text-sm">$42.50 + international shipping</p>
                  <p className="text-xs text-gray-400 mt-1">Contact us for international shipping rate</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-6 italic">
                All direct orders are signed by Mac Brown and shipped from Bryson City, NC.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://swipesimple.com/links/lnk_91821531"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white font-bold px-10 py-4 text-lg transition-colors text-center"
            >
              Buy Direct — Get a Signed Copy
            </a>
            <a
              href="http://www.amazon.com/Casting-Angles-Mac-Brown/dp/1890485004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 text-lg transition-colors text-center"
            >
              Order on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4 pb-3 border-b-2 border-primary">
            What Readers Are Saying
          </h2>
          <p className="text-gray-500 italic mb-10">
            From beginners to world-class casting instructors — readers on six continents have called this the most
            thorough fly casting book ever written.
          </p>
          <div className="space-y-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-gray-200">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                  <span className="font-bold text-primary">{review.name}</span>
                  <span className="text-gray-400">—</span>
                  <span className="text-gray-500">{review.location}</span>
                  <span className="text-gray-400 text-sm ml-auto">({review.year})</span>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={castingAnglesFaqs} />

      {/* Final CTA */}
      <section className="bg-primary text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">The Cast That Catches the Fish</h2>
          <p className="text-lg text-white/70 mb-4 leading-relaxed">
            Most anglers spend thousands on gear and destinations and almost nothing on understanding the one skill that
            determines whether any of it works. <em>Casting Angles</em> changes that — permanently and completely.
          </p>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            Whether you are a beginner building your first foundation or an experienced caster looking to finally
            understand why your cast does what it does — this book will change the way you think about fly casting.
          </p>
          <p className="text-white italic text-xl mb-10">
            "The fly cast is the only delivery between you and the fish. This book teaches you to make it count."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://swipesimple.com/links/lnk_91821531"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white font-bold px-10 py-4 text-lg transition-colors"
            >
              Buy Direct — Signed Copy
            </a>
            <a
              href="http://www.amazon.com/Casting-Angles-Mac-Brown/dp/1890485004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-primary font-bold px-10 py-4 text-lg transition-colors"
            >
              Order on Amazon
            </a>
          </div>
          <p className="text-white/60 mt-8 text-sm">
            Questions? Call 828-736-1469 or email macbrownflyfish@gmail.com
          </p>
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link href="/fly-casting-instruction" className="text-white/70 hover:text-white transition-colors underline underline-offset-4">Casting Instruction with Mac</Link>
            <span className="hidden sm:inline text-white/30">·</span>
            <Link href="/bio-mac-brown" className="text-white/70 hover:text-white transition-colors underline underline-offset-4">About Mac Brown</Link>
            <span className="hidden sm:inline text-white/30">·</span>
            <Link href="/store" className="text-white/70 hover:text-white transition-colors underline underline-offset-4">Mac Brown Store</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
