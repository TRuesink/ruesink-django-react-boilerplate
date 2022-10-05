import React from 'react';
import { Navigate } from 'react-router';

const Protected = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default Protected;
