import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer'
import { projectsData } from '../data/project-data'

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger)
  const [hoveredId, setHoveredId] = useState(null)

  useGSAP(function () {
    gsap.from('.project-title', {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })

    gsap.from('.project-count', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      ease: 'power2.out'
    })

    gsap.from('.project-row', {
      y: 30,
      opacity: 0,
      stagger: 0.06,
      scrollTrigger: {
        trigger: '.project-list',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <>
      <div className='lg:p-4 p-3 pb-12 lg:pb-24 min-h-screen'>
        <div className='pt-24 md:pt-32 lg:pt-[45vh]'>
          <h2 className='project-title font-[font2] text-[15vw] md:text-[12vw] lg:text-[9.5vw] uppercase leading-tight'>Projets</h2>
          <p className='project-count font-[font1] text-sm md:text-base text-black/50 mt-4 uppercase tracking-[0.2em]'>
            {projectsData.length} projects
          </p>
        </div>

        <div className='project-list mt-12 md:mt-16 lg:mt-24'>
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className='project-row group block border-t border-black/10 hover:border-black/30 transition-colors'
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className='py-6 md:py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-8 relative'>
                <div className='flex-1 flex items-baseline gap-4 lg:gap-8'>
                  <span className='font-[font1] text-xs text-black/30 tabular-nums w-6'>
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <h3 className='font-[font2] text-2xl md:text-3xl lg:text-[3vw] uppercase leading-none group-hover:text-[#D3FD50] transition-colors duration-300'>
                    {project.title}
                  </h3>
                </div>

                <div className='flex items-center gap-6 lg:gap-12 ml-10 lg:ml-0'>
                  <span className='font-[font1] text-sm text-black/40 hidden md:block'>
                    {project.category}
                  </span>
                  <span className='font-[font1] text-sm text-black/40'>
                    {project.year}
                  </span>
                  <span className='font-[font2] text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block'>
                    View &rarr;
                  </span>
                </div>

                {hoveredId === project.id && (
                  <div className='hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[110%] w-[200px] h-[150px] overflow-hidden rounded-lg pointer-events-none z-20'>
                    <img
                      src={project.featuredImage}
                      alt=""
                      className='w-full h-full object-cover'
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
          <div className='border-t border-black/10'></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
