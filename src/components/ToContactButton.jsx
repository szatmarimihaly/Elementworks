import React from 'react'

const ToContactButton = ({ onClick, text }) => {

    return (

    <button 
    className='mt-4 mb-4 relative overflow-hidden rounded-lg px-5 py-2.5
        bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
        text-white font-medium
        border border-zinc-700
        transition-all duration-300 ease-out
        hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-800
        hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
        active:scale-[0.98]
        before:absolute before:inset-0
        before:bg-gradient-to-br before:from-white/10 before:to-transparent
        before:opacity-70 before:hover:opacity-90 flex items-center gap-2 text-md md:text-lg lg:text-xl'
    onClick={onClick}
    >
        {text}<i className="ri-team-line text-xl md:text-xl lg:text-2xl text-white"></i>
    </button>

  )
}

export default ToContactButton