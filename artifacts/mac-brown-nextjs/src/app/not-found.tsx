import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="font-serif text-5xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-8">Page not found.</p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
