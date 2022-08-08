import { Cars } from "../../utils/cars";
import {  UPDATE_STATE} from "../types/constants"
import {sevices} from "../../utils/services";
import { booking, callCard, carAll, footer, header, modelTitle, navbar, servise, worldOfCars } from "../../utils/homeLanguage";



const initionalState = {

    data: [{id: 0, title: "summa", body: " malekam"}],
    animName: "",
    delete: "true",
    onModal: false,
    idCar: null,
    modelsPlay: Cars,
    brandId: null,
    modelName: null,
    categoryId: null,
    sevice: sevices,
    detail: false,
    adminModall: false,
    editorAddCar: false,
    carItem: null,
    edit1: false,
    languages: {
        navbar: navbar,
        modelTitle: modelTitle,
        booking: booking,
        worldOfCars: worldOfCars,
        footer: footer,
        servise: servise,
        carAll: carAll,
        callCard: callCard,
        header: header,
    },
    controlNavbar: false,
    controLanguages: "ru",
    controlRandom: false,
    run: 0,
    controlASaytbar: true,
}



export const updateState = (state = initionalState, action)=>{
    switch(action.type){
    case UPDATE_STATE:   return {...state , ...action.data};  
    default : return state;
    } 
} 

