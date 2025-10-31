import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='bg-[#d4ff00] text-black p-8 md:p-12 lg:p-16 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          <div>
            <h2 className='font-[font2] text-3xl md:text-4xl lg:text-5xl mb-2 uppercase tracking-tight'>
              BONJOUR@K72.CA
            </h2>
            <p className='font-[font1] text-base md:text-lg'>
              Let's create something amazing together
            </p>
          </div>
          <a
            href='mailto:bonjour@k72.ca'
            className='font-[font2] text-base md:text-lg uppercase tracking-wide flex items-center gap-2 hover:gap-4 transition-all duration-300'
          >
            EMAIL <span>→</span>
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16'>
          <div>
            <h3 className='font-[font2] text-lg md:text-xl uppercase mb-4 tracking-wide'>
              LOCATION
            </h3>
            <div className='font-[font1] text-sm md:text-base leading-relaxed text-gray-400'>
              <p>525 Av. Viger O - Suite 400</p>
              <p>Montréal, QC H2Z 1G6</p>
              <p>Canada</p>
            </div>
          </div>

          <div>
            <h3 className='font-[font2] text-lg md:text-xl uppercase mb-4 tracking-wide'>
              CONTACT
            </h3>
            <div className='font-[font1] text-sm md:text-base leading-relaxed text-gray-400'>
              <a
                href='mailto:bonjour@k72.ca'
                className='block hover:text-white transition-colors duration-300 mb-2'
              >
                bonjour@k72.ca
              </a>
              <a
                href='tel:+15145551234'
                className='block hover:text-white transition-colors duration-300'
              >
                +1 (514) 555-1234
              </a>
            </div>
          </div>

          <div>
            <h3 className='font-[font2] text-lg md:text-xl uppercase mb-4 tracking-wide'>
              FOLLOW US
            </h3>
            <div className='font-[font1] text-sm md:text-base leading-relaxed text-gray-400'>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='block hover:text-white transition-colors duration-300 mb-2'
              >
                Instagram
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='block hover:text-white transition-colors duration-300 mb-2'
              >
                LinkedIn
              </a>
              <a
                href='https://behance.net'
                target='_blank'
                rel='noopener noreferrer'
                className='block hover:text-white transition-colors duration-300 mb-2'
              >
                Behance
              </a>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='block hover:text-white transition-colors duration-300'
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8 text-center'>
          <p className='font-[font1] text-sm text-gray-500'>
            © 2025 K72. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
