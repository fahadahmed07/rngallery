import rootReducer from './index';
import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

let persistor = persistStore(store);
export {store, persistor};
