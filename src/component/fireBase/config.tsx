import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
var firebaseConfig = {
    apiKey: "AIzaSyCVIBI0ESdC9LJVp-RQ2GjKkDxUXdO6pOY",
    authDomain: "chat-app-54bdf.firebaseapp.com",
    projectId: "chat-app-54bdf",
    storageBucket: "chat-app-54bdf.appspot.com",
    messagingSenderId: "50181298194",
    appId: "1:50181298194:web:b38d1ae9dc873aa618e0cb",
    measurementId: "G-SLESFWC0K7"
}


firebase.initializeApp(firebaseConfig)
 firebase.analytics()
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const auth=firebase.auth()
const db=firebase.firestore()

export {db,auth}