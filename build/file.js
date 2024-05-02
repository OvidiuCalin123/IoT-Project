import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// Import the functions you need from the SDKs you need

//import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
