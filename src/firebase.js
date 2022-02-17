import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8GFKoE-mdcV0_YV05upnDe1OrSeHz2xc",
  authDomain: "e-clone-5eaac.firebaseapp.com",
  projectId: "e-clone-5eaac",
  storageBucket: "e-clone-5eaac.appspot.com",
  messagingSenderId: "290948518670",
  appId: "1:290948518670:web:5a585b91789d83e6717d5f",
  measurementId: "G-JB89S189FZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
