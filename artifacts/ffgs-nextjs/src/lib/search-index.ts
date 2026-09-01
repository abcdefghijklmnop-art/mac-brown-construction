export type SearchPage = {
  title: string;
  description: string;
  href: string;
  category: string;
  external?: boolean; // true = opens in new tab (used for cross-links to macbrownflyfish.com)
};

export const FFGS_SEARCH_INDEX: SearchPage[] = [
  { title: "Home", description: "The Fly Fishing Guide School — 4-day professional guide training in Bryson City, NC", href: "/", category: "Home" },

  { title: "Guide School Overview", description: "The complete Fly Fishing Guide School program — curriculum, tuition, dates, and enrollment", href: "/fly-fishing-guide-school/", category: "School" },
  { title: "New to Fly Fishing", description: "Starting from zero — no experience needed to enroll in the guide school", href: "/new-to-fly-fishing/", category: "School" },
  { title: "What to Bring", description: "Packing list and necessary items for the Fly Fishing Guide School", href: "/necessary-items-fly-fishing-guide-school/", category: "School" },
  { title: "School Locations", description: "Guide school locations across the Southeast US", href: "/guide-school-locations/", category: "School" },
  { title: "Reservation Form", description: "Enroll in the Fly Fishing Guide School — secure your spot", href: "/reservation-form/", category: "School" },

  { title: "Meet the Instructors", description: "Experienced fly fishing and rowing instructors at the guide school", href: "/meet-rowing-fly-casting-fly-fishing-instructors/", category: "Instructors" },

  { title: "Testimonials & Kudos", description: "What graduates say about the Fly Fishing Guide School", href: "/testimonials-kudos/", category: "About" },
  { title: "Photo Gallery", description: "Photos from the Fly Fishing Guide School — on the water and in the field", href: "/gallery-fly-fishing-guide-school/", category: "About" },
  { title: "Mission Statement", description: "Our commitment to excellence in fly fishing guide education", href: "/mission-statement/", category: "About" },

  { title: "Blog / Articles", description: "Fly fishing guide school articles, tips, and field notes", href: "/blog/", category: "Media" },

  { title: "Contact", description: "Reach the Fly Fishing Guide School — (828) 736-1469", href: "/contact-information-best-fly-fishing-guide-school/", category: "Contact" },

  // Cross-links to sister site Mac Brown Fly Fish — open in new tab
  { title: "Events Calendar", description: "Upcoming fly fishing shows, seminars, and events — Mac Brown Fly Fish", href: "https://macbrownflyfish.com/events-calendar", category: "Mac Brown Fly Fish", external: true },
  { title: "Programs Overview", description: "All guided trips, casting schools, and clinics — Mac Brown Fly Fish", href: "https://macbrownflyfish.com/programs-overview", category: "Mac Brown Fly Fish", external: true },
  { title: "Fly Fishing Certifications", description: "Mac Brown's FFI casting certifications and teaching credentials", href: "https://macbrownflyfish.com/fly-fishing-certifications", category: "Mac Brown Fly Fish", external: true },
  { title: "River Conditions & Hatch Chart", description: "Live Smoky Mountains fly fishing report and AI daily forecast", href: "https://macbrownflyfish.com/bryson-city-fly-fishing-report-hatch-chart", category: "Mac Brown Fly Fish", external: true },

  { title: "Bryson City Guide School", description: "Fly Fishing Guide School in Bryson City, NC — home campus in Smoky Mountain trout country", href: "/bryson-city-fly-fishing-guide-school/", category: "Locations" },
  { title: "Asheville Guide School", description: "Fly Fishing Guide School near Asheville, NC", href: "/asheville-fly-fishing-guide-school/", category: "Locations" },
  { title: "Charlotte Guide School", description: "Fly Fishing Guide School near Charlotte, NC", href: "/charlotte-fly-fishing-guide-school/", category: "Locations" },
  { title: "Nashville Guide School", description: "Fly Fishing Guide School near Nashville, TN", href: "/nashville-fly-fishing-guide-school/", category: "Locations" },
  { title: "Atlanta Guide School", description: "Fly Fishing Guide School near Atlanta, GA", href: "/atlanta-fly-fishing-guide-school/", category: "Locations" },
  { title: "Raleigh Guide School", description: "Fly Fishing Guide School near Raleigh, NC", href: "/raleigh-fly-fishing-guide-school/", category: "Locations" },
  { title: "Knoxville Guide School", description: "Fly Fishing Guide School near Knoxville, TN", href: "/knoxville-fly-fishing-guide-school/", category: "Locations" },
  { title: "Chattanooga Guide School", description: "Fly Fishing Guide School near Chattanooga, TN", href: "/chattanooga-fly-fishing-guide-school/", category: "Locations" },
  { title: "Greenville SC Guide School", description: "Fly Fishing Guide School near Greenville, SC", href: "/greenville-sc-fly-fishing-guide-school/", category: "Locations" },
  { title: "Birmingham Guide School", description: "Fly Fishing Guide School near Birmingham, AL", href: "/birmingham-fly-fishing-guide-school/", category: "Locations" },

  { title: "Privacy Policy", description: "Fly Fishing Guide School privacy policy", href: "/privacy-policy/", category: "Other" },
];
