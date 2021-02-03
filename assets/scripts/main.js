// main.js

var num = document.getElementById("volume-number");
var slide = document.getElementById("volume-slider");
var icon = document.getElementById("volume-image");
var form = document.getElementById("party-horn-form");
var sound = document.getElementById("horn-sound");
var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");
var big = document.getElementById("sound-image");
var honk = document.getElementById("honk-btn");

// change slider value to match number input
num.addEventListener("input", function() {
  slide.value = num.value;
  changeVolume();
  if(num.value == 0) {
    honk.disabled = true;
  } else honk.disabled = false;
});

// change number input to match slider
slide.addEventListener("input",function() {
  num.value = slide.value;
  changeVolume();
  if(num.value == 0) {
    honk.disabled = true;
  } else honk.disabled = false;
});

// change volume icon
function changeVolume(){
  let vol = num.value;

  if(vol < 1) {
    icon.src = "./assets/media/icons/volume-level-0.svg";
  } else if(vol < 34) {
    icon.src = "./assets/media/icons/volume-level-1.svg";
  } else if(vol < 67) {
    icon.src = "./assets/media/icons/volume-level-2.svg";
  } else {
    icon.src = "./assets/media/icons/volume-level-3.svg";
  }
}

// change sound option to air horn
air.addEventListener("click", function() {
  sound.src = "./assets/media/audio/air-horn.mp3";
  big.src = "./assets/media/images/air-horn.svg";
});

// change sound option to car horn
car.addEventListener("click", function() {
  sound.src = "./assets/media/audio/car-horn.mp3";
  big.src = "./assets/media/images/car.svg";
});

// change sound option to party horn
party.addEventListener("click", function() {
  sound.src = "./assets/media/audio/party-horn.mp3";
  big.src = "./assets/media/images/party-horn.svg";
});

// play sound
form.addEventListener("submit", function() {
  event.preventDefault()
  sound.volume = num.value / 100;
  sound.play();
});


