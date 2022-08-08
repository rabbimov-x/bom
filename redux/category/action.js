import axios from "axios";
import {
    CATEGORY_GET_SUCCESS,
    CATEGORY_GET_ERROR,
    CATEGORY_GET_START,
    CATEGORY_DELETE_ERROR,
    CATEGORY_DELETE_START,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_POST_ERROR,
    CATEGORY_POST_START,
    CATEGORY_POST_SUCCESS,
    CATEGORY_UPDATE_ERROR,
    CATEGORY_UPDATE_START,
    CATEGORY_UPDATE_SUCCESS
} from '../types/constants'
import {BaseUrl, category} from '../../api/api'

export const getCategory = () => async dispatch => {
    dispatch({type: CATEGORY_GET_START})
    try {
        const res = await axios.get(BaseUrl + category);
        if (res.status === 200) {
            dispatch({type: CATEGORY_GET_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: CATEGORY_GET_ERROR, payload: e.message})
    }
}
export const postCategory = (info) => async dispatch => {
    dispatch({type: CATEGORY_POST_START})
    try {
        const res = await axios.post(BaseUrl + category, info);
        if (res.status === 201) {
            dispatch({type: CATEGORY_POST_SUCCESS, payload: res.status})
        }
    } catch (e) {
        dispatch({type: CATEGORY_POST_ERROR, payload: e.message})
    }
}
export const putCategory = ({id, info}) => async dispatch => {
    dispatch({type: CATEGORY_UPDATE_START})
    try {
        const res = await axios.put(BaseUrl + category + id + '/', info);
        if (res.status === 200) {
            dispatch({type: CATEGORY_UPDATE_SUCCESS, payload: res.status})
        }
    } catch (e) {
        dispatch({type: CATEGORY_UPDATE_ERROR, payload: e.message})
    }
}
export const deleteCategory = ({id}) => async dispatch => {
    dispatch({type: CATEGORY_GET_START})
    try {
        const res = await axios.delete(BaseUrl + category + id + '/');
        if (res.status === 204) {
            dispatch({type: CATEGORY_GET_SUCCESS, payload: res.status})
        }
    } catch (e) {
        dispatch({type: CATEGORY_GET_ERROR, payload: e.message})
    }
}