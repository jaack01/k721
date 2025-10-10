import React, { useState, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

const Contact = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const lines = containerRef.current.querySelectorAll('.hero-line')

    gsap.from(lines, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    })

    gsap.from('.tagline', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out'
    })

    gsap.from('.contact-banner', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: 'power2.out'
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='min-h-screen bg-black text-white overflow-hidden'>
      <ContactHero />

      <div className='relative z-10'>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}

export default Contact
