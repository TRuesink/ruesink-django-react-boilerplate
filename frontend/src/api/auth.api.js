import axios from 'axios';
import apiUrls from '../constants/api';

export const login = (email, password) =>
  axios.post(apiUrls.login, { email, password });

export const getUser = (token) =>
  axios.get(apiUrls.user, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

export const logout = (token) =>
  axios.post(apiUrls.logout, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

export const register = (username, email, password, passwordConfirmation) =>
  axios.post(apiUrls.register, {
    username,
    email,
    password1: password,
    password2: passwordConfirmation,
  });
