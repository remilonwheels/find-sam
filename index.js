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
