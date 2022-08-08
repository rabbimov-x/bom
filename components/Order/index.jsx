import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {getOrder, postOrder} from "../../redux/order/action";
import {getCar} from "../../redux/car/action";
import {UPDATE_STATE} from "../../redux/types/constants";
import {toast} from "react-hot-toast";


const Ordered = (props) => {

    const [number, setNumber] = useState("+998");
    const dispatch = useDispatch()
    const {carData} = useSelector(state => state.car);
    const {success} = useSelector(state => state.orderR);
    const {languages ,controLanguages} = useSelector(state => state.home);


    useEffect(() => {
        dispatch(getCar())
    }, [])


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(postOrder({
            name: "user",
            email: e.target[2].value,
            phone: e.target[4].value,
            city: "Tashkent",
            driver: e.target[0].checked,
            armchair_kids: e.target[1].checked,
            from_time: e.target[5].value,
            to_time: e.target[6].value,
            answered: false,
            car: e.target[3].value
        }))
        document.getElementById("123").reset();
    }

    return (
        <div id = {props.id} className={styles.SearchContainer + " " + ` ${props.homeOrder ? styles.Sreachtop : ""} ` + `${props.inmodal ? styles.min : ""}`}>
            <form name="form1" id={'123'} onSubmit={onSubmit} className={styles.formAll + " container"}>
                <div className={styles.checkbox + " w-100 row spaceBetween"}>
                    <div className={styles.check2 + " flex"}>
                        <input className={styles.appleSwitch} type="checkbox" />
                        <p className="title20 cl-light ml-5">
                           {languages.booking[controLanguages].driver}
                        </p>
                    </div>
                    <div className={styles.check2 + " flex"}>
                        <input className={styles.appleSwitch} type="checkbox"/>
                        <p className="title20 cl-light ml-5">
                        {languages.booking[controLanguages].childSafetySeat}
                        </p>
                    </div>
                    <div className={styles.inputCity + " " + styles.emailContent}>
                                <div className={styles.selectALl + " " + styles.email }>
                                    <input placeholder={"example@gmail.com"} id="phone-mask" className="form-data title16" type="email"/>
                                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="w-100">
                        <div className={styles.inputRow + " row"}>
                            <div className={styles.inputCity}>
                                <div className={styles.selectALl + " " + styles.car}>
                                    <select id="standard-select" className="title16">
                                        {
                                            props.info ?
                                                <option  disabled selected value={props.info.id}>{props.info.name}</option>
                                                :
                                                <>
                                                    <option  disabled selected  value='0'>{languages.booking[controLanguages].chooseCar}</option>
                                                    {carData?.map(item => (
                                                        <option key={item.id} value={item.id}>{item.name}</option>
                                                    ))}
                                                </>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className={styles.inputCity}>
                                <div className={styles.selectALl + " " + styles.number}>
                                    <input placeholder={"+99890 333 33 33"} maxLength={14}
                                           id="phone-mask" className="title16" type="number"/>
                                </div>
                            </div>
                            <div className={styles.inputCity + " " + styles.dataNow}>
                                <input type="date" className="form-data title16" required/>
                            </div>
                            <div className={styles.inputCity + " " + styles.dataEnd}>
                                <input type="date" className="form-data title16" required/>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btnSearch} type="sumbit">{languages.booking[controLanguages].booking}</button>
                </div>  
            </form>
        </div>
    )
}
export default Ordered;