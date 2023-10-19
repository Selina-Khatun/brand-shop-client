// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7MVFEjUlVWzCo26ple8t47Qyxw8l5rN4",
    authDomain: "brand-shop-client-e82f9.firebaseapp.com",
    projectId: "brand-shop-client-e82f9",
    storageBucket: "brand-shop-client-e82f9.appspot.com",
    messagingSenderId: "153731428867",
    appId: "1:153731428867:web:89223fef4721b445fc5436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;