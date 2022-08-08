import styles from "./style.module.scss"
import Link from "next/link";
import {  useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { UPDATE_STATE } from "../../redux/types/constants";

export default function Navbar(props) {
    const [langue ,setLague] = useState("");
    const {languages , controLanguages , controlNavbar} = useSelector(state=>state.home);
    const dispatch = useDispatch();
   
    return (
        <div id = {props.id} className={styles.navbarContent + " " + ` ${props.dark ? styles.dark : ""} ` + `${controlNavbar? styles.minNavbar : ""}` }>
            <div className={styles.redesignMenuLeft}>
                <ul className={styles.ulMenu}>
                    <li onClick = { ()=> dispatch({type: UPDATE_STATE, data : { controlNavbar : !controlNavbar}})}>
                        <Link href={'/'}><a>{languages.navbar[controLanguages].home}</a></Link>
                    </li>
                    <li onClick = { ()=> dispatch({type: UPDATE_STATE, data : { controlNavbar : !controlNavbar}})}>
                        <Link href={'/cars'}><a>{languages.navbar[controLanguages].car}</a></Link>
                    </li>
                    <li onClick = { ()=> dispatch({type: UPDATE_STATE, data : { controlNavbar : !controlNavbar}})}>
                        <Link href="/#sevices" scroll={true}>
                        <a >{languages.navbar[controLanguages].services}</a>
                        </Link>
                    </li>
                    <li onClick = { ()=> dispatch({type: UPDATE_STATE, data : { controlNavbar : !controlNavbar}})}>
                        <Link href="/#contact" scroll={true}>
                            <a >{languages.navbar[controLanguages].contactus}</a>
                        </Link>
                    </li>
                    

                </ul>
            </div>
            <div className={styles.redesignMenuCenter +  ` ${controlNavbar? "" : styles.logotorespons }`} >
                <img src="./assets/images/svg/logotip.webp" className={styles.Logo} alt="tashkent car rental logo"/>
            </div>
            <div className={styles.redesignMenuRight}>
                <a className={styles.tel + " flex"} href="tel: +99891 002 00 45">
                    <div className={styles.icon}>
                        <img src="./assets/images/svg/phoneYellow.svg" className="Icons"
                             alt="tel"/>
                    </div>
                    <p className={styles.telnumber + " title14 cl-yellow"}>+99891 002 00 45
                    </p>
                </a>
                <div className={styles.ChangeLangues}>
                    <button onClick={()=>{controLanguages === "en"?  dispatch({type: UPDATE_STATE , data: {controLanguages: "ru"}}): dispatch({type: UPDATE_STATE , data: {controLanguages: "en"}})}}    id="standard-select"  className={styles.langues} >
                    {controLanguages}
                    </button>
                </div>
                <div className={styles.controles + " " + `${controlNavbar? styles.open : styles.close}`} onClick = { ()=> dispatch({type: UPDATE_STATE, data : { controlNavbar : !controlNavbar}})} >

            </div>
            </div>
            
        </div>
    )
}