import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer'
import { teamMembers, expertiseAreas, valuePillars } from '../data/team-data'
import { projectsData } from '../data/project-data'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const expertiseRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const featuredRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  const featuredProjects = projectsData.slice(0, 3)

  useGSAP(function () {
    const isMobile = window.innerWidth < 1024

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: isMobile ? 'top 50%' : 'top 28%',
        end: isMobile ? 'top -50%' : 'top -70%',
        pin: !isMobile,
        pinSpacing: !isMobile,
        pinReparent: !isMobile,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      }
    })

    gsap.from('.expertise-item', {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      scrollTrigger: {
        trigger: expertiseRef.current,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.value-card', {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: valuesRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.team-row', {
      x: -40,
      opacity: 0,
      stagger: 0.04,
      scrollTrigger: {
        trigger: teamRef.current,
        start: 'top 80%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.featured-card', {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: featuredRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <>
      <div className='parent relative'>
        <div id='page1' className='py-1 px-3 lg:px-0'>
          <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[35vw] md:h-[28vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[30vw] md:w-[25vw] top-32 md:top-48 lg:top-96 left-[35%] md:left-[38%] lg:left-[30vw] z-10'>
            <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="Team member" loading="lazy" />
          </div>
          <div className='relative font-[font2]'>
            <div className='pt-24 md:pt-32 lg:mt-[55vh]'>
              <h1 className='text-[18vw] md:text-[16vw] lg:text-[20vw] text-center uppercase leading-[16vw] md:leading-[14vw] lg:leading-[18vw] px-3'>Soixan7e <br />
                Douze</h1>
            </div>
            <div className='lg:pl-[40%] mt-8 md:mt-12 lg:mt-20 px-4 lg:px-0 lg:pr-8'>
              <p className='text-base md:text-2xl lg:text-6xl leading-relaxed md:leading-tight lg:leading-tight'>Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir des marques influentes.</p>
            </div>
          </div>
        </div>
        <div id='page2' className='h-[50vh] md:h-[75vh] lg:h-screen'></div>
      </div>

      <div ref={expertiseRef} className='bg-white text-black py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20'>
        <div className='max-w-[1400px] mx-auto'>
          <h2 className='font-[font2] text-4xl md:text-5xl lg:text-6xl uppercase mb-16 md:mb-24'>Expertise</h2>
          <div className='space-y-0'>
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className='expertise-item group border-t border-black/15 py-8 md:py-10 lg:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-12 cursor-default'
              >
                <h3 className='font-[font2] text-3xl md:text-4xl lg:text-[4vw] uppercase leading-none group-hover:text-[#D3FD50] transition-colors duration-300'>
                  {area.title}
                </h3>
                <p className='font-[font1] text-base md:text-lg text-black/50 lg:max-w-[400px] lg:text-right group-hover:text-black/80 transition-colors duration-300'>
                  {area.description}
                </p>
              </div>
            ))}
            <div className='border-t border-black/15'></div>
          </div>
        </div>
      </div>

      <div ref={valuesRef} className='bg-black text-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20'>
        <div className='max-w-[1400px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12'>
            {valuePillars.map((pillar) => (
              <div key={pillar.id} className='value-card group'>
                <div className='border-t-2 border-[#D3FD50] pt-8'>
                  <span className='font-[font1] text-sm uppercase tracking-[0.2em] text-white/40 block mb-4'>
                    {pillar.subtitle}
                  </span>
                  <h3 className='font-[font2] text-4xl md:text-5xl lg:text-6xl uppercase mb-6'>
                    {pillar.title}
                  </h3>
                  <p className='font-[font1] text-base md:text-lg text-white/60 leading-relaxed'>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={teamRef} className='bg-white text-black py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20'>
        <div className='max-w-[1400px] mx-auto'>
          <h2 className='font-[font2] text-4xl md:text-5xl lg:text-6xl uppercase mb-16 md:mb-24'>L'equipe</h2>
          <div className='space-y-0'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='team-row border-t border-black/10 py-4 md:py-5 flex justify-between items-baseline gap-4'
              >
                <span className='font-[font2] text-lg md:text-xl lg:text-2xl uppercase'>
                  {member.name}
                </span>
                <span className='font-[font1] text-sm md:text-base text-black/50 text-right'>
                  {member.title}
                </span>
              </div>
            ))}
            <div className='border-t border-black/10'></div>
          </div>
        </div>
      </div>

      <div ref={featuredRef} className='bg-black text-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20'>
        <div className='max-w-[1400px] mx-auto'>
          <h2 className='font-[font2] text-4xl md:text-5xl lg:text-6xl uppercase mb-16 md:mb-24'>Projets en vedette</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8'>
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className='featured-card group block'
              >
                <div className='aspect-[4/3] overflow-hidden mb-4'>
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                    loading="lazy"
                  />
                </div>
                <h3 className='font-[font2] text-xl md:text-2xl uppercase mb-2 group-hover:text-[#D3FD50] transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='font-[font1] text-sm text-white/50'>
                  {project.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Agence
