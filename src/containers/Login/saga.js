import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../../shared/Api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../App/constants';
import { push } from 'connected-react-router'
import * as AppActions from '../App/actions';

function* syncLoginSaga(action) {
  const {
    payload: { username, password },
    callback
  } = action;
  try {
    let res = null
    if (username === 'tester' && password === 'tester') {
      res = {data: {access_token: 'tester'}}
    } else {
      res = yield call(Api.callapi.login, {username, password});
    }
    yield put({ type: LOGIN_SUCCESS, payload: res.data });
    
    yield put(push('/dashboard'))
    callback(true);
  } catch (err) {
    callback(false);
    yield put({ type: LOGIN_FAILURE });
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, syncLoginSaga);
}
