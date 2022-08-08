import React, {useEffect} from "react";
import ModelCard from "../../components/ModelCard";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {getBrand} from "../../redux/brand/action";
import {UPDATE_STATE} from "../../redux/types/constants";
import {getCategory} from "../../redux/category/action";
import Head from "next/head";
import AdminModal from "../../components/AdminModal";
import LuckWheel from "../../components/luckwheel";


const Models = () => {

    const dispatch = useDispatch()
    const {brandData} = useSelector(state => state.brand)
    const {categoryData} = useSelector(state => state.category)
    const {languages, controLanguages, controlNavbar} = useSelector(state => state.home)
    const StartRandom = () =>{
        dispatch({type: UPDATE_STATE , data: {controlRandom: true}})
    }
    useEffect(() => {
        dispatch(getBrand())
        dispatch(getCategory())
    }, [dispatch])

    return (
        <div className={styles.models}>
            <Head>
                <meta name="title" content="Car To-Go. Premium Car Rentals in Tashkent."/>
                <meta name="description" content="Rental of Premium Cars in Tashkent.
                    See list of cars"/>
                <meta name="keywords" content="car rental,car rentals,luxury car rental,
                        rent car tashkent,best car rental,electric car rent,rent a car,
                        limitless car run rent,rent in uzbekistan,car rent service tashkent,
                        car rent service,take car for rent,rent auto,rent premium auto,
                        premium cars rentals in tashkent,premium cars rentals,
                        get premium cars for rent,car for rent,auto for rent,
                        rent automobiles,skoda rent tashkent,rent kia,kia rent tashkent,
                        xpeng rent uzb,cheap rent,mercedec rent tashkent,malibu 2 rent tashkent,
                        kiak5 rent,skoda kodiaq rent,merc rental,rentcartogo,car rent for day,
                        weekend car rent,how to get a car for rent,car for rent,car to rent,
                        car togo,premium cars rent,skoda kodiaq rent tashkent, take skoda for rent,
                        rentcar tashkent,car togo tashkent,car to go, car togo uz,
                        carto go ru,lux car rent,best rental tashkent,rent a car in,
                        rent a car for,car rent in,car rent for,cheap rent car uzbekistan,
                        rent a car uzb,car uzb,kia k5 uzbekistan,merc uzbekistan,
                        premium cars uzbek,russia rent car"/>
                <meta name="robots" content="index,follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 day"/>
                <meta name="author" content="ITC-21"/>
                <meta name="google-site-verification" content="gA4het2igHRBmEaKIJVsxNZvDyTB0-JDc4mGqA4CJRc"/>
                <meta name="title" content="Car To-Go. Премиум авто для аренды в Ташкенте."/>
                <meta name="description" content="Аренда премиум автомобилей в Ташкенте. Смотреть каталог"/>
                <meta name="keywords" content="киак5,киа к5 аренда,киа к5 прокат,к5 гтлайн,прокат киа,скода,
                        скода кодиак аренда ташкент,киа прокат ташкент,прокат узб,ташкент авто прокат,взять в аренду авто ташкент,
                        взять авто прокат,дешевый прокат,прокат в ташкент,автопрокат,каталог авто прокат,гараж авто прокат,
                        дадим авто в прокат,получить аренду авто,ташкент авто аренда,мерс аренда ташкент,как получить авто в прокат,
                        как взять авто в прокат,дешевая аренда авто,премиум авто в аренда,что взять в аренду,какую машину вять в аренду,
                        какой авто взять в прокат,какой авто взять в аренду,где взять авто аренду,где взять авто прокат,заказ авто прокат,
                        автоаренда,автопрокат,где можно взять авто в прокат,прокат автомобилей в ташкенте,аренда автомобилей,
                        Кунлик ижарага мошина,мошина ижара,ижара авто,малибу ижарага,арзон ижарага мошина олиш,люкс мошина олиш ижара,
                        в аренду машину,аренда авто на день,прокат автомобилей в,авто в аренду ташкент,машины на прокат в ташкенте,
                        аренда авто с,аренда kia k5 ташкент,прокат"/>
                <meta name="robots" content="index,follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="Russian"/>
                <meta name="revisit-after" content="1 day"/>
                <meta name="author" content="ITC-21"/>
                <meta name="google-site-verification" content="gA4het2igHRBmEaKIJVsxNZvDyTB0-JDc4mGqA4CJRc"/>
            </Head>
            <Navbar dark/>
            <div className={styles.sidebar}>
                <div className={styles.menu + ` ${controlNavbar ? styles.topMenu : ""} `}>
                    <div className={styles.titleMenu}>
                        <p className="title40 weight7 cl-white">
                            {languages.navbar[controLanguages].model}
                        </p>
                    </div>
                    <div className={styles.menu + ` ${controlNavbar ? styles.AllfiltrMenu : ""} ` + styles.Menufilter}>
                        <ul className={`${controlNavbar ? styles.AllfiltrMenu : ""}` + " ulMenu"}>
                            <button
                                onClick={() => dispatch({type: UPDATE_STATE, data: {brandId: null, categoryId: null}})}
                                className="titlebtn">{languages.navbar[controLanguages].all}</button>
                            {brandData ?.map((item, index) => (
                                <button onClick={() => dispatch({
                                    type: UPDATE_STATE,
                                    data: {brandId: item.id, categoryId: null}
                                })} key={index} className="titlebtn"><img className={styles.image} src={item.image}
                                                                          alt=""/>{item.name} </button>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.Allfiltr}>
                    <ul className="ulMenu">
                        {categoryData?.map((item, index) => (
                            <button
                                onClick={() => dispatch({
                                    type: UPDATE_STATE,
                                    data: {categoryId: item.id, brandId: null}
                                })}
                                key={index}
                                className={" titlebtn " + styles.btn}
                            >
                                {item.name === "premium" ? languages.carAll[controLanguages].premium : item.name === "Electric" ? languages.carAll[controLanguages].electric : item.name}
                            </button>
                        ))}
                        <button
                                onClick={() => StartRandom()}
                                className={" titlebtn " + styles.btn + " " + styles.btnrandom}
                            >
                                {languages.carAll[controLanguages].randomm}
                        </button>
                    </ul>
                </div>
                <ModelCard/>
            </div>
                <LuckWheel/>
        </div>
    )
}

export default Models
export async function getServerSideProps({ req, res }) {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
  
    return {
      props: {},
    }
  }