import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const NotFound = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.not-found-title span', {
      y: 200,
      rotateX: 90,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: 'power3.out'
    })
    tl.from('.not-found-text', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    tl.from('.not-found-btn', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.2')
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='min-h-screen bg-black text-white flex flex-col items-center justify-center px-6'>
      <h1 className='not-found-title font-[font2] text-[30vw] md:text-[20vw] lg:text-[15vw] leading-none uppercase overflow-hidden'>
        {'404'.split('').map((char, i) => (
          <span key={i} className='inline-block'>{char}</span>
        ))}
      </h1>
      <p className='not-found-text font-[font1] text-lg md:text-xl text-white/60 mt-6 mb-12 text-center max-w-md'>
        La page que vous recherchez n'existe pas ou a ete deplacee.
      </p>
      <Link
        to='/'
        className='not-found-btn relative font-[font2] text-sm md:text-base uppercase tracking-wider px-8 py-4 border border-white/30 hover:bg-[#D3FD50] hover:text-black hover:border-[#D3FD50] transition-all duration-300'
      >
        Retour a l'accueil
      </Link>
    </div>
  )
}

export default NotFound
