// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfaX9cZEyRC4xa9A6GVs8fzIXk-Uz5p_A",
    authDomain: "movie-react-5aa6c.firebaseapp.com",
    projectId: "movie-react-5aa6c",
    storageBucket: "movie-react-5aa6c.appspot.com",
    messagingSenderId: "544625352182",
    appId: "1:544625352182:web:4159ddf94ced78dec1bbd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app)
// Initialize Auth
const auth = getAuth(app)
export { db, auth }