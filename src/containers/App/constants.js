/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOGIN_REQUEST = 'LOGIN/REQUEST'
export const LOGIN_SUCCESS = 'LOGIN/SUCCESS'
export const LOGIN_FAILURE = 'LOGIN/FAILURE'

export const LOGOUT_REQUEST = 'LOGOUT/REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT/SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT/FAILURE'

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_REQUEST_SUCCESS = 'LOAD_USER_REQUEST/SUCCESS';
export const LOAD_USER_REQUEST_FAILURE = 'LOAD_USER_REQUEST/FAILURE';
