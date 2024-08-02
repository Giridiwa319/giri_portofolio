"use client"
import { IoMdPaper } from "react-icons/io";
import { motion } from "framer-motion";
import { LinkPreview } from "@/app/components/ui/link-preview";

export default function Last(){
    return(
        <div className="pb-3">
            <div className="flex flex-row gap-3 items-center pb-3">
                <IoMdPaper className="w-4 h-4"/><h2>Project Yang Terkini :</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-md shadow-sm border dark:border-border">
                    <div className="pt-3 pb-3 flex flex-row items-center pl-3">
                        <span className="rounded-full bg-slate-700 border border-slate-700 py-1 px-1"></span> <h1 className="font-semibold pl-3"><LinkPreview url='https://inspector-app.xyz'>Inspector</LinkPreview></h1>
                    </div>
                    <p className="text-[12px] pl-3 pb-3">Pengembangan Aplikasi Inspector Kementrian ESDM</p>
                </div>
                <div className="rounded-md shadow-sm border dark:border-border">
                    <div className="pt-3 pb-3 flex flex-row items-center pl-3">
                        <span className="rounded-full bg-slate-700 border border-slate-700 py-1 px-1"></span> <h1 className="font-semibold pl-3"><LinkPreview url='https://siswasnaker.adhyamitra.com'>Siswasnaker</LinkPreview></h1>
                    </div>
                    <p className="text-[12px] pl-3 pb-3">Pengembangan Aplikasi Sistem Pengawasan Ketenagakerjaan Kementrian Ketenagakerjaan</p>
                </div>
            </div>
        </div>
    )
}

