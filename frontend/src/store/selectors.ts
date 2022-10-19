import { RootState } from '../configureStore';

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectAuthorizationToken = (state: RootState) => state.auth.token;
export const selectUserEmail = (state: RootState) => state.auth.email;

export const selectSideBarOpen = (state: RootState) => state.home.sideBarOpen;
