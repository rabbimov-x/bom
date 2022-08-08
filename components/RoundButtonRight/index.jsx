import { useDispatch } from "react-redux";
import { UPDATE_STATE } from "../../redux/types/constants";
import styles from "./style.module.scss"

export default function RoundButtonRight(props) {
  const {className ,onClick } = props;
  const dispatch = useDispatch()
  const actionToMolad =(props)=>{
    // dispatch(props);
    // setTimeout(()=>{
    // dispatch({type: UPDATE_STATE , data: { animName: ""}})
    // },[1400])
  }
  return (
    <div className={ className + " rounContentAll " +  styles.rounContent + "  "  + `${props.modelSlick ? styles.modelSlickright : ""}` }
    onClick={()=>{
      onClick();
      props.modelSlick?
      actionToMolad({type: UPDATE_STATE , data: {animName: "anim2"}}): ""
    }}>
    </div>
  )
}
