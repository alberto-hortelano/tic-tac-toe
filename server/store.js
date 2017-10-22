
import { createStore, combineReducers } from 'redux';
import { click } from './reducers';

const store = createStore(
 	combineReducers({ click }),
	/* preloadedState, */
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
