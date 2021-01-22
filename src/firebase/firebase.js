import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";

//import config from '../../firebase-config';
const firebaseConfig = {
    apiKey: "AIzaSyAdlCrzfUVYAH4XEJ9WYfait-XLVfEyRHY",
    authDomain: "movies-6e1b0.firebaseapp.com",
    projectId: "movies-6e1b0",
    storageBucket: "movies-6e1b0.appspot.com",
    messagingSenderId: "890726000176",
    appId: "1:890726000176:web:1f9a459f956da2d3c8aff5",
    measurementId: "G-TQ1WY22TET"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
});