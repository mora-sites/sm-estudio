"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import SectionEyebrow from "@/components/SectionEyebrow";
import ProgramCard from "@/components/ProgramCard";
import WhyTrain from "@/components/WhyTrain";
import Schedule from "@/components/Schedule";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTABanner from "@/components/CTABanner";
import Accordion from "@/components/Accordion";
import LocationCard from "@/components/LocationCard";
import Modal from "@/components/Modal";
import Reveal from "@/components/Reveal";
import { DAYS, SCHEDULE, FEATURES, FAQS, TESTIMONIALS, PROGRAMS, type Program } from "@/lib/mock-data";

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((t) => (
        <span key={t} className="rounded-pill border border-sm-cream-dark px-4 py-2 text-sm text-sm-ink">
          {t}
        </span>
      ))}
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HomePage() {
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);

  return (
    <div data-theme="yoga" className="bg-sm-cream">
      <Navbar
        logoText="SM_Estúdio"
        subtitle="YOGA · PILATES · YOGA KIDS"
        links={[
          { label: "Aulas", href: "#aulas" },
          { label: "A Nossa Essência", href: "#our-story" },
          { label: "Horários", href: "#schedule" },
          { label: "Contacto", href: "#contact" },
        ]}
        ctaLabel="Marcar Aula"
        onCtaClick={() => scrollTo("schedule")}
      />

      <section id="hero" className="scroll-mt-24 grid grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:px-12 md:py-16">
        <div>
          <Reveal eager delay={0} y={16}>
            <Badge variant="offer" level="ÁGUAS SANTAS">
              Estúdio de Yoga e Pilates em Águas Santas, Maia
            </Badge>
          </Reveal>
          <Reveal eager delay={120} y={22}>
            <h1 className="my-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Movimento que Equilibra.
              <br />
              Respiração que <span className="text-sm-gold">Transforma</span>.
            </h1>
          </Reveal>
          <Reveal eager delay={240} y={20}>
            <p className="max-w-lg text-lg text-sm-ink">
              Yoga, Pilates e Yoga Kids num espaço pensado para desacelerares, fortaleceres o corpo e voltares à tua
              respiração. Meditação, workshops e aulas abertas de Yoga Nidra ao longo do ano.
            </p>
          </Reveal>
          <Reveal eager delay={360} y={16}>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button variant="primary" onClick={() => scrollTo("aulas")}>
                Descobrir as Aulas
              </Button>
              <Button variant="link" onClick={() => scrollTo("schedule")}>
                Marcar a Minha Primeira Aula
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal eager delay={180} y={0}>
          <div className="aspect-[4/3] rounded-lg bg-sm-cream-dark" />
        </Reveal>
      </section>

      <section id="our-story" className="scroll-mt-24 grid grid-cols-1 items-center gap-10 px-6 py-8 pb-16 md:grid-cols-2 md:px-12">
        <Reveal y={40} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sm-cream-dark">
          <Image
            src="/images/foto2.png"
            alt="Simone Melgaço em meditação com taça tibetana no SM_Estúdio"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </Reveal>
        <div>
          <Reveal>
            <SectionEyebrow icon="◈">A Nossa Essência</SectionEyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="my-5 font-display text-4xl font-extrabold">
              Corpo & Mente.
              <br />
              Um só Movimento.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mb-4 max-w-lg leading-relaxed text-sm-ink">
              O SM_Estúdio nasce em Águas Santas para juntar Yoga e Pilates no mesmo espaço. O Pilates fortalece o
              centro, melhora a postura e a coordenação, e o Yoga promove relaxamento, flexibilidade e foco. Duas
              práticas com um só objetivo: ligar o corpo, a mente e as emoções.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="max-w-lg leading-relaxed text-sm-ink">
              Turmas pequenas e vagas limitadas, para que cada aula seja acompanhada de perto, dos mais novos no
              Yoga Kids aos momentos de relaxamento profundo no Yoga Nidra.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="my-6">
              <TagRow tags={["Yoga", "Pilates", "Yoga Kids", "Meditação", "Workshops"]} />
            </div>
          </Reveal>
          <Reveal delay={340}>
            <Button variant="link" onClick={() => scrollTo("contact")}>
              Entra em Contacto
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="aulas" className="scroll-mt-24 px-6 pb-16 md:px-12">
        <Reveal>
          <SectionEyebrow icon="☀">Aulas</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="my-5 mb-8 font-display text-4xl font-extrabold">Encontra o teu Caminho</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <ProgramCard title={p.title} onClick={() => setActiveProgram(p)} />
            </Reveal>
          ))}
        </div>
      </section>

      <Modal open={!!activeProgram} onClose={() => setActiveProgram(null)}>
        {activeProgram && (
          <>
            <span className="text-xs font-semibold uppercase tracking-wide text-sm-gold">Aula</span>
            <h3 className="my-3 font-display text-2xl font-extrabold text-sm-ink">{activeProgram.title}</h3>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-sm-ink">
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-sm-ink-light">O que é</span>
                <p className="m-0">{activeProgram.whatIs}</p>
              </div>
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-sm-ink-light">Para quem é</span>
                <p className="m-0">{activeProgram.forWho}</p>
              </div>
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-sm-ink-light">Horário</span>
                <p className="m-0">{activeProgram.schedule}</p>
              </div>
            </div>
            <Button
              variant="primary"
              className="mt-6"
              onClick={() => {
                setActiveProgram(null);
                scrollTo("contact");
              }}
            >
              Marcar Aula
            </Button>
          </>
        )}
      </Modal>

      <WhyTrain features={FEATURES} />

      <section id="schedule" className="scroll-mt-24 px-6 pb-16 md:px-12">
        <Reveal>
          <SectionEyebrow icon="◷">Horários</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="my-5 font-display text-3xl font-extrabold">A Semana no Estúdio</h2>
            <Button variant="link" onClick={() => scrollTo("contact")}>
              Encontra o teu momento de pausa
            </Button>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <Schedule days={DAYS} schedule={SCHEDULE} />
        </Reveal>
      </section>

      <section id="testimonials" className="scroll-mt-24 px-6 pb-16 md:px-12">
        <Reveal>
          <SectionEyebrow icon="⌂">Vozes da Comunidade</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="my-5 mb-8 font-display text-4xl font-extrabold">O que o corpo sente, as palavras dizem.</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.4fr]">
          <Reveal delay={0} className="h-full">
            <CTABanner
              variant="inline"
              eyebrow="Vagas Limitadas"
              title="Turmas pequenas, máximo 10 alunos por aula. Reserva o teu lugar."
              ctaLabel="Marcar a Minha Aula"
              onClick={() => scrollTo("contact")}
              className="h-full"
            />
          </Reveal>
          <Reveal delay={120}>
            <TestimonialCarousel items={TESTIMONIALS} />
          </Reveal>
        </div>
      </section>

      <section id="cta" className="scroll-mt-24 px-6 pb-16 md:px-12">
        <Reveal y={36}>
          <CTABanner
            variant="panel"
            eyebrow="O Convite"
            title="Pronta/o para voltares a ti?"
            description="Não precisas de experiência nem de seres flexível, só de apareceres. Fala connosco por WhatsApp ou Instagram e escolhe a tua aula."
            ctaLabel="Marcar a Minha Aula"
            onClick={() => scrollTo("contact")}
          />
        </Reveal>
      </section>

      <section id="faq" className="scroll-mt-24 px-6 pb-16 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow icon="?">Perguntas Frequentes</SectionEyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="my-5 mb-10 font-display text-4xl font-extrabold">Tudo o que precisas de saber</h2>
          </Reveal>
        </div>
        <Reveal delay={140} className="mx-auto max-w-2xl text-left">
          <Accordion items={FAQS} />
        </Reveal>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 pb-16 md:px-12">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
          <Reveal y={32}>
            <LocationCard />
          </Reveal>
          <Reveal delay={120} y={32}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-sm-gold p-8 text-white">
              <div>
                <span className="text-xs font-semibold tracking-wide text-white/80">CONTACTOS</span>
                <h3 className="my-3 mb-5 font-display text-2xl font-extrabold leading-tight">Vem Como És.</h3>
                <div className="flex flex-col gap-2.5 text-sm">
                  <span>Praceta Jaime Cortesão, 116 - Loja 11, Águas Santas, Maia 4425-101</span>
                  <span>WhatsApp: 915 964 238</span>
                  <span>Instagram: @estudio.simonemelgaco</span>
                </div>
              </div>
              <a
                href="https://wa.me/351915964238"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start cursor-pointer rounded-pill bg-black px-6 py-3.5 text-sm font-semibold text-white no-underline transition-transform duration-150 ease-standard hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100"
              >
                Marcar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        brand="SM_Estúdio"
        tagline="Yoga, Pilates e Yoga Kids em Águas Santas, Maia. Movimento que equilibra, respiração que transforma."
        copyright="© 2026 SM_Estúdio. Todos os direitos reservados."
        columns={[
          {
            heading: "Navegação",
            links: [
              { label: "Início", href: "#hero" },
              { label: "A Nossa Essência", href: "#our-story" },
              { label: "Aulas", href: "#aulas" },
              { label: "Horários", href: "#schedule" },
              { label: "Contacto", href: "#contact" },
            ],
          },
          {
            heading: "Contacto",
            links: ["Praceta Jaime Cortesão, 116 - Loja 11, Águas Santas, Maia", "WhatsApp: 915 964 238", "Instagram: @estudio.simonemelgaco"],
          },
        ]}
      />
    </div>
  );
}
