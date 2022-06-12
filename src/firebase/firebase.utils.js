import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/compat/app"

const config = {
    apiKey: "AIzaSyA8oqYJrdyuRx-3r15wrK_K6aZUJ8tsnsM",
    authDomain: "fineart-db.firebaseapp.com",
    projectId: "fineart-db",
    storageBucket: "fineart-db.appspot.com",
    messagingSenderId: "613458260207",
    appId: "1:613458260207:web:104ecfa3a392e206ea6b1a"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); //we just want google

export default firebase;