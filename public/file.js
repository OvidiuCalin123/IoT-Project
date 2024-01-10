import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// Import the functions you need from the SDKs you need

//import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuhbrwtBhRTfRn5D7eAufFFABI0qNXFZA",
  authDomain: "cantinaupt-4ef94.firebaseapp.com",
  projectId: "cantinaupt-4ef94",
  storageBucket: "cantinaupt-4ef94.appspot.com",
  messagingSenderId: "214696399550",
  appId: "1:214696399550:web:eb3321549ebc49b20444ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
