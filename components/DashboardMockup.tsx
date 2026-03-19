"use client";
import { motion } from "framer-motion";

const tasks = [
  { label: "Landing page — DriveXperience", status: "done", priority: "Alta" },
  { label: "Chatbot IA — Itapema Ambiental", status: "done", priority: "Alta" },
  { label: "Campanha Meta Ads — Well Pires", status: "in-progress", priority: "Média" },
  { label: "Site institucional — Arthur Muniz", status: "pending", priority: "Média" },
  { label: "IA Reuniões — Rony Meisler", status: "pending", priority: "Alta" },
];

const suggestions = [
  { icon: "⚡", text: "2 projetos prontos para aprovação do cliente" },
  { icon: "📊", text: "Campanha Meta Ads: CTR subiu 42% essa semana" },
  { icon: "🎯", text: "Prioridade: Entregar chatbot da Itapema até sexta" },
];

const progressBars = [
  { label: "Sites", pct: 72 },
  { label: "Campanhas", pct: 45 },
  { label: "Automações IA", pct: 28 },
];

export default function DashboardMockup() {
  return (
    <div style={{ borderRadius: 20, overflow: "hidden", backgroundColor: "#111", boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)", userSelect: "none" }}>
      {/* Window chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", backgroundColor: "#1a1a1a" }}>
        {["#FF5F57", "#FFBD2E", "#27C93F"].map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c }} />
        ))}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.06)", padding: "3px 12px", borderRadius: 6 }}>
            senaworks.com — Painel do Cliente
          </div>
        </div>
      </div>

      {/* Dashboard body */}
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 240px", minHeight: 420 }} className="dash-grid">
        {/* Sidebar */}
        <div style={{ backgroundColor: "#161616", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "20px 0" }}>
          <div style={{ padding: "0 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Sena Works</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Painel do Cliente</div>
          </div>
          {["Projetos", "Sites", "Campanhas", "Criativos", "Analytics", "IA Chat"].map((item, i) => (
            <div key={item} style={{ padding: "8px 16px", fontSize: 12, color: i === 0 ? "#fff" : "rgba(255,255,255,0.45)", backgroundColor: i === 0 ? "rgba(221,12,41,0.15)" : "transparent", borderLeft: i === 0 ? "2px solid #DD0C29" : "2px solid transparent", fontWeight: i === 0 ? 600 : 400 }}>
              {item}
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={{ padding: 20, overflow: "hidden" }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>Bem-vindo de volta 👋</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>5 projetos ativos — 2 aguardando aprovação</div>
          </div>
          <div style={{ marginBottom: 20 }}>
            {progressBars.map((bar) => (
              <div key={bar.label} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{bar.label}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{bar.pct}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${bar.pct}%` }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ height: "100%", borderRadius: 4, backgroundColor: "#DD0C29" }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px" }}>Projetos</div>
          {tasks.map((task, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 10px", borderRadius: 8, marginBottom: 4, backgroundColor: "rgba(255,255,255,0.03)" }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", border: task.status === "done" ? "none" : "1.5px solid rgba(255,255,255,0.2)", backgroundColor: task.status === "done" ? "#DD0C29" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {task.status === "done" && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <span style={{ fontSize: 12, color: task.status === "done" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.8)", textDecoration: task.status === "done" ? "line-through" : "none", flex: 1 }}>{task.label}</span>
              <span style={{ fontSize: 10, color: task.priority === "Alta" ? "#FF5F57" : task.priority === "Média" ? "#FFBD2E" : "rgba(255,255,255,0.3)", fontWeight: 500 }}>{task.priority}</span>
            </div>
          ))}
        </div>

        {/* AI sidebar */}
        <div style={{ backgroundColor: "#0e0e0e", borderLeft: "1px solid rgba(255,255,255,0.06)", padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, backgroundColor: "#DD0C29", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>⚡</div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>IA Sena Works</span>
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#DD0C29", marginLeft: "auto" }} />
          </div>
          {suggestions.map((s, i) => (
            <div key={i} style={{ backgroundColor: "rgba(221,12,41,0.08)", borderRadius: 10, padding: "10px 12px", marginBottom: 8, border: "1px solid rgba(221,12,41,0.15)" }}>
              <div style={{ fontSize: 14, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{s.text}</div>
            </div>
          ))}
          <div style={{ marginTop: 16, backgroundColor: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Entregas da Semana</div>
            <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 40 }}>
              {[60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 6 ? "#DD0C29" : "rgba(221,12,41,0.35)", borderRadius: 3, transformOrigin: "bottom" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
