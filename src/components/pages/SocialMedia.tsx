"use client";

import Image from "next/image";
import {
  ExternalLink,
  Instagram,
  Link2,
  Loader2,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { permalinkToEmbedUrl } from "@/lib/instagram";

interface InstagramPost {
  permalink: string;
  thumbnailUrl: string | null;
  caption: string | null;
}

function InstagramPostCard({
  post,
  isAdmin,
  onDelete,
}: {
  post: InstagramPost;
  isAdmin: boolean;
  onDelete: (url: string) => void;
}) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Remove this Instagram post?")) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/admin/social-media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: post.permalink }),
      });
      if (res.ok) onDelete(post.permalink);
      else alert("Failed to remove post");
    } catch {
      alert("Network error");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between border-b border-stone-100 px-4 py-3">
        <div className="flex items-center gap-2 text-stone-700">
          <Instagram size={16} className="text-primary" />
          <span className="text-xs font-medium tracking-[0.12em] uppercase">
            Instagram
          </span>
        </div>
        {isAdmin && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="rounded-full p-1.5 text-stone-400 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
            title="Remove post"
            aria-label="Remove Instagram post"
          >
            {deleting ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Trash2 size={15} />
            )}
          </button>
        )}
      </div>

      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[4/5] overflow-hidden bg-stone-100"
        aria-label="Open Instagram post"
      >
        {post.thumbnailUrl ? (
          <Image
            src={post.thumbnailUrl}
            alt={post.caption ?? "Instagram post"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <iframe
            src={permalinkToEmbedUrl(post.permalink)}
            title="Instagram post preview"
            className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] border-0"
            scrolling="no"
            loading="lazy"
          />
        )}
      </a>

      <div className="flex flex-1 flex-col p-4">
        {post.caption ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-stone-600">
            {post.caption}
          </p>
        ) : (
          <p className="text-sm text-stone-400">
            View this post on Instagram for the full caption.
          </p>
        )}

        <a
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-primary transition-colors hover:text-stone-800"
        >
          View on Instagram
          <ExternalLink size={12} />
        </a>
      </div>
    </article>
  );
}

function AddEmbedForm({ onAdded }: { onAdded: (post: InstagramPost) => void }) {
  const [embed, setEmbed] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/admin/social-media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embed }),
      });
      const data = await res.json();

      if (res.ok && data.post) {
        onAdded(data.post);
        setEmbed("");
        return;
      }

      if (res.ok && data.url) {
        onAdded({
          permalink: data.url,
          thumbnailUrl: null,
          caption: null,
        });
        setEmbed("");
        return;
      }

      setError(data.error || "Failed to add post");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="col-span-full">
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
      >
        <div className="border-b border-stone-100 bg-gradient-to-r from-stone-50 via-white to-stone-50 px-5 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-sm">
              <Instagram size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-stone-800">
                  Add Instagram Post
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-stone-500">
                  <Sparkles size={10} />
                  Admin
                </span>
              </div>
              <p className="mt-1 text-sm text-stone-500">
                Paste a post link from Instagram — it will appear in the feed
                below with a trimmed preview.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 px-5 py-4 sm:px-6 sm:py-5">
          <div
            className={`flex flex-col gap-3 rounded-xl border bg-stone-50/80 p-2 transition-all duration-200 sm:flex-row sm:items-center ${
              focused
                ? "border-primary/40 bg-white ring-4 ring-primary/10"
                : "border-stone-200"
            }`}
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 px-2">
              <Link2
                size={18}
                className={`shrink-0 transition-colors ${focused ? "text-primary" : "text-stone-400"}`}
              />
              <input
                type="text"
                value={embed}
                onChange={(e) => setEmbed(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="https://www.instagram.com/p/…"
                className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting || !embed.trim()}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-stone-800 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-45 sm:min-w-[132px]"
            >
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Adding…
                </>
              ) : (
                "Add Post"
              )}
            </button>
          </div>

          <p className="text-xs leading-relaxed text-stone-400">
            Supports post and reel URLs, or embed code from{" "}
            <span className="text-stone-500">Share → Embed</span> on Instagram.
          </p>

          {error && (
            <div
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              role="alert"
            >
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

function SocialMedia() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const [postsRes, adminRes] = await Promise.all([
        fetch("/api/admin/social-media"),
        fetch("/api/admin/verify"),
      ]);

      if (postsRes.ok) {
        const data = await postsRes.json();
        setPosts(data.posts || []);
      }

      if (adminRes.ok) {
        const { valid } = await adminRes.json();
        if (valid) setIsAdmin(true);
      }

      setLoading(false);
    }

    init();
  }, []);

  function handleDelete(url: string) {
    setPosts((prev) => prev.filter((post) => post.permalink !== url));
  }

  function handleAdded(post: InstagramPost) {
    setPosts((prev) => [...prev, post]);
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8">
      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 size={32} className="animate-spin text-stone-400" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          {isAdmin && <AddEmbedForm onAdded={handleAdded} />}

          {posts.length === 0 && !isAdmin && (
            <p className="col-span-full py-8 text-center text-stone-500">
              Follow us on Instagram for the latest updates.
            </p>
          )}

          {posts.length === 0 && isAdmin && (
            <p className="col-span-full rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 py-10 text-center text-sm text-stone-500">
              No posts yet — add your first Instagram link above.
            </p>
          )}

          {posts.map((post) => (
            <InstagramPostCard
              key={post.permalink}
              post={post}
              isAdmin={isAdmin}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SocialMedia;
