import styles from "./styles.module.scss";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCar} from "../../redux/car/action";
import OrderModal from "../OrderModal";
import {UPDATE_STATE} from "../../redux/types/constants";
import Aos from "aos";


const ModelCard = () => {

    const dispatch = useDispatch()
    const {carData} = useSelector(state => state.car)
    const {brandId, categoryId, languages, controLanguages} = useSelector(state => state.home)


    useEffect(() => {
        dispatch(getCar())
    }, [dispatch])

    useEffect(() => {
        dispatch({type: UPDATE_STATE, data: {brandId: null, categoryId: null}})
    }, [])
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <div>
            {(brandId === null && (categoryId === null || categoryId===14)) ? carData?.map((item, index) => {
                return (
                    <div data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1500" key={index} className={styles.modelCard}>
                        <div className={styles.title}>
                            <h2 className={" title20 cl-light"}>{item.price} So`m</h2>
                            <h2 className={" title20"}>{item.name}</h2>
                        </div>
                        <div className={styles.img1}>
                            <div className={styles.img1in}>
                                {/* <img layout="fill" src={item.image} width={"100%"} alt=""/> */}
                                <Image className={styles.img11} layout="fill"   src={item.image} alt="" />
                            </div>
                        </div>
                        <div className={styles.img1 + " " + styles.imghover}>
                            <div className={styles.img1in}>
                                {/* <img layout="fill" src={item.image1} width={"100%"} alt=""/> */}
                                <Image  layout="fill"  objectFit="contain"   src={item.image1} alt = "" />
                            </div>
                        </div>
                        <button onClick={() => dispatch({
                            type: UPDATE_STATE,
                            data: {onModal: true, idCar: item.id, detail: false}
                        })}
                                className={styles.button1 + " titlebtn"}>
                            {languages.carAll[controLanguages].booking}
                        </button>
                        <button
                            onClick={() => dispatch({
                                type: UPDATE_STATE,
                                data: {onModal: true, idCar: item.id, detail: true}
                            })}
                            className={styles.button2 + " titlebtn"}
                        >
                            {languages.carAll[controLanguages].details}
                        </button>
                    </div>
                )
            }) : carData?.map((item, index) => {
                if (item.brand === brandId) {
                    return (
                        <div data-aos="flip-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500" key={index} className={styles.modelCard}>
                            <div className={styles.title}>
                                <h2 className={" title20 cl-light"}>{item.price} So`m</h2>
                                <h2 className={" title24"}>{item.name}</h2>
                            </div>
                            <div className={styles.img1}>
                                <img src={item.image} width={"100%"} alt=""/>
                                {/*<Image width = "100%" height = "100%" layout="fill" objectFit="contain" priority src="/assets/images/svg/gr_side.webp" alt="" />*/}
                            </div>
                            <div className={styles.img1 + " " + styles.imghover}>
                                <img src={item.image1} width={"100%"} alt=""/>
                                {/*<Image width = "100%" height = "100%" layout="fill" objectFit="contain"   src="/assets/images/svg/gr_front.webp" alt = "" />*/}
                            </div>
                            <button
                                onClick={() => dispatch({
                                    type: UPDATE_STATE,
                                    data: {onModal: true, idCar: item.id, detail: false}
                                })}
                                className={styles.button1 + " titlebtn"}>
                                Booking
                            </button>
                            <button
                                onClick={() => dispatch({
                                    type: UPDATE_STATE,
                                    data: {onModal: true, idCar: item.id, detail: true}
                                })}
                                className={styles.button2 + " titlebtn"}>
                                Details
                            </button>
                        </div>
                    )
                } else if (item.category === categoryId) {
                    return (
                        <div data-aos="flip-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500" key={index} className={styles.modelCard}>
                            <div className={styles.title}>
                                <h2 className={" title20 cl-light"}>{item.price} So`m</h2>
                                <h2 className={" title24"}>{item.name}</h2>
                            </div>
                            <div className={styles.img1}>
                                <img src={item.image} width={"100%"} alt=""/>
                                {/*<Image width = "100%" height = "100%" layout="fill" objectFit="contain" priority src="/assets/images/svg/gr_side.webp" alt="" />*/}
                            </div>
                            <div className={styles.img1 + " " + styles.imghover}>
                                <img src={item.image1} width={"100%"} alt=""/>
                                {/*<Image width = "100%" height = "100%" layout="fill" objectFit="contain"   src="/assets/images/svg/gr_front.webp" alt = "" />*/}
                            </div>
                            <button
                                onClick={() => dispatch({
                                    type: UPDATE_STATE,
                                    data: {onModal: true, idCar: item.id, detail: false}
                                })}
                                className={styles.button1 + " titlebtn"}>
                                Booking
                            </button>
                            <button
                                onClick={() => dispatch({
                                    type: UPDATE_STATE,
                                    data: {onModal: true, idCar: item.id, detail: true}
                                })}
                                className={styles.button2 + " titlebtn"}>
                                Details
                            </button>
                        </div>
                    )
                }
            })}
            <OrderModal/>
        </div>

    )
}
export default ModelCard; 