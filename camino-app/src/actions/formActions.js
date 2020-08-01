import { GET_FORM_DATA, SET_LOADING, INC_STEP } from '../actions/types';

export const getFormData = (data) => dispatch => {
     
    setLoading()
    console.log('a',data);
    dispatch({
        type: GET_FORM_DATA,
        payload: data
    })
}

export const incrementStep = (step) => dispatch => {
    console.log('step', step);
    dispatch({
        type: INC_STEP,
        payload: step
    })
}
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}