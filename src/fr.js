import { initializeApp } from "firebase/app";
function initApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyBuhbrwtBhRTfRn5D7eAufFFABI0qNXFZA",
    authDomain: "cantinaupt-4ef94.firebaseapp.com",
    projectId: "cantinaupt-4ef94",
    storageBucket: "cantinaupt-4ef94.appspot.com",
    messagingSenderId: "214696399550",
    appId: "1:214696399550:web:eb3321549ebc49b20444ef",
  };

  return initializeApp(firebaseConfig);
}
export default initApp;
