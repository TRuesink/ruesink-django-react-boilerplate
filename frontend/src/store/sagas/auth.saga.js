import { takeEvery, put, call, select, takeLatest } from 'redux-saga/effects';
import { getUser, login, logout, register } from '../../api/auth.api';
import {
  getUserFailure,
  getUserSuccess,
  GET_USER_REQUEST,
  loginFailure,
  loginSuccess,
  LOGIN_REQUEST,
  logoutFailure,
  logoutSuccess,
  LOGOUT_REQUEST,
  registerFailure,
  registerSuccess,
  REGISTER_REQUEST,
} from '../actions/auth.actions';
import { selectAuthorizationToken } from '../selectors';

export function* loginRequestWorker({ email, password }) {
  try {
    const response = yield call(login, email, password);
    console.log(response);
    yield put(loginSuccess({ token: response.data.key }));
  } catch (error) {
    yield put(loginFailure({ error }));
  }
}

export function* getUserRequestWorker() {
  try {
    const token = yield select(selectAuthorizationToken);
    const response = yield call(getUser, token);
    const user = response.data;
    console.log(user);
    yield put(getUserSuccess({ user }));
  } catch (error) {
    yield put(getUserFailure({ error }));
  }
}

export function* logoutRequestWorker() {
  try {
    const token = yield select(selectAuthorizationToken);
    const response = yield call(logout, token);
    console.log(response);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure({ error }));
  }
}

export function* registerRequestWorker({
  username,
  email,
  password,
  passwordConfirmation,
}) {
  try {
    const response = yield call(
      register,
      username,
      email,
      password,
      passwordConfirmation
    );
    console.log(response);
    yield put(registerSuccess({ token: response.data.key }));
  } catch (error) {
    yield put(registerFailure({ error }));
  }
}

export default function* () {
  yield takeEvery(LOGIN_REQUEST, loginRequestWorker);
  yield takeEvery(GET_USER_REQUEST, getUserRequestWorker);
  yield takeLatest(LOGOUT_REQUEST, logoutRequestWorker);
  yield takeLatest(REGISTER_REQUEST, registerRequestWorker);
}
