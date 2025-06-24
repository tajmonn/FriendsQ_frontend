import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDVMKGMondX9Aw1Yg4c6yA-IgkT85z8yC8",
    authDomain: "friendsq-bbf83.firebaseapp.com",
    projectId: "friendsq-bbf83",
    storageBucket: "friendsq-bbf83.firebasestorage.app",
    messagingSenderId: "232135573958",
    appId: "1:232135573958:web:1977fa60595c9592e0f2c7",
    measurementId: "G-CKNBY1SM7W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
