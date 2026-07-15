const SERVICES = [
  {
    title: "Projeto de Arquitetura",
    description:
      "Indicado para quem deseja construir ou ampliar/demolir um imóvel com planejamento e regularização, através de soluções formais, funcionais e construtivas.",
    features: [
      "Construção, ampliação ou demolição",
      "Marcenaria planejada e personalizada",
      "Desenhos e detalhamentos técnicos",
      "Imagens 3D",
      "Revisões até a satisfação total",
    ],
  },
  {
    title: "Projeto de Interiores",
    description:
      "Indicado para quem deseja aproveitar espaços internos da melhor maneira possível, através da especificação de pisos, revestimentos, marcenaria, iluminação e pontos elétricos e hidráulicos.",
    features: [
      "Com ou sem alteração de obra",
      "Especificação de acabamentos e iluminação",
      "Marcenaria planejada",
      "Imagens 3D",
      "Revisões até a satisfação total",
    ],
    featured: true,
  },
  {
    title: "Consultoria de Interiores",
    description:
      "Indicado para quem deseja alterar ambientes sem envolver obra, através de soluções rápidas, fáceis e econômicas.",
    features: [
      "Sem obra — apenas pintura/papel de parede",
      "Móveis soltos e detalhes em marcenaria",
      "Desenhos simples e diagramas",
      "Até 1 revisão",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-paper px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-terracotta">
            Serviços
          </p>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            A fim de proporcionar lugares com história, vida e afeto
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`flex flex-col rounded-sm border p-8 transition-all duration-500 lg:p-10 ${
                service.featured
                  ? "border-ink bg-ink text-paper lg:-translate-y-4"
                  : "border-ink/10 bg-cream text-graphite"
              }`}
            >
              <h3 className="font-serif text-2xl font-medium">{service.title}</h3>
              <p
                className={`mt-4 font-sans text-sm font-light leading-relaxed ${
                  service.featured ? "text-paper/70" : "text-graphite/70"
                }`}
              >
                {service.description}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 font-sans text-sm ${
                      service.featured ? "text-paper/85" : "text-graphite/80"
                    }`}
                  >
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                        service.featured ? "bg-terracotta-light" : "bg-terracotta"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
