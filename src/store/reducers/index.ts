import answersReducer from './answersReducer';
import ticketReducer from './ticketReducer';
import { State } from '../../interface';
import { initialState } from '../constants';

const appReducer = (state: State = initialState, action: any) => {
    if (action.type === 'RESET') 
        return initialState;
    return {
        answers: answersReducer(state.answers, action),
        ticket: ticketReducer(state.ticket, action)
    }
}
export default appReducer;