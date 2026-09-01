export type SearchPage = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export const MBFF_SEARCH_INDEX: SearchPage[] = [
  { title: "Home", description: "Guided fly fishing trips and casting schools in Bryson City, NC", href: "/", category: "Home" },

  // Quick links — high-value pages shown immediately below Home in default view
  { title: "Overview", description: "All fly fishing schools, clinics, and guided trip programs at Mac Brown Fly Fish", href: "/programs-overview", category: "Quick Links" },
  { title: "Dates", description: "Upcoming dates — fly fishing shows, seminars, and events featuring Mac Brown (events calendar)", href: "/events-calendar", category: "Quick Links" },
  { title: "Book a Trip or School", description: "Reserve your guided trip or school with Mac Brown Fly Fish", href: "/reserve", category: "Quick Links" },
  { title: "Bio — Mac Brown", description: "FFI Master Casting Instructor, guide, and educator in Bryson City, NC since 1987", href: "/bio-mac-brown", category: "Quick Links" },
  { title: "River Conditions & Hatch Chart", description: "Live Smoky Mountains fly fishing report, hatch chart, and AI daily forecast", href: "/bryson-city-fly-fishing-report-hatch-chart", category: "Quick Links" },
  { title: "Fly Fishing Certifications", description: "Mac Brown's FFI casting certifications and teaching qualifications", href: "/fly-fishing-certifications", category: "Quick Links" },
  { title: "Testimonials & Kudos", description: "What anglers say about Mac Brown Fly Fish trips and schools", href: "/testimonials-kudos", category: "Quick Links" },

  // Schools — conversion priority
  { title: "Masterclass Fly Casting Workshop", description: "Intensive casting school — proper fundamentals for growth-minded anglers of all levels", href: "/masterclass-fly-casting-workshop", category: "Schools" },
  { title: "Fly Casting Mastery Workshop", description: "Loop control, distance, and advanced casts — ideal for CI/MCI prep or skills improvement", href: "/fly-casting-mastery-workshop", category: "Schools" },
  { title: "Spey Elite Casting Clinic", description: "Two-handed Spey and switch rod casting — anchor placement, D-loop, Skagit and Scandi", href: "/spey-elite-casting-clinic", category: "Schools" },
  { title: "Saltwater Fly Casting Masterclass", description: "Distance, accuracy, wind casting, and double haul for flats fishing (bonefish, permit, tarpon)", href: "/saltwater-fly-casting-elite-masterclass-workshop", category: "Schools" },
  { title: "Smoky Mountain Weekend Schools", description: "Weekend fly fishing clinics in the Great Smoky Mountains — all levels welcome", href: "/smoky-mountain-weekend-schools", category: "Schools" },
  { title: "Dry Fly Fishing Clinic", description: "Weekend dry fly school — reading rises, matching hatches, and presentation casts", href: "/dry-fly-clinic", category: "Schools" },
  { title: "Wet Fly Fishing Clinic", description: "Weekend wet fly school — swings, soft hackle presentations, depth control, and induced takes", href: "/wet-fly-clinic", category: "Schools" },
  { title: "Nymph Fishing Clinic", description: "Weekend nymph school — Euro tight-line, indicator nymphing, rigging, and strike detection", href: "/nymph-fishing-clinic", category: "Schools" },
  { title: "Streamer Fishing Clinic", description: "Weekend streamer school — big flies, big fish, retrieve patterns, and trophy trout tactics", href: "/streamer-clinic", category: "Schools" },
  { title: "Oar Frame Rowing School", description: "2-day drift boat rowing school — river reading, boat control, and safety for guides and anglers", href: "/drift-boat-rowing-school", category: "Schools" },
  { title: "Fly Fishing Guide School", description: "4-day professional guide training — the premier guide school in the eastern US. Tuition $4,850", href: "/fly-fishing-guide-school", category: "Schools" },

  // Casting Instruction — priority 2 after Schools
  { title: "Fly Casting Instruction", description: "One-on-one casting coaching with Mac Brown, FFI Master Casting Instructor", href: "/fly-casting-instruction", category: "Casting Instruction" },
  { title: "Online Fly Casting Lessons", description: "Live video casting lessons via FaceTime, Zoom, or Skype — anywhere in the world", href: "/online-fly-casting-lessons", category: "Casting Instruction" },

  // Guided trips
  { title: "Instructional Guided Trips", description: "All guided trip options — float, wade, and lake trips on the Tuckasegee and Nantahala", href: "/instructional-guided-trips", category: "Trips" },
  { title: "Instructional Float Trip", description: "Guided drift boat float trips with instruction — best in cooler seasons when flows are high", href: "/guided-float-fly-fishing-trips", category: "Trips" },
  { title: "Instructional Wade Trip", description: "Wading trips on mountain streams — best in warmer months for warm-water species", href: "/guided-wade-fly-fishing-trips", category: "Trips" },
  { title: "Instructional Lake Trip", description: "Full-day lake trips targeting larger trout and bass on Fontana, Cheoah, and mountain lakes", href: "/guided-lake-fly-fishing-trips", category: "Trips" },
  { title: "Kids Fly Fishing Trips", description: "Private family trips for children ages 5 and up — casting basics, water safety, catch-and-release", href: "/kids-trout-fishing-trips", category: "Trips" },
  { title: "Corporate & Group Trips", description: "Custom corporate retreats and group fly fishing for 2 to 200+ participants", href: "/group-corporate-fly-fishing", category: "Trips" },

  { title: "Fly Fishing Seminars", description: "Mac Brown's seminar schedule — The Fly Fishing Show and more since 1994", href: "/fly-fishing-seminars", category: "About" },
  { title: "Photo Gallery", description: "Photos from guided trips and fly fishing schools in the Great Smoky Mountains", href: "/photo-gallery", category: "About" },
  { title: "Mission Statement", description: "Our commitment to world-class instruction, conservation, and the sport of fly fishing", href: "/mission-statement", category: "About" },
  { title: "Sponsors", description: "Mac Brown's fly fishing industry sponsors and partners", href: "/sponsors", category: "About" },

  { title: "Store", description: "Mac Brown Fly Fish merchandise and fly fishing gear", href: "/store", category: "Store" },
  { title: "Casting Angles Book", description: "Mac Brown's 238-page fly casting book — mechanics, loop control, and presentation", href: "/casting-angles", category: "Media" },
  { title: "Podcasts", description: "Fly fishing tips, stories, and interviews with Mac Brown", href: "/podcasts", category: "Media" },
  { title: "Blog", description: "Fly fishing articles, hatch reports, and tips from Mac Brown", href: "/blog", category: "Media" },

  { title: "Contact", description: "Reach Mac Brown Fly Fish — (828) 736-1469 — macbrownflyfish@gmail.com", href: "/contact", category: "Contact" },
  { title: "Digital Waiver", description: "Complete the liability waiver before your trip or school", href: "/waiver", category: "Contact" },

  { title: "Bryson City Fly Fishing", description: "Guided fly fishing in Bryson City, NC — Tuckasegee and Nantahala rivers", href: "/bryson-city-fly-fishing", category: "Destinations" },
  { title: "Asheville Fly Fishing", description: "Guided fly fishing trips near Asheville, NC", href: "/asheville-fly-fishing", category: "Destinations" },
  { title: "Gatlinburg Fly Fishing", description: "Guided fly fishing near Gatlinburg, TN in the Great Smoky Mountains", href: "/gatlinburg-fly-fishing", category: "Destinations" },
  { title: "Cherokee Fly Fishing", description: "Trophy fly fishing waters near Cherokee, NC", href: "/cherokee-fly-fishing", category: "Destinations" },
  { title: "Highlands Fly Fishing", description: "Fly fishing near Highlands, NC", href: "/highlands-fly-fishing", category: "Destinations" },
  { title: "Cashiers Fly Fishing", description: "Fly fishing near Cashiers, NC", href: "/cashiers-fly-fishing", category: "Destinations" },
  { title: "Sylva Fly Fishing", description: "Guided fly fishing near Sylva, NC", href: "/sylva-fly-fishing", category: "Destinations" },
  { title: "Franklin Fly Fishing", description: "Guided fly fishing near Franklin, NC", href: "/franklin-fly-fishing", category: "Destinations" },
  { title: "Raleigh Fly Fishing", description: "Fly fishing trips for Raleigh, NC visitors to the Smokies", href: "/raleigh-fly-fishing", category: "Destinations" },
  { title: "Charlotte Fly Fishing", description: "Fly fishing trips for Charlotte, NC visitors to the Smokies", href: "/charlotte-fly-fishing", category: "Destinations" },
  { title: "Knoxville Fly Fishing", description: "Guided fly fishing near Knoxville, TN in the Smokies", href: "/knoxville-fly-fishing", category: "Destinations" },
];
