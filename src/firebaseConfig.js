// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZbBFokyIuKTUQwuUHi_9HQLyKKXHMwQQ",
  authDomain: "fileupload-f90d9.firebaseapp.com",
  projectId: "fileupload-f90d9",
  storageBucket: "fileupload-f90d9.appspot.com",
  messagingSenderId: "363694046275",
  appId: "1:363694046275:web:88e18aeda93f4b1f18e8f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export const db = getFirestore(app);
  export const auth =getAuth(app);
  export const provider=new GoogleAuthProvider();