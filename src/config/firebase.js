import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyA8YobAhmTZOzpsXDqZZnjTcJuYHEuvNNo",
  authDomain: "auction-1e55e.firebaseapp.com",
  projectId: "auction-1e55e",
  storageBucket: "auction-1e55e.appspot.com",
  messagingSenderId: "511075570309",
  appId: "1:511075570309:web:60f8dad161a37e542acfec"
  
  
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
