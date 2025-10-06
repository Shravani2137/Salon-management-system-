import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMgPIqSU-K9-ROfkcZ_eoJXwkH1rOmC3c",
  authDomain: "salon-management-317ce.firebaseapp.com",
  projectId: "salon-management-317ce",
  storageBucket: "salon-management-317ce.firebasestorage.app",
  messagingSenderId: "315063659493",
  appId: "1:315063659493:web:9ccc18cbefb5005ec59d0c",
  databaseURL: "https://salon-management-317ce-default-rtdb.firebaseio.com/"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



