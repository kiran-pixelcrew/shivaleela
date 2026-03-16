"use client";

import Image from "next/image";
import { Loader2, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function GalleryImageCard({
  url,
  index,
  isAdmin,
  isDefault,
  onDelete,
}: {
  url: string;
  index: number;
  isAdmin: boolean;
  isDefault: boolean;
  onDelete: (url: string) => void;
}) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Remove this image?")) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/admin/gallery/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (res.ok) onDelete(url);
      else alert("Failed to delete image");
    } catch {
      alert("Network error");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="group relative w-full aspect-square rounded-sm overflow-hidden">
      <Image
        src={url}
        alt={`Performing Team ${index + 1}`}
        fill
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        unoptimized={!isDefault}
      />

      {isAdmin && !isDefault && (
        <div className="absolute inset-0 bg-transparent sm:bg-black/0 sm:group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="bg-primary/90 hover:bg-primary text-white rounded-full p-2 shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
            title="Remove image"
          >
            {deleting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Trash2 size={16} />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function AddImageCard({ onUploaded }: { onUploaded: (url: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/admin/gallery/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) onUploaded(data.url);
      else alert(data.error || "Upload failed");
    } catch {
      alert("Network error during upload");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="relative w-full aspect-square rounded-sm overflow-hidden border-2 border-dashed border-stone-300 hover:border-primary/60 bg-stone-50 transition-colors duration-300">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleUpload}
        id="add-gallery-image"
      />
      <label
        htmlFor="add-gallery-image"
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer"
      >
        {uploading ? (
          <Loader2 size={24} className="text-stone-400 animate-spin" />
        ) : (
          <>
            <Plus size={22} className="text-stone-500" />
            <span className="text-[10px] tracking-wider uppercase text-stone-500">
              Add Image
            </span>
          </>
        )}
      </label>
    </div>
  );
}

function Gallery() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isGridVisible, setIsGridVisible] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    ...uploadedImages.map((url) => ({ url, isDefault: false })),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGridVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function init() {
      const [galleryRes, adminRes] = await Promise.all([
        fetch("/api/admin/gallery/upload"),
        fetch("/api/admin/verify"),
      ]);

      if (galleryRes.ok) {
        const data = await galleryRes.json();
        setUploadedImages(data.images || []);
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
    setUploadedImages((prev) => prev.filter((img) => img !== url));
  }

  function handleUploaded(url: string) {
    setUploadedImages((prev) => [...prev, url]);
  }

  return (
    <div id="events" className="">
      <div
        ref={gridRef}
        className={`w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-8 sm:pt-10 md:pt-12 transition-all duration-700 ease-out ${isGridVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {loading ? (
          <div className="col-span-full flex justify-center py-10">
            <Loader2 size={26} className="text-stone-400 animate-spin" />
          </div>
        ) : (
          <>
            {galleryItems.map((item, i) => (
              <GalleryImageCard
                key={`${item.url}-${i}`}
                url={item.url}
                index={i}
                isAdmin={isAdmin}
                isDefault={item.isDefault}
                onDelete={handleDelete}
              />
            ))}

            {isAdmin && <AddImageCard onUploaded={handleUploaded} />}
          </>
        )}
      </div>
    </div>
  );
}

export default Gallery;