import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import artistImg from '../../public/img/gajendra.png'
import styles from '../Artist/Artist.module.scss'
const Artist = () => {
  const [imgWidth,setImgWidth] = useState(600);
  
  useEffect(()=>{
    let windoWidth = document.body.getBoundingClientRect().width;
    if(windoWidth>768) setImgWidth(600) 
    if(windoWidth<=768 && windoWidth > 425) setImgWidth(400)
    if(windoWidth<=425) setImgWidth(250)
  })

  return (
    <div className={`${styles.artist_wrapper}`}>
      <div className={`${styles.info} text-white`}>
        <h1 className={`${styles.heading} font-mokotoGlitch`}>
          MEET THE ARTIST
        </h1>
        <p className={`${styles.para} md:leading-7`}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, sed
          facilis. Repellat laborum voluptates molestiae. Voluptate deserunt
          autem velit ea neque, quisquam repellat consequuntur eius cum
          laudantium. Possimus, omnis non excepturi vero sunt rem beatae ea quas
          voluptatibus dicta, eveniet esse consequuntur voluptatem quos
          assumenda perferendis placeat mollitia nam harum.
        </p>
      </div>

      <div
        className={`${styles.artistImageDiv} w-[100%] flex justify-center`}>
        <div className={`${styles.artistImage}`}>
          <Image
            alt="Artist picture"
            src={artistImg}
            width={imgWidth}
            height={imgWidth}
            className={`${styles.image}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Artist
