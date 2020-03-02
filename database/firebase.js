import * as firebase from 'firebase';
import 'firebase/firestore';

// Config for app
const firebaseConfig = {
  apiKey: "AIzaSyDepRNE6RqmObMGVelXiFGRqSuLcw75V4U",
  authDomain: "light-watch.firebaseapp.com",
  databaseURL: "https://light-watch.firebaseio.com/",
  projectId: 'light-watch',
  messagingSenderId: '497844650692'
};

// Check if app is already initialized
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// All functions in here
const Firebase = {
  // Objects in form of a class
  addNote: (data) => {
    return firebase.firestore().collection('Notes').add(data);
  },
  getNote: (id) => {
    return firebase.firestore().collection('Notes').doc(id);
  },
  getNotes: () => {
    return firebase.firestore().collection('Notes').get();
  },
}

export default Firebase;