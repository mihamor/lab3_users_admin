// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD5O6aVKM2zADK9h45AEqUf7T9PDhJ1WQg',
  authDomain: 'lab3-admin-5abf2.firebaseapp.com',
  databaseURL: 'https://lab3-admin-5abf2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'lab3-admin-5abf2',
  storageBucket: 'lab3-admin-5abf2.appspot.com',
  messagingSenderId: '671073319117',
  appId: '1:671073319117:web:d418242bd5162da9b51184',
  measurementId: 'G-RHV1NFZD34'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

export {
  auth,
  signOut,
  signInWithEmailAndPassword
}
