import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { UPDATE_STATE } from "../../redux/types/constants";
import styles from "./styles.module.scss"

export default function AdminModal({children , simple}) {
    const {adminModall, idCar, modelName, detail} = useSelector(state => state.home)
    

    const data = {
        AdminModal: adminModall,
    }
    const dispatch = useDispatch();
    return (
        <div className={styles.Modal + ` ${simple? styles.simple : ""} ` + `${data.AdminModal ? "disFlex" : "disNone"}`}  >
            <div className={styles.modalHover} onClick = {()=>dispatch({type: UPDATE_STATE , data: {adminModall: false}})}>

            </div>
            <div className={styles.Countent}>
                    <div className={styles.leave + " flex column"}
                        onClick={() => dispatch({type: UPDATE_STATE, data: {adminModall: !data.AdminModal}})}>
                        <img src="https://www.svgrepo.com/show/349140/x.svg" alt=""/>
                    </div>
                    {children}
            </div>
        </div>
    )
}