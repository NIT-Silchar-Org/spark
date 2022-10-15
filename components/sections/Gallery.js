import Image from 'next/image'
import React from 'react'
import cs_default from '../../public/cs_default.svg'
import cs_var from '../../public/cs_var.svg'
import GalleryCarousel from '../elements/GalleryCarousel'
import softwareTrack from '../../public/eventList/softwaretrack.png'

const Gallery = () => {

  const photos = [
    {imgSrc: softwareTrack},
    {imgSrc: softwareTrack},
    {imgSrc: softwareTrack},
    {imgSrc: softwareTrack},
    {imgSrc: softwareTrack},
  ]

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center " id="gallery">
      <div className='text-center font-babaPro text-2xl'>Gallery</div>
      <div className='flex justify-center'>
        <GalleryCarousel cardList={photos} carouselSize={1}/>
      </div>
    </div>
  )
}

export default Gallery
