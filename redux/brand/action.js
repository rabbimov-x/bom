import axios from "axios";
import {
    BRAND_GET_START,
    BRAND_GET_ERROR,
    BRAND_GET_SUCCESS,
    BRAND_POST_START,
    BRAND_POST_ERROR,
    BRAND_POST_SUCCESS,
    BRAND_UPDATE_START,
    BRAND_UPDATE_SUCCESS,
    BRAND_UPDATE_ERROR,
    BRAND_DELETE_START,
    BRAND_DELETE_SUCCESS,
    BRAND_DELETE_ERROR
} from '../types/constants'
import {BaseUrl, brand} from '../../api/api'
import {toast} from "react-hot-toast";

export const getBrand = () => async dispatch => {
    dispatch({type: BRAND_GET_START})
    try {
        const res = await axios.get(BaseUrl + brand);
        if (res.status === 200) {
            dispatch({type: BRAND_GET_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: BRAND_GET_ERROR, payload: e.message})
    }
}
export const postBrand = (info) => async dispatch => {
    dispatch({type: BRAND_POST_START})
    try {
        const res = await axios.post(BaseUrl + brand, info);
        console.log(res, 'res')
        if (res.status === 201) {
            dispatch({type: BRAND_POST_SUCCESS, payload: res.status})
            toast.success('success')
        }
    } catch (e) {
        dispatch({type: BRAND_POST_ERROR, payload: e.message})
    }
}
export const putBrand = ({ID, info}) => async dispatch => {
    dispatch({type: BRAND_UPDATE_START})
    try {
        const res = await axios.put(BaseUrl + brand + `${ID}/`, info);
        if (res.status === 200) {
            dispatch({type: BRAND_UPDATE_SUCCESS, payload: res.status})
        }
    } catch (e) {
        dispatch({type: BRAND_UPDATE_ERROR, payload: e.message})
    }
}
export const deleteBrand = ({id}) => async dispatch => {
    dispatch({type: BRAND_DELETE_START})
    try {
        const res = await axios.delete(BaseUrl + brand + id + '/', );
        if (res.status === 204) {
            dispatch({type: BRAND_DELETE_SUCCESS, payload: res.status})
        }
    } catch (e) {
        dispatch({type: BRAND_DELETE_ERROR, payload: e.message})
    }
}