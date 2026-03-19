"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

const CARD_SHADOW = "0px 0.602px 0.602px rgba(28,28,28,0.01), 0px 2.289px 2.289px rgba(28,28,28,0.03), 0px 10px 10px rgba(28,28,28,0.12), 0px -6px 6px -5px #fff";
const SectionTag = ({ children }: { children: string }) => (
  <div style={{ display: "inline-flex", backgroundColor: "#F6F4F0", borderRadius: 27, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: "#1C1C1C", marginBottom: 16, border: "1px solid rgba(28,28,28,0.06)" }}>{children}</div>
);

const faqs = [
  { q: "Quanto tempo leva para criar meu site?", a: "Depende do projeto. Uma landing page fica pronta em 5 a 7 dias úteis. Sites completos levam de 2 a 4 semanas. Sistemas mais complexos, de 4 a 8 semanas. Sempre alinhamos prazos antes de começar." },
  { q: "Vocês fazem sites para qualquer tipo de negócio?", a: "Sim. Já atendemos clientes de diversos segmentos: automotivo, ambiental, saúde, educação, varejo e serviços. Adaptamos o design e a estratégia para cada mercado." },
  { q: "Como funciona a IA para WhatsApp?", a: "Configuramos um chatbot inteligente no seu WhatsApp Business que responde perguntas frequentes, qualifica leads, envia catálogos e agenda reuniões automaticamente. Funciona 24 horas por dia, 7 dias por semana." },
  { q: "Preciso já ter redes sociais para contratar tráfego pago?", a: "Não necessariamente. Podemos criar suas contas e perfis do zero. Porém, ter um perfil ativo ajuda nos resultados iniciais. Avaliamos sua situação na consultoria gratuita." },
  { q: "Qual o diferencial da Sena Works?", a: "Entregamos projetos completos: do design ao código, do tráfego à automação. Você não precisa contratar 5 fornecedores diferentes. Temos um processo claro com entregas semanais e comunicação direta pelo WhatsApp." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" style={{ padding: "96px 0", width: "100%", maxWidth: 1080, margin: "0 auto" }}>
      <div className="container">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div variants={fadeInUp}><SectionTag>Dúvidas Frequentes</SectionTag></motion.div>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.2px", lineHeight: 1.1 }}>Perguntas Frequentes</motion.h2>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} variants={fadeInUp} style={{ backgroundColor: "#F6F4F0", borderRadius: 16, overflow: "hidden", boxShadow: CARD_SHADOW }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", border: "none", backgroundColor: "transparent", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#1C1C1C", letterSpacing: "-0.3px" }}>{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: open === i ? "#1C1C1C" : "rgba(28,28,28,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 16 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2V10M2 6H10" stroke={open === i ? "#fff" : "#1C1C1C"} strokeWidth="1.5" strokeLinecap="round"/></svg>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                    <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#696969", lineHeight: 1.65 }}>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
