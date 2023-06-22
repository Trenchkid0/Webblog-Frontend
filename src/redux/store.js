import {
    combineReducers,
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';

import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import blogReducer from './blog/reducer';
import notifReducer from './notif/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    auth: authReducer,
    blog:blogReducer,
    notif: notifReducer,

  });

const store = createStore(
    rootReducers,
    composerEnhancer(applyMiddleware(thunk))
);
  
export default store;