import React, { useContext } from 'react'
import { AuthContext } from '../context/Authcontext';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const value = useContext(AuthContext);
  const { isAuthDetail } = value;

  //if user is not loged in
  if (!isAuthDetail.isAuth) {
    return <Navigate to={"/login"} />;
  }
  //if user is logged in ther we are going to that page
  return children;
}

export default PrivateRoute