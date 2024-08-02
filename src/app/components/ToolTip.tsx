'use client'
import { useState } from 'react'

const Tooltip = ({children, text} : any) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <div className='relative flex items-center'>
            <div className='relative -z-[999] md:z-10'
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            >
                {children}
            </div>
            {showTooltip && (
             <div className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-lg transform -translate-x-1/2 left-1/2">
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                {text}
              </div>
            )}
        </div>
    )
}

export default Tooltip