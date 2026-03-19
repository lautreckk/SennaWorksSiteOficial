"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, viewportOptions } from "@/lib/animations";
import Link from "next/link";

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const CheckIcon = () => (
  <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "rgba(221,12,41,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#DD0C29" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
);

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    name: "Landing Pages",
    desc: "Páginas de alta conversão, rápidas e otimizadas",
    features: [
      "Design inovador e responsivo",
      "Rápido — entrega em até 7 dias",
      "Otimizada para menor custo por clique",
      "IA integrada (chat, formulários)",
      "Domínio e hospedagem inclusos",
    ],
    cta: "Quero Minha Landing Page",
    highlight: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    name: "IA para WhatsApp",
    desc: "Atendimento 24/7 no piloto automático",
    features: [
      "Chatbot inteligente com IA",
      "Qualifica leads automaticamente",
      "Agenda reuniões sozinho",
      "Responde dúvidas em segundos",
      "Integração com seu CRM",
    ],
    cta: "Quero IA no WhatsApp",
    highlight: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    name: "Tráfego Pago",
    desc: "Google Ads e Meta Ads com foco em ROI",
    features: [
      "Campanhas no Google e Meta",
      "Otimização semanal de resultados",
      "Criativos profissionais inclusos",
      "Relatórios transparentes mensais",
      "Foco em conversão, não vaidade",
    ],
    cta: "Quero Tráfego Pago",
    highlight: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    name: "Sistemas & Automação",
    desc: "Sistemas sob medida com IA integrada",
    features: [
      "Dashboards e painéis administrativos",
      "Automação de boletos e NFs",
      "CRMs personalizados",
      "Integração entre sistemas",
      "Apps web e mobile",
    ],
    cta: "Quero Um Sistema",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div variants={fadeInUp}><SectionTag>Nossos Serviços</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Escolha o Serviço Ideal Para Você</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 18, color: "#696969", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>Cada projeto é único. Escolha o que faz sentido e a gente cuida do resto.</motion.p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 24 }} className="pricing-grid">
          {services.map((svc) => (
            <motion.div key={svc.name} variants={scaleIn} style={{
              backgroundColor: svc.highlight ? "#1C1C1C" : "#F6F4F0",
              borderRadius: 20, padding: 32, boxShadow: CARD_SHADOW, position: "relative",
              display: "flex", flexDirection: "column",
            }}>
              {svc.highlight && (
                <div style={{ position: "absolute", top: 24, right: 24, backgroundColor: "#DD0C29", color: "#fff", fontSize: 11, fontWeight: 600, padding: "5px 10px", borderRadius: 8 }}>Mais Pedido</div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  backgroundColor: svc.highlight ? "rgba(221,12,41,0.2)" : "rgba(221,12,41,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {svc.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: svc.highlight ? "#fff" : "#1C1C1C", letterSpacing: "-0.4px" }}>{svc.name}</h3>
                  <p style={{ fontSize: 13, color: svc.highlight ? "rgba(255,255,255,0.5)" : "#969696" }}>{svc.desc}</p>
                </div>
              </div>

              <div style={{ height: 1, backgroundColor: svc.highlight ? "rgba(255,255,255,0.08)" : "rgba(28,28,28,0.08)", marginBottom: 20 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, marginBottom: 24 }}>
                {svc.features.map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: svc.highlight ? "rgba(221,12,41,0.3)" : "rgba(221,12,41,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke={svc.highlight ? "#fff" : "#DD0C29"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: 14, color: svc.highlight ? "rgba(255,255,255,0.85)" : "#1C1C1C", lineHeight: 1.4 }}>{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="#contato" style={{
                display: "flex", alignItems: "center", justifyContent: "center", width: "100%",
                backgroundColor: svc.highlight ? "#DD0C29" : "#F6F4F0",
                color: svc.highlight ? "#fff" : "#1C1C1C",
                fontSize: 15, fontWeight: 600, padding: "14px", borderRadius: 16, letterSpacing: "-0.3px",
                boxShadow: svc.highlight ? "rgba(221,12,41,0.3) 0px 20px 40px -10px, rgba(255,255,255,0.15) 0px 0px 20px 1.64px inset" : CARD_SHADOW,
                border: svc.highlight ? "none" : "1px solid rgba(28,28,28,0.08)",
                transition: "opacity 0.2s, transform 0.2s",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                {svc.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA — Atendimento Personalizado */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          <div className="pricing-bottom-cta" style={{
            backgroundColor: "#1C1C1C", borderRadius: 20, padding: "40px 48px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24,
          }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>Atendimento Personalizado</div>
              <h3 style={{ fontSize: 24, fontWeight: 600, color: "#fff", letterSpacing: "-0.5px", marginBottom: 6 }}>Precisa de algo sob medida?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 420, lineHeight: 1.5 }}>Projetos complexos, integrações específicas ou escopo diferente? Fale com nosso time e montamos uma proposta personalizada.</p>
            </div>
            <Link href="#contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#DD0C29", color: "#fff", fontSize: 16, fontWeight: 600,
              padding: "16px 32px", borderRadius: 16, flexShrink: 0,
              boxShadow: "rgba(221,12,41,0.4) 0px 20px 40px -10px, rgba(255,255,255,0.15) 0px 0px 20px 1.64px inset",
              transition: "transform 0.2s, opacity 0.2s",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Entre em Contato
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}