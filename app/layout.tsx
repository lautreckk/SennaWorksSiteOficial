import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sena Works — Sites, Sistemas e IA Para Seu Negócio",
  description: "Agência digital especializada em sites que vendem, sistemas com IA, tráfego pago e automação para WhatsApp. Transforme seu negócio com a Sena Works.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
