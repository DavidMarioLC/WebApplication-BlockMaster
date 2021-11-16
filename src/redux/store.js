import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
