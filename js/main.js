/****************** Mobile Menu ******************/

// Getting the elements for the menu
var hamMenu = document.querySelector(".hamburger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
var navLinks = document.querySelector(".mobile-menu").querySelectorAll(".link");
var logInEl = document
  .querySelector(".mobile-menu")
  .querySelector(".login-btn");
var signUpEl = document
  .querySelector(".mobile-menu")
  .querySelector(".signup-btn");

var i;

// Adding event listeners to the elements
hamMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

// Adding event listeners on the nav links to remove the "active" class when the nav links are click

// Looping through the Mobile Nav Links
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
}

// Login
logInEl.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});

// Signup
signUpEl.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});

/****************** Jumbo Video ******************/

// Getting the elements for the video
var playBtn = document.querySelector(".play-btn");
var videoBox = document.querySelector(".video-box");
var exitBox = document.querySelector(".exit-box");

// Hidden the elements

videoBox.style.visibility = "hidden";
videoBox.style.opacity = "0";
exitBox.style.visibility = "hidden";
exitBox.style.opacity = "0";

// Making them visible uppon clicking on the play button

playBtn.onclick = function () {
  videoBox.innerHTML = `

		<video class ="video-player" autoplay controls poster = "img/promo-video-poster.png">
		<source src="video/promo-video.mp4" type="video/mp4">
		<source src="video/promo-video.webm" type="video/webm">

		This browser does not support HTML5 Video.

		</video>

		<div class="video-box-gradient"></div>

		`;

  exitBox.innerHTML = `x`;

  videoBox.style.visibility = "visible";
  videoBox.style.opacity = "1";
  exitBox.style.visibility = "visible";
  exitBox.style.opacity = "1";
};

// The exit X to exit the video when finished watching it

exitBox.onclick = function () {
  videoBox.innerHTML = ``;

  exitBox.innerHTML = ``;

  videoBox.style.visibility = "hidden";
  videoBox.style.opacity = "0";
  exitBox.style.visibility = "hidden";
  exitBox.style.opacity = "0";
};

/****************** Slider Review ******************/
// Getting the elements
var sliderBtnLeft = document.querySelectorAll(".slider-btn-left");
var sliderBtnRight = document.querySelectorAll(".slider-btn-right");

var slide_index = 1;

displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function currentSlide(n) {
  displaySlides((slide_index = n));
}

function displaySlides(n) {
  var i;
  var slider = document
    .querySelector(".slider-container")
    .querySelectorAll(".box");
  if (n > slider.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.visibility = "hidden";
    slider[i].style.opacity = "0";
  }
  slider[slide_index - 1].style.visibility = "visible";
  slider[slide_index - 1].style.opacity = "1";
}
