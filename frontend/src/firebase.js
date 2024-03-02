// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEHnTrhixqv2U3afK8-SH0E21ppDon4ZA",
  authDomain: "upload-images-c99c6.firebaseapp.com",
  projectId: "upload-images-c99c6",
  storageBucket: "upload-images-c99c6.appspot.com",
  messagingSenderId: "636494017951",
  appId: "1:636494017951:web:a7d74691bf525c1d80f9aa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp); // Initialize storage

export { firebaseApp, storage };