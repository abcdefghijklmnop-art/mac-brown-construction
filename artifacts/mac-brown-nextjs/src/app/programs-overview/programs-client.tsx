"use client";
import Link from "next/link";
import { ArrowRight, Check, Video } from "lucide-react";
import { useSchedule } from "@/hooks/use-schedule";
import FaqSection from "@/components/faq-section";
import { GiftCertificateWidget } from "@/components/gift-certificate-widget";
import { img } from "@/lib/asset";

interface BookButton { label: string; url: string }
interface DetailLink  { label: string; href: string }
interface OfferingItem {
  name: string;
  duration: string;
  price: string;
  includes: string[];
  bookButtons: BookButton[];
  detailsLink?: string;
  contactLink?: string;
  contactLinkLabel?: string;
  showVideoIcon?: boolean;
}
interface Offering {
  id: string;
  tag: string;
  title: string;
  desc: string;
  items: OfferingItem[];
  detailLinks: DetailLink[];
  detailsLink?: string;
  introItalic?: string;
  seminarDetailsLink?: string;
  contactCta?: boolean;
}

function injectFfiLink(text: string) {
  const marker = "Fly Fishers International";
  const idx = text.indexOf(marker);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <a
        href="https://www.flyfishersinternational.org"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-primary transition-colors"
      >
        Fly Fishers International
      </a>
      {text.slice(idx + marker.length)}
    </>
  );
}

export default function ProgramsOverviewClient() {
  const { pricing } = useSchedule();

  const offerings: Offering[] = [
    {
      id: "schools",
      tag: "Schools & Instruction",
      title: "Schools & Instruction",
      desc: `Stop Guessing — Start Knowing

There's a moment every fly angler knows — standing in a run that looks perfect, watching fish you can see but can't seem to reach. Most anglers spend years in that moment. A great school ends it permanently.

A great day of fly fishing starts with one thing: confidence on the water. Not the kind that comes from hoping you picked the right fly. Real confidence — the kind built from understanding why something works, so you can adapt it to whatever the water throws at you that day.

"The river is not random. It has a logic — and once you learn to read it, everything else falls into place."

Fly fishing is a problem-solving game. The conditions change by the hour — the light, the hatch, the current seam, the mood of the fish. Anglers who struggle chase fixed answers to a moving question. Anglers who thrive have developed a process — a way of reading, adjusting, and responding that works regardless of what the day brings.

Our schools don't just teach technique. They transform the way you experience fly fishing forever. You'll leave knowing how to read a river, present a fly, and land fish confidently — skills that make every future trip something special.

Mac Brown has spent nearly four decades teaching anglers of all levels on some of the most beautiful water in the world. As the only Master Casting Instructor in North Carolina — and a coach whose students have stood on World Championship podiums — Mac brings a depth of knowledge you simply won't find at a fly shop or in a YouTube video.

The school is based in Bryson City, North Carolina, in the heart of what serious anglers call the Trout Mecca — surrounded by over 2,400 miles of wild trout water, the streams of the Great Smoky Mountains National Park, and the legendary Tuckasegee River.

You don't need to be an expert to show up. You need to be willing to learn the right way.

"Sometimes you don't know what you don't know — until you do."

One school — A lifetime of better fishing`,
      items: [
        {
          name: "Masterclass Casting Workshop", detailsLink: "/masterclass-fly-casting-workshop", duration: "2 Days", price: pricing.masterclassWorkshop.display,
          includes: ["Fly Casting Mastery Workshop", "Saltwater Fly Casting Elite Masterclass Workshop", "Spey Elite Casting Clinic", "Bryson City, NC"],
          bookButtons: [
            { label: "Book Casting School", url: "/reserve" },
          ],
        },
        {
          name: "Smoky Mountain Weekend Fly Fishing Schools", detailsLink: "/smoky-mountain-weekend-schools", duration: "Weekend", price: pricing.weekendFlyFishingSchool.display,
          includes: ["Comprehensive Dry Fly Clinic", "Comprehensive Wet Fly Clinic", "Comprehensive Nymph Clinic", "Comprehensive Streamer Clinic", "Limited enrollment", "Bryson City, NC"],
          bookButtons: [
            { label: "Book Clinic", url: "/reserve" },
          ],
        },
        {
          name: "Oar Frame Rowing School", detailsLink: "/drift-boat-rowing-school", duration: "2 Days", price: pricing.riverNavigationAcademy.display,
          includes: ["Oar frame rowing fundamentals", "River reading & boat control", "Safety & rigging", "All skill levels welcome", "Bryson City, NC"],
          bookButtons: [
            { label: "Inquire to Register", url: "/reserve" },
          ],
        },
        {
          name: "Smoky Mountain Fly Fishing School — Recreational Anglers", detailsLink: "https://flyfishingguideschool.com/smoky-mountain-fly-fishing-school/", duration: "4 Days", price: pricing.guideSchool.display,
          includes: ["Read water & present flies with confidence", "Dry fly, nymph, wet fly & streamer days", "Small group, full-day on-river instruction", "Bryson City, NC"],
          bookButtons: [
            { label: "Enroll Now", url: "https://flyfishingguideschool.com/reservation-form/" },
          ],
        },
        {
          name: "Fly Fishing Guide School — Professional Career Development", detailsLink: "https://flyfishingguideschool.com/fly-fishing-guide-school/", duration: "4 Days", price: pricing.guideSchool.display,
          includes: ["Earn your fishing guide license", "Casting, rowing & fish identification", "River reading & client management", "Bryson City, NC"],
          bookButtons: [
            { label: "Enroll Now", url: "https://flyfishingguideschool.com/reservation-form/" },
          ],
        },
      ],
      detailLinks: [] as DetailLink[],
    },
    {
      id: "casting-instruction",
      tag: "Fly Casting Instruction",
      title: "Fly Casting Instruction",
      detailsLink: "/fly-casting-instruction",
      desc: `From North Carolina's only Master Casting Instructor

The fly cast is the only delivery between you and the fish. Everything else depends on it.

Most anglers spend years practicing what they don't need — reinforcing flaws instead of correcting them. Proper instruction fixes what years of solo practice cannot. I can identify and correct casting faults in a single session so you understand proper fundamentals to build your skills.

"The better you control your fly line, the less time you spend casting — and the more time you spend fishing."

You will leave with a foundational stroke that's accurate, efficient, and built to last — along with the line control skills that separate anglers who catch fish from those who simply cast at them. Single-hand, Skagit, and double-handed instruction available for all skill levels.

The anticipation of casting to a rising fish and watching it eat your fly is one of fly fishing's greatest thrills. Instruction makes that moment happen more often — and on purpose.`,
      items: [
        {
          name: "Fly Casting Instruction", duration: "1, 2, or 3 Hours", price: pricing.flyCastingInstruction.display,
          includes: ["1–2 people, same rate", "Single-hand, switch, or spey", "Any skill level welcome", "Private, focused session"],
          bookButtons: [
            { label: "Book 1-Hour", url: "/reserve" },
            { label: "Book 2-Hour", url: "/reserve" },
            { label: "Book 3-Hour", url: "/reserve" },
          ],
        },
        {
          name: "Online Video Coaching", duration: "Live · Global · All Skill Levels", price: pricing.onlineVideoCoaching.display,
          includes: ["FaceTime, Zoom, or Skype — your choice", "Same direct feedback as in-person", "Proven with students on 6 continents", "All you need is a smartphone and open space"],
          bookButtons: [] as BookButton[],
          contactLink: "/online-fly-casting-lessons",
          contactLinkLabel: "Learn More & Book Online",
          showVideoIcon: true,
        },
      ],
      detailLinks: [] as DetailLink[],
    },
    {
      id: "guided-trips",
      tag: "Guided Trips",
      title: "Guided Trips",
      desc: `Your Journey Starts at the Water's Edge

Wade crystal-clear mountain streams of the Great Smoky Mountains National Park, drift the legendary Tuckasegee River, or explore the region's breathtaking lakes. These aren't just beautiful places to fish — they're where something changes in a person. Where patience becomes instinct, and a loop of fly line becomes an extension of thought.

"The river knows things. Your job is to learn to listen — and we'll teach you the language."

Everything You Need. Nothing to Worry About.

Every rod, reel, and fly is provided. Show up in clothes you can wade in, and we'll handle the rest. No gear to buy, borrow, or figure out. From your first false cast to your first perfect loop, the only thing you need to bring is the willingness to learn.

Solo or Together — the Price Is the Same

Whether you're booking for yourself or bringing someone along for the day, the rate doesn't change. Because the best moments on the water have a way of meaning more when someone else is there to see them.

Guided by Someone Who Has Taken Casters to the World Stage

This isn't instruction assembled from YouTube and good intentions. Every technique you learn here comes from decades of teaching at the highest levels of the sport, refined through coaching World Champions on Team USA Youth and recognized by Fly Fishers International with its most prestigious honors.

You Don't Need Experience. You Just Need to Show Up.

Beginners are welcome. Frustrated intermediates are especially welcome. If you've been casting for years and something still feels off, that's exactly the kind of problem we live to solve.

"The cast that catches the fish isn't the prettiest one — it's the one you finally stopped fighting."`,
      items: [
        {
          name: "Guided Wade or Float Trip", duration: "3 or 6 Hours", price: pricing.guidedWadeOrFloat.display,
          includes: ["1–2 anglers, same price", "Clackacraft or NRS boat", "All gear & flies provided"],
          bookButtons: [
            { label: "Book 3-Hour", url: "/reserve" },
            { label: "Book 6-Hour", url: "/reserve" },
          ],
        },
        {
          name: "Guided Lake Trip", duration: "6 Hours", price: pricing.guidedLakeTrip.display,
          includes: ["1–2 anglers per boat", "Fontana, Cheoah & local lakes", "All gear & flies provided"],
          bookButtons: [
            { label: "Book Now", url: "/reserve" },
          ],
        },
      ],
      detailLinks: [
        { label: "Wade Trips", href: "/guided-wade-fly-fishing-trips" },
        { label: "Float Trips", href: "/guided-float-fly-fishing-trips" },
        { label: "Lake Trips", href: "/guided-lake-fly-fishing-trips" },
      ],
    },
    {
      id: "groups-clubs",
      tag: "Groups & Clubs",
      title: "Fly Fishing Seminars for Shows and Clubs",
      introItalic: "Looking to book Mac for your fly fishing club or national show? See our full presentations menu here.",
      seminarDetailsLink: "/fly-fishing-seminars",
      desc: `If your club, chapter, or group is looking for a program that actually moves the needle — on casting, on knowledge, on connection to the sport — this is instruction and storytelling built from nearly four decades on the water.

Presentations are fully customizable to your audience and format, whether that's a hands-on casting clinic on the lawn, an illustrated evening lecture, a conservation conversation, or a combination of all of the above. Topics include fly casting instruction, reading water and trout behavior, stream entomology and hatch matching, fly tying demonstrations, gear and line setup, and the conservation issues facing the rivers and wild fish we care about most.

Every program is built around the people in the room — their skill level, their curiosity, and what will serve them most. The goal is simple: leave everyone casting better, thinking more deeply, or caring more about the water. Ideally all three.

"The best fishing clubs are communities of learners. A great presentation gives everyone something to take back to the stream."`,
      items: [] as OfferingItem[],
      contactCta: true,
      detailLinks: [] as DetailLink[],
    },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img src={img("/images/elk-field.webp")} alt="Elk in a mountain meadow near Bryson City NC — Mac Brown Fly Fish guided trips and schools" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Schools & Guided Trips</p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">Fly Fishing Trips, Schools &amp; Casting Instruction — Bryson City, NC</h1>
        </div>
      </section>

      {/* AEO PARAGRAPH */}
      <section className="py-10 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground leading-relaxed">
            Mac Brown Fly Fish offers guided wade trips ({pricing.guidedWadeOrFloat.half} half day / {pricing.guidedWadeOrFloat.full} full day), guided float trips ({pricing.guidedWadeOrFloat.full}), guided lake trips ({pricing.guidedLakeTrip.display}), fly casting instruction ({pricing.flyCastingInstruction.display}/hour), weekend fly fishing schools ({pricing.weekendFlyFishingSchool.display}), masterclass casting workshops ({pricing.masterclassWorkshop.display}), oar frame rowing school ({pricing.riverNavigationAcademy.display}), corporate and group programs, and the 4-day Fly Fishing Guide School — all based in Bryson City, North Carolina. The only FFI Master Casting Instructor in the state, teaching since 1987. All gear provided, all skill levels welcome.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      {offerings.map((cat, ci) => (
        <section key={ci} id={cat.id} className={`py-28 ${ci % 2 !== 0 ? "bg-muted/30" : ""}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">{cat.tag}</p>
            <div className="flex flex-col lg:flex-row gap-16 mb-16">
              <div className="lg:w-1/3">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">{cat.title}</h2>
              </div>
              <div className="lg:w-2/3 space-y-4">
                {cat.introItalic && (
                  <p className="font-serif italic text-foreground/70 leading-relaxed">{cat.introItalic}</p>
                )}
                {cat.desc.split(/\n\n+/).map((block: string, bi: number) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
                    return (
                      <blockquote key={bi} className="pl-4 border-l-2 border-primary font-serif italic text-foreground/75 leading-relaxed text-[1.05rem]">
                        {trimmed}
                      </blockquote>
                    );
                  }
                  if (trimmed.split(' ').length <= 12 && !trimmed.startsWith('"')) {
                    return (
                      <h3 key={bi} className="font-serif text-xl font-bold text-foreground pt-2">{trimmed}</h3>
                    );
                  }
                  return (
                    <p key={bi} className="text-muted-foreground leading-relaxed">{injectFfiLink(trimmed)}</p>
                  );
                })}
              </div>
            </div>

            {cat.items.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cat.items.map((item: OfferingItem, ii: number) => (
                  <div key={ii} className="bg-white border border-border p-8 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-3">
                        {item.showVideoIcon && (
                          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Video size={16} className="text-primary" />
                          </div>
                        )}
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{item.duration}</p>
                          <h3 className="font-serif text-xl font-bold text-foreground">{item.name}</h3>
                        </div>
                      </div>
                      <div className="font-serif text-2xl font-bold text-primary shrink-0 ml-4">{item.price}</div>
                    </div>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {item.includes.map((inc: string, j: number) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Check size={13} className="text-primary shrink-0" />{inc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2">
                      {item.bookButtons.map((btn: BookButton, bi: number) => (
                        <a key={bi} href={btn.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors">
                          {btn.label} <ArrowRight size={13} />
                        </a>
                      ))}
                      {item.contactLink && (
                        <Link href={item.contactLink} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors">
                          {item.contactLinkLabel ?? "Contact to Schedule"} <ArrowRight size={13} />
                        </Link>
                      )}
                      {item.detailsLink && (
                        item.detailsLink.startsWith("http") ? (
                          <a href={item.detailsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] pt-1 hover:gap-4 transition-all">
                            Full Details <ArrowRight size={13} />
                          </a>
                        ) : (
                          <Link href={item.detailsLink} className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] pt-1 hover:gap-4 transition-all">
                            Full Details <ArrowRight size={13} />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cat.detailsLink && (
              <div className="mt-8">
                <Link href={cat.detailsLink} className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all">
                  Full Details — Fly Casting Instruction <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {cat.detailLinks && cat.detailLinks.length > 0 && (
              <div className="mt-8 flex flex-col sm:flex-row gap-5">
                {cat.detailLinks.map((dl: DetailLink, i: number) => (
                  <Link key={i} href={dl.href} className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all">
                    Full Details — {dl.label} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            )}

            {cat.contactCta && (
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
                  Inquire About a Presentation <ArrowRight size={13} />
                </Link>
                {cat.seminarDetailsLink && (
                  <Link href={cat.seminarDetailsLink} className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] py-4 hover:gap-4 transition-all">
                    Full Details <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CORPORATE & GROUP */}
      <section className="py-28" id="corporate-groups">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Corporate &amp; Group Events</p>
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="lg:w-1/3">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">Corporate &amp; Group Fly Fishing</h2>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <p className="text-muted-foreground leading-relaxed">If your company, team, or organization is looking for an experience that builds real connection — away from screens, conference rooms, and the usual team-building playbook — fly fishing in the Smoky Mountains delivers something none of the rest can.</p>
              <p className="text-muted-foreground leading-relaxed">Mac Brown has hosted Fortune 500 companies, sales teams, executive retreats, and friend groups on the water since 1988. Every program is designed from scratch around your people, your goals, and your schedule. Whether you want a half-day on a trophy stream, a multi-day immersive experience, or a structured team challenge, we build it around you.</p>
              <p className="text-muted-foreground leading-relaxed">All gear is provided. No experience required. Just show up ready to fish — and ready to work together in a way that sticks long after the trip ends.</p>
              <blockquote className="pl-4 border-l-2 border-primary font-serif italic text-foreground/75 leading-relaxed text-[1.05rem]">&ldquo;Team Work, Makes the Dream Work&rdquo;</blockquote>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Custom Program</p>
                <h3 className="font-serif text-xl font-bold text-foreground">Corporate &amp; Group Fly Fishing</h3>
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "Fortune 500 companies served since 1988",
                  "Fully custom programs — no two alike",
                  "All group sizes welcome",
                  "All gear provided for every participant",
                  "Team building framework available",
                  "Bryson City, NC · Great Smoky Mountains",
                ].map((inc, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={13} className="text-primary shrink-0" />{inc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors">
                  Inquire About Your Event <ArrowRight size={13} />
                </Link>
                <Link href="/group-corporate-fly-fishing" className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] pt-1 hover:gap-4 transition-all">
                  Full Details <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GiftCertificateWidget />

      <FaqSection />

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Not sure where to start?</h2>
          <p className="text-primary-foreground/70 mb-10">Reach out and we'll help you find the right experience for your skill level and goals.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
            Contact Mac Brown <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
