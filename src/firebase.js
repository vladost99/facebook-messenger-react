import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8-4CgjDMB8ENuEWJpzz_BGDOcz3DQT0w",
    authDomain: "facebook-messenger-dd396.firebaseapp.com",
    databaseURL: "https://facebook-messenger-dd396.firebaseio.com",
    projectId: "facebook-messenger-dd396",
    storageBucket: "facebook-messenger-dd396.appspot.com",
    messagingSenderId: "69464751402",
    appId: "1:69464751402:web:9ec371458528eacc457253",
    measurementId: "G-5BPEFSPTSP"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;

