'use strict';

var charImgTopLeft = document.getElementById('char-img-top-left');
var charImgTopRight = document.getElementById('char-img-top-right');
var charImgBtmLeft = document.getElementById('char-img-btm-left');
var charImgBtmRight = document.getElementById('char-img-btm-right');
var gameboard = document.getElementById('gameboard');
var roundHeader = document.getElementById('round-header');
var scoreHeader = document.getElementById('score-header');
var clicksInRound = document.getElementById('clicks-in-round');
var winLoseHeader = document.getElementById('win-lose-header');
var playAgainButton = document.getElementById('play-again-button');
var playNewUserButton = document.getElementById('play-new-user-button');
var topControl = document.getElementById('top-control');
var midControl = document.getElementById('mid-control');
var btmControl = document.getElementById('btm-control');

var userScore;
var winGameFlag = false;
var firstGameFlag = true;
var scoreArray = [];

var clickCount = 0;
var round = 1;
var positionArray = [];
var roundsToWin = 15;

function Score (userName, score) {
  this.userName = userName;
  this.score = score;
  scoreArray.push(this);
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

  //delay bind until render is complete
  window.setTimeout(function() {
    gameboard.addEventListener('click', handleUserClick);
  }, positionArray.length * (300 + 150));
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

    event.target.style.backgroundColor = 'rgba(0,255,0, .3)';
    window.setTimeout(function() {
      event.target.style.backgroundColor = 'transparent';
    }, 200);
    console.log(event.target.parentNode.childNodes);


  } else {
    event.target.style.backgroundColor = 'rgba(255, 0, 0, .3)';
    window.setTimeout(function() {
      event.target.style.backgroundColor = 'transparent';
    }, 200);
    loseGame();
  }

  if (clickCount === positionArray.length) {
    gameboard.removeEventListener('click', handleUserClick);
    if (round === roundsToWin) {
      winGame();
    }
    round += 1;
    console.log('round: ' + round);
    clickCount = 0;
    console.log('user win');

    if (!winGameFlag) {
      window.setTimeout(playRound, 500);
    }
  }

  console.log(clickCount);
}

function loseGame() {
  gameboard.removeEventListener('click', handleUserClick);
  playAgainButton.textContent = 'Play Again';
  playAgainButton.style.display = 'block';
  playAgainButton.addEventListener('click', playGame);

  playNewUserButton.style.display = 'block';
  playNewUserButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  //lose functionality
  var offElements = document.getElementsByClassName('game-over-off');
  for (var i = 0; i < offElements.length; i++) {
    offElements[i].style.display = 'none';
  }
  winLoseHeader.textContent = 'You Lose';
  scoreHeader.textContent = 'Score: ' + (round - 1);
  gameboard.style.backgroundColor = 'rgba(255, 0, 0, .3)';


  userScore = round - 1;
  updateUserScore();
}

function winGame() {
  gameboard.removeEventListener('click', handleUserClick);
  playAgainButton.textContent = 'Play Again';
  playAgainButton.style.display = 'block';
  playAgainButton.addEventListener('click', playGame);
  playNewUserButton.style.display = 'block';
  playNewUserButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  winGameFlag = true;
  userScore = round;
  updateUserScore();

  var offElements = document.getElementsByClassName('game-over-off');
  for (var i = 0; i < offElements.length; i++) {
    offElements[i].style.display = 'none';
  }
  winLoseHeader.textContent = 'You Win';
  scoreHeader.textContent = 'Score: ' + (round);
  gameboard.style.backgroundColor = 'rgba(0, 255, 0, .3)';

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
  var onElements = document.getElementsByClassName('game-over-off');
  for (var i = 0; i < onElements.length; i++) {
    onElements[i].style.display = 'block';
  }
  gameboard.style.backgroundColor = 'transparent';
  winLoseHeader.textContent = '';
  scoreHeader.textContent = '';
  winGameFlag = false;
  clickCount = 0;
  round = 1;
  positionArray = [];

  playRound();
  playAgainButton.style.display = 'none';
  playNewUserButton.style.display = 'none';
  // gameboard.addEventListener('mouseover', attachHover);
  // attachHover();
}

function attachHover() {
  charImgTopLeft.addEventListener('mouseover', borderHover);
  charImgTopRight.addEventListener('mouseover', borderHover);
  charImgBtmLeft.addEventListener('mouseover', borderHover);
  charImgBtmRight.addEventListener('mouseover', borderHover);
}

function borderHover(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log(event.target);
  event.target.style.border = '5px solid black';
}

function hideElement(element) {
  element.style.display = 'none';
}

function showElement(element) {
  element.style.display = 'block';
}

//Function Calls
if (localStorage.scoreArray) {
  scoreArray = JSON.parse(localStorage.scoreArray);
  if (scoreArray[scoreArray.length - 1].userName === 'win') {
    roundsToWin = 2;
  }
} else {
  new Score('user', 0);
}

playAgainButton.addEventListener('click', playGame);
