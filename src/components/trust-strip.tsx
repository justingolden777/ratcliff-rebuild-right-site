import { siteConfig } from "@/content/site";

type TrustStripProps = {
  items?: typeof siteConfig.trustBadges;
};

export function TrustStrip({ items = siteConfig.trustBadges }: TrustStripProps) {
  return (
    <section className="border-y border-white/10 bg-zinc-950">
      <div className="container-shell py-6">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/15 bg-white/[0.08] px-5 py-4"
            >
              <p className="font-heading text-sm uppercase tracking-[0.18em] text-orange-300">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-zinc-200">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
