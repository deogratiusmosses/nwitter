import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
} */

/* const firebaseConfig = {
  apiKey: 'AIzaSyDjPcSqVpSeRUfFsr6tRfz6pbhJ3aBaf2M',
  authDomain: 'nwitter-7e6bc.firebaseapp.com',
  projectId: 'nwitter-7e6bc',
  storageBucket: 'nwitter-7e6bc.appspot.com',
  messagingSenderId: '208296100294',
  appId: '1:208296100294:web:d9bf17dcf99717d1e872c7',
  measurementId: 'G-BXN2M6GRR7',
}
 */


const firebaseConfig = {
  apiKey: "AIzaSyCL21rL2n4GYCcDgXde1Sqrgyell_8KrDI",
  authDomain: "nwitter-188d0.firebaseapp.com",
  projectId: "nwitter-188d0",
  storageBucket: "nwitter-188d0.appspot.com",
  messagingSenderId: "137491118180",
  appId: "1:137491118180:web:bf99ed46b397f90c8fc771",
  measurementId: "G-EG32PRQHN5"
};

const initializeAppIfNecessary = () => {
  try {
    return getApp()
  } catch {
    return firebase.initializeApp(firebaseConfig)
  }
}
let app = initializeAppIfNecessary()

export const clientAuth = getAuth(app)
export const firebaseInstance = firebase

export const dbService = firebase.firestore()
export const storageService =firebase.storage()

/* */