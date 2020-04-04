import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA53swvmHlBJaCFah-Ru3MeqNJ6gohxCdA",
    authDomain: "crwn-db-8c1ec.firebaseapp.com",
    databaseURL: "https://crwn-db-8c1ec.firebaseio.com",
    projectId: "crwn-db-8c1ec",
    storageBucket: "crwn-db-8c1ec.appspot.com",
    messagingSenderId: "367608369230",
    appId: "1:367608369230:web:f4ee1dbacd4f12394b731f",
    measurementId: "G-CZZPK3JGE7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;