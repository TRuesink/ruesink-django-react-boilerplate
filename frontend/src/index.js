import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import getStore from './configureStore';
import Layout from './components/Layout';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = getStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <App />
      </Layout>
    </PersistGate>
  </Provider>
);
