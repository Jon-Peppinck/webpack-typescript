import { store } from './store/rootStore';

import { boundAdd, boundMinus } from './store/operation/OperationAction';
import { boundFetchUser } from './store/async/AsyncAction';

const counterEl = document.getElementById('counter')!;
const userEl = document.getElementById('user')!;

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

// ASYNC ACTIONS
document.getElementById('getUser')!.addEventListener('click', () => {
  boundFetchUser().then(() => {
    const state = store.getState();
    userEl.innerHTML = `ID: ${state.asyncReducer.id}, title: ${state.asyncReducer.title}`;
  });
});
