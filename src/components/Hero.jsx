export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-24"
    >
      {/* Atmospheric backdrop standing in for a full-bleed project photograph */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 15%, rgba(164,98,63,0.55) 0%, rgba(26,26,26,0) 55%), radial-gradient(100% 80% at 85% 100%, rgba(164,98,63,0.35) 0%, rgba(26,26,26,0) 60%), linear-gradient(160deg, #1a1a1a 0%, #262220 45%, #1a1a1a 100%)",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#F7F5F2" strokeWidth="1">
            <line x1="0" y1="620" x2="1200" y2="620" />
            <line x1="120" y1="620" x2="120" y2="120" />
            <line x1="120" y1="120" x2="700" y2="120" />
            <line x1="700" y1="120" x2="700" y2="620" />
            <line x1="260" y1="620" x2="260" y2="260" />
            <line x1="260" y1="260" x2="560" y2="260" />
            <line x1="560" y1="260" x2="560" y2="620" />
            <line x1="700" y1="340" x2="1080" y2="340" />
            <line x1="1080" y1="340" x2="1080" y2="620" />
            <line x1="880" y1="340" x2="880" y2="620" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-9 lg:col-start-1">
          <p className="fade-in-up mb-8 font-sans text-xs uppercase tracking-[0.4em] text-terracotta-light">
            Arquitetura &amp; Interiores — Anápolis, GO
          </p>
          <h1
            className="fade-in-up text-balance font-serif text-5xl font-medium leading-[1.08] text-paper sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            A poesia que dá
            <br />
            forma ao seu espaço
          </h1>
          <p
            className="fade-in-up mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-paper/70 sm:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            Traduzimos personalidade, memória e afeto em projetos residenciais e de
            interiores. Cada traço carrega uma história — a sua.
          </p>

          <div
            className="fade-in-up mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#briefing"
              className="rounded-full bg-terracotta px-8 py-4 text-center font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-paper transition-all duration-300 hover:bg-terracotta-dark"
            >
              Simular Projeto
            </a>
            <a
              href="#projetos"
              className="rounded-full border border-paper/30 px-8 py-4 text-center font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/10"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-paper/50 sm:flex">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Role</span>
        <span className="h-12 w-px bg-paper/30" />
      </div>
    </section>
  );
}
