import React from 'react'

const ContactInfo = () => {
  return (
    <div className='bg-black py-20 px-6 md:px-12 lg:px-20'>
      <div className='contact-banner bg-[#D3FD50] text-black py-8 px-8 md:px-12 relative overflow-hidden'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
          <div className='flex-1'>
            <h3 className='font-[font2] text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-2'>
              BONJOUR@K72.CA
            </h3>
            <p className='font-[font1] text-sm md:text-base'>
              Let's create something amazing together
            </p>
          </div>

          <div className='flex gap-6'>
            <a
              href='mailto:bonjour@k72.ca'
              className='group flex items-center gap-2 font-[font2] text-lg uppercase hover:opacity-70 transition-opacity'
            >
              <span>Email</span>
              <span className='transform group-hover:translate-x-1 transition-transform'>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-12'>
        <div>
          <h4 className='font-[font2] text-xl uppercase mb-4'>Location</h4>
          <p className='font-[font1] text-sm leading-relaxed text-white/70'>
            525 Av. Viger O - Suite 400<br />
            Montréal, QC H2Z 1G6<br />
            Canada
          </p>
        </div>

        <div>
          <h4 className='font-[font2] text-xl uppercase mb-4'>Contact</h4>
          <p className='font-[font1] text-sm leading-relaxed text-white/70'>
            <a href='mailto:bonjour@k72.ca' className='hover:text-[#D3FD50] transition-colors block mb-2'>
              bonjour@k72.ca
            </a>
            <a href='tel:+15145551234' className='hover:text-[#D3FD50] transition-colors block'>
              +1 (514) 555-1234
            </a>
          </p>
        </div>

        <div>
          <h4 className='font-[font2] text-xl uppercase mb-4'>Follow Us</h4>
          <div className='flex flex-col gap-2'>
            <a
              href='#'
              className='font-[font1] text-sm text-white/70 hover:text-[#D3FD50] transition-colors'
            >
              Instagram
            </a>
            <a
              href='#'
              className='font-[font1] text-sm text-white/70 hover:text-[#D3FD50] transition-colors'
            >
              LinkedIn
            </a>
            <a
              href='#'
              className='font-[font1] text-sm text-white/70 hover:text-[#D3FD50] transition-colors'
            >
              Behance
            </a>
            <a
              href='#'
              className='font-[font1] text-sm text-white/70 hover:text-[#D3FD50] transition-colors'
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className='mt-20 pt-8 border-t border-white/10'>
        <p className='font-[font1] text-xs text-white/50 text-center'>
          © {new Date().getFullYear()} K72. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default ContactInfo
