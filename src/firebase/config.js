// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANbMiuaBaM27UFcYI_-e6lImlLWy-vYVQ",
  authDomain: "react-app-186b0.firebaseapp.com",
  projectId: "react-app-186b0",
  storageBucket: "react-app-186b0.appspot.com",
  messagingSenderId: "287538981458",
  appId: "1:287538981458:web:355251acf0cec59a80cd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}