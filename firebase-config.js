// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcnfV13gRBuvKbKjl5sXBOn0P32Sf0188",
  authDomain: "watchio-65981.firebaseapp.com",
  projectId: "watchio-65981",
  storageBucket: "watchio-65981.appspot.com",
  messagingSenderId: "493052840644",
  appId: "1:493052840644:web:f898d2724c4f12a3501791",
};

// const firebaseConfigRTD = {
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const authentication = getAuth(app);