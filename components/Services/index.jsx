import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import Aos from "aos";
import Image from "next/image";



const Services =(props)=>{
     const size =  useWindowSize();
     const {controLanguages} = useSelector(state=> state.home)
     useEffect(() => {
        Aos.init({
          duration : 1000
        });
      }, []);
    return(
        <div  className={styles.services}>
            {
                (Number(props.index) + Number(1))%2 === 0 || size.width < 767 ? <div className="w-100">
                <div data-aos="zoom-in" className={styles.imgContents + " col-6"}>
                    <Image layout="fill"  src={props.value.imgs} alt={props.value.alt} />
                </div>
                <div data-aos="zoom-in" className={styles.textContainer + " col-6"}>
                    <p className={styles.title + " title40"}>
                        {
                            props.value[controLanguages].title
                        }
                    </p>
                    <p className={styles.subtitle + " title20"}>
                        {
                            props.value[controLanguages].text
                        }
                    </p>
                </div>
            </div> : <div className="w-100">
                <div data-aos="zoom-in" className={styles.textContainer + " col-6"}>
                    <p className={styles.title + " title40"}>
                        {
                            props.value[controLanguages].title
                        }
                    </p>
                    <p className={styles.subtitle + " title20"}>
                        {
                            props.value[controLanguages].text
                        }
                    </p>
                </div>
                <div data-aos="zoom-in" className={styles.imgContents + " col-6"}>
                    <Image layout="fill" src={props.value.imgs} alt={props.value.alt} />
                </div>
            </div>
            }
            </div>  
            
            
    )
}
export default Services

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }