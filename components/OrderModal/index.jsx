import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_STATE} from "../../redux/types/constants";
import Ordered from "../Order";
import styles from "./styles.module.scss"
import {getCar, getCarId} from "../../redux/car/action";

export default function OrderModal({inhome}) {
    const {onModal, idCar, modelName, detail} = useSelector(state => state.home)
    const {carData} = useSelector(state => state.car)
    const [info, setInfo] = useState([])

    const data = {
        onModal: onModal,
    }
    const dispatch = useDispatch();

    useEffect(() => {
        if (modelName) {
            const result = carData.filter(item => item.name === modelName)
            setInfo(result[0])
        } else if (idCar) {
            const result = carData.filter(item => item.id === idCar);
            setInfo(result[0])
        }
    }, [idCar, modelName])


    return (
        <div className={styles.Modal + ` ` + `${data.onModal ? "disFlex " : "disNone"}`}>
            <div className={styles.Countent}>
                <div className={styles.leave + " flex column"}
                     onClick={() => dispatch({type: UPDATE_STATE, data: {onModal: !data.onModal}})}>
                    <img src="https://www.svgrepo.com/show/349140/x.svg" alt=""/>
                </div>

                <div className={styles.containerCar +  " container row"}>
                    <div className="col-6 flex relative">
                        <div className={styles.logoModal}>
                            <img src="./assets/images/svg/logotip.webp" alt=""/>
                        </div>
                        <div className={styles.imgProdact}>
                            <img src={info?.image} alt=""/>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <p className="title60">
                            {info?.name}
                        </p>
                        <ul className={styles.ulMenu}>
                            <li>
                                <div className={styles.Icon}>
                                    <img src="/assets/images/svg/money.svg" alt=""/>
                                </div>
                                Cost:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.price} so`m
                                </p>
                            </li>
                            <li>
                                <div className={styles.Icon}>
                                    <img src="/assets/images/svg/door.svg" alt=""/>
                                </div>
                                Door:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.doors}
                                </p>
                            </li>
                            <li>
                                <div className={styles.Icon}>
                                    <img src="/assets/images/svg/sit.svg" alt=""/>
                                </div>
                                Seats:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.seats}
                                </p>
                            </li>
                            <li>
                                <div className={styles.Icon}>
                                    <img src="/assets/images/svg/baggage.svg" alt=""/>
                                </div>
                                Baggage:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.buggage}
                                </p>
                            </li>
                            <li>
                                <div className={styles.Icon}>
                                    <img
                                        src="/assets/images/svg/transmission.svg"
                                        alt=""/>
                                </div>
                                Transmission:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.transmission}
                                </p>
                            </li>
                            <li>
                                <div className={styles.Icon}>
                                    <img
                                        src="/assets/images/svg/air-conditioner.svg"
                                        alt=""/>
                                </div>
                                Air conditioner:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.conditioner === true ? "Имеется" : "Нет"}
                                </p>
                            </li>
                            <li>
                                <div className={styles.Icon}>
                                    <img src="/assets/images/svg/shield.svg"
                                         alt=""/>
                                </div>
                                Insurance:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.insurance === 1 ? "Имеется" : "Нет"}
                                </p>
                            </li>
                            <li>
                                <div className={styles.Icon}>
                                    <img src="/assets/images/svg/oil.svg" alt=""/>
                                </div>
                                Fuel:
                                <p className="title20 ml-5 cl-yellow">
                                    {info?.fuel}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.number + ` ${ detail? styles.numberbig : ""}` +  " container cl-grey"}>
                    <img  src="./assets/images/svg/phoneYellow.svg" alt="" />
                    <a href="tel:910020045" className="title20 "> +99891 002 00 45 </a>
                    <img className={styles.iconCenter} src="./assets/images/svg/phoneYellow.svg" alt="" />
                    <a href="tel:995010045" className="title20 "> +99899 501 00 45</a>
                </div>

                {inhome ? <Ordered inmodal info={info} /> : detail === false && <Ordered inmodal info={info} /> }
            </div>  
        </div>
    )
}