import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHDNX-paSmq6LbYizAMI9mr2NkynjSHY0",
  authDomain: "etalon-e7e97.firebaseapp.com",
  projectId: "etalon-e7e97",
  storageBucket: "etalon-e7e97.appspot.com",
  messagingSenderId: "269657311363",
  appId: "1:269657311363:web:71a478afcd97060421b3b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
