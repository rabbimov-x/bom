import Image from "next/image";
import styles from "./styles.module.scss"



const Scoda = ({anim , value})=>{
    return(
       <div className={styles.globalImg  + " " + styles[value.stillDisc]}>
        <Image className={styles.carImg} width = {1223} height={460} layout = "responsive" src= {`${value.imgUrl}`} alt={value.name} />
        <div className = {styles.imgcontent + " " + styles.imgleft  + " " + styles[anim] }>
            <Image className={styles.diskImg1 } layout="fill" src="/assets/images/png/disc2.png" alt="" />
        </div>
        <div className = {styles.imgcontent + " " + styles.imgright + " " + styles[anim]}>
            <Image className={styles.diskImg1 } layout="fill" src="/assets/images/png/disc2.png" alt="" />
        </div>
       </div>
    )
} 
export default Scoda;