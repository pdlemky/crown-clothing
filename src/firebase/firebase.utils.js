import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVJSPMpIbu2HAwuHrjHpQvXcDjO3aJzvE",
    authDomain: "crown-db-c3451.firebaseapp.com",
    databaseURL: "https://crown-db-c3451.firebaseio.com",
    projectId: "crown-db-c3451",
    storageBucket: "crown-db-c3451.appspot.com",
    messagingSenderId: "563827142725",
    appId: "1:563827142725:web:0913ea9d4abe254a85332c",
    measurementId: "G-VJ1P7KVCY3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;