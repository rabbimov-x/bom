import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_STATE } from '../../redux/types/constants';
import styles from './styles.module.scss'


const LuckWheel = () => {
    const run = "0";
    const [wheel , setWheel] = useState("0")
    const [imgName , setImgName] = useState("wheel");
    const {controlRandom} = useSelector(state=>state.home)
    const {carData} = useSelector(state => state.car)
    const date = new Date();
    const dispatch = useDispatch()

    const WheelAnim = ()=>{
        run = 0;
        setImgName("");
        setWheel("0"); 
        setTimeout(()=>{
            setImgName("wheel");
            run = ((parseInt((Math.random()*date.getTime())))%carData.length);
            setWheel(Number(deg[run]) + Number(360*5));   
        },[50])     
        CloseWheel();
    }
    function CloseWheel (){
        setTimeout(()=>{
            dispatch({type: UPDATE_STATE , data: {controlRandom: false}})
            dispatch({
            type: UPDATE_STATE,
            data: {onModal: true, idCar: carData[run]?.id, detail: false}
        })
        }, [3850]);
    }
    const deg = {
        "0" : "65",
        "4" : "137",
        "2" : "208",
        "4" : "280",
        "3" : "353",
    }
    
    const still = {
        transform: `rotate(${wheel}deg)`,
    }
    useEffect(()=>{
        controlRandom ?  WheelAnim() : ""
    },[controlRandom])
    useEffect(()=>{

    } , [wheel])

    return (
        <div  className={styles.main + " " + `${controlRandom ? `${styles.zoomIn +  " disFlex"}` : "disNone"}`} >
            <div className={styles.Countent}>
                <div className={styles.mainbox}>
                    <img className={styles[imgName]} style={still} src="./assets/images/webp/cycle.svg" alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default LuckWheel;