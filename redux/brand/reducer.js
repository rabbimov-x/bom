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

const initialValue = {
    loading: false,
    isError: false,
    brandData: [],
    brandStatus: ''
}

const brandReducer = (state = initialValue, action) => {
    switch (action.type) {
        case BRAND_GET_START || BRAND_DELETE_START || BRAND_UPDATE_START || BRAND_POST_START:
            return {
                ...state,
                loading: true,
                isError: false,
                brandData: []
            }
        case BRAND_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                brandData: action.payload
            }
        case BRAND_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                brandStatus: action.payload
            }
        case BRAND_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                brandStatus: action.payload
            }
        case BRAND_GET_ERROR || BRAND_DELETE_ERROR || BRAND_UPDATE_ERROR || BRAND_POST_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                brandData: []
            }
        default:
            return state
    }
}

export default brandReducer