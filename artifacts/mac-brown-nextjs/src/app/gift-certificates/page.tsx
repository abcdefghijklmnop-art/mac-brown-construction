import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Gift Certificates — Guided Trips & Schools" },
  description: "Give the gift of fly fishing. Mac Brown Fly Fish gift certificates are redeemable for guided trips, casting schools, and clinics in the Smoky Mountains.",
  alternates: { canonical: "https://macbrownflyfish.com/gift-certificates/" },
  openGraph: {
    title: "Gift Certificates — Mac Brown Fly Fish | Bryson City NC",
    description: "Give the angler in your life a guided fly fishing trip or casting lesson with Mac Brown Fly Fish. Gift certificates available for any program or dollar amount.",
    url: "https://macbrownflyfish.com/gift-certificates/",
    images: [{ url: "https://macbrownflyfish.com/images/client-spring-brown.webp" }],
  },
};

const giftOptions = [
  { title: "Guided Wade Trip", desc: "A full day in the water on the mountain streams and tailwaters of the Great Smoky Mountains. All gear provided. Real fish, real instruction, real memories. Perfect for the angler who wants to fish — and fish better.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Float Trip", desc: "A day drifting the Tuckasegee River in a drift boat — covering water most anglers never reach, learning the river from the finest guide in the region. Comfortable, productive, and genuinely unforgettable.", link: "/guided-float-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "One hour of private casting instruction from North Carolina's only Master Casting Instructor — guaranteed to improve the recipient's casting permanently or the lesson is free. The gift that fixes what years of self-teaching couldn't.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing School", desc: "A weekend immersion program covering casting, reading water, tactics, entomology, and everything that separates consistent anglers from everyone else. The gift that deepens understanding at every level.", link: "/smoky-mountain-weekend-schools" },
  { title: "Backcountry Trip", desc: "Remote streams deep in the Great Smoky Mountains National Park — wild fish, pristine wilderness, and the kind of day on the water that becomes a story told for years. For the adventurous angler who wants something extraordinary.", link: "/instructional-guided-trips" },
  { title: "Guided Lake Trip", desc: "Stillwater fly fishing on the mountain lakes of the Smoky Mountains — a completely different game from river fishing and one of the best-kept secrets in the region. Trophy-sized trout and a stunning setting.", link: "/guided-lake-fly-fishing-trips" },
];

const whoFor = [
  { title: "The Complete Beginner", desc: "Someone who has always wanted to try fly fishing but never had the right introduction. A guided trip with Mac Brown is the finest first experience available anywhere in the Southeast." },
  { title: "The Frustrated Intermediate", desc: "The angler who has been fishing for years and hit a wall they cannot break through alone. One casting lesson or guided day fixes more than years of solo practice." },
  { title: "The Serious Angler", desc: "The accomplished fly fisher who wants to go deeper — into advanced technique, remote water, or the kind of instruction that only comes from a Master Casting Instructor with four decades on these rivers." },
];

const occasions = ["Christmas", "Father's Day", "Birthdays", "Anniversaries", "Graduation", "Corporate Gifts", "Retirement", "Just Because"];

const steps = [
  { step: "1", title: "Call or Email Us", desc: "Tell us who the gift is for, what experience you have in mind, and any details about the recipient's skill level or interests. We will help you choose the perfect program." },
  { step: "2", title: "We Issue the Certificate", desc: "A personalized gift certificate is prepared and delivered to you — ready to present for any occasion. Certificates are available for specific programs or for a dollar amount the recipient applies to their chosen experience." },
  { step: "3", title: "They Choose Their Date", desc: "The recipient contacts us directly to schedule their trip or lesson at a time that works for them. Gift certificates are valid for one full year from the date of purchase." },
  { step: "4", title: "A Day They Will Never Forget", desc: "They show up. We handle everything. They leave knowing more, casting better, and understanding fly fishing in a way that makes every future trip on the water richer than the last." },
];

export default function GiftCertificates() {
  return (
    <div className="w-full">
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img src={img("/images/client-spring-brown.webp")} srcSet={`${img("/images/client-spring-brown-1280.webp")} 1280w, ${img("/images/client-spring-brown.webp")} 1920w`} sizes="100vw" alt="Fly fishing gift certificates — Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">The Gift That Lasts a Lifetime</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">Gift Certificates</h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">Give the angler in your life something no fly shop can sell — a day on the finest trout water in the eastern United States with the most experienced guide in the region.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="tel:+18287360019" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              <Phone size={14} /> Call to Purchase — (828) 736-0019
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              Email Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Perfect Gift</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Perfect Gift for Any Angler</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Gear gets used up. Flies get lost. Rods get replaced. But the knowledge, confidence, and memories built on a great day of fly fishing on the rivers of the Great Smoky Mountains — those stay with a person forever. A Mac Brown Fly Fish gift certificate is not just a day on the water. It is an investment in someone's journey as an angler that pays dividends for the rest of their life.</p>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Options</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">What You Can Give</h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">Gift certificates are available for any program or dollar amount. Here are the most popular options:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {giftOptions.map((item, i) => (
              <Link key={i} href={item.link} className="bg-background border border-border p-8 hover:border-primary/40 transition-colors block">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{item.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">For Every Angler</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">Who This Gift Is For</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {whoFor.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <div className="w-8 h-0.5 bg-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Any Time of Year</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">Perfect for Any Occasion</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {occasions.map((label, i) => (
              <div key={i} className="bg-background border border-border p-5 text-center"><p className="font-semibold text-foreground text-sm">{label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Process</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">How It Works</h2>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-muted/30 border border-border p-6">
                <div className="w-12 h-12 bg-primary text-white font-bold text-xl flex items-center justify-center shrink-0 font-serif">{item.step}</div>
                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Ready to Give the Gift?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Call Us to Get Started</h2>
          <p className="text-white/70 leading-relaxed mb-10">Gift certificates are available for any program or dollar amount. Call or email and we will help you put together exactly the right gift — with a personalized certificate ready to present for any occasion.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18287360019" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              <Phone size={14} /> (828) 736-0019
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              Send an Email <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
