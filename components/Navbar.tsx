"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Serviços", href: "#product" },
  { label: "Cases", href: "#testimonials" },
  { label: "Sobre", href: "#features" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-menu-btn"
            aria-label="Abrir menu"
            style={{ display: "none", alignItems: "center", justifyContent: "center", background: "none", border: "none", color: "#1C1C1C", padding: 8, cursor: "pointer" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 45,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 55,
                width: "min(320px, 85vw)",
                backgroundColor: "rgba(246,244,240,0.98)",
                backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                display: "flex", flexDirection: "column",
                padding: "80px 32px 32px",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
                style={{
                  position: "absolute", top: 24, right: 24,
                  background: "none", border: "none", color: "#1C1C1C",
                  cursor: "pointer", padding: 8,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>

              <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontSize: 18, fontWeight: 500, color: "#1C1C1C",
                      letterSpacing: "-0.4px", padding: "12px 16px",
                      borderRadius: 10, transition: "background-color 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.05)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div style={{ marginTop: "auto" }}>
                <Link
                  href="#pricing"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: "#1C1C1C", color: "#fff", fontSize: 16, fontWeight: 500,
                    padding: "14px 24px", borderRadius: 16, letterSpacing: "-0.28px",
                    boxShadow: "rgba(255,255,255,0.15) 0px 0px 20px 1.64px inset, rgba(0,0,0,0.13) 0px 50px 30px -2.5px",
                    textDecoration: "none", width: "100%",
                  }}
                >
                  Falar com Especialista
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
