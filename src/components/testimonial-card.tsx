import type { Testimonial } from "@/types/site";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="surface-panel flex h-full flex-col p-6">
      <p className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-200">
        {testimonial.badgeLabel}
      </p>
      <p className="mt-5 flex-1 text-base leading-8 text-zinc-200">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="font-heading text-3xl leading-none text-white">
          {testimonial.name}
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">
          {testimonial.role}
          {testimonial.location ? ` | ${testimonial.location}` : ""}
        </p>
      </div>
    </article>
  );
}
