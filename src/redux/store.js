import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, window.REDUX_STATE || {}, applyMiddleware(thunk));

export default store;
