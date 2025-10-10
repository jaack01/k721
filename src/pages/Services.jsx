import { useGSAP } from '@gsap/react'
import ServiceCard from '../components/services/ServiceCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/common/Footer'
import { servicesData } from '../data/services-data'

const Services = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
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
  })

  const serviceRows = []
  for (let i = 0; i < servicesData.length; i += 2) {
    serviceRows.push(servicesData.slice(i, i + 2))
  }

  return (
    <>
      <div className='lg:p-4 p-2 mb-[100vh]'>
        <div className='pt-[45vh]'>
          <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Services</h2>
        </div>
        <div className='lg:mt-20 services-container'>
          {serviceRows.map(function (row, idx) {
            return (
              <div key={idx} className='service-row w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
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
