import ProjectCard from "../ProjectCard";
import cannette0 from "../../assets/images/candesign1.png";
import cannette1 from "../../assets/images/can1.png";
import cannette2 from "../../assets/images/can2.png";
import poster0 from "../../assets/images/Poster1.png";
import poster1 from "../../assets/images/Poster2.gif";
import poster2 from "../../assets/images/AfficheConcert.png";
import modelise0 from "../../assets/images/Table3d.png";
import modelise1 from "../../assets/images/dresser3d.png";
import modelise2 from "../../assets/images/tasse3d.png";
import modelise3 from "../../assets/images/video.gif";
import dessin from "../../assets/images/reprod.png";
import game from "../../assets/images/games.png";
import sound from "../../assets/images/Old you.png";
import ButtonLink from "../ButtonLink";

/* image */

export default function ProjectSection() {
  return (
    <section className="pt-20">
      <div className="flex flex-row justify-between w-full items-center pb-4 md:pb-8">
        <h1 className="w-fit">Projets</h1>
        <ButtonLink href="#contact">ME CONTACTER</ButtonLink>
      </div><br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


            <ProjectCard
              title="can design 1"
              stack="Photoshop/illustrator"
              images={[cannette0, cannette1, cannette2]}
              
              />



      <ProjectCard
          title="affiche Cloone"
          stack="Photoshop"
          images={[poster0, poster1, poster2]}
        />

 
          <ProjectCard
          title="Table Jardin"
          stack="Blender"
          images={[modelise0, modelise1, modelise2]}
          />


        <ProjectCard
          title="Dessin"
          stack=""
          images={[dessin]}
          />
        <ProjectCard
          title="Création jeu vidéo"
          stack=""
          images={[game]}
          />
        <ProjectCard
          title="Musique"
          stack=""
          images={[sound]}
          />

          </div>
      <p className="pb-20"></p>
    </section>
  );
}
