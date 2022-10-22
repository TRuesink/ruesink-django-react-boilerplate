import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Protected from './components/Protected';
import { selectIsAuthenticated } from './store/selectors';
import { getUserRequest } from './store/actions/auth.actions';
import Register from './components/Register';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const isAuthenticated = useAppSelector((state) =>
    selectIsAuthenticated(state)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserRequest());
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected isAuthenticated={isAuthenticated}>
              <Dashboard />
            </Protected>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
