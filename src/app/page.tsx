import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import VideoShowcase from "@/components/sections/video-showcase";
import TrustIndicators from "@/components/sections/trust-indicators";
import BenefitsSection from "@/components/sections/benefits";
import Results from "@/components/sections/results";
import ProjectsGallery from "@/components/sections/projects-gallery";
import WhyPartner from "@/components/sections/why-partner";
import TeamSection from "@/components/sections/team";
import ClientsSection from "@/components/sections/clients";
import Testimonials from "@/components/sections/testimonials";
import Faq from "@/components/sections/faq";
import CtaBanner from "@/components/sections/cta-banner";
import OfficeContact from "@/components/sections/office-contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main className="w-full">
        <HeroSection />
        <VideoShowcase />
        <TrustIndicators />
        <BenefitsSection />
        <Results />
        <ProjectsGallery />
        <WhyPartner />
        <TeamSection />
        <ClientsSection />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <OfficeContact />
      </main>
      <Footer />
    </div>
  );
}