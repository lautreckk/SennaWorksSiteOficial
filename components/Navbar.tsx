"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Serviços", href: "#product" },
  { label: "Cases", href: "#testimonials" },
  { label: "Sobre", href: "#features" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "16px 24px", pointerEvents: "none" }}>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32,
          backgroundColor: "rgba(246,244,240,0.94)", borderRadius: 12, padding: "6px 24px",
          boxShadow: "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          maxWidth: 900, width: "100%", pointerEvents: "auto",
        }}
      >
        <Link href="/" style={{ flexShrink: 0 }}>
          <img src="/logo-sena-dark.svg" alt="Sena" style={{ height: 28 }} />
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.label} href={link.href}
              style={{ fontSize: 14, fontWeight: 500, color: "#1C1C1C", letterSpacing: "-0.4px", padding: "8px 12px", borderRadius: 8, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#pricing"
          className="nav-cta-desktop"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            backgroundColor: "#1C1C1C", color: "#fff", fontSize: 14, fontWeight: 500,
            padding: "10px 20px", borderRadius: 16, letterSpacing: "-0.28px", flexShrink: 0,
            boxShadow: "rgba(255,255,255,0.15) 0px 0px 20px 1.64px inset, rgba(0,0,0,0.13) 0px 50px 30px -2.5px",
            transition: "opacity 0.2s", whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Falar com Especialista
        </Link>

        <a
          href="#contato"
          className="nav-menu-btn"
          style={{ display: "none", alignItems: "center", justifyContent: "center", background: "none", border: "none", color: "#1C1C1C", padding: 8 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </a>
      </motion.nav>
    </div>
  );
}
