import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { GiftCertificateWidget } from "@/components/gift-certificate-widget";
import { img } from "@/lib/asset";
import HatQuantityCard from "@/components/hat-quantity-card";
import BookQuantityCard from "@/components/book-quantity-card";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Books & Gear — Mac Brown Fly Fish" },
  description: "Shop Mac Brown's fly fishing gear — trucker hat and Casting Angles fly casting handbook. Est. 1987, Bryson City, NC.",
  alternates: { canonical: "https://macbrownflyfish.com/store/" },
  openGraph: {
    title: "Shop — Mac Brown Fly Fish | Gear & Books",
    description: "Trucker hat and fly casting handbook from Mac Brown. Est. 1987, Bryson City, NC.",
    url: "https://macbrownflyfish.com/store/",
    images: [{ url: "https://macbrownflyfish.com/images/mbff-hat.webp" }],
  },
};


const bookReviews = [
  { name: "Caro Northcut", location: "Libby, MT", year: "2020", quote: "If you want to understand the mechanics and some physics behind the cast, this is the book. It will change your thinking about casting." },
  { name: "Carolyn Emery", location: "Atlanta, GA", year: "2020", quote: "It's great to be mentored by Mac Brown. He has the keep-it-simple methodology for skills that makes even the technical content accessible and actionable." },
  { name: "George Forster", location: "Wodonga, Australia", year: "2017", quote: "When Mac Brown wrote Casting Angles, he could not have foreseen the influence it would have in the world of fly casting instruction. The contents of this work are beneficial toward learning real deal methodologies in fly casting. I highly recommend it." },
  { name: "Carl McNeil", location: "Wanaka, New Zealand", year: "2008", quote: "Casting Angles is an extensive and detailed study of fly casting and fishing techniques. Mac is obviously not conventional in either his casting or thinking — and it is this approach that delivers an original and thought-provoking treatment to a discipline that has had much press over the years. A more thorough casting book I have not read, and I've read quite a few." },
  { name: "Jon", location: "Amazon Verified Purchase", year: "2012", quote: "Of the books on casting one-handed rods — including Lefty and Mel Krieger — this is the one I like best. The analysis of the fundamentals is incisive and the box exercises are revealing. Well worth the price." },
  { name: "Jonathan Walter", location: "Denver, CO", year: "2013", quote: "I am a casting geek, and I really enjoyed this book. I refer to it often." },
  { name: "John Till", location: "Amazon Verified Purchase", year: "2003", quote: "This is a unique book and is very helpful to anyone who desires to become a good to expert caster. I have read in excess of 50 casting books and this is a must — one of the top 5 or 6." },
];

export default function Store() {
  return (
    <div className="w-full">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={img("/images/appalachian-panorama.webp")} alt="Appalachian mountain panorama — Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Apparel & Books</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">The Shop</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Hat — quantity selector handled in client component */}
            <HatQuantityCard />

            {/* Book — quantity selector handled in client component */}
            <BookQuantityCard />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Reader Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 text-center leading-tight">What Readers Are Saying</h2>
          <p className="text-muted-foreground text-center mb-14 text-sm italic">Casting Angles · By Mac Brown · Available on Amazon</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookReviews.map((r) => (
              <div key={r.name + r.year} className="bg-white border border-border p-7 flex flex-col">
                <div className="flex gap-0.5 mb-5">{[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-primary text-primary" />)}</div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 italic">"{r.quote}"</p>
                <div><p className="font-semibold text-foreground text-sm">{r.name}</p><p className="text-xs text-muted-foreground">{r.location} · {r.year}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a href="https://swipesimple.com/links/lnk_91821531" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
              Get Your Copy — $42.50
            </a>
          </div>
        </div>
      </section>

      <GiftCertificateWidget />
    </div>
  );
}
