import Link from "next/link";

import type { Service } from "@/types/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="surface-panel h-full p-6">
      <div className="flex h-full flex-col">
        <div className="flex-1">
          <p className="eyebrow">{service.featured ? "Featured" : "Service"}</p>
          <h3 className="mt-3 font-heading text-3xl leading-none text-white">
            {service.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            {service.shortDescription}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-white/8">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
