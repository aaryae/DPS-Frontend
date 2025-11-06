import { useState, useEffect } from 'react'

export const useTime = () => {
  const [time, setTime] = useState(new Date())
  const [greeting, setGreeting] = useState('Morning')

  useEffect(() => {
    // update every second
    const timer = setInterval(() => {
      const newTime = new Date()
      setTime(newTime)

      const hour = newTime.getHours()

      if (hour >= 12 && hour < 17) {
        setGreeting('Afternoon')
      } else if (hour >= 17) {
        setGreeting('Evening')
      } else {
        setGreeting('Morning')
      }
    }, 1000)

    // cleanup
    return () => clearInterval(timer)
  }, [])

  return { time, greeting }
}
