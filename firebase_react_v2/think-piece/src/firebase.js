import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDDNWof1gQzeKh5hCk-JYkOoTz0VCUoXEE",
  authDomain: "think-piece-734dd.firebaseapp.com",
  databaseURL: "https://think-piece-734dd.firebaseio.com",
  projectId: "think-piece-734dd",
  storageBucket: "think-piece-734dd.appspot.com",
  messagingSenderId: "397722510147"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;