"use client";
import Link from "next/link";

const footerLinks = {
  "Serviços": [{ label: "Sites & Landing Pages", href: "#product" }, { label: "Sistemas com IA", href: "#product" }, { label: "Tráfego Pago", href: "#product" }, { label: "IA para WhatsApp", href: "#product" }],
  Empresa: [{ label: "Sobre", href: "#features" }, { label: "Cases", href: "#testimonials" }, { label: "Contato", href: "#contact" }],
  Legal: [{ label: "FAQ", href: "#faq" }, { label: "Política de Privacidade", href: "#" }, { label: "Termos de Uso", href: "#" }],
};

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <a href="#" style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "background-color 0.2s" }}
    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.15)")}
    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)")}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C1C1C", color: "#fff", padding: "80px 40px 20px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }} className="footer-grid">
          <div>
            <Link href="/" style={{ display: "block", marginBottom: 12 }}><img src="/logo-sena.svg" alt="Sena" style={{ height: 24 }} /></Link>
            <p style={{ fontSize: 14, color: "rgba(246,246,246,0.6)", lineHeight: 1.65, maxWidth: 280 }}>Agência digital especializada em sites, sistemas com IA, tráfego pago e automação para WhatsApp. Resultados reais para o seu negócio.</p>
            {/* Social icons — desabilitados por enquanto */}
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 16, letterSpacing: "-0.2px" }}>{heading}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <Link key={link.label} href={link.href} style={{ fontSize: 14, color: "#969696", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#969696")}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: 13, color: "rgba(246,246,246,0.6)" }}>
            &copy; 2026 Sena Works. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
