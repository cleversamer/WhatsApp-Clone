import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC3E1NDUnjsl8gkwooGm0u_uCVqQmkL-kc",
  authDomain: "samer-whatsapp.firebaseapp.com",
  projectId: "samer-whatsapp",
  storageBucket: "samer-whatsapp.appspot.com",
  messagingSenderId: "1039285721070",
  appId: "1:1039285721070:web:39a6f0bfa2263ecd32a0ff",
  measurementId: "G-J296FYN3QS",
};

const app = firebase.initializeApp(config);

const db = app.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
