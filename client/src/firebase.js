// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-897cd.firebaseapp.com",
  projectId: "mern-blog-897cd",
  storageBucket: "mern-blog-897cd.appspot.com",
  messagingSenderId: "1020228838371",
  appId: "1:1020228838371:web:96e80a273c0e2f6151b6d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);