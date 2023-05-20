import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
  apiKey: "AIzaSyCbpPDsuP288q34fGEJyKW9q885QPoGIlE",
  authDomain: "sasta-chat-ae479.firebaseapp.com",
  projectId: "sasta-chat-ae479",
  storageBucket: "sasta-chat-ae479.appspot.com",
  messagingSenderId: "849369160785",
  appId: "1:849369160785:web:4931eb19869ce0a9d76c70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
