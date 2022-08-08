import React from "react";
import { useDispatch } from "react-redux"; 
import { UPDATE_STATE } from "../../redux/types/constants";
import styles from "./style.module.scss"
export default function RoundButtoLeft(props) {
  const {className , onClick  } = props;
  const dispatch = useDispatch()


  const actionToModal =(props)=>{
    // dispatch(props);
    // setTimeout(()=>{
    // dispatch({type: UPDATE_STATE , data: { animName: ""}})
    // },[1400])
  }
  return (
    <div className={ className + " rounContentAll " +  styles.rounContent + "  " + `${props.modelSlick ? styles.modelSlickleft : ""}` }
        onClick={()=>{
          onClick();
          props.modelSlick?
          actionToModal({type: UPDATE_STATE , data: { animName: "anim1"}}): "";
          }}>
    </div>
  )
}