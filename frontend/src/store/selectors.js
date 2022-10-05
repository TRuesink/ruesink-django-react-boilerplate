export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthorizationToken = (state) => state.auth.token;
export const selectUserEmail = (state) => state.auth.email;

export const selectSideBarOpen = (state) => state.home.sideBarOpen;
