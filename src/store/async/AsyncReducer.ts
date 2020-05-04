import { AsyncActionTypes } from './models/actions';

const defaultState: User = { userId: 0, id: 0, title: '', completed: false };

export const asyncReducer = (
  state = defaultState,
  action: AsyncActionTypes
) => {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state };

    case 'FETCH_USER_FULFILLED':
      let title = action.user.title;
      return { ...action.user };

    case 'FETCH_USER_REJECTED':
      return { ...state };

    default:
      return state;
  }
};
