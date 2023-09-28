const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

//Esto es de firebase

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js";

//esto es el sign up

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const semail = signUpForm["signup-email"].value;
  const spassword = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, semail, spassword)
    console.log(userCredential);
    window.location.href = "/index.html";

    // reset the form
    signUpForm.reset();

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("El correo ya esta en uso", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Correo invalido", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Contraseña demasiado corta", "error")
    } else if (error.code) {
      showMessage("Ups! Parece que algo ha fallado", "error")
    }
  }
});

//este es el log in
const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const lemail = signInForm["login-email"].value;
  const lpassword = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, lemail, lpassword)
    console.log(userCredentials)
    window.location.href = "/index.html";

    // reset the form
    signInForm.reset();

  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Contraseña incorrecta", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("El usuario o correo no esta registrado", "error")
    } else {
      showMessage("Ups! Parece que algo ha fallado", "error")
    }
  }
});