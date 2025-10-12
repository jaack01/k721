import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] mt-48 md:mt-56 lg:mt-0 pt-5 px-4 text-center'>
            <div className='text-[11vw] md:text-[10vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[9vw] md:leading-[8.5vw] lg:leading-[8vw]'>
                About us
            </div>
            <div className='text-[11vw] md:text-[10vw] lg:text-[9.5vw] justify-center flex items-start uppercase leading-[9vw] md:leading-[8.5vw] lg:leading-[8vw]'>
                qui
                <div className='h-[9vw] w-[20vw] md:h-[8vw] md:w-[18vw] lg:h-[7vw] lg:w-[16vw] rounded-full -mt-2 md:-mt-2.5 lg:-mt-3 overflow-hidden mx-2'>
                    <Video />
                </div>
                Services
            </div>
            <div className='text-[11vw] md:text-[10vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[9vw] md:leading-[8.5vw] lg:leading-[8vw]'>
                Projects
            </div>
        </div>
    )
}

export default HomeHeroText