import Skill from "../Skill";

interface SkillData {
  name: string;
  description?: string;
}

export default function SkillsSection() {
  const separator = " | ";
  const graphisme: string[] = [
    "InDesign",
    "Photoshop",
    "Illustrator",
  ];

  const edit: string[] = [
    "Premiere Pro",
    "CapCut",
  ];

  const modeling: string[] = [
    "Blender",
  ];

  const games: string[] = [
    "Unity", 
    "Roblox Studio", 
  ];

  const dev: string[] = [
    "HTML", 
    "CSS", 
    "JS", 
  ];

  const softskills: string[] = [
    "Communication",
    "Créative",
    "Empathie",
  ];

  const skills: SkillData[] = [
    {
      name: "Graphisme",
      description: graphisme.join(separator),
    },
    {
      name: "Montage Vidéo",
      description: edit.join(separator),
    },
    {
      name: "Modélisation 3D",
      description: modeling.join(separator),
    },
    {
      name: "Développement Jeux Vidéo",
      description: games.join(separator),
    },
    {
      name: "Developpement",
      description: dev.join(separator),
    },
    {
      name: "Soft Skills",
      description: softskills.join(separator),
    },
  ];

  return (
    <section className="pt-16">
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-28 gap-y-14">
        {skills.map((skill: SkillData, index: number) => (
          <li key={index} className="basis-full md:basis-1/2">
            <Skill name={skill.name} description={skill.description} />
          </li>
        ))}
      </ul>
      <p className="pb-20"></p>
    </section>
  );
}
