import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCHOZXkvxwwb6CRkjKam9CQkQpZUnwfnXU',
  authDomain: 'office-rpg.firebaseapp.com',
  databaseURL: 'https://office-rpg.firebaseio.com',
  storageBucket: 'office-rpg.appspot.com',
  messagingSenderId: '580741308566'
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
