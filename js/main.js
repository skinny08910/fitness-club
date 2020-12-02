// Video

var playBtn = document.querySelector(".play-btn");
var videoBox = document.querySelector(".video-box");
var exitBox = document.querySelector(".exit-box");

playBtn.onclick = function () {
	videoBox.classList.add("active");
}

exitBox.onclick = function () {
	videoBox.classList.remove("active");
}