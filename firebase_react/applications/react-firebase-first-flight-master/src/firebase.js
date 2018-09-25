import firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBXmW22Zojlzkyn8R4wmnX1QL4hRgL_aMs",
	authDomain: "first-flight-with-friend-8bba3.firebaseapp.com",
	databaseURL: "https://first-flight-with-friend-8bba3.firebaseio.com",
	projectId: "first-flight-with-friend-8bba3",
	storageBucket: "first-flight-with-friend-8bba3.appspot.com",
	messagingSenderId: "271974565441"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();