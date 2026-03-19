"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";

import type { Service } from "@/types/site";

const ROTATE_INTERVAL = 3000;

type Props = { services: Service[] };

export function ServiceCarousel({ services }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 12;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    if (atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: step, behavior: "smooth" });
    }
  }, []);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, ROTATE_INTERVAL);
  }

  function scrollManual(dir: "prev" | "next") {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 12;
    track.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
    startTimer(); // reset timer on manual interaction
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [advance]);

  return (
    <div className="flex items-center gap-3">
      {/* Prev button */}
      <button
        type="button"
        onClick={() => scrollManual("prev")}
        aria-label="Show previous services"
        className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-400 transition-colors hover:border-orange-400/50 hover:text-orange-300"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex flex-1 gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group snap-start shrink-0 w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)] flex min-h-[120px] items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#fb923c_0%,#f97316_100%)] p-6 text-center transition-all hover:brightness-110 hover:shadow-lg hover:shadow-orange-500/30"
          >
            <p className="font-heading text-3xl leading-tight text-zinc-950">
              {service.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={() => scrollManual("next")}
        aria-label="Show next services"
        className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-400 transition-colors hover:border-orange-400/50 hover:text-orange-300"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
