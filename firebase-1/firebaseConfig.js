import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgz3ce3NqfuaxHDMqFIzSLJgKSZ9u_Vik",
  authDomain: "reactcrudwithfirebase-78b9e.firebaseapp.com",
  projectId: "reactcrudwithfirebase-78b9e",
  storageBucket: "reactcrudwithfirebase-78b9e.firebasestorage.app",
  messagingSenderId: "126231300163",
  appId: "1:126231300163:web:152bc7416d0573c6182cf6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider;
export {auth, db ,provider};

