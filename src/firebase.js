import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



 const firebaseConfig = {
    apiKey: "AIzaSyC9hxdZ5_AuZoEPtW91UfmJSh73cu1dXE0",
    authDomain: "whatsapp-clone-e8d17.firebaseapp.com",
    projectId: "whatsapp-clone-e8d17",
    storageBucket: "whatsapp-clone-e8d17.appspot.com",
    messagingSenderId: "451821226585",
    appId: "1:451821226585:web:01095f2541099cb780bf48"
  };


  //const firebaseApp = firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();

  //const auth = firebase.auth();
  const auth = firebaseApp.auth(firebaseApp);

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;