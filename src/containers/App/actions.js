import { LOGIN_REQUEST, LOGOUT_REQUEST, LOAD_USER_REQUEST } from './constants';

export const doLogin = ({ username, password }, callback = () => { }) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
  callback,
})

export const doLogout = (callback = () => { }) => ({
  type: LOGOUT_REQUEST,
  callback,
})

export const loadUser = (callback = () => { }) => ({
  type: LOAD_USER_REQUEST,
  callback,
})

