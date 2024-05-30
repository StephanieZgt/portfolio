import Image from "next/image";
import LinkedinIcon from '@/assets/images/icon-linkedin.svg';
import { ReactElement } from "react";


const SocialLinks = (): ReactElement => {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full pt-[20px] md:pt-[29px] l:pt-[40px] pb-8 z-50">
            <p className="text-center font-bold">stéphaniezwingelstein</p>
            <p className='p-3 md:p-0'></p>
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/stephanie-zwingelstein-790146295/" target="_blank" rel="noopener noreferrer">
                <Image src={LinkedinIcon} alt="Linkedin" width={20} height={20} />
                </a>
            </div>
        </div>
    )
}

export default SocialLinks;