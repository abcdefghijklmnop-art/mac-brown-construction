import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
