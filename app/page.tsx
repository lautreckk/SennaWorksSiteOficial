import Navbar from "@/components/Navbar";
import HeroFuturistic from "@/components/HeroFuturistic";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Comparison from "@/components/Comparison";
import Integrations from "@/components/Integrations";
import AppSection from "@/components/AppSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroFuturistic />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <Problem />
        <Product />
        <Features />
        <Demo />
        <Comparison />
        <Integrations />
        <AppSection />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </div>
      <Footer />
      <FloatingChat />
    </>
  );
}