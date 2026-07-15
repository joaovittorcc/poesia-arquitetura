import { useState } from "react";

const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#top"
          className="font-serif text-lg tracking-[0.25em] text-ink sm:text-xl"
        >
          POESIA <span className="text-terracotta">ARQUITETURA</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-graphite/70 transition-colors duration-300 hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#briefing"
          className="hidden rounded-full border border-ink px-6 py-2.5 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:bg-ink hover:text-paper md:inline-block"
        >
          Simular Projeto
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink/10 bg-paper transition-[max-height] duration-500 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="py-2.5 font-sans text-sm uppercase tracking-[0.12em] text-graphite/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#briefing"
            onClick={handleNavClick}
            className="mt-2 rounded-full bg-ink px-6 py-3 text-center font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-paper"
          >
            Simular Projeto
          </a>
        </nav>
      </div>
    </header>
  );
}
