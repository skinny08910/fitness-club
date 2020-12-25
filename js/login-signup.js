/****************** Login and Signup Form ******************/

// Getting the elements for the forms

var togLogInEl = document.querySelector(".toggle-login");
var togSignUpEl = document.querySelector(".toggle-signup");
var logInEl = document.querySelector(".login");
var signUpEl = document.querySelector(".signup");
var loginInputEl = document.querySelectorAll(".login-input");
var signupInputEl = document.querySelectorAll(".signup-input");
var loginBtn = document.querySelector(".login-form-btn");
var signupBtn = document.querySelector(".signup-form-btn");

var i;
var a;

// Adding events listeners to the toggle login and sign up btn

// Looping through the input fields

// Loop for Login input fields

for (var i = 0; i < loginInputEl.length; i++) {
	loginInputEl[i].addEventListener("click", function () {
		togLogInEl.style.backgroundColor = "rgba(0, 255, 0, .9)"
		togSignUpEl.style.backgroundColor = ""
		logInEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
		signUpEl.style.backgroundColor = "";
	})
}

// Loop for Signup input fields

for (var a = 0; a < signupInputEl.length; a++) {
	signupInputEl[a].addEventListener("click", function () {
		togSignUpEl.style.backgroundColor = "rgba(0, 255, 0, .9)"
		togLogInEl.style.backgroundColor = ""
		signUpEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
		logInEl.style.backgroundColor = "";
	})
}

// Toggle Login Element
togLogInEl.addEventListener("click", function () {
	togLogInEl.style.backgroundColor = "rgba(0, 255, 0, .9)"
	togSignUpEl.style.backgroundColor = ""
	logInEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
	signUpEl.style.backgroundColor = "";
});

// Login Button

loginBtn.addEventListener("click", function () {
	togLogInEl.style.backgroundColor = "rgba(0, 255, 0, .9)"
	togSignUpEl.style.backgroundColor = ""
	logInEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
	signUpEl.style.backgroundColor = "";
});

// Toggle Signup Element

togSignUpEl.addEventListener("click", function () {
	togSignUpEl.style.backgroundColor = "rgba(0, 255, 0, .9)"
	togLogInEl.style.backgroundColor = ""
	signUpEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
	logInEl.style.backgroundColor = "";
});

// Signup Button

signupBtn.addEventListener("click", function () {
	togSignUpEl.style.backgroundColor = "rgba(0, 255, 0, .9)"
	togLogInEl.style.backgroundColor = ""
	signUpEl.style.backgroundColor = "rgba(0, 255, 0, .7)";
	logInEl.style.backgroundColor = "";
});