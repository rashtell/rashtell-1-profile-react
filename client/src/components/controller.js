//w3-black
//w3-hover-black
//menuHome menuAbout menuPhotos menuContact

// var  menuHome = document.getElementById('menuHome');
// var menuAbout = document.getElementById('menuAbout');
// var menuPhotos = document.getElementById('menuPhotos');
// var menuContact = document.getElementById('menuContact');

document.getElementById("menuImage").onclick = function () {
  document.getElementsByClassName(
    "w3-bar-item w3-button w3-padding-large w3-black"
  )[0].className = "w3-bar-item w3-button w3-padding-large w3-hover-black";

  document.getElementById("menuHome").className =
    "w3-bar-item w3-button w3-padding-large w3-black";
};

document.getElementById("menuHome").onclick = function () {
  document.getElementsByClassName(
    "w3-bar-item w3-button w3-padding-large w3-black"
  )[0].className = "w3-bar-item w3-button w3-padding-large w3-hover-black";

  document.getElementById("menuHome").className =
    "w3-bar-item w3-button w3-padding-large w3-black";
  // document.getElementById("menuAbout").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  // document.getElementById("menuPhotos").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  // document.getElementById("menuContact").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
};

document.getElementById("menuAbout").onclick = function () {
  document.getElementsByClassName(
    "w3-bar-item w3-button w3-padding-large w3-black"
  )[0].className = "w3-bar-item w3-button w3-padding-large w3-hover-black";

  // document.getElementById("menuHome").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  document.getElementById("menuAbout").className =
    "w3-bar-item w3-button w3-padding-large w3-black";
  // document.getElementById("menuPhotos").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  // document.getElementById("menuContact").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
};

document.getElementById("menuPhotos").onclick = function () {
  document.getElementsByClassName(
    "w3-bar-item w3-button w3-padding-large w3-black"
  )[0].className = "w3-bar-item w3-button w3-padding-large w3-hover-black";

  // document.getElementById("menuHome").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  // document.getElementById("menuAbout").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  document.getElementById("menuPhotos").className =
    "w3-bar-item w3-button w3-padding-large w3-black";
  // document.getElementById("menuContact").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
};

document.getElementById("menuContact").onclick = function () {
  document.getElementsByClassName(
    "w3-bar-item w3-button w3-padding-large w3-black"
  )[0].className = "w3-bar-item w3-button w3-padding-large w3-hover-black";

  // document.getElementById("menuHome").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  // document.getElementById("menuAbout").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  // document.getElementById("menuPhotos").className = "w3-bar-item w3-button w3-padding-large w3-hover-black";
  document.getElementById("menuContact").className =
    "w3-bar-item w3-button w3-padding-large w3-black";
};
