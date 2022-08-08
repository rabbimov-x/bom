import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import RoundButtonRight from "../RoundButtonLeft";
import RoundButtonLeft from "../RoundButtonRight";
import styles from "./style.module.scss"
import Typewriter from "./TypeWrite.js"

 
export default function Header() {
  const [active2 , setActive2] = useState(0);
  const [active3 , setActive3] = useState(0);
  const {languages, controLanguages} = useSelector(state => state.home);
  const [title , setTitle] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    nextArrow: <RoundButtonRight/>,
    prevArrow: <RoundButtonLeft/>,
    afterChange: current => setActive2(current),
    beforeChange: (current, next ) => setActive3(next),
  };
   
  useEffect(()=>{
    setTitle("");
  },[active3]);
  useEffect(()=>{
    setTimeout(()=>{
      setTitle(languages.header[active2][controLanguages])
    },[30])
  },[active2]);
 

  return (
    <div className={styles.headerContent }>
      <Slider className={styles.carouselHeader + " headerCarousel"} {...settings}>
          <div className={styles.cardHeader}>
            {/* <img src="./assets/images/png/header0.jpg" sizes="100vw"  className="Img" alt="" /> */}
            <Image src="/assets/images/png/header0.jpg"  layout="fill"   className="Img" alt="прокат и аренда в Узбекистане" />

              <div className={styles.titleHeader}>
                      <Typewriter text = {title} />
              </div>
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header1.jpg"   layout="fill"   className="Img" alt="прокат без лимитов по пробегу" />
           
            {/* <img src="./assets/images/png/header1.jpg" alt="" /> */}
            <div className={styles.titleHeader}>
                
                      <Typewriter text = {title}   />
              
              </div>
          </div>
          <div className={styles.cardHeader}>
          <Image src="/assets/images/png/header2.jpg"   layout="fill"   className="Img" alt="прокат в Узбекистане" />
            {/* <img src="./assets/images/png/header2.jpg" alt="" /> */}
            <div className={styles.titleHeader}>
            <Typewriter text = {title}   />
              </div>
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header3.webp"   layout="fill"   className="Img" alt="прокат и прокат авто" />
            {/* <img src="./assets/images/png/header3.webp" alt="" /> */}
            <div className={styles.titleHeader}>
                <Typewriter text = {title}   />
              </div>
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header4.jpg"  layout="fill"     className="Img" alt="прокат с тонировкой" />
            {/* <img src="./assets/images/png/header4.jpg" alt="" /> */}
            <div className={styles.titleHeader}>
                <Typewriter text = {title}   />
              </div>
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header5.jpg"  layout="fill"     className="Img" alt="чистые авто на прокат" />
            {/* <img src="./assets/images/png/header5.jpg" alt="" /> */}
            <div className={styles.titleHeader}>
              <Typewriter text = {title}  />
              </div>
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header6.jpg"  layout="fill"     className="Img" alt="аренда в Узбекистане" />
            {/* <img src="./assets/images/png/header6.jpg" alt="" /> */}
            <div className={styles.titleHeader}>
            <Typewriter text = {title}   />
              </div>
          </div>
      </Slider>
    </div>
  )
}