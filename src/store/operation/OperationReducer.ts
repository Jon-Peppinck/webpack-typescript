import { OperationActionTypes } from './models/actions';

const defaultState: Count = { count: 0 };

export const operationReducer = (
  state = defaultState,
  action: OperationActionTypes
): Count => {
  const nextState = {
    count: state.count,
  };

  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1;
      return nextState;
    case 'MINUS':
      nextState.count = state.count - 1;
      return nextState;

    default:
      return state;
  }
};
