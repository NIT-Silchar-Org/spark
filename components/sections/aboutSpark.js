import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import back2 from '../../public/home/sparklogo2.png'
const AboutSpark = () => {
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
    <div className="w-screen min-h-screen md:p-12 bg-transparent flex text-white items-start justify-center flex-col text-2xl md:text-[2.6rem] font-thin" id="about">
      <div className="font-babaPro py-2 w-screen text-center md:text-left md:mx-8">
        <span className="border-b">ABOUT Spark</span>
      </div>
      <div className="flex flex-row flex-nowrap">
        <p className="font-montserrat max-w-4xl rounded-3xl text-base md:text-[1.6rem] p-8 font-normal text-center md:text-left md:my-4 leading-10">
          Who does not want a super fun, spark-ly night dipped in a bucket full
          of different "trending" genres of music as the end treat of a great
          event? As a reward of the tiring tech-wars, the biggest attraction of
          Tecnoesis surely excites your happy hormones and calms your nerves.
          Gear up to witness the best talents of the nation, on the last night
          of tecnoesis, with THE SPARK NIGHT!
        </p>
        <div
          className="hidden md:block"
          style={{ transform: `translateY(-${(offsetY - 300) * 0.3}px)` }}
        >
          <Image src={back2} className="object-scale-down hidden md:block" />
        </div>
      </div>
    </div>
  )
}

export default AboutSpark
