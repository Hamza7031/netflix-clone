import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBRRp_i8Bhx4-b55BMCZpJDSZQhR7p3CWo",
    authDomain: "netflix-clone-7997c.firebaseapp.com",
    projectId: "netflix-clone-7997c",
    storageBucket: "netflix-clone-7997c.appspot.com",
    messagingSenderId: "902043575461",
    appId: "1:902043575461:web:280abdd22e92bd007c594c",
    measurementId: "G-VYEMQVQXBM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };