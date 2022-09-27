// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOKaKyGBGgUaZfPfpESW-vbEqw_hdgx2M",
  authDomain: "projec1-f66f5.firebaseapp.com",
  projectId: "projec1-f66f5",
  storageBucket: "projec1-f66f5.appspot.com",
  messagingSenderId: "1072926192990",
  appId: "1:1072926192990:web:c51b4accf682bd975e0bcf",
  measurementId: "G-T45YLGB8GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {app};