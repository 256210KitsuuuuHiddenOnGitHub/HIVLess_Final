// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9YDJLLo3m4KQ2910MnX6BXeOT2Av9D3k",
  authDomain: "hivlessph-14d09.firebaseapp.com",
  projectId: "hivlessph-14d09",
  storageBucket: "hivlessph-14d09.appspot.com",
  messagingSenderId: "13910359826",
  appId: "1:13910359826:web:d8bf712770131a678bbdcb",
  measurementId: "G-7F31KFY574",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
