import {
    SUCCESS_STATUS, ERROR_STATUS, CLEAR_STATUS
} from '../types/constants'

export const Success = () => async dispatch => {
    dispatch({type: SUCCESS_STATUS})
}
export const Errorr = () => async dispatch => {
    dispatch({type: ERROR_STATUS})
}
export const Clear = () => async dispatch => {
    dispatch({type: CLEAR_STATUS})
}