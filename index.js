'use strict';
var userSignIn = document.getElementById('UserSignIn');
userSignIn.addEventListener('submit', SignIn);
var scoreArray = [];
var button = document.getElementById('button');


// function takeToGame() {
//   location.href= 'game.html';
// }

function SignIn(event) {
  event.preventDefault();
  var userName = event.target.UserName.value;
  if(userName.length < 1) {
    alert('Sorry, write a name!!!');
    button.location.href= 'index.html';
  } else {
    console.log(userName);
    new Score(userName);
    localStorage.setItem('Score', JSON.stringify(scoreArray));
    button.onclick.innerHTML= 'game.html';
  }
}

function Score (userName) {
  this.userName = userName;
  this.score = 0;
  scoreArray.push(this);
}
