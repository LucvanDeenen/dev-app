import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDepRNE6RqmObMGVelXiFGRqSuLcw75V4U",
    authDomain: "light-watch.firebaseapp.com",
    databaseURL: "https://light-watch.firebaseio.com/",
    projectId: 'light-watch',
    messagingSenderId: '497844650692'
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);