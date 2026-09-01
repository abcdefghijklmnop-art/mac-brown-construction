"use client";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useSchedule } from "@/hooks/use-schedule";
import { img } from "@/lib/asset";

export default function EventsClient() {
  const schedule = useSchedule();
  const {
    flyFishingShows,
    brysonCalendar,
    masterclassSessions,
    weekendSchoolSessions,
    guideSchoolDatesSummary,
    masterclassDatesSummary,
    rowingDatesSummary,
    weekendSchoolDatesSummary,
    showsYear,
    programsYear,
  } = schedule;

  const [nymphDates, streamerDates, wetFlyDates, dryFlyDates] = weekendSchoolSessions.map(s => s.dates);

  const descriptions = [
    { dates: guideSchoolDatesSummary, title: "4-Day Fly Fishing Guide School", body: "The flagship program — and the one that changes everything. Four sessions offered annually, spanning spring and fall, to give serious anglers the best possible conditions and scheduling flexibility. This all-encompassing four-day immersion covers every essential element of the craft — casting, reading water, presentation, tactics, entomology, rigging, and the problem-solving process that separates consistently successful anglers from everyone else. Students come from across the country and beyond — experienced guides, aspiring professionals, and dedicated anglers who want to understand fly fishing the way the best in the sport understand it.", moreInfoUrl: "/fly-fishing-guide-school" },
    { dates: masterclassDatesSummary, title: "Masterclass Casting Workshop", body: "Two full days of advanced fly casting instruction — the most concentrated casting education available in the Southeast. Covering mechanics, line control, diagnosis, and correction at a depth that transforms the way you cast permanently.", subPrograms: ["Fly Casting Mastery Workshop", "Saltwater Fly Casting Elite Masterclass Workshop", "Spey Elite Casting Clinic"], moreInfoUrl: "/masterclass-fly-casting-workshop" },
    { dates: rowingDatesSummary, title: "Oar Frame Rowing School", body: "Two full days of hands-on rowing instruction on moving water — covering the fundamentals of reading current, boat positioning, maneuvering through technical water, and keeping anglers in the strike zone. An essential skill for guides, outfitters, and any serious angler ready to run their own drift boat safely and confidently on mountain rivers.", moreInfoUrl: "/drift-boat-rowing-school" },
    { dates: weekendSchoolDatesSummary, title: "Smoky Mountain Weekend Fly Fishing Schools", body: "Four comprehensive weekend clinics — each a deep, immersive two-day school built around one of the four major techniques in fly fishing. Since 1987, Mac Brown has been refining this curriculum across thousands of days on the water. All skill levels welcome. Friday through Sunday format, all-inclusive except North Carolina fishing license. Limited enrollment.", subPrograms: [`Comprehensive Nymph Fishing Clinic — ${nymphDates}`, `Comprehensive Streamer Clinic — ${streamerDates}`, `Comprehensive Wet Fly Clinic — ${wetFlyDates}`, `Comprehensive Dry Fly Clinic — ${dryFlyDates}`], moreInfoUrl: "/smoky-mountain-weekend-schools" },
    { dates: nymphDates, title: "Advanced Nymph Fishing Clinic", body: "Nymphing accounts for the majority of trout caught on a fly rod — and most anglers are leaving fish on the table with inefficient rigs and poor technique. This clinic covers strategies, tactics, rigging, and multiple techniques for fishing nymphs effectively across all water types.", moreInfoUrl: "/nymph-fishing-clinic" },
    { dates: streamerDates, title: "Advanced Streamer Fishing Clinic", body: "Streamers move big fish. They also demand a specific set of skills that most anglers never fully develop. This clinic covers the strategies, tactics, and techniques for fishing streamers with intention — understanding retrieve, depth, angle, and presentation to consistently draw strikes from the largest trout in the river.", moreInfoUrl: "/streamer-clinic" },
    { dates: wetFlyDates, title: "Master's Wet Fly Fishing Clinic", body: "Wet flies are among the oldest and most productive techniques in fly fishing — and one of the most overlooked. Fished throughout the water column at distance, a well-presented wet fly covers more water and more fish than almost any other method.", moreInfoUrl: "/wet-fly-clinic" },
    { dates: dryFlyDates, title: "Master's Dry Fly Fishing Clinic", body: "The dry fly drift is the pinnacle of the sport. A truly drag-free presentation is rarer than most anglers realize — and more achievable than they think. This clinic covers the casts, line control, and presentation angles that produce drag-free drifts consistently.", moreInfoUrl: "/dry-fly-clinic" },
    { dates: masterclassSessions[1]?.dates ?? "", title: "Spey Elite Casting Clinic", body: "Covering pause, power, and path for understanding a full range of line layouts with single-handed rods, switch rods, and Spey rods. From roll casts to long-distance aerial fly casts, this clinic builds the line control foundation for any angler pursuing distance, efficiency, or FFI Certified, Master, or Two-Handed Instructor certification.", moreInfoUrl: "/spey-elite-casting-clinic" },
    { dates: masterclassSessions[2]?.dates ?? "", title: "Saltwater Fly Casting Masterclass", body: "The saltwater environment is unforgiving — wind, distance, accuracy, and speed all matter at once, and 98% of saltwater captains say their biggest frustration is clients who can't cover fish when it counts. This school fixes that.", moreInfoUrl: "/saltwater-fly-casting-elite-masterclass-workshop" },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={img("/images/advanced-casting-class-atlanta-ga.webp")} alt="Mac Brown FFI Master Instructor teaching an advanced fly casting class — Mac Brown Fly Fish" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">{showsYear} / {programsYear} Schedule</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">Events Calendar</h1>
          <p className="text-white/55 text-base italic mt-4 font-serif max-w-lg">On the road and on the river — world-class instruction all year long.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">Mac Brown Fly Fish presents advanced fly casting classes at The Fly Fishing Show circuit nationally and runs fly fishing schools, clinics, and guide training programs in Bryson City, North Carolina from March through November annually. Mac has been a featured presenter at The Fly Fishing Show since 1994 — one of the longest-running instructors on the national circuit. All-day casting classes run the day before each show opens.</p>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">Schools &amp; Clinics — Full {programsYear} Calendar</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">All programs are based in Bryson City, NC in the heart of the Great Smoky Mountains. Each program is intentionally small to ensure every student gets the individual attention they came for.</p>
          <div className="overflow-hidden border border-border bg-white">
            <table className="w-full text-sm">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em]">Dates</th><th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em]">Program</th></tr></thead>
              <tbody>
                {brysonCalendar.map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-muted/20"}`}>
                    <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{row.dates}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <Link href={row.href} className="text-primary font-medium hover:underline inline-flex items-center gap-1.5">{row.program} <ArrowRight size={12} /></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">On the Road</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">Fly Fishing Shows — {showsYear}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Mac Brown teaches advanced fly casting classes at The Fly Fishing Show circuit annually — joining legends like Gary Borger on the road to bring world-class casting instruction directly to a city near you. All classes run 9am–5pm the day before the show opens.</p>
              <blockquote className="pl-5 border-l-2 border-primary font-serif italic text-foreground/75 leading-relaxed mb-10">"If I had to choose one singular icon who has done the most for fly fishers, it would be Gary Borger — peer, mentor, and friend. Teaching alongside him, among so many great people in this sport, is something I don't take lightly."</blockquote>
              <div className="space-y-4">
                {flyFishingShows.map((show, i) => (
                  <div key={i} className="border border-border bg-white p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={14} className="text-primary shrink-0" />
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">All-Day Class — {show.classDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <MapPin size={12} className="shrink-0" />
                      <span>{show.city}</span>
                    </div>
                    <p className="font-serif text-base font-bold text-foreground mb-1">{show.classDesc}</p>
                    <p className="text-xs text-muted-foreground mt-1">Classes, demos &amp; seminars throughout {show.dates} · The Fly Fishing Show</p>
                    {show.url && (
                      <div className="mt-3">
                        <a href={show.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:text-primary/70 transition-colors">Show Details &amp; Registration →</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden xl:flex xl:w-[38%] shrink-0 items-start">
              <div className="sticky top-32 w-full">
                <img src={img("/images/fly-fishing-show.webp")} alt="The Fly Fishing Show" className="w-full object-cover" />
                <p className="text-xs text-muted-foreground mt-3 text-center">Mac Brown at The Fly Fishing Show circuit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Program Details</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">What to Expect</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {descriptions.map((d, i) => (
              <div key={i} className="border border-border bg-white p-8 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2">{d.dates}</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{d.body}</p>
                {d.subPrograms && <ul className="mb-4 space-y-1.5">{d.subPrograms.map((sp, j) => <li key={j} className="flex items-center gap-2 text-sm text-foreground font-medium"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{sp}</li>)}</ul>}
                <div className="mt-auto flex flex-col gap-3">
                  <p className="text-xs font-medium text-amber-800 bg-amber-50 border border-amber-300 px-4 py-2.5">Limited number of participants — sign up early.</p>
                  {d.moreInfoUrl && <Link href={d.moreInfoUrl} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:text-primary/80 transition-colors self-start">More Info <ArrowRight size={12} /></Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Ready to Reserve Your Spot?</h2>
          <p className="text-primary-foreground/70 mb-8 text-sm">Many programs sell out months in advance. Reach out early to secure your date.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Book Online <ArrowRight size={14} /></Link>
            <a href="mailto:macbrownflyfish@gmail.com" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:border-primary-foreground/70 transition-colors">Email Mac</a>
          </div>
        </div>
      </section>
    </div>
  );
}
