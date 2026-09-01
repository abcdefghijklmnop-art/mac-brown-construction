import type { Metadata } from "next";
import Podcasts from "./podcasts-client";
import { getEpisodes } from "@/lib/podcasts";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Podcasts — Mac Brown, Bryson City NC" },
  description:
    "Listen to Mac Brown's fly fishing podcasts covering Smoky Mountain guiding, fly casting instruction, trout fishing in North Carolina, and the guide school experience.",
  alternates: { canonical: "https://macbrownflyfish.com/podcasts/" },
  openGraph: {
    title: "Fly Fishing Podcasts | Mac Brown Fly Fish | Bryson City NC",
    description:
      "Mac Brown on Smoky Mountain guiding, casting instruction, and fly fishing in Western NC. New episodes on the guide school, rivers, and technique.",
    url: "https://macbrownflyfish.com/podcasts/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page() {
  let episodes: Awaited<ReturnType<typeof getEpisodes>> = [];
  try {
    episodes = await getEpisodes();
  } catch {
    // Render with empty list — client fallback handles error state
  }

  const podcastSeriesSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": "https://macbrownflyfish.com/podcasts/#series",
    name: "Casting Angles with Mac Brown — The Articulate Fly",
    description: "Mac Brown's recurring segment on The Articulate Fly podcast — covering fly casting mechanics, fly line selection, loop control, guide school, and trout fishing in the Great Smoky Mountains of North Carolina.",
    url: "https://macbrownflyfish.com/podcasts/",
    image: "https://macbrownflyfish.com/images/fall-river-fishing.webp",
    inLanguage: "en",
    author: { "@id": "https://macbrownflyfish.com/#mac-brown" },
    publisher: { "@id": "https://macbrownflyfish.com/#business" },
    webFeed: "https://feeds.captivate.fm/the-articulate-fly/",
  };

  const episodeSchemas = episodes.slice(0, 20).map((ep) => ({
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    "@id": ep.link,
    name: ep.title,
    url: ep.link,
    datePublished: ep.date,
    description: ep.overview || ep.title,
    author: { "@id": "https://macbrownflyfish.com/#mac-brown" },
    partOfSeries: { "@id": "https://macbrownflyfish.com/podcasts/#series" },
    ...(ep.season > 0 && ep.ep > 0 ? { seasonNumber: ep.season, episodeNumber: ep.ep } : {}),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSeriesSchema) }} />
      {episodeSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Podcasts initialEpisodes={episodes} />
    </>
  );
}
