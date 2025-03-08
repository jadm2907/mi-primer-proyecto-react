import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABCDEFGHIJKLMNOPQRSTUVWXYZ12345678",
  authDomain: "primerreact.firebaseapp.com",
  projectId: "primerreact-917b4",
  storageBucket: "primerreact.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);