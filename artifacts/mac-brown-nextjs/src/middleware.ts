import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AMP_PARAMS = ["amp", "noamp", "nonamp"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 410 Gone: WordPress admin and uploads paths that have no redirect target.
  // Specific upload files with redirect targets are handled first in next.config.ts
  // redirects (which run before middleware), so those never reach here.
  if (
    pathname.startsWith("/wp-admin") ||
    pathname.startsWith("/wp-content/uploads")
  ) {
    return new NextResponse(null, { status: 410 });
  }

  const url = request.nextUrl;

  if (AMP_PARAMS.some((p) => url.searchParams.has(p))) {
    const clean = url.clone();
    AMP_PARAMS.forEach((p) => clean.searchParams.delete(p));
    return NextResponse.redirect(clean, { status: 301 });
  }
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
