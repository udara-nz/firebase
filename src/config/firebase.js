// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdneXN6noeI5orvo1afPc1_5mtUBn19Ck",
  authDomain: "fir-app-741d8.firebaseapp.com",
  projectId: "fir-app-741d8",
  storageBucket: "fir-app-741d8.appspot.com",
  messagingSenderId: "1033737003598",
  appId: "1:1033737003598:web:d51c094a37f0d47b06191f",
  measurementId: "G-DHTKJ4Q26V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
