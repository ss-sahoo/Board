import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyApT9vnkKfCQJGZWxX0bwZh7I9XFQlPZkg",
    authDomain: "assignment-1-45829.firebaseapp.com",
    projectId: "assignment-1-45829",
    storageBucket: "assignment-1-45829.appspot.com",
    messagingSenderId: "668378045398",
    appId: "1:668378045398:web:f60e082394dcad07f96277"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {auth};
  

  export default db;