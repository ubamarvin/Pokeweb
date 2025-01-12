// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXj5MCIr-sX7pgltSChO9Zc5dbAyjhOyY",
  authDomain: "pokeweb-8e697.firebaseapp.com",
  projectId: "pokeweb-8e697",
  storageBucket: "pokeweb-8e697.firebasestorage.app",
  messagingSenderId: "1063812422564",
  appId: "1:1063812422564:web:19211c03561e9638b7ff31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };