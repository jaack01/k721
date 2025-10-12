import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] w-full px-4 pb-8 lg:pb-0'>
      <p className='hidden md:block absolute lg:w-[17vw] w-64 lg:right-20 right-4 bottom-28 lg:bottom-72 font-[font1] lg:text-lg text-sm lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l'étincelle pour générer de l'émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2'>
        <Link
          to='/projects'
          className='w-full md:w-auto lg:border-3 border-2 hover:border-[#D3FD50] active:border-[#D3FD50] hover:text-[#D3FD50] active:text-[#D3FD50] transition-colors duration-300 h-20 md:h-28 lg:h-44 flex items-center justify-center px-6 md:px-8 lg:px-14 border-white rounded-full uppercase touch-manipulation'
        >
          <span className='text-5xl md:text-[5vw] lg:text-[6vw] lg:mt-6'>Projects</span>
        </Link>
        <Link
          to='/agency'
          className='w-full md:w-auto lg:border-3 border-2 hover:border-[#D3FD50] active:border-[#D3FD50] hover:text-[#D3FD50] active:text-[#D3FD50] transition-colors duration-300 h-20 md:h-28 lg:h-44 flex items-center justify-center px-6 md:px-8 lg:px-14 border-white rounded-full uppercase touch-manipulation'
        >
          <span className='text-5xl md:text-[5vw] lg:text-[6vw] lg:mt-6'>agency</span>
        </Link>
      </div>
    </div>
  )
}

export default HomeBottomText
