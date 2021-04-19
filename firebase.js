import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpbzwTaVrFXCXI6HoEWOCV66E5DhYQsWQ",
  authDomain: "chat-app-build.firebaseapp.com",
  projectId: "chat-app-build",
  storageBucket: "chat-app-build.appspot.com",
  messagingSenderId: "919057975692",
  appId: "1:919057975692:web:59ade824266a96b3c7eea9",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
