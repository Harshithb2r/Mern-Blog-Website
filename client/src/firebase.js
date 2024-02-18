// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-41f2a.firebaseapp.com",
    projectId: "mern-blog-41f2a",
    storageBucket: "mern-blog-41f2a.appspot.com",
    messagingSenderId: "240298555958",
    appId: "1:240298555958:web:baac8b26ecf5850556f697"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);