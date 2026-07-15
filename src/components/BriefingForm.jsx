import { useState } from "react";

const STEPS = ["Escopo", "Localização", "Contato"];

const SCOPE_OPTIONS = [
  {
    value: "Residencial",
    description: "Projeto de arquitetura para construir, ampliar ou reformar",
  },
  {
    value: "Interiores",
    description: "Projeto ou consultoria de interiores para ambientes internos",
  },
  {
    value: "Comercial",
    description: "Projeto de arquitetura ou interiores para espaços comerciais",
  },
];

const LOCATION_OPTIONS = ["Anápolis", "Goiânia", "Outra cidade"];

const WHATSAPP_NUMBER = "5562993066273";

function StepIndicator({ current }) {
  return (
    <div className="mb-14 flex items-center gap-3 sm:gap-4">
      {STEPS.map((label, index) => {
        const stepNumber = index + 1;
        const active = stepNumber <= current;
        return (
          <div key={label} className="flex flex-1 items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-sans text-sm transition-colors duration-500 ${
                  active
                    ? "bg-terracotta text-paper"
                    : "border border-paper/25 text-paper/50"
                }`}
              >
                {stepNumber}
              </span>
              <span
                className={`hidden font-sans text-xs uppercase tracking-[0.2em] sm:inline ${
                  active ? "text-paper" : "text-paper/40"
                }`}
              >
                {label}
              </span>
            </div>
            {stepNumber !== STEPS.length && (
              <span
                className={`h-px flex-1 transition-colors duration-500 ${
                  stepNumber < current ? "bg-terracotta" : "bg-paper/15"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BriefingForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    scope: "",
    location: "",
    otherCity: "",
    name: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (patch) => setData((prev) => ({ ...prev, ...patch }));

  const canAdvanceFromStep1 = Boolean(data.scope);
  const canAdvanceFromStep2 =
    Boolean(data.location) &&
    (data.location !== "Outra cidade" || data.otherCity.trim().length > 1);
  const canSubmit = data.name.trim().length > 1 && data.whatsapp.trim().length >= 10;

  const finalLocation =
    data.location === "Outra cidade" ? data.otherCity : data.location;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Sou ${data.name}. Tenho interesse em um projeto de ${data.scope} em ${finalLocation}. Podemos conversar?`
  )}`;

  return (
    <section id="briefing" className="bg-ink px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-terracotta-light">
            Briefing
          </p>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight text-paper sm:text-5xl">
            Conte-nos sobre o seu sonho
          </h2>
        </div>

        {submitted ? (
          <div className="fade-in-up rounded-sm border border-paper/10 bg-paper/5 p-10 text-center sm:p-14">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-terracotta-light">
              Recebido
            </p>
            <h3 className="mt-4 font-serif text-3xl text-paper">
              Obrigado, {data.name.split(" ")[0]}.
            </h3>
            <p className="mx-auto mt-4 max-w-md font-sans text-sm font-light leading-relaxed text-paper/60">
              Seu briefing foi registrado. Toque no botão abaixo para falar
              diretamente conosco pelo WhatsApp e darmos início à sua história.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-terracotta px-8 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-paper transition-colors duration-300 hover:bg-terracotta-dark"
            >
              Continuar no WhatsApp
            </a>
          </div>
        ) : (
          <div className="rounded-sm border border-paper/10 bg-paper/5 p-8 sm:p-14">
            <StepIndicator current={step} />

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div key="step-1" className="fade-in-up">
                  <h3 className="font-serif text-2xl text-paper">
                    Qual o tamanho do seu sonho?
                  </h3>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {SCOPE_OPTIONS.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => update({ scope: option.value })}
                        className={`rounded-sm border p-6 text-left transition-all duration-300 ${
                          data.scope === option.value
                            ? "border-terracotta bg-terracotta/10"
                            : "border-paper/15 hover:border-paper/40"
                        }`}
                      >
                        <span className="font-serif text-xl text-paper">
                          {option.value}
                        </span>
                        <span className="mt-2 block font-sans text-xs font-light leading-relaxed text-paper/50">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div key="step-2" className="fade-in-up">
                  <h3 className="font-serif text-2xl text-paper">
                    Onde está localizado?
                  </h3>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {LOCATION_OPTIONS.map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => update({ location: option })}
                        className={`rounded-sm border p-6 text-left font-serif text-xl transition-all duration-300 ${
                          data.location === option
                            ? "border-terracotta bg-terracotta/10 text-paper"
                            : "border-paper/15 text-paper/80 hover:border-paper/40"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {data.location === "Outra cidade" && (
                    <input
                      type="text"
                      placeholder="Qual cidade?"
                      value={data.otherCity}
                      onChange={(event) => update({ otherCity: event.target.value })}
                      className="mt-6 w-full rounded-sm border border-paper/15 bg-transparent px-5 py-4 font-sans text-paper placeholder:text-paper/30 focus:border-terracotta focus:outline-none"
                    />
                  )}
                </div>
              )}

              {step === 3 && (
                <div key="step-3" className="fade-in-up">
                  <h3 className="font-serif text-2xl text-paper">
                    Nome e WhatsApp para contato
                  </h3>
                  <div className="mt-8 flex flex-col gap-5">
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={data.name}
                      onChange={(event) => update({ name: event.target.value })}
                      className="w-full rounded-sm border border-paper/15 bg-transparent px-5 py-4 font-sans text-paper placeholder:text-paper/30 focus:border-terracotta focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="(62) 9 9999-9999"
                      value={data.whatsapp}
                      onChange={(event) => update({ whatsapp: event.target.value })}
                      className="w-full rounded-sm border border-paper/15 bg-transparent px-5 py-4 font-sans text-paper placeholder:text-paper/30 focus:border-terracotta focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="mt-12 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className={`font-sans text-xs uppercase tracking-[0.2em] text-paper/50 transition-opacity duration-300 hover:text-paper ${
                    step === 1 ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  Voltar
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(3, s + 1))}
                    disabled={step === 1 ? !canAdvanceFromStep1 : !canAdvanceFromStep2}
                    className="rounded-full bg-terracotta px-8 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-paper transition-all duration-300 hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Próximo passo
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="rounded-full bg-terracotta px-8 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-paper transition-all duration-300 hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Enviar briefing
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
