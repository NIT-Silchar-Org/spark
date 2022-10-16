import React from 'react'
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
    <div className="w-screen flex flex-col justify-center mt-6 py-8" id="gallery">
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
