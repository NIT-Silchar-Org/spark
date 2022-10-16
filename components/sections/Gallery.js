import Image from 'next/image'
import React from 'react'
import cs_default from '../../public/cs_default.svg'
import cs_var from '../../public/cs_var.svg'
import GalleryCarousel from '../elements/GalleryCarousel'
import softwareTrack from '../../public/eventList/softwaretrack.png'

const Gallery = () => {
  const photos = [
    { imgSrc: softwareTrack },
    { imgSrc: softwareTrack },
    { imgSrc: softwareTrack },
    { imgSrc: softwareTrack },
    { imgSrc: softwareTrack },
  ]

  return (
    <div className="w-screen flex flex-col justify-center mt-6" id="gallery">
      <div className="text-center font-babaPro text-white gallerytitle">
        Gallery
      </div>
      <div className="flex justify-center">
        <GalleryCarousel cardList={photos} carouselSize={1} />
      </div>
    </div>
  )
}

export default Gallery
