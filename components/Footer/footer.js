import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import bulb from "../../public/home/bulb.svg";
import Facebook from "../../public/Footer/Facebook.png"
import Linkedin from "../../public/Footer/Linkedin.png"
import Twitter from "../../public/Footer/Twitter.png"
import YouTube from "../../public/Footer/YouTube.png"
import Instagram from "../../public/Footer/Instagram.png"
import styles from "../Footer/Footer.module.scss";
import download from '../../public/btn.svg'

function footer(){
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset - window.screenY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
    return(
        <div className={styles.footerSpark}>
            <div className={styles.SparkHead}>
               <p className={styles.sparkPara}>SPARK</p>
            </div>
                <a className={styles.visitTechnoesis} href="https://tecnoesis.org/" target="_blank">
                     <Image
                        src={download}
                        priority="true"
                        className="absolute top-0 left-0 h-8"/>
                          <div className="w-full text-center top-[40%] left-1/2 z-2 font-babaPro text-sm  -translate-y-10">
                            VISIT TECNOESIS
                          </div>
                </a>
            <div className={styles.SocialLink}>
             <a href="https://www.facebook.com/spark.nits" target="_blank"><div className={styles.SocialIcon}><Image src={Facebook}/></div></a> 
              <a href="https://www.instagram.com/tecnoesis.nits" target="_blank">  <div className={styles.SocialIcon}><Image src={Instagram}/></div></a>
              <a href="https://www.youtube.com/channel/UCCZVlLIiSchxOVzcRQ2w5HQ" target="_blank"> <div className={styles.SocialIcon}><Image src={YouTube}/></div></a> 
            </div>
            
          <div className={`${styles.bulb2} w-80 h-80 md:w-[30vw] md:h-80 left-0`}
          style={{ transform: `translateY(-${(offsetY-1000) * 0.3}px)` }}
        >
          <Image
            src={bulb}
            layout="fill"
            objectFit="contain"
            priority="true"
            objectPosition="center"
          />
        </div>
        </div>
    );
}

export default footer;