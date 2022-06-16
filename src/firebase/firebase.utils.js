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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
    //    what property we actually want to store ... what are the data that we want to use in order to create this actual doc
        const { displayName, email } = userAuth;
    //    we want to be sure that we know inside of our dataase when we made that doc
        const createdAt = new Date();

        try {
            //pass our obj
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;