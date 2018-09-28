import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCkNPBxrBfaVZ_YOIYP7ZZDlNwZoAb3p5o",
	authDomain: "hot-takes-e4ec5.firebaseapp.com",
	databaseURL: "https://hot-takes-e4ec5.firebaseio.com",
	projectId: "hot-takes-e4ec5",
	storageBucket: "hot-takes-e4ec5.appspot.com",
	messagingSenderId: "883972514475"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
