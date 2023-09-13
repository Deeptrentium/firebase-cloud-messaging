import { initializeApp } from 'firebase/app'

// Optionally import the services that you want to use
import { getAuth } from 'firebase/auth'
import { getMessaging, onMessage } from 'firebase/messaging'

// Initialize Firebase
const firebaseConfig = {
  apiKey: '{apiKey}',
  authDomain: '{authDomain}',
  projectId: '{projectId}',
  storageBucket: '{storageBucket}',
  messagingSenderId: '{messagingSenderId}',
  appId: '{appId}',
}

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
export const messaging = getMessaging(firebaseApp)
