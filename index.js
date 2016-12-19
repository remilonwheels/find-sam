'use strict';
var userSignIn = document.getElementById('UserSignIn');
userSignIn.addEventListener('submit', SignIn);
var scoreArray = [];

function SignIn(event) {
  event.preventDefault();
  var userName = event.target.UserName.value;
  console.log(userName);
  new Score(userName);
  localStorage.setItem('Score', JSON.stringify(scoreArray));
}

function Score (userName) {
  this.userName = userName;
  this.score = 0;
  scoreArray.push(this);
}
