import { useGSAP } from '@gsap/react'
import ServiceCard from '../components/services/ServiceCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/common/Footer'
import { servicesData } from '../data/services-data'

const Services = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    const isMobile = window.innerWidth < 1024

    if (!isMobile) {
      gsap.from('.service-row', {
        height: '100px',
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.services-container',
          start: 'top 100%',
          end: 'top -150%',
          scrub: true
        }
      })
    } else {
      gsap.from('.service-row', {
        opacity: 0,
        y: 30,
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.services-container',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      })
    }
  })

  const serviceRows = []
  for (let i = 0; i < servicesData.length; i += 2) {
    serviceRows.push(servicesData.slice(i, i + 2))
  }

  return (
    <>
      <div className='lg:p-4 p-3 pb-12 lg:pb-24'>
        <div className='pt-24 md:pt-32 lg:pt-[45vh]'>
          <h2 className='font-[font2] text-[15vw] md:text-[12vw] lg:text-[9.5vw] uppercase leading-tight'>Services</h2>
        </div>
        <div className='mt-8 md:mt-12 lg:mt-20 services-container'>
          {serviceRows.map(function (row, idx) {
            return (
              <div key={idx} className='service-row w-full min-h-[400px] md:min-h-[600px] lg:h-[850px] mb-3 md:mb-4 flex lg:flex-row flex-col lg:gap-4 gap-3'>
                {row.map(function (service) {
                  return <ServiceCard key={service.id} service={service} />
                })}
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
