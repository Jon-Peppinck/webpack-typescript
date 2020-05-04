import { createStore } from 'redux';

// REDUCER
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

// STORE
const store = createStore(operationReducer);

const counterEl = document.getElementById('counter')!;

const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.count.toString();
};

render();
store.subscribe(render);

// ACTIONS
document.getElementById('add')!.addEventListener('click', () => {
  store.dispatch({ type: 'ADD' });
});

document.getElementById('minus')!.addEventListener('click', () => {
  store.dispatch({ type: 'MINUS' });
});
