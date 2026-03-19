"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

// --- Animations helper ---
function Anim({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

// --- Styles ---
const S = {
  page: { minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#fff", fontFamily: "'Sora', sans-serif" } as const,
  section: { padding: "96px 20px", maxWidth: 900, margin: "0 auto" } as const,
  badge: { display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(221,12,41,0.08)", border: "1px solid rgba(221,12,41,0.2)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 600, color: "#DD0C29", marginBottom: 24 } as const,
  h2: { fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 16 } as const,
  sub: { fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: 560 } as const,
  card: { backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 28 } as const,
  cardAccent: { backgroundColor: "rgba(221,12,41,0.04)", border: "1px solid rgba(221,12,41,0.15)", borderRadius: 16, padding: 28 } as const,
  divider: { height: 1, backgroundColor: "rgba(255,255,255,0.05)", margin: "0 auto", maxWidth: 900 } as const,
  cta: { display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#0a0a0a", fontSize: 15, fontWeight: 600, padding: "14px 28px", borderRadius: 100, transition: "transform 0.2s, opacity 0.2s", textDecoration: "none" } as const,
  ctaRed: { display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#DD0C29", color: "#fff", fontSize: 15, fontWeight: 600, padding: "14px 28px", borderRadius: 100, boxShadow: "0 20px 40px rgba(221,12,41,0.3)", transition: "transform 0.2s", textDecoration: "none" } as const,
};

// --- Deliverables ---
const deliverables = [
  { icon: "📄", label: "PDR 1-página", detail: "Clareza brutal do que você está construindo" },
  { icon: "📋", label: "PRD + backlog V1", detail: "Sem retrabalho infinito com IA" },
  { icon: "🚀", label: "MVP deployado", detail: "Link no ar, não 'quase pronto'" },
  { icon: "📦", label: "Oferta com 3 pacotes", detail: "Para parar de vender hora" },
  { icon: "🌐", label: "Landing Page v1", detail: "Wire + copy publicada" },
  { icon: "🎯", label: "Plano de distribuição", detail: "10 contatos qualificados em 48h" },
];

// --- Timeline ---
const timeline = [
  { day: "Dia 1", title: "Clareza + Produto", items: ["PDR — Product Definition Record", "PRD com IA — escopo validado", "Repositório + Ambiente configurado", "Início do MVP"] },
  { day: "Dia 2", title: "MVP no Ar", items: ["Deploy do MVP funcional", "Testes de uso real", "Ajustes baseados em feedback", "Link compartilhável pronto"] },
  { day: "Dia 3", title: "Oferta + Distribuição", items: ["Empacotamento da oferta (3 tiers)", "Landing page com copy", "Plano de distribuição 48h", "Primeiros contatos qualificados"] },
];

// --- Pricing ---
const plans = [
  { name: "Imersão", price: "R$497", badge: null, features: ["3 dias ao vivo (9h)", "6 entregáveis", "Acesso às gravações", "Templates e frameworks", "Comunidade por 30 dias"], cta: "Garantir vaga" },
  { name: "Imersão + Comunidade", price: "R$987", badge: "Mais escolhido", features: ["Tudo da Imersão", "Comunidade vitalícia", "Calls mensais de acompanhamento", "Networking com outros builders", "Acesso a futuras imersões"], cta: "Garantir vaga", highlight: true },
  { name: "Imersão VIP", price: "R$2.970", badge: "5 vagas", features: ["Tudo da Imersão + Comunidade", "1h de mentoria individual", "Review do seu produto", "Suporte prioritário por 90 dias", "Acesso direto ao Sena"], cta: "Garantir vaga VIP" },
];

// --- FAQ ---
const faqs = [
  { q: "Preciso saber programar?", a: "Sim. A imersão é para quem já programa (qualquer nível) e quer aprender a transformar código em produto que vende. Não é curso de programação do zero." },
  { q: "Como são os 3 dias?", a: "Ao vivo via Google Meet. 3 horas por dia, com pausas. Você sai de cada dia com entregáveis concretos. As gravações ficam disponíveis." },
  { q: "Vale para quem já tem produto?", a: "Sim! Se você já tem algo e não está vendendo, a imersão vai te ajudar a empacotar, precificar e distribuir." },
  { q: "E se eu não gostar?", a: "Se nas primeiras 2 horas do Dia 1 você sentir que não é para você, devolvemos 100% do valor. Sem burocracia." },
  { q: "Quando acontece?", a: "Primeira semana de Abril de 2026. As datas exatas serão anunciadas no grupo do WhatsApp." },
];

export default function ImersaoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={S.page}>
      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 900, width: "100%", backgroundColor: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderRadius: 12, padding: "8px 20px", border: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <img src="/logo-sena.svg" alt="Sena" style={{ height: 22 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Código NOMADE</span>
          </Link>
          <a href="#pricing" style={{ ...S.cta, fontSize: 13, padding: "8px 18px" }}>Garantir vaga</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 20px 80px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(221,12,41,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <div style={S.badge}>🔴 Primeira semana de Abril</div>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: 20 }}>
            Pare de &ldquo;fazer sistemas&rdquo;.
            <br />
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Comece a construir </span>
            <span style={{ color: "#DD0C29" }}>produtos que vendem.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Em 3 dias ao vivo, você sai com MVP deployado, oferta empacotada e plano de distribuição. Sem motivação. <strong style={{ color: "rgba(255,255,255,0.8)" }}>Método.</strong>
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <a href="#pricing" style={S.cta}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >Garantir minha vaga</a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>Imersão ao vivo · 3 dias · 9 horas · Turma limitada</p>
          </div>
        </motion.div>
      </section>

      <div style={S.divider} />

      {/* Entregáveis */}
      <section id="entregaveis" style={S.section}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Anim><h2 style={S.h2}>Em 3 dias, você sai segurando tudo isso.</h2></Anim>
          <Anim delay={0.1}><p style={S.sub}>Não é teoria. São artefatos prontos para vender.</p></Anim>
        </div>
        <Anim delay={0.2}>
          <div style={{ ...S.card, padding: 0, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#27C93F" }} />
              <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>launchkit.sh</span>
            </div>
            <div style={{ padding: "20px 24px" }}>
              {deliverables.map((item, i) => (
                <Anim key={item.label} delay={0.25 + i * 0.06}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < deliverables.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "rgba(221,12,41,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{item.label}</span>
                      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>— {item.detail}</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(221,12,41,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                </Anim>
              ))}
            </div>
          </div>
        </Anim>
      </section>

      <div style={S.divider} />

      {/* Timeline */}
      <section style={S.section}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Anim><h2 style={S.h2}>3 dias. 9 horas. 6 entregáveis.</h2></Anim>
          <Anim delay={0.1}><p style={S.sub}>Cada dia com resultado concreto.</p></Anim>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="problem-grid">
          {timeline.map((day, i) => (
            <Anim key={day.day} delay={0.15 + i * 0.1}>
              <div style={{ ...S.card, height: "100%" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#DD0C29", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>{day.day}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 16, letterSpacing: "-0.3px" }}>{day.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {day.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 3, flexShrink: 0 }}><path d="M5 13l4 4L19 7" /></svg>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* Pricing */}
      <section id="pricing" style={S.section}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Anim><h2 style={S.h2}>Escolha seu nível.</h2></Anim>
          <Anim delay={0.1}><p style={S.sub}>Investimento único. Resultado permanente.</p></Anim>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, alignItems: "start" }} className="pricing-grid">
          {plans.map((plan, i) => (
            <Anim key={plan.name} delay={0.1 + i * 0.08}>
              <div style={{
                ...(plan.highlight ? S.cardAccent : S.card),
                position: "relative", display: "flex", flexDirection: "column",
              }}>
                {plan.badge && (
                  <div style={{ position: "absolute", top: 16, right: 16, backgroundColor: plan.highlight ? "#DD0C29" : "rgba(255,255,255,0.1)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "4px 8px", borderRadius: 6 }}>{plan.badge}</div>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{plan.name}</h3>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#fff", letterSpacing: "-1.5px", marginBottom: 20 }}>{plan.price}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24, flex: 1 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={plan.highlight ? "#DD0C29" : "rgba(255,255,255,0.3)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="https://chat.whatsapp.com/HYlg9RqHmFk4FCZrBkiJuA" target="_blank" rel="noopener noreferrer" style={{
                  ...(plan.highlight ? S.ctaRed : { ...S.cta, backgroundColor: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }),
                  justifyContent: "center", width: "100%", textDecoration: "none",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >{plan.cta}</a>
              </div>
            </Anim>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* FAQ */}
      <section style={S.section}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Anim><h2 style={S.h2}>Perguntas Frequentes</h2></Anim>
        </div>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <Anim key={faq.q} delay={i * 0.05}>
              <div style={S.card}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit", padding: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }} style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: openFaq === i ? "#DD0C29" : "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 16 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2V10M2 6H10" stroke={openFaq === i ? "#fff" : "rgba(255,255,255,0.5)"} strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingTop: 12 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Anim>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "96px 20px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(221,12,41,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Anim>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Nunca foi falta de talento.</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>
            Era falta de <span style={{ color: "#DD0C29" }}>estrutura</span>.
          </h2>
          <a href="https://chat.whatsapp.com/HYlg9RqHmFk4FCZrBkiJuA" target="_blank" rel="noopener noreferrer" style={S.ctaRed}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Garantir minha vaga agora
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </Anim>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "24px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>&copy; 2026 Código NOMADE · Sena Works</p>
      </footer>
    </div>
  );
}