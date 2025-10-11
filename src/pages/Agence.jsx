import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import Footer from '../components/common/Footer'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

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
          let imageIndex;
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
      <div id='page2' className='h-[50vh] md:h-[75vh] lg:h-screen'>

      </div>
    </div>
    <Footer />
    </>
  )
}

export default Agence
