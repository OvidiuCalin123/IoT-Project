import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/storage";
import logo from "../designFIles/EcoLight.png";
import googleLoginImage from "../designFIles/googlelogin.png";
import "./logInIndex.css";
import { signInWithGooglePopup } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export const LogInIndex = () => {
  const [bulbOnTime, setBulbOnTime] = useState(null);

  const logGoogleUser = async () => {
    try {
      sessionStorage.clear();
      const response = await signInWithGooglePopup();
      console.log(response);
      const token = uuidv4();
      const baseURL = window.location.origin;
      window.location.href = `${baseURL}/welcome?token=${token}`;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="container">
      <img
        className="logo"
        src={logo}
        alt="Logo"
        style={{ width: "25rem", height: "auto" }}
      />
      <img
        id="google-login-btn"
        src={googleLoginImage}
        alt="Google Login"
        className="google-login-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          logGoogleUser();
        }}
      />
    </div>
  );
};
