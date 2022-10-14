type NullableString = String | null;

type NullableNumber = Number | null;

type NullableError = Error | null;

type AuthState = {
  id: NullableNumber;
  email: String;
  first_name: String;
  last_name: String;
  token: NullableString;
  isAuthenticated: Boolean;
  requestStatus: String;
  error: NullableError;
};

type HomeState = {
  sideBarOpen: Boolean;
};

type ReduxState = {
  auth: AuthState;
  home: HomeState;
};
