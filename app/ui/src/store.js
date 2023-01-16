import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { isLocal } from './config';

const configureStore = (initialState = {}) => {
  const middlewares = [];
  middlewares.push(thunk);

  let applied = applyMiddleware(...middlewares);

  if (initialState !== null) {
    return createStore(reducers, initialState, applied);
  }

  return createStore(reducers, applied);
};

export default configureStore;
