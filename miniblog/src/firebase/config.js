import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCo0TKELk-sl9XpGw4NPINL1bjz0E6CCkI",
  authDomain: "miniblog-13c2b.firebaseapp.com",
  projectId: "miniblog-13c2b",
  storageBucket: "miniblog-13c2b.appspot.com",
  messagingSenderId: "311591085027",
  appId: "1:311591085027:web:4fabb4cb8d9f9c8d93b6d6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
