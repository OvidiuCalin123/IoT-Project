import { initializeApp } from "firebase/app";
function initApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyDFVKNGe37kqOBl5QfY4OJAhCFlTcX2wIY",
    authDomain: "iot-project-ef186.firebaseapp.com",
    projectId: "iot-project-ef186",
    storageBucket: "iot-project-ef186.appspot.com",
    messagingSenderId: "981937076954",
    appId: "1:981937076954:web:594361c9fe1a034e2943e3",
    measurementId: "G-RE47RXE6NH",
  };

  return initializeApp(firebaseConfig);
}
export default initApp;
