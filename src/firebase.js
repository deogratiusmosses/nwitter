import firebase from "firebase/compat/app";
import "firebase/compat/auth";


import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
}

const initializeAppIfNecessary = () => {
  try {
    return getApp()
  } catch {
    return firebase.initializeApp(firebaseConfig)
  }
}
let app = initializeAppIfNecessary()

export const clientAuth = getAuth(app)

/* export const Db = firebase.firestore() */