import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAcjIbDgHdUakAqyVbcyw4Q-645-t_aRRA",
    authDomain: "news-letter-app-8450a.firebaseapp.com",
    databaseURL: "https://news-letter-app-8450a-default-rtdb.firebaseio.com",
    projectId: "news-letter-app-8450a",
    storageBucket: "news-letter-app-8450a.appspot.com",
    messagingSenderId: "730804567720",
    appId: "1:730804567720:web:97a2220b1efb7f3abf0c9d",
    measurementId: "G-5H1J1DE9Z4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();