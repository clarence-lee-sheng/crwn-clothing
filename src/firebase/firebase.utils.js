import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDUJKBOVkNHJD_y28cOrmsb4K3E_SQDrt0",
  authDomain: "crwn-db-f771b.firebaseapp.com",
  databaseURL: "https://crwn-db-f771b.firebaseio.com",
  projectId: "crwn-db-f771b",
  storageBucket: "crwn-db-f771b.appspot.com",
  messagingSenderId: "704466483273",
  appId: "1:704466483273:web:f19e3fa7641f434726a798",
  measurementId: "G-S3RV67P672"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message)
      }
    }
    return userRef
}
export default firebase;