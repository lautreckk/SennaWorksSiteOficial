"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInRight, viewportOptions } from "@/lib/animations";

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const DemoTargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const ClipboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);
const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const contentCards = [
  { title: "Briefing & Estratégia", desc: "Entendemos seu negócio, seus concorrentes e seus objetivos. Montamos um plano personalizado para gerar resultados reais.", icon: <DemoTargetIcon /> },
  { title: "Desenvolvimento & Aprovação", desc: "Criamos seu projeto com entregas parciais para você acompanhar e aprovar cada etapa. Sem surpresas.", icon: <ClipboardIcon /> },
  { title: "Lançamento & Crescimento", desc: "Colocamos tudo no ar, ativamos as campanhas e monitoramos os resultados. Seu negócio cresce desde o dia 1.", icon: <UsersIcon /> },
];

export default function Demo() {
  return (
    <section style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="demo-grid">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <motion.div variants={fadeInUp}><SectionTag>Como Funciona</SectionTag></motion.div>
            <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Do Primeiro Contato ao Resultado em 3 Passos</motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: 17, color: "#696969", lineHeight: 1.6, marginBottom: 32 }}>Processo claro, prazos definidos e comunicação direta. Você sabe exatamente o que esperar em cada etapa.</motion.p>
            <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contentCards.map((card) => (
                <motion.div key={card.title} variants={fadeInUp} style={{ backgroundColor: "#F6F4F0", borderRadius: 16, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start", boxShadow: CARD_SHADOW }}>
                  <span style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>{card.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1C1C1C", marginBottom: 6, letterSpacing: "-0.3px" }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: "#696969", lineHeight: 1.5 }}>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <div style={{ borderRadius: 24, overflow: "hidden", backgroundColor: "#1C1C1C", padding: 24, boxShadow: "0 32px 80px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.08)" }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 12 }}>Seu Projeto</div>
                {["Site institucional aprovado", "Campanha Google Ads ativa", "Chatbot WhatsApp configurado"].map((t, i) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, backgroundColor: "rgba(255,255,255,0.06)", marginBottom: 6 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", border: i === 0 ? "none" : "1.5px solid rgba(255,255,255,0.2)", backgroundColor: i === 0 ? "#DD0C29" : "transparent" }} />
                    <span style={{ fontSize: 12, color: i === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.8)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "rgba(221,12,41,0.12)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(221,12,41,0.2)", marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>⚡ Status do Projeto</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>Seu site está gerando 47 leads por semana. A campanha de Google Ads teve ROI de 4.2x este mês.</p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[["92%", "Progresso"], ["47", "Leads/semana"], ["4.2x", "ROI"]].map(([stat, label]) => (
                  <div key={stat} style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{stat}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
