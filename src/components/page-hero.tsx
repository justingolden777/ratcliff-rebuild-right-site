import Link from "next/link";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
  children?: React.ReactNode;
  centered?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  children,
  centered = false,
}: PageHeroProps) {
  return (
    <section className="section-space border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_28%),linear-gradient(180deg,#050505_0%,#111114_100%)]">
      <div className="container-shell">
        <div className="surface-panel overflow-hidden border-white/12">
          {centered ? (
            /* Centered single-column layout */
            <div className="px-6 py-12 text-center sm:px-8 sm:py-16 lg:px-16 lg:py-20">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mx-auto mt-4 max-w-4xl text-balance font-heading text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                {description}
              </p>
              {actions.length > 0 ? (
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {actions.map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className={action.variant === "secondary" ? "button-secondary" : "button-primary"}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            /* Default two-column layout */
            <div className="grid gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] lg:px-12 lg:py-14">
              <div>
                <p className="eyebrow">{eyebrow}</p>
                <h1 className="text-balance font-heading text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                  {description}
                </p>
                {actions.length > 0 ? (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {actions.map((action) => (
                      <Link
                        key={action.href}
                        href={action.href}
                        className={action.variant === "secondary" ? "button-secondary" : "button-primary"}
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              {children ? (
                <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-white/10 bg-black/28 p-6">
                  {children}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
