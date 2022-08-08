import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";

const TypeWriter = ({text})=>{
    const  index = useRef(0);
    const [currentText, setCurrentText] = useState('');
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    useEffect(()=>{
        index.current = 0;
        setCurrentText('');
    },[text]);
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setCurrentText((value)=>value + text.charAt(index.current));
            index.current +=1;
        },20);
        return ()=>{
            clearTimeout(timeoutId); 
        }
    },[currentText, text]);
    return <p 
    data-aos="zoom-in"
    className="title40 cl-white textHeader">{currentText}</p>
}
export default TypeWriter;
