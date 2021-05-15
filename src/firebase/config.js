import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7t3EwUWuevIvaHMlwXrOoi6jxMDXatO8",
  authDomain: "intern-project-d0474.firebaseapp.com",
  projectId: "intern-project-d0474",
  storageBucket: "intern-project-d0474.appspot.com",
  messagingSenderId: "384677656285",
  appId: "1:384677656285:web:4864f04721e5f891e04d34",
  measurementId: "G-G4EV34CPY7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
