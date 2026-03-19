"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, viewportOptions } from "@/lib/animations";

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const BarChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const features = [
  { title: "Design que Converte", desc: "Cada pixel do seu site é pensado para guiar o visitante até a ação. Layouts testados que geram até 3x mais leads.", icon: <ZapIcon /> },
  { title: "IA Integrada em Tudo", desc: "Chatbots para WhatsApp, automações de atendimento e sistemas inteligentes que trabalham por você.", icon: <BarChartIcon /> },
  { title: "Suporte Dedicado", desc: "Time disponível para tirar dúvidas, fazer ajustes e garantir que tudo funcione perfeitamente.", icon: <CheckCircleIcon /> },
  { title: "Do Briefing ao Lançamento", desc: "Você não precisa contratar 5 fornecedores diferentes. A Sena Works cuida de tudo: estratégia, design, desenvolvimento, tráfego e automação. Um time, um ponto de contato, resultado completo.", icon: <SunIcon />, wide: true },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div variants={fadeInUp}><SectionTag>Por Que a Sena Works</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>O Que Nos Diferencia de Outras Agências</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 18, color: "#696969", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>Entregamos projetos completos com foco em resultado. Sem enrolação, sem promessas vazias.</motion.p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="features-grid">
          {features.map((f) => (
            <motion.div key={f.title} variants={scaleIn} style={{ backgroundColor: "#F6F4F0", borderRadius: 16, padding: 32, boxShadow: CARD_SHADOW, gridColumn: (f as any).wide ? "1 / -1" : "auto" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(221,12,41,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1C1C1C", marginBottom: 8, letterSpacing: "-0.3px" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#696969", lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
