"use client";

import { useState } from "react";

import type { FAQItem } from "@/types/site";

type FaqAccordionProps = {
  items: FAQItem[];
};

function FaqItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="surface-panel overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-inset"
      >
        <span>{item.question}</span>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-orange-300 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="h-4 w-4"
          >
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" className={`transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
          </svg>
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 px-5 py-5">
            <p className="text-sm leading-7 text-zinc-300">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <FaqItem key={item.question} item={item} />
      ))}
    </div>
  );
}
