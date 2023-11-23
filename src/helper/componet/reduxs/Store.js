import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './Rootreducer';
const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
