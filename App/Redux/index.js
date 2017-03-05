// @flow
import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import app from './app/reducer';
import { reducer as auth } from './auth/LoginRedux';
import booking from './booking/reducer';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    app,
    auth,
    booking,
  });

  return configureStore(rootReducer, rootSaga);
};
