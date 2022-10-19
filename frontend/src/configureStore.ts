import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default () => {
  return { store, persistor };
};
