"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useSchedule } from "@/hooks/use-schedule";
import FaqSection from "@/components/faq-section";
import { GiftCertificateWidget } from "@/components/gift-certificate-widget";
import { img } from "@/lib/asset";

export default function BookClient() {
  const { pricing } = useSchedule();

  const sections = [
    {
      category: "Guided Trips",
      items: [
        { name: "Guided Wade or Float Trip", detailsLink: "/instructional-guided-trips", duration: "3 or 6 Hours", price: pricing.guidedWadeOrFloat.display, includes: ["1–2 anglers, same price", "Clackacraft or NRS boat", "All gear & flies provided"], buttons: [{ label: "Book 3-Hour", url: "/reserve" }, { label: "Book 6-Hour", url: "/reserve" }] },
        { name: "Guided Lake Trip", detailsLink: "/guided-lake-fly-fishing-trips", duration: "6 Hours", price: pricing.guidedLakeTrip.display, includes: ["1–2 anglers per boat", "Fontana, Cheoah & local lakes", "All gear & flies provided"], buttons: [{ label: "Book Now", url: "/reserve" }] },
      ],
    },
    {
      category: "Casting Instruction",
      items: [
        { name: "Fly Casting Instruction", detailsLink: "/fly-casting-instruction", duration: "1, 2, or 3 Hours", price: pricing.flyCastingInstruction.display, includes: ["1–2 people, same rate", "Single-hand, switch, or spey", "Any skill level welcome", "Private, focused session"], buttons: [{ label: "Book 1-Hour", url: "/reserve" }, { label: "Book 2-Hour", url: "/reserve" }, { label: "Book 3-Hour", url: "/reserve" }] },
        { name: "Online Fly Casting Lesson", detailsLink: "/online-fly-casting-lessons", duration: "1 Hour via Zoom", price: pricing.onlineVideoCoaching.display, includes: ["Video analysis of your cast", "Immediate corrections", "From home — anywhere"], buttons: [{ label: "Book Online Lesson", url: "/reserve" }] },
      ],
    },
    {
      category: "Weekend Schools",
      items: [
        { name: "Smoky Mountain Weekend School", detailsLink: "/smoky-mountain-weekend-schools", duration: "Fri–Sun (2 Days)", price: pricing.weekendFlyFishingSchool.display, includes: ["Nymph, Streamer, Wet Fly, or Dry Fly", "All-inclusive except NC license", "Limited enrollment"], buttons: [{ label: "View Dates & Book", url: "/reserve" }] },
      ],
    },
    {
      category: "Masterclass & Clinics",
      items: [
        { name: "Masterclass Casting Workshop", detailsLink: "/masterclass-fly-casting-workshop", duration: "2 Full Days", price: pricing.masterclassWorkshop.display, includes: ["Advanced casting mechanics", "Instructor certification prep", "Limited to 6 students"], buttons: [{ label: "View Dates & Book", url: "/reserve" }] },
        { name: "Oar Frame Rowing School", detailsLink: "/drift-boat-rowing-school", duration: "2 Full Days", price: pricing.riverNavigationAcademy.display, includes: ["Drift boat & raft techniques", "Reading current & boat control", "Moving water safety"], buttons: [{ label: "View Dates & Book", url: "/reserve" }] },
      ],
    },
    {
      category: "4-Day Schools",
      items: [
        { name: "Fly Fishing Guide School", detailsLink: "/fly-fishing-guide-school", duration: "4 Days (Thu–Sun)", price: pricing.guideSchool.display, includes: ["Complete guide school immersion", "Casting, tactics, entomology & more", "Lodging & meals not included"], buttons: [{ label: "Learn More & Book", url: "/fly-fishing-guide-school" }] },
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={img("/images/fall-river-fishing.webp")} srcSet={`${img("/images/mobile/fall-river-fishing.webp")} 800w, ${img("/images/fall-river-fishing.webp")} 1440w`} sizes="100vw" alt="Fall fly fishing on the Tuckasegee River near Bryson City NC — Mac Brown Fly Fish" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Bryson City, NC · Est. 1987</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">Book Your Experience</h1>
          <p className="text-white/55 text-base italic mt-4 font-serif">Select the trip or school that's right for you.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {sections.map(sec => (
            <div key={sec.category}>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">{sec.category}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sec.items.map(item => (
                  <div key={item.name} className="border border-border bg-white p-8 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-serif text-xl font-bold text-foreground leading-snug">{item.name}</h3>
                        <span className="font-serif text-xl font-bold text-primary shrink-0">{item.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-5">{item.duration}</p>
                      <ul className="space-y-2 mb-8">
                        {item.includes.map((inc, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                            <Check size={13} className="text-primary shrink-0" />{inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {item.buttons.map(btn => (
                        <Link key={btn.label} href={btn.url} className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-primary/90 transition-colors">{btn.label}</Link>
                      ))}
                      {item.detailsLink && (
                        <Link href={item.detailsLink} className="inline-flex items-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-muted/50 transition-colors">Details <ArrowRight size={11} /></Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FaqSection />
      <GiftCertificateWidget />
    </div>
  );
}
