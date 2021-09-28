import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBikVWAPTiPumAFu7bxywS_naaZLaWxbQE",
  authDomain: "discord-clone-3c087.firebaseapp.com",
  projectId: "discord-clone-3c087",
  storageBucket: "discord-clone-3c087.appspot.com",
  messagingSenderId: "229166742766",
  appId: "1:229166742766:web:993904c52c99f44d0747ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
