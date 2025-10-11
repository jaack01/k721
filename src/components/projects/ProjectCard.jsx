import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link
            to={`/projects/${project.slug}`}
            className='w-full group transition-all duration-300 relative rounded-lg lg:rounded-none lg:hover:rounded-[70px] overflow-hidden h-full block'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(!isHovered)}
        >
            <img
                className='h-full w-full object-cover'
                src={project.featuredImage}
                alt={project.title}
                loading="lazy"
            />
            <div className={`${isHovered ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 h-full w-full bg-black/50 flex flex-col items-center justify-center p-6 text-center`}>
                <div className='mb-3'>
                    <span className='text-white/80 text-sm md:text-base uppercase tracking-wider'>{project.category}</span>
                </div>
                <h2 className='uppercase text-3xl md:text-4xl lg:text-5xl font-[font1] text-white mb-2'>{project.title}</h2>
                <p className='text-white/90 text-sm md:text-base max-w-md mb-4'>{project.shortDescription}</p>
                <div className='uppercase text-base md:text-xl font-[font1] border-2 pt-2 px-6 text-white border-white rounded-full'>
                    Voir le projet
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
