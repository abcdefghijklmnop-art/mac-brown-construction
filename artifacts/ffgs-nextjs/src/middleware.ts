import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AMP_PARAMS = ["amp", "noamp", "nonamp"];

export function middleware(request: NextRequest) {
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
