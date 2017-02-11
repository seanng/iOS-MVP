// @flow
import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import app from './app/reducer';
import { reducer as login } from './auth/LoginRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    app,
    login,
  });

  return configureStore(rootReducer, rootSaga);
};
