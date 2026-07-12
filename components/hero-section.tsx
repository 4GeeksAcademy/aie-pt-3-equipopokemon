const featureList = [
  "Next.js 16 con App Router listo para escalar",
  "TypeScript configurado desde el arranque",
  "Tailwind CSS preparado para iterar UI reutilizable",
];

export function HeroSection() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-[radial-gradient(circle_at_top,_#fff7ed_0%,_#ffedd5_28%,_#ffffff_65%)] px-6 py-16 text-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <section className="max-w-2xl space-y-6">
          <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-1 text-sm font-medium tracking-wide text-orange-700 shadow-sm backdrop-blur">
            Base de proyecto lista
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Interfaz moderna, estructura limpia y componentes reutilizables.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              Este arranque combina Next.js 16, TypeScript, Tailwind CSS y una
              carpeta dedicada a componentes para construir UI consistente desde
              el primer commit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
            >
              Ver documentación
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noreferrer"
            >
              Explorar Tailwind
            </a>
          </div>
        </section>

        <aside className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-8 lg:max-w-md">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Reutilizable
          </p>
          <ul className="grid gap-3">
            {featureList.map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm"
              >
                {feature}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}