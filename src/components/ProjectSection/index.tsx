import ProjectCard from "../ProjectCard";
import Project1 from "../../assets/images/candesign1.png";
import Project3 from "../../assets/images/can1.png";
import Project4 from "../../assets/images/can2.png";
import Project5 from "../../assets/images/Poster1.png";
import Project6 from "../../assets/images/Poster2.gif";
import Project7 from "../../assets/images/AfficheConcert.png";
import Project13 from "../../assets/images/Table3d.png";
import Project14 from "../../assets/images/dresser3d.png";
import Project15 from "../../assets/images/tasse3d.png";
import Project16 from "../../assets/images/video.gif";
import Project17 from "../../assets/images/reprod.png";
import Project18 from "../../assets/images/games.png";
import Project19 from "../../assets/images/Old you.png";
import ButtonLink from "../ButtonLink";

/* image */

export default function ProjectSection() {
  return (
    <section className="pt-20">
      <div className="flex flex-row justify-between w-full items-center pb-4 md:pb-8">
        <h1 className="w-fit">Projets</h1>
        <ButtonLink href="#contact">ME CONTACTER</ButtonLink>
      </div><br />
      <h2 className="w-fit">Graphisme</h2><br /><br />
      <h3 className="w-fit">Canettes </h3><br /> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard
          title="can design 1"
          stack="Photoshop/illustrator"
          image={Project1}
        />
        <ProjectCard
          title="can 1"
          stack="Photoshop"
          image={Project3}
        />
        <ProjectCard
          title="can 2"
          stack="Photoshop"
          image={Project4}
        />
      </div>
      <br /><br /><br /><br />
    <h3 className="w-fit">Affiches </h3><br /> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProjectCard
          title="affiche Cloone"
          stack="Photoshop"
          image={Project5}
        />
        <ProjectCard
          title="gif cloone"
          stack="Photoshop"
          image={Project6}
        />
        <ProjectCard
          title="Affiche Concert"
          stack="Indesign"
          image={Project7}
        />
        </div>
        <br /><br /><br /><br />
        <h3 className="w-fit">Modélisation 3D</h3><br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
          title="Table Jardin"
          stack="Blender"
          image={Project13}
        />
        <ProjectCard
          title="Dresser"
          stack="Blender"
          image={Project14}
        />
        <ProjectCard
          title="Tasse"
          stack="Blender"
          image={Project15}
        />
        </div>
        <br /><br /><br /><br />
        <h3 className="w-fit">Autres Projets</h3><br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard
          title="Dessin"
          stack=""
          image={Project17}
        />
        <ProjectCard
          title="Création jeu vidéo"
          stack=""
          image={Project18}
        />
        <ProjectCard
          title="Musique"
          stack=""
          image={Project19}
        />
        </div>
      <p className="pb-20"></p>
    </section>
  );
}
