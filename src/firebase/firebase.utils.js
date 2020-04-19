import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAnN49l-1AO-B2pfLVRZrbR5jNK7fhf2Qc",
    authDomain: "crwn-db-bd4df.firebaseapp.com",
    databaseURL: "https://crwn-db-bd4df.firebaseio.com",
    projectId: "crwn-db-bd4df",
    storageBucket: "crwn-db-bd4df.appspot.com",
    messagingSenderId: "240080947315",
    appId: "1:240080947315:web:901ffa489dba8c1fd8c206",
    measurementId: "G-2H4DDZCVWF"
  }

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;