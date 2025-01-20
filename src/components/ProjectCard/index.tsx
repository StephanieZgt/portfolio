"use client";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  images: StaticImageData[];
  // link: string;
  stack: string;
  title: string;
};

export default function ProjectCard({
  images,
  // link,
  stack,
  title,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col p-4 height-[100px]">
      <div className="flex snap-x snap-mandatory overflow-scroll no-scrollbar">
{images.map((image, index) => (
  <Image
    key={index}
    src={image}
    alt={`${title} image ${index + 1}`}
    layout={"responsive"}
    objectFit={"contain"}
    height={100}
    className="snap-center shrink-0 w-full"
  />
))}
</div>
      
      <div className="mt-4">
        <h3 className="text-lg font-bold">{title.toUpperCase()}</h3>
        <p className="text-sm text-gray-500">{stack.toLocaleUpperCase()}</p>
      </div>
      <div className="flex space-x-7 mt-4 xl:hidden">
      </div>
    </div>
  );
}
