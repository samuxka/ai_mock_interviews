// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz4FoOCtO3WFwgF5KC5g41hDp1szzI0Gs",
  authDomain: "interviewapp-117f2.firebaseapp.com",
  projectId: "interviewapp-117f2",
  storageBucket: "interviewapp-117f2.firebasestorage.app",
  messagingSenderId: "684715000320",
  appId: "1:684715000320:web:6236c935e7e423ad70cee5",
  measurementId: "G-S7VQSMLYBP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)