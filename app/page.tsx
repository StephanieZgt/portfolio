import HeroSection from "@/components/HeroSection";
import "./globals.css";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
export default function Home() {
  return (
    <main>
      <div className="px-4 md:px-8 xl:px-32 relative">
        <HeroSection />
        <hr className="w-full text-white" />
        <SkillsSection />
        <hr className="w-full text-white" />
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}
