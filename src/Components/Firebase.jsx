// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2jlG4FdIHStDmCOiuIa0aAH_gEok60aw",
  authDomain: "login-bb304.firebaseapp.com",
  projectId: "login-bb304",
  storageBucket: "login-bb304.appspot.com",
  messagingSenderId: "1028138148738",
  appId: "1:1028138148738:web:44e2b3dc4f6407a8dde59b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth();
export const db = getFirestore(app);
export default app;