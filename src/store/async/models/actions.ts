// action types
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';

interface PendingAction {
  type: typeof FETCH_USER_PENDING;
  user: User;
}

interface FulfilledAction {
  type: typeof FETCH_USER_FULFILLED;
  user: User;
}

interface RejectedAction {
  type: typeof FETCH_USER_REJECTED;
  user: User;
}

export type AsyncActionTypes = PendingAction | FulfilledAction | RejectedAction;
