type NullableString = String | null;

type NullableNumber = Number | null;

type NullableError = Error | null;

type AuthState = {
  id: NullableNumber;
  email: String;
  first_name: String;
  last_name: String;
  token: NullableString;
  isAuthenticated: boolean;
  requestStatus: String;
  error: NullableError;
};

type HomeState = {
  sideBarOpen: boolean;
};

type ApiUrls = {
  user: string;
  login: string;
  logout: string;
  register: string;
};