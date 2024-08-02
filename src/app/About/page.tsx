import { SiLaravel,SiNextdotjs,SiTailwindcss,SiReact, SiNodedotjs, SiExpress  } from "react-icons/si";
import ToolTip from "../components/ToolTip";
export default function About(){
    return (
        <div className="wrapper mb-[10px]">
            <div className="md:pt-[50px] pt-[50px]">
                <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-3">About Me </h1>
                <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">Halo semuanya, Perkenalkan nama saya Giri Diwa Adam, saya adalah seorang Fullstack Web developer yang berasal dari Kota Tangerang, Banten, tepatnya di Desa Larangan Utara. Awal mula saya menyukai dunia programming adalah ketika saya duduk di bangku sekolah kejuruan, tanpa sengaja saya menemukan sebuah buku tentang programming, disitulah saya mulai tertarik dengan dunia programming.</p>
                <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">Dan akhirnya saya melanjutkan kuliah di Jurusan IT, dan saya pun semakin tertarik untuk mendalami dunia pemrograman. Untuk melanjutkan rasa penasaran saya terhadap dunia pemrograman, saya pun mengambil les bahasa pemrograman untuk memperdalam bahasa pemrograman yang sedang saya pelajari.</p>
                <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">Melalui portofolio ini saya ingin menunjukkan hasil-hasil project yang saya kerjakan sebagai fullstack programmer, semoga dapat menginspirasi teman-teman yang ingin menjadi programmer juga. dan jangan menyerah, teruslah belajar sampai bisa, karena dalam dunia programming tidak ada kata menunggu, mereka akan terus berkembang mengikuti perkembangan jaman.</p>
            </div>
            <hr/>
            <div className="md:pt-[10px] pt-[10px] mb-[20px]">
                <h2 className="mb-[10px] font-semibold ">Techstack Terkini : </h2>
                <div className="flex flex-wrap gap-3 items-center ">
                    <ToolTip text="Laravel" className="hover:cursor-pointer">
                        <SiLaravel className="w-[2rem] h-[2rem] text-red-500 dark:text-red-400"/>
                    </ToolTip>
                    <ToolTip text="Next JS">
                        <SiNextdotjs className="w-[2rem] h-[2rem] text-slate-900 dark:text-slate-200"/>
                    </ToolTip>
                    <ToolTip text="Tailwind CSS">
                        <SiTailwindcss  className="w-[2rem] h-[2rem] text-sky-600"/>
                    </ToolTip>
                    <ToolTip text="React JS">
                        <SiReact  className="w-[2rem] h-[2rem] text-cyan-600"/>
                    </ToolTip>
                    <ToolTip text="Node JS">
                        <SiNodedotjs  className="w-[2rem] h-[2rem] text-green-600"/>
                    </ToolTip>
                    <ToolTip text="Express JS">
                        <SiExpress  className="w-[2rem] h-[2rem] text-gray-400"/>
                    </ToolTip>
                </div>
            </div>
            <hr/>
        </div>
    )
}