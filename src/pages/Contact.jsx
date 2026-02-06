import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import MarqueeRibbon from '../components/common/MarqueeRibbon'

const contactPrompts = [
  { heading: 'Pour parler de votre projet', subtext: 'The one that keeps you up at night.' },
  { heading: 'Pour parler de rien en particulier', subtext: 'Sometimes the best ideas come from nowhere.' },
  { heading: 'Pour parler de barbes', subtext: 'We have strong opinions on the subject.' },
  { heading: 'Pour parler de Degrassi Junior High', subtext: 'A cultural milestone, clearly.' },
  { heading: 'Pour parler de creativite', subtext: 'Our favourite topic, obviously.' },
  { heading: 'Pour parler de strategie', subtext: 'Because good work starts with a good plan.' },
]

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)
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

    gsap.from('.contact-card', {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.contact-cards-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.contact-bottom', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact-bottom',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='min-h-screen bg-black text-white overflow-hidden'>
      <div className='relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-20'>
        <div className='flex-1 flex items-center'>
          <div className='w-full'>
            {['LET\'S', 'TALK ABOUT', 'YOUR', 'PROJECT'].map((line, i) => (
              <div key={i} className='overflow-hidden'>
                <h1 className='hero-line font-[font2] text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] uppercase tracking-tight'>
                  {line}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-between items-end flex-wrap gap-8'>
          <div className='tagline max-w-xs'>
            <p className='font-[font1] text-sm md:text-base leading-relaxed text-white/70'>
              Onscreen or in an office.<br />
              Here. There.<br />
              Anywhere.
            </p>
          </div>
          <div className='tagline text-right'>
            <a
              href='https://maps.google.com/?q=525+Av.+Viger+O+Suite+400+Montreal'
              target='_blank'
              rel='noopener noreferrer'
              className='font-[font1] text-sm md:text-base leading-relaxed text-white/70 hover:text-white transition-colors'
            >
              525 Av. Viger O - Suite 400<br />
              Montreal, QC H2Z 1G6 &rarr;
            </a>
          </div>
        </div>
      </div>

      <MarqueeRibbon
        text="LET'S WORK TOGETHER"
        rotation={-3}
        backgroundColor="bg-[#D3FD50]"
        textColor="text-black"
        speed={25}
        className="my-8 md:my-12"
      />

      <div className='contact-cards-section px-6 md:px-12 lg:px-20 py-16 md:py-24'>
        <div className='max-w-[1400px] mx-auto space-y-6 md:space-y-8'>
          {contactPrompts.map((prompt, index) => (
            <div
              key={index}
              className='contact-card group border border-white/10 p-8 md:p-12 lg:p-16 hover:border-[#D3FD50]/40 transition-all duration-500 cursor-default'
            >
              <h2 className='font-[font2] text-2xl md:text-4xl lg:text-5xl uppercase leading-tight mb-6 group-hover:text-[#D3FD50] transition-colors duration-300'>
                {prompt.heading}
              </h2>
              <p className='font-[font1] text-sm md:text-base text-white/40 mb-8 italic'>
                {prompt.subtext}
              </p>
              <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
                <a
                  href='mailto:bonjour@k72.ca'
                  className='font-[font1] text-base md:text-lg text-white/80 hover:text-[#D3FD50] transition-colors flex items-center gap-2'
                >
                  bonjour@k72.ca <span className='text-xs'>&rarr;</span>
                </a>
                <a
                  href='tel:+15145551234'
                  className='font-[font1] text-base md:text-lg text-white/80 hover:text-[#D3FD50] transition-colors'
                >
                  +1 (514) 555-1234
                </a>
                <a
                  href='https://maps.google.com/?q=525+Av.+Viger+O+Suite+400+Montreal'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-[font1] text-base md:text-lg text-white/80 hover:text-[#D3FD50] transition-colors'
                >
                  Montreal, QC &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='contact-bottom px-6 md:px-12 lg:px-20 py-16 md:py-24'>
        <div className='max-w-[1400px] mx-auto'>
          <div className='bg-[#D3FD50] text-black p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
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
              EMAIL <span>&rarr;</span>
            </a>
          </div>

          <div className='mt-20 grid grid-cols-1 md:grid-cols-4 gap-12'>
            <div>
              <h4 className='font-[font2] text-sm uppercase mb-4 tracking-wide'>Location</h4>
              <p className='font-[font1] text-sm leading-relaxed text-white/50'>
                525 Av. Viger O - Suite 400<br />
                Montreal, QC H2Z 1G6<br />
                Canada
              </p>
            </div>
            <div>
              <h4 className='font-[font2] text-sm uppercase mb-4 tracking-wide'>Contact</h4>
              <div className='font-[font1] text-sm text-white/50 space-y-2'>
                <a href='mailto:bonjour@k72.ca' className='block hover:text-white transition-colors'>bonjour@k72.ca</a>
                <a href='tel:+15145551234' className='block hover:text-white transition-colors'>+1 (514) 555-1234</a>
              </div>
            </div>
            <div>
              <h4 className='font-[font2] text-sm uppercase mb-4 tracking-wide'>Follow Us</h4>
              <div className='font-[font1] text-sm text-white/50 space-y-2'>
                <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='block hover:text-white transition-colors'>Facebook</a>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='block hover:text-white transition-colors'>Instagram</a>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='block hover:text-white transition-colors'>LinkedIn</a>
                <a href='https://behance.net' target='_blank' rel='noopener noreferrer' className='block hover:text-white transition-colors'>Behance</a>
              </div>
            </div>
            <div>
              <h4 className='font-[font2] text-sm uppercase mb-4 tracking-wide'>Legal</h4>
              <div className='font-[font1] text-sm text-white/50 space-y-2'>
                <a href='/privacy-policy' className='block hover:text-white transition-colors'>Politique de confidentialite</a>
              </div>
            </div>
          </div>

          <div className='mt-16 pt-8 border-t border-white/10'>
            <p className='font-[font1] text-xs text-white/30 text-center'>
              &copy; {new Date().getFullYear()} K72. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
