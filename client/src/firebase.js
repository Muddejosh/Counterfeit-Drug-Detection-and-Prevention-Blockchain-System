import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCPHKd8bHSDRCfkxZ7UmBLnmKvfpRo58h0",
  authDomain: "pharmachain-7f9a9.firebaseapp.com",
  projectId: "pharmachain-7f9a9",
  storageBucket: "pharmachain-7f9a9.appspot.com",
  messagingSenderId: "247228645823",
  appId: "1:247228645823:web:913248f8b3b134a082610a"
})

export const auth = app.auth()
export default app