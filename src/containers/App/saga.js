import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../../shared/Api';
import { LOAD_USER_REQUEST, LOAD_USER_REQUEST_SUCCESS, LOAD_USER_REQUEST_FAILURE, 
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './constants';


function* loadUserSaga(action) {
  const {
    callback
  } = action;
  try {
    const res = yield call(Api.callapi.getUser);
    yield put({ type: LOAD_USER_REQUEST_SUCCESS, payload: res.data });
    
    callback(true);
  } catch (err) {
    callback(false);
    yield put({ type: LOAD_USER_REQUEST_FAILURE });
  }
}

function* logoutSaga(action) {
  const {
    callback
  } = action;
  try {
    yield put({ type: LOGOUT_SUCCESS, payload: {} });
    
    callback(true);
  } catch (err) {
    callback(false);
    yield put({ type: LOGOUT_FAILURE });
  }
}


export default function* appWatcher() {
  yield takeLatest(LOAD_USER_REQUEST, loadUserSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}
