// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-3mNM9XkOesnH8VuzyEUsjIa7nenwITg",
  authDomain: "chat-react-app-test-dc3b6.firebaseapp.com",
  projectId: "chat-react-app-test-dc3b6",
  storageBucket: "chat-react-app-test-dc3b6.firebasestorage.app",
  messagingSenderId: "435009631503",
  appId: "1:435009631503:web:13ee5fd4a2ee8d6d31ba7a",
  databaseURL : "http://chat-react-app-test-dc3b6.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};
