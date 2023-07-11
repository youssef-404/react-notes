import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCrYlGB3HTPXrJpdXroxrwI83xj04GPdcw",
  authDomain: "notes-app-d7ab0.firebaseapp.com",
  projectId: "notes-app-d7ab0",
  storageBucket: "notes-app-d7ab0.appspot.com",
  messagingSenderId: "594356432592",
  appId: "1:594356432592:web:aaece56f12ab487295b8d5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


export const notesCollection = collection(db,"notes")

