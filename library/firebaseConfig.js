import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import{getAuth, GoogleAuthProvider} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsGlLQeDoHefzJgJcGJXhnHf5XB0dp99o",
    authDomain: "fitnessjourney-873e2.firebaseapp.com",
    projectId: "fitnessjourney-873e2",
    storageBucket: "fitnessjourney-873e2.appspot.com",
    messagingSenderId: "893940730026",
    appId: "1:893940730026:web:4f1bedebffd65a7eea28d3"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app;
