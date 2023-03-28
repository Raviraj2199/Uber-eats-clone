import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBipolqwAQvljulz_oa1ADYLAoL-GqPfjY",
    authDomain: "uber-eats-clone-9ccdd.firebaseapp.com",
    projectId: "uber-eats-clone-9ccdd",
    storageBucket: "uber-eats-clone-9ccdd.appspot.com",
    messagingSenderId: "992836055748",
    appId: "1:992836055748:web:c1159f7a10ca67b83bcf91"
};


// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// });

//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();