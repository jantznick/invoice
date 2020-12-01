import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import user from './user';
import currentDocument from './currentDocument';

const rootReducer = combineReducers({
	user,
	currentDocument
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;
