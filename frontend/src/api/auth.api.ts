import axios from 'axios';
import apiUrls from '../constants/api';

export type LoginResponse = {
  data: {
    key: String;
  };
};

export type GetUserResopnse = {
  data: Object;
};

export const login = (email: String, password: String) =>
  axios.post(apiUrls.login, { email, password });

export const getUser = (token: String) =>
  axios.get(apiUrls.user, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

export const logout = (token: String) =>
  axios.post(apiUrls.logout, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

export const register = (
  username: String,
  email: String,
  password: String,
  passwordConfirmation: String
) =>
  axios.post(apiUrls.register, {
    username,
    email,
    password1: password,
    password2: passwordConfirmation,
  });
