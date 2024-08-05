// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLR4mILPAWNX7SpBnkXg_ZRHTjIby66CQ",
  authDomain: "inventory-management-9c6cf.firebaseapp.com",
  projectId: "inventory-management-9c6cf",
  storageBucket: "inventory-management-9c6cf.appspot.com",
  messagingSenderId: "554724488103",
  appId: "1:554724488103:web:daae49585da6a896cffc82",
  measurementId: "G-5N98G4PN12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }; 