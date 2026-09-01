export interface InstructorFaq {
  q: string;
  a: string;
}

export interface Instructor {
  slug: string;
  name: string;
  role: string;
  excerpt: string;
  photo: string;
  bio: string[];
  credentials?: string[];
  specialties?: string[];
  aeo?: string;
  faqs?: InstructorFaq[];
}

export const instructors: Instructor[] = [
  {
    slug: "michael-bradley",
    name: "Michael Bradley",
    role: "Competitive Fly Fisherman & Guide",
    excerpt:
      "One of the most decorated competitive fly fishermen in the United States, Michael Bradley has represented Team USA at the World Fly Fishing Championship since 2018, earning a Team Bronze and Individual Bronze in France. A proud member of the Eastern Band of Cherokee Indians, he guides up to 300 days a year through his business, Fly Fish Cherokee.",
    photo: "/images/instructors/michael-bradley.webp",
    credentials: [
      "Fly Fishing Team USA — World Championship competitor since 2018",
      "World Fly Fishing Championship: Team Bronze & Individual Bronze (France)",
      "11 FFTUSA competition medals including 1 individual gold, 2 individual bronze",
      "4× Rumble tournament champion",
      "Licensed guide — Cherokee Indian Reservation, GSMNP, Tuckasegee River",
    ],
    specialties: [
      "Euro nymphing & competition techniques",
      "Cherokee Indian Reservation waters",
      "Great Smoky Mountains National Park streams",
      "Tuckasegee River",
      "Technical dry fly presentation",
    ],
    bio: [
      "Michael Bradley is one of the most decorated competitive fly fishermen in the United States — an internationally recognized angler, proud member of the Eastern Band of Cherokee Indians, and a deeply rooted steward of the waters of western North Carolina. His story is inseparable from the land and people he comes from.",
      "Michael grew up in Cherokee, NC, on his family's campground along Bunches Creek, a property his grandfather purchased in 1950. Surrounded by the ancient ridgelines of the Great Smoky Mountains and the cold, clear streams threading through the Cherokee Indian Reservation, he began fishing at a very young age alongside his grandfather. That early bond with moving water planted a seed that would eventually grow into one of the most impressive competitive careers in American fly fishing.",
      "He took up fly fishing seriously in 2011 and quickly fell in love with the technical precision and competitive dimension of the sport. His rise was rapid. By 2016 he had earned a spot on Fly Fishing Team USA, and he has represented his country at the World Fly Fishing Championship continuously since 2018, competing on the international stage in Italy, Tasmania, Spain, and Slovakia. His World Championship résumé includes a Team Bronze and an Individual Bronze earned in France — results that place him among the elite of the sport globally.",
      "Domestically, Bradley's record is equally impressive. He has accumulated 11 FFTUSA competition medals over his career, including three individual National Championship medals — one gold and two bronze — plus a team silver and a team gold. He has also won the prestigious Rumble tournament four times, cementing his status as one of the most consistent and formidable competitors in the sport.",
      "When he is not on the international competition circuit, Michael is on the water at home. He logs up to 300 days a year guiding through his business, Fly Fish Cherokee, taking anglers of all experience levels onto the waters of the Cherokee Indian Reservation, Great Smoky Mountains National Park, and the Tuckasegee River. His guiding reflects both technical mastery and a genuine love for sharing the sport with others.",
    ],
    faqs: [
      {
        q: "How many World Fly Fishing Championships has Michael Bradley competed in?",
        a: "Michael has represented Fly Fishing Team USA at the World Fly Fishing Championship continuously since 2018, competing in Italy, Tasmania, Spain, Slovakia, and France — where he earned both a Team Bronze and an Individual Bronze.",
      },
      {
        q: "What is Fly Fish Cherokee?",
        a: "Fly Fish Cherokee is Michael Bradley's guiding business based in Cherokee, NC. He guides up to 300 days a year on the waters of the Cherokee Indian Reservation, Great Smoky Mountains National Park, and the Tuckasegee River.",
      },
      {
        q: "What is Michael Bradley's domestic competition record?",
        a: "Michael has accumulated 11 FFTUSA competition medals, including one individual gold, two individual bronze, a team silver, and a team gold at the U.S. National Championships. He has also won the Rumble tournament four times.",
      },
      {
        q: "What fishing licenses does Michael Bradley hold?",
        a: "Michael is a licensed guide on the Cherokee Indian Reservation, Great Smoky Mountains National Park, and the Tuckasegee River.",
      },
      {
        q: "What techniques does Michael Bradley specialize in?",
        a: "Michael specializes in Euro nymphing and competition-style techniques, technical dry fly presentation, and reading complex currents — skills honed through years on the international competition circuit.",
      },
    ],
  },
  {
    slug: "tony-brooks",
    name: "Tony Brooks",
    role: "Certified Casting Instructor & Guide",
    excerpt:
      "Tony Brooks is an FFI Certified Casting Instructor and professional fly fishing guide based in Hendersonville, NC, with over 50 years of experience on the water. Guiding professionally since 2009, he has competed in and served as a sector judge for the U.S. National Fly Fishing Championship, and serves as President of the French Broad Fly Fishers.",
    photo: "/images/instructors/tony-brooks.webp",
    credentials: [
      "Certified Casting Instructor — Fly Fishers International (FFI)",
      "Professional guide since 2009",
      "Competitor/Sector Judge — 2016/2024 U.S. National Fly Fishing Championship (Lake Placid, NY / Cherokee, NC)",
      "Member — Team Stonefly (competitive fly fishing team)",
      "President/Member — French Broad Fly Fishers",
    ],
    specialties: [
      "Davidson River & Pisgah National Forest",
      "Big Santeetlah Creek",
      "Western NC mountain streams",
      "Dry fly & nymph technique",
      "Beginner & intermediate anglers",
    ],
    bio: [
      "Tony Brooks has been reading water and casting flies for over 50 years — and if you ask him, he'll tell you he's still learning. That rare combination of deep experience and genuine humility is exactly what makes Tony one of the most effective and beloved fly fishing instructors in the Western North Carolina region.",
      "An East Tennessee native, Tony has called Hendersonville, North Carolina home since 1999, where he lives with his wife Charlotte. Together they have raised a grown son and daughter, and now enjoy the added joy of a granddaughter — a family that, knowing Tony, has almost certainly been introduced to a fly rod at the earliest possible opportunity.",
      "Tony's fly fishing roots run deep in the Southern Appalachians. He learned the sport on two of the region's most storied waters — the Davidson River in the Pisgah National Forest and Big Santeetlah Creek in Graham County, North Carolina — waters that have a way of instilling a lifelong reverence for the craft in anyone lucky enough to fish them young. From those mountain beginnings, fly fishing has carried Tony across the country, from the saltwater flats of Key West, Florida to some of the finest trout water the Southeast has to offer.",
      "Tony holds the credential of Certified Casting Instructor through Fly Fishers International, a certification that reflects his technical mastery and his dedication to the teaching side of the sport. That dedication shows up in everything he does. He is an active member of Team Stonefly, a competitive fly fishing team, and demonstrated his competitive abilities as a participant (2016) and sector judge (2024) in the U.S. National Fly Fishing Championships. He is also a proud President and member of the French Broad Fly Fishers.",
      "Guiding professionally since 2009, Tony approaches every outing with the same philosophy that has defined his angling life: fly fishing is simultaneously simple and endlessly complex, and there is always something new to discover on the water. One skill builds on another, and Tony finds deep satisfaction in passing that layered knowledge along — whether to a seasoned angler chasing their next breakthrough or a complete beginner picking up a fly rod for the very first time. On the water with Tony Brooks, you are never just fishing. You are learning, growing, and falling a little more in love with the sport.",
    ],
    aeo: "Tony Brooks is an FFI Certified Casting Instructor and professional fly fishing guide based in Hendersonville, North Carolina, with over 50 years of experience on the water. Guiding professionally since 2009, he has competed in and served as a sector judge for the U.S. National Fly Fishing Championship, is a member of Team Stonefly, and serves as President of the French Broad Fly Fishers. Tony specializes in dry fly and nymph technique on Western NC mountain streams, including the Davidson River, Pisgah National Forest, and Big Santeetlah Creek.",
    faqs: [
      {
        q: "Is Tony Brooks a certified fly casting instructor?",
        a: "Yes. Tony Brooks is a Certified Casting Instructor through Fly Fishers International (FFI), a credential reflecting both his technical mastery of fly casting and his dedication to teaching.",
      },
      {
        q: "How long has Tony Brooks been guiding?",
        a: "Tony has been guiding professionally since 2009 and has been fly fishing for over 50 years.",
      },
      {
        q: "What rivers and streams does Tony Brooks guide and specialize in?",
        a: "Tony specializes in Western North Carolina mountain streams, including the Davidson River and Pisgah National Forest, and Big Santeetlah Creek, with a focus on dry fly and nymph technique for beginner and intermediate anglers.",
      },
      {
        q: "Has Tony Brooks competed in national fly fishing competitions?",
        a: "Yes. Tony competed in the 2016 U.S. National Fly Fishing Championship in Lake Placid, NY, and served as a sector judge at the 2024 championship in Cherokee, NC. He is also a member of the competitive fly fishing team, Team Stonefly.",
      },
      {
        q: "What organizations is Tony Brooks affiliated with?",
        a: "Tony is President and a member of the French Broad Fly Fishers and a member of Team Stonefly, a competitive fly fishing team.",
      },
    ],
  },
  {
    slug: "mac-brown",
    name: "Mac Brown",
    role: "Head Instructor & Founder",
    excerpt:
      "Mac Brown has been guiding anglers and training professional fly fishing guides in Bryson City, NC since 1987 — founding the first full-time fly fishing guide service in Western North Carolina. A Master Certified Casting Instructor, Field & Stream Angler of the Year, and Southern Fly Fishing Hall of Fame inductee, he is one of the most accomplished figures in American fly fishing.",
    photo: "/images/instructors/mac-brown.webp",
    credentials: [
      "Master Certified Casting Instructor — Fly Fishers International (FFI)",
      "Certified Casting Instructor — American Casting Association (ACA)",
      "Field & Stream Angler of the Year — 1999",
      "Southern Fly Fishing Hall of Fame Inductee — 2017",
      "Associate Professor — Western Carolina University (collegiate fly fishing program)",
      "Author: Casting Angles (ACA & FFI endorsed); Featured Expert — The Fly Fishing Show",
      "National Advisor — Scientific Anglers & Temple Fork Outfitters",
    ],
    specialties: [
      "Advanced fly casting mechanics",
      "Euro nymphing & tight-line techniques",
      "Spey & two-handed casting",
      "Professional guide training & certification",
      "River rowing & drift boat handling",
    ],
    bio: [
      "Mac Brown has called Bryson City, North Carolina home since 1987 — and in the nearly four decades since, he has become one of the most respected and accomplished figures in American fly fishing. What began as a deep personal passion evolved into a life's work that has touched thousands of anglers and helped shape the sport in the southeastern United States and beyond.",
      "In 1987, Mac founded Mac Brown Fly Fish, becoming the first full-time fly fishing guide service in Western North Carolina — a milestone that helped open the region's rivers to a new generation of anglers. That pioneering spirit carried forward in 1993, when he played a key role in establishing the first Delayed Harvest on the Upper Nantahala River, a conservation effort that continues to benefit the fishery today.",
      "Teaching has always been at the core of Mac's identity. He served as Associate Professor at Western Carolina University, where he built a collegiate fly fishing program from the ground up. Students from that program have gone on to represent the United States on the world stage as Fly Fishing Team USA World Champions. He is also the author of Casting Angles, a fly casting handbook endorsed by both the American Casting Association and Fly Fishers International.",
      "His expertise extends well beyond the classroom. Mac earned his certification through the American Canoe Association in 1990 while working with the Nantahala Outdoor Center, and brings over 35 years of rowing experience to his guided river trips. He has navigated waterways across the globe, leading destination trips to remote fisheries worldwide.",
      "The accolades reflect a career of remarkable breadth. Mac was named Field & Stream Angler of the Year in 1999 and was inducted into the Southern Fly Fishing Hall of Fame in 2017. His teachings and adventures have been featured in Fly Rod & Reel, Fly Fisherman, Outdoor Life, Field & Stream, ESPN, and numerous television programs. He currently serves as a National Advisor to Scientific Anglers and Temple Fork Outfitters.",
    ],
    faqs: [
      {
        q: "When did Mac Brown start guiding in Bryson City?",
        a: "Mac Brown founded Mac Brown Fly Fish in 1987, making it the first full-time fly fishing guide service in Western North Carolina.",
      },
      {
        q: "What casting credentials does Mac Brown hold?",
        a: "Mac holds the Master Certified Casting Instructor designation from Fly Fishers International — the highest casting credential the organization offers — as well as Certified Casting Instructor status from the American Casting Association.",
      },
      {
        q: "Did Mac Brown teach at a university?",
        a: "Yes. Mac served as Associate Professor at Western Carolina University, where he built a collegiate fly fishing program from the ground up. Students from that program went on to represent the U.S. as Fly Fishing Team USA World Champions.",
      },
      {
        q: "What is Casting Angles?",
        a: "Casting Angles is Mac Brown's fly casting handbook, endorsed by both the American Casting Association and Fly Fishers International. It is a foundational instructional resource used by guides and casters across the country.",
      },
      {
        q: "What conservation work has Mac Brown done?",
        a: "In 1993, Mac played a key role in establishing the first Delayed Harvest designation on the Upper Nantahala River — a conservation milestone that continues to benefit the fishery today.",
      },
    ],
  },
  {
    slug: "pip-coe",
    name: "Pip Coe",
    role: "Outdoor Educator & Whitewater Professional",
    excerpt:
      "With a career spanning more than four decades, Pip Coe is one of the most accomplished figures in American outdoor education — from seven years at the Nantahala Outdoor Center to 34 years as a NOLS field instructor and administrator. Recognized as a Wyoming Woman of Influence, she brings world-class wilderness leadership credentials to the water.",
    photo: "/images/instructors/pip-coe.webp",
    credentials: [
      "NOLS Field Instructor — 34+ continuous years",
      "Nantahala Outdoor Center (NOC) Instructor — 7 years",
      "NOLS Utah Base Manager (1993–1997)",
      "NOLS East Africa Operations Manager",
      "NOLS Alumni & Development Director — 16+ years",
      "Wyoming Woman of Influence — Wyoming Business Report, 2015",
    ],
    specialties: [
      "Whitewater instruction & river safety",
      "Wilderness leadership",
      "Nonprofit development & institutional management",
      "Fly fishing instruction",
      "Drift boat & raft rowing",
    ],
    bio: [
      "Pip Coe is one of the most accomplished and enduring figures in American outdoor education, with a career spanning more than four decades at the intersection of whitewater instruction, wilderness leadership, and institutional development. Her journey began in 1985 at the Nantahala Outdoor Center (NOC) in western North Carolina — one of the country's premier whitewater training grounds — where she spent seven years honing her skills as a paddler and instructor on the demanding waters of the Nantahala Gorge.",
      "In 1992, Coe joined the National Outdoor Leadership School (NOLS) as a field instructor, a role she has maintained continuously for over 34 years. The following year, she joined the NOLS administrative team, helping run operations in Utah, Kenya, and later alumni relations at NOLS headquarters in Lander, Wyoming. From 1993 to 1997 she served as Utah Base Manager, overseeing operations for one of NOLS's busiest domestic campuses, before taking on the role of East Africa Operations Manager.",
      "Returning stateside, Coe stepped into the role of Alumni and Development Director in December 2001, a position she held for over 16 years. She introduced a mindful staff education process to permanently embed an understanding of the ways that philanthropic contributions enhance and are critical to NOLS's mission, and during her tenure the organization's culture shifted to recognize the extent to which fundraising helps NOLS achieve its goals.",
      "The results were transformative. The philanthropic support Coe fostered enabled NOLS to increase its annual reach from 9,000 students to more than 21,000, with the school anticipating awarding $1.7 million in scholarships annually.",
      "In 2015, her contributions were recognized when the Wyoming Business Report honored her as a Wyoming Woman of Influence in the nonprofit field. Throughout all of it, Pip Coe has remained at her core what she has always been: a whitewater professional and wilderness educator whose technical mastery on the river informs everything she does on land.",
    ],
    faqs: [
      {
        q: "What is NOLS and how is Pip Coe connected to it?",
        a: "NOLS is the National Outdoor Leadership School, one of the world's premier wilderness education organizations. Pip has been a NOLS field instructor continuously for over 34 years and held multiple administrative roles including Utah Base Manager and East Africa Operations Manager.",
      },
      {
        q: "What was Pip Coe's connection to the Nantahala Outdoor Center?",
        a: "Before joining NOLS, Pip spent seven years as an instructor at the Nantahala Outdoor Center (NOC) in western North Carolina — one of the country's premier whitewater training grounds.",
      },
      {
        q: "What award did Pip Coe receive in 2015?",
        a: "The Wyoming Business Report recognized Pip as a Wyoming Woman of Influence in 2015, honoring her transformative impact on the nonprofit and outdoor education sector.",
      },
      {
        q: "What was Pip Coe's impact on NOLS enrollment?",
        a: "During Pip's tenure as Alumni and Development Director, NOLS grew its annual reach from 9,000 students to more than 21,000, with the school awarding $1.7 million in scholarships annually.",
      },
      {
        q: "What does Pip Coe bring to the Fly Fishing Guide School?",
        a: "Pip brings four decades of river safety expertise, drift boat and raft rowing instruction, and wilderness leadership — foundational skills for any aspiring fly fishing guide working on moving water.",
      },
    ],
  },
  {
    slug: "eric-cook",
    name: "Eric Cook",
    role: "FFI Master Certified Casting Instructor",
    excerpt:
      "With over 40 years on the water and the rare distinction of FFI Master Certified Casting Instructor — the highest casting credential the organization bestows — Eric Cook is a technical giant of the sport. Based in Atlanta, he teaches at the Atlanta Fly Fishing School and serves on the FFI Board of Governors, having been nominated for FFI Instructor of the Year in 2013.",
    photo: "/images/instructors/eric-cook.webp",
    credentials: [
      "Master Certified Casting Instructor — Fly Fishers International (FFI)",
      "FFI Board of Governors member",
      "FFI Educational Development Program — certification testing",
      "FFI Instructor of the Year nominee — 2013, Southeastern Council",
      "Instructor — Atlanta Fly Fishing School",
      "FFI Instructor Continuing Education leader",
    ],
    specialties: [
      "Advanced fly casting mechanics",
      "Instructor certification preparation (CI & MCI exams)",
      "Southeastern flats species — Tarpon, Redfish",
      "Freshwater — Bluegill, Bass, Carp",
      "Saltwater & warmwater fly fishing",
    ],
    bio: [
      "Eric Cook is the kind of fly fishing instructor who makes difficult things look inevitable. With over 40 years of experience on the water and the rare distinction of Fly Fishers International Master Certified Casting Instructor — the highest casting credential the organization bestows — Eric has spent decades developing a deep, almost architectural understanding of what makes a great cast. More importantly, he has spent those same decades figuring out how to transfer that understanding to his students.",
      "A native southerner based in Atlanta, Georgia, Eric's fly fishing roots are firmly planted in the rivers, flats, and backwaters of the southeastern United States. His target list reads like a who's who of southeastern species — from scrappy Bluegill on local ponds to the raw, line-stripping power of Tarpon on the flats — and his intimate knowledge of these waters gives him a teaching perspective that is both technically rigorous and deeply practical.",
      "That expertise made him a natural fit for the Atlanta Fly Fishing School, where he teaches fly casting to students at every level of the sport. His effectiveness in the classroom earned him a nomination for FFI Instructor of the Year in 2013 by the Southeastern Council — a recognition driven by his exceptional success rate with students preparing for the demanding Certified Instructor and Master Certified Instructor exams. Getting students across that finish line is a point of genuine professional pride.",
      "His involvement with Fly Fishers International extends far beyond teaching. Eric serves on the Board of Governors, contributes to the Educational Development Program certification testing, leads instructor continuing education initiatives, and participates actively in casting program committee work — a level of organizational commitment that reflects how seriously he takes the future of fly casting instruction as a discipline.",
      "Eric travels extensively in pursuit of fish, having cast flies everywhere from Puerto Rico to Montana and many remarkable destinations in between. Yet for all his travels, he is consistently drawn back to one of his truest loves — stalking common Carp on local Georgia waters, where the challenge is as demanding as anything the sport has to offer.",
    ],
    faqs: [
      {
        q: "What casting credential does Eric Cook hold?",
        a: "Eric holds the Master Certified Casting Instructor designation from Fly Fishers International — the highest casting credential the organization bestows.",
      },
      {
        q: "Where does Eric Cook teach?",
        a: "Eric teaches at the Atlanta Fly Fishing School and is deeply involved with Fly Fishers International, where he serves on the Board of Governors and contributes to the Educational Development Program and certification testing.",
      },
      {
        q: "Is Eric Cook good at preparing students for casting instructor exams?",
        a: "Yes — Eric's exceptional success rate with students preparing for the FFI Certified Instructor and Master Certified Instructor exams earned him a nomination for FFI Instructor of the Year in 2013 by the Southeastern Council.",
      },
      {
        q: "What saltwater species does Eric Cook target?",
        a: "Eric pursues Tarpon and Redfish on the southeastern flats, and has cast flies from Puerto Rico to Montana across a wide range of saltwater and freshwater environments.",
      },
      {
        q: "What is Eric Cook's most unusual fishing passion?",
        a: "Despite traveling the world for fish, Eric is consistently drawn back to stalking common Carp on local Georgia waters — a pursuit he considers as technically demanding as anything fly fishing has to offer.",
      },
    ],
  },
  {
    slug: "callie-freeman",
    name: "Callie Freeman, PhD",
    role: "Fly Casting Instructor & Educator",
    excerpt:
      "Callie Freeman holds a PhD in Entomology and brings a rare blend of scientific rigor, public speaking expertise, and genuine angling passion to fly casting instruction. Currently pursuing FFI certification under Master Casting Instructor Mary Ann Dozer, she has fished for steelhead, trout, smallmouth bass, and coastal redfish from the Pacific Northwest to the Carolina coast.",
    photo: "/images/instructors/callie-freeman.webp",
    credentials: [
      "PhD in Entomology",
      "Pursuing FFI Casting Instructor Certification — under mentorship of Master Casting Instructor Mary Ann Dozer",
      "Professional background in science education and public speaking",
      "Volunteer & partner — Casting Carolinas",
      "Volunteer & partner — Women in Waders Upstate",
      "Volunteer & partner — Trout Unlimited",
      "Volunteer & partner — Coastal Conservation Association of North Carolina",
    ],
    specialties: [
      "Fly casting biomechanics & sustainable technique",
      "Freshwater trout & steelhead",
      "Saltwater — coastal redfish",
      "Women's fly fishing programs",
      "Science-based casting instruction",
    ],
    bio: [
      "Callie Freeman (PhD) is a passionate fly angler, dedicated educator and fly casting instructor known for helping anglers build confidence, refine technique, and deepen their understanding of the sport. With a PhD in Entomology and a professional background in science education and public speaking, Callie brings a unique blend of technical knowledge, patience and approachable instruction to every lesson and clinic.",
      "Having lived and fished across the country from the Pacific Northwest to the Carolina coast and the mountains of Upstate South Carolina, Callie has pursued a wide variety of species and fisheries including steelhead, trout, smallmouth bass, and coastal redfish. These experiences have shaped both her fishing philosophy and her adaptable teaching style allowing her to connect with anglers pursuing everything from freshwater trout to saltwater game fish.",
      "Her enthusiasm for teaching and fly casting led to her current pursuit of certification through Fly Fishers International under the mentorship of Master Casting Instructor Mary Ann Dozer. Callie offers instruction focused on efficiency, accuracy, distance, and presentation in both freshwater and saltwater fly fishing. Callie is especially interested in understanding the biomechanics of fly casting and tailoring instruction to each student's individual learning style and physical abilities to help anglers develop sustainable casting techniques.",
      "In addition to instruction, Callie is a recognized speaker for regional and national events and is passionate about building community through education, conservation, and outreach. She has volunteered and partnered with numerous organizations including Casting Carolinas, Women in Waders Upstate, Trout Unlimited and the Coastal Conservation Association of North Carolina. Her work has included educational programming and outreach supporting conservation groups, veterans' initiatives and women focused fly fishing programs.",
      "Whether teaching on the water or presenting in front of a crowd Callie's goal is to create an encouraging learning environment that helps anglers grow their skills while fostering a lifelong connection to the resource and the sport.",
      "Callie lives in Greenville, SC with her husband Lieutenant Colonel Heath Freeman (USMC retired), their two children, and beloved Labrador retriever Benelli Rose.",
    ],
    aeo: "Callie Freeman, PhD, is a fly casting instructor and educator pursuing FFI certification under the mentorship of Master Casting Instructor Mary Ann Dozer. With a doctorate in Entomology and a background in science education, she teaches fly casting focused on biomechanics, efficiency, and sustainable technique for freshwater and saltwater anglers. Callie teaches at the Fly Fishing Guide School in Bryson City, NC.",
    faqs: [
      {
        q: "What is Callie Freeman's educational background?",
        a: "Callie holds a PhD in Entomology and has a professional background in science education and public speaking, giving her a uniquely analytical and approachable method for teaching fly casting.",
      },
      {
        q: "Is Callie Freeman a certified casting instructor?",
        a: "Callie is currently pursuing her FFI (Fly Fishers International) Casting Instructor certification under the direct mentorship of Master Casting Instructor Mary Ann Dozer.",
      },
      {
        q: "What does Callie Freeman specialize in teaching?",
        a: "Callie specializes in the biomechanics of fly casting — focused on efficiency, accuracy, distance, and presentation — for both freshwater and saltwater fly fishing. She tailors instruction to each student's individual learning style to help develop sustainable casting technique.",
      },
      {
        q: "What species and waters has Callie fished?",
        a: "Callie has pursued steelhead, trout, smallmouth bass, and coastal redfish across waters from the Pacific Northwest to the Carolina coast and the mountains of Upstate South Carolina.",
      },
      {
        q: "What conservation organizations is Callie involved with?",
        a: "Callie has volunteered and partnered with Casting Carolinas, Women in Waders Upstate, Trout Unlimited, and the Coastal Conservation Association of North Carolina, with a focus on veterans' initiatives and women-focused fly fishing programs.",
      },
    ],
  },
  {
    slug: "whitney-gould",
    name: "Whitney Gould",
    role: "Steelhead Guide & World Champion Spey Caster",
    excerpt:
      "Whitney Gould is an eight-time Spey-O-Rama International Casting Champion and the current women's world record holder in Spey distance casting, with marks of 154 feet on a single cast and 585 feet across a four-cast total. An FFI Certified Casting Instructor in both single- and two-handed disciplines, she guides full-time for steelhead on Idaho's Clearwater River, serves as team captain of the Women's US Fly Casting Team, and is training to compete at the 2026 World Fly Casting Championship.",
    photo: "/images/instructors/whitney-gould.webp",
    credentials: [
      "8× Spey-O-Rama International Casting Champion",
      "Women's World Record — single Spey cast (154 ft) & four-cast total (585 ft)",
      "First woman to break 140-ft single-cast & 500-ft four-cast marks at Spey-O-Rama",
      "World Fly Casting Championship medalist — gold, 15-foot Spey distance event",
      "FFI Certified Casting Instructor — single-handed & two-handed disciplines",
      "Team Captain — Women's US Fly Casting Team",
      "Founder — Gould Standard Fly Casting (video-analysis instruction)",
      "Visiting Guide — Warriors and Quiet Waters (post-9/11 veterans program)",
    ],
    specialties: [
      "Spey & two-handed casting",
      "Steelhead — Idaho's Clearwater River",
      "Saltwater — permit & tarpon on the flats",
      "Video-analysis casting instruction",
      "Competition casting technique",
    ],
    aeo: "Whitney Gould is an eight-time Spey-O-Rama International Casting Champion and the current women's world record holder in Spey distance casting, holding marks of 154 feet on a single cast and 585 feet across a four-cast total. An FFI Certified Casting Instructor in both single-handed and two-handed disciplines, she guides full-time for steelhead on Idaho's Clearwater River and serves as team captain of the Women's US Fly Casting Team. Whitney teaches advanced Spey and two-handed casting at the Fly Fishing Guide School in Bryson City, NC.",
    faqs: [
      {
        q: "How many times has Whitney Gould won the Spey-O-Rama?",
        a: "Whitney Gould has won the Spey-O-Rama International Casting Championship eight times, making her the most decorated women's competitor in the event's history.",
      },
      {
        q: "Does Whitney Gould hold a world record in Spey casting?",
        a: "Yes. Whitney currently holds the women's world records for both the longest single Spey cast (154 feet) and the four-cast distance total (585 feet), set at the Spey-O-Rama championship.",
      },
      {
        q: "What rivers does Whitney Gould guide?",
        a: "Whitney guides two-handed steelhead fishing on Idaho's Clearwater River. Her guiding career also includes Alaska's Kanektok River, the Grande Ronde River, California's Eel River, and Montana's Missouri River.",
      },
      {
        q: "Is Whitney Gould a certified casting instructor?",
        a: "Yes. Whitney is an FFI (Fly Fishers International) Certified Casting Instructor in both single-handed and two-handed (Spey) casting disciplines.",
      },
      {
        q: "Is Whitney Gould competing in the 2026 World Fly Casting Championship?",
        a: "Yes. Whitney is team captain of the Women's US Fly Casting Team and is currently training to compete at the 2026 World Fly Casting Championship.",
      },
    ],
    bio: [
      "Whitney's path to the river wasn't a straight line. She holds a degree in Painting from the Tyler School of Art at Temple University and a Master's in Landscape Architecture from the Rhode Island School of Design. While working as a landscape architect in San Francisco, she joined the Golden Gate Casting Club — recruited onto the women's Spey team almost by accident. She turned out to be a natural, and the rest is history.",
      "Whitney's guiding résumé runs the length of the West. She started in Alaska on the Kanektok River for salmon and trout, then guided the Grande Ronde River in the Pacific Northwest and the Eel River in Northern California for winter steelhead, followed by trout Spey on Montana's Missouri River near Craig. Today, she guides two-handed steelhead fishing on Idaho's Clearwater River.",
      "Whitney is an eight-time Spey-O-Rama International Casting Champion, and at the most recent championship she set new women's world records: a 154-foot single cast and a 585-foot four-cast total. She was also the first woman in Spey-O-Rama history to break both the 140-foot single-cast and 500-foot four-cast marks. On the international stage, she has represented the U.S. at the World Fly Casting Championships, medaling across multiple disciplines including gold in the 15-foot Spey distance event.",
      "An FFI Certified Casting Instructor in both single- and two-handed disciplines, Whitney has taught for organizations including C.F. Burkheimer Spey Schools and runs her own instructional business, Gould Standard Fly Casting, offering personalized video-analysis lessons to anglers worldwide. She is also a longtime visiting guide for Warriors and Quiet Waters, a therapeutic fishing program for post-9/11 combat veterans and their families. Whether she's swinging flies for steelhead in frigid Northwest waters or hunting permit and tarpon tails from the bow of a flats boat, Whitney brings precision, patience, and pure joy to every cast — and that's exactly what students get when they cast with her.",
    ],
  },
  {
    slug: "ken-kastorff",
    name: "Ken Kastorff",
    role: "Founder, Endless River Adventures & Head Fly Fishing Guide",
    excerpt:
      "Ken Kastorff arrived in the Nantahala Gorge in 1975 and has been a force in the outdoor industry ever since. Co-founder of Endless River Adventures and 2021 American Canoe Association Hall of Fame inductee, Ken helped develop foundational kayak teaching techniques and is now the head fly fishing guide for one of western North Carolina's most trusted outfitters.",
    photo: "/images/instructors/ken-kastorff.webp",
    credentials: [
      "American Canoe Association Hall of Fame Inductee — 2021",
      "Co-developer of the C-to-C roll technique",
      "ACA Instructor Clinic Leader — national",
      "Co-founder, Endless River Adventures (est. 1993)",
      "U.S. Forest Service permitted guide — Nantahala River",
      "Head Fly Fishing Guide — Endless River Adventures",
    ],
    specialties: [
      "Nantahala, Tuckasegee & Cheoah rivers",
      "Drift boat & raft rowing",
      "Whitewater kayak instruction",
      "International guided expeditions — Ecuador & South America",
      "Dry fly & streamer fishing",
    ],
    bio: [
      "Ken Kastorff arrived in the Nantahala Gorge in 1975 and has been a force in the outdoor industry ever since. What began as a young man's love affair with wild water has grown into one of the most storied careers in American whitewater and fly fishing — a legacy built on innovation, teaching, and an unbreakable bond with one of the most beautiful river corridors in the eastern United States.",
      "Ken's impact on whitewater kayaking is nothing short of transformational. Over decades of instruction and experimentation, he helped develop many of the foundational techniques used in kayak teaching today, including the widely used C-to-C roll — a contribution that has helped countless paddlers find their confidence on moving water. He led instructor clinics for the American Canoe Association for years, shaping educators and guides across the country. In 2021, the paddling community recognized his lifetime of contributions with induction into the American Canoe Association Hall of Fame.",
      "In 1993, Ken and his partner Juliet Jacobsen Kastorff founded Endless River Adventures, building it from the ground up into one of the most trusted and respected outfitters in Western North Carolina. The company holds one of the rare permits issued by the U.S. Forest Service for guided float trips on the Nantahala River, and has been welcoming anglers, paddlers, and adventurers to the gorge for more than three decades.",
      "As his whitewater career evolved, Ken brought that same gifted, instinctive teaching approach to fly fishing. Today he serves as the head fly fishing guide for Endless River Adventures, leading trips on the Nantahala, Tuckasegee, Little Tennessee, Cheoah, and Snowbird Creek. His international experience runs deep as well, with extensive time pursuing exotic species throughout North and South America and regular guided expeditions to Ecuador.",
      "Those who know Ken well call him the 'Hemingway of the Nantahala' — a nod to his larger-than-life presence on the river, his storytelling, and his almost literary connection to the water he has called home for fifty years.",
    ],
    faqs: [
      {
        q: "What is Endless River Adventures?",
        a: "Endless River Adventures is the Western North Carolina outfitter Ken co-founded in 1993 with Juliet Jacobsen Kastorff. It holds one of the rare U.S. Forest Service permits for guided float trips on the Nantahala River and has served anglers and paddlers for over three decades.",
      },
      {
        q: "What did Ken Kastorff contribute to whitewater kayaking?",
        a: "Ken helped develop many foundational kayak teaching techniques still in use today, including the widely used C-to-C roll. He led instructor clinics for the American Canoe Association for years and was inducted into the ACA Hall of Fame in 2021.",
      },
      {
        q: "What rivers does Ken Kastorff guide on?",
        a: "Ken guides on the Nantahala, Tuckasegee, Little Tennessee, Cheoah, and Snowbird Creek — some of the finest trout water in Western North Carolina.",
      },
      {
        q: "Does Ken Kastorff guide internationally?",
        a: "Yes. Ken has extensive international experience pursuing exotic species throughout North and South America and leads regular guided fishing expeditions to Ecuador.",
      },
      {
        q: "How long has Ken Kastorff been on the Nantahala River?",
        a: "Ken arrived in the Nantahala Gorge in 1975 — giving him over 50 years of continuous connection to one of the most storied river corridors in the eastern United States.",
      },
    ],
  },
  {
    slug: "michael-mauri",
    name: "Michael Mauri",
    role: "Fly Casting Instructor, Innovator & Rod Designer",
    excerpt:
      "Michael Mauri is an internationally recognized fly casting instructor and the developer of the Effective Fly Casting Technique (EFCT) — a casting system built around natural body movement and efficient mechanics. Based in Stuart, Florida, he has taught single-hand, double-hand Spey, and overhead casting across Europe, Canada, and the United States since 1998.",
    photo: "/images/instructors/michael-mauri.webp",
    credentials: [
      "Developer — Effective Fly Casting Technique (EFCT)",
      "International casting instructor since 1998 — Europe, Canada, United States",
      "Owner & Guide — Mauri Flyfishing, Stuart FL",
      "Fly rod design consultant — leading fly rod manufacturer",
      "Handcraft fly rod designer",
      "Technical engineer — aquaculture background",
    ],
    specialties: [
      "Single-hand fly casting",
      "Double-hand Spey casting",
      "Overhead casting",
      "Saltwater — snook, tarpon, redfish (Stuart FL)",
      "Destination casting schools & fly-fishing show presentations",
    ],
    bio: [
      "Michael Mauri is an internationally recognized fly casting instructor and innovator, best known for developing the Effective Fly Casting Technique (EFCT) — a casting system built around natural body movement and efficient mechanics. Based in Stuart, Florida, he has taught single-hand, double-hand Spey, and overhead casting across Europe, Canada, and the United States since 1998, and works today as a guide, casting educator, and fly rod designer through Mauri Flyfishing.",
      "Michael was born and raised in Germany, where he caught his first fish at age six in a small Bavarian stream. By twelve, he was fully immersed in fly fishing — a passion that eventually led him to formal training as a technical engineer in aquaculture. Since 1998, he has traveled internationally, appearing at major fly-fishing shows and conducting single-hand and double-hand casting workshops across Europe, Canada, and the United States, guiding anglers and teaching casting techniques to fly fishers of every skill level.",
      "An innovator by nature, Michael developed his own casting system, the Effective Fly Casting Technique (EFCT). Built around natural body movement and efficient mechanics, EFCT simplifies the learning curve for anglers at every level — from a first cast to advanced refinement. His expertise spans single-hand, double-hand Spey, and overhead casting, and he's known industry-wide for breaking complex casting mechanics down into clear, structured instruction.",
      "Today, Michael runs Mauri Flyfishing out of Stuart, Florida, offering year-round guided saltwater trips for snook, tarpon, redfish, and more, alongside private casting lessons in single- and double-handed disciplines. He also hosts destination casting schools and fishing experiences beyond Florida, and continues to share his knowledge through presentations and special events on the fly-fishing show circuit. Michael consults as a design engineer for a leading fly rod manufacturer and also designs and handcrafts his own line of fly rods.",
      "Michael lives near Stuart, Florida, with his wife, Emily, and their daughter, Emma. Emily is an advocate for the waters they fish, working locally on environmental and water-quality issues affecting their home water. Together, the Mauris have built their business around a simple philosophy: spend as much time as possible on the water, and help every angler who steps aboard become a better caster and a more confident fly fisher — through education, innovation, and a lifetime of experience.",
    ],
    aeo: "Michael Mauri is an internationally recognized fly casting instructor and the developer of the Effective Fly Casting Technique (EFCT), a casting system built around natural body movement and efficient mechanics. Based in Stuart, Florida, he has been teaching single-hand, double-hand Spey, and overhead casting internationally since 1998. He teaches at the Fly Fishing Guide School in Bryson City, NC and guides year-round for snook, tarpon, and redfish through Mauri Flyfishing.",
    faqs: [
      {
        q: "What is the Effective Fly Casting Technique (EFCT)?",
        a: "EFCT is a casting system developed by Michael Mauri that's built around natural body movement and efficient mechanics, designed to simplify the learning curve for fly casters of any skill level.",
      },
      {
        q: "What casting disciplines does Michael Mauri teach?",
        a: "Michael teaches single-hand casting, double-hand (Spey) casting, and overhead casting, working with anglers from complete beginners to advanced casters.",
      },
      {
        q: "Where can I take a casting lesson with Michael Mauri?",
        a: "Michael offers private casting lessons and guided trips out of Stuart, Florida through Mauri Flyfishing, and also teaches at fly-fishing shows and destination casting schools across Europe, Canada, and the United States.",
      },
      {
        q: "Does Michael Mauri design fly rods?",
        a: "Yes. Michael consults as a design engineer for a leading fly rod manufacturer and also designs and handcrafts his own line of fly rods.",
      },
      {
        q: "How long has Michael Mauri been teaching fly casting?",
        a: "Michael has been teaching fly casting internationally since 1998, with decades of experience guiding and instructing across multiple continents.",
      },
    ],
  },
  {
    slug: "will-percy",
    name: "Will Percy",
    role: "Fly Fishing Guide & Community Advocate",
    excerpt:
      "Will Percy has pursued fly fishing across Belize, Spain, Ireland, Mexico, Canada, Alaska, Hawaii, and throughout the continental U.S. — a global angler with deep roots in community service. A graduate of Mac Brown's Fly Fishing Guide School, Will founded a Project Healing Waters chapter in Northeast New Jersey dedicated to helping disabled veterans experience the sport.",
    photo: "/images/instructors/will-percy.webp",
    credentials: [
      "Certificate of Completion — Fly Fishing Guide School, Bryson City NC",
      "Colorado Rowing Certification (2024)",
      "Trained under FFI Casting Masters & Team USA competitors",
      "ACA-certified rowing instruction",
      "Founder — Project Healing Waters chapter, Northeast New Jersey",
      "Active member — Trout Unlimited, FFI, Casting Carolinas",
    ],
    specialties: [
      "Freshwater & saltwater fly fishing",
      "River guiding & drift boat rowing",
      "Beginner & youth instruction",
      "Project Healing Waters & veteran outreach",
      "Fly tying",
    ],
    bio: [
      "Will Percy has been fly fishing since the age of thirteen and has spent the past thirteen years deeply immersed in the sport, its traditions, and the communities that surround it. A passionate angler, fly tier, and educator, he has pursued various freshwater and saltwater species across waters in Belize, Spain, Ireland, Mexico, Canada, Alaska, Hawaii, as well as throughout the lower 48 states in the U.S. These experiences have shaped both his technical skillset and his appreciation for the diverse ecosystems that sustain the sport.",
      "A graduate of Mac Brown's Fly Fishing Guide School in Bryson City, North Carolina, Will trained under Fly Fishers International Casting Masters, Team USA competitors and coaches, ACA-certified rowing instructors, and nationally recognized anglers. His training included guiding techniques, casting, river rescue, boating and rowing, client communication, and on-the-water safety. In 2024, he earned his Colorado Rowing Certification after completing extensive on-the-water instruction and testing.",
      "Beyond guiding, Will is deeply committed to the fly fishing community and the sport's ability to positively impact people's lives. He has been involved with Project Healing Waters for over a decade and founded a local chapter in Northeast New Jersey dedicated to helping disabled veterans experience the therapeutic benefits of fly fishing. He remains active with Trout Unlimited, FFI, and Casting Carolinas — organizations that reflect his belief that the future of the sport depends on giving back to both the water and the people who need it most.",
    ],
    faqs: [
      {
        q: "How did Will Percy become a fly fishing guide?",
        a: "Will completed Mac Brown's Fly Fishing Guide School in Bryson City, NC, training under FFI Casting Masters, Team USA competitors, and ACA-certified rowing instructors. He earned his Colorado Rowing Certification in 2024.",
      },
      {
        q: "What is Project Healing Waters and what is Will Percy's role?",
        a: "Project Healing Waters is a nonprofit that uses fly fishing to support the physical and emotional rehabilitation of disabled veterans. Will founded a local chapter in Northeast New Jersey and has been involved with the program for over a decade.",
      },
      {
        q: "Where has Will Percy fished?",
        a: "Will has pursued freshwater and saltwater species across Belize, Spain, Ireland, Mexico, Canada, Alaska, Hawaii, and throughout the lower 48 states.",
      },
      {
        q: "What organizations is Will Percy active in?",
        a: "Will is an active member of Trout Unlimited, Fly Fishers International (FFI), and Casting Carolinas — organizations that reflect his commitment to conservation and community in fly fishing.",
      },
      {
        q: "Is Will Percy a good instructor for beginners?",
        a: "Yes. Will specializes in beginner and youth instruction and approaches every outing with a genuine commitment to building confidence and sharing the sport's deeper traditions.",
      },
    ],
  },
  {
    slug: "tom-rueping",
    name: "Tom Rueping",
    role: "FFI Master Certified Casting Instructor",
    excerpt:
      "Tom Rueping has cast a fly from Alaska to the Bahamas to Costa Rica — and his global experience shows up in every lesson. An FFI Master Certified Casting Instructor nominated for both Instructor of the Year (2014) and Mentor of the Year (2016), Tom serves as the FFI Southeastern Council's Casting Instructor Certification Program Coordinator and leads fly fishing courses at Lee University.",
    photo: "/images/instructors/tom-rueping.webp",
    credentials: [
      "Master Certified Casting Instructor — Fly Fishers International (FFI)",
      "FFI Instructor of the Year nominee — 2014, Southeastern Council",
      "FFI Mentor of the Year nominee — 2016",
      "FFI Casting Instructor Certification Program Coordinator — Southeastern Council",
      "Lead Instructor — Fly Fishing Courses, Lee University, Cleveland TN",
      "Instructor — Atlanta Fly Fishing School",
      "Assistant Program Lead — Chattanooga Project Healing Waters",
      "Past President — Appalachian Chapter, Trout Unlimited",
    ],
    specialties: [
      "Advanced fly casting mechanics",
      "Instructor certification preparation (CI & MCI exams)",
      "Saltwater — Bahamas flats",
      "Alaska & Rocky Mountain West",
      "Therapeutic fly fishing — Project Healing Waters",
    ],
    bio: [
      "Tom Rueping has cast a fly on some of the most extraordinary waters on the planet. From the wild rivers of Alaska to the saltwater flats of the Bahamas, the Rocky Mountain West to the Pacific coast of Costa Rica, and deep into Mexico and beyond — Tom is a true global angler whose pursuit of fish across vastly different environments has given him a breadth of experience that few instructors can match.",
      "Tom holds the distinction of Fly Fishers International Master Certified Casting Instructor, the pinnacle credential in fly casting education, and his peers have taken notice. The FFI Southeastern Council nominated Tom for Instructor of the Year in 2014, recognizing his remarkable success in training and developing other casters. Two years later, the FFI nominated him for Mentor of the Year in 2016 — an honor driven by his exceptional rate of candidates successfully passing their Certified Instructor and Master Certified Instructor exams under his guidance.",
      "That gift expresses itself in a casting style that longtime students and fellow instructors describe as exceptionally smooth — a caster whose loops and timing seem to make the whole thing look effortless, and whose ability to break down the mechanics behind that effortlessness is equally impressive. Everyone who steps into a lesson with Tom comes away enriched, regardless of where they started.",
      "Tom currently serves as the Casting Instructor Certification Program Coordinator for the FFI Southeastern Council, a leadership role that includes coordinating testing events and instructor gatherings. He is also the lead instructor for fly fishing courses at Lee University in Cleveland, Tennessee, an instructor at the Atlanta Fly Fishing School, and an Assistant Program Lead for the Chattanooga Project Healing Waters program — where he brings the same rigorous, patient instruction to veterans that he brings to his most advanced casting students.",
      "A past President of the Appalachian Chapter of Trout Unlimited, Tom's commitment to conservation is as deep as his commitment to teaching. Whether he is coordinating a certification exam, guiding a veteran to their first trout, or helping a struggling caster finally find their loop, Tom brings the same steady, generous, and enriching presence to everything he does.",
    ],
    faqs: [
      {
        q: "What casting credential does Tom Rueping hold?",
        a: "Tom holds the Master Certified Casting Instructor designation from Fly Fishers International — the highest casting credential the organization bestows.",
      },
      {
        q: "What FFI awards has Tom Rueping been nominated for?",
        a: "Tom was nominated for FFI Instructor of the Year in 2014 by the Southeastern Council, and for FFI Mentor of the Year in 2016 — both driven by his exceptional success rate guiding students through the Certified Instructor and Master Certified Instructor exams.",
      },
      {
        q: "Where does Tom Rueping teach?",
        a: "Tom leads fly fishing courses at Lee University in Cleveland, TN, teaches at the Atlanta Fly Fishing School, and serves as the FFI Southeastern Council's Casting Instructor Certification Program Coordinator.",
      },
      {
        q: "Is Tom Rueping involved with veterans programs?",
        a: "Yes. Tom serves as Assistant Program Lead for Chattanooga Project Healing Waters, helping veterans experience the therapeutic benefits of fly fishing.",
      },
      {
        q: "What is Tom Rueping's Trout Unlimited involvement?",
        a: "Tom is a past President of the Appalachian Chapter of Trout Unlimited, reflecting a conservation commitment as deep as his dedication to teaching.",
      },
    ],
  },
  {
    slug: "jason-smith",
    name: "Jason Smith",
    role: "Fly Fishing Instructor",
    excerpt:
      "Growing up fishing Appalachian streams with his father, Jason Smith developed an early connection to moving water and wild places. After a career as an Army officer took him far from those beginnings, fly fishing eventually became a way back. Now living in western North Carolina, Jason brings a thoughtful, adaptable approach to the water and a genuine enjoyment of helping others learn—not simply what works, but why.",
    photo: "/images/instructors/jason-smith.webp",
    credentials: [
      "Graduate — Fly Fishing Guide School",
      "Licensed Fishing Guide — North Carolina",
      "Graduate — Advanced Fly Casting Course",
      "Casting Instructor (CI) Candidate — Fly Fishers International",
    ],
    specialties: [
      "Backcountry & Small Stream Fishing",
      "Reading Water & Adaptation",
      "Beginner & Intermediate Instruction",
      "Micro-Leader Euro Nymphing",
      "Wet Fly Fishing",
    ],
    bio: [
      "Growing up fishing Appalachian streams with his father, Jason developed an early appreciation for moving water and the lessons it offers to those willing to slow down and observe. Those early trips ranged from day outings to backpacking and canoe-camping adventures throughout West Virginia and the surrounding states. More than the fishing itself, they established a connection to wild places—and to the people with whom we share them—that would stay with him long after childhood.",
      "Fishing largely disappeared from Jason's life for many years as school, family, and a career as an Army officer took him far from the streams of his childhood. Eventually, fly fishing became a way back. What began with a basic fly rod, a book, and considerable trial and error grew into a serious pursuit and a renewed connection to the Appalachian mountains of his youth. After retiring to western North Carolina, years spent exploring the region's waters in every season have continued to shape the way he fishes.",
      "Jason is less attached to any particular technique than to understanding the water and adapting to what conditions require. He is equally comfortable on larger rivers and small, heavily canopied mountain streams, changing tactics, tackle, and approach with water, weather, season, and terrain. His learning has combined extensive time on the water with formal training through Mac Brown Fly Fish and opportunities to learn from accomplished anglers and instructors. He continues to pursue Fly Fishers International Certified Instructor credentials.",
      "That same curiosity shapes Jason's approach to teaching. He enjoys helping anglers understand not simply what to do, but why something works, and believes good instruction begins with observing both the water and the person learning. His approach is patient and adaptable, with an emphasis on building understanding, confidence, and an angler's ability to make thoughtful decisions independently.",
      "Through volunteer work focused on mentoring and conservation, Jason also values the opportunities fly fishing creates for shared experience, connection, and stewardship. He believes appreciation for wild places carries with it a responsibility to care for them—and that some of the most meaningful days on the water are measured by more than the fish brought to hand.",
    ],
  },
  {
    slug: "cassie-spurling",
    name: "Cassie Spurling",
    role: "Fly Fishing Guide & Instructor",
    excerpt:
      "Raised in the mountains of western North Carolina, Cassie Spurling was introduced to fly fishing before she could walk and earned a fly fishing scholarship to Lee University — a testament to the depth of skill she developed on her home waters. She holds guide licenses in both North Carolina and North Georgia and has expanded her angling footprint to Patagonia, Idaho, and beyond.",
    photo: "/images/instructors/cassie-spurling.webp",
    credentials: [
      "Licensed Fly Fishing Guide — North Carolina",
      "Licensed Fly Fishing Guide — North Georgia",
      "Fly Fishing Scholarship recipient — Lee University, Cleveland, TN",
      "Active conservation advocate — southern Appalachian waters",
    ],
    specialties: [
      "Western North Carolina mountain streams",
      "North Georgia trout waters",
      "Dry fly & nymph techniques",
      "Patagonia & Idaho destination fishing",
      "Women's fly fishing instruction",
    ],
    bio: [
      "Some anglers find fly fishing. Cassie Spurling was born into it. Raised in the mountains of western North Carolina, Cassie was introduced to the outdoors almost before she could walk — and by the age of six, she was already wading streams and casting flies in the rivers, creeks, and lakes that define some of the most beautiful fishing country in the eastern United States. What started as a childhood adventure has become a lifelong calling.",
      "Growing up in the Southern Appalachians gave Cassie an early and deep education in mountain waters. The rivers and streams of western North Carolina and the north Georgia region were her classroom, and she learned to read water, match hatches, and present a fly with the kind of intuitive skill that only comes from years of genuine immersion in the sport. That foundation proved strong enough to earn her a fly fishing scholarship to Lee University in Cleveland, Tennessee — a testament to how seriously she had already taken the craft.",
      "But Cassie's world has never been limited to home waters. Over the past decade, she has dramatically expanded her angling footprint, making regular journeys to some of the most celebrated fly fishing destinations on the planet. Her travels to Patagonia and Idaho have taken her into breathtaking, remote, and often demanding fishing environments — experiences that have sharpened her technical skills and broadened her understanding of fish behavior across vastly different ecosystems.",
      "Today, Cassie holds fishing guide licenses in both North Carolina and North Georgia, and she remains deeply rooted in the mountain communities where her love of the sport first took hold. She is actively involved in conservation efforts aimed at protecting the streams and rivers she cherishes, and is committed to ensuring that the sport of fly fishing has a vibrant, healthy future for generations to come.",
      "More than a guide, Cassie Spurling is an ambassador — for the rivers, for the mountains, and for a way of life built around wild places and clean water. She lives what she loves, and she loves sharing every cast of it.",
    ],
    faqs: [
      {
        q: "How did Cassie Spurling get into fly fishing?",
        a: "Cassie was introduced to fly fishing almost before she could walk — raised in the mountains of western North Carolina, she was wading streams and casting flies by age six.",
      },
      {
        q: "What scholarship did Cassie Spurling earn?",
        a: "Cassie earned a fly fishing scholarship to Lee University in Cleveland, Tennessee — a testament to the depth of skill she developed on her home waters in western North Carolina.",
      },
      {
        q: "Where is Cassie Spurling licensed to guide?",
        a: "Cassie holds guide licenses in both North Carolina and North Georgia, and guides on the mountain streams of western NC and the north Georgia trout region.",
      },
      {
        q: "Has Cassie Spurling fished internationally?",
        a: "Yes. Cassie has made regular journeys to Patagonia and Idaho — experiences that have sharpened her technical skills and broadened her understanding of fish behavior across very different ecosystems.",
      },
      {
        q: "Is Cassie Spurling involved in conservation?",
        a: "Yes. Cassie is actively involved in conservation efforts focused on protecting the streams and rivers of the Southern Appalachians, and is committed to the future of fly fishing for generations to come.",
      },
    ],
  },
  {
    slug: "josh-stephens",
    name: "Josh Stephens",
    role: "Competitive Angler & Fly Fishing Guide",
    excerpt:
      "Forged on the Nantahala River as a teenager and sharpened on the storied waters of Colorado's San Juan Mountains, Josh Stephens has represented the United States in multiple World Fly Fishing Championships. He has brought that world-class competitive knowledge home to Western North Carolina, helping build a genuine hotbed of competition-style angling in the region.",
    photo: "/images/instructors/josh-stephens.webp",
    credentials: [
      "Fly Fishing Team USA — multiple World Fly Fishing Championship competitor",
      "Competitive angler since 2007",
      "Former guide — Durango, Colorado (San Juan Mountains waters)",
      "Degree — Western Carolina University",
      "Western NC competition angling community builder",
    ],
    specialties: [
      "Euro nymphing & competition techniques",
      "Nantahala River",
      "Dry fly presentation",
      "Tailwater trout fishing",
      "Drift calculation & reading complex currents",
    ],
    bio: [
      "Some anglers are defined by the beauty of the cast. Others by the places they've fished. Josh is defined by something rarer — an almost scientific obsession with efficiency, technique, and the relentless pursuit of putting fish in the net. It is a mindset forged on the Nantahala River as a teenager, sharpened in the mountains of Colorado, and tested on the world stage representing the United States of America.",
      "Josh's story begins where so many great Western North Carolina fishing stories do — on the banks of the Nantahala. As a high school kid, he wasn't just fishing for fun; he was studying the river, learning its moods, its seams, and its fish with the kind of focused attention that hinted at things to come. That early apprenticeship on one of the Southeast's most productive tailwaters gave him a foundation that no classroom could replicate.",
      "After earning his degree at Western Carolina University, Josh headed west to Durango, Colorado, where he spent years guiding on some of the most storied trout water in the country. The rivers of the San Juan Mountains demanded a different kind of precision — bigger flows, spookier fish, and a clientele that expected results. Josh delivered, building his reputation as a guide who could consistently produce in conditions that humbled less experienced anglers.",
      "It is his work with Fly Fishing Team USA that has truly set Josh apart. A competitive angler since 2007, Josh has represented his country in multiple World Fly Fishing Championships, competing against the best anglers on the planet in venues that test every dimension of an angler's skill. The competition circuit is unforgiving, and the anglers who thrive on it develop a level of technical understanding that simply cannot be acquired any other way.",
      "Josh has brought that world-class competitive knowledge home to Western North Carolina, playing an instrumental role in building what has become a genuine hotbed of competition-style angling in the region. When Josh guides, clients don't just catch fish — they learn the why behind every decision, every presentation, and every drift.",
    ],
    faqs: [
      {
        q: "Has Josh Stephens competed in the World Fly Fishing Championship?",
        a: "Yes. Josh has represented Fly Fishing Team USA in multiple World Fly Fishing Championships, competing against the best anglers on the planet and bringing that world-class technical knowledge back to Western North Carolina.",
      },
      {
        q: "Where did Josh Stephens guide before returning to Western NC?",
        a: "After earning his degree at Western Carolina University, Josh spent years guiding in Durango, Colorado on the storied trout waters of the San Juan Mountains — demanding fisheries that sharpened his precision and reputation.",
      },
      {
        q: "Where did Josh Stephens grow up fishing?",
        a: "Josh grew up on the Nantahala River in Western North Carolina, studying its seams, currents, and fish from a young age — a foundation that shaped his technical, competition-focused approach to fly fishing.",
      },
      {
        q: "What techniques does Josh Stephens specialize in?",
        a: "Josh specializes in Euro nymphing and competition-style techniques, dry fly presentation, tailwater trout fishing, and reading complex currents — skills refined through years on the international competition circuit.",
      },
      {
        q: "What does guiding with Josh Stephens look like?",
        a: "With Josh, clients don't just catch fish — they learn the why behind every decision, every presentation, and every drift. His guiding is as much education as it is experience.",
      },
    ],
  },
  {
    slug: "wanda-taylor",
    name: "Wanda Taylor",
    role: "Master Certified Casting Instructor & Professional Guide",
    excerpt:
      "Wanda Taylor became the first woman in history to earn the title of Master Certified Casting Instructor through Fly Fishers International — the highest casting credential the organization offers. A professional guide and outdoor media personality since the 1980s, she was also the first woman inducted into the Southern Fly Fishing Hall of Fame and holds multiple IGFA Saltwater World Records.",
    photo: "/images/instructors/wanda-taylor.webp",
    credentials: [
      "First woman — Master Certified Casting Instructor, Fly Fishers International (FFI)",
      "First woman inducted — Southern Fly Fishing Hall of Fame",
      "Multiple IGFA Saltwater World Records",
      "Professional guide & casting instructor since the 1980s",
      "Ambassador — Casting Carolinas & Project Healing Waters",
      "Outdoor writer — Dun Magazine & Girls, Guns & Rods",
    ],
    specialties: [
      "Advanced fly casting mechanics",
      "Hiwassee River, Reliance TN",
      "Saltwater & freshwater world destinations",
      "Women's fly fishing instruction & empowerment",
      "Private casting lessons",
    ],
    bio: [
      "Wanda Taylor has been making waves in the fly fishing world since the 1980s — and she shows no signs of slowing down. With decades of experience as a professional guide and fly casting instructor, Wanda has built a reputation as one of the most accomplished and influential figures the sport has ever seen.",
      "Her reach extends far beyond the riverbank. Wanda has been featured as an angler and host across an impressive range of media, including national magazines, radio broadcasts, television programs, podcasts, and even computer fly fishing games — bringing her expertise and enthusiasm to audiences from coast to coast. As an outdoor writer for Dun Magazine and Girls, Guns & Rods, she continues to share her knowledge and inspire readers both on and off the water.",
      "Among her many achievements, one stands above the rest: Wanda became the first woman in history to earn the title of Master Certified Casting Instructor through Fly Fishers International — the highest casting credential the organization offers. It is a distinction that speaks volumes about her technical mastery and her lifelong commitment to the craft. She has since channeled that expertise into teaching professional guides, students, and beginners for many decades.",
      "An avid world traveler, Wanda has pursued fish on the fly across fresh and saltwater destinations around the globe, accumulating an impressive list of IGFA Saltwater World Records along the way. Whether she's chasing bonefish on a tropical flat or teaching a first cast on a quiet river, her passion for the sport is unmistakable.",
      "That passion is perhaps most evident in her dedication to women and girls in fly fishing. Empowering independent anglers has long been her calling, and it is a mission she lives out daily. She currently offers private casting instruction and instructional guiding on the Hiwassee River near Reliance, Tennessee, as well as private one-hour casting lessons on a beautiful private lake estate. She is a proud ambassador for Casting Carolinas and Project Healing Waters, and holds the distinguished honor of being the first woman inducted into the Southern Fly Fishing Hall of Fame.",
    ],
    faqs: [
      {
        q: "What historic first did Wanda Taylor achieve in fly casting?",
        a: "Wanda became the first woman in history to earn the title of Master Certified Casting Instructor through Fly Fishers International — the highest casting credential the organization offers.",
      },
      {
        q: "What Hall of Fame honor does Wanda Taylor hold?",
        a: "Wanda was the first woman ever inducted into the Southern Fly Fishing Hall of Fame — a landmark recognition of her decades of impact on the sport.",
      },
      {
        q: "Does Wanda Taylor hold any world fishing records?",
        a: "Yes. Wanda holds multiple IGFA Saltwater World Records, accumulated through years of pursuing fish on the fly across fresh and saltwater destinations around the globe.",
      },
      {
        q: "Where does Wanda Taylor teach and guide?",
        a: "Wanda offers private casting instruction and instructional guiding on the Hiwassee River near Reliance, Tennessee, and private one-hour casting lessons on a beautiful private lake estate.",
      },
      {
        q: "What is Wanda Taylor's focus in women's fly fishing?",
        a: "Empowering independent anglers — especially women and girls — has been Wanda's calling for decades. She is an ambassador for Casting Carolinas and Project Healing Waters and has dedicated her career to building confidence in anglers of all backgrounds.",
      },
    ],
  },
  {
    slug: "patrick-weaver",
    name: "Patrick Weaver",
    role: "Fly Fishing Instructor & Author",
    excerpt:
      "With over 40 years on the water and 30 years of instruction, Patrick Weaver has fly fished in more than 20 states — from steelhead in New York to snook in Florida. In 2025 he published Hatches of Pisgah Forest: A Guide to Insects and the Flies that Catch Them, the culmination of a career built on deep entomological knowledge and a passion for teaching presentation.",
    photo: "/images/instructors/patrick-weaver.webp",
    credentials: [
      "Author: Hatches of Pisgah Forest (2025)",
      "BS, Secondary Education (Biology) — Indiana University South Bend",
      "MA, Integrated Judgment in Risk Management — Prescott College",
      "Former High School Biology & Physics Teacher",
      "Aquatic Macroinvertebrate Monitor — State of North Carolina",
      "Fly fishing curriculum developer — The Asheville School",
      "30+ years fly fishing instruction",
    ],
    specialties: [
      "Entomology & hatch matching",
      "Dry fly presentation",
      "Western NC & Pisgah Forest waters",
      "Steelhead & warmwater fly fishing",
      "Fly fishing curriculum development",
    ],
    bio: [
      "Patrick's outdoor education began on the banks of a trout stream in northern Indiana, where he grew up hunting, fishing, and devouring his father's copies of Sports Afield magazine. A series of articles on fly fishing in those pages sparked a lifelong obsession, and he soon caught his first trout on a Royal Wulff Wet Fly — a moment that set the course of his life.",
      "At age 19, Patrick moved to Colorado, where a fortunate introduction to his fly fishing landlord Tom accelerated his development on the water. Tom was a master dry fly angler who introduced Patrick to the Front Range fisheries and the art of a fly-first presentation — a foundation that remains central to his teaching philosophy today. When Patrick and his wife relocated to North Carolina in 2002, another mentor entered the picture: Joe, a gifted nymph angler who taught Patrick to read water from the bottom up.",
      "Over the decades, Patrick has fly fished in more than 20 states, pursuing steelhead in New York, snook in Florida, smallmouth bass, and trout across wildly varied waters — from the demanding Elk River in West Virginia to high-country streams in Wyoming's Bighorn Mountains. That broad experience informs everything he teaches.",
      "Patrick's formal education deepened his credibility as an instructor. He holds a BS in Secondary Education with a major in Biology from Indiana University South Bend and an MA with a specialization in Integrated Judgment in Risk Management from Prescott College. He taught high school biology and physics, monitored rivers for the State of North Carolina surveying aquatic macroinvertebrates, and developed a fly fishing curriculum for the Asheville School.",
      "In 2025, Patrick published Hatches of Pisgah Forest: A Guide to Insects and the Flies that Catch Them, a practical field guide presenting major eastern hatches alongside his proven system for fly selection and presentation. With more than 40 years on the water and 30 years of instruction, Patrick brings rare depth — and genuine passion — to every angler he meets.",
    ],
    faqs: [
      {
        q: "What book did Patrick Weaver publish?",
        a: "In 2025, Patrick published Hatches of Pisgah Forest: A Guide to Insects and the Flies that Catch Them — a practical field guide presenting major eastern hatches alongside his proven system for fly selection and presentation.",
      },
      {
        q: "What is Patrick Weaver's educational background?",
        a: "Patrick holds a BS in Secondary Education with a major in Biology from Indiana University South Bend and an MA in Integrated Judgment in Risk Management from Prescott College. He taught high school biology and physics before turning full-time to fly fishing instruction.",
      },
      {
        q: "How long has Patrick Weaver been instructing?",
        a: "Patrick has over 30 years of fly fishing instruction experience and more than 40 years on the water, with a background in entomology and formal science education that sets his teaching apart.",
      },
      {
        q: "What states has Patrick Weaver fished?",
        a: "Patrick has fly fished in more than 20 states, pursuing steelhead in New York, snook in Florida, smallmouth bass, and trout across waters from West Virginia to the Bighorn Mountains of Wyoming.",
      },
      {
        q: "What conservation work does Patrick Weaver do?",
        a: "Patrick has served as an Aquatic Macroinvertebrate Monitor for the State of North Carolina, surveying rivers and contributing to water quality data that supports trout conservation.",
      },
    ],
  },
  {
    slug: "simons-welter",
    name: "Simons Welter",
    role: "Fly Fishing Guide, Brookings Anglers",
    excerpt:
      "With more than 20 years of fly fishing experience and over 14 years guiding for Brookings Anglers in Cashiers, NC, Simons Welter is one of the most respected guides in the Southeast. A past president of the Mountain Bridge Chapter of Trout Unlimited and featured in Garden & Gun's Southern Women, she is especially known for her love of remote high mountain streams.",
    photo: "/images/instructors/simons-welter.webp",
    credentials: [
      "Clemson University graduate",
      "14+ years professional guide — Brookings Anglers, Cashiers NC",
      "Past President — Mountain Bridge Chapter, Trout Unlimited",
      "Volunteer — Casting Carolinas",
      "Volunteer — Casting for Recovery",
      "Volunteer — Pisgah Center for Wildlife Education",
      "Volunteer — Becoming an Outdoors Woman",
      "Featured: Eastern Fly Fishing, Blue Ridge Outdoors",
      "Featured: Southern Women: More Than 100 Stories of Innovators, Artists and Icons (Garden & Gun)",
    ],
    specialties: [
      "Remote high mountain streams — WNC & Upstate SC",
      "Native brook trout on dry fly",
      "First-time angler instruction",
      "Conservation & mentorship programs",
      "Women's fly fishing programs",
    ],
    bio: [
      "Simons Welter is a Clemson University graduate, devoted wife, mother of two, and proud grandmother of two who was born in Statesville, North Carolina, and now calls Brevard, North Carolina home. With more than 20 years of fly fishing experience and over 14 years guiding for Brookings Anglers in Cashiers, North Carolina, Simons has built a reputation as one of the most respected and passionate fly fishing guides in the Southeast.",
      "An avid angler whose travels have taken her across the United States and to multiple countries in pursuit of fish and adventure, Simons is especially known for her love of the remote high mountain streams of Western North Carolina and Upstate South Carolina. Whether targeting native brook trout on a dry fly or introducing a first-time angler to the sport, she approaches every day on the water with enthusiasm, patience, and a genuine appreciation for the outdoors.",
      "Simons is deeply committed to conservation, education, and mentoring others through fly fishing. She has volunteered and worked extensively with organizations including Casting Carolinas, Casting for Recovery, the Pisgah Center for Wildlife Education, and Becoming an Outdoors Woman. She is also a longtime member and past president of the Mountain Bridge Chapter of Trout Unlimited and has volunteered with numerous DNR conservation projects throughout the region.",
      "Simons is known for her upbeat personality, tireless energy, and ability to connect with anglers of every experience level — from first-time fly fishers to experienced anglers looking to refine their techniques. She believes the best days on the water come from appreciating the entire experience — the river, the wildlife, the learning process, and the people you share it with.",
      "Her expertise and dedication have earned her features in publications including Eastern Fly Fishing and Blue Ridge Outdoors, and she was also featured in the book Southern Women: More Than 100 Stories of Innovators, Artists and Icons by Garden & Gun.",
    ],
    aeo: "Simons Welter is a professional fly fishing guide with Brookings Anglers in Cashiers, NC, bringing over 20 years of angling experience and 14+ years of guiding to the Fly Fishing Guide School in Bryson City. A past president of the Mountain Bridge Chapter of Trout Unlimited, she specializes in the remote high mountain streams of Western North Carolina and Upstate South Carolina and is deeply committed to conservation, mentorship, and women's fly fishing programs.",
    faqs: [
      {
        q: "How long has Simons Welter been guiding?",
        a: "Simons has been guiding professionally for over 14 years with Brookings Anglers in Cashiers, NC, and has more than 20 years of personal fly fishing experience.",
      },
      {
        q: "What waters does Simons Welter specialize in?",
        a: "Simons is especially known for her expertise on the remote high mountain streams of Western North Carolina and Upstate South Carolina, where she loves targeting native brook trout on a dry fly.",
      },
      {
        q: "Is Simons Welter involved in conservation?",
        a: "Yes — Simons is a past president of the Mountain Bridge Chapter of Trout Unlimited and has volunteered extensively with Casting Carolinas, Casting for Recovery, the Pisgah Center for Wildlife Education, Becoming an Outdoors Woman, and numerous DNR conservation projects.",
      },
      {
        q: "Has Simons Welter been featured in publications?",
        a: "Simons has been featured in Eastern Fly Fishing and Blue Ridge Outdoors, and was included in Southern Women: More Than 100 Stories of Innovators, Artists and Icons, published by Garden & Gun.",
      },
      {
        q: "Is Simons Welter a good instructor for beginners?",
        a: "Absolutely. Simons is known for her patience, upbeat personality, and ability to connect with anglers of every experience level — from first-time fly fishers to experienced anglers refining their technique.",
      },
    ],
  },
  {
    slug: "woody-woodruff",
    name: "Grant \"Woody\" Woodruff",
    role: "Whitewater Professional & River Guide",
    excerpt:
      "Grant \"Woody\" Woodruff is a quietly legendary figure in Western North Carolina outdoor circles — a certified river rescue and rafting instructor with 30+ years leading clinics from the Nantahala Gorge to the rivers of Chile to the Grand Canyon. Former VP at the Nantahala Outdoor Center and current Marketing Director at Wildwater Adventure Centers, Woody is as formidable in the boardroom as on the water.",
    photo: "/images/instructors/woody-woodruff.webp",
    credentials: [
      "Certified River Rescue & Rafting Instructor — Oar and Paddle",
      "30+ years instructing river clinics in Western North Carolina",
      "Former Vice President & Board of Directors — Nantahala Outdoor Center (NOC)",
      "Marketing Director — Wildwater Adventure Centers",
      "Led adventure travel expeditions — Chile, Grand Canyon, international rivers",
    ],
    specialties: [
      "River rescue & whitewater safety",
      "Raft & drift boat instruction — oar and paddle",
      "Fly fishing — Chattooga River & Carolina mountain streams",
      "International river expedition leadership",
      "Guide program development",
    ],
    bio: [
      "There are whitewater professionals, and then there is Woody. Grant 'Woody' Woodruff is the kind of river man who has forgotten more about moving water than most people will ever learn — a quietly legendary figure in the Western North Carolina outdoor community whose influence stretches from the rapids of the Nantahala Gorge to the wild rivers of Chile to the thundering corridors of the Grand Canyon. Over more than three decades, Woody has built a reputation as one of the most skilled and respected river professionals in the country.",
      "Woody's expertise covers virtually every discipline of rivercraft. For over 30 years, he has instructed clinics in all types of river craft and taught river rescue throughout Western North Carolina — equipping guides, instructors, and everyday paddlers with the skills and confidence to handle whatever a river throws at them. His certifications reflect the depth of that commitment: Woody holds credentials as a Certified River Rescue and Rafting Instructor in both Oar and Paddle disciplines.",
      "Since the mid-1980s, Woody has led adventure travel trips to some of the most remote and spectacular river destinations on earth — from the rushing rivers of Chile to the iconic grandeur of the Grand Canyon. These are not casual excursions. They are serious expeditions requiring serious leadership, and Woody has navigated every one of them with the calm, competent authority of someone who has seen it all and handled it gracefully.",
      "Off the river, Woody brings that same expertise and passion to the broader outdoor industry. He currently serves as Marketing Director for Wildwater Adventure Centers and previously held the position of Vice President and Board of Directors member at the Nantahala Outdoor Center — two of the most prominent names in American whitewater. His influence on the industry at an organizational level has been as significant as his impact on the water.",
      "When he's not on the job, you'll find Woody near his home on the Chattooga River in South Carolina doing what he loves most — fly fishing the mountain streams of the Carolinas with the same quiet precision he brings to everything else.",
    ],
    faqs: [
      {
        q: "What certifications does Woody Woodruff hold?",
        a: "Woody is a Certified River Rescue and Rafting Instructor in both Oar and Paddle disciplines — credentials that reflect over 30 years of instructing river clinics in Western North Carolina.",
      },
      {
        q: "What was Woody Woodruff's role at the Nantahala Outdoor Center?",
        a: "Woody served as Vice President and member of the Board of Directors at the Nantahala Outdoor Center (NOC) — one of the most prominent whitewater organizations in the country.",
      },
      {
        q: "Where has Woody Woodruff led international river expeditions?",
        a: "Since the mid-1980s, Woody has led adventure travel trips to Chile, the Grand Canyon, and other remote international river destinations — serious expeditions requiring serious leadership.",
      },
      {
        q: "What does Woody Woodruff do professionally today?",
        a: "Woody currently serves as Marketing Director for Wildwater Adventure Centers, one of the Southeast's leading outdoor adventure companies.",
      },
      {
        q: "Where does Woody Woodruff fish?",
        a: "Woody lives near the Chattooga River in South Carolina and fly fishes the mountain streams of the Carolinas — bringing the same quiet precision to angling that he brings to everything else on the water.",
      },
    ],
  },
  {
    slug: "jerry-yates",
    name: "Jerry Yates",
    role: "Fly Fishing Guide & Inventor of Frog's Fanny",
    excerpt:
      "Jerry Yates is a 27-year law enforcement veteran turned full-time fly fishing guide in western North Carolina — and the inventor of Frog's Fanny Fly Treatment, the beloved powder formula that has been keeping flies floating high since 1996. An FFI Certified Casting Instructor and FFGS graduate, Jerry now runs Stream Team Anglers out of the mountains he calls home.",
    photo: "/images/instructors/jerry-yates.webp",
    credentials: [
      "Certified Casting Instructor — Fly Fishers International (FFI)",
      "Certificate of Completion — Fly Fishing Guide School, Bryson City NC",
      "Licensed Guide — North Carolina",
      "Inventor of Frog's Fanny Fly Treatment (est. 1996)",
      "Founder, Stream Team Anglers",
      "27-year Law Enforcement Officer — Ohio",
    ],
    specialties: [
      "Aquatic entomology & dry fly technique",
      "Water-reading & hatch identification",
      "Western NC mountain streams",
      "Beginner & youth fly fishing instruction",
      "Dry fly floatation & presentation",
    ],
    bio: [
      "Jerry's love affair with fly fishing began in the Rocky Mountains, where he spent his youth wading cold, clear streams and learning to read the water with the patience and precision that would define his life. As a young adult, he ventured east, discovering the rich and diverse fisheries of West Virginia, Pennsylvania, Ohio, and New York — waters that deepened his passion and broadened his expertise.",
      "For 27 years, Jerry served the community as a law enforcement officer in Ohio, but the river was always calling. Throughout his career, he never stopped fishing, studying, or teaching. It was during his years in the mid-Atlantic region that Jerry identified a problem every dry fly angler knows all too well: flies that sink, look waterlogged, and fish poorly after even a single strike. Frustrated by the lack of an effective solution, he took matters into his own hands.",
      "In 1996, Jerry created Frog's Fanny Fly Treatment — an innovative powder formula designed to keep artificial flies floating high and fishing properly, even after being slimed by a fish. No pre-treating required. No need to swap out a perfectly good fly. Just a quick application and you're back in the water. With the guidance of his father-in-law, Jerry learned to bring Frog's Fanny to market, and the product quickly found its way into the hands of fly fishers across the United States and beyond.",
      "After retiring from law enforcement, Jerry made the natural choice: he packed up and moved to the mountains of western North Carolina to live what he calls 'the dream' — full-time fly fishing in some of the most stunning landscapes the eastern U.S. has to offer. That transition also gave birth to Stream Team Anglers, the new home of Frog's Fanny and a professional guide service and fly fishing school rooted in Jerry's decades of hard-earned knowledge.",
      "As a guide and instructor, Jerry brings a rare depth of expertise. His mastery of aquatic insect entomology, water-reading, and casting technique gives clients a genuine education on the water. He holds certification as a Casting Instructor through Fly Fishers International and earned his Certificate of Completion from the Fly Fishing Guide School in Bryson City, NC. Above all, Jerry loves introducing newcomers to the sport — hoping to spark a love of fly fishing that will carry forward for generations.",
    ],
    faqs: [
      {
        q: "What is Frog's Fanny and who invented it?",
        a: "Frog's Fanny is a powder fly treatment invented by Jerry Yates in 1996 that keeps artificial flies floating high and fishing properly — even after being slimed by a fish. No pre-treating required. It has become a beloved staple among dry fly anglers across the United States and beyond.",
      },
      {
        q: "Is Jerry Yates a certified casting instructor?",
        a: "Yes. Jerry holds the Certified Casting Instructor credential from Fly Fishers International and earned his Certificate of Completion from Mac Brown's Fly Fishing Guide School in Bryson City, NC.",
      },
      {
        q: "What is Stream Team Anglers?",
        a: "Stream Team Anglers is Jerry's guide service and fly fishing school based in the mountains of western North Carolina — and the current home of Frog's Fanny Fly Treatment.",
      },
      {
        q: "What did Jerry Yates do before guiding?",
        a: "Jerry served for 27 years as a law enforcement officer in Ohio. Throughout his career, he never stopped fishing, studying, or teaching — and after retiring, he moved to the mountains of western North Carolina to guide full-time.",
      },
      {
        q: "What does Jerry Yates specialize in teaching?",
        a: "Jerry specializes in aquatic entomology, hatch identification, water-reading, and dry fly technique. He especially loves introducing newcomers to fly fishing and hopes to spark a lifelong love of the sport in every angler he meets.",
      },
    ],
  },
];
