const PROJECTS = [
  {
    name: "Residência Alma",
    category: "Projeto de Arquitetura",
    location: "Anápolis, GO",
    from: "#c98a68",
    to: "#1a1a1a",
    lines: "M20,80 L20,25 L70,25 L70,80 M35,80 L35,45 L55,45 L55,80 M0,80 L100,80",
  },
  {
    name: "Apê Cerrado",
    category: "Projeto de Interiores",
    location: "Goiânia, GO",
    from: "#e7e2da",
    to: "#a4623f",
    lines: "M10,80 L10,20 L90,20 L90,80 M10,50 L90,50 M35,50 L35,80 M65,50 L65,80",
  },
  {
    name: "Casa Verso",
    category: "Projeto de Arquitetura",
    location: "Anápolis, GO",
    from: "#8a5033",
    to: "#222222",
    lines: "M15,80 L50,15 L85,80 Z M30,80 L30,55 L70,55 L70,80",
  },
  {
    name: "Studio Sonata",
    category: "Consultoria de Interiores",
    location: "Anápolis, GO",
    from: "#1a1a1a",
    to: "#c98a68",
    lines: "M10,30 L90,30 M10,55 L90,55 M10,80 L90,80 M30,10 L30,90 M70,10 L70,90",
  },
  {
    name: "Loft Cadência",
    category: "Projeto de Interiores",
    location: "Goiânia, GO",
    from: "#a4623f",
    to: "#e7e2da",
    lines: "M20,20 L80,20 L80,80 L20,80 Z M20,50 L80,50 M50,20 L50,80",
  },
  {
    name: "Fachada Estrofe",
    category: "Projeto de Arquitetura",
    location: "Anápolis, GO",
    from: "#222222",
    to: "#8a5033",
    lines: "M10,80 L10,35 L50,10 L90,35 L90,80 M10,80 L90,80 M35,80 L35,55 L65,55 L65,80",
  },
];

function ProjectTile({ project }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-ink/10">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{
          background: `linear-gradient(150deg, ${project.from} 0%, ${project.to} 100%)`,
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d={project.lines} stroke="#F7F5F2" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-terracotta-light">
          {project.category}
        </p>
        <h3 className="mt-2 font-serif text-2xl text-paper">{project.name}</h3>
        <p className="mt-1 font-sans text-xs font-light text-paper/60">
          {project.location}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="projetos" className="bg-cream px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-terracotta">
              Showcase
            </p>
            <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Projetos que viram quadros
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-graphite/60">
            Uma seleção de ambientes onde técnica, luz e narrativa se encontram.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectTile key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
