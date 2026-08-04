"use client";

import { Noto_Serif_Kannada } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const notoSerifKannada = Noto_Serif_Kannada({
  weight: ["400", "700"],
  subsets: ["kannada", "latin"],
});

const STORAGE_KEY = "sirigannadam-gelge-banner-dismissed";
const TICKET_URL = "https://www.theticket9.com/event/siri-gannadam-gelge";
const BANNER_TEXT =
  "🎟️ ಸೀಟುಗಳು ಭರ್ತಿಯಾಗುತ್ತಿವೆ! | Seats Filling Fast! — Book Your Tickets for Sirigannadam Gelge | 16th August 2026";

export default function AnnouncementBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animatingIn, setAnimatingIn] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY) === "true";
      if (!dismissed) {
        setVisible(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimatingIn(true));
        });
      }
    } catch {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimatingIn(true));
      });
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (!visible) {
      root.style.setProperty("--announcement-h", "0px");
      return;
    }

    const syncHeight = () => {
      const height = bannerRef.current?.offsetHeight ?? 0;
      root.style.setProperty("--announcement-h", `${height}px`);
    };

    syncHeight();
    window.addEventListener("resize", syncHeight);

    return () => {
      window.removeEventListener("resize", syncHeight);
      root.style.setProperty("--announcement-h", "0px");
    };
  }, [visible, animatingIn]);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore storage failures
    }
    setAnimatingIn(false);
    window.setTimeout(() => setVisible(false), 300);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      ref={bannerRef}
      role="region"
      aria-label="Event announcement"
      className={`${notoSerifKannada.className} fixed inset-x-0 top-0 z-[60] w-full bg-[#8B0000] text-white shadow-md transition-transform duration-500 ease-out ${
        animatingIn ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ fontFamily: notoSerifKannada.style.fontFamily }}
    >
      <div className="mx-auto flex min-h-11 w-full max-w-[1600px] items-center gap-2 px-2 py-2.5 sm:min-h-12 sm:gap-3 sm:px-4 sm:py-3 md:px-6">
        {/* Marquee — overflow-x only; extra inner padding prevents glyph clip */}
        <div className="relative min-w-0 flex-1 overflow-x-hidden mask-fade-x">
          <div className="announcement-marquee flex w-max items-center whitespace-nowrap py-0.5 text-xs font-bold leading-normal tracking-wide sm:text-sm md:text-[15px]">
            <span className="announcement-shimmer px-3 sm:px-6">{BANNER_TEXT}</span>
            <span className="announcement-shimmer px-3 sm:px-6" aria-hidden="true">
              {BANNER_TEXT}
            </span>
          </div>
        </div>

        {/* Actions aligned to same vertical center */}
        <div
          className="flex shrink-0 items-center gap-1.5 self-center sm:gap-2.5"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center justify-center rounded-md bg-[#FFD700] px-3.5 text-xs font-bold text-[#8B0000] shadow-sm transition-all duration-200 hover:scale-[1.03] hover:bg-[#ffe44d] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-9 sm:rounded-lg sm:px-4 sm:text-sm"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={dismiss}
            className="inline-flex size-8 items-center justify-center rounded-md text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-9"
            aria-label="Dismiss announcement"
          >
            <X className="size-4 sm:size-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
