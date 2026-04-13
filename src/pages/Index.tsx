import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhySection from "@/components/WhySection";
import TeamSection from "@/components/TeamSection";
import CTASection, { Footer } from "@/components/CTASection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <WhySection />
    <TeamSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
