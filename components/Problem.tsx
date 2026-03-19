"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, viewportOptions } from "@/lib/animations";

const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>
    {children}
  </div>
);

const WrenchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const TrendingDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
  </svg>
);

const problems = [
  { title: "Site Que Não Converte", desc: "Seu site é bonito, mas não gera leads nem vendas. Visitantes entram e saem sem tomar nenhuma ação.", icon: <WrenchIcon /> },
  { title: "Dinheiro Jogado em Anúncios", desc: "Você investe em tráfego pago todo mês, mas não sabe se está dando resultado. O retorno não aparece.", icon: <TargetIcon /> },
  { title: "Clientes Perdidos por Demora", desc: "Enquanto você demora para responder, seu concorrente já fechou a venda. Sem automação, você perde oportunidades.", icon: <TrendingDownIcon /> },
];

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";

export default function Problem() {
  return (
    <section id="problem" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div variants={fadeInUp}><SectionTag>O Problema</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16, maxWidth: 600, margin: "0 auto 16px" }}>
            Por Que Seu Negócio Não Cresce Online
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 18, color: "#696969", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            A maioria dos negócios perde dinheiro por não ter presença digital profissional, campanhas otimizadas e atendimento automatizado.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }} className="problem-grid">
          {problems.map((p) => (
            <motion.div key={p.title} variants={scaleIn} style={{ backgroundColor: "#F6F4F0", borderRadius: 16, padding: 32, boxShadow: CARD_SHADOW }}>
              <div style={{ width: 32, height: 32, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1C1C1C", marginBottom: 8, letterSpacing: "-0.3px" }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "#696969", lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", padding: 24, backgroundColor: "#F6F4F0", borderRadius: 16, boxShadow: CARD_SHADOW }}>
          <p style={{ fontSize: 16, fontWeight: 500, color: "#1C1C1C", letterSpacing: "-0.3px" }}>
            Com a Sena Works, você resolve tudo em um só lugar: site profissional, tráfego qualificado e IA que atende seus clientes 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
