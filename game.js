'use strict';

var charImgTopLeft = document.getElementById('char-img-top-left');
var charImgTopRight = document.getElementById('char-img-top-right');
var charImgBtmLeft = document.getElementById('char-img-btm-left');
var charImgBtmRight = document.getElementById('char-img-btm-right');
var showHideTime = 1000;

function renderPosition(position, timeToShow, timeToHide) {
  console.log('entering render position');
  window.setTimeout(function(){
    position.style.display = 'inline-block';
  }, timeToHide);
  window.setTimeout(function(){
    position.style.display = 'none';
  }, timeToShow);
}

var positionArray = [charImgTopLeft, charImgTopRight, charImgBtmLeft, charImgTopLeft, charImgBtmRight, charImgBtmRight]

for (var i = 0; i < positionArray.length; i++){
  // renderPosition(positionArray[i], test * (i+1), test * (i));
  // window.setTimeout(function(){
  //   renderPosition(positionArray[i], test * (i+1), test * (i));
  // }, test * (i+1));
  renderPosition(positionArray[i], showHideTime * (i + 1), showHideTime * i);
}
