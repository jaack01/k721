import React, { useState } from 'react'

const ServiceCard = ({ service }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div
            className='lg:w-1/2 w-full group transition-all duration-300 relative rounded-lg lg:rounded-none lg:hover:rounded-[70px] overflow-hidden h-full min-h-[250px] md:min-h-[300px]'
            onClick={() => setIsActive(!isActive)}
            onTouchStart={() => setIsActive(!isActive)}
        >
            <img
                className='h-full w-full object-cover'
                src={service.image}
                alt={service.title}
                loading="lazy"
            />
            <div className={`${isActive ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 absolute top-0 flex flex-col items-center justify-center left-0 h-full w-full bg-black/70 lg:bg-black/60`}>
                <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-[font2] text-white text-center px-6 lg:px-8 mb-3 lg:mb-4'>
                    {service.title}
                </h2>
                <p className='text-white font-[font1] text-sm md:text-base lg:text-lg text-center px-6 lg:px-8 max-w-md'>
                    {service.description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
