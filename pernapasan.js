let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// script.js

// Fungsi untuk menggulir ke bagian yang sesuai dengan ID
function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
  