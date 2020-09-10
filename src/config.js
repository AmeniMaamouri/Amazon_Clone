import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHKN3q85p26_5MdTMmBf3zdk7EX8_ywfU",
    authDomain: "clone-67d06.firebaseapp.com",
    databaseURL: "https://clone-67d06.firebaseio.com",
    projectId: "clone-67d06",
    storageBucket: "clone-67d06.appspot.com",
    messagingSenderId: "466980650886",
    appId: "1:466980650886:web:5a8a51e4811a738f0f7607"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig, );
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {db, auth}