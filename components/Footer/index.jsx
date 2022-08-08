import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"


const Footer =({id})=>{
    const {languages , controLanguages} = useSelector(state=>state.home)
    return(
        <div id = {id} className={styles.footer}>
            
            <div className={styles.logo}>
                <img src="/assets/images/svg/logotip.webp" alt="ташкент авто прокат логотиб" />
            </div>
            <div className={ styles.liks +  " content"}>
            <div className=" col-3Simple">
                <ul className={styles.ulMenu}>
                    <li>
                        <Link href={'#models'}><a>{languages.footer[controLanguages].cars}</a></Link>
                    </li>
                    
                </ul>
            </div>
            <div className=" col-3Simple">
                <ul className={styles.ulMenu}>
                    <li>
                        <Link href={'#booking'}><a>{languages.footer[controLanguages].booking}</a></Link>
                    </li>
                    
                </ul>
            </div>
            <div className=" col-3Simple">
                <ul className={styles.ulMenu}>
                    <li>
                        <Link href={'/cars'}><a>{languages.footer[controLanguages].models}</a></Link>
                    </li>
                    
                </ul>
            </div>
            <div className=" col-3Simple">
                <ul className={styles.ulMenu}>
                    
                    <li>    
                        <Link className={ styles.titlebtn} href={'#navbar'}><a><div className={styles.gototop}>{languages.footer[controLanguages].goToTop}</div></a></Link>
                    </li>
                    
                </ul>
            </div>
            </div>
            <div className={styles.IconContent}>
                 <span href="#" className={styles.numberof + " flex minHieght"} >
                        <div className="">
                            <img src="./assets/images/svg/location.svg" className="Icons"
                                alt=""/>
                        </div>
                        <div>
                            <p className={styles.telnumber + " title14 cl-white  weaght7 ml-5"}>
                            {languages.footer[controLanguages].location1}
                            </p>
                            <p className={styles.telnumber + " title14 cl-white  weaght7 ml-5"}>
                            {languages.footer[controLanguages].location2}
                            </p>
                        </div>
                </span>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100082820530764">
                    <div className={styles.iconofcontact}>
                        <img src="./assets/images/svg/facebook.svg" alt="" />
                    </div>
                </a>
                <a  target="_blank" href="mailto:admin@carto-go.com">
                    <div className={styles.iconofcontact}>
                        <img src="./assets/images/svg/emailWhite.svg" alt="" />
                    </div>
                </a>
                <a  target="_blank" href="https://t.me/car_togo">
                    <div className={styles.iconofcontact}>
                        <img src="./assets/images/svg/telegram.svg" alt="" />
                    </div>
                    </a>
                <a target="_blank" href="https://www.instagram.com/rent_carto_go">
                    <div className={styles.iconofcontact}>
                        <img src="./assets/images/svg/Instagram.svg" alt="" />
                    </div>
                </a>
                <div className={styles.numberof}>
                    <a className="flex" href="tel: +998910020045">
                            <div className="">
                                <img src="./assets/images/svg/phoneWhite.svg" className="Icons"
                                    alt=""/>
                            </div>
                            <p className={styles.telnumber + " title14 cl-white  weaght7 ml-5"}>+99891 002 00 45
                            </p>
                    </a>
                    <a className="flex" href="tel: +998955010045">
                            <div className="">
                                <img src="./assets/images/svg/phoneWhite.svg" className="Icons"
                                    alt=""/>
                            </div>
                            <p className={styles.telnumber + " title14 cl-white  weaght7 ml-5"}>+99895 501 00 45
                            </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;