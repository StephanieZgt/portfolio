"use client";

import Image from "next/image";
import img0 from "@/projects/villeparisis/images/0.webp";
import img1 from "@/projects/villeparisis/images/1.webp";
import img2 from "@/projects/villeparisis/images/2.webp";
import style from "@/projects/villeparisis/project.module.css";
import ai from "@/assets/images/logiciels/LogoAI.webp";
import id from "@/assets/images/logiciels/LogoID.webp";


export default function ProjectVilleparisis(){
    return (
        <section className={`${style.project} pt-20`}>
            <div className={`${style.slider} mb-5`}>
                <div className={style.list}>
                    <div className={`${style.item}`} style={{ "--position": 1 } as React.CSSProperties}><Image src={img0} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 2 } as React.CSSProperties}><Image src={img1} alt="image"/></div>
                    <div className={`${style.item}`} style={{ "--position": 3 } as React.CSSProperties}><Image src={img2} alt="image"/></div>
                </div>
            </div>
            <h3>Description</h3>
            <br />
            <p>Ce projet inclut des affiches et des coupons d&apos;invitation, dont l&apos;un n&apos;a pas été finalisé, réalisés lors de mon stage à Villeparisis. Ce stage m&apos;a permis d&apos;apprendre énormément grâce à l&apos;accompagnement de deux autres graphistes. Leurs conseils, astuces et feedbacks ont été très précieux pour améliorer mes compétences.
Ce stage m&apos;a également permis d&apos;apprendre à utiliser différents outils de la suite Adobe simultanément, ce que je n&apos;avais pas fait lors de ma première année. J&apos;ai aussi beaucoup appris sur moi-même, en découvrant comment mieux me comprendre pour trouver les meilleures façons de m&apos;inspirer et de retrouver ma motivation.
</p>
            <br />
            <h3 className="mb-5">Logiciels</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                <div><Image height={50} src={ai} alt="Adobe Ilustrator"></Image></div>
                <div><Image height={50} src={id} alt="InDesign"></Image></div>
            </div>
            <div className="mb-9"></div>
        </section>
    )
}