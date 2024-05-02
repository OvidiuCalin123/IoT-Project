import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { WelcomeBody } from "./welcomeBody";

export const WelcomeWrapper = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <WelcomeBody />;
};
