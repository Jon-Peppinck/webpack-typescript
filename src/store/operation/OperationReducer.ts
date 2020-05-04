// TODO: any
export const operationReducer = (state = { count: 0 }, action: any) => {
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
