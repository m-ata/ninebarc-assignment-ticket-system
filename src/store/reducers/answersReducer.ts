import {Answers} from '../../interface';
import { initialState } from '../constants'
const answersReducer = (state: Answers = initialState.answers, action: any) => {
    if (action.type === 'SET_ANSWER') {
        return {...state, [action.field]: action.payload};
    }
    return state;
}
export default answersReducer;