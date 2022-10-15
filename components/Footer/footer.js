import React from "react";
import Image from "next/image";
import Facebook from "../../public/Footer/Facebook.png"
import Linkedin from "../../public/Footer/Linkedin.png"
import Twitter from "../../public/Footer/Twitter.png"
import YouTube from "../../public/Footer/YouTube.png"
import Instagram from "../../public/Footer/Instagram.png"
import styles from "../Footer/Footer.module.scss";
function footer(){
    return(
        <div className={styles.footerSpark}>
            <div className={styles.SparkHead}>
               <p>SPARK</p>
            </div>
            <div className={styles.SocialLink}>
                <div className={styles.SocialIcon}><Image src={Instagram}/></div>
                <div className={styles.SocialIcon}><Image src={Twitter}/></div>
                <div className={styles.SocialIcon}><Image src={Linkedin}/></div>
                <div className={styles.SocialIcon}><Image src={Facebook}/></div>
                <div className={styles.SocialIcon}><Image src={YouTube}/></div>
            </div>
        </div>
    );
}

export default footer;