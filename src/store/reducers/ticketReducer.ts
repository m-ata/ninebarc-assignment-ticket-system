import {Ticket} from '../../interface';
import { initialState } from '../constants'
const ticketReducer = (state: Ticket = initialState.ticket, action: any) => {
    if (action.type === 'SET_TICKET') {
        return {...action.payload};
    }
    return state;
}
export default ticketReducer;