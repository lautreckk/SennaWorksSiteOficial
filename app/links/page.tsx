"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Imersão Código NOMADE",
    description: "3 dias ao vivo. MVP + oferta + distribuição. Primeira semana de Abril.",
    href: "/imersao-codigo-nomade",
    accent: true,
    emoji: "🚀",
  },
  {
    label: "YouTube",
    description: "@realGabrielSena",
    href: "https://www.youtube.com/@realGabrielSena",
    emoji: "🎬",
  },
  {
    label: "Instagram",
    description: "@sena.creator",
    href: "https://www.instagram.com/sena.creator/",
    emoji: "📸",
  },
  {
    label: "Grupo da Imersão",
    description: "Entre no grupo do WhatsApp",
    href: "https://chat.whatsapp.com/HYlg9RqHmFk4FCZrBkiJuA",
    emoji: "💬",
  },
  {
    label: "Sena Works — Agência",
    description: "Sites, IA, Tráfego Pago",
    href: "/",
    emoji: "⚡",
  },
];

export default function LinktreePage() {
  return (
    <div style={{ minHeight: "100svh", backgroundColor: "#0a0a0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "64px 20px" }}>
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 40 }}
      >
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          backgroundColor: "#DD0C29", display: "flex",
          alignItems: "center", justifyContent: "center",
          marginBottom: 16, boxShadow: "0 0 40px rgba(221,12,41,0.3)",
        }}>
          <img src="/logo-sena.svg" alt="Sena" style={{ width: 48, height: 48 }} />
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>SENA</h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Código NOMADE</p>
      </motion.div>

      {/* Links */}
      <div style={{ width: "100%", maxWidth: 420, display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("/") ? undefined : "_blank"}
            rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              borderRadius: 16, padding: "16px 20px",
              border: link.accent ? "1px solid rgba(221,12,41,0.3)" : "1px solid rgba(255,255,255,0.08)",
              backgroundColor: link.accent ? "rgba(221,12,41,0.06)" : "rgba(255,255,255,0.02)",
              transition: "all 0.2s", cursor: "pointer", textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.borderColor = link.accent ? "rgba(221,12,41,0.5)" : "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.backgroundColor = link.accent ? "rgba(221,12,41,0.1)" : "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.borderColor = link.accent ? "rgba(221,12,41,0.3)" : "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.backgroundColor = link.accent ? "rgba(221,12,41,0.06)" : "rgba(255,255,255,0.02)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 20 }}>{link.emoji}</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: link.accent ? "#fff" : "rgba(255,255,255,0.8)" }}>{link.label}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{link.description}</p>
              </div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={link.accent ? "#DD0C29" : "rgba(255,255,255,0.25)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", marginTop: 48 }}
      >
        &copy; 2026 Código NOMADE
      </motion.p>
    </div>
  );
}