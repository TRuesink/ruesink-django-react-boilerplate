import authReducer from './auth.reducer';
import homeReducer from './home.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token', 'isAuthenticated'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = {
  auth: authPersistedReducer,
  home: homeReducer,
};

export default rootReducer;
