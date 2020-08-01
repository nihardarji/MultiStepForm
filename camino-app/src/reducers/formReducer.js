import { GET_FORM_DATA, SET_LOADING, INC_STEP } from '../actions/types';

const initialState = {
    step: 1,
    data: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_FORM_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        case INC_STEP:
            return {
                ...state,
                step: action.payload + 1
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}