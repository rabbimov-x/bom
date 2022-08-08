import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import { UPDATE_STATE } from "../../redux/types/constants";
import {postOrder} from "../../redux/order/action";
import { useEffect, useState } from "react";


const CallCard =()=>{
    const {languages , controLanguages} = useSelector(state=>state.home)
    const [language, setLanguage ] = useState(languages.callCard[controLanguages]);
    const dispatch = useDispatch();
    const [error , setEror] = useState(false);
    function UpdateCall(){
        setEror(true);
        setTimeout(()=>{
        setEror(false);
        },[1600]);
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        let phone = e.target[0].value 
        let email = e.target[1].value 
        if(phone.length < 9  &&  email.length === 0){
       UpdateCall()
    } else{
       dispatch(postOrder({
        phone: e.target[0].value,
        email: e.target[1].value
    }))         
    }
        document.getElementById("1234").reset();
    }
    useEffect(()=>{
        setLanguage(languages.callCard[controLanguages])
    },[languages.callCard[controLanguages]])

    return(
        <div className={styles.callCard}>
                <div className={styles.header}>
                    <h2>
                        {language.title}
                    </h2>
                </div>
                <form className={styles.main} onSubmit={onSubmit} id={'1234'}>
                    <input  placeholder= { error ? language.error : language.number} minLength = "9" type="number"  className={styles.input1 + ` ${ error ? styles.error : "" }`}/>
                    <input  placeholder= { error ? language.error : language.email}  type="email"  className={styles.input + ` ${ error ? styles.error : "" }`}/>
                    <div className="w-100 row">
                            <button className = {styles.btn} type={'submit'}>
                                {language.enter}
                            </button>
                    </div>
                    
                </form>
        </div>
    )
}
export default CallCard;