import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqSection from "@/components/faq-section";
import { SchemaScript } from "@/components/schema-script";
import { castingAnglesBookSchema, faqPageSchema, macBrownPersonSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Mac Brown — FFI Master Casting Instructor, Bryson City NC" },
  description: "Mac Brown is one of America's most decorated fly casting instructors, with decades of guiding and teaching experience in the Smoky Mountains of Western North Carolina.",
  alternates: { canonical: "https://macbrownflyfish.com/bio-mac-brown/" },
  openGraph: {
    title: "Mac Brown — Fly Fishing Guide & FFI Master Casting Instructor",
    description: "Meet Mac Brown — FFI Lifetime Achievement Award recipient, Field & Stream Angler of the Year, and nearly four-decade guide based in Bryson City, NC.",
    url: "https://macbrownflyfish.com/bio-mac-brown/",
    images: [{ url: "https://macbrownflyfish.com/images/mac-headshot-2.webp" }],
  },
};

const awards = [
  { year: "2023", text: "Lifetime Achievement Award", org: "Fly Fishers International" },
  { year: "2021", text: "Mel Krieger Casting Instructor Award", org: "Fly Fishers International" },
  { year: "2017", text: "Hall of Fame Inductee", org: "Southern Fly Fishing Hall of Fame" },
  { year: "2016–22", text: "Best Outfitter Award", org: "Fly Fishers United" },
  { year: "1999", text: "Angler of the Year", org: "Field & Stream" },
  { year: "1994–present", text: "Featured Presenter", org: "The Fly Fishing Show" },
];

const bioFaqs = [
  {
    q: "Who is Mac Brown?",
    a: "Mac Brown is a Federation of Fly Fishers (FFF) Master Casting Instructor — one of the highest casting certifications in fly fishing — and has been guiding and teaching on the wild trout rivers of Western North Carolina since 1987. He is the longest-tenured permitted fly fishing outfitter in the Smoky Mountains region, a published author, national casting competitor, and founder of the Fly Fishing Guide School.",
  },
  {
    q: "What are Mac Brown's credentials as a fly casting instructor?",
    a: "Mac Brown is North Carolina's only FFI Master Casting Instructor — a certification held by fewer than a few hundred people worldwide. He has served on the FFI Board of Governors, received the Mel Krieger Casting Award for outstanding contribution to fly casting instruction, and was inducted into the Southern Appalachian Fly Fishing Museum Hall of Fame in 2017.",
  },
  {
    q: "How long has Mac Brown been a fly fishing guide?",
    a: "Mac Brown has been guiding and teaching on the rivers of Western North Carolina since 1987 — nearly four decades. He is the original permitted fly fishing outfitter in the Smoky Mountains region, operating continuously on these waters longer than any other guide or outfitter in the area.",
  },
  {
    q: "What trips and schools does Mac Brown offer?",
    a: "Mac Brown Fly Fish offers guided float trips, wade trips, and lake trips on the Tuckasegee River, Nantahala River, and Great Smoky Mountains National Park streams. Instruction programs include the Fly Fishing Guide School, Masterclass Casting Workshop, Spey Elite Clinic, Fly Casting Mastery Workshop, Smoky Mountain Weekend Schools, and private fly casting lessons in person and online.",
  },
  {
    q: "How can I book a trip or lesson with Mac Brown?",
    a: "Use the contact form on this site or call 828-736-1469. Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check.",
  },
];

export default function About() {
  return (
    <div className="w-full">
      <SchemaScript schema={macBrownPersonSchema} />
      <SchemaScript schema={castingAnglesBookSchema} />
      <SchemaScript schema={faqPageSchema(bioFaqs)} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img src={img("/images/mac-brown-smoky-waterfall.webp")} srcSet={`${img("/images/mac-brown-smoky-waterfall-1280.webp")} 1280w, ${img("/images/mac-brown-smoky-waterfall.webp")} 1920w`} sizes="100vw" alt="Mac Brown fly fishing in the Smoky Mountains — Mac Brown Fly Fish Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-[20%_15%]" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Bryson City, North Carolina · Est. 1987</p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">Mac Brown — FFI Master Casting Instructor, Bryson City NC</h1>
          <p className="text-white/50 text-base italic mt-5 font-serif">Grateful for every single day on these rivers.</p>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mac Brown is the founder of Mac Brown Fly Fish in Bryson City, North Carolina — the original fly fishing guide and instructor in Western NC since 1987. The only FFI Master Casting Instructor in North Carolina, recipient of the FFI Lifetime Achievement Award (2023), the Mel Krieger Award (2021), Field &amp; Stream Angler of the Year, and Southern Fly Fishing Hall of Fame inductee. Author of Casting Angles, national presenter since 1987, and co-teacher of the All-Day Advanced Fly Casting Class with Gary Borger at The Fly Fishing Show.
          </p>
        </div>
      </section>
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <img src={img("/images/mac-headshot-2.webp")} alt="Mac Brown, FFI Certified Master Fly Casting Instructor, Bryson City NC" className="w-full aspect-[4/5] object-cover object-top" loading="lazy" />
            </div>
            <div className="pt-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">About Mac</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">A Life Lived<br />on the Water</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
                <p>I've been lucky enough to call Bryson City, NC home since 1987 — and luckier still to have spent most of those years knee-deep in some of the most beautiful water in the world. What started as a passion became a life's work, and I'm grateful every morning it did.</p>
                <p>Along the way I had the chance to start the first full-time fly fishing guide service in Western North Carolina, and to help establish the first Delayed Harvest on the Upper Nantahala River back in 1993. Those weren't solo efforts — they happened because of a community of people who cared about these rivers as much as I did.</p>
                <p>Teaching has always been at the heart of what I do. I was fortunate to spend four years as Associate Professor at Western Carolina University, where we built a collegiate fly fishing program from scratch. During this tenure it taught me about process in teaching. Watching students go on to shape competitive fly fishing in this region — and around the world as multiple Fly Fishing Team USA World Champions — is one of the things I'm most proud of.
                  <br /><br />
                  I also wrote <Link href="/casting-angles" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"><em>Casting Angles</em></Link>, a fly casting handbook endorsed by the ACA and FFI. I am a Master Casting Instructor through Fly Fishers International — a credential that led to serving as a member of the Board of Governors and steering multiple committees. <Link href="/fly-fishing-certifications" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">See the full credentials list →</Link>
                </p>
                <p>Over nearly four decades I've had the privilege of guiding and teaching tens of thousands of anglers — beginners who'd never held a fly rod, and seasoned fishers chasing their next level. Every single one of them taught me something too. That exchange is what keeps me out here.</p>
              </div>
              <div className="mt-10 pt-10 border-t border-border space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">The Man Behind the Guide</h2>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">A life built around water, wilderness, and the people who love both.</p>
                <p>The career that became Mac Brown Fly Fish didn't begin on the Tuckasegee. It began much further from home — on the wild rivers of Tasmania and New Zealand, running destination trips to some of the most remote and breathtaking trout water on the planet. Those early years abroad shaped everything that followed. The fish were extraordinary. The landscapes were unforgettable. And the experience of guiding serious anglers through unfamiliar water in the far corners of the world built a foundation of knowledge and adaptability that no amount of local fishing could have provided.</p>
                <p>Those trips also revealed a practical problem. In the remote backcountry of Tasmania and the South Island — long before satellite phones and international cell service — staying connected with family back home in the mountains of Western North Carolina required a different solution entirely. Mac found one.</p>
                <p>He earned his FCC Extra Class amateur radio license, call sign AI4JL, allowing him to communicate via HF radio from virtually anywhere on earth. It worked so well that the whole family followed — Jennifer, Connor, and Duncan all hold their own licenses, making the Brown family one of the more unusually well-connected households in the rural mountains of Western North Carolina. Whether deep in the Smokies backcountry or halfway around the world on a fishing expedition, home was never more than a radio call away.</p>
                <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
                  "Getting my Extra license was one of the best decisions I ever made. It opened up a whole world of communication that most people don't even know exists — and it gave me peace of mind on every trip I've ever taken since."
                </blockquote>
                <p>That same curiosity and enthusiasm for learning that drove the radio license has never left. It shows up in the way Mac approaches fly fishing instruction — always digging deeper, always asking why, always looking for the next layer of understanding beneath the one he already has.</p>
                <p>Mac and family are naturalists and enjoy multi-day river trips, backpacking, medicinal plants, and other outdoor pursuits. When the sport of adventure racing was big in the mid-90s he was fortunate to compete often abroad in all-day races as well as 4–5 day races with great sponsors and teammates. These style of races tend to present obstacles to conquer similar to angling and living.</p>
                <p>When he's not on the water, Mac is most likely making music. Guitar, piano, mandolin, fiddle, and banjo have all been part of his life since childhood — instruments that share more with fly casting than most people would expect. Both reward patience. Both punish tension. Both require a feel that no amount of thinking quite replaces. The Appalachian musical tradition runs as deep in these mountains as the rivers do, and Mac is genuinely part of both.</p>
                <p>The foundation of everything, though, is family. Jennifer, Connor, and Duncan share Mac's love of the outdoors completely — river trips, backpacking excursions into the backcountry, and long days on the water together are simply how the Brown family spends its time. In a profession that demands so much of a person's presence and energy, having a family that not only understands that pull but actively shares it is, as Mac will tell you, the greatest piece of luck in a very fortunate life.</p>
                <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
                  "I am blessed to carve out a living in a field I love, surrounded by wild water, good people, and a family that would rather be on the river than anywhere else. It doesn't get better than that."
                </blockquote>
              </div>
              <div className="mt-10 pt-10 border-t border-border space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
                <p>Mac Brown serves as a National Advisor to <a href="https://www.scientificanglers.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-2 hover:text-primary transition-colors">Scientific Anglers</a> and <a href="https://www.tforods.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-2 hover:text-primary transition-colors">Temple Fork Outfitters</a> — working relationships built on decades of field experience and a genuine investment in advancing the sport.</p>
                <p>The gear recommended here has been tested under real conditions and evaluated through the lens of serious instruction. It works because it has been made to work — sometimes with a direct hand in that process.</p>
                <p>Mac is also proud to serve as an Ambassador for:</p>
                <p className="font-bold text-foreground tracking-wide flex flex-wrap gap-x-3 gap-y-1 items-center">
                  <a href="https://www.patagonia.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Patagonia</a>
                  <span className="text-muted-foreground">&middot;</span>
                  <a href="https://www.regalvise.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Regal Vise</a>
                  <span className="text-muted-foreground">&middot;</span>
                  <a href="https://www.whitingfarms.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Whiting Hackle</a>
                  <span className="text-muted-foreground">&middot;</span>
                  <a href="https://www.maxima-lines.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Maxima</a>
                  <span className="text-muted-foreground">&middot;</span>
                  <a href="https://www.rossreels.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Ross Reels</a>
                  <span className="text-muted-foreground">&middot;</span>
                  <a href="https://www.grundens.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Grundéns</a>
                  <span className="text-muted-foreground">&middot;</span>
                  <a href="https://www.fishpond.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Fish Pond</a>
                </p>
                <p>Each of these companies has earned its place not through a marketing arrangement but through performance on the water, at the bench, and in the hands of students learning the sport the right way.</p>
              </div>
              <blockquote className="mt-10 pl-5 border-l-2 border-primary">
                <p className="font-serif text-lg italic text-foreground/80 leading-relaxed">"None of what I've been able to do happened alone. I've been shaped by great rivers, incredibly generous mentors, and more kind people than I can count. I'm just grateful to still be learning, still be teaching, and still be on the water."</p>
              </blockquote>
              <p className="mt-8 text-muted-foreground leading-relaxed text-[1.05rem]">If you're thinking about a trip, a school, or just want to learn more about fly fishing in the Smokies — I'd love to hear from you. These rivers are worth it. I promise.</p>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
                {[{ n: "40", l: "Years Guiding" }, { n: "150k+", l: "Anglers Taught" }, { n: "1987", l: "Year Founded" }].map((s, i) => (
                  <div key={i}>
                    <div className="font-serif text-3xl font-bold text-foreground mb-1">{s.n}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-12 text-center">Some humbling recognitions received along the way</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((a, i) => (
              <div key={i} className="bg-white border border-border p-5 flex gap-4 items-start">
                <span className="text-xs font-semibold tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded shrink-0 mt-0.5">{a.year}</span>
                <div>
                  <div className="text-sm font-semibold text-foreground leading-snug">{a.text}</div>
                  <div className="text-xs text-muted-foreground mt-1">{a.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={bioFaqs} />

      <section className="py-28 border-t border-border">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Come fish with us.</h2>
          <p className="text-muted-foreground mb-10 text-lg font-serif italic">The river's always worth it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs-overview" className="inline-flex items-center gap-2 justify-center bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
              View Trips & Schools <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 justify-center border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-muted transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
