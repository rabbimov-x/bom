import {useDispatch, useSelector} from "react-redux";
import {UPDATE_STATE} from "../../redux/types/constants";
import styles from "./styles.module.scss"
import React, {useEffect} from "react";
import {deleteCar, getCar} from "../../redux/car/action";
import {toast} from "react-hot-toast";

const CarsAdmin = () => {
    const {carData, carSuccess} = useSelector(state => state.car);
    const dispatch = useDispatch();
    useEffect(() => {
        if (carSuccess === 200) dispatch(getCar())
    }, [carSuccess])

    useEffect(() => {
        dispatch(getCar())
    }, [])
//dekmdkeldsm,

    const deleteItem = (id) => {
        dispatch(deleteCar(id))
    }
    return <div className={styles.allContent}>
        {carData?.map(item => (
            <div className={styles.carsAdmin} key={item.id}>
                <div className={styles.Iconcontent}>
                <div className={styles.iconOfCar}>
                        <img className={styles.iconImg} src="/assets/images/svg/x.svg" alt="" />
                        <button className="adminButton brblack" onClick={() => dispatch({
                            type: UPDATE_STATE,
                            data: {adminModall: true, editorAddCar: false, carItem: item, edit3: true}
                        })}
                        >
                        </button>
                </div>
                </div>
                <div className={styles.leftContent}>
                    <h2 className="w-100 title16 wieght7 column flex pt-15">
                    {item.name}
                    </h2>
                    <ul className={styles.ulMenu}>

                        <li>
                             <p className={styles.titleIl + " title11"}>
                                Cost:
                            </p>
                            <p className="title14 ml-5 ">
                                {item.price} so`m
                            </p>
                        </li>
                        <li>
                            <p className={styles.titleIl + " title11"}>
                                Door:
                            </p>
                            <p className="title14 ml-5 ">
                                {item.doors}
                            </p>
                        </li>
                        <li>
                            <p className={styles.titleIl + " title11"}>
                                Seats:
                            </p>                            
                            <p className="title14 ml-5 ">
                                {item.seats}
                            </p>
                        </li>
                        <li>
                            <p className={styles.titleIl + " title11"}>
                            Baggage:
                            </p>                            
                            <p className="title14 ml-5 ">
                                {item.buggage}
                            </p>
                        </li>
                        <li>
                            <p className={styles.titleIl + " title11"}>
                            Transmission:
                            </p>                            
                            <p className="title14 ml-5 ">
                                {item.transmission}
                            </p>
                        </li>
                        <li>
                            <p className={styles.titleIl + " title11"}>
                            Air conditioner:
                            </p>                            
                            <p className="title14 ml-5">
                                {item.conditioner === true ? "Exist" : "Not Exist"}
                            </p>
                        </li>
                        <li>
                            <p className={styles.titleIl + " title11"}>
                            Insurance:
                            </p>                            
                            <p className="title14 ml-5">
                                {item.insurance}
                            </p>
                        </li>
                        <li>
                            <p className={styles.titleIl + " title11"}>
                            Fuel:
                            </p>                            
                            <p className="title14 ml-5">
                                {item.fuel}
                            </p>
                        </li>
                    </ul>

                </div>
                <div className={styles.rightContent}>
                    <div className="flex w-100">
                    <div className={styles.imgs + " w-100"}>
                        <img src={item.image} alt=""/>
                        <button className="adminButton brblack" onClick={() => dispatch({
                            type: UPDATE_STATE,
                            data: {adminModall: true, editorAddCar: false, carItem: item, edit1: true}
                        })}
                        >
                        </button>
                    </div>
                    <div className={styles.imgs + " w-100"}>
                        <img src={item.image1} alt=""/>
                        <button className="adminButton brblack"
                                onClick={() => dispatch({
                                    type: UPDATE_STATE,
                                    data: {adminModall: true, editorAddCar: false, carItem: item, edit1: false}
                                })}>

                        </button>
                    </div>
                    </div>
                    <div className=" w-100 p-15 pt-15 flex end">
                    <button className="adminButton primary"
                            onClick={() => dispatch({
                                type: UPDATE_STATE,
                                data: {adminModall: true, editorAddCar: true, carItem: item}
                            })}>

                    </button>
                    <button onClick={() => deleteItem(item.id)} className="adminButton danger">
                    </button>
                </div>
                </div>
                
            </div>
        ))}
    </div>


}
export default CarsAdmin;