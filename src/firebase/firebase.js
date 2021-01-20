import firebase from "firebase/app"
import "firebase/auth"


/// aqui tenemos la configuracion que nos da firebase para que funcione la base de datos de login and register
const app = firebase.initializeApp({
   apiKey: "AIzaSyAdlCrzfUVYAH4XEJ9WYfait-XLVfEyRHY",
    authDomain: "movies-6e1b0.firebaseapp.com",
    projectId: "movies-6e1b0",
    storageBucket: "movies-6e1b0.appspot.com",
    messagingSenderId: "890726000176",
    appId: "1:890726000176:web:1f9a459f956da2d3c8aff5",
    measurementId: "G-TQ1WY22TET"
})

export const auth = app.auth()
export default app


