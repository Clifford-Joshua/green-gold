// eslint-disable-next-line
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isUser = localStorage.getItem("isUser")
    ? JSON.parse(localStorage.getItem("isUser"))
    : false;

  const isLogin = localStorage.getItem("isLogin")
    ? JSON.parse(localStorage.getItem("isLogin"))
    : false;

  console.log(Boolean(isLogin));

  if (!isUser) {
    return <Navigate to={"/signup"} />;
  }

  if (!isLogin) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
