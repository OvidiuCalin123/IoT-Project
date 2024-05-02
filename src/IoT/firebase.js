import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFVKNGe37kqOBl5QfY4OJAhCFlTcX2wIY",
  authDomain: "iot-project-ef186.firebaseapp.com",
  projectId: "iot-project-ef186",
  storageBucket: "iot-project-ef186.appspot.com",
  messagingSenderId: "981937076954",
  appId: "1:981937076954:web:594361c9fe1a034e2943e3",
  measurementId: "G-RE47RXE6NH",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// auth.languageCode = "en";
// const provider = new GoogleAuthProvider();

// const googlelogin = document.getElementById("google-login-btn");
// googlelogin.addEventListener("click", function () {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const user = result.user;
//       console.log(user);
//       window.location.href = "../logged.html";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// });

// const analytics = getAnalytics(app);

// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB3S6pXq8fZXUKignwhjnmGEqFoZlD6CBE",
//   authDomain: "iot-light-68724.firebaseapp.com",
//   projectId: "iot-light-68724",
//   storageBucket: "iot-light-68724.appspot.com",
//   messagingSenderId: "127885636351",
//   appId: "1:127885636351:web:47b9a5df0098ade0e652ca",
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
