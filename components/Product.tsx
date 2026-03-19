"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

const tabs = [
  { label: "Sites & Sistemas", features: [{ title: "Landing Pages Que Convertem", desc: "Páginas focadas em um único objetivo: transformar visitantes em clientes. Design pensado para gerar resultados." }, { title: "Sites Institucionais e E-commerce", desc: "Seu negócio online com visual profissional, rápido e otimizado para Google." }, { title: "Sistemas Web com IA", desc: "Dashboards, painéis administrativos e automações sob medida para o seu negócio." }] },
  { label: "Tráfego Pago", features: [{ title: "Google Ads Otimizado", desc: "Apareça para quem já está buscando o que você vende. Campanhas com foco em ROI real." }, { title: "Meta Ads (Facebook e Instagram)", desc: "Alcance seu público ideal com criativos que geram cliques e vendas de verdade." }, { title: "Relatórios Transparentes", desc: "Acompanhe cada real investido. Você sabe exatamente quanto entra e quanto sai." }] },
  { label: "IA & Automação", features: [{ title: "IA para WhatsApp", desc: "Chatbot inteligente que responde, qualifica leads e agenda reuniões pelo WhatsApp 24 horas por dia." }, { title: "Atendimento Automatizado", desc: "Nunca mais perca um cliente por demora. A IA responde em segundos, a qualquer hora." }, { title: "Automações de Processos", desc: "Conecte seus sistemas e elimine tarefas repetitivas. Mais tempo para focar no que importa." }] },
];

// --- Animated Visuals for each tab ---

function SitesVisual() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1C1C1C", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
      {/* Browser chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {["#FF5F57", "#FFBD2E", "#27C93F"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: c }} />)}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 10px", borderRadius: 4 }}>seusite.com.br</div>
        </div>
      </div>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
        <div style={{ width: 40, height: 10, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.2)" }} />
        <div style={{ display: "flex", gap: 12 }}>
          {[40, 32, 36].map((w, i) => <div key={i} style={{ width: w, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.1)" }} />)}
        </div>
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 50, height: 20, borderRadius: 6, backgroundColor: "#DD0C29", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, color: "#fff", fontWeight: 600 }}>CTA</span>
        </motion.div>
      </div>
      {/* Hero mockup */}
      <div style={{ flex: 1, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.03)", padding: 16, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 }}>
        <motion.div initial={{ width: 0 }} animate={{ width: 120 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ height: 10, borderRadius: 5, backgroundColor: "rgba(255,255,255,0.2)" }} />
        <motion.div initial={{ width: 0 }} animate={{ width: 180 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.08)" }} />
        <motion.div initial={{ width: 0 }} animate={{ width: 140 }} transition={{ duration: 0.8, delay: 0.7 }} style={{ height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.08)" }} />
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }} style={{ marginTop: 8, width: 80, height: 24, borderRadius: 8, backgroundColor: "#DD0C29", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8, color: "#fff", fontWeight: 600 }}>Começar</span>
        </motion.div>
      </div>
      {/* Stats bar */}
      <div style={{ display: "flex", gap: 8 }}>
        {[{ label: "Visitantes", val: "2.4K" }, { label: "Conversão", val: "8.7%" }, { label: "Vendas", val: "R$12K" }].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.15 }} style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{s.val}</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TrafegoVisual() {
  const bars = [35, 52, 44, 68, 85, 72, 90];
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1C1C1C", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 16, overflow: "hidden" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Performance Semanal</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>R$24.800</div>
          <div style={{ fontSize: 10, color: "#4ADE80" }}>↑ 34% vs semana anterior</div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["Google", "Meta"].map(p => (
            <div key={p} style={{ padding: "4px 10px", borderRadius: 6, backgroundColor: "rgba(255,255,255,0.06)", fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{p}</div>
          ))}
        </div>
      </div>
      {/* Chart */}
      <div style={{ flex: 1, display: "flex", gap: 6, alignItems: "flex-end", padding: "0 4px" }}>
        {bars.map((h, i) => (
          <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ flex: 1, height: `${h}%`, borderRadius: 6, transformOrigin: "bottom", backgroundColor: i === bars.length - 1 ? "#DD0C29" : "rgba(221,12,41,0.3)" }} />
        ))}
      </div>
      {/* Metrics row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[{ icon: "👁", label: "Impressões", val: "48.2K" }, { icon: "👆", label: "Cliques", val: "3.1K" }, { icon: "💰", label: "ROAS", val: "4.2x" }].map((m, i) => (
          <motion.div key={m.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.1 }} style={{ backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 12, marginBottom: 4 }}>{m.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{m.val}</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IAVisual() {
  const msgs = [
    { from: "user", text: "Oi, quero saber sobre o plano Pro" },
    { from: "ai", text: "Olá! 😊 O Plano Pro inclui site completo + tráfego + IA. Qual é o seu negócio?" },
    { from: "user", text: "Tenho uma loja de roupas" },
    { from: "ai", text: "Perfeito! Posso agendar uma call de 15min com nosso time para montar sua proposta. Qual o melhor horário?" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1C1C1C", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* WhatsApp header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 4px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Sena Works IA</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>online • responde em segundos</div>
        </div>
        <div style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ADE80" }} />
      </div>
      {/* Messages */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, padding: "12px 0", overflowY: "auto" }}>
        {msgs.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.6, duration: 0.3 }}
            style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start" }}
          >
            <div style={{
              maxWidth: "80%", padding: "8px 12px", borderRadius: 12,
              fontSize: 12, lineHeight: 1.45, color: "#fff",
              backgroundColor: msg.from === "user" ? "#005C4B" : "rgba(255,255,255,0.08)",
              borderBottomRightRadius: msg.from === "user" ? 4 : 12,
              borderBottomLeftRadius: msg.from === "ai" ? 4 : 12,
            }}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {/* Typing indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} style={{ display: "flex" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 12, borderBottomLeftRadius: 4, padding: "10px 14px", display: "flex", gap: 3 }}>
            {[0, 1, 2].map(i => (
              <motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.12 }} style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.3)" }} />
            ))}
          </div>
        </motion.div>
      </div>
      {/* Input */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
        <div style={{ flex: 1, height: 32, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.06)", padding: "0 12px", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>Digite uma mensagem...</span>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
      </div>
    </div>
  );
}

const visuals = [SitesVisual, TrafegoVisual, IAVisual];

const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";

export default function Product() {
  const [activeTab, setActiveTab] = useState(0);
  const Visual = visuals[activeTab];

  return (
    <section id="product" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.div variants={fadeInUp}><SectionTag>Nossos Serviços</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Tudo Que Seu Negócio Precisa Para Vender Online</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 18, color: "#696969", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>Do site ao tráfego pago, da IA ao design. A Sena Works cuida de tudo.</motion.p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOptions} transition={{ duration: 0.5 }}>
          <div className="product-tabs" style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 40, backgroundColor: "#F6F4F0", borderRadius: 16, padding: 4, width: "fit-content", margin: "0 auto 40px", boxShadow: CARD_SHADOW }}>
            {tabs.map((tab, i) => (
              <button key={tab.label} onClick={() => setActiveTab(i)} style={{ padding: "10px 20px", borderRadius: 12, border: "none", cursor: "pointer", fontSize: 14, fontWeight: activeTab === i ? 600 : 500, color: activeTab === i ? "#1C1C1C" : "#969696", backgroundColor: activeTab === i ? "#fff" : "transparent", boxShadow: activeTab === i ? CARD_SHADOW : "none", transition: "all 0.2s", letterSpacing: "-0.3px", fontFamily: "inherit" }}>
                {tab.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }} className="product-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {tabs[activeTab].features.map((f, i) => (
                  <motion.div key={f.title} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }} style={{ backgroundColor: "#F6F4F0", borderRadius: 16, padding: "20px 24px", boxShadow: CARD_SHADOW }}>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1C1C1C", marginBottom: 6, letterSpacing: "-0.3px" }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: "#696969", lineHeight: 1.5 }}>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", boxShadow: CARD_SHADOW }}>
                <Visual />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}