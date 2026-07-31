"use client";

import Script from "next/script";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

function processInstagramEmbeds() {
  window.instgrm?.Embeds.process();
}

function InstagramEmbed({
  permalink,
  isAdmin,
  onDelete,
}: {
  permalink: string;
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
        body: JSON.stringify({ url: permalink }),
      });
      if (res.ok) onDelete(permalink);
      else alert("Failed to remove post");
    } catch {
      alert("Network error");
    } finally {
      setDeleting(false);
    }
  }

  const embedUrl = `${permalink}?utm_source=ig_embed&utm_campaign=loading`;

  return (
    <div className="group relative flex justify-center">
      <blockquote
        className="instagram-media w-full max-w-[540px] min-w-[280px] sm:min-w-[326px]"
        data-instgrm-captioned
        data-instgrm-permalink={embedUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: 1,
          maxWidth: 540,
          minWidth: 280,
          padding: 0,
          width: "100%",
        }}
      />

      {isAdmin && (
        <button
          type="button"
          onClick={handleDelete}
          disabled={deleting}
          className="absolute top-3 right-3 z-10 bg-primary/90 hover:bg-primary text-white rounded-full p-2 shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
          title="Remove post"
          aria-label="Remove Instagram post"
        >
          {deleting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Trash2 size={16} />
          )}
        </button>
      )}
    </div>
  );
}

function AddEmbedForm({ onAdded }: { onAdded: (url: string) => void }) {
  const [embed, setEmbed] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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

      if (res.ok && data.url) {
        onAdded(data.url);
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
    <form
      onSubmit={handleSubmit}
      className="col-span-full rounded-xl border-2 border-dashed border-stone-300 bg-stone-50 p-5 sm:p-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <Plus size={18} className="text-stone-500" />
        <h3 className="text-sm font-semibold tracking-wide text-stone-700 uppercase">
          Add Instagram Post
        </h3>
      </div>

      <textarea
        value={embed}
        onChange={(e) => setEmbed(e.target.value)}
        placeholder="Paste an Instagram post URL or embed code from Share → Embed"
        rows={3}
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-primary/60 resize-y min-h-[88px]"
      />

      <p className="mt-2 text-xs text-stone-500">
        Example: https://www.instagram.com/p/ABC123/ or the full embed block from
        Instagram.
      </p>

      {error && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting || !embed.trim()}
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-stone-800 px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-white transition-colors hover:bg-primary disabled:opacity-50"
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
    </form>
  );
}

function SocialMedia() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [scriptReady, setScriptReady] = useState(false);

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

  useEffect(() => {
    if (!loading && scriptReady && posts.length > 0) {
      processInstagramEmbeds();
    }
  }, [loading, scriptReady, posts]);

  function handleDelete(url: string) {
    setPosts((prev) => prev.filter((post) => post !== url));
  }

  function handleAdded(url: string) {
    setPosts((prev) => [...prev, url]);
  }

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto py-8 sm:py-10">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          setScriptReady(true);
          processInstagramEmbeds();
        }}
      />

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 size={32} className="text-stone-400 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {posts.length === 0 && !isAdmin && (
            <p className="col-span-full text-center text-stone-500 py-8">
              Follow us on Instagram for the latest updates.
            </p>
          )}

          {posts.map((permalink) => (
            <InstagramEmbed
              key={permalink}
              permalink={permalink}
              isAdmin={isAdmin}
              onDelete={handleDelete}
            />
          ))}

          {isAdmin && <AddEmbedForm onAdded={handleAdded} />}
        </div>
      )}
    </div>
  );
}

export default SocialMedia;
