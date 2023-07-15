// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw0m1oCLOt_EV76P3TAAnsP1Cb0FDxBZ0",
  authDomain: "app-auth-70bb5.firebaseapp.com",
  projectId: "app-auth-70bb5",
  storageBucket: "app-auth-70bb5.appspot.com",
  messagingSenderId: "1070151405414",
  appId: "1:1070151405414:web:9931c96f5abba2fe3002a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);