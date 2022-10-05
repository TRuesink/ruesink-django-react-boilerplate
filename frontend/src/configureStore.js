import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import rootReducer from './store/reducers';
import rootSaga from './store/sagas';
import { DEV } from './constants/dev';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (DEV) {
  middleware.push(createLogger({ collapsed: true }));
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      middleware
    ),
  devTools: DEV,
});
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};
