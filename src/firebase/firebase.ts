import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sus-hack.firebaseapp.com",
  projectId: "sus-hack",
  storageBucket: "sus-hack.appspot.com",
  messagingSenderId: "951338077567",
  appId: "1:951338077567:web:d0e8d328a7c8bf199f9e4a",
  measurementId: "G-6DPQ71L5Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;