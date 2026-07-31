export function parseInstagramPermalink(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const permalinkFromEmbed = trimmed.match(
    /data-instgrm-permalink="([^"]+)"/i,
  )?.[1];
  const candidate = permalinkFromEmbed ?? trimmed;

  try {
    const url = new URL(candidate.split("?")[0]);
    if (!url.hostname.replace(/^www\./, "").includes("instagram.com")) {
      return null;
    }

    const match = url.pathname.match(/^\/(p|reel)\/([A-Za-z0-9_-]+)\/?$/);
    if (!match) return null;

    return `https://www.instagram.com/${match[1]}/${match[2]}/`;
  } catch {
    const match = trimmed.match(/instagram\.com\/(p|reel)\/([A-Za-z0-9_-]+)/i);
    if (!match) return null;
    return `https://www.instagram.com/${match[1]}/${match[2]}/`;
  }
}

export function permalinkToEmbedUrl(permalink: string): string {
  return `${permalink.replace(/\/?$/, "/")}embed/`;
}

export function truncateCaption(text: string, maxLength = 120): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength).trimEnd()}…`;
}

export interface InstagramPostPreview {
  permalink: string;
  thumbnailUrl: string | null;
  caption: string | null;
}

interface OEmbedResponse {
  thumbnail_url?: string;
  title?: string;
  author_name?: string;
  error?: { message: string };
}

export async function fetchInstagramPostPreview(
  permalink: string,
): Promise<InstagramPostPreview> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();

  if (accessToken) {
    try {
      const url = new URL("https://graph.facebook.com/v21.0/instagram_oembed");
      url.searchParams.set("url", permalink);
      url.searchParams.set("access_token", accessToken);
      url.searchParams.set("omitscript", "true");

      const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
      const data = (await res.json()) as OEmbedResponse;

      if (res.ok) {
        return {
          permalink,
          thumbnailUrl: data.thumbnail_url ?? null,
          caption: data.title ? truncateCaption(data.title) : null,
        };
      }
    } catch {
      // Fall through to basic preview.
    }
  }

  return {
    permalink,
    thumbnailUrl: null,
    caption: null,
  };
}
