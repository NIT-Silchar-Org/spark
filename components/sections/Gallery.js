import Image from 'next/image'
import React from 'react'
import cs_default from '../../public/cs_default.svg'
import cs_var from '../../public/cs_var.svg'
import GalleryCarousel from '../elements/GalleryCarousel'
import g1 from '../../public/img/gallery1.jpg'
import g2 from '../../public/img/gallery2.jpg'
import g3 from '../../public/img/gallery3.jpg'
import g4 from '../../public/img/gallery4.jpg'
import g5 from '../../public/img/gallery5.jpg'
import g6 from '../../public/img/gallery6.jpg'

const Gallery = () => {
  const photos = [
    { imgSrc: g1 },
    { imgSrc: g2 },
    { imgSrc: g3 },
    { imgSrc: g4 },
    { imgSrc: g5 },
    { imgSrc: g6 },
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
