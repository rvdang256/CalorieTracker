import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import{getAuth, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "X",
    authDomain: "X",
    projectId: "X",
    storageBucket: "X",
    messagingSenderId: "X",
    appId: "X",
    measurementId: "X"
    };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app;
