import React from 'react'
import Image from 'next/image'
import artistImg from '../../public/img/gajendra.png'

import styles from '../Artist/Artist2.module.scss'

const Artist2 = () => {
  return (
    <div className={styles.artistContainer}>
       <div className={styles.artistInfo}>
          <h1 className={`${styles.infoHeading} font-mokotoGlitch`}>MEET THE ARTIST</h1>
          <div className={`${styles.infoPara} font-mono`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rerum velit totam, beatae at veritatis expedita rem laboriosam asperiores harum nam? Suscipit unde reprehenderit excepturi iure maxime culpa quo vitae?</div>
       </div>
       <div className={styles.artistImage}>
          <div className={styles.imageBorder}>
                    <Image
                    src={artistImg}
                    width={600}
                    height={600}
                    objectFit="cover"
                    className={styles.image}
                    />
          </div>
       </div>
    </div>
  )
}

export default Artist2
