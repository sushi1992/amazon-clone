import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQB4Hq7cGYCrBLMCwpsr3a7pcAwjmJrVc",
    authDomain: "clone-87bff.firebaseapp.com",
    databaseURL: "https://clone-87bff.firebaseio.com",
    projectId: "clone-87bff",
    storageBucket: "clone-87bff.appspot.com",
    messagingSenderId: "530227371533",
    appId: "1:530227371533:web:b37468b4c7b7b820cb7f44"
  });

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }