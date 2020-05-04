import { store } from '../rootStore';

import { AppActions } from '../models/actions';
import { ADD, MINUS } from './models/actions';

// action creators
const add = (): AppActions => {
  return {
    type: ADD,
  };
};

const minus = (): AppActions => {
  return {
    type: MINUS,
  };
};

// bound action creator automatically dispatches
export const boundAdd = () => store.dispatch(add());

export const boundMinus = () => store.dispatch(minus());
