
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEUZCxH9fA2Jq8lnl7TTU3foVFp7Ebqns",
  authDomain: "contactpage-e8b13.firebaseapp.com",
  projectId: "contactpage-e8b13",
  storageBucket: "contactpage-e8b13.appspot.com",
  messagingSenderId: "293599566832",
  appId: "1:293599566832:web:4aab80db1a590fc71b1b35"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);