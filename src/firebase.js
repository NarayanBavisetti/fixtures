import firebase from "firebase"
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID 
  });


  export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
  export default firebase