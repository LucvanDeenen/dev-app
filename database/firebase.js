import * as firebase from 'firebase';
import 'firebase/firestore';

// Config for app
const firebaseConfig = {
  apiKey: "AIzaSyDepRNE6RqmObMGVelXiFGRqSuLcw75V4U",
  authDomain: "light-watch.firebaseapp.com",
  databaseURL: "https://light-watch.firebaseio.com/",
  storageBucket: "light-watch.appspot.com",
  projectId: 'light-watch',
  messagingSenderId: '497844650692'
};

// Check if app is already initialized
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// All functions in here
export default Firebase = {
  // Objects in form of a class
  // Notes
  addNote: (data) => {
    return firebase.firestore().collection('Notes').add(data);
  },
  getNote: (id) => {
    return firebase.firestore().collection('Notes').doc(id);
  },
  getNotes: () => {
    return firebase.firestore().collection('Notes').get();
  },

  // Accounts
  // Getters
  getAccountsAsync: async () => {
    const querySnapshot = await firebase.firestore().collection('Accounts').get()
    querySnapshot.forEach(doc => {
      console.log(doc.data());
    });
  },
  getAccounts: () => {
    return firebase.firestore().collection('Accounts').get();
  },

  // Setters
  addAccount: (data) => {
    return firebase.firestore().collection('Accounts').add(data);
  },
}
