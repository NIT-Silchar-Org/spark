import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import bulb from "../../public/home/bulb.svg";
import styles from '../../styles/Hero.module.scss'

const Hero = ({ showMenu }) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset - window.screenY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="absolute top-0 h-screen w-screen m-0 bg-black">
      <div
        className={`absolute ${
          showMenu
            ? 'translate-x-0 md:translate-x-[75vw] transition-all duration-300'
            : 'transition-all'
        }`}
      >
        <div
          className="relative w-80 h-80 md:w-[30vw] md:h-80 top-[50vh] md:top-[60vh] left-0"
          style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
        >
          <Image
            src={bulb}
            layout="fill"
            objectFit="contain"
            priority="true"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="relative h-[140vh] md:h-[50vh] lg:h-[60vh] w-[42vw] md:w-[80vw] m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          autoPlay
          muted
          loop
          className="h-[140vh] md:h-[50vh] lg:h-[60vh] w-[40vw] md:w-[80vw] object-cover"
        >
          <source src="/home/bgVideo.mp4" />
        </video>

        <div className={styles.label}>
          <div className={styles.txt}>SPARK</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
