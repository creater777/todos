import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';
import {watchFetchTasks} from '../actions/tasks'
import {watchFetchProfile} from '../actions/profile'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export default function() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(watchFetchTasks);
  sagaMiddleware.run(watchFetchProfile);
  return store;
}