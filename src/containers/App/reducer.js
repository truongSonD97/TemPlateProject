
import { fromJS } from 'immutable';
import { loadState }  from '../../localStorage';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT_REQUEST, LOGOUT_FAIL, LOGOUT_FAILURE, LOGIN_FAILURE  } from './constants';

const persistedState = loadState() || {};
// The initial state of the App
export const initialState = fromJS({
  isFetching: false,
  token: persistedState.token,
  expiryTime: null,
  user: null,
  error: null
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('isFetching', true)
        .set('error', false);
    case LOGIN_SUCCESS:
      const { payload: {meta, user}} = action;
      console.log(action)
      return state
        .set('isFetching', false)
        .set('token', meta.jwt)
        .set('expiryTime', meta.expiry_time)
        .set('user', user)
        .set('error', false);

    case LOGIN_FAILURE:
      return state
        .set('isFetching', false)
        .set('token', null)
        .set('error', "Username or Password is invalid");   

    case LOGOUT_REQUEST:
      return state
        .set('isFetching', false)
        .set('token', null)
        .set('error', false);

    case LOGOUT_FAILURE:
      return state
        .set('isFetching', false);
        
    default:
      return state;
  }
}

export default appReducer;
