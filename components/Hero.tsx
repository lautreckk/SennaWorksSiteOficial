"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import DashboardMockup from "./DashboardMockup";

const logos = ["Rony Meisler", "Well Pires", "Itapema Ambiental", "Arthur Muniz", "DriveXperience", "Indaiá Eventos"];

const rotatingWords = ["Vende", "Converte", "Escala", "Domina"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ paddingTop: 160, paddingBottom: 24, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", backgroundColor: "rgba(221,12,41,0.07)", filter: "blur(120px)", pointerEvents: "none", zIndex: 0 }} />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Hero Badge */}
        <motion.div variants={fadeInUp} style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#F6F4F0", borderRadius: 100, padding: "4px 16px 4px 4px", boxShadow: "rgba(28,28,28,0) 0px 0.602px 0.602px 0px, rgba(28,28,28,0.02) 0px 2.289px 2.289px 0px, rgba(28,28,28,0.08) 0px 10px 10px 0px, #fff 0px -6px 6px -5px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#1C1C1C", color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#DD0C29", display: "inline-block" }} />
              Novo
            </span>
            <span style={{ fontSize: 12, color: "#1C1C1C", fontWeight: 500 }}>IA para WhatsApp — Atendimento 24/7 no piloto automático</span>
          </div>
        </motion.div>

        {/* Heading with rotating word */}
        <motion.div variants={fadeInUp} style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, color: "#1C1C1C", letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 900, margin: "0 auto" }}>
            <span style={{ display: "block" }}>Criamos o Digital Que</span>
            <span style={{ display: "inline-flex", alignItems: "center", position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ y: 40, opacity: 0, rotateX: -40, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, rotateX: 40, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "inline-block",
                    color: "#DD0C29",
                    position: "relative",
                  }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              <span style={{ color: "#1C1C1C" }}>&nbsp;de Verdade</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeInUp} style={{ fontSize: 19, color: "#696969", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65, letterSpacing: "-0.2px" }}>
          Sites que convertem. Sistemas com IA. Tráfego que dá retorno.
          <br />
          <span style={{ color: "#1C1C1C", fontWeight: 500 }}>Tudo em um só lugar.</span>
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeInUp} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 72, flexWrap: "wrap" }}>
          <Link href="#pricing" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#DD0C29", color: "#fff", fontSize: 16, fontWeight: 600, padding: "16px 32px", borderRadius: 16, letterSpacing: "-0.32px", boxShadow: "rgba(255,255,255,0.2) 0px 0px 20px 1.64px inset, rgba(221,12,41,0.3) 0px 20px 40px -10px", transition: "opacity 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
            Solicitar Orçamento Grátis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link href="#testimonials" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F6F4F0", color: "#1C1C1C", fontSize: 16, fontWeight: 500, padding: "16px 32px", borderRadius: 16, letterSpacing: "-0.32px", boxShadow: "rgba(28,28,28,0.01) 0px 0.602px 0.602px 0px, rgba(28,28,28,0.03) 0px 2.289px 2.289px 0px, rgba(28,28,28,0.12) 0px 10px 10px 0px, #fff 0px -6px 6px -5px", transition: "opacity 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.8"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
            Ver Nossos Cases
          </Link>
        </motion.div>

        {/* Dashboard */}
        <motion.div variants={fadeInUp} style={{ width: "100%", maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
          <DashboardMockup />
        </motion.div>

        {/* Logos */}
        <motion.div variants={fadeInUp} style={{ marginTop: 64, width: "100%", maxWidth: 1080, margin: "64px auto 0" }}>
          <p style={{ fontSize: 12, color: "#969696", textAlign: "center", marginBottom: 24, letterSpacing: "0.5px", textTransform: "uppercase" }}>
            Empresas que já cresceram com a Sena Works
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {logos.map((logo, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                style={{ fontSize: 16, fontWeight: 600, color: "#C8C8C8", letterSpacing: "-0.3px", whiteSpace: "nowrap" }}
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}