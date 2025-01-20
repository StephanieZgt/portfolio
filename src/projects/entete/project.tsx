"use client";

import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import img0 from "@/projects/entete/images/0.png";
import img3 from "@/projects/entete/images/3.png";
import img4 from "@/projects/entete/images/4.png";
import img5 from "@/projects/entete/images/5.png";
import img6 from "@/projects/entete/images/6.png";
import img7 from "@/projects/entete/images/7.png";
import img8 from "@/projects/entete/images/8.png";
import img9 from "@/projects/entete/images/9.png";
import img10 from "@/projects/entete/images/10.png";
import img11 from "@/projects/entete/images/11.png";
import style from "@/projects/entete/project.module.css";


export default function ProjectMag2(){
    return (
        <section className={`${style.project} pt-20`}>
            <div className={style.slider}>
                <div className={style.list}>
                    <div className={`${style.item}`} style={{ "--position": 1 } as React.CSSProperties}><Image className="w-full" src={img0} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 2 } as React.CSSProperties}><Image className="w-full" src={img3} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 3 } as React.CSSProperties}><Image className="w-full" src={img4} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 4 } as React.CSSProperties}><Image className="w-full" src={img5} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 5 } as React.CSSProperties}><Image className="w-full" src={img6} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 6 } as React.CSSProperties}><Image className="w-full" src={img7} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 7 } as React.CSSProperties}><Image className="w-full" src={img8} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 8 } as React.CSSProperties}><Image className="w-full" src={img9} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 9 } as React.CSSProperties}><Image className="w-full" src={img10} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 10 } as React.CSSProperties}><Image className="w-full" src={img11} alt="image"/></div>
                </div>
            </div>
            <h3>En tête</h3>
            <br />
            <p>Travail sur la mise en page d’un magazine existant en respectant son thème initial et son sujet, tout en concevant trois gabarits distincts.</p>
            <p>Ce projet inclus la réalisation d’un PDF interactif intégrant divers éléments tels qu’une vidéo, un sommaire, un carrousel, ainsi qu’une navigation optimisée entre les pages.</p>
            <br />
            <ButtonLink href="https://indd.adobe.com/view/cc6f412c-36d5-471e-a82d-7fcdcf456218.">PDF INTERRACTIF</ButtonLink>
        </section>
    )
}