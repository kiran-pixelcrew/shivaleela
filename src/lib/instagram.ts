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
