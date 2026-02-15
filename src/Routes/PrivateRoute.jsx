import React from "react";

import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Loading/Loading";



const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  //   console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
 if (!user) {
  return (
    <Navigate
      to="/authentication/login"
      state={{ from: location }}
      replace
    />
  );
}
  return children;
};

export default PrivateRoute;