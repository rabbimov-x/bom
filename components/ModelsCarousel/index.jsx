import React, { Component } from "react";
import { useState ,useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import Slider from "react-slick";
import Scoda from "../Cars";
import RoundButtonRight from "../RoundButtonLeft";
import RoundButtonLeft from "../RoundButtonRight";
import styles from "./style.module.scss"
import { UPDATE_STATE } from "../../redux/types/constants";
import Image from "next/image";

export default function Models(props) {
  const [nav1 , setNav1] = useState(null);
  const [nav2 , setNav2] = useState(null);
  const [active , setActive] = useState(0);
  const [haer , setHear] = useState(0);
  const dispatch = useDispatch();

  const settings1 = {
    infinite: true,
    speed: 1400,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1400,
    nextArrow: <RoundButtonRight modelSlick />,
    prevArrow: <RoundButtonLeft modelSlick />,
    afterChange: (current ) => setActive(current),
    beforeChange: (current, next ) => setHear(next),
  };
    useEffect(()=>{
      active < haer && Math.abs(active - haer) === 1 ?  dispatch({type: UPDATE_STATE , data: {animName: "anim3"}}) :
      active > haer && Math.abs(active - haer) === 1 ?  dispatch({type: UPDATE_STATE , data: {animName: "anim4"}}) : 
      active > haer && Math.abs(active - haer) !== 1 ? dispatch({type: UPDATE_STATE , data: {animName: "anim3"}}) : '' ;  
      active < haer && Math.abs(active - haer) !== 1 ? dispatch({type: UPDATE_STATE , data: {animName: "anim4"}}) : '' ;  
      
    setTimeout(()=>{
    dispatch({type: UPDATE_STATE , data: { animName: ""}})
    },[1200]) 
    },[haer])

  const state = useSelector((state) => state);
  const data = {
    anim: state.home.animName,
    onModal: state.home.onModal,
    models: state.home.modelsPlay,
    languages: state.home.languages,
    control: state.home.controLanguages,
}

   
  return (
    <div  id={props.id} className={styles.modelContent + " containersAll" }>
      <div className={styles.title}>
        <h1 className="title60 cl-white">
            {data.languages.modelTitle[data.control].title}
        </h1>
      </div>
      <Slider
          asNavFor= {nav1}
          className= "slider1"
          swipeToSlide={true}
          ref= {slider => setNav2(slider)}
                          {...settings1}
        >
          {
                data.models.map((value)=>{
                    return(
                      <div key={value.id} className={styles.modeltop + " navbarModel"}>
                        <div className={styles.madalbg}>
                          <Image src={value.imgbg} 
                                layout = "responsive"
                                width={1400}
                                height={670}
                                priority
                                className={styles.bgImg + " Img"} alt="" />
                        </div>
                        <h3>{value.name}</h3>
                      </div>
                    )
                })
              }
          
      </Slider>
      <div className={styles.SliderBottom}>
        <Slider  
            data-aos="fade-left" 
            asNavFor={nav2}
            ref={slider => setNav1(slider)}
            swipeToSlide={true}
            className={styles.carouselHeader + " Modal" } 
            {...settings2}
            >
              {
                data.models.map((value)=>{
                    return(
                      <div  key={value.id} className={styles.cardHeader }>
                        <div className={styles.models}>
                           <Scoda value = {value}  anim = {data.anim}/>
                        </div>
                      </div>
                    )
                })
              }
            
        </Slider>
      </div>
        
        <div className={styles.orderContent}>
          <div className={styles.comment + " col-6"}>
            <h1 className={ 'title40 cl-black pt-15'}>
              {data.models[active].name} 
            </h1>
            <p className="title40 cl-yellow">{data.models[active].cost} {data.languages.modelTitle[data.control].cost}</p>
          </div>
          <div className={"col-6"}>  
            <button onClick={()=> dispatch({type: UPDATE_STATE , data: {onModal: !data.onModal , modelName: data.models[active].name }})}  className={styles.titlebtn + " titlebtn title20 wieght7"}>
              {data.languages.modelTitle[data.control].book}
              <img className="icon" src="./assets/images/svg/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
  )
}

