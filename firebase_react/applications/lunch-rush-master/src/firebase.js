import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyClrLCPTxNYn9-OJnu7oMrlhs-IwNmhJ5g",
	authDomain: "lunch-rush-fa590.firebaseapp.com",
	databaseURL: "https://lunch-rush-fa590.firebaseio.com",
	projectId: "lunch-rush-fa590",
	storageBucket: "lunch-rush-fa590.appspot.com",
	messagingSenderId: "611031451764"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
