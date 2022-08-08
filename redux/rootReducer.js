import { combineReducers } from "redux";
import {  updateState } from "./reducers/homeReduser";
import carReducer from "./car/reducer";
import brandReducer from "./brand/reducer";
import orderReducer from "./order/reducer";
import categoryReducer from "./category/reducer";

export const rootReducer = combineReducers({
    home: updateState,
    car: carReducer,
    brand: brandReducer,
    orderR: orderReducer,
    category: categoryReducer
})