import type { Metadata } from "next";
import EventsClient from "./events-client";
import { flyFishingShows, SHOWS_YEAR } from "@workspace/schedule";
import { SchemaScript } from "@/components/schema-script";

const SITE_URL = "https://macbrownflyfish.com";

function buildShowsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SHOWS_YEAR} Advanced Fly Casting Classes — The Fly Fishing Show Circuit`,
    description: `Mac Brown Fly Fish presents all-day advanced fly casting classes at The Fly Fishing Show circuit in ${SHOWS_YEAR}. Classes run 9am–5pm the day before each show opens.`,
    url: `${SITE_URL}/events-calendar/`,
    itemListElement: flyFishingShows.map((show, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "EducationalEvent",
        name: `${show.classDesc} — ${show.city}`,
        startDate: show.isoClassDate,
        endDate: show.isoClassDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: `The Fly Fishing Show — ${show.city}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: show.city.split(",")[0].trim(),
            addressRegion: (show.city.split(",")[1] ?? "").trim(),
            addressCountry: "US",
          },
        },
        organizer: {
          "@type": "Organization",
          name: "The Fly Fishing Show",
          url: "https://flyfishingshow.com",
        },
        performer: (show.instructors ?? ["Mac Brown"]).map((name) => ({
          "@type": "Person",
          name,
          ...(name === "Mac Brown"
            ? { url: `${SITE_URL}/bio-mac-brown`, sameAs: `${SITE_URL}/bio-mac-brown` }
            : {}),
        })),
        description: `${show.classDesc}. All-day fly casting class 9am–5pm the day before the show opens. The Fly Fishing Show runs ${show.dates} in ${show.city}.`,
        url: show.url ?? `${SITE_URL}/events-calendar/`,
        offers: {
          "@type": "Offer",
          url: show.url ?? `${SITE_URL}/events-calendar/`,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}

export const metadata: Metadata = {
  title: { absolute: "2027 Fly Fishing Events, Shows & School Schedule" },
  description: "Find Mac Brown at fly fishing shows, expos, and events throughout 2027. View the full schedule and book your school or guided trip today.",
  alternates: { canonical: "https://macbrownflyfish.com/events-calendar/" },
  openGraph: {
    title: "Events Calendar 2027 — Mac Brown Fly Fish",
    description: "Full 2027 schedule of Fly Fishing Shows and Bryson City schools and clinics with Mac Brown.",
    url: "https://macbrownflyfish.com/events-calendar/",
    images: [{ url: "https://macbrownflyfish.com/images/fly-fishing-show.webp" }],
  },
};

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildShowsSchema()) }}
      />
      <EventsClient />
    </>
  );
}
