import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/common/Footer'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


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
        <div className='mt-8 md:mt-12 lg:mt-20 lol'>
          {projects.map(function (elem, idx) {
            return <div key={idx} className='hero w-full min-h-[400px] md:min-h-[600px] lg:h-[850px] mb-3 md:mb-4 flex lg:flex-row flex-col lg:gap-4 gap-3'>
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects