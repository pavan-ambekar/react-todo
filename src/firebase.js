// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpGcPMcFz48VYnR_dMDmiTXHr4Gnv42aY",
  authDomain: "react-todo-b91fe.firebaseapp.com",
  projectId: "react-todo-b91fe",
  storageBucket: "react-todo-b91fe.appspot.com",
  messagingSenderId: "745008728871",
  appId: "1:745008728871:web:349c6d130cb2a8c3e7f702",
  measurementId: "G-7SVPDY9LRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);