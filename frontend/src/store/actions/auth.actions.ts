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

// ------------------ LOGIN --------------------
export type LoginAction =
  | { type: typeof LOGIN_REQUEST; email: String; password: String }
  | { type: typeof LOGIN_SUCCESS; token: String }
  | { type: typeof LOGIN_FAILURE; error: Error };

export const loginRequest = ({
  email,
  password,
}: {
  email: String;
  password: String;
}): LoginAction => ({
  type: LOGIN_REQUEST,
  email,
  password,
});

export const loginSuccess = ({ token }: { token: String }): LoginAction => ({
  type: LOGIN_SUCCESS,
  token,
});

export const loginFailure = ({ error }: { error: Error }): LoginAction => ({
  type: LOGIN_FAILURE,
  error,
});

// ----------------------- GET USER --------------------------
export type GetUserAction =
  | { type: typeof GET_USER_REQUEST }
  | { type: typeof GET_USER_SUCCESS; user: Object }
  | { type: typeof GET_USER_FAILURE; error: Error };

export const getUserRequest = (): GetUserAction => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = ({ user }: { user: Object }): GetUserAction => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailure = ({ error }: { error: Error }): GetUserAction => ({
  type: GET_USER_FAILURE,
  error,
});

// ----------------------- LOGOUT ----------------------------
export type LogoutAction =
  | { type: typeof LOGOUT_REQUEST }
  | { type: typeof LOGOUT_SUCCESS }
  | { type: typeof LOGOUT_FAILURE; error: Error };

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = ({ error }: { error: Error }): LogoutAction => ({
  type: LOGOUT_FAILURE,
  error,
});

// ---------------------- REGISTER ---------------------------
export type RegisterAction =
  | {
      type: typeof REGISTER_REQUEST;
      username: String;
      email: String;
      password: String;
      passwordConfirmation: String;
    }
  | { type: typeof REGISTER_SUCCESS; token: String }
  | { type: typeof REGISTER_FAILURE; error: Error };

export const registerRequest = ({
  username,
  email,
  password,
  passwordConfirmation,
}: {
  username: String;
  email: String;
  password: String;
  passwordConfirmation: String;
}): RegisterAction => ({
  type: REGISTER_REQUEST,
  username,
  email,
  password,
  passwordConfirmation,
});

export const registerSuccess = ({
  token,
}: {
  token: String;
}): RegisterAction => ({
  type: REGISTER_SUCCESS,
  token,
});

export const registerFailure = ({
  error,
}: {
  error: Error;
}): RegisterAction => ({
  type: REGISTER_FAILURE,
  error,
});
