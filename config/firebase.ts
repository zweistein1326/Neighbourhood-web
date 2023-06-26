import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage, ref} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDUIQwHDqHsZ1UWNs3PfHbyWhqiWWGB7d0",
  authDomain: "neighborhood-app-aa3e1.firebaseapp.com",
  projectId: "neighborhood-app-aa3e1",
  storageBucket: "neighborhood-app-aa3e1.appspot.com",
  messagingSenderId: "895496228484",
  appId: "1:895496228484:web:9f9e80dfeebd0e5fe0fcd1",
  measurementId: "G-53H25LBSJV"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const google_provider = new GoogleAuthProvider();
const storage = getStorage(app);

export {app, db, auth, google_provider, storage};
