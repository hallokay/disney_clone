import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaowHFb0JreqMWFucsuVyaoWFZCO-NQa4",
  authDomain: "disnetplus-clone-7dff2.firebaseapp.com",
  projectId: "disnetplus-clone-7dff2",
  storageBucket: "disnetplus-clone-7dff2.appspot.com",
  messagingSenderId: "436767026744",
  appId: "1:436767026744:web:44edadad00bbec677000cd",
  measurementId: "G-8M3YMFH3LJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// export default db;
