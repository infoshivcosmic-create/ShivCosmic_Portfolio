import Header from "@/components/Header";
import FloatingDock from "@/components/FloatingDock";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import dynamic from "next/dynamic";

// Lazy load below-fold sections for better performance
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const AstroMappingSection = dynamic(() => import("@/components/sections/AstroMappingSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const BenefitsSection = dynamic(() => import("@/components/sections/BenefitsSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const MediaSection = dynamic(() => import("@/components/sections/MediaSection"), {
  loading: () => <div className="min-h-[40vh]" />,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  loading: () => <div className="min-h-[30vh]" />,
});
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[20vh]" />,
});

export default function Home() {
  return (
    <main className="relative bg-[var(--background)]">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Navigation */}
      <Header />
      <FloatingDock />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <AstroMappingSection />
      <ServicesSection />
      <BenefitsSection />
      <MediaSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

