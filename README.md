# Poesia Arquitetura — Landing Page

Landing page / portfólio institucional para o escritório de arquitetura e
interiores **Poesia Arquitetura** (Anápolis/GO), substituindo o Linktree
usado atualmente no Instagram.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4**
- Fontes self-hosted via `@fontsource` (Playfair Display, Cormorant
  Garamond, Inter) — sem dependência de Google Fonts em runtime

## Seções da página

1. **Header** fixo — logo, navegação e CTA "Simular Projeto"
2. **Hero** — headline conceitual, fundo atmosférico, CTAs (centralizado)
3. **Manifesto** — texto sobre a filosofia do escritório
4. **Serviços** — Projeto de Arquitetura, Projeto de Interiores e
   Consultoria de Interiores (conteúdo baseado no material do cliente)
5. **Showcase de Projetos** — grid de projetos com zoom suave no hover
   (imagens placeholder em gradiente/line-art — trocar por fotos reais)
6. **Briefing** — formulário multi-step (escopo → localização → contato)
   que finaliza com um link direto para o WhatsApp do escritório
7. **Footer** — endereço (London Eye Offices), Instagram, WhatsApp, email
   e assinatura "Desenvolvido por Evodev Studio"

## Rodando localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (saída em dist/)
npm run lint     # checagem de lint (oxlint)
```

## Deploy

Projeto configurado para deploy na Vercel a partir da branch `main`
(preset Vite, build `npm run build`, output `dist`).

## Pendências

- Substituir os placeholders da galeria por fotografias reais dos
  projetos do escritório.
- Revisar/ajustar textos e números de contato conforme necessário.
