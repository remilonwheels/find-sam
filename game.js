'use strict';

var charImgTopLeft = document.getElementById('char-img-top-left');
var charImgTopRight = document.getElementById('char-img-top-right');
var charImgBtmLeft = document.getElementById('char-img-btm-left');
var charImgBtmRight = document.getElementById('char-img-btm-right');
var gameboard = document.getElementById('gameboard');
var roundHeader = document.getElementById('round-header');
var clicksInRound = document.getElementById('clicks-in-round');
var nextRoundButton = document.getElementById('next-round-button');
var playAgainButton = document.getElementById('play-again-button');

var clickCount = 0;
var round = 1;
var positionArray = [];

function playRound(){
  nextRoundButton.style.display = 'none';
  roundHeader.textContent = 'Round ' + round;
  clicksInRound.textContent = 'Click Count: ' + clickCount + ' / ' + round;

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
  renderPositionArray(positionArray, 250, 150);
  gameboard.addEventListener('click', handleUserClick);
  nextRoundButton.addEventListener('click', playRound);
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
    clicksInRound.textContent = 'Click Count: ' + clickCount + ' / ' + round;

  } else {
    loseGame();
  }

  if (clickCount === positionArray.length) {
    round += 1;
    console.log('round: ' + round);
    clickCount = 0;
    console.log('user win');
    nextRoundButton.style.display = 'block';
    gameboard.removeEventListener('click', handleUserClick);
  }

  console.log(clickCount);
}

function loseGame() {
  nextRoundButton.removeEventListener('click', playRound);
  gameboard.removeEventListener('click', handleUserClick);
  playAgainButton.style.display = 'block';
  playAgainButton.addEventListener('click', playGame);
}

function playGame(){
  clickCount = 0;
  round = 1;
  positionArray = [];

  nextRoundButton.style.display = 'block';
  nextRoundButton.addEventListener('click', playRound);

  playAgainButton.style.display = 'none';
}

//Function Calls
playAgainButton.addEventListener('click', playGame);
nextRoundButton.addEventListener('click', playRound);
playGame();
