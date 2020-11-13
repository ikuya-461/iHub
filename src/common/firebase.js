/* firebase */
import firebase from "firebase/app";
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyBpQh9zUJitJzNgS9wkgGSTm5oQJTnootw",
  authDomain: "ihub-5ef17.firebaseapp.com",
  databaseURL: "https://ihub-5ef17.firebaseio.com",
  projectId: "ihub-5ef17",
  storageBucket: "ihub-5ef17.appspot.com",
  messagingSenderId: "556904818767",
  appId: "1:556904818767:web:cb3a25ea9778f1bd66223a",
};

// console.log({ firebaseConfig });

// firebaseの２重起動抑止
if (firebase.apps.length === 0) {
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
