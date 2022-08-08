import Slider from "react-slick";
import RoundButtonRight from "../RoundButtonLeft";
import RoundButtonLeft from "../RoundButtonRight";
import styles from "./style.module.scss"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function AfterCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    nextArrow: <RoundButtonRight/>,
    prevArrow: <RoundButtonLeft/>,
  };
  useEffect(() => {
    Aos.init({
      duration : 1000
    });
  }, []);


  return (
    <div data-aos="zoom-in-up" className={styles.afterContent }>
      <Slider className={styles.carouselHeader + " afterCarousel"} {...settings}>
          
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header4.jpg"  layout="fill"   className="Img" alt="аренда нет лимитов" />
             {/* <img src="./assets/images/png/header4.jpg" alt="" /> */}
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header3.webp"  layout="fill"    className="Img" alt="аренда и прокат авто" />
            {/* <img src="./assets/images/png/header3.webp" alt="" /> */}
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header6.jpg"  layout="fill"    className="Img" alt="прокат премиум авто" />
            {/* <img src="./assets/images/png/header6.jpg" alt="" /> */}
          </div>
          <div className={styles.cardHeader}>
            <Image src="/assets/images/png/header5.jpg"  layout="fill"    className="Img" alt="аренда в Узбекистане" />
            {/* <img src="./assets/images/png/header5.jpg" alt="" /> */}
          </div>
          <div className={styles.cardHeader}>
            {/* <img src="./assets/images/png/header7.jpg" alt="" /> */}
            <Image src="/assets/images/png/header7.jpg"  layout="fill"    className="Img" alt="премиум авто в аренду" />
          </div>
          
        </Slider>
    </div>
  )
}