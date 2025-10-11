import React, { useState } from 'react'

const ProjectCard = (props) => {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <>
            <div
                className='lg:w-1/2 w-full group transition-all duration-300 relative rounded-lg lg:rounded-none lg:hover:rounded-[70px] overflow-hidden h-full min-h-[250px] md:min-h-[300px]'
                onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
                onTouchStart={() => setActiveCard(activeCard === 1 ? null : 1)}
            >
                <img
                    className='h-full w-full object-cover'
                    src={props.image1}
                    alt="Project showcase"
                    loading="lazy"
                />
                <div className={`${activeCard === 1 ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/40 lg:bg-black/15`}>
                    <h2 className='uppercase text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 lg:border-4 pt-2 lg:pt-4 px-4 lg:px-8 text-white border-white rounded-full'>Voir le projet</h2>
                </div>
            </div>
            <div
                className='lg:w-1/2 w-full group transition-all duration-300 relative rounded-lg lg:rounded-none lg:hover:rounded-[70px] overflow-hidden h-full min-h-[250px] md:min-h-[300px]'
                onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
                onTouchStart={() => setActiveCard(activeCard === 2 ? null : 2)}
            >
                <img
                    className='h-full w-full object-cover'
                    src={props.image2}
                    alt="Project showcase"
                    loading="lazy"
                />
                <div className={`${activeCard === 2 ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/40 lg:bg-black/15`}>
                    <h2 className='uppercase text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 lg:border-4 pt-2 lg:pt-4 px-4 lg:px-8 text-white border-white rounded-full'>Voir le projet</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
