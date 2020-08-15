import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNX69oTXCr2S3bPoX5LFIJvyTilEvrql8",
    authDomain: "slack-clone-299dd.firebaseapp.com",
    databaseURL: "https://slack-clone-299dd.firebaseio.com",
    projectId: "slack-clone-299dd",
    storageBucket: "slack-clone-299dd.appspot.com",
    messagingSenderId: "395629094954",
    appId: "1:395629094954:web:79f3bd6b847ceee0233b53",
    measurementId: "G-E4B2F7BPCB"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
