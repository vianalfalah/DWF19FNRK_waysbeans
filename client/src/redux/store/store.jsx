import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';

import {
  logger,
  promise
} from './middleware';

import LoginReduce from '../reducer/Login/reducer';

const reducers = combineReducers({
  LoginReduce,
})

const store = createStore(reducers, applyMiddleware(logger, promise))

export default store;