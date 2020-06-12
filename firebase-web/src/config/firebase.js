import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHU2ew6S8JVANvtkXvAusdwfonZUl1b1g",
  authDomain: "react-firebase-192eb.firebaseapp.com",
  databaseURL: "https://react-firebase-192eb.firebaseio.com",
  projectId: "react-firebase-192eb",
  storageBucket: "react-firebase-192eb.appspot.com",
  messagingSenderId: "700522139033",
  appId: "1:700522139033:web:f0317ef168ff9547121708",
  measurementId: "G-24ZW8R3WPC",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
