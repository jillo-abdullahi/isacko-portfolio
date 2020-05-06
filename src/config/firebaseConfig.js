import firebase from "firebase/app";
import "firebase/functions";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAMLWy7R0k6lHF9gQHIbZtrXOBhn8r5WW4",
  authDomain: "isacko-portfolio.firebaseapp.com",
  databaseURL: "https://isacko-portfolio.firebaseio.com",
  projectId: "isacko-portfolio",
  storageBucket: "isacko-portfolio.appspot.com",
  messagingSenderId: "699200333778",
  appId: "1:699200333778:web:2c84c286d95af440324a0b",
  measurementId: "G-RS7KX9TTWL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
