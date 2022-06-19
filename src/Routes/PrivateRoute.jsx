import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  const auth = useSelector((store) => store.auth.auth);
  if (auth) {
    return children;
  }
  return <Navigate to="/" />;
};
