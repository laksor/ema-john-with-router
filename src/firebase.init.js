// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyjEACl9MDTRc1EK-Fp9VtSggo_JaDUY",
  authDomain: "ema-john-simple-77252.firebaseapp.com",
  projectId: "ema-john-simple-77252",
  storageBucket: "ema-john-simple-77252.appspot.com",
  messagingSenderId: "1066256528674",
  appId: "1:1066256528674:web:135960bd5bb0deaa7de17b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;