export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const GET_USER_REQUEST = 'auth/GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'auth/GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'auth/GET_USER_FAILURE';

export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const loginRequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});

export const loginSuccess = ({ token }) => ({
  type: LOGIN_SUCCESS,
  token,
});

export const loginFailure = ({ error }) => ({
  type: LOGIN_FAILURE,
  error,
});

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = ({ user }) => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailure = ({ error }) => ({
  type: GET_USER_FAILURE,
  error,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = ({ error }) => ({
  type: LOGOUT_FAILURE,
  error,
});

export const registerRequest = ({
  username,
  email,
  password,
  passwordConfirmation,
}) => ({
  type: REGISTER_REQUEST,
  username,
  email,
  password,
  passwordConfirmation,
});

export const registerSuccess = ({ token }) => ({
  type: REGISTER_SUCCESS,
  token,
});

export const registerFailure = ({ error }) => ({
  type: REGISTER_FAILURE,
  error,
});
