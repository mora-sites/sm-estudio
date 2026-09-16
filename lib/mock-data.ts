import type { Feature } from "@/components/FeatureRow";
import type { FAQ } from "@/components/Accordion";
import type { ScheduleRow } from "@/components/Schedule";
import type { Testimonial } from "@/components/TestimonialCarousel";

export const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

export type Program = {
  title: string;
  whatIs: string;
  forWho: string;
  schedule: string;
};

export const PROGRAMS: Program[] = [
  {
    title: "Hatha Yoga",
    whatIs:
      "O caminho mais tradicional do yoga: posturas mantidas com presença, respiração consciente e atenção ao momento presente.",
    forWho:
      "Para quem procura mais flexibilidade, foco e relaxamento. Não é preciso experiência nem seres flexível para começar.",
    schedule: "Segunda e Quarta, às 10h00 e 19h30.",
  },
  {
    title: "Pilates",
    whatIs:
      "Um método de fortalecimento baseado em movimentos controlados e conscientes, que trabalha o centro do corpo.",
    forWho: "Para quem quer melhorar a postura, a força e a coordenação, com pouco impacto nas articulações.",
    schedule: "Segunda às 10h00; Terça e Quinta às 18h15 e 19h15.",
  },
  {
    title: "Yoga Kids",
    whatIs: "Aulas de yoga adaptadas às crianças, com jogos, movimento e respiração de forma lúdica.",
    forWho: "Para os mais novos descobrirem o corpo e a calma desde cedo.",
    schedule: "Segunda e Quarta, às 18h30.",
  },
];

export const SCHEDULE: Record<string, ScheduleRow[]> = {
  Segunda: [
    { time: "10h00", level: "TODOS", course: "Pilates", coach: "Simone Melgaço" },
    { time: "18h30", level: "TODOS", course: "Yoga Kids", coach: "Simone Melgaço" },
    { time: "19h30", level: "TODOS", course: "Hatha Yoga", coach: "Simone Melgaço" },
  ],
  Terça: [
    { time: "18h15", level: "TODOS", course: "Pilates", coach: "Simone Melgaço" },
    { time: "19h15", level: "TODOS", course: "Pilates", coach: "Simone Melgaço" },
    { time: "20h15", level: "TODOS", course: "Yoga Nidra", coach: "Simone Melgaço" },
  ],
  Quarta: [
    { time: "10h00", level: "TODOS", course: "Hatha Yoga", coach: "Simone Melgaço" },
    { time: "18h30", level: "TODOS", course: "Yoga Kids", coach: "Simone Melgaço" },
    { time: "19h30", level: "TODOS", course: "Hatha Yoga", coach: "Simone Melgaço" },
  ],
  Quinta: [
    { time: "18h15", level: "TODOS", course: "Pilates", coach: "Simone Melgaço" },
    { time: "19h15", level: "TODOS", course: "Pilates", coach: "Simone Melgaço" },
    { time: "20h15", level: "TODOS", course: "Yoga Nidra", coach: "Simone Melgaço" },
  ],
  Sexta: [],
  Sábado: [],
  Domingo: [],
};

export const FEATURES: Feature[] = [
  {
    index: "01",
    icon: "◆",
    title: "Fortalece o Centro",
    description: "O Pilates trabalha a postura, a força e a tonificação com movimentos eficientes e conscientes.",
  },
  {
    index: "02",
    icon: "◎",
    title: "Respiração que Transforma",
    description: "O Yoga promove relaxamento, melhora a respiração e traz foco e presença a cada aula.",
  },
  {
    index: "03",
    icon: "▲",
    title: "Turmas Íntimas",
    description: "Vagas limitadas e turmas com no máximo 10 alunos, para um acompanhamento próximo em cada aula.",
  },
  {
    index: "04",
    icon: "★",
    title: "Yoga desde Pequenos",
    description: "Aulas de Yoga Kids pensadas para as crianças descobrirem o corpo e a calma desde cedo.",
  },
  {
    index: "05",
    icon: "⛨",
    title: "Yoga Nidra & Meditação",
    description: "Aulas abertas de Yoga Nidra e workshops de meditação para desacelerar e voltar a ti.",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "A partir de que idade se pode começar a praticar?",
    answer: "Temos a turma de Yoga Kids para os mais novos, e as turmas de Hatha Yoga e Pilates para adultos. Contacta-nos para saber a idade mínima de cada turma.",
  },
  {
    question: "Preciso de trazer tapete na primeira vez?",
    answer: "Não, temos tapetes disponíveis para a tua primeira aula. Depois, se quiseres o teu próprio, podemos aconselhar-te.",
  },
  {
    question: "Nunca fiz yoga nem pilates. Vou sentir-me perdido/a?",
    answer: "É exatamente para quem começa que o Hatha Yoga e o Pilates foram pensados. Vais com o teu próprio ritmo, em turmas pequenas.",
  },
  {
    question: "O que é o Yoga Nidra e como funciona?",
    answer: "É uma aula aberta de relaxamento profundo guiado, às terças e quintas às 20h15. As vagas são limitadas, com no máximo 10 alunos por turma.",
  },
  {
    question: "Como funciona o Yoga Kids?",
    answer: "Aulas às segundas e quartas, às 18h30, pensadas para as crianças aprenderem movimento, respiração e calma de forma lúdica.",
  },
  {
    question: "Sou pouco flexível. Isso impede-me de praticar?",
    answer: "Não. A flexibilidade vem com a prática, não é o bilhete de entrada.",
  },
  {
    question: "Onde fica o estúdio?",
    answer: "Praceta Jaime Cortesão, 116 - Loja 11, Águas Santas, Maia (Porto). A entrada é fácil e temos estacionamento nas imediações.",
  },
  {
    question: "Como marco a minha aula?",
    answer: "Fala connosco por WhatsApp (915 964 238) ou por mensagem no Instagram @estudio.simonemelgaco. Ajudamos-te a escolher a turma certa.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Comecei o Pilates sem qualquer experiência e em poucas semanas já sentia mais força e postura. As turmas pequenas fazem toda a diferença.",
    name: "Beatriz Nogueira",
    role: "Pilates",
  },
  {
    quote: "O Yoga Nidra às terças à noite tornou-se o momento da semana que mais me pertence. Saio sempre mais leve.",
    name: "Carlos Mendes",
    role: "Yoga Nidra",
  },
  {
    quote: "A minha filha adora o Yoga Kids. Chega a casa mais calma e feliz, e a Simone tem uma paciência incrível com eles.",
    name: "Sofia Duarte",
    role: "Yoga Kids (encarregada de educação)",
  },
  {
    quote: "Entre o Hatha Yoga e o Pilates, encontrei ali um equilíbrio que andava a precisar há anos.",
    name: "Rui Pinto",
    role: "Hatha Yoga & Pilates",
  },
];
