// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7wLRsMJbVeJMoe-ByN4kUXGiW9OzcHJY",
  authDomain: "fbdemo-32d93.firebaseapp.com",
  projectId: "fbdemo-32d93",
  storageBucket: "fbdemo-32d93.appspot.com",
  messagingSenderId: "672109486995",
  appId: "1:672109486995:web:5aedb93daa915ece4c3e66",
  measurementId: "G-RXHRKC0Q6M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
