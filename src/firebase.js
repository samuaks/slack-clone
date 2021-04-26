import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUKFaceeNyo_bASfBl2wUKmOvkLyjJ0DU",
    authDomain: "slack-clone-cefa9.firebaseapp.com",
    projectId: "slack-clone-cefa9",
    storageBucket: "slack-clone-cefa9.appspot.com",
    messagingSenderId: "504725262631",
    appId: "1:504725262631:web:d38f9e70ba6dc0d6485902"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()


  export {auth, provider, db}
  