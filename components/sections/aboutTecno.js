import React from 'react'
import Image from 'next/image'
import back from '../../public/home/sparklogo1.png'
const AboutTecno = () => {
  return (
    <div className="w-screen min-h-screen md:p-12 bg-transparent flex text-white items-end justify-center flex-col text-2xl md:text-[2.6rem] font-thin">
      <div className="font-babaPro py-2 w-screen text-center md:text-right md:mx-8"><span className="border-b">ABOUT Tecno</span></div>
      <div className="flex md:flex-row flex-nowrap flex-col">
        <div className="hidden md:block"><Image src={back} className="object-scale-down" /></div>
        <p className="font-montserrat max-w-4xl rounded-3xl text-base md:text-[1.6rem] p-8 font-normal md:my-4 text-center md:text-right leading-10">
          Tecnoesis is the annual techno-managerial event of NIT Silchar,
          promising all tech geeks the ideal niche of fascinating events,
          workshops, competitions and interactions worth a lifetime. This mega
          event has left its mark as of the most prominent techfests across the
          country. The cauldron of enthusiasm and knowledge attracts various
          students, presenting the chance to let their minds run wild with
          ideads, fostering the inventors of the future.
        </p>
      </div>
    </div>
  )
}

export default AboutTecno
