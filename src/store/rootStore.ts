import { createStore, combineReducers } from 'redux';

import { operationReducer } from './operation/OperationReducer';

const rootReducer = combineReducers({
  operationReducer: operationReducer,
});

export const store = createStore(rootReducer);
