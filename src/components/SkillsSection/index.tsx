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

  const video: string[] = [
    "Premiere Pro",
    "CapCut",
  ];

  const modeling: string[] = [
    "Blender",
  ];

  const blueprint: string[] = [
    "Figma",
  ];

  const skills: SkillData[] = [
    {
      name: "Graphisme",
      description: graphisme.join(separator),
    },
    {
      name: "Maquettage",
      description: blueprint.join(separator),
    },
    {
      name: "Montage Vidéo",
      description: video.join(separator),
    },
    {
      name: "Modelisation 3D",
      description: modeling.join(separator),
    },
  ];

  return (
    <section className="pt-16">
      <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-28 gap-y-14">
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
