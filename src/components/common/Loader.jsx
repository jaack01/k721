import { useEffect, useState } from 'react'
import gsap from 'gsap'

const Loader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const increment = Math.floor(Math.random() * 12) + 3
        return Math.min(prev + increment, 100)
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (counter === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        }
      })

      tl.to('.loader-counter', {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power2.in'
      })

      tl.to('.loader-bar', {
        scaleY: 0,
        transformOrigin: 'top',
        stagger: { amount: 0.3 },
        duration: 0.6,
        ease: 'power3.inOut'
      }, '-=0.1')

      tl.to('.loader-wrapper', {
        display: 'none',
        duration: 0
      })
    }
  }, [counter, onComplete])

  return (
    <div className='loader-wrapper fixed inset-0 z-[200] flex items-center justify-center'>
      <div className='absolute inset-0 flex'>
        <div className='loader-bar flex-1 bg-black origin-top'></div>
        <div className='loader-bar flex-1 bg-black origin-top'></div>
        <div className='loader-bar flex-1 bg-black origin-top'></div>
        <div className='loader-bar flex-1 bg-black origin-top'></div>
        <div className='loader-bar flex-1 bg-black origin-top'></div>
      </div>
      <div className='loader-counter relative z-10 text-white font-[font2] flex flex-col items-center'>
        <div className='text-[20vw] md:text-[15vw] lg:text-[10vw] leading-none tabular-nums'>
          {counter}
        </div>
        <div className='flex gap-1 mt-4'>
          {[0, 1, 2, 3, 4].map(i => (
            <div
              key={i}
              className='w-1 bg-[#D3FD50]'
              style={{
                animation: `loaderPulse 0.6s ease-in-out ${i * 0.1}s infinite alternate`,
                height: '20px'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loader
