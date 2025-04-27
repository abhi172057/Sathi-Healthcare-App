// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // 👈 Import Auth

const firebaseConfig = {
  apiKey: "AIzaSyBEAWvS2G0xfbB8EevXEMF3Q_Tf_mkDbsU",
  authDomain: "healthcare-f9269.firebaseapp.com",
  projectId: "healthcare-f9269",
  storageBucket: "healthcare-f9269.firebasestorage.app",
  messagingSenderId: "747694115882",
  appId: "1:747694115882:web:9a4fe68956d96c330e4753",
  measurementId: "G-B39QQLSH56"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app); // 👈 Initialize Auth

export { db, auth };
