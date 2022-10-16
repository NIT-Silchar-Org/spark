import { useEffect, useRef, useState } from 'react'
import PhotoCard from './PhotoCard'

const GalleryCarousel = ({ cardList = [], carouselSize }) => {
  const cardContainer = useRef()
  const [carouselCardSize, setCarouselCardSize] = useState(0)

  useEffect(() => {
    const currentCardStyle = getComputedStyle(cardContainer.current.firstChild)

    const cardWidth = cardContainer.current.firstChild.offsetWidth
    const cardMargin =
      parseInt(currentCardStyle.marginLeft.replace('px', '')) +
      parseInt(currentCardStyle.marginRight.replace('px', ''))

    setCarouselCardSize(cardMargin + cardWidth)
  }, [carouselSize])

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      handleLeftMovement(cardList, carouselSize)
    }, 3000)

    return () => {
      clearInterval(carouselInterval)
    }
  }, [carouselCardSize])

  const style = {
    width: carouselCardSize * carouselSize,
  }

  let counter = 0

  const handleLeftMovement = (cardList, carouselSize) => {
    counter = (counter + 1) % (cardList.length - (carouselSize - 1))
    cardContainer.current.style.transform = `translateX(-${
      counter * carouselCardSize
    }px)`
  }

  const handleRightMovement = (cardList, carouselSize) => {
    counter =
      (counter - 1 + cardList.length) % (cardList.length - (carouselSize - 1))
    cardContainer.current.style.transform = `translateX(-${
      counter * carouselCardSize
    }px)`
  }

  let firstTouch = null

  const handleTouchStart = (e) => {
    firstTouch = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    const currTouch = e.touches[0].clientX
    if (firstTouch && Math.abs(firstTouch - currTouch) >= 50) {
      if (firstTouch < currTouch) {
        handleRightMovement(cardList, carouselSize)
      } else {
        handleLeftMovement(cardList, carouselSize)
      }
      firstTouch = null
    }
  }

  return (
    <div className="relative">
      <div
        style={style}
        className="flex flex-row justify-start overflow-hidden"
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        <div
          ref={cardContainer}
          className="flex flex-row duration-300"
          id="carousalCardContainer"
        >
          {cardList.map((elem, idx) => {
            return (
              <PhotoCard
                imgSrc={elem.imgSrc}
                imghref={elem.imghref}
                key={idx}
              />
            )
          })}
        </div>
      </div>
      <div className="hidden sm:block absolute w-full top-1/2">
        <div
          onClick={() => handleRightMovement(cardList, carouselSize)}
          className="absolute -left-8 h-6 w-6 top-1/2 -translate-y-1/2 border-l-4 border-b-4 border-solid border-neon2 rotate-45 duration-200 hover:border-neon1"
        >
          <div className=" absolute -left-14  top-1/2 rounded-full w-16 h-16 bg-[#F757CF] blur-2xl"></div>
        </div>
        <div
          onClick={() => handleLeftMovement(cardList, carouselSize)}
          className="absolute -right-8 h-6 w-6 top-1/2 -translate-y-1/2 border-r-4 border-t-4 border-solid border-neon2 rotate-45 duration-200 hover:border-neon1"
        >
          <div className="absolute -right-14 bottom-1/2 rounded-full  w-16 h-16 bg-[#F757CF] blur-2xl"></div>
        </div>
      </div>
    </div>
  )
}

export default GalleryCarousel
