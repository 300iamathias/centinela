import { Navbar } from "@/components/security/navbar";
import { HeroSection } from "@/components/security/hero-section";
import { TrustBar } from "@/components/security/trust-bar";
import { EmergencyStrip } from "@/components/security/emergency-strip";
import { ServicesSection } from "@/components/security/services-section";
import { ProcessSection } from "@/components/security/process-section";
import { SectorsSection } from "@/components/security/sectors-section";
import { WhyUsSection } from "@/components/security/why-us-section";
import { GallerySection } from "@/components/security/gallery-section";
import { ClientsSection } from "@/components/security/clients-section";
import { TestimonialsSection } from "@/components/security/testimonials-section";
import { FaqSection } from "@/components/security/faq-section";
import { QuoteSection } from "@/components/security/quote-section";
import { MapSection } from "@/components/security/map-section";
import { CtaSection } from "@/components/security/cta-section";
import { Footer } from "@/components/security/footer";
import { MobileCtaBar, WhatsAppButton } from "@/components/security/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-[68px] md:pb-0">
        <HeroSection />
        <TrustBar />
        <EmergencyStrip />
        <ServicesSection />
        <ProcessSection />
        <SectorsSection />
        <WhyUsSection />
        <GallerySection />
        <ClientsSection />
        <TestimonialsSection />
        <FaqSection />
        <QuoteSection />
        <MapSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </div>
  );
}
