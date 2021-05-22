import { initialState } from "../constants"

const appReducer = (state = initialState, action: any) => {
    if (action.type === 'SET') {
        return {...state, [action.field]: action.value};
    }
    return state;
}
export default appReducer;