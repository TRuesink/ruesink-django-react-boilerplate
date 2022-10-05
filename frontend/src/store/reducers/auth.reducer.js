import { REQUEST_STATUS } from '../../constants/request';
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../actions/auth.actions';

const INITIAL_STATE = {
  id: null,
  email: '',
  first_name: '',
  last_name: '',
  token: null,
  isAuthenticated: false,
  requestStatus: REQUEST_STATUS.UNREQUESTED,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, requestStatus: REQUEST_STATUS.REQUESTED };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
        requestStatus: REQUEST_STATUS.REQUEST_SUCCESS,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUEST_FAILED,
        error: action.error,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUESTED,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUEST_SUCCESS,
        ...action.user,
        isAuthenticated: true,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUEST_FAILED,
        error: action.error,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUESTED,
      };
    case LOGOUT_SUCCESS:
      return {
        ...INITIAL_STATE,
        requestStatus: REQUEST_STATUS.REQUEST_SUCCESS,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUEST_FAILED,
        error: action.error,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUESTED,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
        requestStatus: REQUEST_STATUS.REQUEST_SUCCESS,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        requestStatus: REQUEST_STATUS.REQUEST_FAILED,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
