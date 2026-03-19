"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "(47) 92002-0811",
    href: "https://wa.me/5547920020811",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-mail",
    value: "contato@senaworks.com",
    href: "mailto:contato@senaworks.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Site",
    value: "senaworks.com",
    href: "https://senaworks.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", ideia: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim() || !form.ideia.trim()) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro");
      setStatus("sent");
      setForm({ nome: "", whatsapp: "", ideia: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px", borderRadius: 12,
    border: "1px solid rgba(28,28,28,0.1)", fontSize: 14,
    fontFamily: "inherit", outline: "none", backgroundColor: "#fff",
    color: "#1C1C1C", transition: "border-color 0.2s",
  };

  return (
    <section id="contato" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div variants={fadeInUp}><SectionTag>Contato</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>
            Vamos Tirar Seu Projeto do Papel?
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 18, color: "#696969", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Preencha o formulário ou entre em contato diretamente. Respondemos em até 2 horas.
          </motion.p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="contact-grid">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOptions} transition={{ duration: 0.5 }}>
            <div style={{ backgroundColor: "#F6F4F0", borderRadius: 24, padding: 32, boxShadow: CARD_SHADOW }}>
              {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "rgba(221,12,41,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#DD0C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1C1C1C", marginBottom: 8 }}>Mensagem Enviada!</h3>
                  <p style={{ fontSize: 14, color: "#696969", lineHeight: 1.6 }}>Nosso time vai entrar em contato com você em breve pelo WhatsApp.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      marginTop: 24, padding: "12px 24px", borderRadius: 12,
                      backgroundColor: "#1C1C1C", color: "#fff", border: "none",
                      fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
                    }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: "#1C1C1C", marginBottom: 6, display: "block" }}>Seu nome</label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Como podemos te chamar?"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#DD0C29")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28,28,28,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: "#1C1C1C", marginBottom: 6, display: "block" }}>WhatsApp</label>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="(47) 92002-0811"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#DD0C29")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28,28,28,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: "#1C1C1C", marginBottom: 6, display: "block" }}>Conte sua ideia</label>
                    <textarea
                      value={form.ideia}
                      onChange={(e) => setForm({ ...form, ideia: e.target.value })}
                      placeholder="Ex: Preciso de um site para minha loja de roupas com integração de pagamento..."
                      required
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#DD0C29")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28,28,28,0.1)")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      width: "100%", padding: "16px", borderRadius: 16,
                      backgroundColor: "#DD0C29", color: "#fff", border: "none",
                      fontSize: 16, fontWeight: 600, cursor: status === "sending" ? "wait" : "pointer",
                      fontFamily: "inherit", letterSpacing: "-0.3px",
                      boxShadow: "rgba(255,255,255,0.2) 0px 0px 20px 1.64px inset, rgba(221,12,41,0.3) 0px 20px 40px -10px",
                      transition: "opacity 0.2s, transform 0.2s",
                      opacity: status === "sending" ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                  {status === "error" && (
                    <p style={{ fontSize: 13, color: "#DD0C29", textAlign: "center" }}>Erro ao enviar. Tente novamente.</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOptions} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#F6F4F0", borderRadius: 16, padding: "24px 28px",
                    boxShadow: CARD_SHADOW, display: "flex", alignItems: "center", gap: 16,
                    transition: "transform 0.2s, box-shadow 0.2s", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    backgroundColor: "rgba(221,12,41,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#969696", marginBottom: 2, fontWeight: 500 }}>{info.label}</div>
                    <div style={{ fontSize: 16, color: "#1C1C1C", fontWeight: 600, letterSpacing: "-0.3px" }}>{info.value}</div>
                  </div>
                </a>
              ))}

              {/* Map / Extra CTA */}
              <div style={{
                flex: 1, backgroundColor: "#1C1C1C", borderRadius: 16, padding: 32,
                display: "flex", flexDirection: "column", justifyContent: "center",
                minHeight: 160,
              }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>Resposta rápida</div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: "#fff", letterSpacing: "-0.4px", marginBottom: 8, lineHeight: 1.2 }}>
                  Prefere conversar agora?
                </h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 20 }}>
                  Nosso time responde em minutos pelo WhatsApp.
                </p>
                <a
                  href="https://wa.me/5547920020811"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    backgroundColor: "#25D366", color: "#fff", fontSize: 14, fontWeight: 600,
                    padding: "12px 20px", borderRadius: 12, width: "fit-content",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}