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

const initialValue = {
    loading: false,
    isError: false,
    categoryData: [],
    categoryStatus: ''
}

const categoryReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CATEGORY_GET_START || CATEGORY_UPDATE_START || CATEGORY_DELETE_START || CATEGORY_POST_START:
            return {
                ...state,
                loading: true,
                isError: false,
                categoryData: [],
                categoryStatus: ''
            }
        case CATEGORY_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                categoryData: action.payload
            }
        case CATEGORY_POST_SUCCESS || CATEGORY_UPDATE_SUCCESS || CATEGORY_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                categoryStatus: action.payload
            }
        case CATEGORY_GET_ERROR || CATEGORY_UPDATE_ERROR || CATEGORY_DELETE_ERROR || CATEGORY_POST_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                categoryData: []
            }
        default:
            return state
    }
}

export default categoryReducer