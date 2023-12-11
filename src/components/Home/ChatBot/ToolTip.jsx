import { useState } from 'react'
import '@/app/globals.css'

const ToolTip = ({text, children}) => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="tooltip-container absolute left-full" onMouseEnter = {()=> setIsVisible(true)}
        onMouseLeave={()=> setIsVisible(false)}>
            {children}
            {isVisible && <div className="tooltip w-[200px] bg-[#33b3a6] 
            rounded-b-lg p-[0.5rem] text-black rounded-l-lg h-auto ring-2 ring-[#d141e1]  absolute right-2 z-50 font-bold">{text}</div>}
        </div>
    );
};

export default ToolTip;
