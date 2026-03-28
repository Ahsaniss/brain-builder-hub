import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import TeamSection from "@/components/TeamSection";
import NGOSection from "@/components/NGOSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <CoursesSection />
    <TeamSection />
    <NGOSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
