import { createContext, Dispatch } from 'react';
import { initialState } from '../constants';
import { State } from '../../interface';

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});
export default AppContext;