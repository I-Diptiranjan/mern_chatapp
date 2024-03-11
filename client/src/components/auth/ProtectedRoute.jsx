import { Outlet } from "@mui/icons-material";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) {
    return <Navigate to={redirect} />;
  }

  return children ? children : <Outlet/> 
};

export default ProtectedRoute;
