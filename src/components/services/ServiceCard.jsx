import React from 'react'

const ServiceCard = ({ service }) => {
    return (
        <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={service.image} alt={service.title} />
            <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex flex-col items-center justify-center left-0 h-full w-full bg-black/60'>
                <h2 className='uppercase lg:text-5xl text-4xl font-[font2] text-white text-center px-8 mb-4'>
                    {service.title}
                </h2>
                <p className='text-white font-[font1] text-lg text-center px-8 max-w-md'>
                    {service.description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
