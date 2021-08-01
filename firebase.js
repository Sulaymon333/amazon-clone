import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCV6tlUjC-zoIJPN1fuE7Jna9tl3IFGs10',
    authDomain: 'clone-eaf06.firebaseapp.com',
    projectId: 'clone-eaf06',
    storageBucket: 'clone-eaf06.appspot.com',
    messagingSenderId: '1034443743123',
    appId: '1:1034443743123:web:0bfb4df76dd6576469d266',
    measurementId: 'G-8YZY32XDKF',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
export default db;
