import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCYFNPjfD95InIlTfWZT5KdC17eSNcveog",
  authDomain: "fir-37ccf.firebaseapp.com",
  projectId: "fir-37ccf",
  storageBucket: "fir-37ccf.appspot.com",
  messagingSenderId: "317776999368",
  appId: "1:317776999368:web:f1d11d48012f39266446fd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db ,provider };
