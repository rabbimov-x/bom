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
    CAR_UPDATE_SUCCESS
} from '../types/constants'

const initialValue = {
    loading: false,
    isError: false,
    carData: [],
    carSuccess: ''
}

const carReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CAR_START || CAR_POST_START || CAR_UPDATE_START || CAR_DELETE_START:
            return {
                ...state,
                loading: true,
                isError: false,
                carSuccess: '',
                carData: []
            }
        case CAR_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                carSuccess: false,
                carData: action.payload
            }
        case CAR_POST_SUCCESS || CAR_UPDATE_SUCCESS || CAR_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                carSuccess: action.payload
            }
        case CAR_ERROR || CAR_POST_ERROR || CAR_UPDATE_ERROR || CAR_DELETE_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                carData: [],
                carSuccess: action.payload
            }
        default:
            return state
    }
}

export default carReducer