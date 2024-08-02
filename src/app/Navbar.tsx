'use client'
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import { LuAlignJustify } from "react-icons/lu";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div  className="wrapper">
            <nav className="sticky top-0 flex items-center gap-3 justify-between py-3 h-[10vh]">
                <button className="md:hidden inline-flex py-2 px-2 border border-slate-300 rounded-full" onClick={() => setIsOpen(true)}>
                <LuAlignJustify className="w-4 h-4"/></button>
                <a href="/">Giri Diwa Adam</a>
                {/* Drawer Menu */}
                <div className={`z-[999] fixed top-0 left-0 w-64 h-full bg-opacity-20 backdrop-blur-lg dark:bg-dark bg-white shadow-md text-dark transform transition-transform duration-300 ${isOpen ? 'translate-x-0': '-translate-x-full'}`}>
                    <div className="flex justify-between items-center pl-3">
                        <a href="/" className=" font-body font-semibold uppercase dark:text-neutral-50">Giri Diwa Adam</a>
                        <button className="p-4 text-dark dark:text-white" onClick={() => setIsOpen(false)}>
                         X 
                        </button>
                    </div>
                    <nav className="p-4 leading-loose">
                        <ul>
                            <li><a href="/" className="font-body dark:text-neutral-50">Home</a></li>
                            <li><a href="/About" className="font-body dark:text-neutral-50">About</a></li>
                            <li><a href="/Projects" className="font-body dark:text-neutral-50">Project</a></li>
                            <li><a href="#" className="font-body dark:text-neutral-50">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                {/* Drawer Menu */}
                <ul className="hidden md:flex items-center gap-3">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Projects">Project</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
                <ThemeToggle />
            </nav>
        </div>
    )
}

export default Navbar;