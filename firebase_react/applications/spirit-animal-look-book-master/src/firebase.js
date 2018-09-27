import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyClWahQk7ffZpjH5VYmonjE3cN353XzrHU",
	authDomain: "social-animals-e197b.firebaseapp.com",
	databaseURL: "https://social-animals-e197b.firebaseio.com",
	projectId: "social-animals-e197b",
	storageBucket: "social-animals-e197b.appspot.com",
	messagingSenderId: "476061873800"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
