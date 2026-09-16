# Template — Yoga (SM_Estúdio)

Scaffold Next.js (App Router) + TypeScript + Tailwind para o nicho de **estúdios de yoga
e pilates**, com o conteúdo real do cliente-alvo **SM_Estúdio** (Simone Melgaço, Águas
Santas, Maia), extraído do Instagram [@estudio.simonemelgaco](https://www.instagram.com/estudio.simonemelgaco/).

## Stack
- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS (paleta custom `sm.*` — dourado/âmbar, castanho escuro (ink), creme,
  fiel à identidade visual do Instagram do estúdio)
- Sem backend — conteúdo estático em `lib/mock-data.ts`.

## Identidade visual (SM_Estúdio)
- `sm.gold` `#C9973E` / `sm.gold-dark` `#A6791F` / `sm.gold-light` `#E9CD86`
- `sm.ink` `#2A1D10` / `sm.ink-light` `#4A3823`
- `sm.cream` `#FBF5E7` / `sm.cream-dark` `#EEE0BE`

## Conteúdo real incluído
- Horários reais (Segunda a Quinta: Pilates, Yoga Kids, Hatha Yoga, Yoga Nidra)
- Morada: Praceta Jaime Cortesão, 116 - Loja 11, Águas Santas, Maia
- Contacto: WhatsApp 915 964 238, Instagram @estudio.simonemelgaco
- Copy de benefícios (Pilates/Yoga) tirada dos destaques e posts fixos do Instagram

⚠️ **Testemunhos são placeholders** — não existem reviews públicos no Instagram do
estúdio; substituir por depoimentos reais antes de publicar.

## Efeitos de scroll
- `components/Reveal.tsx` — fade + slide-up + blur ao entrar no viewport (ou ao carregar,
  no hero), respeita `prefers-reduced-motion`.
- `components/Navbar.tsx` — ganha fundo translúcido + blur ao fazer scroll.
- `components/WhyTrain.tsx` — cada princípio acende com IntersectionObserver.
- `components/TestimonialCarousel.tsx` — carousel 3D com perspetiva/rotateY, autoplay
  (pausa no hover), navegação por bolinhas e setas.

## Desenvolvimento
```bash
npm install
npm run dev
```

## Próximos passos
1. Substituir a imagem placeholder (retângulos `bg-sm-cream-dark`) por fotos reais do estúdio.
2. Substituir os testemunhos placeholder por reviews reais (Google/Instagram).
3. Ligar `ContactForm` a um serviço real (email, CRM, WhatsApp).
4. Configurar domínio e deploy no Vercel.
