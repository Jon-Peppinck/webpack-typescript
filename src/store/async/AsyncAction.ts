import { Dispatch } from 'redux';

import { store } from '../rootStore';

import { AppActions } from '../models/actions';

import {
  FETCH_USER_PENDING,
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED,
} from './models/actions';

const requestUser = (): AppActions => {
  return {
    type: FETCH_USER_PENDING,
    user: { userId: 0, id: 0, title: '', completed: false },
  };
};
const returnUser = (json: User): AppActions => {
  return {
    type: FETCH_USER_FULFILLED,
    user: { ...json },
  };
};
const errorUser = (): AppActions => {
  return {
    type: FETCH_USER_REJECTED,
    user: { userId: -1, id: -1, title: '', completed: false },
  };
};

export function fetchUser() {
  return (dispatch: Dispatch) => {
    dispatch(requestUser());

    const randomNumber = Math.floor(Math.random() * 4) + 1;

    return fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`)
      .then(
        (response) => response.json(),
        (error) => {
          console.log(error);
          dispatch(errorUser());
        }
      )
      .then((json) => {
        dispatch(returnUser(json));
      });
  };
}

export const boundFetchUser = () => store.dispatch(fetchUser());
