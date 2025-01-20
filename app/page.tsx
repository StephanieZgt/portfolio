import HeroSection from "@/components/HeroSection";
import "./globals.css";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import ProjectMag2 from "@/projects/entete/project";
import SkillsSection from "@/components/SkillsSection";
import ProjectVilleparisis from "@/projects/villeparisis/project";
export default function Home() {
  return (
    <main>
      <div className="px-4 md:px-8 xl:px-32 relative">
        <HeroSection />
        <hr className="w-full text-white" />
        <SkillsSection />
        {/* <hr className="w-full text-white" />
        <ProjectSection /> */}
        <hr className="w-full text-white" />
        <ProjectMag2 />
        <hr className="w-full text-white" />
        <ProjectVilleparisis />
      </div>
      <Footer />
    </main>
  );
}
