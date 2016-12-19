'use strict';
var userSignIn = document.getElementById('UserSignIn');
userSignIn.addEventListener('submit', SignIn);

function SignIn(event) {
  event.preventDefault();
  var userName = event.target.UserName.value;
  console.log(userName);
}
