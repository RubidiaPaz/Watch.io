// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcnfV13gRBuvKbKjl5sXBOn0P32Sf0188",
  authDomain: "watchio-65981.firebaseapp.com",
  databaseURL: "https://watchio-65981-default-rtdb.firebaseio.com",
  projectId: "watchio-65981",
  storageBucket: "watchio-65981.appspot.com",
  messagingSenderId: "493052840644",
  appId: "1:493052840644:web:f898d2724c4f12a3501791",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = getDatabase(app);

