// import firebase from "firebase/app";
import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBFbyOzKV2QRjmDX-4emnAcYhX3CNUXjds",
  authDomain: "vue-chat-ef509.firebaseapp.com",
  projectId: "vue-chat-ef509",
  storageBucket: "vue-chat-ef509.appspot.com",
  messagingSenderId: "552491663885",
  appId: "1:552491663885:web:cef4261020fd94f6c54b44"
}

const db = firebase.initializeApp(config);
export default db;