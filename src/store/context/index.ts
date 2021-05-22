import { createContext, Dispatch } from 'react';
import { initialState } from '../constants';
import { Answers } from '../../interface';

const AppContext = createContext<{
  state: Answers;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});
export default AppContext;