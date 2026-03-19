import Image from "next/image";

import type { PortfolioCategory, PortfolioItem } from "@/types/site";

type PortfolioGridProps = {
  items: PortfolioItem[];
  grouped?: boolean;
};

const categoryOrder: PortfolioCategory[] = [
  "Siding and Trim",
  "Accent Walls / Feature Walls",
  "Knotty Pine Ceilings",
  "Interior Trim and Feature Walls",
  "Exterior Remodels",
];

function getCategoryId(category: PortfolioCategory) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="surface-panel overflow-hidden">
      {item.placeholder ? (
        <div className="flex min-h-72 items-center justify-center bg-[linear-gradient(135deg,rgba(251,146,60,0.12),rgba(255,255,255,0.03))] p-8 text-center">
          <div>
            <p className="eyebrow">Exterior Remodels</p>
            <p className="font-heading text-2xl uppercase tracking-[0.08em] text-white">
              {item.title}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={item.image ?? "/brand/logo.png"}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <p className="eyebrow">{item.category}</p>
        <h3 className="mt-3 font-heading text-3xl leading-none text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
          {item.location}
        </p>
        <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
      </div>
    </article>
  );
}

export function PortfolioGrid({
  items,
  grouped = false,
}: PortfolioGridProps) {
  if (!grouped) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <PortfolioCard key={`${item.category}-${item.title}`} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {categoryOrder.map((category) => {
        const categoryItems = items.filter((item) => item.category === category);

        if (categoryItems.length === 0) {
          return null;
        }

        return (
          <section key={category} aria-labelledby={getCategoryId(category)}>
            <div className="mb-6">
              <p className="eyebrow">Real Projects</p>
              <h2
                id={getCategoryId(category)}
                className="font-heading text-4xl text-white"
              >
                {category}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categoryItems.map((item) => (
                <PortfolioCard key={`${item.category}-${item.title}`} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
