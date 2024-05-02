import React from "react";
import { signInWithGooglePopup } from "./firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      await signInWithGooglePopup();
      console.log("User signed in successfully!");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  //   return (
  //     <div>
  //       <button onClick={logGoogleUser}>Sign In With Google</button>
  //     </div>
  //   );
};

export default SignIn;
