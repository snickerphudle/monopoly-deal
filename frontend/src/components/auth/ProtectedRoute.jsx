// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('sessionToken'); // Adjust this to your actual auth check
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;