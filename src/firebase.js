import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaowHFb0JreqMWFucsuVyaoWFZCO-NQa4",
  authDomain: "disnetplus-clone-7dff2.firebaseapp.com",
  projectId: "disnetplus-clone-7dff2",
  storageBucket: "disnetplus-clone-7dff2.appspot.com",
  messagingSenderId: "436767026744",
  appId: "1:436767026744:web:44edadad00bbec677000cd",
  measurementId: "G-8M3YMFH3LJ",
};
// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// // 누르면 구글 로그인 창 나오는 것
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export { auth, provider, storage };
export default db;
