
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBbMON5pB9SljI7DxO0buqf5LpVdo6c90",
  authDomain: "fb-react-5c311.firebaseapp.com",
  projectId: "fb-react-5c311",
  storageBucket: "fb-react-5c311.appspot.com",
  messagingSenderId: "865139959941",
  appId: "1:865139959941:web:79f4c624bcd06eb89661ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }
