import React from 'react'
import Image from 'next/image'
import back2 from '../../public/home/sparklogo2.png'
const AboutSpark = () => {
  return (
    <div className="w-screen min-h-screen md:p-12 bg-transparent flex text-white items-start justify-center flex-col text-2xl md:text-[2.6rem] font-thin">
      <div className="font-babaPro py-2 w-screen text-center md:text-left md:mx-8"><span className="border-b">ABOUT Spark</span></div>
      <div className="flex flex-row flex-nowrap">
        <p className="font-montserrat max-w-4xl rounded-3xl text-base md:text-[1.6rem] p-8 font-normal text-center md:text-left md:my-4 leading-10">
          The coup de grace event of the annual techno-management festivals.
          Culminating the end of festivities in form of a musical extravaganza,
          Spark is the spectacle to behold. From edm artists to classical
          artists, from rock bands to solo singers,the Spark night truly covers
          the art of production and provides the drive to feature the elite
          artists of the present generation.
        </p>
        <div className="hidden md:block"><Image src={back2} className="object-scale-down hidden md:block" /></div>
      </div>
    </div>
  )
}

export default AboutSpark
