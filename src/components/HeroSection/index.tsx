"use client";
import Image from "next/image";
import Avatar from "../../assets/images/avatar.svg";
import PatternLine from "../../assets/images/pattern-line.svg";
import Logo from "../../assets/images/logo.svg";
import ButtonLink from "../ButtonLink";

export default function HeroSection() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-col items-center justify-center text-center md:flex-row-reverse  md:text-left md:justify-between">
        {/* Mobile picture */}
        <Image
              className="absolute top-0 left-[-16px] z-10"
              src={PatternLine}
              width={141}
              height={133}
              alt="Decorator line"
            />
          <Image
            className="absolute top-[16px] right-[16px] z-50"
            src={Logo}
            width={90}
            height={57}
            alt="Logo"
          />
        <div className="md:hidden flex w-full z-30 relative justify-center ">
          <Image
            className="z-10 pt-28"
            src={Avatar}
            alt="Avatar"
            width={224}
            height={239}
          />
          <div></div>
        </div>
        {/* Tablette picture */}
        <div className="max-md:hidden xl:hidden z-30 relative right-[-2rem]">
          <Image
            className="z-10 pr-4"
            src={Avatar}
            alt="Avatar"
            width={322}
            height={600}
          ></Image>
        </div>
        {/* Desktop Picture */}
        <div className="max-xl:hidden h-full z-30 relative">
          <Image
            className="z-10 pt-28"
            src={Avatar}
            alt="Avatar"
            width={445}
            height={720}
          ></Image>
        </div>
        <div className="md:w-3/5 md:pt-16 z-50">
          <h1 className="md:w-[120%] relative">
            <br />
            <span className="underline decoration-[#4EE1A0] decoration-accent underline-offset-8">
              Stéphanie&nbsp;Z
            </span>
            .
          </h1>
            <p>
              Recherche un stage de graphiste ou monteur vidéo pour juillet 2025.
            </p>
          <p className="pb-8 "></p>
          <p>
          Étudiante en deuxième année de BUT MMI à l&apos;IUT de la Sorbonne Paris Nord, je suis passionnée par la création numérique.
          J'ai réalisé plusieurs projets de graphisme et de montage vidéo que je vous invite à découvrir sur ce site.
          </p>
          <p className="pb-8 md:pb-16"></p>
          <ButtonLink href="https://www.linkedin.com/in/stephanie-zwingelstein-790146295/">ME CONTACTER</ButtonLink>
        </div>
      </div>
      <p className="pb-20"></p>
    </div>
  );
}
