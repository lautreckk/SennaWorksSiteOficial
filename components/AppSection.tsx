"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import Link from "next/link";

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

export default function AppSection() {
  return (
    <section style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <div style={{ backgroundColor: "#F6F4F0", borderRadius: 32, padding: 56, boxShadow: CARD_SHADOW, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="app-grid">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <motion.div variants={fadeInUp}><SectionTag>IA para WhatsApp</SectionTag></motion.div>
            <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Seu WhatsApp Vendendo e Atendendo 24 Horas por Dia</motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: 17, color: "#696969", lineHeight: 1.6, marginBottom: 12 }}>Imagine ter um atendente que nunca dorme, nunca erra e responde em segundos. Isso é IA no WhatsApp.</motion.p>
            <motion.p variants={fadeInUp} style={{ fontSize: 15, fontWeight: 600, color: "#1C1C1C", marginBottom: 8 }}>Atendimento Inteligente no WhatsApp</motion.p>
            <motion.p variants={fadeInUp} style={{ fontSize: 14, color: "#696969", lineHeight: 1.6, marginBottom: 32 }}>Qualifique leads, responda dúvidas, agende reuniões e feche vendas automaticamente pelo WhatsApp.</motion.p>
            <motion.div variants={fadeInUp} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1C1C1C", color: "#fff", fontSize: 15, fontWeight: 500, padding: "14px 24px", borderRadius: 16, letterSpacing: "-0.3px", boxShadow: "rgba(255,255,255,0.15) 0px 0px 20px 1.64px inset, rgba(0,0,0,0.13) 0px 50px 30px -2.5px", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
                Quero IA no Meu WhatsApp
              </Link>
              <Link href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F4F0", color: "#1C1C1C", fontSize: 15, fontWeight: 500, padding: "14px 24px", borderRadius: 16, letterSpacing: "-0.3px", boxShadow: CARD_SHADOW, border: "1px solid rgba(28,28,28,0.08)", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
                Ver Demonstração
              </Link>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOptions} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 240, height: 480, borderRadius: 36, backgroundColor: "#1C1C1C", padding: 12, boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 8px 32px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.1)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: 26, backgroundColor: "#111", overflow: "hidden", padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>9:41</span>
                  <div style={{ width: 60, height: 12, borderRadius: 100, backgroundColor: "rgba(255,255,255,0.1)" }} />
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>100%</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 4 }}>WhatsApp IA 🤖</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Atendimento inteligente ativo</div>
                {["Olá! Como posso ajudar?", "Quero saber sobre preços", "Claro! Vou enviar nosso catálogo"].map((t, i) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 8, backgroundColor: "rgba(255,255,255,0.05)", marginBottom: 6 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", border: i === 0 ? "none" : "1.5px solid rgba(255,255,255,0.15)", backgroundColor: i === 0 ? "#DD0C29" : "transparent" }} />
                    <span style={{ fontSize: 11, color: i === 0 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.75)" }}>{t}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, backgroundColor: "rgba(221,12,41,0.15)", borderRadius: 12, padding: "10px 12px", border: "1px solid rgba(221,12,41,0.2)" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>⚡ IA Ativa</div>
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>127 atendimentos hoje. 23 leads qualificados. 8 reuniões agendadas.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
