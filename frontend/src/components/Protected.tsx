import React from 'react';
import { Navigate } from 'react-router';

type Props = {
  isAuthenticated: boolean;
  children: JSX.Element;
};

const Protected = ({ isAuthenticated, children }: Props) => {
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default Protected;
