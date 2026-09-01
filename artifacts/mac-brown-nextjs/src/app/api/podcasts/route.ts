import { NextResponse } from "next/server";
import { getEpisodes } from "@/lib/podcasts";

export async function GET() {
  try {
    const episodes = await getEpisodes();
    return NextResponse.json({ episodes, source: "live" });
  } catch (err) {
    console.error("Failed to fetch podcast RSS:", err);
    return NextResponse.json({ error: "Failed to fetch podcast episodes" }, { status: 500 });
  }
}
