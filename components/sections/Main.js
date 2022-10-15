import { useEffect, useState } from 'react'
import Hero from './hero'

const Main = ({showMenu}) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset-window.screenY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="relative overflow-y-hidden overflow-x-hidden">
      <div className="absolute">
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[20vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        >
        </div>
        <div
          className="relative w-20 h-20 md:w-32 md:h-32 top-[40vh] left-10 bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
        >
        </div>
        
      </div>

      <div className="overflow-y-hidden overflow-x-hidden">
        <div className="relative top-0 bg-transparent min-h-screen" id="about">
        </div>
      </div>
    </div>
  )
}

export default Main
