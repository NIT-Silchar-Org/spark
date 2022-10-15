import React from 'react'
import devfolio from '../../public/home/Devfolio.png'
import Image from 'next/image'

const PhotoCard = ({ imgSrc }) => {
  return (
    <div className=" flex items-center justify-center m-8 duration-200">
      <div className="relative w-[90vw] md:w-[50rem] mx-auto">
        <Image layout='responsive' src={imgSrc} />
      </div>
    </div>
  )
}

export default PhotoCard
