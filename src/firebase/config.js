import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAVVA5iYcEhoKwnOPowZ2d35kt6L6to6tM",
  authDomain: "react-cursos-3e196.firebaseapp.com",
  projectId: "react-cursos-3e196",
  storageBucket: "react-cursos-3e196.appspot.com",
  messagingSenderId: "463261735832",
  appId: "1:463261735832:web:d7b7fc9f37b28807a569ed"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth=getAuth(FirebaseApp);
export const FirebaseDB=getFirestore(FirebaseApp);

