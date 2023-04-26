import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBKGAt0WDa35X6eXw9NHnjZYmqud4bCQTI",
    authDomain: "gifted-relic-375009.firebaseapp.com",
     projectId: "gifted-relic-375009",
    storageBucket: "gifted-relic-375009.appspot.com",
     messagingSenderId: "450681843974",
    appId: "1:450681843974:web:7a59531392a5b7da046e87",
    measurementId: "G-EJL83V4QLT"
  };
  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;
