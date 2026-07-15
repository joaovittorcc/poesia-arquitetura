const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contato" className="bg-paper px-6 pt-24 pb-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-ink/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl tracking-[0.1em] text-ink">
              POESIA <span className="text-terracotta">ARQUITETURA</span>
            </p>
            <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-graphite/60">
              Espaços que contam histórias. Projetos de arquitetura e interiores
              feitos sob medida, com técnica e sensibilidade.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-graphite/40">
              Escritório
            </p>
            <p className="mt-5 font-sans text-sm font-light leading-relaxed text-graphite/70">
              London Eye Offices
              <br />
              Anápolis — GO
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-graphite/40">
              Contato
            </p>
            <div className="mt-5 flex flex-col gap-2 font-sans text-sm font-light text-graphite/70">
              <a
                href="https://wa.me/5562993066273"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-terracotta"
              >
                (62) 99306-6273
              </a>
              <a
                href="mailto:poesiaarquitetura@hotmail.com"
                className="transition-colors duration-300 hover:text-terracotta"
              >
                poesiaarquitetura@hotmail.com
              </a>
              <a
                href="https://www.instagram.com/poesiaarquitetura"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-terracotta"
              >
                @poesiaarquitetura
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="font-sans text-xs font-light text-graphite/40">
            © {YEAR} Poesia Arquitetura. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs font-light text-graphite/40">
            Desenvolvido por{" "}
            <span className="text-graphite/60">Evodev Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
