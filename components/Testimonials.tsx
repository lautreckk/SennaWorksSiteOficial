"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, viewportOptions } from "@/lib/animations";

const CARD_SHADOW_SM = "rgba(28,28,28,0) 0px 0.602px 0.602px 0px, rgba(28,28,28,0.02) 0px 2.289px 2.289px 0px, rgba(28,28,28,0.08) 0px 10px 10px 0px, #fff 0px -6px 6px -5px";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const testimonials = [
  {
    quote: "O Sena Works criou um sistema completo de geração de conteúdo com IA para meu Instagram, TikTok e YouTube. Com o chat de IA integrado, minha produção de conteúdo triplicou. Impressionante.",
    name: "Rony Meisler",
    role: "Ex-Fundador da Reserva",
    image: "/Rony-Meisler.jpg",
  },
  {
    quote: "Precisava de um CRM de chat com múltiplos atendentes para WhatsApp e a Sena Works entregou exatamente o que eu precisava. Hoje minha equipe atende 3x mais clientes sem perder qualidade.",
    name: "Well Pires",
    role: "Empresário",
    image: "/Well-Pires.jpg",
  },
  {
    quote: "De 220 para 450 clientes em 2 anos. A Sena Works automatizou nossos boletos, notas fiscais e toda a logística. Foi a melhor decisão que tomamos para o crescimento da empresa.",
    name: "Itapema Ambiental",
    role: "Diretor de Operações",
    image: "/Itapema-Ambiental.jpg",
  },
  {
    quote: "Terceirizo meus projetos digitais com a Sena Works e os resultados falam por si. Entregas rápidas, qualidade impecável e comunicação transparente. Recomendo de olhos fechados.",
    name: "Arthur Muniz",
    role: "Empresário Digital",
    image: "/Arthur-Muniz.jpg",
  },
  {
    quote: "O chatbot de IA no WhatsApp mudou nosso atendimento. Respondemos 24 horas por dia e as vendas subiram 40% no primeiro mês. A Sena Works entende de resultado.",
    name: "DriveXperience",
    role: "CEO",
    image: "/DriveXperience.jpg",
  },
  {
    quote: "A IA da Sena Works transformou nossas reuniões. Resumos automáticos e insights para treinar o time de vendas. Resultado? Vendas 40% maiores em 2 meses.",
    name: "Indaiá Eventos",
    role: "Diretor Comercial",
    image: "/Indaia-Eventos.jpg",
  },
];

const Stars = () => (
  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#1C1C1C"><path d="M7 1L8.8 5H13L9.5 7.5L10.8 12L7 9.5L3.2 12L4.5 7.5L1 5H5.2L7 1Z"/></svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div variants={fadeInUp}><SectionTag>Depoimentos</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>O Que Nossos Clientes Dizem</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 18, color: "#696969", maxWidth: 400, margin: "0 auto", lineHeight: 1.6 }}>Resultados reais de quem confiou na Sena Works</motion.p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="testimonials-grid">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={scaleIn} style={{ backgroundColor: "#F6F4F0", borderRadius: 16, padding: 32, boxShadow: CARD_SHADOW_SM }}>
              <Stars />
              <p style={{ fontSize: 14, color: "#1C1C1C", lineHeight: 1.65, marginBottom: 24, letterSpacing: "-0.2px" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: 44, height: 44, borderRadius: "50%", objectFit: "cover",
                    flexShrink: 0, border: "2px solid rgba(28,28,28,0.08)",
                  }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1C1C1C", letterSpacing: "-0.2px" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#969696" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}