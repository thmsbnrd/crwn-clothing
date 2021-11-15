import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBz-7mx_HLo9mZhIlU-aOJS569EKejLDZA",
  authDomain: "crnw-db-a5bf5.firebaseapp.com",
  projectId: "crnw-db-a5bf5",
  storageBucket: "crnw-db-a5bf5.appspot.com",
  messagingSenderId: "203778739821",
  appId: "1:203778739821:web:5b8ef022d6400ad2c63964",
  measurementId: "G-B9VYBCJ3SC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
