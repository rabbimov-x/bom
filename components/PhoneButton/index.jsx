import React from "react";
import {useDispatch} from "react-redux";
import { UPDATE_STATE } from "../../redux/types/constants";
import styles from "./styles.module.scss"


const PhoneButton =()=>{
    const dispatch = useDispatch();
    return(
        <div className={styles.phone + " flex column"} onClick = {()=>dispatch({type: UPDATE_STATE , data: {adminModall: true}})}>
            
                <div className={styles.animation}>
                </div>
                <div className={styles.base + " flex column"}>
                    <div className={styles.phoneImg + " flex column"}>
                        <img src="./assets/images/svg/phone.svg" alt="" />
                    </div>
                </div>
           
        </div>
    )
}
export default PhoneButton;