import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "codebility-e389b.firebaseapp.com",
  projectId: "codebility-e389b",
  storageBucket: "codebility-e389b.appspot.com",
  messagingSenderId: "819383421704",
  appId: "1:819383421704:web:897c33d1e97c769b84fabd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
