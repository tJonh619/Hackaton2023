// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Modulos y funciones agregadas
import {getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxW_VS-XmbrLctDE6bSkEJtX3RaS3DURE",
  authDomain: "tienda-kofuku.firebaseapp.com",
  projectId: "tienda-kofuku",
  storageBucket: "tienda-kofuku.appspot.com",
  messagingSenderId: "558905475001",
  appId: "1:558905475001:web:aa9d2f9aae696507f94068",
  measurementId: "G-S61RPWFZVJ"
};

// Inicializar firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)