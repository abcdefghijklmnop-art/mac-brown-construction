import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { BlogPostLayout, type FaqItem, type HowToData } from "@/components/blog-post-layout";
import evolutionFaq from "../../../../content/blog/evolution-fly-casting-instruction-fly-fishing-lessons/faq.json";
import oarFrameFaq from "../../../../content/blog/setting-up-an-oar-frame/faq.json";
import oarFrameHowTo from "../../../../content/blog/setting-up-an-oar-frame/howto.json";
import nymphingFaq from "../../../../content/blog/get-down-nymphing/faq.json";
import nymphingHowTo from "../../../../content/blog/get-down-nymphing/howto.json";
import styleSubstanceFaq from "../../../../content/blog/fly-casting-style-substance-intent/faq.json";
import entropyFaq from "../../../../content/blog/fly-fishing-and-fly-casting-entropy-or-evolution/faq.json";
import becomingGuideFaq from "../../../../content/blog/learn-how-to-become-a-fly-fishing-guide-and-instructor/faq.json";
import ffgsClassesFaq from "../../../../content/blog/fly-fishing-classes-north-carolina-smoky-mountains/faq.json";
import loopPublicationFaq from "../../../../content/blog/loop-publication-2017-ffi-fair/faq.json";
import hallOfFameFaq from "../../../../content/blog/southern-appalachian-fly-fishing-museum-induction/faq.json";
import atlantaFaq from "../../../../content/blog/top-fly-fishing-guide-school-atlanta-ga/faq.json";
import brysonCityTroutCapitalFaq from "../../../../content/blog/bryson-city-trout-capital-fly-fishing/faq.json";

const faqMap: Record<string, FaqItem[]> = {
  "evolution-fly-casting-instruction-fly-fishing-lessons": evolutionFaq as FaqItem[],
  "setting-up-an-oar-frame": oarFrameFaq as FaqItem[],
  "get-down-nymphing": nymphingFaq as FaqItem[],
  "fly-casting-style-substance-intent": styleSubstanceFaq as FaqItem[],
  "fly-fishing-and-fly-casting-entropy-or-evolution": entropyFaq as FaqItem[],
  "learn-how-to-become-a-fly-fishing-guide-and-instructor": becomingGuideFaq as FaqItem[],
  "fly-fishing-classes-north-carolina-smoky-mountains": ffgsClassesFaq as FaqItem[],
  "loop-publication-2017-ffi-fair": loopPublicationFaq as FaqItem[],
  "southern-appalachian-fly-fishing-museum-induction": hallOfFameFaq as FaqItem[],
  "top-fly-fishing-guide-school-atlanta-ga": atlantaFaq as FaqItem[],
  "bryson-city-trout-capital-fly-fishing": brysonCityTroutCapitalFaq as FaqItem[],
};

const howToMap: Record<string, HowToData> = {
  "setting-up-an-oar-frame": oarFrameHowTo as HowToData,
  "get-down-nymphing": nymphingHowTo as HowToData,
};

const aeoMap: Record<string, string> = {
  "evolution-fly-casting-instruction-fly-fishing-lessons": "The evolution of fly casting instruction and fly fishing lessons has accelerated over the past several decades — driven by advances in casting mechanics, competition fishing, and the growth of certified instructor programs through Fly Fishers International. Mac Brown has been teaching fly casting and fly fishing from Bryson City, North Carolina since 1987, refining his approach through 40+ years of on-water observation, university research, and training elite competitive anglers.",
  "setting-up-an-oar-frame": "Setting up an oar frame correctly is essential for any professional fly fishing guide running a drift boat or raft on moving water. This guide covers NRS Otter raft setup — frame placement, oar balance, oar length and spacing, oarlock positioning, and weight distribution for a day on the river. The Fly Fishing Guide School in Bryson City, NC covers oar frame setup on day one of the 4-day guide training program.",
  "get-down-nymphing": "Getting nymphs down to the productive zone in the water column is one of the most important skills in fly fishing — and one of the most commonly done wrong. The keys are sufficient weight, correct indicator placement at 1.5 times water depth, an immediate upstream mend after the cast, and tight line awareness for subtle strike detection. This guide covers the fundamentals taught at the Fly Fishing Guide School in Bryson City, NC.",
  "fly-casting-style-substance-intent": "Style, substance, and intent are the three foundational concepts that separate good fly casting instruction from great fly casting instruction. Style is individual expression — elbow position, arc, body rotation. Substance is universal mechanics — rod tip path, loop formation, force application. Intent is knowing what you want the line and fly to do before you cast. All three must work together for consistently accurate, efficient fly casting.",
  "fly-fishing-and-fly-casting-entropy-or-evolution": "Entropy in fly casting instruction occurs when useful principles are simplified into phrases, repeated without context, and eventually divorced from the mechanics that made them true. Evolution occurs when instructors build on earlier understanding rather than replacing it with simpler alternatives. At the Fly Fishing Guide School in Bryson City, NC, we teach from first principles — so students can self-correct on any water long after the course ends.",
  "learn-how-to-become-a-fly-fishing-guide-and-instructor": "Learning how to become a fly fishing guide and instructor starts with the Fly Fishing Guide School in Bryson City, North Carolina — a 4-day professional training program that has been developing elite guides and instructors since 1987. Entry-level guide wages typically range from $2,400 to $3,000 per month. The curriculum covers fly casting at the FFI Master Instructor level, professional river rowing on the Tuckasegee River, water reading, guiding methodology, and client communication — taught by a faculty of 4 FFI Master Certified Casting Instructors, 3 Fly Fishing Team USA members, and 4 Team USA coaches with 450+ combined years of experience. Tuition is $4,850.",
  "fly-fishing-classes-north-carolina-smoky-mountains": "Fly fishing classes in the North Carolina Smoky Mountains are offered year-round by the Fly Fishing Guide School in Bryson City, NC — a 4-day intensive program covering fly casting, river rowing, water reading, nymphing, dry fly fishing, and guiding methodology. Faculty includes 4 FFI Master Certified Casting Instructors, 3 Fly Fishing Team USA members, 4 Team USA coaches, and 5 certified whitewater rowing professionals with 450+ combined years of experience. Tuition is $4,850.",
  "loop-publication-2017-ffi-fair": "The Loop is the official fly casting publication of Fly Fishers International — a peer-reviewed journal covering casting mechanics, instruction methodology, and fly fishing education written by some of the most credentialed instructors in the sport. Mac Brown serves as Associate Editor of The Loop Journal and has contributed to the publication throughout his career as an FFI Master Casting Instructor and Director of Teacher Development for FFI Casting Instructor Education.",
  "southern-appalachian-fly-fishing-museum-induction": "Mac Brown was inducted into the Southern Appalachian Fly Fishing Hall of Fame on August 26, 2017, in Bryson City, North Carolina — recognized for his contributions to fly fishing and fly casting education globally through instruction, university research, writing, and the development of guides and instructors since 1987. Mac Brown is the founder of Mac Brown Fly Fish and the Fly Fishing Guide School, the only FFI Master Casting Instructor in North Carolina, and author of Casting Angles.",
  "top-fly-fishing-guide-school-atlanta-ga": "The Fly Fishing Guide School in Bryson City, North Carolina — approximately 2.5 hours from Atlanta — is the most credentialed fly fishing training program in the eastern United States, drawing students from metro Atlanta every session for both career-track guide training and serious recreational skill development. The four-day curriculum covers fly casting mechanics at the FFI Master Instructor level, drift boat rowing on the Tuckasegee River, water reading, aquatic entomology, rigging, and guiding methodology — taught by four FFI Master Certified Casting Instructors, Fly Fishing Team USA members and coaches, World Championship medalists, and Hall of Fame inductees with 450+ combined years of on-water experience. Tuition is $4,850 for the full program; sessions run March through November.",
  "bryson-city-trout-capital-fly-fishing": "Bryson City, North Carolina is considered the Trout Capital of the East because Swain County contains over 2,400 miles of wild trout water and one of the highest percentages of protected public land of any county east of the Mississippi River — giving fly fishing guide trainees access to freestone streams, tailwaters, and technical pocket water within a single training week. The Fly Fishing Guide School is based here because no other location in the eastern United States compresses this much water-type diversity, public land access, and technical fishing challenge into one small radius. This post explains what makes Bryson City the right place to train, and why location is one of the most important questions to ask any guide school.",
};

const heroImages = [
  "/images/smokies-river-fall.webp",
  "/images/guide-school-casting.webp",
  "/images/fly-casting-instruction.webp",
  "/images/smoky-mountains-panorama.webp",
  "/images/wild-brown-trout.webp",
];

const slugHeroOverride: Record<string, string> = {
  "top-fly-fishing-guide-school-atlanta-ga": "/images/raft-casting-three.webp",
  "bryson-city-trout-capital-fly-fishing": "/images/tuckasegee-sunrise.webp",
};

const slugHeroPosition: Record<string, string> = {
  "top-fly-fishing-guide-school-atlanta-ga": "object-top",
};

function heroForSlug(slug: string): string {
  if (slugHeroOverride[slug]) return slugHeroOverride[slug];
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return heroImages[hash % heroImages.length];
}

const mobileHeroMap: Record<string, string> = {
  "/images/smokies-river-fall.webp": "/images/mobile/smokies-river-fall.webp",
  "/images/smoky-mountains-panorama.webp": "/images/mobile/smoky-mountains-panorama.webp",
  "/images/wild-brown-trout.webp": "/images/mobile/wild-brown-trout.webp",
  "/images/raft-casting-three.webp": "/images/mobile/raft-casting-three.webp",
};

function blogTitle(title: string): string {
  const suffix = "Fly Fishing Guide School";
  return title.length + 3 + suffix.length <= 60
    ? `${title} | ${suffix}`
    : title;
}

const typeMap: Record<string, "BlogPosting" | "Article" | "TechArticle"> = {
  "setting-up-an-oar-frame": "TechArticle",
  "get-down-nymphing": "TechArticle",
  "learn-how-to-become-a-fly-fishing-guide-and-instructor": "TechArticle",
  "bryson-city-trout-capital-fly-fishing": "Article",
  "loop-publication-2017-ffi-fair": "Article",
  "southern-appalachian-fly-fishing-museum-induction": "Article",
  "top-fly-fishing-guide-school-atlanta-ga": "Article",
};

export async function generateStaticParams() {
  return blogPosts.filter((p) => !p.hidden).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  const seoTitle = blogTitle(post.title);
  return {
    title: seoTitle,
    description: post.excerpt,
    alternates: {
      canonical: `https://flyfishingguideschool.com/blog/${post.slug}/`,
    },
    keywords: post.keywords,
    openGraph: {
      title: seoTitle,
      description: post.excerpt,
      url: `https://flyfishingguideschool.com/blog/${post.slug}/`,
      images: [post.img],
      type: "article",
    },
  };
}

export default async function BlogPostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
        <p className="text-muted-foreground mb-8">
          This article doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/blog/"
          className="text-sm font-semibold uppercase tracking-widest text-primary hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const heroImageSrc = heroForSlug(post.slug);
  const heroImageSrcMobile = mobileHeroMap[heroImageSrc];

  const relatedPosts = blogPosts
    .filter((p) => !p.hidden && p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug, category: p.category, date: p.date }));

  return (
    <BlogPostLayout
      post={post}
      heroImageSrc={heroImageSrc}
      heroImageSrcMobile={heroImageSrcMobile}
      heroAlt={`${post.title} — Fly Fishing Guide School`}
      bodyImageAlt={`${post.title} — Fly Fishing Guide School`}
      relatedPosts={relatedPosts}
      faqs={faqMap[post.slug]}
      howTo={howToMap[post.slug]}
      aeoText={aeoMap[post.slug]}
      articleType={typeMap[post.slug] ?? "TechArticle"}
      heroObjectPosition={slugHeroPosition[post.slug]}
      dateModified={post.dateModified}
      showTwoPaths={post.slug === "bryson-city-trout-capital-fly-fishing"}
    />
  );
}
