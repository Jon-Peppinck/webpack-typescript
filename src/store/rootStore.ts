import { createStore, combineReducers } from 'redux';

import { operationReducer } from './operation/OperationReducer';

const rootReducer = combineReducers({
  operationReducer: operationReducer,
});

// export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
