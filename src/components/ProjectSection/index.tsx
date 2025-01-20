

/* image */

import ProjectMag2 from "@/projects/entete/project";
import ProjectVilleparisis from "@/projects/villeparisis/project";

export default function ProjectSection() {
  return (
    <section className="pt-16">
        <ProjectMag2 />
        <hr className="w-full text-white" />
        <ProjectVilleparisis />
    </section>
  );
}
