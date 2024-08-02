'use client'
import { useState, useEffect } from "react";
import { LuMoon, LuSun  } from "react-icons/lu";

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
          } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);
    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
          } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    }
    return(
        <button onClick={toggleTheme}>
            {theme === 'dark' ? <LuSun className="w-5 h-5" strokeWidth={1}/> : <LuMoon className="w-5 h-5" strokeWidth={1}/>}
        </button>
    );
};

export default ThemeToggle;
