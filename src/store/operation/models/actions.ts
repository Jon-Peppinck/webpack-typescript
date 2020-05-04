// action types
export const ADD = 'ADD';
export const MINUS = 'MINUS';

interface AddAction {
  type: typeof ADD;
}

interface MinusAction {
  type: typeof MINUS;
}

export type OperationActionTypes = AddAction | MinusAction;
