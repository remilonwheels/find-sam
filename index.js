'use strict';
var userSignIn = document.getElementById('UserSignIn');
userSignIn.addEventListener('submit', SignIn);
var scoreArray = [];
var button = document.getElementById('button');


function SignIn(event) {
  event.preventDefault();
  var userName = event.target.UserName.value;
  if(userName.length < 1) {
    alert('Sorry, write a name!!!');
    window.location.href='index.html';
  } else {
    console.log(userName);
    new Score(userName);
    localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
    window.location.href='game.html';
  }
  if (localStorage.scoreArray) {
    scoreArray = JSON.parse(localStorage.scoreArray);
  } else {
    new Score(userName);
  }
}

function Score (userName) {
  this.userName = userName;
  this.score = 0;
  scoreArray.push(this);
}

if (localStorage.scoreArray) {
  scoreArray = JSON.parse(localStorage.scoreArray);
} else {
  new Score(userName);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
