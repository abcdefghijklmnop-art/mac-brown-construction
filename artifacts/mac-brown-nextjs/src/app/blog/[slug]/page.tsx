import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { BlogPostLayout, type FaqItem } from "@/components/blog-post-layout";
import { GlossaryLayout } from "@/components/glossary-layout";
import { definedTermSetSchema } from "@/lib/schema";
import leaderConstructionFaq from "../../../../content/blog/learn-leader-construction/faq.json";
import glossaryFaq from "../../../../content/blog/fly-casting-definitions-glossary-terminology/faq.json";
import loopMorphingFaq from "../../../../content/blog/learn-loop-control-morphing-shapes-created-fly-casting/faq.json";
import flyRodBalanceFaq from "../../../../content/blog/understanding-fly-rod-balance-swing-weight-deflection-continuity-frequency/faq.json";
import forcedTurnoverFaq from "../../../../content/blog/forced-turnover-versus-pulling-the-rod-through-in-fly-casting/faq.json";
import choosingRodFaq from "../../../../content/blog/considerations-choosing-fly-rod/faq.json";
import flyFishingTermsFaq from "../../../../content/blog/fly-fishing-terms-glossary-definitions/faq.json";
import barblessFaq from "../../../../content/blog/barbless-hooks-increase-your-catch/faq.json";
import hookSetFaq from "../../../../content/blog/learn-to-set-the-hook-fly-fishing-trout/faq.json";
import beginnerLessonsFaq from "../../../../content/blog/fly-fishing-lessons-beginners/faq.json";
import articulatedSculpinFaq from "../../../../content/blog/articulated-sculpin/faq.json";
import rodAccelerationFaq from "../../../../content/blog/understand-rod-acceleration/faq.json";
import doubleHaulFaq from "../../../../content/blog/learning-the-double-haul/faq.json";
import winterTroutFaq from "../../../../content/blog/fly-fishing-tips-catch-more-winter-trout/faq.json";
import dryFlyFaq from "../../../../content/blog/learn-to-hammer-trout-with-dry-fly-techniques/faq.json";
import mopFlyFaq from "../../../../content/blog/history-mop-fly-mania/faq.json";
import curveCastsFaq from "../../../../content/blog/learn-curve-casts/faq.json";
import castingModelFaq from "../../../../content/blog/casting-model/faq.json";
import tippetStudyFaq from "../../../../content/blog/comprehensive-university-tippet-study/faq.json";
import switchRodFaq from "../../../../content/blog/learn-to-cast-a-switch-rod/faq.json";
import flyRodActionsFaq from "../../../../content/blog/understanding-fly-rod-actions-modulus-rod-feel-dampening/faq.json";
import guidedTripFaq from "../../../../content/blog/how-to-choose-a-fly-fishing-guided-trip-in-nc/faq.json";
import dragFreeDriftFaq from "../../../../content/blog/get-drag-free-drift-fly-fishing/faq.json";
import matchingHatchesFaq from "../../../../content/blog/figure-out-matching-hatches-fly-fishing/faq.json";
import notAboutYourFlyFaq from "../../../../content/blog/fly-fishers-it-is-not-about-your-fly/faq.json";
import euroNymphingFaq from "../../../../content/blog/learn-tight-line-techniques-euro-nymphing/faq.json";
import flyLineLoopsAccuracyFaq from "../../../../content/blog/fly-line-loops-accuracy/faq.json";
import flyFishersTriadFaq from "../../../../content/blog/understanding-fly-fishers-triad/faq.json";
import successfulTrainingFaq from "../../../../content/blog/successful-training/faq.json";
import blackCaddisFaq from "../../../../content/blog/learn-fly-fish-black-caddis-hatch-tuckasegee-river/faq.json";
import standardizationFaq from "../../../../content/blog/standardization-fly-casting/faq.json";
import substanceStyleFaq from "../../../../content/blog/instructor-observation-on-substance-style/faq.json";
import fiveEssentialsFaq from "../../../../content/blog/5-essentials-fly-casting/faq.json";
import synergyFaq from "../../../../content/blog/synergy-and-fly-casting/faq.json";
import dryFlyThoughtsFaq from "../../../../content/blog/thoughts-on-dry-fly-fishing/faq.json";
import flyCastingInstructionFaq from "../../../../content/blog/fly-casting-instruction/faq.json";
import pheasantTailFaq from "../../../../content/blog/pheasant-tail-droppers/faq.json";
import troutSeasonsFaq from "../../../../content/blog/best-trout-fishing-seasons-smokies/faq.json";
import raleighFaq from "../../../../content/blog/fly-fishing-instruction-lessons-casting-raleigh-nc/faq.json";
import mythsRodsTippetFaq from "../../../../content/blog/myths-on-rods-and-tippet-for-fly-fishing/faq.json";
import memoirsFaq from "../../../../content/blog/memoirs-teaching-fly-casting/faq.json";
import highlandsFaq from "../../../../content/blog/highlands-nc-fly-fishing-guide/faq.json";
import fallInvasionFaq from "../../../../content/blog/fall-fly-fishing-invasion-north-carolina/faq.json";
import crossOverFaq from "../../../../content/blog/cross-over-techniques-fly-fishing-for-trout/faq.json";
import dryFlyPhilosophyFaq from "../../../../content/blog/dry-fly-philosophy-floating-fly/faq.json";
import crackCodeFaq from "../../../../content/blog/learn-crack-code-trout-fishing/faq.json";
import stewardsFaq from "../../../../content/blog/stewards-of-the-river-or-pillagers/faq.json";
import rollCastFaq from "../../../../content/blog/roll-cast-efficiency/faq.json";
import rollCastHowToFaq from "../../../../content/blog/learn-to-make-a-roll-cast-fly-fishing/faq.json";
import loopPlaneFaq from "../../../../content/blog/understanding-loop-plane/faq.json";
import creelStudyFaq from "../../../../content/blog/creel-study-for-upper-nantahala-river-1996/faq.json";
import flyLineStudyFaq from "../../../../content/blog/comprehensive-university-fly-line-study/faq.json";
import lineRetrievalFaq from "../../../../content/blog/fly-fishing-line-retrieval-techniques/faq.json";
import learnFlyFishPoemFaq from "../../../../content/blog/learn-fly-fish-nc-poem/faq.json";
import improveTrackingFaq from "../../../../content/blog/improve-tracking-fly-casting-accuracy/faq.json";
import northwestExpoFaq from "../../../../content/blog/northwest-expo-albany-oregon/faq.json";
import justDoItFaq from "../../../../content/blog/just-do-it-commit-to-your-fly-fishing-journey/faq.json";
import streamerFishingFaq from "../../../../content/blog/a-few-thoughts-on-streamer-fishing/faq.json";
import nymphFishingFaq from "../../../../content/blog/learning-to-nymph-fish/faq.json";
import lakeStillwaterFaq from "../../../../content/blog/learn-catch-trout-fly-fishing-lakes-stillwaters-ponds-lochs/faq.json";
import fishingMemoriesFaq from "../../../../content/blog/making-fly-fishing-memories-one-guided-trout-fishing-trip/faq.json";
import nantahalaStreamerFaq from "../../../../content/blog/nantahala-river-streamer-fishing/faq.json";
import instructionalDryFlyFaq from "../../../../content/blog/instructional-methods-art-dry-fly-fishing/faq.json";
import winterFlyFishingFaq from "../../../../content/blog/best-winter-fly-fishing/faq.json";
import totalFlyFishingFaq from "../../../../content/blog/total-fly-fishing-experience/faq.json";
import teamUsaFaq from "../../../../content/blog/team-usa-fly-fishing-in-bryson-city-nc/faq.json";
import howChoideGuideFaq from "../../../../content/blog/how-choose-fly-fishing-guide/faq.json";
import observationsInstructFaq from "../../../../content/blog/observations-instruct-teach-fly-casting-lessons/faq.json";
import fallDelayedHarvestFaq from "../../../../content/blog/fall-delayed-harvest-trout-fishing-season-nc/faq.json";
import destinationAnglerFaq from "../../../../content/blog/destination-angler-fundamental-schools/faq.json";

const faqMap: Record<string, FaqItem[]> = {
  "learn-leader-construction": leaderConstructionFaq as FaqItem[],
  "fly-casting-definitions-glossary-terminology": glossaryFaq as FaqItem[],
  "learn-loop-control-morphing-shapes-created-fly-casting": loopMorphingFaq as FaqItem[],
  "understanding-fly-rod-balance-swing-weight-deflection-continuity-frequency": flyRodBalanceFaq as FaqItem[],
  "forced-turnover-versus-pulling-the-rod-through-in-fly-casting": forcedTurnoverFaq as FaqItem[],
  "considerations-choosing-fly-rod": choosingRodFaq as FaqItem[],
  "fly-fishing-terms-glossary-definitions": flyFishingTermsFaq as FaqItem[],
  "barbless-hooks-increase-your-catch": barblessFaq as FaqItem[],
  "learn-to-set-the-hook-fly-fishing-trout": hookSetFaq as FaqItem[],
  "fly-fishing-lessons-beginners": beginnerLessonsFaq as FaqItem[],
  "articulated-sculpin": articulatedSculpinFaq as FaqItem[],
  "understand-rod-acceleration": rodAccelerationFaq as FaqItem[],
  "learning-the-double-haul": doubleHaulFaq as FaqItem[],
  "fly-fishing-tips-catch-more-winter-trout": winterTroutFaq as FaqItem[],
  "learn-to-hammer-trout-with-dry-fly-techniques": dryFlyFaq as FaqItem[],
  "history-mop-fly-mania": mopFlyFaq as FaqItem[],
  "learn-curve-casts": curveCastsFaq as FaqItem[],
  "casting-model": castingModelFaq as FaqItem[],
  "comprehensive-university-tippet-study": tippetStudyFaq as FaqItem[],
  "learn-to-cast-a-switch-rod": switchRodFaq as FaqItem[],
  "understanding-fly-rod-actions-modulus-rod-feel-dampening": flyRodActionsFaq as FaqItem[],
  "how-to-choose-a-fly-fishing-guided-trip-in-nc": guidedTripFaq as FaqItem[],
  "get-drag-free-drift-fly-fishing": dragFreeDriftFaq as FaqItem[],
  "figure-out-matching-hatches-fly-fishing": matchingHatchesFaq as FaqItem[],
  "fly-fishers-it-is-not-about-your-fly": notAboutYourFlyFaq as FaqItem[],
  "learn-tight-line-techniques-euro-nymphing": euroNymphingFaq as FaqItem[],
  "fly-line-loops-accuracy": flyLineLoopsAccuracyFaq as FaqItem[],
  "understanding-fly-fishers-triad": flyFishersTriadFaq as FaqItem[],
  "successful-training": successfulTrainingFaq as FaqItem[],
  "learn-fly-fish-black-caddis-hatch-tuckasegee-river": blackCaddisFaq as FaqItem[],
  "standardization-fly-casting": standardizationFaq as FaqItem[],
  "instructor-observation-on-substance-style": substanceStyleFaq as FaqItem[],
  "5-essentials-fly-casting": fiveEssentialsFaq as FaqItem[],
  "synergy-and-fly-casting": synergyFaq as FaqItem[],
  "thoughts-on-dry-fly-fishing": dryFlyThoughtsFaq as FaqItem[],
  "fly-casting-instruction": flyCastingInstructionFaq as FaqItem[],
  "pheasant-tail-droppers": pheasantTailFaq as FaqItem[],
  "best-trout-fishing-seasons-smokies": troutSeasonsFaq as FaqItem[],
  "fly-fishing-instruction-lessons-casting-raleigh-nc": raleighFaq as FaqItem[],
  "myths-on-rods-and-tippet-for-fly-fishing": mythsRodsTippetFaq as FaqItem[],
  "memoirs-teaching-fly-casting": memoirsFaq as FaqItem[],
  "highlands-nc-fly-fishing-guide": highlandsFaq as FaqItem[],
  "fall-fly-fishing-invasion-north-carolina": fallInvasionFaq as FaqItem[],
  "cross-over-techniques-fly-fishing-for-trout": crossOverFaq as FaqItem[],
  "dry-fly-philosophy-floating-fly": dryFlyPhilosophyFaq as FaqItem[],
  "learn-crack-code-trout-fishing": crackCodeFaq as FaqItem[],
  "stewards-of-the-river-or-pillagers": stewardsFaq as FaqItem[],
  "roll-cast-efficiency": rollCastFaq as FaqItem[],
  "learn-to-make-a-roll-cast-fly-fishing": rollCastHowToFaq as FaqItem[],
  "understanding-loop-plane": loopPlaneFaq as FaqItem[],
  "creel-study-for-upper-nantahala-river-1996": creelStudyFaq as FaqItem[],
  "comprehensive-university-fly-line-study": flyLineStudyFaq as FaqItem[],
  "fly-fishing-line-retrieval-techniques": lineRetrievalFaq as FaqItem[],
  "learn-fly-fish-nc-poem": learnFlyFishPoemFaq as FaqItem[],
  "improve-tracking-fly-casting-accuracy": improveTrackingFaq as FaqItem[],
  "northwest-expo-albany-oregon": northwestExpoFaq as FaqItem[],
  "just-do-it-commit-to-your-fly-fishing-journey": justDoItFaq as FaqItem[],
  "a-few-thoughts-on-streamer-fishing": streamerFishingFaq as FaqItem[],
  "learning-to-nymph-fish": nymphFishingFaq as FaqItem[],
  "learn-catch-trout-fly-fishing-lakes-stillwaters-ponds-lochs": lakeStillwaterFaq as FaqItem[],
  "making-fly-fishing-memories-one-guided-trout-fishing-trip": fishingMemoriesFaq as FaqItem[],
  "nantahala-river-streamer-fishing": nantahalaStreamerFaq as FaqItem[],
  "instructional-methods-art-dry-fly-fishing": instructionalDryFlyFaq as FaqItem[],
  "best-winter-fly-fishing": winterFlyFishingFaq as FaqItem[],
  "total-fly-fishing-experience": totalFlyFishingFaq as FaqItem[],
  "team-usa-fly-fishing-in-bryson-city-nc": teamUsaFaq as FaqItem[],
  "how-choose-fly-fishing-guide": howChoideGuideFaq as FaqItem[],
  "observations-instruct-teach-fly-casting-lessons": observationsInstructFaq as FaqItem[],
  "fall-delayed-harvest-trout-fishing-season-nc": fallDelayedHarvestFaq as FaqItem[],
  "destination-angler-fundamental-schools": destinationAnglerFaq as FaqItem[],
};

const aeoMap: Record<string, string> = {
  "learn-leader-construction": "Leader construction is one of the most overlooked skills in fly fishing — yet it determines stealth, turnover, and presentation accuracy on every cast. Mac Brown recommends a minimum of 12-16 feet of Maxima Chameleon for dry fly fishing on Smoky Mountain streams, and fishes 32 feet or more on tailwaters with spooky trout. Dry fly leaders and nymph leaders are completely different tools — using the same leader for both means fighting the physics the entire time. Understanding how to build a knotted leader from scratch gives you the ability to adapt on the stream when conditions change, rather than being stuck with whatever you brought in your vest.",
  "fly-casting-definitions-glossary-terminology": "The most comprehensive fly casting glossary available — 100+ fly casting terms defined by Mac Brown, FFI Master Casting Instructor and author of Casting Angles, compiled from 40+ years of on-water teaching and university research at Western Carolina University. Originally published alongside Casting Angles in the 1990s, adopted by leading casting organizations globally, and updated continuously since. Used by FFI certification candidates, casting instructors, and serious fly fishers worldwide.",
  "learn-loop-control-morphing-shapes-created-fly-casting": "Fly line loops morph continuously throughout the cast — changing shape from the moment the loop buds until it turns over and straightens. Mac Brown's research published in The Loop journal of Fly Fishers International in 2014 found that changing loop shape is influenced by line speed and rod tip path — not simply how the rod stops. Understanding loop morphing gives casting instructors and serious anglers a diagnostic framework to identify faults and execute precision presentation casts at will.",
  "understanding-fly-rod-balance-swing-weight-deflection-continuity-frequency": "Mac Brown's Western Carolina University study on fly rod balance, swing weight, deflection, continuity, and frequency evaluated 54 five-weight rods with a blind panel of 20 accomplished casters averaging 23.5 years of experience — 470 combined years total. Medium action rods offered the greatest control for the widest range of trout angling scenarios. Balance and swing weight affect casting fatigue more than total rod weight alone.",
  "forced-turnover-versus-pulling-the-rod-through-in-fly-casting": "Forced turnover and pulling the rod through are two opposing casting concepts from the Golden Gate Casting Club — the distinction separates average casters from excellent ones. Forced turnover rotates the rod butt early, widening the loop. Pulling through delays rotation until late, producing tighter loops, greater line speed, and more accurate presentations. Understanding both and knowing when to apply each is the mark of an advanced fly caster.",
  "considerations-choosing-fly-rod": "Choosing a fly rod depends on where and how you fish — not just price. Mac Brown's 1996 Western Carolina University study evaluated 54 five-weight rods and found medium action rods offer the greatest control for the widest range of trout angling scenarios. High-end rods from $800-$1,200 significantly outperform lower-cost imports on dampening, swing weight, and comfort. The most important factor is learning to cast well — no rod compensates for poor technique.",
  "fly-fishing-terms-glossary-definitions": "The complete fly fishing glossary — 200+ fly fishing terms defined for beginners and experienced anglers alike, covering equipment, casting, entomology, knots, tactics, and reading water. Written by Mac Brown, FFI Master Casting Instructor and author of Casting Angles, based in Bryson City, NC. From tippet to tailwater, drag-free drift to double haul — every term you need to understand the language of fly fishing.",
  "barbless-hooks-increase-your-catch": "Barbless hooks increase catch rates in fly fishing because they penetrate faster with less effort than barbed hooks — a spear versus a wedge. Mac Brown has guided exclusively with barbless hooks in Bryson City, NC since 1987, finding they lead to higher fish numbers, reduced handling time, and significantly lower fish mortality on delayed harvest water. The cardboard test proves it: compare the effort required to push a barbed hook versus a barbless hook through cardboard — the difference is immediate and obvious.",
  "learn-to-set-the-hook-fly-fishing-trout": "The vertical wrist-jerk hook set is the most common mistake in fly fishing trout — and the technique most likely to result in missed fish and broken tippets. Mac Brown has guided on the Tuckasegee and Nantahala rivers since 1987 and teaches a horizontal strip-set as the highest percentage hook set for trout in all conditions. Both the rod hand and line hand have specific duties — and most anglers are only using one of them.",
  "fly-fishing-lessons-beginners": "The fastest way to learn fly fishing is quality instruction from a certified instructor — not YouTube videos, fly shop advice, or trial and error on your own. A North Carolina Wildlife Resources Commission creel study found that only 2% of anglers catch over 90% of the trout. The other 98% are self-taught and guessing. Mac Brown Fly Fish in Bryson City, NC has been teaching beginners since 1987 — all gear provided, all skill levels welcome, and most beginners are making fishable casts within the first hour.",
  "articulated-sculpin": "Articulated sculpin patterns are Mac Brown's preferred streamer for targeting large brown trout on the Nantahala River and wild streams of Western North Carolina. Tied in olive, brown, and black on 4XL size 2 streamer hooks with rabbit strip, craft fur, marabou, and Fish Skull heads from Flymen, these flies consistently produce the largest trout in any river system — including a brown trout caught on the lower Nantahala on a sculpin pattern as far back as 1988.",
  "understand-rod-acceleration": "Rod acceleration in fly casting exists in three forms — negative, constant, and positive — and mastering all three is what separates presentation casters from casters who can only get the fly out there. Mac Brown covers all three rates in Casting Angles and teaches them in every advanced casting program at Mac Brown Fly Fish in Bryson City, NC. Most casters use too much acceleration. Back off, think smooth application, and the light bulb moment follows quickly.",
  "learning-the-double-haul": "The double haul is the single most important distance and line speed technique in fly casting — a pull on the fly line with the line hand on both the back cast and the forward cast. First introduced to the world by Marvin Hedge in St. Louis in 1934, when he broke the world fly casting distance record by 22 feet. Mac Brown has taught the double haul for 38+ years using the pantomime method originated by Mel Krieger in the mid-1970s — most students achieve the timing in under 10 minutes of practice.",
  "fly-fishing-tips-catch-more-winter-trout": "Winter trout fishing in the Smoky Mountains requires smaller flies, finer tippets, slower presentations, and a thorough understanding of where cold water sends trout. Mac Brown has guided winter trout fishing in Bryson City, NC since 1987 — fishing 6-8X fluorocarbon, three-fly rigs, CDC puff dries, and pheasant tail nymphs on a 10'6 rod with a 3-weight line and 30-foot leader. The biggest advantage of winter fishing on the Tuckasegee and Nantahala is solitude — world-class trout water with almost no one else on it.",
  "learn-to-hammer-trout-with-dry-fly-techniques": "Dry fly fishing for trout requires mastering active and passive presentations, curve and pile casts, drag-free drift at distance, and the ability to read rise forms accurately. Mac Brown has been guiding dry fly fishing on the Tuckasegee River, Nantahala River, and wild Smoky Mountain streams since 1987 — and considers the dry fly the most rewarding and technically demanding discipline in fly fishing. Most anglers never develop it because tight lining with nymphs produces fish faster. That is exactly why the dry fly separates serious anglers from the rest.",
  "history-mop-fly-mania": "The mop fly was invented in the late 1990s by Jim Estes of Bryson City, North Carolina — Mac Brown's friend since the mid-1980s and one of the most experimental fly fishers in Western NC. Jim discovered mop material at a Dollar Store in Bryson City and originally used it to imitate the large sourwood worms that fall from trees in June through August. The pattern won multiple individual and Fly Fishing Team USA Youth gold medals in Europe before Umpqua Feather Merchants declined it as a regional pattern — then added it to their 2018 catalog as the Umpqua Mop.",
  "learn-curve-casts": "Curve casts deliver drag-free drifts and precise fly placement that straight casts cannot match — curving left, right, upstream, and downstream to solve presentation problems on any water. Mac Brown has taught curve casts since 1987 and used them on the first day of fly casting programs at Western Carolina University — where all 30 beginner students could throw curves left and right within a single session. There are five curve cast types, each produced by a specific combination of loop plane, rod plane, and acceleration rate.",
  "casting-model": "A fly casting model gives instructors and students a shared universal language for describing every element of the fly cast — casting stroke, overall stroke, loop formation, line positioning, and force application. Mac Brown contributed to this collaborative model alongside global casting instructors and has applied it in teaching since 1987 in Bryson City, NC. The model works for all casting styles including single-hand, switch, and Spey — and is powerful precisely because it avoids rigid rules in favor of universal principles.",
  "comprehensive-university-tippet-study": "Mac Brown's comprehensive tippet study conducted at Michigan State University and Western Carolina University materials labs in 1996 tested multiple brands of fly fishing tippet for diameter accuracy, elasticity, abrasion resistance, and knot strength — finding that all brands of mono are far from equal and that labeled sizes frequently do not match actual measured diameters. Maxima Chameleon labeled as 4X actually measured closer to 2X at .009 inches — significantly larger than the claimed .007 inches. The study changed how Mac Brown rigs up on the water and remains one of the most cited tippet performance analyses in fly fishing.",
  "learn-to-cast-a-switch-rod": "Switch rods offer significant advantages for fly fishing larger rivers in the Smoky Mountains — comfort, versatility, and the ability to cover vast amounts of water with roll casts out 100+ feet without wading into difficult or dangerous positions. Mac Brown prefers switch rods on the Tuckasegee and Nantahala rivers for streamers, wet flies, nymphing at distance, and even targeting rising fish with dry flies. The magic lies in the fly line — a 450-grain head of approximately 45 feet transforms what is possible on big water.",
  "understanding-fly-rod-actions-modulus-rod-feel-dampening": "Fly rod action, modulus, dampening, and feel are four distinct and interdependent attributes that determine how a fly rod performs — and none of them is fully captured by the terms fast, medium, or slow action alone. Mac Brown's 1996 Western Carolina University study evaluated 54 five-weight rods in a controlled lab environment and a blind study of 20 accomplished casters — finding that rods rated highest in feel also dampened most quickly, and that medium action rods consistently offered the greatest control for the widest range of trout angling scenarios.",
  "how-to-choose-a-fly-fishing-guided-trip-in-nc": "Choosing a fly fishing guided trip in North Carolina requires looking past price, past fly shop convenience, and past slick websites — and evaluating the actual credentials, experience, and teaching philosophy of the guide. Mac Brown has been guiding in Bryson City, NC since 1987 and argues that independent guides consistently offer greater value than brick-and-mortar fly shop guides because their livelihood depends on the quality of every single trip. The best guided trips are instructional — you should leave a better angler than when you arrived.",
  "get-drag-free-drift-fly-fishing": "Drag-free drift is the single most important skill in fly fishing — and the most common reason trout refuse a fly. Drag occurs when the fly moves at a different speed than the current it is traveling in, alerting trout instantly that something is unnatural. There are two types: major drag (obvious, the fly skates like a water skier) and micro drag (subtle, invisible to most anglers but still causing refusals). Mac Brown has been coaching drag-free drift on the Tuckasegee and Nantahala rivers since 1987 — and considers leader length the single biggest variable most anglers get wrong.",
  "figure-out-matching-hatches-fly-fishing": "Matching the hatch in fly fishing means identifying what stage of what insect trout are feeding on at a given moment — and selecting a fly that imitates it in size, shape, color, and behavior. Mac Brown has been collecting and analyzing 14,000+ trout stomach samples on the streams of Western North Carolina since 1987, and uses a stomach pump and rise form observation as the two most reliable hatch-matching tools available. The key insight: drift matters more than pattern. Presentation failure causes far more refusals than fly pattern mismatch.",
  "fly-fishers-it-is-not-about-your-fly": "Fly selection is the most overrated variable in fly fishing — and the one most aggressively marketed. The fly rod, the fly line, the leader, and the fly itself are all secondary to the angler behind them. Presentation, approach, water reading, casting mechanics, and hook setting produce fish. Gear does not. Mac Brown has guided on the Tuckasegee and Nantahala rivers since 1987 and consistently finds that a well-presented attractor pattern outfishes a perfectly matched fly with a dragging presentation every single time.",
  "learn-tight-line-techniques-euro-nymphing": "Tight line nymphing — commonly called Euro nymphing — is not a new technique. It has been practiced for decades by anglers in Bryson City, NC and around the world long before European competition teams made it famous. Mac Brown's mentor Jim Green was using Amnesia colored mono for tight line presentations before most current Euro nymphing advocates were born. Jim Estes of Bryson City and Joe Humphreys of Penn State were doing the same. The technique produces fish because it eliminates indicator lag, keeps the fly in the productive zone longer, and provides direct contact for instant strike detection.",
  "fly-line-loops-accuracy": "Tight loops look impressive but they are only part of the accuracy equation in fly casting. Loop shape, line speed, trajectory, and tracking all work together to determine where the fly lands. The most common fault Mac Brown observed at the Atlanta Fly Fishing Show — in 90% of casters on the pond — was rolling the palm outward at the completion of the back cast, introducing a transverse wave into the fly leg of the loop that destroys forward cast accuracy. A simple check: does the reel point straight ahead toward the target at the stop of the back cast? If not, the back cast has a wave in it.",
  "understanding-fly-fishers-triad": "The Fly Fishers Triad is a framework for becoming a complete, intentional fly fisher — built on three equal sides: strategy, line control, and tactics. Strategy is knowledge, wisdom, and intent applied to how you read and cover water. Line control is the kinesthetic act of repositioning your fly — every cast and every mend. Tactics are the subtle techniques that determine how the fly behaves during the drift — active, passive, and erratic. All three are equally important and all three overlap constantly on the water. Mac Brown has taught the Triad in the Fly Fishing Guide School, guide trips, and college programs since 1987.",
  "successful-training": "The four stages of successful training apply to fly fishing exactly as they apply to any skilled pursuit — unconscious incompetence, conscious incompetence, conscious competence, and unconscious competence. Every fly fisher starts at stage one not knowing what they do not know. The journey to stage four — where casting, water reading, and presentation happen instinctively without conscious thought — is the same journey in fly fishing as in any discipline requiring genuine mastery. Mac Brown has taught this framework at the Fly Fishing Guide School and in college programs since 1987.",
  "learn-fly-fish-black-caddis-hatch-tuckasegee-river": "The Black Caddis hatch on the Tuckasegee River delayed harvest section in Bryson City, NC is one of the finest dry fly events of the early season — beginning on warm days in early March and producing aggressive surface feeding from both stocked and wild trout. Mac Brown's preferred approach is a three-fly rig fishing the film — Charlie Craven's Clown Caddis on the point for visibility, Gary LaFontaine's Sparkle Emergent Pupa as the first dropper, and an attractor emerger as the second dropper. The key is fishing the film, not the surface — and letting the emergers ride just in or just below the meniscus.",
  "standardization-fly-casting": "Standardization in fly casting instruction leads to stagnation — when rules replace mechanics and principles replace physics, the sport stops evolving. Mac Brown has observed two types of fly fishers in 38+ years of teaching: recreational anglers who seek shallow answers to complex topics, and committed anglers who invest in education and improve measurably. The committed angler who understands why a cast works — not just what to do — can self-correct on any water in any condition for the rest of their life. Rules cannot do that. Mechanics can.",
  "instructor-observation-on-substance-style": "Substance and style in fly casting are two distinct concepts that Mel Krieger introduced to Fly Fishers International in the early years of the casting program — and the distinction remains the most important framework in fly casting instruction today. Style is HOW the body moves — stance, grip, elbow position, wrist involvement. Substance is WHY it works — mechanics, rod tip path, loop formation, force application. Style is personal and infinite. Substance is universal. When style limits intent, it becomes a teaching moment. When substance is understood, any style can be evaluated, corrected, and optimized.",
  "5-essentials-fly-casting": "The five essentials of fly casting are the universal mechanical principles that govern every fly cast regardless of style, rod, line, or fishing situation — slack free line, pause for the loop to unroll, vary stroke length and arc with line length, maintain a straight rod tip path, and accelerate to a stop. First codified by Bill and Jay Gammel and adopted by Fly Fishers International as the foundation of casting instructor certification, the five essentials are the closest thing to universal law in fly casting — and the starting point for every diagnosis and correction at Mac Brown Fly Fish in Bryson City, NC.",
  "synergy-and-fly-casting": "Synergy in fly casting is the simultaneous convergence of the haul, the stop, and the rod unbend into one finite moment — where the whole is greater than the sum of its parts. First coined by Aristotle, the concept of synergy defines what separates recreational fly casters from elite ones. Distance and loop quality are not achieved by any single variable — timing, speed, tempo, rod load, haul explosiveness, late rotation, and the spring effect of the rod unbend all coming together simultaneously is what produces maximum line speed with minimum effort. Mac Brown has taught casting synergy in Bryson City, NC and at national fly fishing shows since 1987.",
  "thoughts-on-dry-fly-fishing": "Mac Brown's dry fly philosophy — originally written for The Floating Fly and the North Carolina fly fishing community in 2012 — covers leader design, equipment selection, entomology, presentation technique, and the ideas that actually produce fish on the surface. The vertical wrist strike is the most common fault on dry flies. Never reel frantically on small trout — the rod tip vibrates and creates slack. The CDC Klinkhammer, CDC comparadun, and spinner patterns riding in the film consistently outperform traditional surface patterns on the selective trout of the Smoky Mountains.",
  "fly-casting-instruction": "Fly casting instruction is the single fastest way to build the foundational skills that everything else in fly fishing depends on. A 1993 NCWRC creel study on the Upper Nantahala River found that only 2% of anglers catch over 90% of the trout — and the top 2% are not using better flies or more expensive gear. They control the fly line. Mac Brown has been delivering fly casting instruction in Bryson City, NC since 1987 — the only FFI Master Casting Instructor in North Carolina — with a money-back guarantee on every lesson.",
  "pheasant-tail-droppers": "Weighted pheasant tail dropper nymphs are one of the most productive fly fishing rigs on big water in the Smoky Mountains — particularly on the Tuckasegee and Nantahala rivers on bright sunny days with clear water. Mac Brown's preferred tie uses heavy lead wraps mashed flat behind a 3.5mm tungsten bead on a #12 Mustad 3399, with partridge tail and legs, pheasant tail abdomen, prism dub mixed with hare's ear thorax, and peacock wingcase. At 9.4 grains this fly sinks fast and produces consistently as both a point fly and a dropper.",
  "best-trout-fishing-seasons-smokies": "The best trout fishing seasons in the Smoky Mountains are spring and fall — when water temperatures sit in the productive 45-65°F range and the most diverse hatches of the year are occurring. Summer fishing drops significantly as water temperatures climb into the 70s on the Tuckasegee and lower elevation rivers. Winter is underrated — the Nantahala tailwater and Tuckasegee delayed harvest section fish well year-round with midge and BWO activity on mild overcast days. Always carry a thermometer — water temperature is the single most reliable guide to trout activity in every season.",
  "fly-fishing-instruction-lessons-casting-raleigh-nc": "Mac Brown presents fly fishing instruction, casting lessons, and casting demonstrations annually at The Fly Fishing Show in Raleigh, NC — one of the largest fly fishing shows on the East Coast. The Raleigh show brings together guides, instructors, rod builders, and passionate fly fishers from across the Southeast. Mac Brown's casting sessions at the show cover tension in fly casting — the understanding that control over constant, increasing, and decreasing tension during the stroke is the key to mastering all specialty casts from small Smoky Mountain streams to 30-knot saltwater flats.",
  "myths-on-rods-and-tippet-for-fly-fishing": "The myth that light rods and fine tippet kill fish has been debated on fly fishing forums for decades — and is largely wrong. Mac Brown has spent 34+ years guiding and instructing fly fishing in Bryson City, NC and consistently finds that the drive for efficiency — using the largest tippet you can effectively get away with for the situation at hand — is what separates serious anglers from the masses. A longer rod provides more leverage during the fight, easier presentations at distance, and simpler single-handed Spey casts — not a disadvantage for fighting fish.",
  "memoirs-teaching-fly-casting": "Teaching fly casting effectively requires connecting with the student's past experiences, building on positives, and avoiding the most common instructor error — playing the mechanic and fault-picking through an entire lesson. Mac Brown has been teaching fly casting at Mac Brown Fly Fish in Bryson City, NC since 1987, training instructors through the Fly Fishing Guide School and presenting at national fly fishing shows since 1994. The fastest results come from pantomiming the foundation stroke, audio word pictures tied to past experience, and teaching students to self-correct rather than creating dependency on the instructor.",
  "highlands-nc-fly-fishing-guide": "Highlands, NC fly fishing is best accessed through Mac Brown Fly Fish in Bryson City, NC — approximately one hour from Highlands and the original fly fishing guide service in Western North Carolina since 1987. The best trout waters near Highlands are the Chattooga River at the Iron Bridge, the Cullasaja River gorge below the lake, and the wild streams of Nantahala National Forest and Great Smoky Mountains National Park. The Tuckasegee River delayed harvest section in Bryson City is the most popular guided trip destination for Highlands visitors — running October through May with excellent float and wade trip access.",
  "fall-fly-fishing-invasion-north-carolina": "Fall fly fishing in North Carolina begins in earnest in mid-September — when water temperatures drop back into the productive range, delayed harvest sections reopen October 1, and the October Caddis hatch triggers the most aggressive dry fly takes of the entire year from the largest brown trout in the system. Mac Brown Fly Fish in Bryson City, NC has guided fall trips since 1987 — welcoming international visitors from Australia, New Zealand, Germany, Switzerland, Austria, Japan, England, and Scotland alongside anglers from across America. Great Smoky Mountains National Park alone holds over 2,900 miles of wild trout water — the finest fall fly fishing destination in the eastern United States.",
  "cross-over-techniques-fly-fishing-for-trout": "Crossover techniques in fly fishing for trout break down the artificial divisions between dry fly, wet fly, nymph, and streamer fishing — recognizing that the most effective anglers borrow freely across all disciplines. Dry flies can be sunk and swung like wet flies. Small pheasant tail nymphs swung into rising fish produce strikes when dries are refused. Streamers can be dead-drifted like nymphs in cold water. Mac Brown has been teaching crossover technique thinking in Bryson City, NC since 1987 — the antidote to fly fishing elitism and the fastest path to catching more trout on more water in more conditions.",
  "dry-fly-philosophy-floating-fly": "Mac Brown's dry fly philosophy — contributed to The Floating Fly, one of the world's most respected dry fly publications — covers equipment selection, leader design, reading water, entomology, and a five-component fish-fighting system developed over 40+ years of guiding in the Southern Appalachians and fishing from New Zealand to South America. The core argument: spend more time perfecting the archer than looking for the perfect arrow. Start with a 15-foot leader minimum. Fish the wrong flies well. Drift beats pattern every time.",
  "learn-crack-code-trout-fishing": "Cracking the code in trout fishing requires observation, adaptability, and a willingness to embrace failure as the foundation of learning — FAIL stands for First Attempt In Learning. Presentation and technique always trump fly pattern. Trout feed opportunistically throughout the day on most Western North Carolina waters — carry nymphs in varying weights, dry flies, wet flies, and streamers, and adjust by weight before worrying about what is hatching. Mac Brown has been cracking the code on the Tuckasegee River, Deep Creek, and the wild streams of Great Smoky Mountains National Park since 1987.",
  "stewards-of-the-river-or-pillagers": "Trout streams in Western North Carolina face real threats from guides and outfitters who book summer trips when water temperatures exceed 70°F — conditions that kill trout. Mac Brown has been advocating for trout conservation and ethical guiding practices in Bryson City, NC since 1987. July and August are the off-season for trout fishing in Western NC. When early morning water temperatures approach 70°F, stop fishing for trout and target warm water species — smallmouth bass, carp, perch, and bluegill on the Little Tennessee River and other warm water fisheries.",
  "roll-cast-efficiency": "The roll cast is the most versatile and underutilized tool in fly fishing — essential for tight spaces, changing direction, eliminating slack, recovering snagged flies, raising sink tips, assisting hook sets, and forming the foundation of all Spey casting through anchor placement. Mac Brown teaches the static roll cast as the foundation of rod loading awareness — if it fails at distance, problems in the loading move are exposed immediately. The most common fault is too much power. In fly casting, less is more — and the roll cast proves it faster than any other technique.",
  "learn-to-make-a-roll-cast-fly-fishing": "The key to making an efficient roll cast in fly fishing is pulling the rod butt straight downward — not pushing through with forced turnover at the end of the stroke. The pulling motion begins from the shoulder, drops through the elbow, and completes with a positive stop and pullback from the pinky and ring finger — similar to driving a large spike with a hammer or throwing an ax. The result is a flat fly leg with a narrow loop that carries great distances with minimal effort. Less is more. Mac Brown has been teaching the static roll cast in Bryson City, NC since 1987.",
  "understanding-loop-plane": "Understanding loop plane in fly casting breaks one of the sport's most persistent myths — that rod plane always matches loop plane. It does not. A curved rod tip path is the only rod path that enables you to change the loop plane. A straight rod tip path produces a loop plane that matches the rod plane. A crescent moon-shaped curved path lets the caster direct the loop over, under, inside, or outside the rod plane — opening up all 360 degrees of available loop plane for presentation casts. Every fly cast is either straight or a curve. Controlling loop plane is the gateway to executing any presentation cast in any condition on any water.",
  "creel-study-for-upper-nantahala-river-1996": "The 1993 NCWRC creel study on the Upper Nantahala River delayed harvest section produced one of the most revealing data sets in American fly fishing — confirming that the top 2.6% of anglers surveyed caught over one third of all trout landed during the 8-week study. The top 0.003% caught 12.4 trout per hour while the other 99% averaged 0.81 trout per hour — one fish every 76 minutes versus one fish every 7 minutes. The study confirms what Mac Brown has observed since 1987: a small percentage of anglers catch most of the trout — and the difference is water reading, casting mechanics, and drag-free drift. Not gear. Not fly selection.",
  "comprehensive-university-fly-line-study": "Mac Brown's comprehensive fly line study conducted at Western Carolina University in 1995 tested popular 5-weight fly lines for three critical performance variables — friction (coefficient of friction), specific gravity (floatation), and elasticity (stretch ratio). The study tested Rio, Scientific Anglers, Cortland, Monic, and Airflo lines using laboratory instruments including a Pasco photographic timer and precision gripping jaws. The findings: look for the lowest coefficient of friction for shooting distance, the lowest specific gravity for floating lines that float highest longest, and a stretch ratio between 5-6% for the best all-around trout fishing performance.",
  "fly-fishing-line-retrieval-techniques": "Line retrieval in fly fishing is far more than stripping in slack — it is a line storage mechanism, a presentation tool, and a hook-setting system all in one. Mac Brown's vector pull method — published in Fly Fisherman magazine in February 1996 and covered in depth in Casting Angles — produces over 400% less movement than traditional strip retrieval, manipulates four times the fly line per retrieve, can remove over 24 feet of slack instantly on the hook set, and is the only retrieval method that keeps all casting on the stream to one back cast and a delivery cast. Hundreds of clients report dramatic improvement in hook-up percentages after learning the vector pull.",
  "learn-fly-fish-nc-poem": "The road to fly fishing mastery in North Carolina — and everywhere else — splits at the same fork Robert Frost described: humility or pride. Mac Brown has been guiding and teaching fly fishing in Bryson City, NC since 1987, mentored by Jim Green — the graphite rod pioneer at Fenwick who wrote six-page letters explaining fly casting mechanics — and by anonymous masters encountered on small streams. The NCWRC creel study on the Upper Nantahala found that over 75% of anglers surveyed rated themselves advanced or advanced intermediate. The results told a different story. Pride is the most consistent obstacle to fly fishing improvement. FAIL stands for First Attempt In Learning — embrace it and the water opens up.",
  "improve-tracking-fly-casting-accuracy": "Tracking in fly casting has two distinct meanings — straight tracking, where the rod tip travels in a straight line without side-to-side wobble for accuracy and distance casting, and route tracking, where the rod tip deliberately deviates from straight to produce transverse waves for presentation casts including curve casts, pile casts, S-turns, and aerial mends. The most common tracking fault is wrist roll at the completion of the back cast — the reel points to the side instead of toward the target, introducing a wide transverse wave that carries forward and destroys the forward cast. Two tools fix this faster than any drill: Doug Swisher's pizza box tool and a red dot laser pointer.",
  "northwest-expo-albany-oregon": "The invisible pulley is Al Buhr's language for understanding where force is accented in the fly casting stroke — rod in power followed by rod out of power. This simple concept opens up the full range of fly casting motions including circles, figure-eights, and oval casting by clarifying when and where energy is directed versus when the rod is simply repositioning. Mac Brown learned this concept from Al Buhr around 2008 and has used it in FFI continuing education programs and instructor clinics since. The concept of FFI continuing education itself was developed by Mac Brown and David Lambert around 1995 at the Southeastern FFI Conclave at Callaway Gardens — it has since become standard at FFI conclaves globally.",
  "just-do-it-commit-to-your-fly-fishing-journey": "Committing to genuine improvement in fly fishing requires establishing intent, seeking mechanical truth over popular fallacies, and moving beyond the good enough mentality that keeps 95% of anglers at the same skill level their entire lives. Mac Brown has been teaching fly casting and fly fishing in Bryson City, NC since 1987 — and the single biggest obstacle he witnesses is not lack of talent but lack of commitment to learning the mechanics behind the sport. Phrases accepted by the majority have nothing to do with the truth. Question everything before believing. Seek mechanical truth because it will always prevail.",
  "a-few-thoughts-on-streamer-fishing": "Streamer fishing produces the majority of the largest trout caught throughout the year — and it is one of the simplest fly fishing techniques to learn. Mac Brown has been fishing streamers on the Nantahala River and wild streams of Western North Carolina since 1987, including a day on the lower Nantahala that produced six brown trout over six pounds to the boat on Gary Borger's Bullhead Sculpin. The most important variable is not the pattern — it is the rate and variation of retrieval. Keep patterns simple, vary the speed, use mends to change direction, and get the fly down to where the big fish are holding.",
  "learning-to-nymph-fish": "Learning to nymph fish is the single fastest way to increase your trout catch — trout feed subsurface 80-90% of the time, making nymph fishing the most consistently productive technique in fly fishing. Mac Brown has been nymph fishing the Nantahala River and wild streams of the Smoky Mountains since 1987, developing proactive approaches including the induced strike countdown method, David Woody's jigging technique, wet fly line control at distance, and the six-cast rule for quickly solving the puzzle on any stream. The biggest determining factor for success is how quickly you adjust to fish behavior on any given day — not which fly you are using.",
  "learn-catch-trout-fly-fishing-lakes-stillwaters-ponds-lochs": "Fly fishing lakes and stillwaters near Bryson City, NC offers some of the most underrated trout fishing in the Smoky Mountains — with fish significantly larger than typical river trout. Mac Brown Fly Fish guides loch-style lake trips on Bear Lake, Wolf Lake, Tanasee Lake, Cheoah Lake, Calderwood Lake, Fontana Lake, and Nantahala Lake — all high mountain impoundments in the Smoky Mountains. Standard loch-style rigging uses three flies on an 18-20 foot leader — bob fly on the top dropper, middle dropper in the center, point fly at the end — spaced 5-6 feet apart on Maxima fluorocarbon 3X. The retrieval rate is the single most important variable separating good loch-style anglers from great ones.",
  "making-fly-fishing-memories-one-guided-trout-fishing-trip": "A quality guided fly fishing trip in Western North Carolina teaches four specific skills on every single outing — fly casting and changing direction, line control for dead drift and active presentations, hook setting, and pressuring and playing fish to the net. None of these are natural — all are learned through guided instruction. Mac Brown Fly Fish in Bryson City, NC has been delivering guided trips that teach these four skills since 1987. Fly fishing guides in Western NC range from $75 to $550 for the same service — the difference is the quality of instruction and the number of fish landed. Choose your guide on credentials and teaching ability, not price alone.",
  "nantahala-river-streamer-fishing": "Nantahala River streamer fishing is the most productive method for targeting large brown trout in Western North Carolina — particularly in fall when dropping water temperatures trigger aggressive feeding behavior from the biggest fish in the system. Mac Brown filmed a Fly Fishing Television episode on the Nantahala River with Kelly Galloup — one of the most respected streamer anglers in the world — documenting pattern selection, trigger mechanisms, and the conditions variables that drive streamer fishing success: wind direction, barometric pressure, water temperature, light levels, water clarity, and moon phases. Document every trip in a journal — pattern matching conditions is how elite streamer anglers consistently find fish.",
  "instructional-methods-art-dry-fly-fishing": "Instructional methods for dry fly fishing are becoming increasingly rare as nymphing and tight-line techniques dominate the sport — but dry fly fishing remains the pinnacle of the fly fishing experience. Mac Brown has been teaching dry fly presentation in Bryson City, NC since the mid-1980s using curve casts, pile casts, and reach mends as the foundation of every dry fly lesson. The three delivery methods for dry fly fishing are curve cast right, curve cast left, and pile cast — a straight cast to a rising fish is the least common and least effective of all presentations. Most casting strokes on the stream should be a setup move followed immediately by a delivery cast. Look more and cast less.",
  "best-winter-fly-fishing": "Winter fly fishing in Western North Carolina offers world-class trout water with almost no crowds — the best-kept secret in Smoky Mountain fly fishing. Fish activity during winter can be among the most intense of the year on mild days when temperatures climb into the 50s and 60s. Trout pod up in large numbers in deeper pools during cold months — focus on the mixing zone near the bottom where trout feed most actively, slow your presentation dramatically, fish your flies near the bottom, and time your outings for the warmest part of the afternoon. Water temperature is the single most reliable predictor of winter trout activity.",
  "total-fly-fishing-experience": "Thoreau wrote that many men go fishing all their lives without knowing it is not fish they are after. Mac Brown has been guiding and teaching fly fishing in Bryson City, NC since 1987 — and the Fly Fisher's Triad of strategies, tactics, and mechanics has been the framework for every lesson, every guided trip, and every school since the beginning. Mechanics are the easiest to learn and teach. Tactics — how you control the flies in terms of action — can be taught quickly on the stream. Strategies take the longest — recognizing insect activity, water types, and fish behavior in every condition — and they never stop developing.",
  "team-usa-fly-fishing-in-bryson-city-nc": "Mac Brown has coached Fly Fishing Team USA Youth in Bryson City, NC for over 16 years — training elite young competition anglers on the diverse trout waters of Western North Carolina including Deep Creek in Great Smoky Mountains National Park, the Tuckasegee River delayed harvest section, the Upper and Lower Nantahala River, and the Cherokee Trophy Waters. Bryson City provides the most technically diverse competition training environment in the eastern United States — from heavily stocked delayed harvest water to wild technical freestone streams requiring precise grid casting and natural small patterns.",
  "how-choose-fly-fishing-guide": "Choosing a fly fishing guide depends on your goals and expectations — not the lowest price available. Some anglers search for guided trips like booking on Travelocity, trying to save money on their day on the water. These deals rarely ensure the best value. Independent guides consistently offer greater value than brick-and-mortar fly shop guides — Al Troth, who guided the Big Hole and Beaverhead Rivers from 1973 until his death in 2012 and invented the Elk Hair Caddis, is the gold standard of what an independent guide looks like. Mac Brown Fly Fish in Bryson City, NC has been the original independent guide service in Western North Carolina since 1987.",
  "observations-instruct-teach-fly-casting-lessons": "A Lee University modality study on teaching fly casting — conducted by a group of four Master Fly Casting Instructors and two Certified Instructors — produced some of the most significant findings in fly casting instruction methodology in recent decades. A total beginner student hit two of three casts into a 2-inch target cone at 35 feet after just 20 minutes of audio feedback instruction — no tactile instruction, no rod manipulation, no 'watch me.' The study confirmed what Mac Brown has observed since 1987: audio word pictures connected to the student's past experience, combined with pantomime of the foundation stroke, produce faster results than any other instructional method for new fly casters.",
  "fall-delayed-harvest-trout-fishing-season-nc": "Fall delayed harvest trout fishing season in North Carolina begins October 1 on the Tuckasegee River through downtown Bryson City and the Upper Nantahala River — when catch-and-release regulations take effect and fresh stockings begin. Fall is Mac Brown's favorite season for big fish — half a dozen of his personal best brown trout have fallen to a large October Caddis pattern on the wild streams of Great Smoky Mountains National Park. Streamer fishing on the lower Nantahala also produces adrenaline-rush encounters with the largest brown trout of the year as water temperatures drop and fish migrate into feeding mode.",
  "destination-angler-fundamental-schools": "Mac Brown — FFI Master Casting Instructor, Lifetime Achievement Award recipient, and 40-year guide with experience from the Smoky Mountains to New Zealand — offers an interconnected set of progressive schools designed for destination anglers preparing for saltwater flats, steelhead rivers, and technical trout waters. Every program builds the complete five-component system: casting, line control, hook setting, playing fish, and landing fish. The anglers who thrive in Belize, New Zealand, or Pacific Northwest steelhead country don't get there by accident — they get there through honest skill development on home water, well before the trip.",
};

const heroImages = [
  "/images/fall-river-fishing.webp",
  "/images/appalachian-panorama.webp",
  "/images/waterfall.webp",
  "/images/fall-brown-trout.webp",
  "/images/flies-closeup.webp",
  "/images/youth-rainbow-montana.webp",
  "/images/smoky-mountains.webp",
  "/images/fly-school-1.webp",
];

function heroForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return heroImages[hash % heroImages.length];
}

const mobileHeroMap: Record<string, string> = {
  "/images/fall-river-fishing.webp": "/images/mobile/fall-river-fishing.webp",
  "/images/appalachian-panorama.webp": "/images/mobile/appalachian-panorama.webp",
  "/images/waterfall.webp": "/images/mobile/waterfall.webp",
  "/images/flies-closeup.webp": "/images/mobile/flies-closeup.webp",
  "/images/youth-rainbow-montana.webp": "/images/mobile/youth-rainbow-montana.webp",
  "/images/smoky-mountains.webp": "/images/mobile/smoky-mountains.webp",
  "/images/fly-school-1.webp": "/images/mobile/fly-school-1.webp",
  "/images/ffi-testing-rochester-mn.webp": "/images/mobile/ffi-testing-rochester-mn.webp",
  "/images/tuck-river-spey.webp": "/images/mobile/tuck-river-spey.webp",
};

const NOINDEX_SLUGS = new Set([
  "tuckasegee-fly-fishing-report-2016",
  "tuckasegee-river-delayed-harvest-trout-fishing",
  "epic-trout-fishing-may-bryson-city-nc",
  "deep-creek-fishing-report",
  "fly-fishing-report-bryson-city-nc",
  "nantahala-river-fly-fishing-report",
  "upper-nantahala-river-fly-fishing-report",
  "fall-delayed-harvest-trout-fishing-season-nc",
]);

const typeMap: Record<string, "Article" | "TechArticle" | "ScholarlyArticle"> = {
  "comprehensive-university-tippet-study": "ScholarlyArticle",
  "understanding-fly-rod-balance-swing-weight-deflection-continuity-frequency": "ScholarlyArticle",
  "understanding-fly-rod-actions-modulus-rod-feel-dampening": "ScholarlyArticle",
  "creel-study-for-upper-nantahala-river-1996": "ScholarlyArticle",
  "comprehensive-university-fly-line-study": "ScholarlyArticle",
  "learn-loop-control-morphing-shapes-created-fly-casting": "ScholarlyArticle",
  "casting-model": "ScholarlyArticle",
  "learn-fly-fish-nc-poem": "Article",
  "just-do-it-commit-to-your-fly-fishing-journey": "Article",
  "stewards-of-the-river-or-pillagers": "Article",
  "total-fly-fishing-experience": "Article",
  "making-fly-fishing-memories-one-guided-trout-fishing-trip": "Article",
  "northwest-expo-albany-oregon": "Article",
  "team-usa-fly-fishing-in-bryson-city-nc": "Article",
};

const CATEGORY_SUFFIX: Record<string, string> = {
  "Technique":       "Fly Fishing Techniques",
  "Instruction":     "Fly Fishing Tips",
  "Fishing Reports": "Smoky Mountains Fly Fishing",
  "Guide Trips":     "Guided Fly Fishing Trips",
  "Trip Stories":    "Smoky Mountains Fly Fishing",
};

function blogTitle(title: string, category: string): string {
  const suffix = CATEGORY_SUFFIX[category] ?? "Fly Fishing Tips";
  return title.length + 3 + suffix.length <= 60
    ? `${title} | ${suffix}`
    : title;
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  const seoTitle = blogTitle(post.title, post.category);
  return {
    title: seoTitle,
    description: post.excerpt,
    ...(NOINDEX_SLUGS.has(slug) ? { robots: { index: false, follow: false } } : {}),
    alternates: { canonical: `https://macbrownflyfish.com/blog/${post.slug}/` },
    keywords: post.keywords,
    openGraph: {
      title: seoTitle,
      description: post.excerpt,
      url: `https://macbrownflyfish.com/blog/${post.slug}/`,
      type: "article",
      images: post.img ? [{ url: `https://macbrownflyfish.com${post.img}` }] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter(p => !p.hidden && p.slug !== post!.slug && p.category === post!.category)
    .slice(0, 3)
    .map(p => ({ title: p.title, slug: p.slug, category: p.category, date: p.date }));

  const GLOSSARY_SLUGS = new Set([
    "fly-fishing-terms-glossary-definitions",
    "fly-casting-definitions-glossary-terminology",
  ]);

  if (GLOSSARY_SLUGS.has(post.slug)) {
    const terms = faqMap[post.slug] ?? [];
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(definedTermSetSchema(post, terms)),
          }}
        />
        <GlossaryLayout
          post={post}
          heroImageSrc={heroForSlug(post.slug)}
          heroAlt={post.heroAlt ?? ""}
          bodyImageAlt={post.bodyImageAlt ?? ""}
          relatedPosts={relatedPosts}
          faqs={terms}
          aeoText={aeoMap[post.slug]}
          dateModified={terms.length > 0 ? "2026-06-09T00:00:00Z" : undefined}
        />
      </>
    );
  }

  return (
    <BlogPostLayout
      post={post}
      heroImageSrc={post.img ?? heroForSlug(post.slug)}
      heroImageSrcMobile={mobileHeroMap[post.img ?? heroForSlug(post.slug)]}
      heroAlt={post.heroAlt ?? ""}
      bodyImageAlt={post.bodyImageAlt ?? ""}
      relatedPosts={relatedPosts}
      cta={post.cta}
      faqs={faqMap[post.slug]}
      aeoText={aeoMap[post.slug]}
      articleType={typeMap[post.slug] ?? "TechArticle"}
      dateModified={faqMap[post.slug] ? "2026-06-09T00:00:00Z" : undefined}
    />
  );
}
