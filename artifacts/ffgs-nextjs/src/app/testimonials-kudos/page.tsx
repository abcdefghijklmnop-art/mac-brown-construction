import type { Metadata } from "next";
import { Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Student Reviews — Fly Fishing Guide School, Bryson City NC" },
  description:
    "Graduates from across the Southeast share their experience training with FFI Master Casting Instructor Mac Brown at the Fly Fishing Guide School.",
  alternates: { canonical: "https://flyfishingguideschool.com/testimonials-kudos/" },
  openGraph: {
    title: "Testimonials & Reviews | Fly Fishing Guide School",
    url: "https://flyfishingguideschool.com/testimonials-kudos/",
    images: [{ url: "/images/smokies-river-fall.webp", width: 1920, height: 1280, alt: "Fly fishing the Smoky Mountains — Fly Fishing Guide School" }],
  },
};

const reviews = [
  { name: "Shawn Phelan", stars: 5, text: "I attended the October of 2022 fly fishing guide school. After nearly 30 years of fly fishing, I'd felt as though I'd hit a ceiling. I'd stopped learning and my results were declining. Mac and Tony turned this completely around within the first day. The depth of knowledge shared during the school was nothing short of extraordinary." },
  { name: "Andre Lubart", stars: 5, text: "I am a pretty seasoned, lifelong fly fisher who just finished the March 2023 guide school. Mac and his staff far exceeded the week's objectives with a level of personalized attention, practical application, and generosity of knowledge I did not expect. One of the best weeks of my life." },
  { name: "Robert Simpson", stars: 5, text: "Mac and his staff provide an extremely professional guide school, covering topics from business plans to rowing to client casting instruction. The exposure to fishing and rigging techniques I was unfamiliar with are going to be invaluable to my development as a guide. Highly recommend." },
  { name: "Jonathan Wurl", stars: 5, text: "The Guide School was fantastic. Great instructors who were all interested in helping us with every aspect of fly fishing. My casting is completely different since applying what I've learned, and the strategy and tactics that we were taught have completely changed the way I approach the river." },
  { name: "William Percy", stars: 5, text: "Such an amazing experience! I attended the March 2023 session and learned a lifetime's worth of knowledge over the course of five days. From learning how to properly maneuver rafts in moving water to understanding entomology and hatch cycles — every day opened up a new dimension of the sport." },
  { name: "Jacob Van Der Meer", stars: 5, text: "I was fortunate to attend Mac Brown's fly fishing guide school. During the course, I learned everything I need to be a successful guide. Mac Brown and his staff have an exceptional knowledge of the sport. Instruction includes fly casting, reading water, tactics, rowing, and client relations — all covered in depth." },
  { name: "Gary Perko", stars: 5, text: "Mac is incredibly knowledgeable, insightful, and engaging. He draws you in with his folksome demeanor and then imparts 35+ years of fly-fishing experience before you know it. He taught me several tactics that will improve my game immensely. An outstanding week on beautiful water." },
  { name: "Chris Allen", stars: 5, text: "The Fly Fishing Guide School led by Mac Brown and Tony Brooks was exactly what I needed. Open and honest transfer of knowledge. I would highly recommend this course to anyone looking to improve their technical and functional understanding of fly fishing — whether you're chasing a guiding career or just want to fish better." },
  { name: "Brennan Campbell", stars: 5, text: "I attended the November 2021 Guide School and had an amazing experience learning from Mac and Tony. The structure of the school and the willingness of Mac to share his honest perspective and experiences leave the students with a ton of practical knowledge and confidence to take to the water." },
  { name: "sarah sanford", stars: 5, text: "Mac and his staff have a world of knowledge to impart to those who want to grow as anglers, guides and people. The gorgeous countryside and lovely streams are balm to the winter weary soul. I really enjoyed learning with my classmates — a wonderful week all around." },
  { name: "Robert Showalter", stars: 5, text: "Thanks to Mac and his crew I learned a lot about rowing, casting, presentation and fishing set ups, and met some great new fishing friends. I highly recommend this class to anyone who wants to improve their skills — whether guiding is in your plans or not." },
  { name: "Lee Stuchell", stars: 5, text: "Many thanks to Mac, Tony, and Will — the best investment I could make in my fly fishing journey. The week exceeded every expectation I had walking in, and I came home a fundamentally different angler." },
  { name: "skitch richards", stars: 5, text: "Had a wonderful week at Mac Brown's Fly Fishing Guide School. The knowledge gained during the week will undoubtedly help me with my fishing abilities moving forward. Met some wonderful people and would definitely recommend the school if you're looking to either guide or just improve your own abilities." },
  { name: "Harvey Church", stars: 5, text: "What a great experience. Mac is truly brilliant. The information he shared put my fly fishing game ahead by decades. The way he breaks down casting mechanics and reading water is unlike anything I'd encountered in 20 years of fishing. Thank you Mac." },
  { name: "Joshua Ingram", stars: 5, text: "Went to the October class and it was an excellent experience — learned a lot in the few days I was there. Mac and Tony are top tier guys who clearly love what they do. I left with a completely different set of tools for approaching the river." },
  { name: "Carl Atwell", stars: 5, text: "Best week ever! Mac Brown is without a doubt the most knowledgeable fly fishing instructor around. If you are interested in the sport — at any level — Mac is the guy to go to. I came home energized about fishing in a way I hadn't felt in years." },
  { name: "Jim S", stars: 5, text: "Overall a great experience. Since my class in April, I've been teaching the whole-arm cast to my students with great acceptance. It's nice to back up the technique with the certification from an expert. The school gave me language and frameworks I use constantly. Thanks Mac!" },
  { name: "Robert U", stars: 5, text: "A full week of excellent fly fishing instruction from casting and line control, techniques and tactics, gear, strategies and client management. Truly excellent program — one of the most comprehensive fly fishing education experiences available anywhere." },
];

const FFGS_BUSINESS_ID = "https://flyfishingguideschool.com/#business";

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Graduate Reviews — Fly Fishing Guide School",
  url: "https://flyfishingguideschool.com/testimonials-kudos/",
  itemListElement: reviews.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.stars),
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewBody: r.text,
      itemReviewed: { "@id": FFGS_BUSINESS_ID },
    },
  })),
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
    <div className="w-full">
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img
          src="/images/smokies-river-fall.webp"
          srcSet="/images/smokies-river-fall-1280.webp 1280w, /images/smokies-river-fall.webp 1920w"
          sizes="100vw"
          alt="Tuckasegee River — Fly Fishing Guide School"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 text-center">
          <p className="text-white/50 text-[10px] font-medium uppercase tracking-[0.4em] mb-4">Student Reviews</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-none mb-4">
            Testimonials &amp; Kudos
          </h1>
          <p className="font-serif italic text-white/70 text-lg md:text-xl">
            What our graduates say about the school.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-base leading-relaxed">
            The Fly Fishing Guide School has trained anglers and guides from across the country since 1987. Below is a selection of verified Google reviews from graduates — career changers and serious anglers alike — who have spent a week on the rivers of Bryson City with us.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-muted/30 border border-border p-8 flex flex-col gap-4">
                <Stars count={r.stars} />
                <p className="text-foreground text-sm leading-relaxed flex-1 font-serif italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-muted/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground mb-6">As Featured In</p>
          <blockquote className="font-serif text-xl italic text-foreground/80 leading-relaxed mb-4">
            &ldquo;If, when we practice, we can produce one more good cast and one fewer poor cast each time, then we are headed in the right direction.&rdquo;
          </blockquote>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">Miss Pursuit</p>
          <a
            href="https://misspursuit.com/humbled-flyfisher-with-mac-brown-fly-fish/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Read the full school review <ArrowRight size={12} />
          </a>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20 text-center px-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-primary-foreground/70 mb-5">Share Your Experience</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Attended the School?
        </h2>
        <p className="text-primary-foreground/90 text-base mb-10 max-w-md mx-auto leading-relaxed">
          We&apos;d love to hear from you. Leave us a review on Google — it helps other anglers find the school.
        </p>
        <a
          href="https://g.page/r/CfxPhFfWYElCEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
        >
          Write a Review on Google <ArrowRight size={14} />
        </a>
      </section>
    </div>
    </>
  );
}
