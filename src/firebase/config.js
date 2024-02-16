// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAACGRy1osTaMpWhYMI78VNBROq-V6V3WI",
  authDomain: "journal-data-c5894.firebaseapp.com",
  projectId: "journal-data-c5894",
  storageBucket: "journal-data-c5894.appspot.com",
  messagingSenderId: "266370025434",
  appId: "1:266370025434:web:1e2f95f418d3422ba762e3",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
