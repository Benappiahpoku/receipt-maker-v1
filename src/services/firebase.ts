// ===== File-Level Documentation =====
// Initializes Firebase app and exports Firestore instance.
// Uses environment variables for secure configuration.
// - Required env vars are validated on startup
// - Throws helpful errors if config is missing
// - Safe for production deployment

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// ===== Validation =====
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
] as const

// Check for missing environment variables
requiredEnvVars.forEach(varName => {
  if (!import.meta.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`)
  }
})

// ===== Firebase Configuration =====
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// ===== Firebase Initialization =====
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)