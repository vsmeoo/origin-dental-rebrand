import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorSection from "@/components/DoctorSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ReviewsSection from "@/components/ReviewsSection";
import HygieneSection from "@/components/HygieneSection";
import FAQSection from "@/components/FAQSection";
import LocationCTA from "@/components/LocationCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DoctorSection />
      <TreatmentsSection />
      <ReviewsSection />
      <HygieneSection />
      <FAQSection />
      <LocationCTA />
      <Footer />
    </div>
  );
};

export default Index;
