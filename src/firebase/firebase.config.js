// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1GGAZKVxf7Hd4ijV0d_8g0DVPL30m9w",
  authDomain: "shopping-cart-reactjs-c4432.firebaseapp.com",
  projectId: "shopping-cart-reactjs-c4432",
  storageBucket: "shopping-cart-reactjs-c4432.appspot.com",
  messagingSenderId: "546509524007",
  appId: "1:546509524007:web:a647c0bf8e0a884f3e9202",
  measurementId: "YOUR_MEASUREMENT_ID", // Optional: Add your measurement ID here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
