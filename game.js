'use strict';

var charImgTopLeft = document.getElementById('char-img-top-left');
var charImgTopRight = document.getElementById('char-img-top-right');
var charImgBtmLeft = document.getElementById('char-img-btm-left');
var charImgBtmRight = document.getElementById('char-img-btm-right');
var gameboard = document.getElementById('gameboard');
var roundHeader = document.getElementById('round-header');
var clicksInRound = document.getElementById('clicks-in-round');

var playAgainButton = document.getElementById('play-again-button');
var userScore;
var winGameFlag = false;
var firstGameFlag = true;

var scoreArray = retrieveLocalStorage(localStorage.scoreArray);

var clickCount = 0;
var round = 1;
var positionArray = [];
var roundsToWin = 3;

function Score (userName, score) {
  this.userName = userName;
  this.score = score;
  scoreArray.push(this);
}

function storeLocalStorage() {
  localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
}

function retrieveLocalStorage(jsonArgument) {
  return JSON.parse(jsonArgument);
}

function playRound(){
  roundHeader.textContent = round;
  clicksInRound.textContent = round - clickCount;

  var randomPosition = getRandomPosition();
  if (randomPosition === 0){
    positionArray.push(charImgTopLeft);
  }
  if (randomPosition === 1){
    positionArray.push(charImgTopRight);
  }
  if (randomPosition === 2){
    positionArray.push(charImgBtmLeft);
  }
  if (randomPosition === 3){
    positionArray.push(charImgBtmRight);
  }
  renderPositionArray(positionArray, 300, 150);
  gameboard.addEventListener('click', handleUserClick);
}

function getRandomPosition() {
  var min = Math.ceil(0);
  var max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderPosition(position, timeToShow, timeToHide) {
  window.setTimeout(function(){
    position.style.display = 'inline-block';
  }, timeToHide);
  window.setTimeout(function(){
    position.style.display = 'none';
  }, timeToShow);
}

function renderPositionArray(array, showTime, hideTime){
  for (var i = 0; i < array.length; i++){
    renderPosition(array[i], (showTime * (i + 1)) + (hideTime * i), (showTime + hideTime) * i);
  }
}

function handleUserClick(event) {
  event.preventDefault();

  console.log(event.target);

  var userSelection;

  if (event.target.id === 'img-top-left') {
    userSelection = 'char-img-top-left';
  }
  if (event.target.id === 'img-top-right') {
    userSelection = 'char-img-top-right';
  }
  if (event.target.id === 'img-btm-left') {
    userSelection = 'char-img-btm-left';
  }
  if (event.target.id === 'img-btm-right') {
    userSelection = 'char-img-btm-right';
  }

  if (userSelection === positionArray[clickCount].id) {
    clickCount += 1;
    clicksInRound.textContent = round - clickCount;

  } else {
    loseGame();
  }

  if (clickCount === positionArray.length) {
    if (round === roundsToWin) {
      winGame();
    }
    round += 1;
    console.log('round: ' + round);
    clickCount = 0;
    console.log('user win');

    if (!winGameFlag) {
      playRound();
    }
  }

  console.log(clickCount);
}

function loseGame() {
  gameboard.removeEventListener('click', handleUserClick);
  playAgainButton.textContent = 'Play Again';
  playAgainButton.style.display = 'block';
  playAgainButton.addEventListener('click', playGame);

  userScore = round - 1;
  updateUserScore();
}

function winGame() {
  gameboard.removeEventListener('click', handleUserClick);
  playAgainButton.textContent = 'Play Again';
  playAgainButton.style.display = 'block';
  playAgainButton.addEventListener('click', playGame);

  winGameFlag = true;
  userScore = round;
  updateUserScore();

  return;
}

function updateUserScore() {
  if (firstGameFlag) {
    scoreArray[scoreArray.length - 1].score = userScore;
    localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
    firstGameFlag = false;
  } else {
    new Score(scoreArray[scoreArray.length - 1].userName, userScore);
    localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
  }
}

function playGame(){
  winGameFlag = false;
  clickCount = 0;
  round = 1;
  positionArray = [];

  playRound();

  playAgainButton.style.display = 'none';
}

//Function Calls
playAgainButton.addEventListener('click', playGame);
