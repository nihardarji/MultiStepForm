import { GET_FORM_DATA, INC_STEP } from '../actions/types';
import formReducer from '../reducers/formReducer';

describe('Form Reducer', () => {
    
    it('Should return initial state', () => {
        const newState = formReducer(undefined, {})
        expect(newState).toEqual({
            step: 1,
            data: null,
            loading: false,
            error: null
        })
    })

    it('Should return new State if receiving type', () => {

        const info = { step: 1, data: { firstName: 'test' }, loading: false, error: null }
        const newState = formReducer(undefined, {
            type: GET_FORM_DATA,
            payload: info.data
        })
        expect(newState).toEqual(info)
    })

    it('Should return incremented step', () => {

        const info = { step: 1, data: { firstName: 'test' }, loading: false, error: null }
        const newState = formReducer(undefined, {
            type: INC_STEP,
            payload: info.step
        })
        expect(newState.step).toEqual((info.step)+=1 )
    })
})