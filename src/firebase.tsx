// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGClB86Txf1T-GVjAsdyLlocAQ1JlYBU8",
    authDomain: "react-movie-99e1e.firebaseapp.com",
    projectId: "react-movie-99e1e",
    storageBucket: "react-movie-99e1e.appspot.com",
    messagingSenderId: "339786112009",
    appId: "1:339786112009:web:ce7ec271addb746d95acd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app)
// Initialize Auth
const auth = getAuth(app)