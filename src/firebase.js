// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ThpusZd0mUXFRY8YyCzxkYAxASI_mDU",
  authDomain: "chat-app-31bb8.firebaseapp.com",
  databaseURL: "https://chat-app-31bb8-default-rtdb.firebaseio.com",
  projectId: "chat-app-31bb8",
  storageBucket: "chat-app-31bb8.appspot.com",
  messagingSenderId: "297005362846",
  appId: "1:297005362846:web:73e87939c1a9591a9b558f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()