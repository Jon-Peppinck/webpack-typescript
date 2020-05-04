import { store } from '../rootStore';

// https://redux.js.org/basics/actions

// action types
const ADD = 'ADD';
const MINUS = 'MINUS';

// action creators
const add = () => {
  return {
    type: ADD,
  };
};

const minus = () => {
  return {
    type: MINUS,
  };
};

// bound action creator automatically dispatches
export const boundAdd = () => store.dispatch(add());

export const boundMinus = () => store.dispatch(minus());
