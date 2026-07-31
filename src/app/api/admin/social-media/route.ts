import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import type { Document, Filter, UpdateFilter } from "mongodb";
import { getDb, SITE_COLLECTION, SITE_DOC_ID } from "@/lib/mongodb";
import { parseInstagramPermalink } from "@/lib/instagram";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

async function verifyAdmin(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) return false;

  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

const siteFilter = { _id: SITE_DOC_ID } as unknown as Filter<Document>;

function pushSocialPostUpdate(url: string): UpdateFilter<Document> {
  return {
    $push: { socialMediaPosts: url },
  } as unknown as UpdateFilter<Document>;
}

function pullSocialPostUpdate(url: string): UpdateFilter<Document> {
  return {
    $pull: { socialMediaPosts: url },
  } as unknown as UpdateFilter<Document>;
}

export async function GET() {
  const db = await getDb();
  const doc = await db
    .collection(SITE_COLLECTION)
    .findOne(siteFilter, { projection: { socialMediaPosts: 1 } });

  return NextResponse.json({ posts: doc?.socialMediaPosts ?? [] });
}

export async function POST(req: NextRequest) {
  if (!(await verifyAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { embed } = await req.json();
  if (!embed || typeof embed !== "string") {
    return NextResponse.json(
      { error: "Instagram post URL or embed code is required" },
      { status: 400 },
    );
  }

  const permalink = parseInstagramPermalink(embed);
  if (!permalink) {
    return NextResponse.json(
      {
        error:
          "Invalid Instagram link. Paste a post URL (instagram.com/p/...) or embed code.",
      },
      { status: 400 },
    );
  }

  const db = await getDb();
  const doc = await db
    .collection(SITE_COLLECTION)
    .findOne(siteFilter, { projection: { socialMediaPosts: 1 } });

  const existing: string[] = doc?.socialMediaPosts ?? [];
  if (existing.includes(permalink)) {
    return NextResponse.json(
      { error: "This Instagram post is already added" },
      { status: 409 },
    );
  }

  await db
    .collection(SITE_COLLECTION)
    .updateOne(siteFilter, pushSocialPostUpdate(permalink), { upsert: true });

  return NextResponse.json({ success: true, url: permalink });
}

export async function DELETE(req: NextRequest) {
  if (!(await verifyAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { url } = await req.json();
  if (!url) {
    return NextResponse.json({ error: "No url provided" }, { status: 400 });
  }

  const db = await getDb();
  await db
    .collection(SITE_COLLECTION)
    .updateOne(siteFilter, pullSocialPostUpdate(url));

  return NextResponse.json({ success: true });
}
