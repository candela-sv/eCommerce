import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_N7zD1sfK9YmijcmLtCgMut6vk8yf9og",
  authDomain: "ecommerce-c1617.firebaseapp.com",
  projectId: "ecommerce-c1617",
  storageBucket: "ecommerce-c1617.firebasestorage.app",
  messagingSenderId: "391274984979",
  appId: "1:391274984979:web:457312d7e2c6c97cc431e6",
  measurementId: "G-2X7MFRYLWP"
};
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
