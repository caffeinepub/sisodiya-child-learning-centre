import AboutSection from "@/components/AboutSection";
import AdmissionSection from "@/components/AdmissionSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <AdmissionSection />
      <ContactSection />
    </>
  );
}
