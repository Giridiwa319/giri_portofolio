import { SiLaravel, SiPostgresql,SiBootstrap,SiNextdotjs    } from "react-icons/si";
import ToolTip from "../components/ToolTip";

export default function Projects(){
    return(
        <div className="wrapper">
            <div className="md:pt-[50px] pt-[50px]">
                <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-5">Projects </h1>
                <p className="text-[16px] font-normal pb-[20px]">Beberapa Proyek Yang pernah saya Kerjakan :</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    <div className="rounded-md hover:shadow-md border border-slate-200 cursor-pointer">
                        <img src="https://ik.imagekit.io/ez2pfjbvj/Inspector.png?updatedAt=1718876819593" alt="Inspector"/>
                        <div className="py-2 px-2">
                            <h3 className="text-[16px] font-semibold font-body capitalize">inspector</h3>
                            <p className="text-[12px] font-normal font-body">Pengembangan Aplikasi Inspector Kementrian ESDM</p>
                        </div>
                        <ul className="flex flex-wrap gap-4 ml-2 relative -z-[999]">
                            <ToolTip text="Laravel">
                                <li className="text-2xl cursor-pointer focus:rotate-90"><SiLaravel className="text-red-600 hover:text-red-800 dark:text-white dark:hover:text-red-800  w-5 h-5"/></li>
                            </ToolTip>
                            <ToolTip text="Postgre SQL">
                                <li className="text-2xl cursor-pointer focus:rotate-90"><SiPostgresql className="text-blue-800 hover:text-blue-800 dark:text-white dark:hover:text-blue-800 w-5 h-5 "/></li>
                            </ToolTip>
                            <ToolTip text="Bootstrap CSS">
                                <li className="text-2xl cursor-pointer focus:rotate-90"><SiBootstrap className="text-violet-800 hover:text-violet-800 dark:text-white dark:hover:text-violet-800 w-5 h-5"/></li>
                            </ToolTip>
                        </ul>
                        <div className="py-2 px-2">
                            <a href="https://inspector-app.xyz" className="text-[12px] font-body font-medium">Show More </a>
                        </div>
                    </div>
                    <div className="rounded-md hover:shadow-md border border-slate-200 cursor-pointer">
                        <img src="https://ik.imagekit.io/ez2pfjbvj/Siswasnaker_1.png?updatedAt=1722417220978" alt="Inspector"/>
                        <div className="py-2 px-2">
                            <h3 className="text-[16px] font-semibold font-body capitalize">siswasnaker</h3>
                            <p className="text-[12px] font-normal font-body">Pengembangan Aplikasi Siswasnaker Kementrian Ketenagakerjaan</p>
                        </div>
                        <ul className="flex flex-wrap gap-4 ml-2 relative -z-[999]">
                            <ToolTip text="Laravel">
                                <li className="text-2xl cursor-pointer focus:rotate-90"><SiLaravel className="text-red-600 hover:text-red-800 dark:text-white dark:hover:text-red-800  w-5 h-5"/></li>
                            </ToolTip>
                            <ToolTip text="Postgre SQL">
                                <li className="text-2xl cursor-pointer focus:rotate-90"><SiPostgresql className="text-blue-800 hover:text-blue-800 dark:text-white dark:hover:text-blue-800 w-5 h-5 "/></li>
                            </ToolTip>
                            <ToolTip text="Bootstrap CSS">
                                <li className="text-2xl cursor-pointer focus:rotate-90"><SiBootstrap className="text-violet-800 hover:text-violet-800 dark:text-white dark:hover:text-violet-800 w-5 h-5"/></li>
                            </ToolTip>
                            <ToolTip text="Next JS">
                                <li className="text-2xl cursor-pointer focus:rotate-90"><SiNextdotjs  className="text-slate-800 hover:text-slate-800 dark:text-white dark:hover:text-slate-300 w-5 h-5"/></li>
                            </ToolTip>
                        </ul>
                        <div className="py-2 px-2">
                            <a href="https://siswasnaker.adhyamitra.com/" className="text-[12px] font-body font-medium disabled:text-slate-50">Show More </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}