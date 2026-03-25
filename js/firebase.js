import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getDatabase,
ref,
push,
set,
get,
child,
onValue,
remove,
update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFYRKFj-v5jmbJuphg8DkhQ5spGZWMXbk",
  authDomain: "pocketledger-5daf2.firebaseapp.com",
  databaseURL: "https://pocketledger-5daf2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pocketledger-5daf2",
  storageBucket: "pocketledger-5daf2.firebasestorage.app",
  messagingSenderId: "648051672702",
  appId: "1:648051672702:web:7f55da687b7f9b4fed7a2f",
  measurementId: "G-NC93BE11ZJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export {
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
onAuthStateChanged,
signOut,
ref,
push,
set,
get,
child,
onValue,
remove,
update
};
