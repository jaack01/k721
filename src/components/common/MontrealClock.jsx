import { useState, useEffect } from 'react'

const MontrealClock = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString('en-CA', {
        timeZone: 'America/Toronto',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTime(formatted)
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className='font-[font1] text-xs tracking-[0.15em] tabular-nums'>
      MONTREAL_{time}
    </span>
  )
}

export default MontrealClock
