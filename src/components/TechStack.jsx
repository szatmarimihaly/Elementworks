import React from 'react'
import TechCard from './TechCard'

const TechStack = () => {
  
    const techList = [
        {
            id : 1,
            name : 'Tailwind CSS',
            icon : 'ri-tailwind-css-fill',
            bg : 'bg-zinc-900/80',
            textColor : 'text-white',
            text : 'text-cyan-400',
        },
        
        {
            id : 2,
            name : 'Next.js',
            icon : 'ri-nextjs-fill',
            bg : 'bg-zinc-900/80',
            textColor : 'text-white',
            text : 'text-white',
        },
        {
            id : 3,
            name : 'Javascript',
            icon : 'ri-javascript-fill',
            bg : 'bg-zinc-900/80',
            textColor : 'text-white',
            text : 'text-amber-300',
            
        },
        {
            id : 4,
            name : 'React.js',
            icon : 'ri-reactjs-fill',
            bg : 'bg-zinc-900/80',
            textColor : 'text-white',
            text : 'text-cyan-500',
            
        }
    
    ]
  
    return (
        
        <div className='text-center align-center md:mr-30 md:ml-30 lg:mr-50 lg:ml-50'>
            <div className='grid grid-cols-2 sm:grid-cols:2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10'>
                {techList.map((tech) => (
                    <TechCard key={tech.id} tech={tech} />
                ))}
            </div>
        </div>
        
  )
}

export default TechStack