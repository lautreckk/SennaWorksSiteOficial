"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, viewportOptions } from "@/lib/animations";
import Link from "next/link";

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress >= 1) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}<span style={{ color: "#DD0C29" }}>{suffix}</span></span>;
};

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const beforeItems = ["Site feito no Wix que não aparece no Google", "Agência que demora semanas para responder", "Anúncios sem estratégia que só queimam dinheiro", "Perder clientes no WhatsApp por falta de resposta rápida", "Freelancer que some no meio do projeto", "Design amador que não passa confiança"];
const afterItems = ["Site profissional otimizado para Google e conversão", "Time dedicado com resposta em até 24 horas", "Campanhas com relatórios claros e ROI rastreado", "IA no WhatsApp que atende 24/7 e qualifica leads", "Processo transparente com entregas semanais", "Design moderno feito por especialistas em UI/UX", "Suporte contínuo mesmo depois do lançamento"];
const stats = [{ num: "50", suffix: "+", label: "Projetos Entregues" }, { num: "12", suffix: "", label: "Clientes Ativos" }, { num: "3", suffix: "x", label: "Mais Conversões em Média" }, { num: "24", suffix: "/7", label: "Suporte e Automação" }];

export default function Comparison() {
  return (
    <section id="comparison" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div variants={fadeInUp}><SectionTag>Comparação</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Por Que Escolher a Sena Works</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 18, color: "#696969", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>Veja a diferença entre fazer sozinho ou ter uma equipe especializada trabalhando pelo seu resultado.</motion.p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }} className="comparison-grid">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ backgroundColor: "#F6F4F0", borderRadius: 24, padding: 32, boxShadow: CARD_SHADOW }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#969696", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>Antes</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#1C1C1C", letterSpacing: "-0.3px" }}>Sem a Sena Works</div>
            </div>
            {beforeItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "rgba(28,28,28,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2L8 8M8 2L2 8" stroke="#969696" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <span style={{ fontSize: 14, color: "#696969", lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ backgroundColor: "#1C1C1C", borderRadius: 24, padding: 32 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>Depois</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#fff", letterSpacing: "-0.3px" }}>Com a Sena Works</div>
            </div>
            {afterItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "rgba(221,12,41,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#DD0C29" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
            <Link href="#pricing" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "#F6F4F0", color: "#1C1C1C", fontSize: 15, fontWeight: 600, padding: "14px", borderRadius: 16, letterSpacing: "-0.3px", marginTop: 24, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
              Agende uma Consultoria Grátis
            </Link>
          </motion.div>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="stats-grid">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} style={{ textAlign: "center", padding: "24px 16px", backgroundColor: "#F6F4F0", borderRadius: 16, boxShadow: CARD_SHADOW }}>
              <div style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#1C1C1C", letterSpacing: "-1px", marginBottom: 4 }}>
                <AnimatedCounter value={parseInt(stat.num)} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: 13, color: "#696969" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
