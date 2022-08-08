import axios from "axios"
import {
    UPDATE_STATE,
    ORDER_POST_START,
    ORDER_POST_SUCCESS,
    ORDER_POST_ERROR,
    ORDER_GET_START,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_ERROR,
    ORDER_DELETE_START,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_ERROR,
    ORDER_UPDATE_START
} from '../types/constants'
import {BaseUrl, order} from '../../api/api'
import {toast} from "react-hot-toast";

export const postOrder = (data) => async dispatch => {
    dispatch({type: ORDER_POST_START})
    try {
        const res = await axios.post(BaseUrl + order, data);
        if (res.status === 201) {
            dispatch({type: ORDER_POST_SUCCESS, payload: res.status})
            dispatch({type: UPDATE_STATE, data: {onModal: false, adminModall: false}})
            toast.success('Ваш заказ принят')
        }
    } catch (e) {
        dispatch({type: ORDER_POST_ERROR, payload: e.message})
        toast.error(e.message)
    }
}

export const getOrder = () => async dispatch => {
    dispatch({type: ORDER_GET_START})
    try {
        const res = await axios.get(BaseUrl + order);
        console.log(res, 'res')
        if (res.status === 200) {
            dispatch({type: ORDER_GET_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: ORDER_GET_ERROR, payload: e.message})
    }
}

export const putOrder = ({id, info}) => async dispatch => {
    dispatch({type: ORDER_UPDATE_START})
    try {
        const res = await axios.put(BaseUrl + order + id + '/', info);
        if (res.status === 200) {
            dispatch({type: ORDER_UPDATE_SUCCESS, payload: res.status})
        }
    } catch (e) {
        dispatch({type: ORDER_UPDATE_ERROR, payload: e.message})
    }
}
export const deleteOrder = ({id}) => async dispatch => {
    dispatch({type: ORDER_DELETE_START})
    try {
        const res = await axios.delete(BaseUrl + order + id + '/');
        if (res.status === 204) {
            dispatch({type: ORDER_DELETE_SUCCESS, payload: res.status})
        }
    } catch (e) {
        dispatch({type: ORDER_DELETE_ERROR, payload: e.message})
    }
}