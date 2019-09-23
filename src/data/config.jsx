import firebase from 'firebase'

// Initialize Firebase
const config = {
	apiKey: "AIzaSyCUCCGap_ThOT_8XNp2GJwiLQUh2MutM5E",
	authDomain: "prueba-react-cero.firebaseapp.com",
	databaseURL: "https://prueba-react-cero.firebaseio.com",
	projectId: "prueba-react-cero",
	storageBucket: "prueba-react-cero.appspot.com",
	messagingSenderId: "687249751918"
};
firebase.initializeApp(config);


export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth 