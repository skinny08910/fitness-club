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
}

// The exit X to exit the video when finished watching it

exitBox.onclick = function () {
	videoBox.innerHTML = ``;

	exitBox.innerHTML = ``;

	videoBox.style.visibility = "hidden";
	videoBox.style.opacity = "0";
	exitBox.style.visibility = "hidden";
	exitBox.style.opacity = "0";
}

/****************** Slider Review ******************/
// Getting the elements
var sliderBtnLeft = document.querySelectorAll(".slider-btn-left");
var sliderBtnRight = document.querySelectorAll(".slider-btn-right");

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
	displaySlides(slide_index += n);
}

function currentSlide(n) {
	displaySlides(slide_index = n);
}

function displaySlides(n) {
	var i;
	var slider = document.querySelector(".slider-container")
		.querySelectorAll(".box");
	if (n > slider.length) {
		slide_index = 1
	}
	if (n < 1) {
		slide_index = slider.length
	}
	for (i = 0; i < slider.length; i++) {
		slider[i].style.visibility = "hidden";
		slider[i].style.opacity = "0";

	}
	slider[slide_index - 1].style.visibility = "visible";
	slider[slide_index - 1].style.opacity = "1";

}

/****************** Form Validation ******************/

// Element
var input = document.querySelectorAll('input');
var txtarea = document.querySelector('textarea');
var inputContainer = document.querySelectorAll('.input-container');
var txtareaContainer = document.querySelector('.textarea-container');

// Adding event listener to the elements
// First Name

// input[0].addEventListener("focusin", function () {
// 	inputContainer[0].style.border = "1px solid #303030";
// });
//
// input[0].addEventListener("focusout", function () {
// 	inputContainer[0].style.border = "";
// });

// Last Name
// input[1].addEventListener("focusin", function () {
// 	inputContainer[1].style.border = "1px solid #303030";
// });
//
// input[1].addEventListener("focusout", function () {
// 	inputContainer[1].style.border = "";
// });

// Phone Number
// input[2].addEventListener("focusin", function () {
// 	inputContainer[2].style.border = "1px solid #303030";
// });
//
// input[2].addEventListener("focusout", function () {
// 	inputContainer[2].style.border = "";
// });

// Company Name
// input[3].addEventListener("focusin", function () {
// 	inputContainer[3].style.border = "1px solid #303030";
// });
//
// input[3].addEventListener("focusout", function () {
// 	inputContainer[3].style.border = "";
// });

// Email Address
// input[4].addEventListener("focusin", function () {
// 	inputContainer[4].style.border = "1px solid #303030";
// });
//
// input[4].addEventListener("focusout", function () {
// 	inputContainer[4].style.border = "";
// });

// Textarea
// txtarea.addEventListener("focusin", function () {
// 	txtareaContainer.style.border = "1px solid #303030";
// });
//
// txtarea.addEventListener("focusout", function () {
// 	txtareaContainer.style.border = "";
// });