// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC3PGPKDqmTSNiG7POgvNu2KMkPvVSdX1M",
  authDomain: "campingbazzar.firebaseapp.com",
  projectId: "campingbazzar",
  storageBucket: "campingbazzar.firebasestorage.app",
  messagingSenderId: "632190892128",
  appId: "1:632190892128:web:19032accd48b3e5507ab05",
  measurementId: "G-XRCD41V4YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
