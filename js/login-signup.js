/****************** Mobile Menu ******************/

// Getting the elements for the menu
var hamMenu = document.querySelector(".hamburger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
var navLinks = document.querySelector(".mobile-menu").querySelectorAll(".link");

// Adding event listeners to the elements
hamMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

/****************** Login and Signup Form ******************/

// Getting the elements for the forms

var togLogInEl = document.querySelector(".toggle-login");
var togSignUpEl = document.querySelector(".toggle-signup");
var logInEl = document.querySelector(".login");
var signUpEl = document.querySelector(".signup");
var loginInputEl = document.querySelectorAll(".login-input");
var signupInputEl = document.querySelectorAll(".signup-input");
var loginFormBtn = document.querySelector(".login-form-btn");
var signupFormBtn = document.querySelector(".signup-form-btn");
var loginNavBtn = document.querySelector(".login-btn");
var signupNavBtn = document.querySelector(".signup-btn");

var i;
var a;

// Adding events listeners to the toggle login and sign up btn

// Looping through the input fields

// Loop for Login input fields

for (var i = 0; i < loginInputEl.length; i++) {
  loginInputEl[i].addEventListener("click", function () {
    togLogInEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
    togSignUpEl.style.backgroundColor = "";
    logInEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
    signUpEl.style.backgroundColor = "";
  });
}

// Loop for Signup input fields

for (var a = 0; a < signupInputEl.length; a++) {
  signupInputEl[a].addEventListener("click", function () {
    togSignUpEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
    togLogInEl.style.backgroundColor = "";
    signUpEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
    logInEl.style.backgroundColor = "";
  });
}

// Toggle Login Element
togLogInEl.addEventListener("click", function () {
  togLogInEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
  togSignUpEl.style.backgroundColor = "";
  logInEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
  signUpEl.style.backgroundColor = "";
});

// Login Form Button

loginFormBtn.addEventListener("click", function () {
  togLogInEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
  togSignUpEl.style.backgroundColor = "";
  logInEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
  signUpEl.style.backgroundColor = "";
});

// Toggle Signup Element

togSignUpEl.addEventListener("click", function () {
  togSignUpEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
  togLogInEl.style.backgroundColor = "";
  signUpEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
  logInEl.style.backgroundColor = "";
});

// Signup Form Button

signupFormBtn.addEventListener("click", function () {
  togSignUpEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
  togLogInEl.style.backgroundColor = "";
  signUpEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
  logInEl.style.backgroundColor = "";
});

/****************** Login and Signup Nav ******************/

// Login Nav Button

loginNavBtn.addEventListener("click", function () {
  togLogInEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
  togSignUpEl.style.backgroundColor = "";
  logInEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
  signUpEl.style.backgroundColor = "";

  loginInputEl[0].focus();
});

// Signup Nav Button

signupNavBtn.addEventListener("click", function () {
  togSignUpEl.style.backgroundColor = "rgba(0, 255, 0, .9)";
  togLogInEl.style.backgroundColor = "";
  signUpEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
  logInEl.style.backgroundColor = "";

  signupInputEl[0].focus();
});
