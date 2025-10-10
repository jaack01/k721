import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MarqueeRibbon = ({
  text = 'AVAILABLE FOR NEW PROJECTS',
  rotation = -3,
  backgroundColor = 'bg-white',
  textColor = 'text-black',
  speed = 20,
  reverse = false,
  className = ''
}) => {
  const ribbonRef = useRef(null)
  const marqueeRef = useRef(null)

  useGSAP(() => {
    if (ribbonRef.current) {
      gsap.from(ribbonRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
      })
    }
  }, { scope: ribbonRef })

  const repeatedText = Array(20).fill(text).join(' • ')

  return (
    <div
      ref={ribbonRef}
      className={`marquee-ribbon-container relative w-full overflow-hidden ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
        width: '120%',
        marginLeft: '-10%'
      }}
    >
      <div
        className={`${backgroundColor} py-4 md:py-5 lg:py-6 relative overflow-hidden`}
      >
        <div
          ref={marqueeRef}
          className="marquee-content flex whitespace-nowrap"
          style={{
            animation: `marqueeScroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`
          }}
        >
          <span className={`${textColor} font-[font2] text-sm md:text-base lg:text-lg uppercase tracking-wider inline-block px-4`}>
            {repeatedText}
          </span>
          <span className={`${textColor} font-[font2] text-sm md:text-base lg:text-lg uppercase tracking-wider inline-block px-4`}>
            {repeatedText}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MarqueeRibbon
