import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Client Reviews & Testimonials — Mac Brown Fly Fish" },
  description: "Hear from anglers who have fished and studied with Mac Brown. Guided trips, casting schools, and clinics in the Smoky Mountains.",
  alternates: { canonical: "https://macbrownflyfish.com/testimonials-kudos/" },
  openGraph: {
    title: "Testimonials & Kudos — Mac Brown Fly Fish",
    description: "What anglers from around the world say about Mac Brown's fly fishing instruction and guided trips in the Great Smoky Mountains.",
    url: "https://macbrownflyfish.com/testimonials-kudos/",
    images: [{ url: "https://macbrownflyfish.com/images/smoky-mountains.webp" }],
  },
};

const starReviews = [
  { name: "Jing Li", location: "Beijing, China", quote: "Thanks for the fun casting class as your support gives me confidence to try my best for the CI exam in France." },
  { name: "George Forster", location: "Wodonga, Australia", quote: "Mac Brown is the original fly fishing guide in the GSM region. I have recommended Mac Brown to many down under in Australia." },
  { name: "Carolyn Emery", location: "Atlanta, GA", quote: "I've found my mentor to make a better well-rounded fly fishing angler. I carry a notebook with me to keep the salient points he makes." },
  { name: "Dan Riffe", location: "Bryson City, NC", quote: "MAC was excellent and wildly exceeded our expectations. We improved our casting and found a new appreciation for the sport. We will book again." },
  { name: "Jared Tschirgi", location: "TX", quote: "He is a savant of fly fishing. Mac has dedicated a lot of time to learning the art of fly fishing and it shows. I'll be fishing with him again." },
  { name: "Jeff Hathaway", location: "", quote: "The use of science and principles of physics gives you the tools to truly understand the why behind what is being taught. Just like golf — get to the right instructor and you will improve." },
  { name: "Marlene Huston", location: "Rochester, MN", quote: "Great day on the water with Mac! Mac knows his home waters to a T — catching fish, fly casting discussions, and learning about the area." },
  { name: "Paul Barbour", location: "Ohio", quote: "Do yourself a huge favor — try attending Mac's seminar. You will see much more improvement with Mac than any new gear could possibly offer. Great people, a gorgeous setting, and world-class instruction." },
  { name: "Beau McLeod", location: "Columbia, SC", quote: "I learned more in one day with Mac than I have in the last five years on my own. Great guide and teacher." },
  { name: "Jonathan Dietz", location: "Fly Fishing Team USA · Erie, PA", quote: "Mac Brown is undoubtedly one of the best casters in the United States, even more so an angler. His ability to instruct is superb." },
  { name: "Jim Zifer", location: "Cincinnati, OH", quote: "Mac has an extraordinary knowledge of casting, aquatic entomology, and new techniques. He is among the top fly fishing experts in the country." },
  { name: "Frank Conlon", location: "Raleigh, NC", quote: "Always learning with Mac — on casting, reading water, choosing flies, presentation, hook setting, and more. One of the best days you will have on the water." },
  { name: "Miranda Wolf", location: "Springfield, MO", quote: "Flyfisher Mac Brown is at the top when it comes to guiding on the 2,000 miles of trout streams around Bryson City, NC." },
  { name: "Ursula Whalen", location: "Winston-Salem, NC", quote: "Mac Brown is a gifted teacher and exceptionally patient with children. He knows where to find fish and how to crack the code. The best!" },
  { name: "Lindy Maracic", location: "Hollywood, FL", quote: "It is rare to see someone so dedicated and so in love with their occupation. I was energized by your wealth of knowledge and enthusiasm." },
  { name: "Michael McLure", location: "Chattanooga, TN", quote: "Mac is certainly a professional with the art of fly fishing. The day was very informative through his detailed and sequential instruction." },
  { name: "Tommy Bradford", location: "Fayetteville, NC", quote: "Mac's insights and techniques of the world of fly fishing are endless. His knowledge and expertise as an instructor and guide are only outdistanced by his ability as an angler." },
  { name: "Gene Armstrong", location: "Cincinnati, OH", quote: "Your many tips and techniques have helped me a lot and I am grateful." },
  { name: "Serge Hayez", location: "Brussels, Belgium", quote: "Mac is by far the most knowledgeable guide I have fished with anywhere in the world." },
  { name: "Paul Wonsavage", location: "VT", quote: "The casting weekend is clearly one of the best things I've ever done for my casting." },
  { name: "John Mauldin, Ph.D.", location: "Big Canoe, GA", quote: "You all did a wonderful job of bringing together a highly experienced group of teachers. I got a feel for the loops rather than a strictly mechanical approach. Everyone was very kind and considerate. Great class!" },
  { name: "Morgan Cryster", location: "Greeneville, SC", quote: "Thanks for a great class." },
  { name: "Aaron Christensen", location: "Charlotte, NC", quote: "Two full days of instruction from three of the top instructors and casters in the country and world. Yes, it's worth every penny, and yes you should do it. The best casting instruction imaginable." },
  { name: "Jason Fleming", location: "NC", quote: "Mac is awesome! He got me to cast the entire line with a double haul on a slow 8′ 4wt rod. I was lucky to intern with his fly fishing class at WCU." },
  { name: "John Nabors", location: "Madisonville, GA", quote: "Thank you for your patience and willingness to teach us what you love. It's hard to come across someone like you who is true, genuine, sincere, and real. I greatly appreciate that." },
  { name: "Leo Tammaro", location: "Boston, MA", quote: "The perfect balance between classroom information and practical instruction. The takeaways from this course have helped me improve my casting, diagnose casting faults, and make the necessary corrections needed to advance as a casting instructor." },
];

const kudos = [
  { source: "John Mauldin, Ph.D. — Big Canoe, GA", year: "2019", title: "Feel for the Loops", body: "You all did a wonderful job of bringing together a highly experienced group of teachers. I expect the collective years of experience were well over a hundred. The tips and ideas offered were very helpful to me. I also felt more confident after several people did critiques and corrections. I got a feel for the loops rather than a strictly mechanical approach. Everyone was very kind and considerate. Great class!" },
  { source: "Aaron Christensen, Charlotte, NC", year: "2018", title: "The Best Casting Instruction Imaginable", body: "Instagram does not leave enough room to describe the quality of this program. Two full days of instruction from three of the top instructors and casters in the country and world. Yes, it's worth every penny, and yes you should do it. The best casting instruction imaginable. Highly recommend it to my fly-fishing friends who want to advance their casting and teaching skills to the next level. The class provides the tools and confidence to succeed." },
  { source: "Frank Conlon, Raleigh, NC", year: "2018", title: "Incredible — Most Rewarding 2 Days", body: "The last two days were incredible! It really inspired me to be better. I can't remember a more rewarding 2 days. This class really inspired me to improve! I am so determined to practice more than ever. Thanks" },
  { source: "Leo Tammaro, Boston, MA", year: "2018", title: "Perfect Balance of Theory and Practice", body: "I wanted to thank you, Tom and Eric, for all of the information given during the 2-day workshop. It was the perfect balance between classroom information and practical instruction. I highly recommend this course for anyone seriously pursuing certification. The takeaways from this course have helped me improve my casting, diagnose casting faults, and make the necessary corrections needed to advance as a casting instructor." },
  { source: "Paul Barbour, Ohio", year: "2018", title: "Well Worth It!!", body: "Like most beginning fly fishermen, I learned from friends. And, like most folks, I was reasonably successful at getting the fly to hit the water. The problem was that much of my fishing was on a nearby lake, and when the fish were rising, they were always ten feet farther than I could cast. After consulting with the internet, I endeavored to teach myself to double-haul. Instead, I taught myself to throw horrible, tailing loops.\n\nOnce more, I turned to the internet for help. This time, I discovered Mac Brown and his book Casting Angles. Mac's book isn't a bunch of pretty pictures and big fish, but it is the most accurate text I have found on what is really, physically happening when a fly line is cast. I knew after reading it that I had to meet the man himself, so I wrapped a Smoky Mountain vacation around a lesson with Mac. He fixed what I asked, but more importantly, he taught me why it was happening — and gave me the tools to self-diagnose going forward.\n\nI was so astounded at what I learned that I signed up for his two-day Advanced Fly Casting School, which brings Master Casting Instructors together in one place for an intensive class on the physics of casting, performance of the casts, and diagnosing unintended outcomes. While the seminar is aimed at passing the Casting Instructor Certification, anyone can benefit from the instruction. Be sure to bring a notebook; the information flies at you with an amazing depth and clarity.\n\nDo yourself a huge favor — instead of buying that new fly rod carved out of unicorn horn, or the new reel milled from fairy wings, try attending Mac's seminar. You will see much more improvement with Mac than any new gear could possibly offer. It's a fabulous value — great people, a gorgeous setting, and world-class instruction. I could not recommend it more!" },
];

const institutional = [
  { source: "Athletic Director, Western Carolina University", year: "1996", body: "Associate Professor Mac Brown has had the most popular class ever teaching fly fishing at Western Carolina University. The Delayed Harvest program on the Tuckasegee River near the campus is a direct result of this successful collegiate program." },
  { source: "Southern Appalachia Fly Fishing Museum", year: "August 2017", body: "Mac Brown was inducted into the Southern Appalachia Fly Fishing Museum Hall of Fame for Recreation on August 26, 2017." },
  { source: "Field & Stream", year: "Fall 1999", body: "Field & Stream nominates Mac Brown Angler of the Year in the fall 1999 issue." },
];

const pressFeatures = [
  {
    source: "Miss Pursuit",
    url: "https://misspursuit.com/humbled-flyfisher-with-mac-brown-fly-fish/",
    quote: "If, when we practice, we can produce one more good cast and one fewer poor cast each time, then we are headed in the right direction.",
    cta: "Read the full Miss Pursuit school review",
  },
];

const testimonialFaqs = [
  {
    q: "What do clients say about Mac Brown as a fly fishing instructor?",
    a: "Clients consistently describe Mac Brown as one of the most knowledgeable fly fishing instructors they have ever encountered — anywhere in the world. Common themes across hundreds of reviews: he teaches the why behind every cast, not just the mechanics; he is extraordinarily patient; and most students say they learned more in a single day with Mac than in years on their own.",
  },
  {
    q: "Is Mac Brown's fly fishing instruction worth it?",
    a: "By every account, yes. Students from Beijing, Brussels, Boston, Australia, and across the US call it worth every penny. The instruction is designed to travel with you — you leave with a process for diagnosing your own casting and reading any water, which means the value compounds every time you fish. Multiple students have returned year after year.",
  },
  {
    q: "What recognition has Mac Brown received from the fly fishing community?",
    a: "Mac Brown was inducted into the Southern Appalachian Fly Fishing Museum Hall of Fame in 2017. He was nominated Angler of the Year by Field & Stream in 1999. Western Carolina University has recognized his fly fishing course as the most popular class ever taught at the university, and the Delayed Harvest program on the Tuckasegee River near campus was established as a direct result of that program.",
  },
  {
    q: "How long has Mac Brown been guiding and teaching fly fishing?",
    a: "Mac Brown has been guiding and teaching fly fishing in Bryson City, NC since 1987 — nearly four decades of instruction on the Tuckasegee River and throughout the Great Smoky Mountains. He is an FFI Master Certified Casting Instructor and has been presenting at The Fly Fishing Show since 1994.",
  },
];

const MBFF_BUSINESS_ID = "https://macbrownflyfish.com/#business";

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Client Reviews — Mac Brown Fly Fish",
  url: "https://macbrownflyfish.com/testimonials-kudos/",
  itemListElement: starReviews.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: r.name,
        ...(r.location ? { address: { "@type": "PostalAddress", addressLocality: r.location } } : {}),
      },
      reviewBody: r.quote,
      itemReviewed: { "@id": MBFF_BUSINESS_ID },
    },
  })),
};

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary">
      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What do clients say about Mac Brown as a fly fishing instructor?",
            "acceptedAnswer": { "@type": "Answer", "text": "Clients consistently describe Mac Brown as one of the most knowledgeable fly fishing instructors they have encountered anywhere in the world. Common themes: he teaches the why behind every cast, he is extraordinarily patient, and most students say they learned more in a single day with Mac than in years on their own." }
          },
          {
            "@type": "Question",
            "name": "Is Mac Brown's fly fishing instruction worth it?",
            "acceptedAnswer": { "@type": "Answer", "text": "By every account, yes. Students from Beijing, Brussels, Boston, Australia, and across the US call it worth every penny. The instruction is designed to travel with you — you leave with a process for diagnosing your own casting and reading any water, which means the value compounds every time you fish." }
          },
          {
            "@type": "Question",
            "name": "What recognition has Mac Brown received from the fly fishing community?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown was inducted into the Southern Appalachian Fly Fishing Museum Hall of Fame in 2017. He was nominated Angler of the Year by Field & Stream in 1999. Western Carolina University has recognized his fly fishing course as the most popular class ever taught at the university." }
          },
          {
            "@type": "Question",
            "name": "How long has Mac Brown been guiding and teaching fly fishing?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown has been guiding and teaching fly fishing in Bryson City, NC since 1987 — nearly four decades of instruction on the Tuckasegee River and throughout the Great Smoky Mountains. He is an FFI Master Certified Casting Instructor and has been presenting at The Fly Fishing Show since 1994." }
          },
        ],
      }) }} />
    <div className="w-full">
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={img("/images/smoky-mountains.webp")} srcSet={`${img("/images/mobile/smoky-mountains.webp")} 800w, ${img("/images/smoky-mountains.webp")} 1280w`} sizes="100vw" alt="Great Smoky Mountains" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Bryson City, North Carolina · Great Smoky Mountains · Since 1987</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">Testimonials & Kudos</h1>
          <p className="text-white/55 text-base italic mt-5 font-serif max-w-xl">What happens when you learn from the best.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">Since 1987, anglers of every skill level have left Mac Brown Fly Fish with something that doesn't wear out or need upgrading — knowledge, confidence, and a process that works on any water, anywhere.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">Many students have gone on to become certified fly casting instructors themselves. Others simply became the angler they always wanted to be. Either way, the result is the same: one school or lesson changed everything.</p>
          <blockquote className="border-l-2 border-primary pl-6 text-left max-w-2xl mx-auto mb-8">
            <p className="font-serif text-xl italic text-foreground/80 leading-relaxed">"Many past clients claim they learned more in a single day than in the previous decade on their own."</p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">This isn't a guided trip where someone puts you on fish. It's an education in the full craft — line control, reading water, presentation, tactics, and strategies built around real conditions. You'll raise your efficiency, improve your catch ratios, and understand the <em>why</em> behind every cast — which means it travels with you forever.</p>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-14 text-center">Verified Reviews — Google &amp; Facebook</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {starReviews.map((r, i) => (
              <div key={i} className="bg-white border border-border p-6 flex flex-col gap-4">
                <Stars />
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">"{r.quote}"</p>
                <div className="pt-3 border-t border-border">
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  {r.location && <div className="text-xs text-muted-foreground mt-0.5">{r.location}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-14 text-center">In Their Own Words</p>
          <div className="space-y-16">
            {kudos.map((k, i) => (
              <article key={i} className="border-l-2 border-primary/30 pl-8">
                <div className="flex items-center gap-3 mb-6"><Stars /><span className="text-xs text-muted-foreground uppercase tracking-widest">{k.year}</span></div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{k.title}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {k.body.split("\n\n").map((para, j) => <p key={j}>{para}</p>)}
                </div>
                <div className="mt-8 pt-6 border-t border-border"><div className="text-sm font-semibold text-foreground">{k.source}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-14 text-center">Institutional Recognition</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {institutional.map((k, i) => (
              <div key={i} className="bg-white border border-border p-7 flex flex-col gap-4">
                <span className="text-xs font-semibold tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded self-start">{k.year}</span>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">{k.body}</p>
                <div className="pt-4 border-t border-border"><div className="text-xs font-semibold text-foreground uppercase tracking-wider leading-snug">{k.source}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground mb-6">As Featured In</p>
          {pressFeatures.map((f) => (
            <div key={f.source}>
              <blockquote className="font-serif text-xl italic text-foreground/80 leading-relaxed mb-4">
                &ldquo;{f.quote}&rdquo;
              </blockquote>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">{f.source}</p>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                {f.cta} <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Common questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            What people ask before they book
          </h2>
          <div className="divide-y divide-border">
            {testimonialFaqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <h3 className="font-serif text-lg font-bold text-foreground group-open:text-primary transition-colors pr-4">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to write your own?</h2>
          <p className="text-muted-foreground mb-10 text-lg font-serif italic">The water is waiting.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-flex items-center gap-2 justify-center bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">Book a Trip or School <ArrowRight size={14} /></Link>
            <Link href="/programs-overview" className="inline-flex items-center gap-2 justify-center border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-muted transition-colors">View Programs</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
