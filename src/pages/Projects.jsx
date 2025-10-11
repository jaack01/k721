import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/common/Footer'
import { projectsData } from '../data/project-data'


const Projects = () => {


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    const isMobile = window.innerWidth < 1024

    if (!isMobile) {
      gsap.from('.hero', {
        height: '100px',
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 100%',
          end: 'top -150%',
          scrub: true
        }
      })
    } else {
      gsap.from('.hero', {
        opacity: 0,
        y: 30,
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      })
    }
  })

  return (
    <>
      <div className='lg:p-4 p-3 pb-12 lg:pb-24'>
        <div className='pt-24 md:pt-32 lg:pt-[45vh]'>
          <h2 className='font-[font2] text-[15vw] md:text-[12vw] lg:text-[9.5vw] uppercase leading-tight'>Projets</h2>
        </div>
        <div className='mt-8 md:mt-12 lg:mt-20 lol grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4'>
          {projectsData.map(function (project) {
            return <div key={project.id} className='hero w-full min-h-[400px] md:min-h-[600px] lg:h-[850px]'>
              <ProjectCard project={project} />
            </div>
          })}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects