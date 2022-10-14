export const selectIsAuthenticated = (state: ReduxState) =>
  state.auth.isAuthenticated;
export const selectAuthorizationToken = (state: ReduxState) => state.auth.token;
export const selectUserEmail = (state: ReduxState) => state.auth.email;

export const selectSideBarOpen = (state: ReduxState) => state.home.sideBarOpen;
