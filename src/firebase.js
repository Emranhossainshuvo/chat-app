import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA_svS5LZVeTwhUlRHtDBXa7ooiJ31s86U",
  authDomain: "talks-chat-e3f5c.firebaseapp.com",
  projectId: "talks-chat-e3f5c",
  storageBucket: "talks-chat-e3f5c.appspot.com",
  messagingSenderId: "497123649328",
  appId: "1:497123649328:web:122131c42e312a4aec0af5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(); 
