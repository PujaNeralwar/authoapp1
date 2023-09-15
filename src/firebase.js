
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhO3PtMj9SCNgPEu7CqSU4TNM76h5SkP8",
  authDomain: "react-authentication-f2ff0.firebaseapp.com",
  projectId: "react-authentication-f2ff0",
  storageBucket: "react-authentication-f2ff0.appspot.com",
  messagingSenderId: "279639818412",
  appId: "1:279639818412:web:f6db8018490b96f3da9f09",
  measurementId: "G-ZXX34EKTHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;