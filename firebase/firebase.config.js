// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH2NlQpd6IpzQDRQiFMYJAsgALndpdAyc",
  authDomain: "anti-matter-343308.firebaseapp.com",
  projectId: "anti-matter-343308",
  storageBucket: "anti-matter-343308.appspot.com",
  messagingSenderId: "724415327929",
  appId: "1:724415327929:web:5776d5beb7989d8e987568",
  measurementId: "G-Z08HSJJH8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export {authentication};