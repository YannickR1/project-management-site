import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD8KRe8Q8fVrQQfOVMvjvT-s29xrwUc29U",
  authDomain: "theigloosite.firebaseapp.com",
  projectId: "theigloosite",
  storageBucket: "theigloosite.appspot.com",
  messagingSenderId: "1046437956066",
  appId: "1:1046437956066:web:7f9ee6e927a00b8efed1bb"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }