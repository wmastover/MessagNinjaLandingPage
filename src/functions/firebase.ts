import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB78Wj5cPff9GdU7KPB7fXvI5NfA7BKDxI",
    authDomain: "messageninja-5f315.firebaseapp.com",
    projectId: "messageninja-5f315",
    storageBucket: "messageninja-5f315.appspot.com",
    messagingSenderId: "207350695816",
    appId: "1:207350695816:web:49fddbb5cd70e3f2ab5c3d",
    measurementId: "G-8SQ6MFBG7B"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };