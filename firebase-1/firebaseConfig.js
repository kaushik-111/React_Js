// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgz3ce3NqfuaxHDMqFIzSLJgKSZ9u_Vik",
  authDomain: "reactcrudwithfirebase-78b9e.firebaseapp.com",
  projectId: "reactcrudwithfirebase-78b9e",
  storageBucket: "reactcrudwithfirebase-78b9e.firebasestorage.app",
  messagingSenderId: "126231300163",
  appId: "1:126231300163:web:152bc7416d0573c6182cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};