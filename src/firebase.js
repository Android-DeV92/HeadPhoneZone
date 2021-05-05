// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBdSfTI2GmJQs7CuP7XwrvQt0_1rpHhd4Y",
	authDomain: "headphone-zone-app.firebaseapp.com",
	projectId: "headphone-zone-app",
	storageBucket: "headphone-zone-app.appspot.com",
	messagingSenderId: "465601949879",
	appId: "1:465601949879:web:10e8be5ac5a9711a7b1d32",
	measurementId: "G-HRH0W2WSER",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const firestore = firebase.firestore();


export default firebase;
