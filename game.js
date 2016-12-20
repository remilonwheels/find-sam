'use strict';

var charImgTopLeft = document.getElementById('char-img-top-left');
var charImgTopRight = document.getElementById('char-img-top-right');
var charImgBtmLeft = document.getElementById('char-img-btm-left');
var charImgBtmRight = document.getElementById('char-img-btm-right');

var positionArray = [charImgTopLeft, charImgTopRight, charImgBtmLeft, charImgTopLeft, charImgBtmRight, charImgBtmRight];

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

renderPositionArray(positionArray, 500, 250);


var gameboard = document.getElementById('gameboard');
var clickCount = 0;

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

  } else {
    console.log('user lose');
    //write userLose() function
    clickCount = 0;
  }

  if (clickCount === positionArray.length - 1) {
    return console.log('user win');
    //write userWin() function
    return userWin();
  }
  clickCount += 1;
  console.log(clickCount);
}

gameboard.addEventListener('click', handleUserClick);
