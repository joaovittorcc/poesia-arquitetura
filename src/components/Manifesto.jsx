export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-cream px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-terracotta">
            O Manifesto
          </p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Espaços com
            <br />
            alma.
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="font-display text-2xl font-medium leading-relaxed text-graphite sm:text-3xl">
            Acreditamos que uma casa não é apenas construída — ela é escrita.
            Cada parede, cada luz, cada sombra é um verso que compõe a história de
            quem a habita.
          </p>

          <p className="mt-10 max-w-xl font-sans text-base font-light leading-loose text-graphite/70">
            Na Poesia Arquitetura, projetamos espaços funcionais com alma,
            traduzindo a personalidade, a rotina e os afetos de cada cliente em
            traços precisos. Unimos técnica e sensibilidade para criar ambientes
            contemporâneos, acolhedores e atemporais — onde a forma nunca se
            distancia do sentimento.
          </p>
        </div>
      </div>
    </section>
  );
}
