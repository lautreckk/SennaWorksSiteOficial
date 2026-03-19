"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const integrationLogos = [
  { name: "Framer", src: "https://framerusercontent.com/images/6L6VJXP3AUeRZG225poOYMaFqY.png" },
  { name: "Loom", src: "https://framerusercontent.com/images/CmZzwugry7Cx0oJfKMLCf1iB05g.png" },
  { name: "Slack", src: "https://framerusercontent.com/images/fIxlANbXNYPdFpOUpGRT4aUw2A.png?scale-down-to=1024" },
  { name: "Arc", src: "https://framerusercontent.com/images/q86334dlZ2SmCjniyEavac.png" },
  { name: "Google Calendar", src: "https://framerusercontent.com/images/Mqn9OI5qLCev8cLF2S7v1EmcGu4.png?scale-down-to=1024" },
];
const intNames = ["React", "Next.js", "Node.js", "Python", "WhatsApp API", "Google Ads", "Meta Ads", "Figma", "Vercel"];

export default function Integrations() {
  return (
    <section id="integrations" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="integrations-grid">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <motion.div variants={fadeInUp}><SectionTag>Tecnologias</SectionTag></motion.div>
            <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Construímos Com as Melhores Ferramentas do Mercado</motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: 17, color: "#696969", lineHeight: 1.6, marginBottom: 32 }}>Usamos tecnologias modernas para garantir velocidade, segurança e escalabilidade em cada projeto.</motion.p>
            <motion.div variants={fadeInUp} style={{ display: "inline-flex", alignItems: "center", gap: 12, backgroundColor: "#F6F4F0", borderRadius: 16, padding: "14px 20px", boxShadow: CARD_SHADOW }}>
              <span style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="#DD0C29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1C1C1C", marginBottom: 2 }}>+20 Tecnologias no nosso stack</div>
                <div style={{ fontSize: 12, color: "#696969" }}>Ferramentas modernas para entregar projetos de alta performance</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOptions} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ backgroundColor: "#F6F4F0", borderRadius: 24, padding: 32, boxShadow: CARD_SHADOW }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                <div style={{ width: 64, height: 64, borderRadius: 18, backgroundColor: "#1C1C1C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", padding: 10 }}>
                  <img src="/logo-sena.svg" alt="Sena" style={{ width: "100%", height: "100%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
                {integrationLogos.map((logo) => (
                  <div key={logo.name} style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: "#fff", padding: 9, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }} title={logo.name}>
                    <img src={logo.src} alt={logo.name} style={{ width: 30, height: 30, objectFit: "contain" }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginTop: 16 }}>
                {intNames.map((name) => (
                  <div key={name} style={{ backgroundColor: "#fff", borderRadius: 8, padding: "6px 10px", fontSize: 11, fontWeight: 500, color: "#696969", textAlign: "center" }}>{name}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
