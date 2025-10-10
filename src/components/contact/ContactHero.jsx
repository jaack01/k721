import React from 'react'

const ContactHero = () => {
  return (
    <div className='relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-20'>
      <div className='flex-1 flex items-center'>
        <div className='w-full'>
          <div className='overflow-hidden'>
            <h1 className='hero-line font-[font2] text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] uppercase tracking-tight'>
              LET'S
            </h1>
          </div>
          <div className='overflow-hidden'>
            <h1 className='hero-line font-[font2] text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] uppercase tracking-tight'>
              TALK ABOUT
            </h1>
          </div>
          <div className='overflow-hidden'>
            <h1 className='hero-line font-[font2] text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] uppercase tracking-tight'>
              YOUR
            </h1>
          </div>
          <div className='overflow-hidden'>
            <h1 className='hero-line font-[font2] text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] uppercase tracking-tight'>
              PROJECT
            </h1>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-end flex-wrap gap-8'>
        <div className='tagline max-w-xs'>
          <p className='font-[font1] text-sm md:text-base leading-relaxed'>
            In a screen or desktop.
          </p>
          <p className='font-[font1] text-sm md:text-base leading-relaxed'>
            At home. At home.
          </p>
          <p className='font-[font1] text-sm md:text-base leading-relaxed'>
            Everywhere.
          </p>
        </div>

        <div className='tagline text-right'>
          <p className='font-[font1] text-sm md:text-base leading-relaxed'>
            525 Av. Viger O - Suite 400
          </p>
          <p className='font-[font1] text-sm md:text-base leading-relaxed'>
            Montréal, QC H2Z 1G6 →
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactHero
