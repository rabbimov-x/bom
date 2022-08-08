import {
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

const initialValue = {
    loading: false,
    isError: false,
    orderStatus: '',
    orderData: [],
    success: false,
}

const orderReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ORDER_POST_START || ORDER_UPDATE_START || ORDER_DELETE_START || ORDER_GET_START:
            return {
                ...state,
                loading: true,
                isError: false,
                orderStatus: '',
                success: false
            }
        case ORDER_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                success: true,
                orderStatus: action.payload
            }
        case ORDER_UPDATE_START:
            return {
                ...state,
                loading: false,
                isError: false,
                success: true,
                orderStatus: action.payload
            }
        case ORDER_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                orderData: action.payload,
            }
        case ORDER_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                orderStatus: action.payload,
                orderData: []
            }
        case ORDER_POST_ERROR || ORDER_UPDATE_ERROR || ORDER_DELETE_ERROR || ORDER_GET_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                success: false,
                orderStatus: action.payload,
                orderData: []
            }
        default:
            return state
    }
}

export default orderReducer