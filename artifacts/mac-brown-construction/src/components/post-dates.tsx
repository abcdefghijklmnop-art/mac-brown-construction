import { formatDate, type Post } from "@/lib/posts";

// Visible published/updated dates that match the BlogPosting schema and sitemap.
export function PostDates({ post }: { post: Post }) {
  return (
    <p className="text-xs text-muted-foreground mb-8">
      By <a href="/about/" className="text-primary hover:underline">Mac Brown</a>
      {" · "}Published <time dateTime={post.published}>{formatDate(post.published)}</time>
      {post.modified !== post.published && (
        <>
          {" · "}Updated <time dateTime={post.modified}>{formatDate(post.modified)}</time>
        </>
      )}
    </p>
  );
}
