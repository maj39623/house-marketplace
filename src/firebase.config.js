import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADnreEu7vVvUq6beW47Z0Oj4W_jyz4VFo",
  authDomain: "house-marketplace-app-8add8.firebaseapp.com",
  projectId: "house-marketplace-app-8add8",
  storageBucket: "house-marketplace-app-8add8.appspot.com",
  messagingSenderId: "141747832797",
  appId: "1:141747832797:web:33391fbaf6fb30bbd41834",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
