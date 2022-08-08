import axios from "axios";
import {
    CAR_START,
    CAR_SUCCESS,
    CAR_ERROR,
    CAR_DELETE_START,
    CAR_DELETE_ERROR,
    CAR_DELETE_SUCCESS,
    CAR_POST_SUCCESS,
    CAR_POST_ERROR,
    CAR_POST_START,
    CAR_UPDATE_ERROR,
    CAR_UPDATE_START,
    CAR_UPDATE_SUCCESS, UPDATE_STATE
} from '../types/constants'
import {BaseUrl, car} from '../../api/api'
import {toast} from "react-hot-toast";

export const getCar = () => async dispatch => {
    dispatch({type: CAR_START})
    try {
        const res = await axios.get(BaseUrl + car);
        if (res.status === 200) {
            dispatch({type: CAR_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: CAR_ERROR, payload: e.message})
    }
}
export const postCar = (info) => async dispatch => {
    dispatch({type: CAR_POST_START})
    try {
        const res = await axios.post(BaseUrl + car, info);
        if (res.status === 201) {
            dispatch({type: CAR_POST_SUCCESS, payload: res.status})
            dispatch({type: UPDATE_STATE, data: {adminModall: false}})
            // toast.success('Successfully')
        }
    } catch (e) {
        dispatch({type: CAR_POST_ERROR, payload: e.message})
        // toast.error(e.message)
    }
}
export const putCar = (data) => async dispatch => {
    dispatch({type: CAR_UPDATE_START})
    try {
        const res = await axios.patch(BaseUrl + car + data.id + '/', data.info);
        console.log(res, 'res')
        if (res.status === 200) {
            dispatch({type: CAR_UPDATE_SUCCESS, payload: res.status})
            toast.success('Successfully')
            dispatch({type: UPDATE_STATE, data: {adminModall: false, editorAddCar: false}})
            dispatch(getCar())
        }
    } catch (e) {
        dispatch({type: CAR_UPDATE_ERROR, payload: e.message})
        // toast.error(e.message)
    }
}
export const deleteCar = (id) => async dispatch => {
    dispatch({type: CAR_DELETE_START})
    try {
        const res = await axios.delete(BaseUrl + car + id + '/');
        if (res.status === 204) {
            dispatch({type: CAR_DELETE_SUCCESS, payload: res.status})
            toast.success('Successfully')
            dispatch(getCar())
        }
    } catch (e) {
        dispatch({type: CAR_DELETE_ERROR, payload: e.message})
        toast.error(e.message)
    }
}