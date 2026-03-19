"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type HeroSlide = {
  alt: string;
  src: string;
  caption?: string;
  captionEyebrow?: string;
};

type HeroSlideshowProps = {
  description: string;
  eyebrow: string;
  slides: HeroSlide[];
};

export function HeroSlideshow({
  description,
  eyebrow,
  slides,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setPaused(true);
  }, []);

  useEffect(() => {
    if (slides.length < 2 || paused) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotionQuery.matches) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [slides.length, paused]);

  if (slides.length === 0) {
    return null;
  }

  const activeSlide = slides[activeIndex];
  const activeEyebrow = activeSlide.captionEyebrow ?? eyebrow;
  const activeCaption = activeSlide.caption ?? description;

  return (
    <div className="surface-panel relative overflow-hidden">
      <div className="relative min-h-[20rem] sm:min-h-[25rem] lg:min-h-[31rem]">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={index === activeIndex ? slide.alt : ""}
            aria-hidden={index === activeIndex ? undefined : true}
            fill
            priority={index === 0}
            sizes="(max-width: 1280px) 100vw, 1120px"
            className={`object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.08),rgba(5,5,6,0.2)_38%,rgba(5,5,6,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center p-5 sm:p-6">
          <div className="max-w-lg rounded-[1.25rem] border border-white/10 bg-black/52 px-5 py-4 text-center backdrop-blur-sm">
            <p className="eyebrow text-center">{activeEyebrow}</p>
            <p className="mt-2 text-base leading-7 text-white sm:text-lg">
              {activeCaption}
            </p>
            {slides.length > 1 && (
              <div className="mt-3 flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-orange-400"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
                <button
                  type="button"
                  aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
                  onClick={() => setPaused((p) => !p)}
                  className="ml-1 flex h-5 w-5 items-center justify-center rounded-full text-white/40 transition hover:text-white/80"
                >
                  {paused ? (
                    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                      <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                      <path d="M4 2h2.5v12H4V2zm5.5 0H12v12H9.5V2z" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
