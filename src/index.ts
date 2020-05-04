import { store } from './store/rootStore';

import { boundAdd, boundMinus } from './store/operation/OperationAction';

const counterEl = document.getElementById('counter')!;

const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.operationReducer.count.toString();
};

render();
store.subscribe(render);

// ACTIONS
document.getElementById('add')!.addEventListener('click', () => {
  boundAdd();
});

document.getElementById('minus')!.addEventListener('click', () => {
  boundMinus();
});
