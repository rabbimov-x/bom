import {
    CLEAR_STATUS,
    ERROR_STATUS,
    SUCCESS_STATUS
} from '../types/constants'

const initialValue = {
    success: false,
    error: false
}

const statusReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SUCCESS_STATUS:
            return {
                ...state,
                success: true
            }
        case ERROR_STATUS:
            return {
                ...state,
                error: true
            }
        case CLEAR_STATUS:
            return {
                ...state,
                error: false,
                success: false
            }
        default:
            return state
    }
}

export default statusReducer