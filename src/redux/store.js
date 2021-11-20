import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers';

const store = createStore(
  movieReducer,
  applyMiddleware(thunk)
  // composeWithDevTools()
);

export default store;
