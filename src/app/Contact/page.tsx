import { CiFacebook,CiTwitter  } from "react-icons/ci";
import { IoLogoGithub,IoLogoLinkedin  } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

import ToolTip from "../components/ToolTip";

export default function Contact(){
    return (
        <div className="wrapper">
            <div className='md:pt-[50px] pt-[50px]'>
                <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-3">Contact </h1>
                <p>Terhubunglah Denganku : </p>
            </div>
            <div className="flex flex-row mt-[2em] items-center mb-[1em] gap-3">
            <p>Social Media: </p>
                <ToolTip text="facebook">
                <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                    <a href="https://www.facebook.com/giri.diwa.1/" className="hover:text-blue-500"><CiFacebook className="w-6 h-6"/></a>
                </div>
                </ToolTip>
                <ToolTip text="Twitter">
                <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                    <a href="https://x.com/giri_diwa" className="hover:text-cyan-500"><CiTwitter  className="w-6 h-6"/></a>
                </div>
                </ToolTip>
                <ToolTip text="Github">
                <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                    <a href="https://github.com/Giridiwa319" className="hover:text-slate-500"><IoLogoGithub  className="w-6 h-6"/></a>
                </div>
                </ToolTip>
                <ToolTip text="Linkedin">
                <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                    <a href="https://www.linkedin.com/in/giri-diwa-adam/" className="hover:text-blue-500"><IoLogoLinkedin  className="w-6 h-6"/></a>
                </div>
                </ToolTip>
            </div>
            <div className="pt-[20px] pb-[20px]">
                <p className="font-semibold text-[18px] font-body mb-[20px]">Atau Bisa Lewat :</p>
                <div className="flex flex-wrap items-center mt-[8px] mb-[10px] gap-3">
                    <div className="rounded border border-border py-3 px-3 flex items-center gap-3">
                        <SiGmail /> giriadam67@gmail.com
                    </div>
                   
                </div>
            </div>

        </div>
    )
}
