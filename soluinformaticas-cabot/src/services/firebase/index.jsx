import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCUgpmYZ-yuNPm8nqBW-kdgv_7auW1Ixpc",
    authDomain: "soluinformaticas-acabot.firebaseapp.com",
    projectId: "soluinformaticas-acabot",
    storageBucket: "soluinformaticas-acabot.appspot.com",
    messagingSenderId: "627796013600",
    appId: "1:627796013600:web:2f99290a42e29382a9c245"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 
