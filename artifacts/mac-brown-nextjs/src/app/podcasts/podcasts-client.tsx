"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Mic, Youtube, Headphones } from "lucide-react";
import { img } from "@/lib/asset";
import type { Episode } from "@/lib/podcasts";

const otherPodcasts = [
  { embedSrc: "https://html5-player.libsyn.com/embed/episode/id/29385568/height/192/theme/modern/size/large/thumbnail/yes/custom-color/2d5fa0/time-start/00:00:00/download/yes/font-color/FFFFFF", title: "Fly Fishing North Carolina with Mac Brown — Bryson City, Guide School & Fly Casting", show: "Wet Fly Swing Podcast", height: 192 },
  { embedSrc: "https://www.buzzsprout.com/1289906/13839137?client_source=small_player&iframe=true", title: "Loop Mechanics and Putting Process Before the Goal", show: "Way of the Trout Podcast · Ep. 167", height: 200 },
];

const videoAppearances = [
  { id: "7GpP2JWE-Io", title: "Advanced Fly Casting, Trick Casts & Fly Fishing's Evolution", show: "Anchored Podcast with April Vokey · Ep. 241" },
  { id: "Tac6TrRPw_s", title: "EP 18 Mac Brown, the Casting Legend and Pioneer of Fly Fishing Guide Schools", show: "Ask About Fly Fishing · Ep. 18" },
  { id: "Gxu-JZCIugE", title: "Ask About Fly Fishing with Mac Brown & Roger Maves", show: "Ask About Fly Fishing · 2010" },
];

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function EpisodeCard({ episode, num }: { episode: Episode; num: number }) {
  const [open, setOpen] = useState(false);

  // Episodes 1-25 (the 25 oldest) link directly to The Articulate Fly.
  // Episode 26 and everything above — including all future episodes — use the expandable embed card.
  if (num <= 25) {
    return (
      <div className="border border-border bg-white rounded-sm overflow-hidden">
        <a
          href={episode.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-muted/30 transition-colors"
        >
          <div className="mt-0.5 shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-bold text-primary leading-none">#{num}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {formatDate(episode.date)}{episode.season > 0 && episode.ep > 0 ? ` · S${episode.season} Ep ${episode.ep}` : ""}
            </p>
            <h3 className="font-serif text-base text-foreground leading-snug pr-4">{episode.title}</h3>
          <p className="text-[10px] font-medium text-primary underline underline-offset-2 mt-1.5">For complete show notes on The Articulate Fly →</p>
          </div>
          <span className="shrink-0 flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] text-primary pt-1">
            Listen <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className="border border-border bg-white rounded-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-muted/30 transition-colors">
        <div className="mt-0.5 shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-xs font-bold text-primary leading-none">#{num}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-1">
            {formatDate(episode.date)}{episode.season > 0 && episode.ep > 0 ? ` · S${episode.season} Ep ${episode.ep}` : ""}
          </p>
          <h3 className="font-serif text-base text-foreground leading-snug pr-4">{episode.title}</h3>
        </div>
        <span className="shrink-0 text-xs font-medium uppercase tracking-[0.15em] text-primary pt-1">{open ? "Close" : "Listen"}</span>
      </button>
      {open && (
        <div className="px-6 pb-8 space-y-6">
          <iframe src={`https://player.captivate.fm/episode/${episode.uuid}`} title={episode.title} width="100%" height="182" frameBorder="0" scrolling="no" allow="autoplay" className="w-full" />

          {episode.overview && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Episode Overview</p>
              <p className="text-sm text-foreground leading-relaxed">{episode.overview}</p>
            </div>
          )}

          {episode.keyTakeaways.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Key Takeaways</p>
              <ul className="space-y-2">
                {episode.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {episode.techniques && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Techniques &amp; Gear</p>
              <p className="text-sm text-foreground leading-relaxed">{episode.techniques}</p>
            </div>
          )}

          <div className="pt-4 border-t border-border">
            <a
              href={episode.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-primary hover:underline underline-offset-2"
            >
              For complete show notes on The Articulate Fly →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Podcasts({ initialEpisodes }: { initialEpisodes: Episode[] }) {
  const episodes = initialEpisodes;
  const hasEpisodes = episodes.length > 0;

  return (
    <div className="pt-16">
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={img("/images/waterfall.webp")} alt="Waterfall on a Western North Carolina trout stream near Bryson City — Mac Brown Fly Fish" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">The Articulate Fly · Casting Angles</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">Podcast Episodes</h1>
        </div>
      </div>

      {/* AEO */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Mac Brown is a recurring guest on the{" "}
          <a href="https://owaa.org/2025-eic-award-winners/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity font-semibold">
            Outdoor Writers Association of America
          </a>{" "}
          award-winning{" "}
          <a href="https://fly-fishing-podcast.thearticulatefly.com/guests/mac-brown/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity font-semibold">
            The Articulate Fly
          </a>{" "}
          podcast, hosting the <strong>Casting Angles</strong> series. Topics covered include:
        </p>
        <ul className="mt-6 text-left inline-block space-y-2 text-muted-foreground text-base">
          <li className="flex gap-3 items-start"><span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" /><span><strong>Spey casting</strong> — two-handed rod mechanics, anchor placement, and sweep technique</span></li>
          <li className="flex gap-3 items-start"><span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" /><span><strong>High-water tactics</strong> — reading blown-out rivers and adapting presentations in off-color conditions</span></li>
          <li className="flex gap-3 items-start"><span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" /><span><strong>Fly fishing instruction</strong> — the science and art of teaching casting from beginner fundamentals to advanced techniques</span></li>
          <li className="flex gap-3 items-start"><span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" /><span><strong>Smoky Mountain guiding</strong> — trout fishing on the Tuckasegee and Nantahala rivers in Bryson City, NC</span></li>
          <li className="flex gap-3 items-start"><span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" /><span><strong>Fly Fishing Guide School</strong> — training professional guides since 1987 in Western North Carolina</span></li>
        </ul>
        <p className="text-sm text-muted-foreground mt-8">
          Want to learn directly from Mac on the water?{" "}
          <Link href="/fly-casting-instruction" className="text-primary font-medium hover:underline">See casting instruction options →</Link>
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-2">
          <Mic className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Casting Angles · The Articulate Fly</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <p className="text-xs text-muted-foreground/70 mb-8 pl-8">
          {hasEpisodes ? `${episodes.length} episodes · updated automatically` : "Unable to load episodes — try refreshing."}
        </p>
        <div className="space-y-3">
          {hasEpisodes
            ? episodes.map((ep, i) => <EpisodeCard key={ep.uuid} episode={ep} num={episodes.length - i} />)
            : (
              <p className="text-sm text-muted-foreground text-center py-8">
                Unable to load episodes right now.{" "}
                <a href="https://fly-fishing-podcast.thearticulatefly.com/categories/casting/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Listen on The Articulate Fly</a>
              </p>
            )
          }
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <Headphones className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Other Podcast Appearances</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="space-y-8">
          {otherPodcasts.map(p => (
            <div key={p.embedSrc}>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">{p.show}</p>
              <h3 className="font-serif text-lg text-foreground mb-4">{p.title}</h3>
              <iframe src={p.embedSrc} title={p.title} width="100%" height={p.height} frameBorder="0" scrolling="no" className="w-full border border-border rounded-sm" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <Youtube className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Video Appearances</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="space-y-8">
          {videoAppearances.map(v => (
            <div key={v.id}>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">{v.show}</p>
              <h3 className="font-serif text-lg text-foreground mb-4">{v.title}</h3>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full border border-border rounded-sm" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
